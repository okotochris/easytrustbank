'use client';

import { useState } from 'react';
import { Shield, X, CreditCard, PiggyBank, TrendingUp, Home, Car, GraduationCap } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function PersonalBanking() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [registerStep, setRegisterStep] = useState(1);

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
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* HEADER */}
      <Header onLoginClick={() => setShowLogin(true)} onRegisterClick={() => setShowRegister(true)} />

      {/* HERO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Personal Banking</h1>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive banking solutions designed for your personal financial needs. From everyday accounts to specialized savings and loans.
          </p>
        </div>
      </section>

      {/* ACCOUNT TYPES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Account Types</h2>
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
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition">
                <account.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{account.title}</h3>
                <p className="text-gray-600 mb-6">{account.desc}</p>
                <ul className="space-y-2">
                  {account.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm">
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Loans & Credit</h2>
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
              <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition">
                <loan.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{loan.title}</h3>
                <p className="text-gray-600 mb-4">{loan.desc}</p>
                <p className="text-blue-600 font-semibold">{loan.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT BANKING */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Student Banking</h2>
          <p className="text-xl text-gray-600 mb-8">
            Special accounts designed for students with no fees, rewards, and financial education resources.
          </p>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Student Checking Account</h3>
            <ul className="text-left space-y-3 max-w-md mx-auto">
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                No monthly fees or minimum balance
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                Free ATM withdrawals worldwide
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                Financial literacy resources
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                Parental account linking options
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* REGISTER MODAL */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-100 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden">
            <div className="flex justify-between items-center border-b px-8 py-6">
              <div>
                <h2 className="text-2xl font-bold">Open Your Account</h2>
                <p className="text-sm text-gray-500">Step {registerStep} of 4</p>
              </div>
              <button onClick={() => {setShowRegister(false); setRegisterStep(1);}} className="text-3xl text-gray-400 hover:text-gray-600">
                <X size={28} />
              </button>
            </div>

            <div className="p-8">
              {registerStep === 1 && (
                <div className="space-y-6">
                  <input type="text" placeholder="Full Name" className="w-full border rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="email" placeholder="Email Address" className="w-full border rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="tel" placeholder="Phone Number" className="w-full border rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                </div>
              )}

              {registerStep === 2 && (
                <div className="space-y-6">
                  <input type="text" placeholder="Street Address" className="w-full border rounded-2xl px-6 py-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="border rounded-2xl px-6 py-4" />
                    <input type="text" placeholder="Postal Code" className="border rounded-2xl px-6 py-4" />
                  </div>
                  <select className="w-full border rounded-2xl px-6 py-4">
                    <option>Canada</option>
                    <option>France</option>
                    <option>Other</option>
                  </select>
                </div>
              )}

              {registerStep === 3 && (
                <div className="space-y-6 text-center py-8">
                  <p className="text-lg">Choose your account type</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="border-2 border-blue-600 text-blue-700 py-6 rounded-2xl font-medium">Checking</button>
                    <button className="border border-gray-300 py-6 rounded-2xl">Savings</button>
                  </div>
                </div>
              )}

              {registerStep === 4 && (
                <div className="space-y-6">
                  <p className="text-center">Create a secure password</p>
                  <input type="password" placeholder="Password" className="w-full border rounded-2xl px-6 py-4" />
                  <input type="password" placeholder="Confirm Password" className="w-full border rounded-2xl px-6 py-4" />
                </div>
              )}

              <button
                onClick={nextStep}
                className="mt-10 w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold text-lg transition"
              >
                {registerStep === 4 ? "Create My Account" : "Continue"}
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 pb-8">Demo only — No data is stored in MongoDB yet</p>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-100">
          <div className="bg-white rounded-3xl max-w-md w-full p-10">
            <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
            <div className="space-y-6">
              <input type="text" placeholder="Email or Username" className="w-full border rounded-2xl px-6 py-4" />
              <input type="password" placeholder="Password" className="w-full border rounded-2xl px-6 py-4" />
              <button onClick={fakeLoginSubmit} className="w-full bg-blue-700 text-white py-4 rounded-2xl font-semibold">Sign In Securely</button>
            </div>
            <button onClick={() => setShowLogin(false)} className="mt-6 text-gray-500 underline w-full text-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}