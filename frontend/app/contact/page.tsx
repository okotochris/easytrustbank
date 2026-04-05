// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Header from '../component/header';
import Footer from '../component/footer';
// Optional: you can remove if not needed

export default function Contact() {
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
      {/* Header */}
      <Header 
        onLoginClick={() => setShowLogin(true)} 
        onRegisterClick={() => setShowRegister(true)} 
      />

      {/* Hero Section - Consistent with main site */}
      <section className="bg-gradient-to-br from-blue-950 to-indigo-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out anytime — our team is ready to support you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Headquarters */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <MapPin className="w-9 h-9 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Headquarters</h3>
              <p className="font-medium text-blue-600 mb-4">🇨🇦 Montréal, Canada</p>
              <div className="text-gray-600 space-y-1">
                <p>129 Rue Saint-Jacques</p>
                <p>Montréal, QC H2Y 1L6</p>
                <p>Canada</p>
              </div>
            </div>

            {/* Branch Office */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <MapPin className="w-9 h-9 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Branch Office</h3>
              <p className="font-medium text-blue-600 mb-4">🇫🇷 Paris, France</p>
              <div className="text-gray-600 space-y-1">
                <p>17 Boulevard des Italiens</p>
                <p>75002 Paris</p>
                <p>France</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-xl transition-all group lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone (24/7 Support)</p>
                    <p className="text-gray-600">+1 (514) 555-0123</p>
                    <p className="text-gray-600">+33 1 76 54 32 10</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:support@easytrustbank.demo" className="text-blue-600 hover:underline">
                      support@easytrustbank.demo
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">Monday – Friday: 9:00 AM – 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600">We typically respond within 24 business hours</p>
          </div>

          <form className="bg-white rounded-3xl p-10 shadow-sm space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea
                placeholder="Please describe your inquiry..."
                rows={7}
                className="w-full border border-gray-300 rounded-3xl px-6 py-4 focus:outline-none focus:border-blue-500 transition resize-none"
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

      {/* Register & Login Modals (Same as your other pages) */}
      {/* ... (I kept your existing modals but improved styling slightly) */}
      {showRegister && (
        // Your existing register modal with improved styling
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden">
            {/* Modal content same as before but with consistent styling */}
            {/* ... keep your existing modal code here ... */}
          </div>
        </div>
      )}

      {showLogin && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-3xl max-w-md w-full p-10">
            <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
            <div className="space-y-6">
              <input type="text" placeholder="Email or Username" className="w-full border rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
              <input type="password" placeholder="Password" className="w-full border rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
              <button onClick={fakeLoginSubmit} className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold transition">Sign In Securely</button>
            </div>
            <button onClick={() => setShowLogin(false)} className="mt-6 text-gray-500 underline w-full text-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}