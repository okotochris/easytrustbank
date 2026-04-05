'use client';

import { useState, useEffect } from 'react';
import { Shield, X, CreditCard, PiggyBank, TrendingUp, Home, Car, GraduationCap, Moon, Sun } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function PersonalBanking() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [registerStep, setRegisterStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  // Simple dark mode toggle (you can connect this to Header later)
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
      {/* HEADER */}
      <Header 
        onLoginClick={() => setShowLogin(true)} 
        onRegisterClick={() => setShowRegister(true)} 
      />

      {/* HERO SECTION - Enhanced */}
      <section className="bg-white dark:bg-zinc-900 py-24 border-b border-gray-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Personal Banking
          </h1>
          
          {/* Expanded & More Compelling Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience modern personal banking that puts you in control. 
            From effortless everyday spending and high-yield savings to flexible loans and smart financial tools — 
            we provide secure, transparent, and personalized solutions designed to help you achieve your financial goals with confidence and ease.
          </p>

          {/* Dark Mode Toggle (Temporary - can be moved to Header) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-8 mx-auto flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full text-sm font-medium transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </section>

      {/* ACCOUNT TYPES */}
      <section className="bg-gray-50 dark:bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Account Types
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Checking Account",
                desc: "Free checking with no monthly fees, online banking, and mobile deposits.",
                icon: CreditCard,
                features: ["No monthly fees", "Online & mobile banking", "Free ATM withdrawals", "Direct deposit"]
              },
              {
                title: "Savings Account",
                desc: "High-yield savings with competitive interest rates and easy access.",
                icon: PiggyBank,
                features: ["Competitive interest", "No minimum balance", "Online transfers", "FDIC insured"]
              },
              {
                title: "Money Market Account",
                desc: "Higher interest rates with check-writing privileges and ATM access.",
                icon: TrendingUp,
                features: ["Higher interest rates", "Check writing", "ATM access", "Tiered interest"]
              },
            ].map((account, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-8 rounded-3xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
              >
                <account.icon className="w-12 h-12 text-blue-600 dark:text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{account.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{account.desc}</p>
                <ul className="space-y-2">
                  {account.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <Shield className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOANS & CREDIT */}
      <section className="bg-white dark:bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Loans & Credit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Loans",
                desc: "Flexible personal loans for debt consolidation, home improvements, or unexpected expenses.",
                icon: CreditCard,
                rate: "From 6.99% APR"
              },
              {
                title: "Home Loans",
                desc: "Mortgages and home equity loans with competitive rates and flexible terms.",
                icon: Home,
                rate: "From 3.25% APR"
              },
              {
                title: "Auto Loans",
                desc: "Financing for new and used vehicles with competitive rates and quick approval.",
                icon: Car,
                rate: "From 4.49% APR"
              },
            ].map((loan, i) => (
              <div 
                key={i} 
                className="bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 p-8 rounded-3xl hover:border-blue-200 dark:hover:border-blue-600 transition-all"
              >
                <loan.icon className="w-12 h-12 text-blue-600 dark:text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{loan.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{loan.desc}</p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">{loan.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT BANKING */}
      <section className="bg-gray-50 dark:bg-zinc-950 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GraduationCap className="w-16 h-16 text-blue-600 dark:text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Student Banking</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Special accounts designed for students with no fees, rewards, and financial education resources.
          </p>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Student Checking Account</h3>
            <ul className="text-left space-y-3 max-w-md mx-auto">
              {[
                "No monthly fees or minimum balance",
                "Free ATM withdrawals worldwide",
                "Financial literacy resources",
                "Parental account linking options"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                  <Shield className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* REGISTER & LOGIN MODALS remain the same (already good contrast) */}
      {/* ... (your existing modals code) ... */}
      
      {/* REGISTER MODAL */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full overflow-hidden">
            {/* Your existing register modal content */}
            {/* (unchanged for now) */}
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

            {/* Rest of your register modal steps remain the same */}
            {/* ... */}
          </div>
        </div>
      )}

      {/* LOGIN MODAL - Similar dark mode support */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full p-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Welcome Back</h2>
            <div className="space-y-6">
              <input type="text" placeholder="Email or Username" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
              <input type="password" placeholder="Password" className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
              <button onClick={fakeLoginSubmit} className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold">Sign In Securely</button>
            </div>
            <button onClick={() => setShowLogin(false)} className="mt-6 text-gray-500 dark:text-gray-400 underline w-full text-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}