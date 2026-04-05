'use client';

import { useState } from 'react';
import { Shield, X, Lock, Eye, AlertTriangle, CheckCircle, Smartphone, Key } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function Security() {
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
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Banking Security</h1>
          <p className="text-xl text-gray-600 mb-12">
            Your security is our top priority. Learn about our comprehensive security measures and how to protect your accounts.
          </p>
        </div>
      </section>

      {/* SECURITY MEASURES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Security Measures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bank-Grade Encryption",
                desc: "All data is encrypted using 256-bit SSL/TLS encryption, the same standard used by major banks worldwide.",
                icon: Lock,
                color: "text-green-600"
              },
              {
                title: "Multi-Factor Authentication",
                desc: "Enhanced security with multiple verification methods including SMS, authenticator apps, and biometric login.",
                icon: Smartphone,
                color: "text-blue-600"
              },
              {
                title: "Fraud Monitoring",
                desc: "24/7 automated monitoring of all transactions with AI-powered fraud detection systems.",
                icon: Eye,
                color: "text-purple-600"
              },
              {
                title: "Secure Data Centers",
                desc: "Your information is stored in SOC 2 certified data centers with physical security and redundant systems.",
                icon: Shield,
                color: "text-red-600"
              },
              {
                title: "Regular Security Audits",
                desc: "Independent third-party security audits conducted regularly to ensure compliance and identify vulnerabilities.",
                icon: CheckCircle,
                color: "text-indigo-600"
              },
              {
                title: "Employee Training",
                desc: "All staff undergo comprehensive security training and background checks to maintain our security standards.",
                icon: Key,
                color: "text-orange-600"
              },
            ].map((measure, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition">
                <measure.icon className={`w-12 h-12 ${measure.color} mb-6`} />
                <h3 className="text-xl font-semibold mb-4">{measure.title}</h3>
                <p className="text-gray-600">{measure.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY TIPS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Protect Your Accounts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Online Banking Security</h3>
              <ul className="space-y-4">
                {[
                  "Use strong, unique passwords for each account",
                  "Enable multi-factor authentication on all accounts",
                  "Never share your login credentials with anyone",
                  "Log out after each banking session",
                  "Use only secure, private Wi-Fi networks",
                  "Keep your devices and browsers updated",
                  "Be cautious of phishing emails and suspicious links"
                ].map((tip, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Card Security</h3>
              <ul className="space-y-4">
                {[
                  "Sign your cards immediately upon receipt",
                  "Keep your PIN confidential and don't write it down",
                  "Report lost or stolen cards immediately",
                  "Monitor your account activity regularly",
                  "Use chip-enabled terminals when available",
                  "Avoid using cards at untrusted merchants",
                  "Set up transaction alerts for unusual activity"
                ].map((tip, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FRAUD PROTECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Fraud Protection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Liability Protection",
                desc: "You're protected from unauthorized transactions on your accounts and cards.",
                icon: Shield
              },
              {
                title: "Identity Theft Protection",
                desc: "Advanced monitoring and alerts to detect suspicious account activity.",
                icon: AlertTriangle
              },
              {
                title: "24/7 Fraud Support",
                desc: "Dedicated fraud specialists available around the clock to assist you.",
                icon: Smartphone
              },
            ].map((protection, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition text-center">
                <protection.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{protection.title}</h3>
                <p className="text-gray-600">{protection.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORT FRAUD */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Report Suspicious Activity</h2>
          <p className="text-xl text-gray-600 mb-8">
            If you suspect fraudulent activity on your account, contact us immediately. We&apos;re here to help protect your accounts.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Call Us",
                desc: "24/7 Fraud Hotline",
                contact: "+1 (514) 555-0123",
                urgent: true
              },
              {
                title: "Email",
                desc: "Fraud Department",
                contact: "fraud@easytrustbank.demo",
                urgent: false
              },
              {
                title: "Online Banking",
                desc: "Report via secure portal",
                contact: "Login to your account",
                urgent: false
              },
            ].map((method, i) => (
              <div key={i} className={`p-6 rounded-3xl ${method.urgent ? 'bg-red-50 border-2 border-red-200' : 'bg-gray-50 border border-gray-100'}`}>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.desc}</p>
                <p className={`font-medium ${method.urgent ? 'text-red-600' : 'text-blue-600'}`}>{method.contact}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-3xl">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Emergency Situations</h3>
            <p className="text-yellow-700">
              If you believe your identity has been stolen or you&apos;re in immediate danger, contact local authorities first, then call our emergency fraud line.
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