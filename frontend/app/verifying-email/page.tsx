'use client';

import { Banknote, CheckCircle, Mail, Loader2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function EmailVerification() {
  const router = useRouter();
  const [step, setStep] = useState<'sending' | 'verifying' | 'success'>('sending');

  useEffect(() => {
    // Step 1: Sending email
    const timer1 = setTimeout(() => {
      setStep('verifying');
    }, 1600);

    // Step 2: Verifying
    const timer2 = setTimeout(() => {
      setStep('success');
    }, 3400);

    // Total animation = 5 seconds → then navigate
    const navigationTimer = setTimeout(() => {
      router.push('/verify-email/set_pin');
  
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(navigationTimer);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 px-6">
      <div className="relative mb-12">
        {/* Logo with animation */}
        <div className={`transition-all duration-700 ${step === 'success' ? 'scale-110' : ''}`}>
          <div className="w-24 h-24 bg-gradient-to-br from-blue-700 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 relative overflow-hidden">
            <Banknote className="w-12 h-12 text-white" />
            
            {/* Success checkmark overlay */}
            {step === 'success' && (
              <div className="absolute inset-0 flex items-center justify-center bg-green-500 rounded-3xl">
                <CheckCircle className="w-14 h-14 text-white animate-scale-in" />
              </div>
            )}
          </div>
        </div>

        {/* Flying envelope */}
        {step === 'sending' && (
          <div className="absolute -top-6 -right-6 animate-mail-fly">
            <Mail className="w-10 h-10 text-indigo-400 drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* Status Text */}
      <div className="text-center space-y-4 max-w-sm">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">
          {step === 'sending' && "Sending verification email..."}
          {step === 'verifying' && "Verifying your email..."}
          {step === 'success' && "Email verified successfully!"}
        </h2>

        <p className="text-gray-500 dark:text-gray-400 text-lg">
          {step === 'sending' && "Please wait while we send the link"}
          {step === 'verifying' && "Almost there..."}
          {step === 'success' && "Redirecting you to your dashboard..."}
        </p>
      </div>

      {/* Spinner */}
      {(step === 'sending' || step === 'verifying') && (
        <div className="mt-10">
          <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
        </div>
      )}

      {/* Progress dots */}
      <div className="flex gap-3 mt-16">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${
              (step === 'sending' && dot === 1) ||
              (step === 'verifying' && dot === 2) ||
              (step === 'success' && dot === 3)
                ? 'bg-indigo-600 scale-125'
                : 'bg-gray-300 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailVerification;