// components/Hero.tsx
'use client';

import React from 'react';
import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';


interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const router = useRouter();
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      
      {/* Background Image - Made BOLD and Visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat 
                   scale-[1.08] brightness-110 contrast-125 saturate-110"
        style={{
          backgroundImage: "url('/heroimage.jpg')",
        }}
      />

      {/* Lighter Overlay - This is the key fix */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-indigo-950/65 to-violet-950/70"></div>

      {/* Soft vignette to keep edges dark but center bright */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#00000000_40%,#00000080_100%)]"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Glowing orbs - Reduced intensity so they don't overpower the image */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-[550px] h-[550px] bg-purple-500/15 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-10">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-3xl border border-white/10 text-sm font-medium">
              <div className="flex items-center gap-1.5">
                🇨🇦 <span>Montréal HQ</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-1.5">
                🇫🇷 <span>Paris Branch</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter text-white">
              Banking that truly<br />
              puts <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                you first
              </span>.
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 max-w-lg leading-relaxed">
              Secure, intelligent digital banking with competitive rates, 
              global access, and service designed around you.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-4">
              <div>
                <div className="text-4xl font-semibold font-mono text-white">50K<span className="text-cyan-400">+</span></div>
                <div className="text-blue-200 text-sm mt-1">Happy Members</div>
              </div>
              <div>
                <div className="text-4xl font-semibold font-mono text-white">$3.2B</div>
                <div className="text-blue-200 text-sm mt-1">Assets Managed</div>
              </div>
              <div>
                <div className="text-4xl font-semibold font-mono text-white">4.25<span className="text-cyan-400">%</span></div>
                <div className="text-blue-200 text-sm mt-1">High-Yield Savings</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={() => router.push('/register')}
                className="group bg-white hover:bg-blue-50 text-blue-950 px-10 py-5 rounded-3xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 shadow-2xl"
              >
                Open Account Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => router.push('/dashboard')}
                className="border-2 border-white/60 hover:border-white text-white px-9 py-5 rounded-3xl font-medium text-lg transition-all hover:bg-white/10"
              >
               Login
              </button>
            </div>

            {/* Trust Bar */}
            <div className="flex items-center gap-8 pt-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" /> Bank-grade security
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" /> Member-owned
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" /> Competitive rates
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="relative hidden lg:block">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
              <div className="text-center mb-8">
                <p className="italic text-2xl leading-tight text-white">
                  “The most trustworthy and user-friendly banking experience I’ve ever had.”
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full overflow-hidden border-2 border-white/30">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Marie Dubois" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Marie Dubois</p>
                  <p className="text-blue-200 text-sm">Paris Branch • Verified Customer</p>
                </div>
              </div>
            </div>

            {/* Floating Security Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 rounded-3xl px-7 py-5 shadow-2xl flex items-center gap-4">
              <Shield className="w-8 h-8 text-emerald-500" />
              <div>
                <p className="font-semibold text-sm">256-bit Encryption</p>
                <p className="text-xs text-gray-500">Your money is protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 hidden md:flex flex-col items-center text-white/60 z-10">
        <span className="text-xs tracking-[3px] mb-3">SCROLL TO EXPLORE</span>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>
    </section>
  );
}