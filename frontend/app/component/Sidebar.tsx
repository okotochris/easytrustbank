'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Home, ArrowRightLeft, ArrowUpCircle, Landmark, HandCoins, 
  ChevronDown, ChevronRight, LogOut 
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
          className="fixed inset-0 bg-black/60 z-50 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 shadow-xl 
        transform transition-transform duration-300 overflow-y-auto
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

        <div className="p-6 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <div>
                <p className="font-semibold text-2xl tracking-tight">EasyTrust Bank</p>
                <p className="text-xs text-gray-500 -mt-1">Trust • Security • Growth</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 space-y-6">
            {menuSections.map((section) => (
              <div key={section.title} className="space-y-1">
                <div
                  onClick={() => section.items.length > 0 && toggleSection(section.title)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium cursor-pointer transition-all
                    ${openSection === section.title ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <div className="flex items-center gap-3">
                    <section.icon className="w-5 h-5" />
                    <span>{section.title}</span>
                  </div>
                  {section.items.length > 0 && (
                    openSection === section.title ? 
                      <ChevronDown className="w-4 h-4" /> : 
                      <ChevronRight className="w-4 h-4" />
                  )}
                </div>

                {/* Submenu */}
                {section.items.length > 0 && openSection === section.title && (
                  <div className="ml-6 space-y-1 border-l border-gray-200 pl-4">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => {
                          setActiveItem(item.name);
                          setIsMobileOpen(false);
                        }}
                        className={`block px-4 py-2.5 text-sm rounded-xl transition-all
                          ${activeItem === item.name 
                            ? 'bg-blue-600 text-white font-medium' 
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Single Item */}
                {section.items.length === 0 && (
                  <Link
                    href="/dashboard/deposit"
                    onClick={() => {
                      setActiveItem(section.title);
                      setIsMobileOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 text-sm rounded-2xl transition-all
                      ${activeItem === section.title 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                  >
                    <section.icon className="w-5 h-5" />
                    {section.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <Link 
            href="/logout"
            className="mt-8 flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-2xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </div>
    </>
  );
}