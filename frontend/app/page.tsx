// app/page.tsx
'use client';

import { useState } from 'react';
import {Shield,  X } from 'lucide-react';
import Footer from './component/footer';
import Header from './component/header';
import Hero from './component/hero';
import Rate from './component/rate';
import Services from './component/ourOffer';
import BonusPromo from './component/bonusPromo';
import MemberFocused from './component/MemberFocused';
import Testimonials from './component/testimony';
import BankingHours from './component/bankHours';
import LoadingIndicator from './component/loading';

export default function EasyTrustBank() {
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
    
      <Header/>
      {/* HERO */}
      <Hero onRegisterClick={() => setShowRegister(true)} />
      {/* RATES */}
      <Rate/>

      {/* SERVICES */}
      <Services/>

       {/* WHAT WE OFFER */}
       
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">What We Offer</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Free Checking & Savings Accounts",
              "International Transfers & Multi-Currency",
              "Credit Cards & Rewards",
              "Personal, Auto & Mortgage Loans",
              "Business Banking Solutions",
              "Wealth Management & Retirement",
            ].map((service, i) => (
              <div key={i} className="bg-gray-50  dark:bg-gray-700 border border-gray-100 dark:border-gray-500 p-10 rounded-3xl hover:border-blue-200 transition">
                <Shield className="w-10 h-10 text-blue-600 mb-6" />
                <p className="text-xl font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BonusPromo onRegisterClick={() => setShowRegister(true)} />
      {/* LOCATIONS */}
      <MemberFocused />
      <Testimonials />
      {/* BANKING HOURS & SUPPORT */}
      <BankingHours/>

      {/* FOOTER */}
    <Footer/>

      {/* REGISTER MODAL */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
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

     <LoadingIndicator message="Processing your transfer..." />
    </div>
  );
}