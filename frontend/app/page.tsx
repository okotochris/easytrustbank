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
import FancyLoader from './component/loading';

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

     

     
    </div>
  );
}