'use client';

import React, { useState } from 'react';
import { ArrowLeft, Check, User, Phone, CreditCard, Lock, ArrowRight, DollarSign, Globe } from 'lucide-react';
import Link from 'next/link';

// Header Component
function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-700">EasyTrust Bank</h1>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; 2024 EasyTrust Bank. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Comprehensive currency list
// Comprehensive currency list
const currencies = [
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr.' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Canada',
    currency: 'CAD',
    accountType: 'checking',
    password: '',
    confirmPassword: '',
  });

  const steps = [
    { id: 1, title: "Personal", icon: User },
    { id: 2, title: "Contact", icon: Phone },
    { id: 3, title: "Account", icon: CreditCard },
    { id: 4, title: "Security", icon: Lock },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      alert("✅ Account created successfully! (Demo only - No real data saved)");
      window.location.href = '/';
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 to-indigo-700 text-white rounded-3xl p-10 lg:p-14 flex flex-col">
            <div className="mb-12">
              <h1 className="text-4xl font-bold tracking-tight">Join EasyTrust Bank</h1>
              <p className="mt-4 text-blue-100 text-lg">
                Open your account in minutes and get $250 welcome bonus
              </p>
            </div>

            <div className="space-y-8 mt-auto">
              {[
                "High-yield savings up to 4.25% APY",
                "$250 Welcome Bonus on new checking account",
                "Free online & mobile banking",
                "24/7 customer support",
                "Multi-currency accounts supported",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <Check className="w-6 h-6 text-emerald-400 mt-0.5" />
                  <p className="text-blue-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl p-10 lg:p-14">
            
            {/* Progress Steps */}
            <div className="flex justify-between mb-12 relative">
              {steps.map((s, index) => {
                const Icon = s.icon;
                const isActive = s.id === step;
                const isCompleted = s.id < step;

                return (
                  <div key={index} className="flex flex-col items-center relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300
                      ${isActive ? 'bg-blue-600 border-blue-600 text-white scale-110' : 
                        isCompleted ? 'bg-emerald-500 border-emerald-500 text-white' : 
                        'border-gray-300 text-gray-400'}`}>
                      {isCompleted ? <Check size={24} /> : <Icon size={24} />}
                    </div>
                    <p className={`text-sm mt-3 font-medium ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                      {s.title}
                    </p>
                  </div>
                );
              })}
              <div className="absolute top-7 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300" 
                  style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                />
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                {step === 1 && "Personal Information"}
                {step === 2 && "Contact Details"}
                {step === 3 && "Account & Currency"}
                {step === 4 && "Security"}
              </h2>
            </div>

            <div className="space-y-8">
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street Address" className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  {/* Account Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Account Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div onClick={() => setFormData(prev => ({...prev, accountType: 'checking'}))} 
                        className={`border-2 rounded-3xl p-8 cursor-pointer transition-all ${formData.accountType === 'checking' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <p className="font-semibold text-xl">Checking Account</p>
                        <p className="text-emerald-600 mt-2">$250 Welcome Bonus</p>
                      </div>
                      <div onClick={() => setFormData(prev => ({...prev, accountType: 'savings'}))} 
                        className={`border-2 rounded-3xl p-8 cursor-pointer transition-all ${formData.accountType === 'savings' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <p className="font-semibold text-xl">Savings Account</p>
                        <p className="text-emerald-600 mt-2">Up to 4.25% APY</p>
                      </div>
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Country
                    </label>
                    <select name="country" value={formData.country} onChange={handleChange} className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500">
                      <option value="Canada">Canada</option>
                      <option value="France">France</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="Switzerland">Switzerland</option>
                    </select>
                  </div>

                  {/* Currency - All major currencies */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" /> Preferred Currency
                    </label>
                    <select name="currency" value={formData.currency} onChange={handleChange} className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500">
                      {currencies.map((curr) => (
                        <option key={curr.code} value={curr.code}>
                          {curr.symbol} {curr.code} — {curr.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-2">You can manage additional currencies later in your account settings.</p>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create Password" className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                </div>
              )}
            </div>

            <div className="flex gap-4 mt-12">
              {step > 1 && (
                <button onClick={prevStep} className="flex-1 py-5 border-2 border-gray-300 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition">
                  Back
                </button>
              )}
              <button onClick={nextStep} className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition">
                {step === totalSteps ? "Create My Account" : "Continue"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}