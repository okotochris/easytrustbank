'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowDownRight, Download, Filter, Search } from 'lucide-react';
import Sidebar from '../../component/Sidebar';
import Header from '../../component/headerbar';

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

  // Sample transaction data
  const transactions: Transaction[] = [
    {
      id: 1,
      type: 'credit',
      amount: 1250.00,
      status: 'Completed',
      reference: 'TXN-987654321',
      description: 'Salary Deposit',
      date: 'April 3, 2026',
      category: 'Income'
    },
    {
      id: 2,
      type: 'debit',
      amount: 89.99,
      status: 'Completed',
      reference: 'TXN-987654320',
      description: 'Netflix Subscription',
      date: 'April 2, 2026',
      category: 'Entertainment'
    },
    {
      id: 3,
      type: 'debit',
      amount: 245.50,
      status: 'Completed',
      reference: 'TXN-987654319',
      description: 'Whole Foods Market',
      date: 'April 1, 2026',
      category: 'Groceries'
    },
    {
      id: 4,
      type: 'credit',
      amount: 320.00,
      status: 'Pending',
      reference: 'TXN-987654318',
      description: 'Freelance Payment',
      date: 'March 30, 2026',
      category: 'Income'
    },
    {
      id: 5,
      type: 'debit',
      amount: 12.99,
      status: 'Failed',
      reference: 'TXN-987654317',
      description: 'Spotify Premium',
      date: 'March 29, 2026',
      category: 'Entertainment'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-700';
      case 'Pending': return 'bg-amber-100 text-amber-700';
      case 'Failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
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

      <div className="flex-1 min-w-0">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Transaction History</h1>
              <p className="text-gray-600 mt-1">View and manage all your transactions</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-2xl hover:bg-gray-50 transition">
                <Filter className="w-5 h-5" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-2xl hover:bg-gray-50 transition">
                <Download className="w-5 h-5" />
                Export
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by description, reference or amount..."
              className="w-full bg-white border border-gray-200 pl-11 py-3.5 rounded-2xl focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Reference</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-5">
                        <span className={`font-semibold text-lg ${tx.type === 'credit' ? 'text-emerald-600' : 'text-red-600'}`}>
                          {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          {tx.type === 'credit' ? (
                            <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                              <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center">
                              <ArrowDownRight className="w-4 h-4 text-red-600" />
                            </div>
                          )}
                          <span className="capitalize font-medium">{tx.type}</span>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}`}>
                          {tx.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 font-mono text-sm text-gray-500">{tx.reference}</td>

                      <td className="px-6 py-5">
                        <div>
                          <p className="font-medium">{tx.description}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{tx.category}</p>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">{tx.date}</td>

                      <td className="px-6 py-5">
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between text-sm">
              <p className="text-gray-500">Showing 1 to 5 of 42 transactions</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50">Previous</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}