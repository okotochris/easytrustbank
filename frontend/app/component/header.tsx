// components/Header.tsx
'use client';

import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown,
  UserRound,
  Building2,
  HandCoins,
  CreditCard,
  HeartHandshake,
  Sun,
  Moon
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTheme } from './theme-provider';
import Logo from './logo';

interface HeaderProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

export default function Header({ onLoginClick, onRegisterClick }: HeaderProps = {}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const services = [
    { 
      name: "Personal Banking", 
      icon: UserRound,
      color: "text-blue-600",
      url : "/personal-banking"
    },
    { 
      name: "Business Banking", 
      icon: Building2,
      color: "text-emerald-600",
      url : "/business-banking"
    },
    { 
      name: "Loans & Credit", 
      icon: HandCoins,
      color: "text-amber-600", 
      url : "/dashboard/services/loans"
    },
    { 
      name: "Cards", 
      icon: CreditCard,
      color: "text-purple-600" ,
      url : "/dashboard/cards"
    },
    { 
      name: "Grants & Aid", 
      icon: HeartHandshake,
      color: "text-rose-600", 
      url : "/dashboard/services/grants"
    },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-950 dark:text-white tracking-tight">
                EasyTrust Bank
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 -mt-0.5">
                Trust • Security • Growth
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">About</Link>

            {/* Beautiful Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors py-2 font-medium">
                Services 
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Stylish Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 py-4 px-3 z-50 overflow-hidden">
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 px-4 mb-3 tracking-widest">OUR SERVICES</div>
                  
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link 
                        key={index}
                        href={service.url}
                        className="group/item flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                      >
                        <div className="w-10 h-10 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover/item:bg-white dark:group-hover/item:bg-gray-600 transition-colors">
                          <Icon className={`w-5 h-5 ${service.color}`} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100 group-hover/item:text-blue-700 dark:group-hover/item:text-blue-400 transition-colors">
                            {service.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Secure and reliable solutions</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Contact</Link>
          </nav>

{/* Desktop Right Side - Login + Open Account + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {onLoginClick ? (
              <button
                onClick={onLoginClick}
                className="px-7 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-all"
              >
                Login
              </button>
            ) : (
              <Link
               href={'/dashboard'}
                className="px-7 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-all"
              >
                Login
              </Link>
            )}
            
            {onRegisterClick ? (
              <Link
               href={'/register'}
                className="bg-linear-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white px-7 py-2.5 rounded-2xl font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-200 dark:shadow-blue-900/50 transition-all active:scale-[0.97]"
              >
                Open Account 
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                href={'/register'}
                className="bg-linear-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white px-7 py-2.5 rounded-2xl font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-200 dark:shadow-blue-900/50 transition-all active:scale-[0.97]"
              >
                Open Account 
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Also Beautiful */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-1 text-base">
            <Link href="/" className="py-3.5 px-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl">Home</Link>
            <Link href="/about" className="py-3.5 px-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl">About</Link>

            {/* Mobile Services */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between py-3.5 px-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl text-left font-medium"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="pl-6 mt-2 space-y-1">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link 
                        key={index}
                        href={service.url} 
                        className="flex items-center gap-3 py-3 px-5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-2xl"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <Icon className={`w-4 h-4 ${service.color}`} />
                        </div>
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/contact" className="py-3.5 px-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl">Contact</Link>

            {/* Mobile Action Buttons */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-3 px-2">
              {onLoginClick ? (
                <button
                  onClick={onLoginClick}
                  className="w-full py-4 text-center font-medium border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-3xl hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  Login to Your Account
                </button>
              ) : (
                <Link
                  href={'/login'}
                  className="w-full py-4 text-center font-medium border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-3xl hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  Login to Your Account
                </Link>
              )}
              
              {onRegisterClick ? (
                <button
                  onClick={onRegisterClick}
                  className="w-full bg-linear-to-r from-blue-700 to-indigo-700 text-white py-4 rounded-3xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  Open Your Account Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <Link              
                   href={'/register'}
                  className="w-full bg-linear-to-r from-blue-700 to-indigo-700 text-white py-4 rounded-3xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  Open Your Account Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}