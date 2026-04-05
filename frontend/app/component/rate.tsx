// components/Rates.tsx
'use client';

import React from 'react';
import { 
  PiggyBank, 
  Calendar, 
  CreditCard, 
  HandCoins, 
  TrendingUp 
} from 'lucide-react';

export default function Rates() {
  const rateCards = [
    {
      label: "High Yield Savings",
      rate: "4.25% APY",
      subtext: "Earn more on your savings",
      icon: PiggyBank,
      color: "blue",
      bgColor: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600"
    },
    {
      label: "12-Month Term Deposit",
      rate: "4.10% APY",
      subtext: "Guaranteed returns",
      icon: Calendar,
      color: "emerald",
      bgColor: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600"
    },
    {
      label: "Credit Cards",
      rate: "From 5.99% APR",
      subtext: "Rewards & cashback",
      icon: CreditCard,
      color: "amber",
      bgColor: "from-amber-50 to-orange-50",
      iconColor: "text-amber-600"
    },
    {
      label: "Personal Loans",
      rate: "From 7.49% APR",
      subtext: "Flexible financing",
      icon: HandCoins,
      color: "rose",
      bgColor: "from-rose-50 to-pink-50",
      iconColor: "text-rose-600"
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-3xl shadow-sm mb-6">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-blue-700">Competitive Rates</span>
          </div>
          
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            Grow your money faster
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-leading rates designed to help your savings and investments thrive
          </p>
        </div>

        {/* Rates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rateCards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-10 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden"
              >
                {/* Background accent */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${card.bgColor} opacity-60 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:opacity-80 transition-all`}></div>

                {/* Icon */}
                <div className="relative z-10 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
                    <Icon className={`w-10 h-10 ${card.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-semibold text-2xl text-gray-900 mb-2">
                    {card.label}
                  </h3>
                  
                  <p className="text-gray-500 text-lg mb-8 min-h-[3.25rem]">
                    {card.subtext}
                  </p>

                  <div className="mt-auto">
                    <p className="text-4xl font-bold tracking-tighter text-gray-900">
                      {card.rate}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">*Rates as of April 2026</p>
                  </div>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-500 mt-12">
          *Annual Percentage Yield (APY) and Annual Percentage Rate (APR) are subject to change. 
          Terms and conditions apply. Please see our full rate sheet for complete details.
        </p>
      </div>
    </section>
  );
}