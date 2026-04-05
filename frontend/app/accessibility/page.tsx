'use client';

import { useState } from 'react';
import { X, Users, Eye, Volume2, Keyboard, Monitor, Smartphone, CheckCircle } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function Accessibility() {
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
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Accessibility</h1>
          <p className="text-xl text-gray-600 mb-12">
            We&apos;re committed to making our banking services accessible to everyone. Learn about our accessibility features and how we support diverse needs.
          </p>
        </div>
      </section>

      {/* ACCESSIBILITY FEATURES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Accessibility Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Screen Reader Support",
                desc: "Full compatibility with popular screen readers including JAWS, NVDA, and VoiceOver for visually impaired users.",
                icon: Eye,
                color: "text-blue-600"
              },
              {
                title: "Keyboard Navigation",
                desc: "Complete keyboard accessibility allowing users to navigate and interact with all features without a mouse.",
                icon: Keyboard,
                color: "text-green-600"
              },
              {
                title: "High Contrast Mode",
                desc: "Enhanced color schemes and high contrast options to improve visibility for users with visual impairments.",
                icon: Monitor,
                color: "text-purple-600"
              },
              {
                title: "Text-to-Speech",
                desc: "Built-in text-to-speech functionality and compatibility with external assistive technologies.",
                icon: Volume2,
                color: "text-red-600"
              },
              {
                title: "Mobile Accessibility",
                desc: "Optimized mobile banking app with accessibility features including voice commands and gesture support.",
                icon: Smartphone,
                color: "text-indigo-600"
              },
              {
                title: "Large Print Options",
                desc: "Adjustable font sizes and large print statements available for customers with visual needs.",
                icon: Users,
                color: "text-orange-600"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition">
                <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WCAG COMPLIANCE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">WCAG 2.1 AA Compliance</h2>
            <p className="text-xl text-gray-600">
              EasyTrust Bank is committed to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA compliance across all digital platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                principle: "Perceivable",
                desc: "Information and user interface components must be presentable to users in ways they can perceive.",
                criteria: ["Text Alternatives", "Time-based Media", "Adaptable", "Distinguishable"]
              },
              {
                principle: "Operable",
                desc: "User interface components and navigation must be operable by all users.",
                criteria: ["Keyboard Accessible", "Enough Time", "Seizures", "Navigable"]
              },
              {
                principle: "Understandable",
                desc: "Information and operation of user interface must be understandable.",
                criteria: ["Readable", "Predictable", "Input Assistance"]
              },
              {
                principle: "Robust",
                desc: "Content must be robust enough to be interpreted by a wide variety of user agents.",
                criteria: ["Compatible", "Assistive Technology"]
              },
            ].map((principle, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-3xl">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">{principle.principle}</h3>
                <p className="text-gray-600 mb-4 text-sm">{principle.desc}</p>
                <ul className="space-y-1">
                  {principle.criteria.map((criterion, j) => (
                    <li key={j} className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSISTIVE SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Assistive Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">In-Branch Support</h3>
              <ul className="space-y-4">
                {[
                  "Sign language interpreters available upon request",
                  "Wheelchair-accessible branches and ATMs",
                  "Braille materials and large print documents",
                  "Assisted listening devices for hearing impaired",
                  "Private consultation rooms for sensitive discussions",
                  "Extended service hours for customers with special needs"
                ].map((service, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Digital Support</h3>
              <ul className="space-y-4">
                {[
                  "Voice-guided mobile banking app",
                  "Customizable interface settings",
                  "Alternative text for all images",
                  "Simplified language options",
                  "Gesture-based navigation support",
                  "Emergency contact features for vulnerable customers"
                ].map((service, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & FEEDBACK */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Accessibility Support</h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re committed to continuous improvement. Help us serve you better by sharing your accessibility needs and feedback.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Accessibility Team",
                desc: "Dedicated specialists to assist with accessibility needs",
                contact: "accessibility@easytrustbank.demo"
              },
              {
                title: "Feedback Form",
                desc: "Share your experience and suggestions",
                contact: "Submit via website"
              },
              {
                title: "Emergency Support",
                desc: "24/7 assistance for urgent accessibility needs",
                contact: "+1 (514) 555-0123"
              },
            ].map((support, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-3xl">
                <h3 className="text-lg font-semibold mb-2">{support.title}</h3>
                <p className="text-gray-600 mb-3">{support.desc}</p>
                <p className="text-blue-600 font-medium">{support.contact}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-3xl">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">🏆 Accessibility Recognition</h3>
            <p className="text-blue-700">
              EasyTrust Bank has received the &quot;Accessibility Champion&quot; award from the Canadian Bankers Association for our commitment to inclusive banking services.
            </p>
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