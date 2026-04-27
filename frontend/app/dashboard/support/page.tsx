'use client';

import React, { useState } from 'react';
import { 
  Headphones, MessageCircle, Mail, Phone, Clock, ArrowRight, Send, X, CheckCircle 
} from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function SupportPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Support');

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Account Issue",
    "Transaction Problem",
    "Loan Application",
    "Deposit & Withdrawal",
    "Technical Support",
    "Security Concern",
    "Tax Refund",
    "Grant Application",
    "Other"
  ];

  const faqs = [
    {
      q: "How long does it take to process a transfer?",
      a: "Local transfers are usually instant. International transfers take 1-5 business days depending on the method."
    },
    {
      q: "How do I track my loan application?",
      a: "You can track the status of your loan application from the Loan section in your dashboard."
    },
    {
      q: "Why was my deposit not credited?",
      a: "Please ensure you uploaded the correct proof of payment. Our team usually verifies deposits within 30-60 minutes."
    },
    {
      q: "How secure is my information?",
      a: "We use 256-bit SSL encryption and never store sensitive payment details."
    }
  ];

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message || !category) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        setSubject('');
        setMessage('');
        setCategory('');
      }, 5000);
    }, 1500);
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
            <div className="bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 dark:from-indigo-800 dark:via-violet-800 dark:to-purple-800 text-white py-14 rounded-3xl mb-10">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-3xl mb-6">
                  <Headphones className="w-9 h-9" />
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">How can we help you?</h1>
                <p className="text-violet-100 mt-4 text-lg max-w-xl mx-auto">
                  Our support team is available 24/7 to assist you with any questions or issues.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Contact & Ticket Form */}
              <div className="lg:col-span-7">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-8 border border-gray-200 dark:border-zinc-800">
                  <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Submit a Support Ticket</h2>

                  <form onSubmit={handleSubmitTicket} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-violet-500 text-gray-900 dark:text-white"
                        required
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-violet-500 text-gray-900 dark:text-white"
                        placeholder="Brief subject of your issue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-3xl focus:outline-none focus:border-violet-500 resize-y text-gray-900 dark:text-white"
                        placeholder="Please describe your issue in detail..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !subject || !message || !category}
                      className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-gray-300 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.985]"
                    >
                      {isSubmitting ? 'Submitting Ticket...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Quick Contact */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800">
                  <h3 className="font-semibold text-xl mb-6 text-gray-900 dark:text-white">Quick Contact</h3>
                  
                  <div className="space-y-6">
                    <a href="mailto:support@primewestunitedb.cc" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">Email Support</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">support@primewestunitedb.cc</p>
                      </div>
                    </a>

                    <a href="tel:+2348012345678" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 rounded-2xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">Call Us</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400"> +33 1 76 54 32 10</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950 rounded-2xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Response Time</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Usually within 15 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800">
                  <h3 className="font-semibold text-xl mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h3>
                  
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 dark:border-zinc-800 pb-6 last:border-0 last:pb-0">
                        <p className="font-medium text-gray-800 dark:text-white">{faq.q}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{faq.a}</p>
                      </div>
                    ))}
                  </div>
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
              <MessageCircle className="w-12 h-12 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-semibold mt-6 text-emerald-700 dark:text-emerald-400">Message Sent!</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Thank you for reaching out. Our support team will get back to you shortly.
            </p>
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Ticket ID: SUP-{Date.now().toString().slice(-6)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}