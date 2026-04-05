// app/contact/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Moon, Sun, X } from 'lucide-react';
import Header from '../component/header';
import Footer from '../component/footer';

export default function Contact() {
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

      {/* HERO SECTION - Updated with better description */}
      <section className="bg-gradient-to-br from-blue-950 to-indigo-950 dark:from-zinc-950 dark:to-zinc-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-2xl text-blue-100 dark:text-blue-200 max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to help. Whether you have questions about accounts, loans, or need support — 
            our friendly team is ready to assist you quickly and professionally.
          </p>
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

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Headquarters */}
            <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl p-10 hover:shadow-xl dark:hover:shadow-zinc-800/50 transition-all group">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                <MapPin className="w-9 h-9 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Headquarters</h3>
              <p className="font-medium text-blue-600 dark:text-blue-400 mb-4">🇨🇦 Montréal, Canada</p>
              <div className="text-gray-600 dark:text-gray-400 space-y-1">
                <p>129 Rue Saint-Jacques</p>
                <p>Montréal, QC H2Y 1L6</p>
                <p>Canada</p>
              </div>
            </div>

            {/* Branch Office */}
            <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl p-10 hover:shadow-xl dark:hover:shadow-zinc-800/50 transition-all group">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                <MapPin className="w-9 h-9 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Branch Office</h3>
              <p className="font-medium text-blue-600 dark:text-blue-400 mb-4">🇫🇷 Paris, France</p>
              <div className="text-gray-600 dark:text-gray-400 space-y-1">
                <p>17 Boulevard des Italiens</p>
                <p>75002 Paris</p>
                <p>France</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl p-10 hover:shadow-xl dark:hover:shadow-zinc-800/50 transition-all group lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone (24/7 Support)</p>
                    <p className="text-gray-600 dark:text-gray-400">+1 (514) 555-0123</p>
                    <p className="text-gray-600 dark:text-gray-400">+33 1 76 54 32 10</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:support@easytrustbank.demo" className="text-blue-600 dark:text-blue-400 hover:underline">
                      support@easytrustbank.demo
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Business Hours</p>
                    <p className="text-gray-600 dark:text-gray-400">Monday – Friday: 9:00 AM – 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Send Us a Message</h2>
            <p className="text-gray-600 dark:text-gray-400">We typically respond within 24 business hours</p>
          </div>

          <form className="bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-sm border border-gray-100 dark:border-zinc-800 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
              <textarea
                placeholder="Please describe your inquiry..."
                rows={7}
                className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-3xl px-6 py-4 focus:outline-none focus:border-blue-500 transition resize-none text-gray-900 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white py-5 rounded-3xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-95"
            >
              Send Message
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
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
              {registerStep === 1 && (
                <div className="space-y-6">
                  <input type="text" placeholder="Full Name" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white" />
                  <input type="email" placeholder="Email Address" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white" />
                  <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white" />
                </div>
              )}

              {registerStep === 2 && (
                <div className="space-y-6">
                  <input type="text" placeholder="Street Address" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 text-gray-900 dark:text-white" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 text-gray-900 dark:text-white" />
                    <input type="text" placeholder="Postal Code" className="border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 text-gray-900 dark:text-white" />
                  </div>
                  <select className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 text-gray-900 dark:text-white">
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
                  <input type="password" placeholder="Password" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 text-gray-900 dark:text-white" />
                  <input type="password" placeholder="Confirm Password" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 text-gray-900 dark:text-white" />
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
                className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white" 
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white" 
              />
              <button 
                onClick={fakeLoginSubmit} 
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold transition"
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