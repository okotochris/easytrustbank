'use client';

import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, Banknote, CreditCard, DollarSign, Bitcoin, Upload, X, CheckCircle } from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function DepositPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Deposit');

  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [amount, setAmount] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const depositMethods = [
    {
      id: 'credit-card',
      name: 'Credit Card',
      icon: <CreditCard className="w-6 h-6" />,
      desc: 'Visa, Mastercard, etc.',
      color: 'bg-gradient-to-br from-blue-600 to-indigo-600',
      disabled: true
    },
    {
      id: 'usdt',
      name: 'USDT (TRC20)',
      icon: <DollarSign className="w-6 h-6" />,
      desc: 'Tether Stablecoin',
      color: 'bg-gradient-to-br from-emerald-600 to-teal-600',
      disabled: true
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <DollarSign className="w-6 h-6" />,
      desc: 'Instant deposit',
      color: 'bg-gradient-to-br from-indigo-600 to-purple-600',
      disabled: true
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      icon: <Bitcoin className="w-6 h-6" />,
      desc: 'BTC Network',
      color: 'bg-gradient-to-br from-orange-600 to-amber-600',
      disabled: true
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      icon: <Banknote className="w-6 h-6" />,
      desc: 'Local bank deposit',
      color: 'bg-gradient-to-br from-green-600 to-emerald-600',
      disabled: false
    }
  ];

  const handleContinue = () => {
    if (selectedMethod === 'bank-transfer' && amount) {
      setShowPaymentModal(true);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProofFile(e.target.files[0]);
    }
  };

  const handleSubmitProof = () => {
    if (!proofFile) return;
    
    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      alert("✅ Proof of payment uploaded successfully!\n\nOur team will verify your deposit within 30 minutes.");
      setShowPaymentModal(false);
      // Reset form
      setAmount('');
      setSelectedMethod('');
      setProofFile(null);
    }, 1500);
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

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Make a Deposit</h1>
            <p className="text-teal-100 mt-3 text-lg">Fund your account quickly and securely</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Deposit Section */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-8">Select Deposit Method</h2>

                {/* Deposit Methods Grid - Compact Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                  {depositMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => !method.disabled && setSelectedMethod(method.id)}
                      className={`p-5 rounded-3xl border-2 transition-all cursor-pointer active:scale-[0.97] ${
                        selectedMethod === method.id
                          ? 'border-emerald-600 bg-emerald-50'
                          : method.disabled
                          ? 'border-gray-200 opacity-60 cursor-not-allowed'
                          : 'border-gray-200 hover:border-emerald-300 hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white mb-4 ${method.color}`}>
                        {method.icon}
                      </div>
                      <h3 className="font-semibold text-base">{method.name}</h3>
                      <p className="text-gray-600 text-xs mt-1">{method.desc}</p>

                      {method.disabled && (
                        <div className="mt-3 text-[10px] text-gray-400 font-medium">Coming Soon</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Amount Input */}
                {selectedMethod && (
                  <div className="space-y-8">
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">Deposit Amount</label>
                      <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl text-gray-400">$</span>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full pl-16 pr-6 py-5 text-4xl font-semibold bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:border-emerald-500"
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleContinue}
                      disabled={!amount || selectedMethod !== 'bank-transfer'}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.985]"
                    >
                      Continue to Bank Transfer
                      <ArrowRight className="w-6 h-6" />
                    </button>

                    <p className="text-center text-xs text-gray-500">
                      Other methods will be available soon
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-7 border border-gray-100 sticky top-6">
                <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  Secure Deposit
                </h3>
                <div className="space-y-5 text-sm">
                  <div className="flex gap-4">
                    <Clock className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Fast Confirmation</p>
                      <p className="text-gray-500 text-xs">Bank transfers usually confirm within 30-60 minutes</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Banknote className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium">No Hidden Fees</p>
                      <p className="text-gray-500 text-xs">Only standard bank charges may apply</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Details + Proof Upload Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Bank Transfer Details</h2>
                <button onClick={() => setShowPaymentModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 space-y-5 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount to Deposit</span>
                  <span className="font-semibold text-xl">${parseFloat(amount || '0').toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bank Name</span>
                  <span className="font-medium">First Bank Nigeria</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Number</span>
                  <span className="font-mono font-medium">0123456789</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Name</span>
                  <span className="font-medium">Your Company Name Ltd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reference</span>
                  <span className="font-mono text-emerald-600">DEP-{Date.now().toString().slice(-6)}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Proof of Payment
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-emerald-300 transition">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="proof-upload"
                  />
                  <label htmlFor="proof-upload" className="cursor-pointer block">
                    <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                    <p className="font-medium text-gray-700">Click to upload receipt</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG or PDF (max 5MB)</p>
                  </label>
                </div>

                {proofFile && (
                  <div className="mt-4 flex items-center gap-3 bg-emerald-50 p-3 rounded-2xl">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm text-emerald-700 truncate">{proofFile.name}</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmitProof}
                disabled={!proofFile || isUploading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3"
              >
                {isUploading ? 'Uploading Proof...' : 'Submit Proof of Payment'}
              </button>

              <p className="text-center text-xs text-gray-500 mt-6">
                Your deposit will be credited after verification
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}