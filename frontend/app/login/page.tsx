// app/login/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Mail, Lock, Shield, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Footer from '../component/footer';
import FancyLoader from '../component/loading';
import { useRouter } from 'next/navigation';


interface LoginFormData {
  email: string;
  password: string;
}

interface LoginErrors {
  email?: string;
  password?: string;
  general?: string;
}

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const router = useRouter();
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode handler
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof LoginErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: LoginErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }); 
      const data = await res.json();

      if (!res.ok) {
        setErrors({ general: data.message || 'Login failed' });
        return;
      }
      // On successful login, you can store the token and redirect
      const { user } = data;
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/login/verify-pin'); // Redirect to PIN verification
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Header with Dark Mode Toggle */}


      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Sidebar - Benefits (Similar to Signup) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 to-indigo-700 dark:from-blue-800 dark:to-indigo-800 text-white rounded-3xl p-10 lg:p-14 flex flex-col">
            <div className="mb-12">
              <h1 className="text-4xl font-bold tracking-tight">Welcome Back</h1>
              <p className="mt-4 text-blue-100 text-lg">
                Sign in to access your accounts, transfer money, and manage your finances securely.
              </p>
            </div>

            <div className="space-y-8 mt-auto">
              {[
                "Secure 256-bit encryption",
                "Instant access to your accounts",
                "Real-time transaction alerts",
                "Multi-currency support",
                "24/7 dedicated support"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <Check className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Login Form */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-10 lg:p-14 border border-gray-100 dark:border-zinc-800">
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Sign In</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Enter your credentials to continue</p>
            </div>

            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-2xl">
                <p className="text-red-600 dark:text-red-400 text-sm">{errors.general}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-4 border rounded-2xl focus:outline-none focus:border-blue-500 transition text-gray-900 dark:text-white dark:bg-zinc-800 dark:border-zinc-700 placeholder-gray-400 dark:placeholder-zinc-500 ${
                      errors.email ? 'border-red-300' : 'border-gray-300 dark:border-zinc-700'
                    }`}
                    placeholder="Enter your email address"
                    disabled={isLoading}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-4 border rounded-2xl focus:outline-none focus:border-blue-500 transition text-gray-900 dark:text-white dark:bg-zinc-800 dark:border-zinc-700 placeholder-gray-400 dark:placeholder-zinc-500 ${
                      errors.password ? 'border-red-300' : 'border-gray-300 dark:border-zinc-700'
                    }`}
                    placeholder="Enter your password"
                    disabled={isLoading}
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
                {!isLoading && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                  Create one here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {isLoading && <FancyLoader fullScreen message="Signing in..." /> }
    </div>
  );
}