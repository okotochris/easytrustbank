'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, RefreshCw, Shield, Clock, Globe, DollarSign, Send, Banknote, X } from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function InternationalTransferPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('International Transfer');

  // Form states
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [description, setDescription] = useState('');

  const [showPreview, setShowPreview] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

   const methods = [
    {
      id: 'wire',
      name: 'Wire Transfer',
      icon: <Globe className="w-6 h-6" />,
      desc: 'Direct to international banks',
      fee: '15-45',
      time: '1-5 days',
      color: 'bg-gradient-to-br from-blue-600 to-indigo-600'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <DollarSign className="w-6 h-6" />,
      desc: 'To PayPal account',
      fee: '2.9% + $0.30',
      time: 'Instant',
      color: 'bg-gradient-to-br from-indigo-600 to-purple-600'
    },
    {
      id: 'wise',
      name: 'Wise',
      icon: <Send className="w-6 h-6" />,
      desc: 'Low fees & great rates',
      fee: '0.4%-2%',
      time: 'Fast',
      color: 'bg-gradient-to-br from-emerald-600 to-teal-600'
    },
    {
      id: 'cashapp',
      name: 'Cash App',
      icon: <Banknote className="w-6 h-6" />,
      desc: 'Quick Cash App send',
      fee: '$0 - $1',
      time: 'Instant',
      color: 'bg-gradient-to-br from-green-600 to-emerald-600'
    }
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'NGN', 'CAD'];

  const getFeeEstimate = () => {
    if (!amount || !selectedMethod) return '0.00';
    const amt = parseFloat(amount);
    if (selectedMethod === 'wise') return (amt * 0.008).toFixed(2);
    if (selectedMethod === 'paypal') return (amt * 0.029 + 0.3).toFixed(2);
    return '25.00';
  };

  const handlePreview = () => {
    if (!selectedMethod || !amount) return;
    setShowPreview(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showPreview) {
      timer = setTimeout(() => {
        setShowPreview(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }, 7000);
    }
    return () => clearTimeout(timer);
  }, [showPreview]);

  const resetForm = () => {
    setAmount('');
    setRecipientEmail('');
    setAccountHolder('');
    setAccountNumber('');
    setBankName('');
    setSwiftCode('');
    setDescription('');
    setSelectedMethod('');
  };

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

        {/* Hero - Stronger Gradient */}
        <div className="bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">International Transfer</h1>
                <p className="text-indigo-100 mt-2 text-lg">Send money abroad with multiple secure options</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-semibold">Choose Transfer Method</h2>
                  <button 
                    onClick={resetForm}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition"
                  >
                    <RefreshCw className="w-4 h-4" /> Reset
                  </button>
                </div>

                {/* Compact Method Cards */}
                                {/* Compact Method Cards - Much Smaller Now */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {methods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 rounded-3xl border-2 transition-all cursor-pointer active:scale-[0.97] hover:shadow-sm ${
                        selectedMethod === method.id
                          ? 'border-blue-600 bg-blue-50 shadow-sm'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white mb-3 ${method.color}`}>
                        {method.icon}
                      </div>
                      
                      <h3 className="font-semibold text-base leading-tight tracking-tight">
                        {method.name}
                      </h3>
                      
                      <p className="text-gray-600 text-xs mt-1 line-clamp-2 min-h-[32px]">
                        {method.desc}
                      </p>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-[10px] leading-none">
                        <div>
                          <span className="text-gray-500 block">Fee</span>
                          <span className="font-medium text-gray-900">${method.fee}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-500 block">Time</span>
                          <span className="font-medium text-gray-900">{method.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dynamic Form - Only shows when method selected */}
                {selectedMethod && (
                  <div className="space-y-9">
                    {/* Summary Bar */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-blue-600 text-sm font-medium">Sending via {methods.find(m => m.id === selectedMethod)?.name}</p>
                        <p className="text-3xl font-semibold text-blue-700 mt-1">
                          ${amount || '0.00'} <span className="text-xl text-blue-600">{currency}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">Est. Fee</p>
                        <p className="font-semibold text-emerald-600 text-lg">${getFeeEstimate()}</p>
                      </div>
                    </div>

                    {/* Currency Selector */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">Currency</label>
                      <div className="flex flex-wrap gap-2">
                        {currencies.map((cur) => (
                          <button
                            key={cur}
                            onClick={() => setCurrency(cur)}
                            className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition ${
                              currency === cur 
                                ? 'bg-blue-600 text-white shadow-sm' 
                                : 'bg-white border border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            {cur}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Amount */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">Amount to Send</label>
                      <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl text-gray-400">$</span>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full pl-16 pr-6 py-5 text-4xl font-semibold bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500"
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    {/* Dynamic Fields based on method */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {(selectedMethod === 'paypal' || selectedMethod === 'cashapp' || selectedMethod === 'wise') && (
                        <div className="md:col-span-2">
                          <label className="text-gray-700 font-medium mb-2 block">Recipient Email or $Cashtag</label>
                          <input
                            type="text"
                            value={recipientEmail}
                            onChange={(e) => setRecipientEmail(e.target.value)}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                            placeholder="recipient@email.com or $username"
                          />
                        </div>
                      )}

                      {(selectedMethod === 'wire' || selectedMethod === 'wise') && (
                        <>
                          <div>
                            <label className="text-gray-700 font-medium mb-2 block">Account Holder Name</label>
                            <input type="text" value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Full name" />
                          </div>
                          <div>
                            <label className="text-gray-700 font-medium mb-2 block">Account Number / IBAN</label>
                            <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 font-mono" placeholder="IBAN or Account No." />
                          </div>
                          <div>
                            <label className="text-gray-700 font-medium mb-2 block">Bank Name</label>
                            <input type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Bank name" />
                          </div>
                          <div>
                            <label className="text-gray-700 font-medium mb-2 block">SWIFT / BIC Code</label>
                            <input type="text" value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 font-mono" placeholder="SWIFT Code" maxLength={11} />
                          </div>
                        </>
                      )}

                      <div className="md:col-span-2">
                        <label className="text-gray-700 font-medium mb-2 block">Description (Optional)</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Purpose of transfer" />
                      </div>
                    </div>

                    <button
                      onClick={handlePreview}
                      disabled={!amount || !selectedMethod}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.985]"
                    >
                      Preview Transfer
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-7 border border-gray-100">
                <h3 className="font-semibold text-lg mb-6">Secure & Reliable</h3>
                <div className="space-y-6 text-sm">
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium">256-bit Encryption</p>
                      <p className="text-gray-500 text-xs">Your data is protected</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Real-time Monitoring</p>
                      <p className="text-gray-500 text-xs">Fraud protection 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Second Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative">
            <button 
              onClick={() => setShowPreview(false)} 
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                <Send className="w-9 h-9 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-semibold mt-6">Transfer Preview</h2>
              <p className="text-gray-500 mt-1">This window will close in 7 seconds</p>
            </div>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Method</span>
                <span className="font-medium">{methods.find(m => m.id === selectedMethod)?.name}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Amount</span>
                <span className="font-semibold">${amount} {currency}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Fee</span>
                <span className="font-semibold text-emerald-600">${getFeeEstimate()}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-10 text-center">
            <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
              <Send className="w-11 h-11 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-semibold mt-6 text-emerald-700">Transfer Initiated!</h2>
            <p className="mt-3 text-gray-600">Your money is on the way.</p>
          </div>
        </div>
      )}
    </div>
  );
}