'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bell, 
  Menu, 
  ArrowDown, 
  User, 
  Settings, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <Menu size={26} />
          </button>

          <div>
            <h2 className='text-xl'>Dashboard</h2>
            <p>Welcome back, Chris</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          
          {/* Notification */}
          <button className="p-3 hover:bg-gray-100 rounded-2xl relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-xl transition"
            >
              <div className="w-9 h-9 bg-linear-to-br from-blue-500 to-indigo-500 rounded-2xl"></div>

              <div className="hidden sm:block text-left">
                <p className="font-medium text-sm">Chris Okoto</p>
                <p className="text-xs text-gray-500 -mt-0.5">
                  okoto.chris.oc@gmail.com
                </p>
              </div>

              <ArrowDown className={`w-4 h-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xl py-2 z-50">

                {/* Profile */}
                <button className="flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
                  
                   <Settings className="w-4 h-4 text-gray-500" />
                  <Link href="/dashboard/kyc">Verify KYC</Link>
                </button>

                {/* Settings */}
                <button className="flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
                 <User className="w-4 h-4 text-gray-500" />
                  <Link href="/dashboard/settings">Profile Settings</Link>
                </button>

                {/* Help */}
                <button className="flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
                  <HelpCircle className="w-4 h-4 text-gray-500" />
                  <Link href="/dashboard/support">Help & Support</Link>
                </button>

                <div className="border-t border-gray-200 dark:border-zinc-800 my-2"></div>

                {/* Logout */}
                <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>

              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}