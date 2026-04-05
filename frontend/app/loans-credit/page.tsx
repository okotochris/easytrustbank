'use client';

import { useState } from 'react';
import { X, CreditCard, Home, Car, Briefcase, GraduationCap, Calculator, CheckCircle } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function LoansCredit() {
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
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Loans & Credit</h1>
          <p className="text-xl text-gray-600 mb-12">
            Flexible financing solutions to help you achieve your goals. From personal loans to mortgages, we offer competitive rates and terms.
          </p>
        </div>
      </section>

      {/* LOAN TYPES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Loan Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Loans",
                desc: "Unsecured loans for debt consolidation, home improvements, or major purchases.",
                icon: CreditCard,
                rate: "From 6.99% APR",
                term: "1-7 years",
                amount: "Up to $50,000"
              },
              {
                title: "Home Mortgages",
                desc: "Fixed and adjustable rate mortgages for purchasing or refinancing your home.",
                icon: Home,
                rate: "From 3.25% APR",
                term: "15-30 years",
                amount: "Up to $2,000,000"
              },
              {
                title: "Auto Loans",
                desc: "Financing for new and used vehicles with competitive rates and flexible terms.",
                icon: Car,
                rate: "From 4.49% APR",
                term: "1-8 years",
                amount: "Up to $100,000"
              },
              {
                title: "Business Loans",
                desc: "Working capital, equipment financing, and expansion loans for businesses.",
                icon: Briefcase,
                rate: "From 5.99% APR",
                term: "1-10 years",
                amount: "Up to $500,000"
              },
              {
                title: "Student Loans",
                desc: "Educational financing with flexible repayment options and grace periods.",
                icon: GraduationCap,
                rate: "From 3.99% APR",
                term: "5-20 years",
                amount: "Up to $150,000"
              },
              {
                title: "Home Equity",
                desc: "Borrow against your home&apos;s equity for major expenses or improvements.",
                icon: Home,
                rate: "From 4.75% APR",
                term: "5-20 years",
                amount: "Up to 80% LTV"
              },
            ].map((loan, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition">
                <loan.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{loan.title}</h3>
                <p className="text-gray-600 mb-6">{loan.desc}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-blue-600">{loan.rate}</span></p>
                  <p><span className="text-gray-500">Term:</span> {loan.term}</p>
                  <p><span className="text-gray-500">Amount:</span> {loan.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIT CARDS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Credit Cards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cash Back Card",
                desc: "Earn unlimited 1.5% cash back on all purchases with no annual fee.",
                features: ["1.5% unlimited cash back", "No annual fee", "Travel rewards", "Purchase protection"],
                apr: "12.99% - 22.99% APR"
              },
              {
                title: "Travel Rewards Card",
                desc: "Earn 3x points on travel and dining with premium travel benefits.",
                features: ["3x on travel & dining", "Airport lounge access", "Travel insurance", "Price protection"],
                apr: "14.99% - 24.99% APR"
              },
              {
                title: "Business Card",
                desc: "Designed for business owners with expense tracking and rewards.",
                features: ["2x on business purchases", "Expense tracking", "Employee cards", "Travel benefits"],
                apr: "13.99% - 23.99% APR"
              },
            ].map((card, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition">
                <CreditCard className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.desc}</p>
                <ul className="space-y-2 mb-6">
                  {card.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-blue-600 font-semibold text-sm">{card.apr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN CALCULATOR */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="flex items-center mb-8">
              <Calculator className="w-10 h-10 text-blue-600 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">Loan Calculator</h2>
                <p className="text-gray-600">Estimate your monthly payments</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Amount</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="6.99"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Term (Years)</label>
                  <input
                    type="number"
                    placeholder="5"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-2xl font-semibold transition">
                  Calculate Payment
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Estimated Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Payment:</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Interest:</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * This is an estimate only. Actual rates and terms may vary based on creditworthiness and other factors.
                </p>
              </div>
            </div>
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