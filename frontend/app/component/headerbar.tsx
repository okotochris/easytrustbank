'use client';

import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <Menu size={26} />
          </button>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full bg-gray-100 border border-gray-200 pl-11 py-3 rounded-2xl text-sm focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-3 hover:bg-gray-100 rounded-2xl relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl"></div>
            <div className="hidden sm:block">
              <p className="font-medium text-sm">Alex Rivera</p>
              <p className="text-xs text-gray-500 -mt-0.5">Premium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}