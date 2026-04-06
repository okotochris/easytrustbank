'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, Shield, Clock, Users, Briefcase, GraduationCap, 
  Heart, Award, X, CheckCircle 
} from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function GrantPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Grant');

  const [selectedGrantType, setSelectedGrantType] = useState<string>('');
  const [amount, setAmount] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [purpose, setPurpose] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const grantTypes = [
    { 
      id: 'business', 
      name: 'Business Grant', 
      icon: <Briefcase className="w-6 h-6" />, 
      desc: 'Support for startups and business expansion',
      color: 'bg-gradient-to-br from-emerald-600 to-teal-600'
    },
    { 
      id: 'education', 
      name: 'Education Grant', 
      icon: <GraduationCap className="w-6 h-6" />, 
      desc: 'Funding for studies and skill development',
      color: 'bg-gradient-to-br from-blue-600 to-indigo-600'
    },
    { 
      id: 'community', 
      name: 'Community Grant', 
      icon: <Users className="w-6 h-6" />, 
      desc: 'Projects that benefit local communities',
      color: 'bg-gradient-to-br from-violet-600 to-purple-600'
    },
    { 
      id: 'health', 
      name: 'Health & Wellness Grant', 
      icon: <Heart className="w-6 h-6" />, 
      desc: 'Medical and wellness initiatives',
      color: 'bg-gradient-to-br from-rose-600 to-pink-600'
    },
    { 
      id: 'innovation', 
      name: 'Innovation Grant', 
      icon: <Award className="w-6 h-6" />, 
      desc: 'Research and technology development',
      color: 'bg-gradient-to-br from-amber-600 to-orange-600'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGrantType || !amount || !fullName || !email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        // Reset form
        setSelectedGrantType('');
        setAmount('');
        setFullName('');
        setEmail('');
        setPhone('');
        setPurpose('');
      }, 5000);
    }, 1800);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-zinc-950">
      
      <Sidebar
        openSection={openSection}
        activeItem={activeItem}
        setOpenSection={setOpenSection}
        setActiveItem={setActiveItem}
        isMobileOpen={isSidebarOpen}
        setIsMobileOpen={setIsSidebarOpen}
      />

      {/* Main Content Area - Independent Scroll */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:px-6 lg:py-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 dark:from-emerald-800 dark:via-teal-800 dark:to-cyan-800 text-white py-14 rounded-3xl mb-10">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Grants & Funding</h1>
                <p className="text-teal-100 mt-4 text-lg max-w-2xl mx-auto">
                  Apply for non-repayable grants to support your business, education, or community projects
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-8 border border-gray-200 dark:border-zinc-800">
                  <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Available Grant Types</h2>

                  {/* Grant Type Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {grantTypes.map((grant) => (
                      <div
                        key={grant.id}
                        onClick={() => setSelectedGrantType(grant.id)}
                        className={`p-6 rounded-3xl border-2 transition-all cursor-pointer hover:shadow-sm ${
                          selectedGrantType === grant.id 
                            ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950' 
                            : 'border-gray-200 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-600'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5 ${grant.color}`}>
                          {grant.icon}
                        </div>
                        <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">{grant.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{grant.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Application Form */}
                  {selectedGrantType && (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-3">Requested Grant Amount ($)</label>
                        <div className="relative">
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl text-gray-400">$</span>
                          <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full pl-16 pr-6 py-6 text-4xl font-semibold bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-3xl focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
                            placeholder="0.00"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email Address</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Purpose of Grant</label>
                        <textarea
                          value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                          rows={4}
                          className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-3xl focus:outline-none focus:border-emerald-500 resize-y text-gray-900 dark:text-white"
                          placeholder="Briefly describe how you plan to use the grant funds..."
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !amount}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.985]"
                      >
                        {isSubmitting ? 'Submitting Application...' : 'Submit Grant Application'}
                        <ArrowRight className="w-6 h-6" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800">
                  <h3 className="font-semibold text-xl mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    Why Apply Through Us?
                  </h3>
                  <div className="space-y-6 text-sm">
                    <div className="flex gap-4">
                      <Clock className="w-6 h-6 text-emerald-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Fast Review</p>
                        <p className="text-gray-500 dark:text-gray-400">Applications reviewed within 7–14 days</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Award className="w-6 h-6 text-emerald-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Non-Repayable</p>
                        <p className="text-gray-500 dark:text-gray-400">True grants — no repayment required</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Important Note</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All grants are subject to eligibility verification and availability of funds. 
                    Providing accurate information improves your chances of approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full p-10 text-center">
            <div className="w-20 h-20 mx-auto bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-semibold mt-6 text-emerald-700 dark:text-emerald-400">Application Submitted!</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Thank you! Your grant application has been received. 
              Our team will review it shortly.
            </p>
            <div className="mt-8 text-xs text-gray-500 dark:text-gray-400 font-mono">
              Reference: GR-{Date.now().toString().slice(-8)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}