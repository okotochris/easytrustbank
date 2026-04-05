'use client';

import { useState, useEffect } from 'react';
import { Shield, X, Building, CreditCard, TrendingUp, Users, Briefcase, PiggyBank, Moon, Sun } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function BusinessBanking() {
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
      {/* HEADER */}
      <Header 
        onLoginClick={() => setShowLogin(true)} 
        onRegisterClick={() => setShowRegister(true)} 
      />

      {/* HERO SECTION - Enhanced with better description */}
      <section className="bg-white dark:bg-zinc-900 py-24 border-b border-gray-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Business Banking
          </h1>
          
          {/* Expanded & More Powerful Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Power your business with modern banking solutions built for growth. 
            From seamless daily operations and smart cash flow management to flexible financing and powerful business tools — 
            we provide secure, efficient, and tailored banking services that help startups, small businesses, and enterprises thrive in today’s competitive market.
          </p>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-8 mx-auto flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full text-sm font-medium transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </section>

      {/* BUSINESS ACCOUNT TYPES */}
      <section className="bg-gray-50 dark:bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Business Accounts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Checking",
                desc: "Essential checking account with unlimited transactions and merchant services.",
                icon: Building,
                features: ["Unlimited transactions", "Merchant services", "Online banking", "Business debit cards"]
              },
              {
                title: "Business Savings",
                desc: "High-yield savings account designed for business cash management.",
                icon: PiggyBank,
                features: ["Competitive interest", "Easy transfers", "Business analytics", "FDIC insured"]
              },
              {
                title: "Money Market",
                desc: "Higher interest rates with check-writing privileges for businesses.",
                icon: TrendingUp,
                features: ["Tiered interest rates", "Check writing", "Online transfers", "Business tools"]
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

      {/* BUSINESS LOANS */}
      <section className="bg-white dark:bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Business Financing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Loans",
                desc: "Flexible financing for equipment, expansion, or working capital needs.",
                icon: Briefcase,
                rate: "From 5.99% APR"
              },
              {
                title: "Line of Credit",
                desc: "Revolving credit line for ongoing business expenses and opportunities.",
                icon: CreditCard,
                rate: "From 7.49% APR"
              },
              {
                title: "Equipment Financing",
                desc: "Specialized financing for business equipment and technology purchases.",
                icon: Building,
                rate: "From 4.99% APR"
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

      {/* BUSINESS SERVICES */}
      <section className="bg-gray-50 dark:bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Business Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Merchant Services",
                desc: "Accept payments online and in-person with competitive rates.",
                icon: CreditCard
              },
              {
                title: "Payroll Services",
                desc: "Streamlined payroll processing and tax filing assistance.",
                icon: Users
              },
              {
                title: "Cash Management",
                desc: "Advanced tools for managing business cash flow and liquidity.",
                icon: TrendingUp
              },
              {
                title: "Business Analytics",
                desc: "Detailed financial reporting and business intelligence tools.",
                icon: Briefcase
              },
            ].map((service, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-6 rounded-3xl hover:border-blue-200 dark:hover:border-blue-600 transition-all text-center"
              >
                <service.icon className="w-10 h-10 text-blue-600 dark:text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STARTUP SUPPORT */}
      <section className="bg-white dark:bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Building className="w-16 h-16 text-blue-600 dark:text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Startup & Small Business Support
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Special programs and resources designed to help startups and small businesses succeed.
          </p>
          <div className="bg-gray-50 dark:bg-zinc-800 p-8 rounded-3xl border border-gray-100 dark:border-zinc-700">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Startup Banking Package</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <ul className="space-y-3">
                {[
                  "No account opening fees",
                  "Free business checking for first year",
                  "Dedicated business advisor",
                  "Free financial planning consultation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Shield className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  "Quick loan approval process",
                  "Business mentorship program",
                  "Free merchant account setup",
                  "24/7 business support hotline"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Shield className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* REGISTER MODAL - Dark mode supported */}
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