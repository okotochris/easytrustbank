'use client';

import { useState } from 'react';
import { Shield, X, TrendingUp, PiggyBank, Target, Calendar, BarChart3, Users, Award, Heart } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function WealthRetirement() {
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
            Wealth & Retirement
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Secure your financial future with our comprehensive wealth management and retirement planning solutions.
            From investment strategies to retirement accounts, we help you build and preserve wealth for generations.
          </p>
        </div>
      </section>

      {/* INVESTMENT SERVICES */}
      <section className="bg-gray-50 dark:bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Investment Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Portfolio Management",
                desc: "Professional investment management tailored to your risk tolerance and financial goals.",
                icon: BarChart3,
                features: ["Diversified portfolios", "Risk assessment", "Regular rebalancing", "Performance tracking"]
              },
              {
                title: "Retirement Planning",
                desc: "Comprehensive retirement strategies to ensure financial security in your golden years.",
                icon: Calendar,
                features: ["401(k) optimization", "IRA strategies", "Social Security planning", "Tax-efficient withdrawals"]
              },
              {
                title: "Wealth Preservation",
                desc: "Strategies to protect and grow your wealth through market cycles and economic changes.",
                icon: Shield,
                features: ["Asset protection", "Estate planning", "Tax optimization", "Legacy planning"]
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-8 rounded-3xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RETIREMENT ACCOUNTS */}
      <section className="bg-white dark:bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Retirement Accounts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Traditional IRA",
                desc: "Tax-deductible contributions with tax-deferred growth for retirement savings.",
                benefits: ["Tax deductions", "Tax-deferred growth", "Flexible contributions", "Investment options"],
                rate: "Up to 4.5% APY"
              },
              {
                title: "Roth IRA",
                desc: "Tax-free withdrawals in retirement with contributions made after taxes.",
                benefits: ["Tax-free withdrawals", "No required distributions", "Estate planning benefits", "No income limits"],
                rate: "Up to 4.2% APY"
              },
              {
                title: "401(k) Plans",
                desc: "Employer-sponsored retirement plans with matching contributions and tax advantages.",
                benefits: ["Employer matching", "Tax-deferred growth", "High contribution limits", "Loan options"],
                rate: "Up to 5.0% APY"
              },
              {
                title: "SEP IRA",
                desc: "Simplified Employee Pension plans ideal for self-employed individuals and small businesses.",
                benefits: ["Higher contribution limits", "Easy administration", "Tax advantages", "Flexible investments"],
                rate: "Up to 4.8% APY"
              },
            ].map((account, i) => (
              <div
                key={i}
                className="border border-gray-100 dark:border-zinc-800 p-8 rounded-3xl hover:border-green-200 dark:hover:border-green-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{account.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{account.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Rate</div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">{account.rate}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {account.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEALTH MANAGEMENT FEATURES */}
      <section className="bg-gray-50 dark:bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Our Wealth Management?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Advisors",
                desc: "Certified financial advisors with decades of experience in wealth management.",
                icon: Users
              },
              {
                title: "Personalized Strategies",
                desc: "Custom investment strategies tailored to your unique financial situation and goals.",
                icon: Target
              },
              {
                title: "Advanced Technology",
                desc: "State-of-the-art tools and platforms for portfolio tracking and analysis.",
                icon: TrendingUp
              },
              {
                title: "Trusted Security",
                desc: "Bank-level security protecting your investments and personal information.",
                icon: Shield
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-6 rounded-2xl hover:border-purple-200 dark:hover:border-purple-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 dark:bg-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Start Building Your Wealth Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our wealth management experts and take the first step towards financial security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowRegister(true)}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-50 transition-colors"
            >
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
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
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
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
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
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