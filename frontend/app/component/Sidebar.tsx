'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Home, ArrowRightLeft, ArrowUpCircle, Landmark, HandCoins, 
  ChevronDown, ChevronRight, LogOut, X 
} from 'lucide-react';

interface MenuItem {
  name: string;
  href: string;
}

interface MenuSection {
  title: string;
  icon: React.ElementType;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  { 
    title: "Dashboard", 
    icon: Home, 
    items: [
      { name: "Overview", href: "/dashboard" },
      { name: "Transactions", href: "/dashboard/transactions" },
      { name: "Cards", href: "/dashboard/cards" }
    ] 
  },
  { 
    title: "Transfers", 
    icon: ArrowRightLeft, 
    items: [
      { name: "Local Transfer", href: "/dashboard/transfers/local" },
      { name: "International", href: "/dashboard/transfers/international" }
    ] 
  },
  { 
    title: "Deposit", 
    icon: ArrowUpCircle, 
    items: [] 
  },
  { 
    title: "Services", 
    icon: Landmark, 
    items: [
      { name: "Loans", href: "/dashboard/services/loans" },
      { name: "Tax Refund", href: "/dashboard/services/tax-refund" },
      { name: "Grants", href: "/dashboard/services/grants" }
    ] 
  },
  { 
    title: "Account", 
    icon: HandCoins, 
    items: [
      { name: "Settings", href: "/dashboard/settings" },
      { name: "Support", href: "/dashboard/support" }
    ] 
  }
];

interface SidebarProps {
  openSection: string;
  activeItem: string;
  setOpenSection: (title: string) => void;
  setActiveItem: (item: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export default function Sidebar({
  openSection,
  activeItem,
  setOpenSection,
  setActiveItem,
  isMobileOpen,
  setIsMobileOpen
}: SidebarProps) {

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? '' : title);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 
        bg-white dark:bg-zinc-900 
        border-r border-gray-200 dark:border-zinc-800
        flex flex-col h-screen
        transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>

        {/* Logo Header */}
        <div className="p-6 border-b border-gray-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <div>
              <p className="font-semibold text-xl tracking-tight text-gray-900 dark:text-white">EasyTrust</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 -mt-0.5">Banking Reimagined</p>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button 
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-xl"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
       <nav className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {menuSections.map((section) => (
            <div key={section.title} className="space-y-1">
              {/* Section Header */}
              <div
                onClick={() => section.items.length > 0 && toggleSection(section.title)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium cursor-pointer transition-all duration-200
                  ${openSection === section.title 
                    ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'}`}
              >
                <div className="flex items-center gap-3">
                  <section.icon className="w-5 h-5" />
                  <span>{section.title}</span>
                </div>
                {section.items.length > 0 && (
                  openSection === section.title ? 
                    <ChevronDown className="w-4 h-4 transition-transform" /> : 
                    <ChevronRight className="w-4 h-4 transition-transform" />
                )}
              </div>

              {/* Submenu Items */}
              {section.items.length > 0 && openSection === section.title && (
                <div className="ml-6 space-y-1 border-l border-gray-200 dark:border-zinc-700 pl-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.name);
                        setIsMobileOpen(false);
                      }}
                      className={`block px-4 py-2.5 text-sm rounded-xl transition-all duration-200
                        ${activeItem === item.name 
                          ? 'bg-blue-600 text-white font-medium' 
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Single Item (No submenu) */}
              {section.items.length === 0 && (
                <Link
                  href="/dashboard/deposit"
                  onClick={() => {
                    setActiveItem(section.title);
                    setIsMobileOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 text-sm rounded-2xl transition-all duration-200
                    ${activeItem === section.title 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <section.icon className="w-5 h-5" />
                  {section.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-6 border-t border-gray-200 dark:border-zinc-800 mt-auto">
          <Link 
            href="/logout"
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-2xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </div>
    </>
  );
}