// components/BonusPromo.tsx
'use client';

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface BonusPromoProps {
  onRegisterClick: () => void;
}

export default function BonusPromo({ onRegisterClick }: BonusPromoProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/201/800/600" 
                alt="Happy customer opening bank account"
                className="w-full h-full object-cover rounded-3xl"
              />
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-white text-blue-700 font-bold text-2xl px-8 py-4 rounded-3xl shadow-xl flex items-center gap-3">
              <span>$200</span>
              <span className="text-sm font-normal text-gray-500">Bonus</span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium mb-6">
                LIMITED TIME OFFER
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Get <span className="text-yellow-300">$200</span> with a Checking Account built for you
              </h2>
            </div>

            <p className="text-2xl text-blue-100">
              Start building your financial strength today
            </p>

            <p className="text-lg text-blue-100 max-w-lg">
              For a limited time, receive $200 when you open a new checking account. 
              Open online in minutes or visit us at any of our branches.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">No minimum balance required</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Free online and mobile banking</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">24/7 customer support</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Open online or in-branch</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onRegisterClick}
              className="mt-8 group bg-white text-blue-950 hover:bg-yellow-300 hover:text-blue-950 px-10 py-5 rounded-3xl font-semibold text-xl flex items-center gap-3 transition-all duration-300 active:scale-95 shadow-xl"
            >
              Open Account Now & Claim $200
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-blue-200 pt-4">
              *Offer valid for new customers only. $200 bonus deposited after meeting qualifying conditions. 
              Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}