// app/about/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Shield, Users, Award, Heart, Moon, Sun, X } from 'lucide-react';
import Header from '../component/header';
import Footer from '../component/footer';

export default function About() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [registerStep, setRegisterStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode handler
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const nextStep = () => {
    if (registerStep < 4) {
      setRegisterStep(registerStep + 1);
    } else {
      alert("✅ Account created successfully! (Demo only - nothing is saved)");
      setShowRegister(false);
      setRegisterStep(1);
    }
  };

  const fakeLoginSubmit = () => {
    alert("✅ Welcome back to EasyTrust Bank! (Demo mode)");
    setShowLogin(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 font-sans transition-colors duration-300">
      {/* Header */}
      <Header 
        onLoginClick={() => setShowLogin(true)} 
        onRegisterClick={() => setShowRegister(true)} 
      />

      {/* HERO SECTION - Dark Mode Optimized */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-110 contrast-110"
          style={{
            backgroundImage: `url('/image4.webp')`,
          }}
        />
        
        {/* Stronger overlay that works in both modes */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/70 to-transparent dark:from-zinc-950/95 dark:via-zinc-950/80"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-white z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              About EasyTrust Bank
            </h1>
            <p className="mt-6 text-2xl text-blue-100 dark:text-blue-200">
              Building trust through exceptional banking since 2020
            </p>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-8 right-8 flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium transition-all"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </section>

      {/* Story Section */}
     <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-lg">

  {/* Header */}
  <div className="text-center max-w-2xl mx-auto mb-10">
    <h2 className="text-2xl md:text-3xl font-bold">
      By the Numbers
    </h2>
    <p className="text-blue-100 mt-2">
      Our growth reflects the trust our customers place in us
    </p>
  </div>

  {/* Stats */}
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

    {/* Stat */}
    <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        $2.5B
      </h2>
      <p className="text-blue-100 mt-2 text-sm">
        Assets Under Management
      </p>
    </div>

    {/* Stat */}
    <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        25
      </h2>
      <p className="text-blue-100 mt-2 text-sm">
        Branch Locations
      </p>
    </div>

    {/* Stat */}
    <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        99.9%
      </h2>
      <p className="text-blue-100 mt-2 text-sm">
        Uptime Guarantee
      </p>
    </div>

  </div>

</div>
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
            <p>
              EasyTrust Bank is a modern financial institution headquartered in Montréal, Canada, 
              with a branch in Paris, France. We are committed to providing secure, innovative, 
              and truly member-focused banking solutions.
            </p>
            <p>
              Our mission is simple: to make banking effortless, trustworthy, and rewarding for 
              individuals, families, and businesses across borders. We combine the best of digital 
              technology with the warmth of personal service.
            </p>
            <p>
              Founded in 2020, we have grown rapidly by putting our members first — not shareholders. 
              Every decision we make is guided by one question: 
              <span className="font-semibold text-gray-900 dark:text-white"> How does this help our members succeed?</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Security",
                desc: "Your financial security is our highest priority. We use advanced encryption and security protocols to protect your assets and data.",
                color: "blue"
              },
              {
                icon: Award,
                title: "Innovation",
                desc: "We continuously invest in the latest technology to deliver seamless, intuitive, and cutting-edge banking experiences.",
                color: "emerald"
              },
              {
                icon: Users,
                title: "Member First",
                desc: "As a member-owned institution, your success is our success. We exist to serve you, not the other way around.",
                color: "amber"
              },
              {
                icon: Heart,
                title: "Community Commitment",
                desc: "We actively support local communities and causes that matter most to our members in Canada and France.",
                color: "rose"
              },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div 
                  key={i}
                  className="bg-white dark:bg-zinc-900 rounded-3xl p-10 border border-gray-100 dark:border-zinc-800 hover:shadow-2xl dark:hover:shadow-zinc-800/50 transition-all hover:-translate-y-2 group"
                >
                  <div className={`w-20 h-20 rounded-3xl bg-${value.color}-100 dark:bg-${value.color}-950 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-11 h-11 text-${value.color}-600 dark:text-${value.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              To provide accessible, secure, and innovative banking solutions that empower our members 
              to achieve financial confidence and freedom — whether they are in Montréal, Paris, or anywhere in between.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              To become the most trusted digital banking partner for individuals and businesses across Canada and Europe by combining technology with genuine human care.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* REGISTER MODAL - Dark Mode Supported */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full overflow-hidden">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-zinc-700 px-8 py-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Open Your Account</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Step {registerStep} of 4</p>
              </div>
              <button 
                onClick={() => {setShowRegister(false); setRegisterStep(1);}} 
                className="text-3xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-8">
              {/* Your existing register steps remain the same */}
              {registerStep === 1 && (
                <div className="space-y-6">
                  <input type="text" placeholder="Full Name" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="email" placeholder="Email Address" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                </div>
              )}

              {registerStep === 2 && (
                <div className="space-y-6">
                  <input type="text" placeholder="Street Address" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4" />
                    <input type="text" placeholder="Postal Code" className="border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4" />
                  </div>
                  <select className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4">
                    <option>Canada</option>
                    <option>France</option>
                    <option>Other</option>
                  </select>
                </div>
              )}

              {registerStep === 3 && (
                <div className="space-y-6 text-center py-8">
                  <p className="text-lg text-gray-900 dark:text-white">Choose your account type</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="border-2 border-blue-600 text-blue-700 py-6 rounded-2xl font-medium">Checking</button>
                    <button className="border border-gray-300 dark:border-zinc-600 py-6 rounded-2xl dark:text-white">Savings</button>
                  </div>
                </div>
              )}

              {registerStep === 4 && (
                <div className="space-y-6">
                  <p className="text-center text-gray-900 dark:text-white">Create a secure password</p>
                  <input type="password" placeholder="Password" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4" />
                  <input type="password" placeholder="Confirm Password" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4" />
                </div>
              )}

              <button
                onClick={nextStep}
                className="mt-10 w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold text-lg transition"
              >
                {registerStep === 4 ? "Create My Account" : "Continue"}
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 dark:text-gray-400 pb-8">Demo only — No data is stored in MongoDB yet</p>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full p-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Welcome Back</h2>
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Email or Username" 
                className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" 
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" 
              />
              <button 
                onClick={fakeLoginSubmit} 
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold"
              >
                Sign In Securely
              </button>
            </div>
            <button 
              onClick={() => setShowLogin(false)} 
              className="mt-6 text-gray-500 dark:text-gray-400 underline w-full text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}