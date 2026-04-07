'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  CreditCard, 
  Plus, 
  Eye, 
  EyeOff, 
  Copy, 
  Check, 
  ArrowUpRight,
  Clock,
  Wallet 
} from 'lucide-react';
import Sidebar from '../../component/Sidebar';
import Header from '../../component/headerbar';
import FancyLoader from '@/app/component/loading';

interface Card {
  id: number;
  type: 'Physical' | 'Virtual';
  cardNumber: string;
  expiry: string;
  cvv: string;
  cardholder: string;
  status: 'Active' | 'Inactive' | 'Blocked';
  balance: number;
  color: string;
}
type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accountNumber: string;
  balance: number;
};
export default function CardsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Cards');

  const [showCvv, setShowCvv] = useState<{ [key: number]: boolean }>({});
  const [copied, setCopied] = useState<number | null>(null);
  const [myCards, setMyCards] = useState<Card[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // const myCards: Card[] = [
  //   {
  //     id: 2,
  //     type: 'Virtual',
  //     cardNumber: '5353 5353 5353 5353',
  //     expiry: '09/27',
  //     cvv: '535',
  //     cardholder: 'Alex Rivera',
  //     status: 'Active',
  //     balance: 1200.00,
  //     color: 'from-violet-600 to-purple-600'
  //   }
  // ];
    useEffect(()=>{
     async function fetchCards() {
      setIsLoading(true);
      const userData = localStorage.getItem('user');
      if (!userData) {
        console.error('No user data found in localStorage');
        setIsLoading(false);
        return;
      }
      setUser(JSON.parse(userData));
      const email = JSON.parse(userData).email;
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cards?email=${email}`);
          const data = await response.json();
          setMyCards(data);

        } catch (error) {
          console.error('Error fetching cards:', error);
        }finally{
          setIsLoading(false);
        }
      }
      fetchCards(); 
    },[])
  const activeCardsCount = myCards.filter(card => card.status === 'Active').length;
  const pendingApplications = 0;
  const totalBalance = myCards.reduce((sum, card) => sum + card.balance, 0);

  const toggleCvv = (id: number) => {
    setShowCvv(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [cardType, setCardType] = useState<'Virtual' | 'Physical'>('Virtual');

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
          <div className="max-w-7xl mx-auto">

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex items-center gap-5">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950 rounded-2xl flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Active Cards</p>
                  <p className="text-4xl font-semibold mt-1 text-gray-900 dark:text-white">{activeCardsCount}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex items-center gap-5">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Pending Applications</p>
                  <p className="text-4xl font-semibold mt-1 text-gray-900 dark:text-white">{pendingApplications}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Total Balance</p>
                  <p className="text-4xl font-semibold mt-1 text-gray-900 dark:text-white">
                    ${totalBalance.toLocaleString()}
                  </p>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm mt-1 flex items-center gap-1">
                    <ArrowUpRight className="w-4 h-4" /> Across all cards
                  </p>
                </div>
              </div>
            </div>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">My Cards</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your physical and virtual cards</p>
              </div>

              <button
                onClick={() => setShowApplyModal(true)}
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-medium transition-all active:scale-95"
              >
                <Plus className="w-5 h-5" />
                Apply for New Card
              </button>
            </div>

            {/* Cards Grid */}
            {myCards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {myCards.map((card) => (
                  <div
                    key={card.id}
                    className={`bg-gradient-to-br ${`from-violet-600 to-purple-600`} text-white rounded-3xl p-8 shadow-xl relative overflow-hidden`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-80">{card.type} Card</p>
                        <p className="text-2xl font-semibold tracking-widest mt-8">
                          {card.cardNumber}
                        </p>
                      </div>
                      <CreditCard className="w-12 h-12 opacity-80" />
                    </div>

                    <div className="mt-10 flex justify-between items-end">
                      <div>
                        <p className="text-xs opacity-70">CARDHOLDER</p>
                        <p className="font-medium">{user?.firstName}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs opacity-70">VALID THRU</p>
                        <p className="font-medium">{card.expiry}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <div>
                        <p className="text-xs opacity-70">CVV</p>
                        <div className="flex items-center gap-2">
                          <p className="font-mono text-lg tracking-widest">
                            {showCvv[card.id] ? card.cvv : '•••'}
                          </p>
                          <button
                            onClick={() => toggleCvv(card.id)}
                            className="text-white/80 hover:text-white transition"
                          >
                            {showCvv[card.id] ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => copyToClipboard(card.cardNumber.replace(/\s/g, ''), card.id)}
                        className="ml-auto flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-xl transition"
                      >
                        {copied === card.id ? <Check size={16} /> : <Copy size={16} />}
                        {copied === card.id ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    <div className="absolute top-6 right-6 px-4 py-1 bg-white/20 text-xs font-medium rounded-full">
                      Active
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/20 flex justify-between text-sm">
                      <div>
                        <p className="opacity-70">Balance</p>
                        <p className="font-semibold">${user?.balance?.toLocaleString()}</p>
                      </div>
                      <button className="text-white/90 hover:text-white underline text-sm">
                        Freeze Card
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800">
                <CreditCard className="w-16 h-16 mx-auto text-gray-300" />
                <p className="mt-4 text-gray-500 dark:text-gray-400">You don’t have any cards yet</p>
              </div>
            )}

            {/* Quick Apply Section */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-zinc-800">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Apply for a New Card</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Instant virtual card or physical card delivery</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  onClick={() => { setCardType('Virtual'); setShowApplyModal(true); }}
                  className="border-2 border-dashed border-gray-300 dark:border-zinc-700 hover:border-blue-500 rounded-3xl p-8 text-center cursor-pointer transition-all hover:shadow-md"
                >
                  <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center mb-4">
                    <CreditCard className="w-9 h-9 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Virtual Card</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Instant • For online use • No shipping</p>
                </div>

                <div 
                  onClick={() => { setCardType('Physical'); setShowApplyModal(true); }}
                  className="border-2 border-dashed border-gray-300 dark:border-zinc-700 hover:border-blue-500 rounded-3xl p-8 text-center cursor-pointer transition-all hover:shadow-md"
                >
                  <div className="mx-auto w-16 h-16 bg-amber-100 dark:bg-amber-950 rounded-2xl flex items-center justify-center mb-4">
                    <CreditCard className="w-9 h-9 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Physical Card</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Delivered to your address • 5-7 days</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Apply for {cardType} Card</h2>

            <div className="space-y-6">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Card Type</label>
                <div className="bg-gray-100 dark:bg-zinc-800 px-4 py-3 rounded-2xl font-medium text-gray-900 dark:text-white">
                  {cardType} Card
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Daily Limit</label>
                <input 
                  type="text" 
                  defaultValue="$5,000" 
                  className="w-full bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl px-4 py-3 focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Purpose (Optional)</label>
                <textarea 
                  className="w-full bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl px-4 py-3 h-24 resize-y focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                  placeholder="Online shopping, travel, subscriptions..."
                />
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <button 
                onClick={() => setShowApplyModal(false)}
                className="flex-1 py-3.5 border border-gray-300 dark:border-zinc-700 rounded-2xl font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-900 dark:text-white"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  alert(`Your application for ${cardType} Card has been submitted successfully!`);
                  setShowApplyModal(false);
                }}
                className="flex-1 py-3.5 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
      {isLoading && <FancyLoader fullScreen message="fetching cards details..." /> }
    </div>
  );
}