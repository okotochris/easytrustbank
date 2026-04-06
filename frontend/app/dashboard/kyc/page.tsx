'use client';

import React, { useState } from 'react';
import { ArrowRight, Shield, CheckCircle, X, Upload, Camera, UserCheck } from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function KycPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('KYC');

  // Step control: 1 = Terms & Conditions, 2 = KYC Form
  const [step, setStep] = useState(1);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // KYC Form States
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    idType: '',
    idNumber: '',
  });

  const [idFront, setIdFront] = useState<File | null>(null);
  const [idBack, setIdBack] = useState<File | null>(null);
  const [selfie, setSelfie] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'front' | 'back' | 'selfie') => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (type === 'front') setIdFront(file);
      if (type === 'back') setIdBack(file);
      if (type === 'selfie') setSelfie(file);
    }
  };

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    setStep(2); // Move to KYC Form
  };

  const handleSubmitKyc = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idFront || !idBack || !selfie) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        // Reset everything
        setStep(1);
        setAcceptedTerms(false);
        setFormData({ fullName: '', dateOfBirth: '', address: '', idType: '', idNumber: '' });
        setIdFront(null);
        setIdBack(null);
        setSelfie(null);
      }, 4500);
    }, 2000);
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

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:px-6 lg:py-10">
          <div className="max-w-4xl mx-auto">

            {/* Step 1: Terms & Conditions */}
            {step === 1 && (
              <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-10 border border-gray-200 dark:border-zinc-800">
                <div className="text-center mb-10">
                  <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">Account Verification</h1>
                  <p className="text-2xl mt-3 text-violet-600 dark:text-violet-400">Verify Your Identity</p>
                </div>

                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                  <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Welcome to Prime West United Bank</h2>
                  <p className="text-lg">Dear Chris Okoto,</p>
                  <p className="mt-6">
                    Welcome Onboard! Prime West United Bank is the market most innovative and fastest-growing company in the financial industry. 
                    We look forward to working with you to help you get the most out of our financial services and realize your banking goals.
                  </p>
                  <p className="mt-6">
                    Here at Prime West United Bank, we are committed to providing a wide variety of savings, investment, and loan products, 
                    all designed to meet your specific needs. Our services are being used by over two million customers around the world.
                  </p>
                  <p className="mt-6">
                    Our excellent customer support team is available 24/7 to help you with any questions. You can contact them at: 
                    <span className="text-blue-600 dark:text-blue-400"> info@primewestunitedb.cc</span>.
                  </p>

                  <h3 className="text-2xl font-semibold mt-12 mb-6">Terms and Conditions</h3>
                  <p className="mb-6">
                    Before you can start using our online service you must agree to be bound by the conditions below. 
                    You must read the conditions before you decide whether to accept them.
                  </p>

                  <div className="bg-gray-50 dark:bg-zinc-800 p-8 rounded-3xl text-sm leading-relaxed border border-gray-200 dark:border-zinc-700 max-h-[380px] overflow-y-auto custom-scrollbar">
                    <strong>1. DEFINITIONS</strong><br />
                    In these conditions the following words have the following meanings:<br /><br />
                    ACCOUNT: any account which you hold and access via our online service.<br />
                    ADDITIONAL SECURITY DETAILS: the additional information you give us to help us identify you...<br /><br />
                    {/* You can keep the full terms text here as you had before */}
                    <p className="mt-6">Prime West United Bank service is available to you if you are 18 years of age or over.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-12">
                  <button
                    onClick={handleAcceptTerms}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-3xl font-semibold text-lg transition-all active:scale-[0.985]"
                  >
                    I Accept & Proceed to Verification
                  </button>

                  <button
                    onClick={() => alert("You have declined the terms. Registration cannot proceed.")}
                    className="flex-1 border-2 border-red-500 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 py-5 rounded-3xl font-semibold text-lg transition-all"
                  >
                    Decline
                  </button>
                </div>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
                  Need help? Contact support at info@primewestunitedb.cc
                </p>
              </div>
            )}

            {/* Step 2: KYC Form */}
            {step === 2 && (
              <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-10 border border-gray-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-8">
                  <UserCheck className="w-8 h-8 text-violet-600" />
                  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Complete Your KYC</h2>
                </div>

                <form onSubmit={handleSubmitKyc} className="space-y-10">
                  {/* Personal Info */}
                  <div>
                    <h3 className="font-semibold text-lg mb-5 text-gray-900 dark:text-white">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Full Name</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-violet-500 text-gray-900 dark:text-white" required />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Date of Birth</label>
                        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-violet-500 text-gray-900 dark:text-white" required />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Residential Address</label>
                      <textarea name="address" value={formData.address} onChange={handleChange} rows={3} className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-3xl focus:outline-none focus:border-violet-500 text-gray-900 dark:text-white" required />
                    </div>
                  </div>

                  {/* ID Upload */}
                  <div>
                    <h3 className="font-semibold text-lg mb-5 text-gray-900 dark:text-white">Identity Document</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-2 border-dashed border-gray-300 dark:border-zinc-700 rounded-3xl p-8 text-center hover:border-violet-400 transition">
                        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'front')} className="hidden" id="id-front" />
                        <label htmlFor="id-front" className="cursor-pointer block">
                          <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                          <p className="font-medium">Upload Front of ID</p>
                          {idFront && <p className="text-emerald-600 text-sm mt-3">✓ Uploaded</p>}
                        </label>
                      </div>

                      <div className="border-2 border-dashed border-gray-300 dark:border-zinc-700 rounded-3xl p-8 text-center hover:border-violet-400 transition">
                        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'back')} className="hidden" id="id-back" />
                        <label htmlFor="id-back" className="cursor-pointer block">
                          <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                          <p className="font-medium">Upload Back of ID</p>
                          {idBack && <p className="text-emerald-600 text-sm mt-3">✓ Uploaded</p>}
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Selfie */}
                  <div>
                    <h3 className="font-semibold text-lg mb-5 text-gray-900 dark:text-white">Selfie Verification</h3>
                    <div className="border-2 border-dashed border-gray-300 dark:border-zinc-700 rounded-3xl p-12 text-center hover:border-violet-400 transition">
                      <input type="file" accept="image/*" capture="user" onChange={(e) => handleFileUpload(e, 'selfie')} className="hidden" id="selfie" />
                      <label htmlFor="selfie" className="cursor-pointer block">
                        <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                        <p className="font-medium text-lg">Take or Upload Selfie</p>
                        <p className="text-xs text-gray-500 mt-2">Ensure good lighting and clear face</p>
                        {selfie && <p className="text-emerald-600 text-sm mt-4">✓ Selfie uploaded</p>}
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !idFront || !idBack || !selfie}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 text-white py-5 rounded-3xl font-semibold text-lg transition-all active:scale-[0.985]"
                  >
                    {isSubmitting ? "Submitting Verification..." : "Submit KYC Verification"}
                  </button>
                </form>
              </div>
            )}

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
            <h2 className="text-3xl font-semibold mt-6 text-emerald-700 dark:text-emerald-400">KYC Submitted Successfully!</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Thank you! Your identity verification has been received.<br />
              Our team will review it within 24-48 hours.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}