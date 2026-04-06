'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../component/Sidebar';
import Header from '../component/headerbar';
import { ArrowUpRight, ArrowDownRight, Receipt, UserPlus, Building2, Send, PiggyBank, CreditCard, Plus } from 'lucide-react';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Overview');

  const balance = 12487.65;
  const savings = 8750.00;
  const creditAvailable = 3450.00;

  const recentTransactions = [
    { id: 1, type: 'credit', amount: 1250.00, description: 'Salary Deposit', date: 'April 3, 2026', category: 'Income' },
    { id: 2, type: 'debit', amount: 89.99, description: 'Netflix Subscription', date: 'April 2, 2026', category: 'Entertainment' },
    { id: 3, type: 'debit', amount: 245.50, description: 'Whole Foods Market', date: 'April 1, 2026', category: 'Groceries' },
    { id: 4, type: 'credit', amount: 320.00, description: 'Freelance Payment', date: 'March 30, 2026', category: 'Income' },
  ];

  const accountStatementInfo = [
    { id: 1, icon: CreditCard, title: 'Available', amount: 500000.00, footer: 'Account Limit' },
    { id: 2, icon: Send, title: 'This Month', amount: 0.00, footer: 'Monthly Deposits' },
    { id: 3, icon: PiggyBank, title: 'This Month', amount: 0.00, footer: 'Monthly Expenses' },
    { id: 4, icon: CreditCard, title: 'All Time', amount: 0.00, footer: 'Total Volume' },
  ];

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

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:px-6 lg:py-10">
          
          {/* Account Statement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {accountStatementInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div 
                  key={info.id} 
                  className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{info.title}</p>
                    <p className="text-2xl font-semibold mt-1 text-gray-900 dark:text-white">
                      ${info.amount.toLocaleString()}
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">{info.footer}</p> 
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Main Balance Card */}
            <div className="lg:col-span-8">
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 
                              dark:from-blue-700 dark:via-indigo-700 dark:to-violet-800 
                              text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                
                {/* Subtle background accent */}
                <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#ffffff15_0%,transparent_50%)] dark:bg-[radial-gradient(at_top_right,#ffffff10_0%,transparent_60%)]"></div>

                {/* Top Section */}
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/easytrust-logo-white.png" 
                      alt="EasyTrust Bank" 
                      className="w-11 h-11 drop-shadow-md" 
                    />
                    <div>
                      <p className="text-blue-100 dark:text-blue-200 text-sm font-medium">EasyTrust Bank</p>
                      <h3 className="text-2xl font-semibold tracking-tight">Primary Account</h3>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl text-center border border-white/20">
                    <p className="text-xs text-blue-200 tracking-widest">ACCOUNT NUMBER</p>
                    <p className="font-mono font-medium">••••••••8978</p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-between gap-10 relative z-10">
                  {/* Left Side */}
                  <div className="flex w-full md:w-auto ">
                    <div className="flex flex-col gap-1">
                      <p className="text-blue-200 text-sm">Account Holder</p>
                      <h2 className="text-lg font-semibold">Okoto..</h2>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-emerald-300 text-sm font-medium">Active</span>
                      </div>
                      <span className="text-amber-300 text-sm">Verification required</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-blue-200 text-sm">Fiat Balance</p>
                      <h2 className="text-lg font-semibold font-mono tracking-tighter">${balance.toLocaleString()}</h2>
                      <span className="text-blue-200 text-sm">USD Balance</span>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex flex-col md:items-end gap-8">
                    <div className="text-right">
                      <p className="text-blue-200 text-sm">Total Portfolio</p>
                      <h2 className="text-lg font-semibold font-mono tracking-tighter">$0.00</h2>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 transition-all px-7 py-4 rounded-2xl group">
                        <Send className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                        <span className="font-medium">Send Money</span>
                      </button>

                      <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 transition-all px-7 py-4 rounded-2xl group">
                        <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Add Money</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions - Improved */}
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Send, name: "Transfer", color: "blue" },
                    { icon: Receipt, name: "Pay Bill", color: "emerald" },
                    { icon: UserPlus, name: "Request Money", color: "amber" },
                    { icon: Building2, name: "Bank Details", color: "violet" },
                  ].map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <div 
                        key={index}
                        className="group bg-gray-50 dark:bg-zinc-800 hover:bg-white dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700 hover:border-blue-200 dark:hover:border-blue-600 rounded-3xl py-8 px-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-md active:scale-95"
                      >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-${action.color}-100 dark:bg-${action.color}-950 group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-7 h-7 text-${action.color}-600 dark:text-${action.color}-400`} />
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                          {action.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="lg:col-span-4 space-y-6">
              {/* Credit Card */}
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Credit Card</p>
                    <p className="text-4xl font-bold mt-6 text-gray-900 dark:text-white">
                      ${creditAvailable}
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 mt-2 text-sm">Available Credit</p>
                  </div>
                  <CreditCard className="w-14 h-14 text-amber-500" />
                </div>
              </div>

              {/* Quick Actions (Small) */}
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
                <p className="font-semibold mb-6 text-lg text-gray-900 dark:text-white">Quick Actions</p>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/dashboard/transfers/local" className="bg-gray-50 dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-950 border border-gray-200 dark:border-zinc-700 hover:border-blue-200 py-7 rounded-3xl flex flex-col items-center transition-all">
                    <Send className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Transfer</span>
                  </Link>
                  <Link href="/dashboard/deposit" className="bg-gray-50 dark:bg-zinc-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 border border-gray-200 dark:border-zinc-700 hover:border-emerald-200 py-7 rounded-3xl flex flex-col items-center transition-all">
                    <PiggyBank className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-2" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Deposit</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="lg:col-span-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
                <Link href="/dashboard/transactions" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  View all →
                </Link>
              </div>

              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm divide-y divide-gray-100 dark:divide-zinc-800">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="px-6 py-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800 transition">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
                        ${tx.type === 'credit' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600' : 'bg-red-100 dark:bg-red-950 text-red-600'}`}>
                        {tx.type === 'credit' ? <ArrowUpRight size={26} /> : <ArrowDownRight size={26} />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{tx.description}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tx.category} • {tx.date}</p>
                      </div>
                    </div>
                    <p className={`font-semibold text-lg ${tx.type === 'credit' ? 'text-emerald-600' : 'text-red-600'}`}>
                      {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}