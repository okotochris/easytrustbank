'use client';

import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, Users, Home, Car, Briefcase, Users2, CreditCard, Heart, CheckCircle, Banknote } from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function LoanPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Loan');

  const [showApplyModal, setShowApplyModal] = useState(false);

  const loanTypes = [
    { icon: <Users className="w-6 h-6" />, title: "Personal Loans", desc: "Finance your dream home with competitive rates" },
    { icon: <Home className="w-6 h-6" />, title: "Home Loans", desc: "Finance your dream home with competitive rates" },
    { icon: <Car className="w-6 h-6" />, title: "Automobile Loans", desc: "Get on the road with flexible auto financing" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Business Loans", desc: "Grow your business with tailored financing solutions" },
    { icon: <Users2 className="w-6 h-6" />, title: "Joint Mortgage", desc: "Share responsibility with a co-borrower" },
    { icon: <CreditCard className="w-6 h-6" />, title: "Secured Overdraft", desc: "Access funds when needed with asset backing" },
    { icon: <Heart className="w-6 h-6" />, title: "Health Finance", desc: "Cover medical expenses with flexible payment options" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        openSection={openSection}
        activeItem={activeItem}
        setOpenSection={setOpenSection}
        setActiveItem={setActiveItem}
        isMobileOpen={isSidebarOpen}
        setIsMobileOpen={setIsSidebarOpen}
      />

      <div className="flex-1">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 text-white py-14">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Loan Services</h1>
            <p className="text-violet-100 mt-4 text-lg max-w-2xl mx-auto">
              Flexible and affordable loans to help you achieve your financial goals
            </p>
            <button 
              onClick={() => setShowApplyModal(true)}
              className="mt-8 bg-white text-indigo-700 hover:bg-gray-100 px-10 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 transition"
            >
              Apply for a Loan
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Why Choose Our Loan Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Our Loan Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 hover:shadow-sm transition">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Clock className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Quick Approval</h3>
                <p className="text-gray-600 text-sm">Get a decision within hours and funds within days</p>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 hover:shadow-sm transition">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Banknote className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Competitive Rates</h3>
                <p className="text-gray-600 text-sm">Low interest rates tailored to your credit profile</p>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 hover:shadow-sm transition">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Simple Process</h3>
                <p className="text-gray-600 text-sm">Straightforward application with minimal paperwork</p>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 hover:shadow-sm transition">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Shield className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Secure & Confidential</h3>
                <p className="text-gray-600 text-sm">Your information is protected with bank-level security</p>
              </div>
            </div>
          </div>

          {/* Available Loan Types */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-center mb-12">Available Loan Types</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanTypes.map((loan, index) => (
                <div key={index} className="bg-white rounded-3xl p-7 border border-gray-100 hover:border-violet-200 hover:shadow-sm transition group">
                  <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-200 transition">
                    {loan.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{loan.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{loan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6">1</div>
                <h3 className="font-semibold text-xl mb-3">Apply Online</h3>
                <p className="text-gray-600">Complete our simple online application form with your details and loan requirements</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6">2</div>
                <h3 className="font-semibold text-xl mb-3">Quick Review</h3>
                <p className="text-gray-600">Our team reviews your application and may contact you for additional information</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6">3</div>
                <h3 className="font-semibold text-xl mb-3">Approval & Disbursement</h3>
                <p className="text-gray-600">Once approved, the loan amount will be transferred to your account</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-violet-700 to-indigo-700 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
            <p className="text-violet-100 text-lg mb-8 max-w-md mx-auto">
              Apply now and get a decision on your loan application quickly
            </p>
            <button 
              onClick={() => setShowApplyModal(true)}
              className="bg-white text-violet-700 hover:bg-gray-100 px-12 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 transition"
            >
              Apply for a Loan
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Simple Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8">
            <h2 className="text-2xl font-semibold mb-6">Apply for a Loan</h2>
            <p className="text-gray-600 mb-8">Our team will contact you shortly after submission.</p>
            
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-violet-500" />
              <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-violet-500" />
              <input type="tel" placeholder="Phone Number" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-violet-500" />
              <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-violet-500">
                <option value="">Select Loan Type</option>
                {loanTypes.map((loan, i) => (
                  <option key={i} value={loan.title}>{loan.title}</option>
                ))}
              </select>
              <input type="number" placeholder="Desired Loan Amount ($)" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-violet-500" />
            </div>

            <button 
              onClick={() => {
                alert("✅ Your loan application has been submitted successfully!");
                setShowApplyModal(false);
              }}
              className="mt-10 w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-2xl font-semibold text-lg"
            >
              Submit Application
            </button>
          </div>
        </div>
      )}
    </div>
  );
}