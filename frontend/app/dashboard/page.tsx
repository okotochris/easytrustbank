'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Sidebar from '../component/Sidebar';
import Header from '../component/headerbar';
import { ArrowUpRight, ArrowDownRight, Receipt, UserPlus, Building2, Send, PiggyBank, CreditCard, Plus, GitGraph, AlertCircle, Clock, TrendingUp, Clock1, Shield, ChartAreaIcon, Phone, Headset, PhoneCall, ShieldCheck, TimerReset, LayoutDashboard, History } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FancyLoader from '../component/loading';

type Transaction = {
  id: number;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  category: string;
  title: string;
  currency: string;
  status: string;
};

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accountNumber: string;
  balance: number;
  currency: string;
};

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Overview');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        try {
          setIsLoading(true);
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history?email=${user.email}`);
          if (response.ok) {
            const data = await response.json();
            setRecentTransactions(data.history);
            setUser(data.user);
          }
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        router.push('/login');
      }
    }
    getUserData();
  }, []);

  function sumAmounts(amounts: number[]): number {
    return amounts.reduce((total, amount) => total + amount, 0);
  }

  function sumThisMonth(transactions: { amount: number; date: string | Date }[]): number {
    const now = new Date();
    return transactions.reduce((total, tx) => {
      const txDate = new Date(tx.date);
      const isSameMonth = txDate.getMonth() === now.getMonth() && txDate.getFullYear() === now.getFullYear();
      return isSameMonth ? total + tx.amount : total;
    }, 0);
  }

  function maskAccountNumber(accountNumber: string | number): string {
    const str = accountNumber.toString();
    return '********' + str.slice(-4);
  }

  function pendingTransaction() {
    return recentTransactions.filter(item => item.status === 'pending').reduce((acc, curr) => acc + curr.amount, 0);
  }

  const monthlyDeposits = sumThisMonth(recentTransactions.filter(tx => tx.type === 'credit'));
  const monthlyExpenses = sumThisMonth(recentTransactions.filter(tx => tx.type === 'debit'));
  const totalVolume = sumAmounts(recentTransactions.map(tx => tx.amount));

  const accountNumber = user ? maskAccountNumber(user.accountNumber) : '';
  const accountStatementInfo = [
    { id: 1, icon: CreditCard, color: 'blue-500', title: 'Available', amount: user?.balance, footer: 'Account Limit' },
    { id: 2, icon: Send, color: "green-500", title: 'This Month', amount: monthlyDeposits, footer: 'Monthly Deposits' },
    { id: 3, icon: PiggyBank, color: "red-500", title: 'This Month', amount: monthlyExpenses, footer: 'Monthly Expenses' },
    { id: 4, icon: CreditCard, color: "orange-500", title: 'All Time', amount: totalVolume, footer: 'Total Volume' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-zinc-950">
      <Sidebar
        openSection={openSection} activeItem={activeItem}
        setOpenSection={setOpenSection} setActiveItem={setActiveItem}
        isMobileOpen={isSidebarOpen} setIsMobileOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden pb-20 sm:pb-0">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:px-6 lg:py-10">
          
          {/* Account Statement Cards - Scrollable & Column on Mobile */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 no-scrollbar flex-nowrap sm:flex-wrap">
            {accountStatementInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.id} className="min-w-[240px] sm:min-w-0 flex-shrink-0 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 shadow-sm">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-${info.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">{info.title}</p>
                    <p className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white">
                      {user?.currency} {info.amount?.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-8">
              
           <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 
                              dark:from-blue-700 dark:via-indigo-700 dark:to-violet-800 
                              text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                
                {/* Subtle background accent */}
              <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#ffffff15_0%,transparent_50%)] dark:bg-[radial-gradient(at_top_right,#ffffff10_0%,transparent_60%)]"></div>

                {/* Top Section */}
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/logo.png" 
                      alt="EasyTrust Bank" 
                      className="w-11 h-11 drop-shadow-md" 
                    />
                   <div className='hidden sm:block'>
                    <p className="text-blue-100 dark:text-blue-200 text-sm font-medium">EasyTrust Bank</p>
                    <h3 className="text-2xl font-semibold tracking-tight">Primary Account</h3>
                  </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl text-center border border-white/20">
                    <p className="text-xs text-blue-200 tracking-widest">ACCOUNT NUMBER</p>
                    <p className="font-mono font-medium">{accountNumber}</p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex w-full flex-col md:flex-row justify-between gap-10 relative z-10">
                  {/* Left Side */}
                  <div className="flex justify-between  md:w-auto ">
                    <div className="flex flex-col gap-1">
                      <p className="text-blue-200 text-sm">Account Holder</p>
                      <h2 className="text-lg font-semibold">{user?.firstName}</h2>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-emerald-300 text-sm font-medium">Active</span>
                      </div>
                      <span className="text-amber-300 text-sm">Verification required</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-blue-200 text-sm">Fiat Balance</p>
                      <h2 className="text-lg font-semibold font-mono tracking-tighter">{user?.currency}{user?.balance?.toLocaleString() || "0.00"}</h2>
                      {/* <span className="text-blue-200 text-sm">USD Balance</span> */}
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex flex-col md:items-end gap-8">
                   {
                    user?.currency == '$' ?
                     <div className="text-right">
                      <p className="text-blue-200 text-sm">Total Portfolio</p>
                      <h2 className="text-lg font-semibold font-mono tracking-tighter">{user?.currency}{user.balance}</h2>
                    </div>:
                    <div></div>
                   }

                    <div className="flex gap-4">
                      <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 transition-all px-7 py-4 rounded-2xl group">
                        <Send className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                        <span className="font-medium">Send Money</span>
                      </button>

                      <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 transition-all px-7 py-4 rounded-2xl group">
                        <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Add Money</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions - Improved */}
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Send, name: "Transfer", color: "blue", url: "/dashboard/transfers/local" },
                    { icon: Receipt, name: "Pay Bill", color: "emerald", url: "/dashboard/bills" },
                    { icon: UserPlus, name: "Request Money", color: "amber", url: "/dashboard/requests" },
                    { icon: Building2, name: "Bank Details", color: "violet", url: "/dashboard/settings" },
                  ].map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <div 
                        key={index}
                        className="group bg-gray-50 dark:bg-zinc-800 hover:bg-white dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700 hover:border-blue-200 dark:hover:border-blue-600 rounded-3xl py-8 px-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-md active:scale-95"
                      >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-${action.color}-100 dark:bg-${action.color}-950 group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-7 h-7 text-${action.color}-600 dark:text-${action.color}-400`} />
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                          {action.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

              {/* Quick Actions - Hidden on phone view (moved to bottom nav) */}
              <div className="hidden sm:block bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm mt-6">
                <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { icon: Send, name: "Transfer", color: "blue", url: "/dashboard/transfers/local" },
                    { icon: Receipt, name: "Pay Bill", color: "emerald", url: "/dashboard/bills" },
                    { icon: UserPlus, name: "Request", color: "amber", url: "/dashboard/requests" },
                    { icon: Building2, name: "Details", color: "violet", url: "/dashboard/settings" },
                  ].map((action, index) => (
                    <Link href={action.url} key={index} className="flex flex-col items-center p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 border border-transparent hover:border-gray-100 transition-all">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 bg-${action.color}-100 dark:bg-${action.color}-950`}>
                        <action.icon className={`w-6 h-6 text-${action.color}-600`} />
                      </div>
                      <span className="text-xs font-medium">{action.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics Column */}
<div className="lg:col-span-4 space-y-6">
{/* ACCOUNT STATISTI */}
<div className="flex flex-col  justify-center bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-2 shadow-sm">
  {/* Header */}
  <div className="flex items-center gap-2 mb-6">
    <GitGraph className="w-5 h-5 text-emerald-600" />
    <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
      Account Statistics
    </p>
  </div>

  {/* Stats Column */}
  <div className="flex flex-col gap-4">

    {/* Transaction Limit */}
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/40 hover:shadow-md transition">
      <div className="p-3 bg-yellow-500/90 rounded-xl">
        <CreditCard className="text-white w-5 h-5" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Transaction Limit
        </p>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {user?.currency}200,000.00
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Daily limit available
        </p>
      </div>
    </div>

    {/* Pending Transactions */}
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/40 hover:shadow-md transition">
      <div className="p-3 bg-blue-500 rounded-xl">
        <Clock className="text-white w-5 h-5" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Pending Transactions
        </p>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {user?.currency}{pendingTransaction()}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Awaiting processing
        </p>
      </div>
    </div>

    {/* Total Volume */}
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/40 hover:shadow-md transition">
      <div className="p-3 bg-emerald-600 rounded-xl">
        <TrendingUp className="text-white w-5 h-5" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Total Volume
        </p>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {user?.currency}{totalVolume}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          All-time transactions
        </p>
      </div>
    </div>
   {/* Footer */}
  <div className="flex justify-center items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
    <Clock className="w-4 h-4" />
    <p>Updated in real-time</p>
  </div>
        
</div>

<div className="w-full max-w-md rounded-3xl border border-zinc-200 dark:border-zinc-800 
bg-white dark:bg-zinc-950 shadow-xl dark:shadow-black/20 overflow-hidden">

  <div className="p-2">

    {/* Top Icon */}
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-2">
        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 
        flex items-center justify-center shadow-lg shadow-blue-500/30">
          <Headset className="w-8 h-8 text-white" />
        </div>

        {/* Online Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </span>
      </div>

      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
        Need Assistance?
      </h2>

      <p className=" text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xs">
        Our Expert support team is available
      </p>
    </div>


    {/* Support Stats */}
    <div className="mt-6 flex flex-col sm:flex-row gap-3">

      <div className="flex items-center gap-3 flex-1 flex-col rounded-2xl 
      bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 
      p-1 hover:scale-[1.02] transition">
         <p className="font-bold text-sm text-zinc-900 dark:text-white">
            Quick Response
          </p>
        <div className='flex'>
         <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-500/10">
          <TimerReset className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Under 5 minutes
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 flex-1 rounded-2xl 
      bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 
       p-1 hover:scale-[1.02] transition">
        <p className="font-bold text-sm text-zinc-900 dark:text-white">
            Secure Chat
          </p>
          <div className=' flex items-center justify-center'>
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-500/10">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Secure Chat encrypted
            </p>
        </div>
      </div>

    </div>


    {/* CTA Button */}
    <button 
      onClick={()=>router.push('/dashboard/support')}
      className="mt-6 w-full flex items-center justify-center gap-2 
      rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 
    hover:from-blue-500 hover:to-indigo-500 
    text-white font-medium py-3.5 shadow-lg shadow-blue-500/25 transition-all">

      <Headset className="w-5 h-5" />
      Start Live Chat
    </button>


    {/* Footer */}
    <div className="mt-5 flex items-center justify-center gap-2 text-sm 
    text-zinc-500 dark:text-zinc-400">
      <PhoneCall className="w-4 h-4" />
      <span>Or call us for urgent matters</span>
    </div>

  </div>

</div>
</div>
</div>


            {/* Recent Transactions - DISPLAY NONE ON MOBILE */}
            <div className="hidden sm:block lg:col-span-12">
              <div className="flex items-center justify-between mb-6 px-1">
                <h3 className="text-2xl font-semibold">Recent Transactions</h3>
                <Link href="/dashboard/transactions" className="text-blue-600 text-sm font-medium">View all →</Link>
              </div>
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl overflow-hidden divide-y divide-gray-100 dark:divide-zinc-800">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === 'credit' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                        {tx.type === 'credit' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{tx.description}</p>
                        <p className="text-xs text-gray-500">{new Date(tx.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <p className={`font-semibold ${tx.type === 'credit' ? 'text-emerald-600' : 'text-red-600'}`}>
                      {tx.type === 'credit' ? '+' : '-'}{tx?.currency}{tx.amount.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE QUICK ACTION BOTTOM NAVIGATION */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 px-6 py-3 flex justify-between items-center z-50">
        <Link href="/dashboard" className="flex flex-col items-center gap-1">
          <LayoutDashboard className="w-6 h-6 text-blue-600" />
          <span className="text-[10px] font-medium text-blue-600">Home</span>
        </Link>
        <Link href="/dashboard/transfers/local" className="flex flex-col items-center gap-1">
          <Send className="w-6 h-6 text-gray-500" />
          <span className="text-[10px] font-medium text-gray-500">Send</span>
        </Link>
        <Link href="/dashboard/transactions" className="flex flex-col items-center gap-1">
          <History className="w-6 h-6 text-gray-500" />
          <span className="text-[10px] font-medium text-gray-500">History</span>
        </Link>
        <Link href="/dashboard/settings" className="flex flex-col items-center gap-1">
          <Building2 className="w-6 h-6 text-gray-500" />
          <span className="text-[10px] font-medium text-gray-500">Bank</span>
        </Link>
      </div>

      {isLoading && <FancyLoader fullScreen message="fetching account details..." />}
    </div>
  );
}