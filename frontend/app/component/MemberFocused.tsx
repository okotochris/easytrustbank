// components/MemberFocused.tsx
'use client';

import React from 'react';
import { Users, TrendingUp, Heart, Award } from 'lucide-react';

export default function MemberFocused() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-3 text-blue-600 mb-6">
                <div className="w-8 h-px bg-blue-600"></div>
                <span className="uppercase tracking-widest font-medium text-sm">WHO WE ARE</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Member-Focused Banking
              </h2>
              <p className="text-3xl text-gray-700 mt-4">Building Strength Together</p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              EasyTrust Bank is a full-service financial institution built on the foundation of 
              putting our members first. We’re committed to helping you achieve your financial goals 
              through personalized service, competitive rates, and genuine care.
            </p>

            {/* Key Points */}
            <div className="space-y-8 pt-6">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2  text-gray-700">Competitive Rates</h4>
                  <p className="text-gray-600">
                    Better rates on savings, loans, and credit cards designed to maximize your financial growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2  text-gray-700">Member-Focused</h4>
                  <p className="text-gray-600">
                    We’re owned by our members, not shareholders. Your success is our top priority.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2  text-gray-700">Community Committed</h4>
                  <p className="text-gray-600">
                    Supporting local communities and causes that matter most to our members.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 4 Images Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="/image1.webp" 
                  alt="Happy family banking"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="https://picsum.photos/id/201/600/600" 
                  alt="Business meeting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-6 pt-12">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="/image2.webp" 
                  alt="Community support"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="/image3.webp" 
                  alt="Modern banking"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}