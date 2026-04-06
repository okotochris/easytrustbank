// components/Services.tsx
'use client';

import React from 'react';
import { 
  PiggyBank, 
  CreditCard, 
  HandCoins, 
  Building2, 
  TrendingUp, 
  Users, 

} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Deposit Accounts",
      description: "Secure your money with our high-yield savings and checking accounts designed for growth.",
      icon: PiggyBank,
      color: "blue",
      bgColor: "from-blue-50 to-cyan-50",
      url:'/deposit-accounts'
    },
    {
      title: "Credit Cards",
      description: "Find the perfect credit card for your lifestyle and spending habits with competitive rates.",
      icon: CreditCard,
      color: "purple",
      bgColor: "from-purple-50 to-violet-50",
      url:'/cards'
    },
    {
      title: "Loans",
      description: "Get competitive rates on personal, auto, and home loans tailored to your financial goals.",
      icon: HandCoins,
      color: "emerald",
      bgColor: "from-emerald-50 to-teal-50",
      url:'/loans-credit'
    },
    {
      title: "Business Banking",
      description: "Comprehensive banking solutions designed to help your business thrive and grow.",
      icon: Building2,
      color: "amber",
      bgColor: "from-amber-50 to-orange-50",
      url:'/business-banking'
    },
    {
      title: "Wealth & Retirement",
      description: "Plan for your future with our expert investment and retirement planning services.",
      icon: TrendingUp,
      color: "rose",
      bgColor: "from-rose-50 to-pink-50",
      url:'/wealth-retirement'
    },
    {
      title: "About EasyTrust Bank",
      description: "Learn more about our commitment to exceptional banking services and community support.",
      icon: Users,
      color: "indigo",
      bgColor: "from-indigo-50 to-blue-50",  
      url:'/about'
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f610_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-px bg-blue-500"></div>
            <span className="uppercase tracking-[3px] text-blue-600 font-medium text-sm">OUR SERVICES</span>
            <div className="w-3 h-px bg-blue-500"></div>
          </div>
          
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How Can We Help You Today?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive banking solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid - With Background Colors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/60 overflow-hidden flex flex-col h-full`}
              >
                {/* Subtle accent glow at top */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

                {/* Icon */}
                <div className={`w-20 h-20 rounded-3xl bg-white shadow-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-11 h-11 text-${service.color}-600`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}
                <div className="mt-10 flex items-center gap-2 text-blue-700 font-medium group-hover:gap-3 transition-all">
                  <Link href={service.url} className="flex items-center gap-1">
                   Learn More 
                  <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                  </Link>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">
            Not sure which service fits you best?
          </p>
          <button 
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-3xl font-semibold text-lg transition-all active:scale-95 shadow-lg shadow-blue-200"
            onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}
          >
            Get Personalized Advice
          </button>
        </div>
      </div>
    </section>
  );
}