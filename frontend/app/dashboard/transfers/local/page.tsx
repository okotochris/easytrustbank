'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, RefreshCw, Plus, Shield, Lock, Clock, Banknote, ChevronDown 
} from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function LocalTransferPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Local Transfer');

  const [amount, setAmount] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [description, setDescription] = useState('');

  const [showPreview, setShowPreview] = useState(false);

  const quickAmounts = [100, 500, 1000, 5000];

  const accountTypes = [
    { value: '', label: 'Select Account Type' },
    { value: 'Personal', label: 'Personal Account' },
    { value: 'Business', label: 'Business Account' },
    { value: 'Savings', label: 'Savings Account' },
    { value: 'Checking', label: 'Checking Account' },
    { value: 'Others', label: 'Others' }
  ];

  const handleQuickAmount = (value: number) => setAmount(value.toString());

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
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 dark:from-blue-800 dark:via-indigo-800 dark:to-violet-800 text-white py-14 rounded-3xl mb-10">
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Local Transfer</h1>
                    <p className="text-blue-100 mt-3 text-lg">Send money to any local bank account securely and instantly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Main Form */}
              <div className="lg:col-span-8">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-8 border border-gray-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Make a Transfer</h2>
                    <button 
                      onClick={() => {
                        setAmount('');
                        setAccountHolder('');
                        setAccountNumber('');
                        setBankName('');
                        setAccountType('');
                        setRoutingNumber('');
                        setDescription('');
                      }}
                      className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                    >
                      <RefreshCw className="w-5 h-5" />
                      Reset
                    </button>
                  </div>

                  {/* Available Balance */}
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-2xl p-6 mb-10 flex items-center justify-between">
                    <div>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Available Balance</p>
                      <p className="text-4xl font-semibold text-blue-700 dark:text-blue-300 mt-1">$12,487.65</p>
                      <p className="text-blue-600/70 dark:text-blue-400/70 text-sm mt-1">USD • Available for transfer</p>
                    </div>
                    <Banknote className="w-14 h-14 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Amount */}
                  <div className="mb-10">
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-3">Transfer Amount</label>
                    <div className="relative">
                      <span className="absolute left-6 top-5 text-4xl text-gray-400">$</span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full pl-16 pr-6 py-6 text-5xl font-semibold bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-3xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>

                    <div className="flex flex-wrap gap-3 mt-5">
                      {quickAmounts.map((amt) => (
                        <button
                          key={amt}
                          onClick={() => handleQuickAmount(amt)}
                          className={`px-6 py-3 rounded-2xl text-sm font-medium transition ${
                            amount === amt.toString() 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-600'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Beneficiary Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 font-medium mb-2 block">Account Holder Name</label>
                      <input
                        type="text"
                        value={accountHolder}
                        onChange={(e) => setAccountHolder(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                        placeholder="Full name"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-300 font-medium mb-2 block">Account Number</label>
                      <input
                        type="text"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 font-mono text-gray-900 dark:text-white"
                        placeholder="0123456789"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-300 font-medium mb-2 block">Bank Name</label>
                      <input
                        type="text"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                        placeholder="Enter bank name"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-300 font-medium mb-2 block">Account Type</label>
                      <div className="relative">
                        <select
                          value={accountType}
                          onChange={(e) => setAccountType(e.target.value)}
                          className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white appearance-none"
                        >
                          {accountTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-300 font-medium mb-2 block">Routing Number</label>
                      <input
                        type="text"
                        value={routingNumber}
                        onChange={(e) => setRoutingNumber(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 font-mono text-gray-900 dark:text-white"
                        placeholder="9-digit routing number"
                        maxLength={9}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-gray-700 dark:text-gray-300 font-medium mb-2 block">Description / Memo (Optional)</label>
                      <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                        placeholder="Payment for services or invoice #12345"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setShowPreview(true)}
                    className="mt-12 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.985]"
                  >
                    Preview Transfer
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800">
                <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-white">Quick Transfer</h3>
                <div className="text-center py-14 border border-dashed border-gray-300 dark:border-zinc-700 rounded-3xl">
                  <Plus className="w-12 h-12 text-gray-300 dark:text-zinc-600 mx-auto mb-4" />
                  <p className="font-medium text-gray-600 dark:text-gray-400">No saved beneficiaries yet</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Add one to get started</p>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800">
                <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-white">Bank-Level Security</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">256-bit SSL Encryption</p>
                      <p className="text-gray-500 dark:text-gray-400">All transfers are encrypted</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Lock className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Zero Data Storage</p>
                      <p className="text-gray-500 dark:text-gray-400">We never store your details</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">24/7 Monitoring</p>
                      <p className="text-gray-500 dark:text-gray-400">Real-time fraud protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Preview Transfer</h2>
            
            <div className="space-y-5">
              <div className="flex justify-between py-3 border-b dark:border-zinc-700">
                <span className="text-gray-500 dark:text-gray-400">Recipient</span>
                <span className="font-medium text-gray-900 dark:text-white">{accountHolder || '—'}</span>
              </div>
              <div className="flex justify-between py-3 border-b dark:border-zinc-700">
                <span className="text-gray-500 dark:text-gray-400">Account Number</span>
                <span className="font-mono text-gray-900 dark:text-white">{accountNumber || '—'}</span>
              </div>
              <div className="flex justify-between py-3 border-b dark:border-zinc-700">
                <span className="text-gray-500 dark:text-gray-400">Bank</span>
                <span className="text-gray-900 dark:text-white">{bankName || '—'}</span>
              </div>
              <div className="flex justify-between py-3 border-b dark:border-zinc-700">
                <span className="text-gray-500 dark:text-gray-400">Account Type</span>
                <span className="text-gray-900 dark:text-white">{accountType || '—'}</span>
              </div>
              <div className="flex justify-between py-3 border-b dark:border-zinc-700 font-semibold text-lg">
                <span>Amount</span>
                <span className="text-gray-900 dark:text-white">${amount || '0.00'}</span>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button
                onClick={() => setShowPreview(false)}
                className="flex-1 py-4 border border-gray-300 dark:border-zinc-700 rounded-2xl font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-900 dark:text-white"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  alert("✅ Transfer initiated successfully!");
                  setShowPreview(false);
                }}
                className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700"
              >
                Confirm Transfer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}