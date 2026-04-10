'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bell, 
  Menu, 
  ArrowDown, 
  User, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Clock,
  Check,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accountNumber: string;
  balance: number;
  photo:string,
};
interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
   const [user, setUser] = useState<User | null>(null);
   const [notification, setNotification] = useState(false)

  useEffect(() => {
    async function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    const userData = localStorage.getItem('user'); 

    if (userData) {
      setUser(JSON.parse(userData));
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const notificationContent = [
      {title:"Card Application Submitted", content:" your application has been submitted and is awaiting approval. you will be notified", date:"1 month ago"},
      {title:"Card Application Approved", content:"your standard visa card has been approved and is now ready for use.", date:"8 months ago"},
      {title:"Card Application Submitted", content:"your card application has been submitted and is awaiting approval. you will be notified", date:"8 months ago"}
    ]
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
            <p>Welcome back, {user?.firstName}!</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          
          {/* Notification */}
          <button 
            onClick={()=> notification ? setNotification(false) : setNotification(true)}
            className="p-3 hover:bg-gray-100 rounded-2xl relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
           <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 px-2 py-1.5 rounded-xl 
             hover:bg-gray-100 dark:hover:bg-zinc-800 
             transition w-full sm:w-auto"
>
              {/* Avatar */}
              <div className="w-9 h-9 rounded-2xl overflow-hidden 
                  bg-gradient-to-br from-blue-500 to-indigo-500 
                  flex items-center justify-center text-white font-semibold text-sm">
    
            {user?.photo ? (
              <img
                src={user.photo}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span>
                {user?.firstName?.[0]}
                {user?.lastName?.[0]}
              </span>
            )}
  </div>

  {/* User Info */}
  <div className="hidden sm:flex flex-col text-left leading-tight">
    <p className="font-medium text-sm text-gray-900 dark:text-white">
      {user?.firstName} {user?.lastName}
    </p>
    <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[140px]">
      {user?.email}
    </p>
  </div>

  {/* Dropdown Icon */}
  <ArrowDown
    className={`w-4 h-4 text-gray-500 transition-transform duration-200 
                ${open ? "rotate-180" : ""}`}
  />
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
                <button 
                  onClick={() => (window.location.href = "/login")}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>

              </div>
            )}
          </div>

        </div>
      </div>
        {notification && 
          <div className="absolute md:w-96 right-20  bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xl p-2 z-50">
            {/*Notifcation it's going to be map */} 
            {
              notificationContent.map((item, i)=>(
                    <div 
                      key={i}
                      className="flex items-start justify-between gap-3 p-4 rounded-2xl 
                          bg-white dark:bg-zinc-900 
                          border border-gray-200 dark:border-zinc-800 
                          hover:shadow-md transition">

                        {/* Left Content */}
                        <div className="flex gap-3 items-start w-full">
                          
                          {/* Icon */}
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl 
                                          bg-blue-100 dark:bg-blue-500/10">
                           {i==1 ? <AlertCircle className="w-5 h-5 text-green-600 dark:text-green-400" /> : <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />} 
                          </div>

                          {/* Text Content */}
                          <div className="flex flex-col w-full">
                            <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                             {item.title}
                            </p>

                            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                              {item.content}
                            </span>

                            {/* Bottom Row */}
                            <div className="flex items-center justify-between mt-2">
                              
                              {/* Time */}
                              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{item.date}</span>
                              </div>

                              {/* Badge */}
                              <div className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full 
                                              bg-blue-100 text-blue-600 
                                              dark:bg-blue-500/10 dark:text-blue-400">
                                New
                              </div>
                            </div>
                          </div>
                  </div>

            </div>
              ))
            }                     

          </div>  
      }
    </div>
  );
}   