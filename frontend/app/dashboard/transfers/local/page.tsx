'use client';

import React, { useState } from 'react';
import { ArrowRight, RefreshCw, Plus, Shield, Lock, Clock, Banknote, ChevronDown } from 'lucide-react';
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

  const quickAmounts = [100, 500, 1000, 5000];

  const handleQuickAmount = (value: number) => setAmount(value.toString());

  const [showPreview, setShowPreview] = useState(false);

  const accountTypes = [
    { value: '', label: 'Select Account Type' },
    { value: 'Personal', label: 'Personal Account' },
    { value: 'Business', label: 'Business Account' },
    { value: 'Savings', label: 'Savings Account' },
    { value: 'Checking', label: 'Checking Account' },
    { value: 'Others', label: 'Others' }
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

      <div className="flex-1">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 text-white py-14">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Local Transfer</h1>
                <p className="text-blue-100 mt-3 text-lg">Send money to any local bank account securely and instantly</p>
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-6 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Secure</p>
                    <p className="text-blue-200 text-xs">Bank-level protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Instant</p>
                    <p className="text-blue-200 text-xs">Real-time transfer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Free</p>
                    <p className="text-blue-200 text-xs">No hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-semibold">Make a Transfer</h2>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <RefreshCw className="w-5 h-5" />
                    Refresh
                  </button>
                </div>

                {/* Available Balance */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm font-medium">Available Balance</p>
                    <p className="text-4xl font-semibold text-blue-700 mt-1">$12,487.65</p>
                    <p className="text-blue-600/70 text-sm mt-1">USD • Available for transfer</p>
                  </div>
                  <Banknote className="w-14 h-14 text-blue-600" />
                </div>

                {/* Amount */}
                <div className="mb-10">
                  <label className="block text-gray-700 font-medium mb-3">Transfer Amount</label>
                  <div className="relative">
                    <span className="absolute left-6 top-5 text-4xl text-gray-400">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-16 pr-6 py-6 text-5xl font-semibold bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 mt-5">
                    {quickAmounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => handleQuickAmount(amt)}
                        className={`px-6 py-3 rounded-2xl text-sm font-medium transition ${amount === amt.toString() ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 hover:border-blue-500'}`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Beneficiary Form - Compact Row Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-700 font-medium mb-2 block">Account Holder Name</label>
                    <input
                      type="text"
                      value={accountHolder}
                      onChange={(e) => setAccountHolder(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium mb-2 block">Account Number</label>
                    <input
                      type="text"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 font-mono"
                      placeholder="0123456789"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium mb-2 block">Bank Name</label>
                    <input
                      type="text"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                      placeholder="Enter bank name"
                    />
                  </div>

                  {/* Account Type Dropdown */}
                  <div>
                    <label className="text-gray-700 font-medium mb-2 block">Account Type</label>
                    <div className="relative">
                      <select
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 appearance-none"
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
                    <label className="text-gray-700 font-medium mb-2 block">Routing Number</label>
                    <input
                      type="text"
                      value={routingNumber}
                      onChange={(e) => setRoutingNumber(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 font-mono"
                      placeholder="9-digit routing number"
                      maxLength={9}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-gray-700 font-medium mb-2 block">Description / Memo (Optional)</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
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

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="font-semibold text-xl mb-6">Quick Transfer</h3>
                <div className="text-center py-14 border border-dashed border-gray-300 rounded-3xl">
                  <Plus className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="font-medium text-gray-600">No saved beneficiaries yet</p>
                  <p className="text-sm text-gray-500 mt-1">Add one to get started</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg mb-6">Bank-Level Security</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium">256-bit SSL Encryption</p>
                      <p className="text-sm text-gray-500">All transfers are encrypted</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Lock className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium">Zero Data Storage</p>
                      <p className="text-sm text-gray-500">We never store your details</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium">24/7 Monitoring</p>
                      <p className="text-sm text-gray-500">Real-time fraud protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8">
            <h2 className="text-2xl font-semibold mb-6">Preview Transfer</h2>
            
            <div className="space-y-5">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Recipient</span>
                <span className="font-medium">{accountHolder || '—'}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Account Number</span>
                <span className="font-mono">{accountNumber || '—'}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Bank</span>
                <span>{bankName || '—'}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Account Type</span>
                <span>{accountType || '—'}</span>
              </div>
              <div className="flex justify-between py-3 border-b font-semibold text-lg">
                <span>Amount</span>
                <span>${amount || '0.00'}</span>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button
                onClick={() => setShowPreview(false)}
                className="flex-1 py-4 border border-gray-300 rounded-2xl font-medium hover:bg-gray-50"
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