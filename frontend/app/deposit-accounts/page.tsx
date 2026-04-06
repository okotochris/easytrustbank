'use client';

import { useState } from 'react';
import { Shield, X, PiggyBank, TrendingUp, Clock, DollarSign, CheckCircle, Star, Calculator } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function DepositAccount() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 font-sans transition-colors duration-300">
      {/* HEADER */}
      <Header
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      {/* HERO SECTION */}
      <section className="bg-white dark:bg-zinc-900 py-24 border-b border-gray-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Deposit Accounts
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Grow your savings with our competitive deposit accounts. From high-yield savings to certificates of deposit,
            find the perfect account to help your money work harder for you with FDIC insurance and exceptional rates.
          </p>
        </div>
      </section>

      {/* ACCOUNT TYPES */}
      <section className="bg-gray-50 dark:bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Choose Your Deposit Account
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "High-Yield Savings",
                desc: "Earn competitive interest with no monthly fees and unlimited deposits and withdrawals.",
                icon: PiggyBank,
                rate: "Up to 4.5% APY",
                minDeposit: "$0",
                features: ["No monthly fees", "Unlimited deposits", "Online transfers", "Mobile banking"],
                popular: true
              },
              {
                title: "Money Market Account",
                desc: "Higher interest rates with check-writing privileges and ATM access for greater flexibility.",
                icon: TrendingUp,
                rate: "Up to 4.2% APY",
                minDeposit: "$2,500",
                features: ["Check writing", "ATM access", "Tiered interest", "Debit card included"],
                popular: false
              },
              {
                title: "Certificate of Deposit",
                desc: "Lock in high rates for a fixed term with guaranteed returns and flexible maturity options.",
                icon: Clock,
                rate: "Up to 5.0% APY",
                minDeposit: "$1,000",
                features: ["Fixed rates", "Guaranteed returns", "Flexible terms", "Auto-renewal options"],
                popular: false
              },
            ].map((account, i) => (
              <div
                key={i}
                className={`bg-white dark:bg-zinc-900 border-2 p-8 rounded-3xl transition-all duration-300 hover:shadow-lg relative ${
                  account.popular
                    ? 'border-blue-500 dark:border-blue-400 shadow-lg'
                    : 'border-gray-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-600'
                }`}
              >
                {account.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <account.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{account.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{account.desc}</p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{account.rate}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Annual Percentage Yield</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Minimum Deposit: {account.minDeposit}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {account.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                  Open Account
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CD TERMS */}
      <section className="bg-white dark:bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Certificate of Deposit Terms
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { term: "3 Months", rate: "3.5% APY", minDeposit: "$1,000" },
              { term: "6 Months", rate: "4.0% APY", minDeposit: "$1,000" },
              { term: "1 Year", rate: "4.5% APY", minDeposit: "$500" },
              { term: "2 Years", rate: "4.8% APY", minDeposit: "$500" },
              { term: "3 Years", rate: "5.0% APY", minDeposit: "$500" },
              { term: "4 Years", rate: "4.9% APY", minDeposit: "$500" },
              { term: "5 Years", rate: "4.7% APY", minDeposit: "$500" },
              { term: "10 Years", rate: "4.5% APY", minDeposit: "$500" },
            ].map((cd, i) => (
              <div
                key={i}
                className="border border-gray-100 dark:border-zinc-800 p-6 rounded-2xl hover:border-green-200 dark:hover:border-green-600 transition-all duration-300 text-center"
              >
                <div className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{cd.term}</div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400 mb-1">{cd.rate}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Min: {cd.minDeposit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 dark:bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Our Deposit Accounts?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "FDIC Insured",
                desc: "Your deposits are fully insured up to $250,000 by the Federal Deposit Insurance Corporation.",
                icon: Shield
              },
              {
                title: "Competitive Rates",
                desc: "Industry-leading interest rates that help your money grow faster than traditional savings.",
                icon: TrendingUp
              },
              {
                title: "No Hidden Fees",
                desc: "Transparent pricing with no monthly maintenance fees or surprise charges.",
                icon: DollarSign
              },
              {
                title: "Easy Access",
                desc: "Manage your accounts 24/7 through online banking, mobile app, and ATMs.",
                icon: CheckCircle
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="text-center bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-6 rounded-2xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="bg-white dark:bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Savings Calculator
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how your money can grow with our competitive deposit rates
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-800 p-8 rounded-3xl">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Initial Deposit</label>
                <input
                  type="number"
                  placeholder="10000"
                  className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  placeholder="4.5"
                  className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Time Period (Years)</label>
                <input
                  type="number"
                  placeholder="5"
                  className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="text-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
                <Calculator className="w-5 h-5" />
                Calculate Growth
              </button>
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">$12,562.50</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Future Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$2,562.50</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total Interest</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$512.50</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Annual Interest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-green-600 dark:bg-green-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Start Saving Today
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Open your deposit account online in minutes and start earning competitive interest rates immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowRegister(true)}
              className="px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-50 transition-colors"
            >
              Open Account Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-600 transition-colors">
              Compare Accounts
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* REGISTER MODAL */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Create Account</h3>
              <button
                onClick={() => setShowRegister(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white"
              />
              <button
                onClick={nextStep}
                className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome Back</h3>
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white"
              />
              <button
                onClick={fakeLoginSubmit}
                className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}