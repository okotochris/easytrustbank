'use client';

import React, { useState } from 'react';
import { Shield, Bell, Lock, User, Globe, Moon, Sun, LogOut, Trash2, Eye, EyeOff } from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function SettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Settings');

  // Form States
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+234 801 234 5678');
  const [showPassword, setShowPassword] = useState(false);

  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    security: true,
  });

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState('English');

  const handleSaveProfile = () => {
    alert("✅ Profile updated successfully!");
  };

  const handleSaveSecurity = () => {
    alert("✅ Security settings saved!");
  };

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
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

      <div className="flex-1">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Hero */}
        <div className="bg-gradient-to-r from-gray-800 to-slate-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Settings</h1>
            <p className="text-gray-400 mt-3 text-lg">Manage your account preferences and security</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Settings Content */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Profile Settings */}
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-8">
                  <User className="w-6 h-6 text-slate-700" />
                  <h2 className="text-2xl font-semibold">Profile Information</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-slate-500"
                    />
                  </div>

                  <button
                    onClick={handleSaveProfile}
                    className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-semibold transition"
                  >
                    Save Profile Changes
                  </button>
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Lock className="w-6 h-6 text-slate-700" />
                  <h2 className="text-2xl font-semibold">Security</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-slate-500"
                        placeholder="••••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">New Password</label>
                      <input type="password" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-slate-500" placeholder="New password" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
                      <input type="password" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-slate-500" placeholder="Confirm password" />
                    </div>
                  </div>

                  <button
                    onClick={handleSaveSecurity}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-semibold transition"
                  >
                    Update Password
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Bell className="w-6 h-6 text-slate-700" />
                  <h2 className="text-2xl font-semibold">Notifications</h2>
                </div>

                <div className="space-y-6">
                  {Object.keys(notifications).map((key) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium capitalize">{key} Notifications</p>
                        <p className="text-sm text-gray-500">
                          {key === 'security' ? 'Alerts about login and security events' : `Receive ${key} updates`}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleNotification(key as keyof typeof notifications)}
                        className={`w-12 h-6 rounded-full transition-all ${notifications[key as keyof typeof notifications] ? 'bg-emerald-600' : 'bg-gray-300'}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-all ${notifications[key as keyof typeof notifications] ? 'translate-x-7' : 'translate-x-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Appearance */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-5 h-5 text-slate-700" />
                  <h3 className="font-semibold text-lg">Appearance</h3>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Theme</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setTheme('light')}
                      className={`flex-1 py-3 rounded-2xl flex items-center justify-center gap-2 border ${theme === 'light' ? 'border-slate-900 bg-slate-50' : 'border-gray-200'}`}
                    >
                      <Sun className="w-5 h-5" /> Light
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={`flex-1 py-3 rounded-2xl flex items-center justify-center gap-2 border ${theme === 'dark' ? 'border-slate-900 bg-slate-900 text-white' : 'border-gray-200'}`}
                    >
                      <Moon className="w-5 h-5" /> Dark
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-3">Language</p>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-slate-500"
                  >
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Arabic">Arabic</option>
                  </select>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="bg-white rounded-3xl p-8 border border-red-100">
                <h3 className="font-semibold text-red-600 mb-6">Danger Zone</h3>
                
                <button className="w-full flex items-center justify-center gap-3 py-4 border border-red-300 hover:bg-red-50 text-red-600 rounded-2xl font-medium transition">
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>

                <button className="w-full mt-4 flex items-center justify-center gap-3 py-4 border border-red-300 hover:bg-red-50 text-red-600 rounded-2xl font-medium transition">
                  <Trash2 className="w-5 h-5" />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}