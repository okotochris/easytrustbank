'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../component/Sidebar';
import Header from '../component/headerbar';
import { ArrowUpRight, ArrowDownRight, Send, PiggyBank, CreditCard } from 'lucide-react';

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

      <div className="flex-1 min-w-0">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-10">
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">Good morning, Alex 👋</h1>
            <p className="text-gray-600 mt-2">Here&apos;s an overview of your finances</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Balance Card */}
            <div className="lg:col-span-8">
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white rounded-3xl p-8 lg:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div>
                    <p className="text-blue-100 text-sm font-medium tracking-widest">TOTAL BALANCE</p>
                    <p className="text-5xl lg:text-6xl font-bold tracking-tighter mt-6">
                      ${balance.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 mt-5 text-emerald-300">
                      <ArrowUpRight className="w-6 h-6" />
                      <span className="font-medium">+$428 this month (3.4%)</span>
                    </div>
                  </div>

                  <div className="flex gap-10">
                    <div>
                      <p className="text-blue-200 text-sm">Checking</p>
                      <p className="font-semibold mt-2 text-xl">$4,287.65</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Savings</p>
                      <p className="font-semibold mt-2 text-xl">${savings.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500">Credit Card</p>
                    <p className="text-4xl font-bold mt-6">${creditAvailable}</p>
                    <p className="text-emerald-600 mt-2 text-sm">Available Credit</p>
                  </div>
                  <CreditCard className="w-14 h-14 text-amber-500" />
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <p className="font-semibold mb-6 text-lg">Quick Actions</p>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/dashboard/transfers/local" className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 py-7 rounded-3xl flex flex-col items-center transition-all">
                    <Send className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium">Transfer</span>
                  </Link>
                  <Link href="/dashboard/deposit" className="bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 py-7 rounded-3xl flex flex-col items-center transition-all">
                    <PiggyBank className="w-8 h-8 text-emerald-600 mb-2" />
                    <span className="text-sm font-medium">Deposit</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="lg:col-span-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">Recent Transactions</h3>
                <Link href="/dashboard/transactions" className="text-blue-600 hover:underline text-sm font-medium">
                  View all →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm divide-y">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="px-6 py-6 flex items-center justify-between hover:bg-gray-50 transition">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
                        ${tx.type === 'credit' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                        {tx.type === 'credit' ? <ArrowUpRight size={26} /> : <ArrowDownRight size={26} />}
                      </div>
                      <div>
                        <p className="font-medium">{tx.description}</p>
                        <p className="text-sm text-gray-500 mt-1">{tx.category} • {tx.date}</p>
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