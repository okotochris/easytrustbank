'use client';

import { useState } from 'react';
import { X, CreditCard, Plane, Building, Star, CheckCircle, Zap, Shield } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function Cards() {
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
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Credit Cards</h1>
          <p className="text-xl text-gray-600 mb-12">
            Choose the perfect credit card for your lifestyle. From cash back rewards to travel benefits, we have options for everyone.
          </p>
        </div>
      </section>

      {/* FEATURED CARDS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EasyCash Rewards",
                type: "Cash Back",
                desc: "Earn unlimited 1.5% cash back on all purchases with no annual fee.",
                icon: CreditCard,
                color: "from-green-500 to-green-600",
                features: [
                  "1.5% unlimited cash back",
                  "No annual fee",
                  "$0 foreign transaction fees",
                  "Free credit score access",
                  "Mobile wallet support"
                ],
                apr: "12.99% - 22.99% APR",
                annualFee: "$0",
                bonus: "Get $100 cash back after spending $500 in first 3 months"
              },
              {
                title: "TravelMax Rewards",
                type: "Travel",
                desc: "Earn 3x points on travel and dining with premium travel benefits.",
                icon: Plane,
                color: "from-blue-500 to-blue-600",
                features: [
                  "3x points on travel & dining",
                  "Airport lounge access",
                  "Travel insurance included",
                  "Price protection guarantee",
                  "Points never expire"
                ],
                apr: "14.99% - 24.99% APR",
                annualFee: "$95",
                bonus: "Earn 50,000 bonus points after spending $3,000 in first 3 months"
              },
              {
                title: "BusinessPro Card",
                type: "Business",
                desc: "Designed for business owners with expense tracking and rewards.",
                icon: Building,
                color: "from-purple-500 to-purple-600",
                features: [
                  "2x points on business purchases",
                  "Advanced expense tracking",
                  "Employee cards available",
                  "Travel benefits included",
                  "Quarterly business reports"
                ],
                apr: "13.99% - 23.99% APR",
                annualFee: "$0",
                bonus: "Get $250 back after spending $3,000 in business purchases"
              },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition shadow-sm">
                {/* Card Visual */}
                <div className={`w-full h-48 bg-gradient-to-br ${card.color} rounded-2xl mb-6 flex items-end p-6`}>
                  <div className="text-white">
                    <card.icon className="w-8 h-8 mb-2" />
                    <p className="text-sm opacity-90">{card.type}</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.desc}</p>

                <div className="space-y-3 mb-6">
                  {card.features.slice(0, 3).map((feature, j) => (
                    <div key={j} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">APR:</span>
                    <span className="font-semibold">{card.apr}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Annual Fee:</span>
                    <span className="font-semibold">{card.annualFee}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-2xl font-semibold mt-6 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARD BENEFITS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Cards?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "No Hidden Fees",
                desc: "Transparent pricing with no surprise charges or penalties.",
                icon: Shield
              },
              {
                title: "Instant Approval",
                desc: "Quick pre-qualification and instant credit decisions.",
                icon: Zap
              },
              {
                title: "Mobile Banking",
                desc: "Manage your cards, view statements, and pay bills on the go.",
                icon: CreditCard
              },
              {
                title: "24/7 Support",
                desc: "Round-the-clock customer service and card replacement.",
                icon: Star
              },
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL CARDS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">More Card Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Student Rewards Card",
                desc: "Perfect for students with no annual fee and rewards on everyday purchases.",
                features: ["No annual fee", "1% cash back", "Free credit monitoring", "Financial education resources"],
                apr: "15.99% - 25.99% APR"
              },
              {
                title: "Premium Rewards Card",
                desc: "Luxury card with premium benefits and the highest rewards rates.",
                features: ["5x points on premium purchases", "Concierge service", "Luxury travel benefits", "Premium insurance coverage"],
                apr: "16.99% - 26.99% APR"
              },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition">
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.desc}</p>

                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">{card.apr}</span>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-2xl font-semibold transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Easy Application Process</h2>
          <p className="text-xl text-gray-600 mb-12">
            Apply online in minutes and get a decision quickly. No hard credit pull for pre-qualification.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Pre-Qualify",
                desc: "Check your eligibility without affecting your credit score."
              },
              {
                step: "2",
                title: "Apply Online",
                desc: "Complete your application securely in just a few minutes."
              },
              {
                step: "3",
                title: "Get Approved",
                desc: "Receive instant decision and start using your card immediately."
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg mt-12 transition">
            Start Your Application
          </button>
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