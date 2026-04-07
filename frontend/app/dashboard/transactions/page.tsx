'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  Filter, 
  Search 
} from 'lucide-react';
import Sidebar from '../../component/Sidebar';
import Header from '../../component/headerbar';
import FancyLoader from '@/app/component/loading';

interface Transaction {
  id: number;
  type: 'credit' | 'debit';
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  reference: string;
  description: string;
  date: string;
  category: string;
}

export default function TransactionsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Transactions');
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
      async function fetchTransactions() {
        setLoading(true);
      // Simulate API call to fetch transactions
       try {
          const userData = localStorage.getItem('user');
          if (!userData) {
            window.location.href = '/login';
            return;
          }
          const user = JSON.parse(userData);
          const email = user.email;
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history?email=${email}`);
            if (response.ok) {
              const data = await response.json();
             setTransactions(data.history);
              // setAccountStatementInfo(data.accountStatementInfo);
            } else {
              console.error('Failed to fetch user data');
            }
            setLoading(false);
          } catch (error) {
            console.error('Error fetching user data:', error);
          } 
      }
      fetchTransactions();
  }, [])
  
  // const transactions: Transaction[] = [
  //   {
  //     id: 1,
  //     type: 'credit',
  //     amount: 1250.00,
  //     status: 'Completed',
  //     reference: 'TXN-987654321',
  //     description: 'Salary Deposit',
  //     date: 'April 3, 2026',
  //     category: 'Income'
  //   },
    
  // ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400';
      case 'Pending': return 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400';
      case 'Failed': return 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400';
      default: return 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-400';
    }
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
          <div className="max-w-7xl mx-auto">
            
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Transaction History</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">View and manage all your transactions</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition text-gray-700 dark:text-gray-300">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition text-gray-700 dark:text-gray-300">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search by description, reference or amount..."
                className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 pl-11 py-3.5 rounded-2xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
              />
            </div>

            {/* Transactions Table */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-200 dark:border-zinc-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Amount</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Type</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Reference</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Description</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-gray-50 dark:hover:bg-zinc-800 transition">
                        <td className="px-6 py-5">
                          <span className={`font-semibold text-lg ${tx.type === 'credit' ? 'text-emerald-600' : 'text-red-600'}`}>
                            {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                          </span>
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            {tx.type === 'credit' ? (
                              <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-950 rounded-xl flex items-center justify-center">
                                <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 bg-red-100 dark:bg-red-950 rounded-xl flex items-center justify-center">
                                <ArrowDownRight className="w-4 h-4 text-red-600 dark:text-red-400" />
                              </div>
                            )}
                            <span className="capitalize font-medium text-gray-900 dark:text-white">{tx.type}</span>
                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}`}>
                            {tx.status}
                          </span>
                        </td>

                        <td className="px-6 py-5 font-mono text-sm text-gray-500 dark:text-gray-400">{tx.reference}</td>

                        <td className="px-6 py-5">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{tx.description}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{tx.category}</p>
                          </div>
                        </td>

                        <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-400">{tx.date}</td>

                        <td className="px-6 py-5">
                          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-between text-sm">
                <p className="text-gray-500 dark:text-gray-400">Showing 1 to 5 of 42 transactions</p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300">Previous</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">1</button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300">2</button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300">3</button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300">Next</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
       {loading && <FancyLoader fullScreen message="fetching account details..." /> }
    </div>
  );
}