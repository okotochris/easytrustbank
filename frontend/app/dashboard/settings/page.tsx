'use client';

import React, { useState } from 'react';
import { 
  Shield, Bell, Lock, User, Globe, Moon, Sun, LogOut, Trash2, Eye, EyeOff, Upload, Camera 
} from 'lucide-react';
import Sidebar from '@/app/component/Sidebar';
import Header from '@/app/component/headerbar';

export default function SettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>('Dashboard');
  const [activeItem, setActiveItem] = useState<string>('Settings');

  // Profile Picture State
  const [profileImage, setProfileImage] = useState<string>('/default-avatar.png'); // Default avatar
  const [isUploading, setIsUploading] = useState(false);

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

  // Handle Profile Picture Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
        setIsUploading(false);
        alert("✅ Profile picture updated successfully!");
      };
      reader.readAsDataURL(file);
    }, 1200);
  };

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
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-gray-800 to-slate-900 dark:from-zinc-900 dark:to-zinc-950 text-white py-12 rounded-3xl mb-10">
              <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Settings</h1>
                <p className="text-gray-400 mt-3 text-lg">Manage your account preferences and security</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Main Settings Content */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Profile Settings with Picture Upload */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-8 border border-gray-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3 mb-8">
                    <User className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Profile Information</h2>
                  </div>

                  {/* Profile Picture Upload */}
                  <div className="flex flex-col items-center mb-10">
                    <div className="relative">
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-zinc-800 shadow-md" 
                      />
                      <label 
                        htmlFor="profile-upload"
                        className="absolute bottom-0 right-0 w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition"
                      >
                        <Camera className="w-5 h-5 text-white" />
                      </label>
                      <input 
                        type="file" 
                        id="profile-upload" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="hidden" 
                      />
                    </div>
                    {isUploading && <p className="text-xs text-blue-600 mt-2">Uploading...</p>}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-slate-500 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-slate-500 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-slate-500 text-gray-900 dark:text-white"
                      />
                    </div>

                    <button
                      onClick={handleSaveProfile}
                      className="w-full bg-slate-900 hover:bg-black dark:bg-slate-700 dark:hover:bg-slate-600 text-white py-4 rounded-2xl font-semibold transition"
                    >
                      Save Profile Changes
                    </button>
                  </div>
                </div>

                {/* Security Settings - Unchanged */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-8 border border-gray-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3 mb-8">
                    <Lock className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Security</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-slate-500 text-gray-900 dark:text-white"
                          placeholder="••••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">New Password</label>
                        <input 
                          type="password" 
                          className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-slate-500 text-gray-900 dark:text-white" 
                          placeholder="New password" 
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Confirm New Password</label>
                        <input 
                          type="password" 
                          className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-slate-500 text-gray-900 dark:text-white" 
                          placeholder="Confirm password" 
                        />
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

                {/* Notifications - Unchanged */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-8 border border-gray-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3 mb-8">
                    <Bell className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
                  </div>

                  <div className="space-y-6">
                    {Object.keys(notifications).map((key) => (
                      <div key={key} className="flex items-center justify-between py-2">
                        <div>
                          <p className="font-medium capitalize text-gray-900 dark:text-white">
                            {key} Notifications
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {key === 'security' 
                              ? 'Alerts about login and security events' 
                              : `Receive ${key} updates`}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleNotification(key as keyof typeof notifications)}
                          className={`w-12 h-6 rounded-full transition-all ${notifications[key as keyof typeof notifications] ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-zinc-700'}`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full shadow transition-all ${notifications[key as keyof typeof notifications] ? 'translate-x-7' : 'translate-x-1'}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Appearance & Danger Zone */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Appearance */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Appearance</h3>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Theme</p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setTheme('light')}
                        className={`flex-1 py-3 rounded-2xl flex items-center justify-center gap-2 border transition-all ${
                          theme === 'light' 
                            ? 'border-slate-900 dark:border-white bg-slate-50 dark:bg-zinc-800' 
                            : 'border-gray-200 dark:border-zinc-700'
                        }`}
                      >
                        <Sun className="w-5 h-5" /> Light
                      </button>
                      <button
                        onClick={() => setTheme('dark')}
                        className={`flex-1 py-3 rounded-2xl flex items-center justify-center gap-2 border transition-all ${
                          theme === 'dark' 
                            ? 'border-slate-900 dark:border-white bg-slate-900 text-white' 
                            : 'border-gray-200 dark:border-zinc-700'
                        }`}
                      >
                        <Moon className="w-5 h-5" /> Dark
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Language</p>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-slate-500 text-gray-900 dark:text-white"
                    >
                      <option value="English">English</option>
                      <option value="French">French</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Arabic">Arabic</option>
                    </select>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-red-100 dark:border-red-900">
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-6">Danger Zone</h3>
                  
                  <button className="w-full flex items-center justify-center gap-3 py-4 border border-red-300 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950 text-red-600 dark:text-red-400 rounded-2xl font-medium transition">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>

                  <button className="w-full mt-4 flex items-center justify-center gap-3 py-4 border border-red-300 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950 text-red-600 dark:text-red-400 rounded-2xl font-medium transition">
                    <Trash2 className="w-5 h-5" />
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}