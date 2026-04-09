'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {Shield, ArrowLeft, Plus, CreditCard, Activity, DollarSign, User, LogOut, CheckCircle, Trash } from 'lucide-react';
import FancyLoader from '../component/loading';

interface AdminLoginForm {
  email: string;
  password: string;
}

interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  accountNumber: string;
  balance: number;
}

interface HistoryItem {
  _id: string;
  email: string;
  date: string;
  description: string;
  amount: number;
  userAccountNumber: string;
  username: string;
  type: string;
  title: string;
  time: string;
  status: string;
}

export default function AdminPage() {
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const [adminEmail, setAdminEmail] = useState('');
  const [loginForm, setLoginForm] = useState<AdminLoginForm>({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState<UserData[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);

  const [transactionForm, setTransactionForm] = useState({
    amount: '',
    type: 'credit',
    title: '',
    description: '',
    status: 'Completed',
    userAccountNumber: '',
    username:"",
    date: "",
    bank:"",
    time: new Date().toLocaleTimeString('en-US', { hour12: false })
  });

  const [cardForm, setCardForm] = useState({
    cardType: 'Virtual',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

useEffect(()=>{
  async function fetchUsers(){
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/all-users`);
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || 'Unable to fetch users');
        return;
      }
  
      setUsers(data.users);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setMessage('Unable to load users.');
    }
  }
  fetchUsers()
  }, [])

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const isAdminLoggedIn = true; // For demo purposes, we assume admin is logged in if token exists

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setLoginError('');
  };

  const handleAdminLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      setLoginError('Enter admin email and password.');
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.message || 'Unable to login as admin');
        return;
      }
      setLoginForm({ email: '', password: '' });
      setMessage('Admin signed in successfully. Search for a user to begin.');
      setTimeout(() => setMessage(''), 4000);
    } catch (error) {
      setLoginError('Server error while signing in.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  const loadUserHistory = async (user: UserData) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/history?email=${encodeURIComponent(user.email)}`);
      const data = await res.json();
      if (res.ok && data.history) {
        setHistoryItems(data.history);
      } else {
        setHistoryItems([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setHistoryItems([]);
      setIsLoading(false);
    }
  };

  const handleSelectUser = (user: UserData) => {
    setSelectedUser(user);
    setHistoryItems([]);
    loadUserHistory(user);
    setMessage('Loaded user profile and history.');
  };

  const handleTransactionFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setTransactionForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCardFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCardForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const submitTransaction = async () => {
    
    const amount = Number(transactionForm.amount);
    if (!amount || amount <= 0) {
      setMessage('Enter a valid amount.');
      return;
    }
    const payload = {
      username: transactionForm.username,
      amount,
      bank: transactionForm.bank,
      type: transactionForm.type,
      title: transactionForm.title,
      description: transactionForm.description,
      status: transactionForm.status,
      date: transactionForm.date,
      time: transactionForm.time,
      userAccountNumber: transactionForm.userAccountNumber
    };
    setIsLoading(true);
    try {
      const res = await fetch(`${apiUrl}/admin/transaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || 'Unable to submit transaction');
        return;
      }
      setMessage(data.message || 'Transaction recorded.');
      setSelectedUser(data.user || selectedUser);
      window.location.reload();

    } catch (error) {
      console.error(error);
      setMessage('Transaction failed, see console.');
    } finally {
      setIsLoading(false);
    }
  };

  const submitCard = async () => {
    
    if (!cardForm.cardNumber || !cardForm.expiryDate || !cardForm.cvv) {
      setMessage('Fill in all card fields.');
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`${apiUrl}/admin/card`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken || ''
        },
        body: JSON.stringify({
          targetEmail: users[0]?.email,
          cardType: cardForm.cardType,
          cardNumber: cardForm.cardNumber,
          expiryDate: cardForm.expiryDate,
          cvv: cardForm.cvv
        })
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || 'Unable to create card');
        return;
      }
      setMessage('Card created successfully.');
      setCardForm({ cardType: 'Virtual', cardNumber: '', expiryDate: '', cvv: '' });
    } catch (error) {
      console.error(error);
      setMessage('Card creation failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    setAdminToken(null);
    setAdminEmail('');
    setUsers([]);
    setSelectedUser(null);
    setHistoryItems([]);
    setMessage('Admin session ended.');
  };

  const statusBadge = useMemo(() => {
    if (!selectedUser) return null;
    return selectedUser.balance >= 0 ? 'text-emerald-600 bg-emerald-50' : 'text-amber-700 bg-amber-50';
  }, [selectedUser]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              <ArrowLeft className="w-4 h-4" /> Back to website
            </Link>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">Admin Control Panel</h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Protect this page with your admin credentials, then manage customer balances, transaction history, and card issuance from a single panel.
            </p>
          </div>
          {isAdminLoggedIn && (
            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          )}
        </div>

        {message && (
          <div className="mb-6 rounded-3xl border border-emerald-200 bg-emerald-50 py-4 px-5 text-sm text-emerald-900 dark:border-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-200">
            {message}
          </div>
        )}

        {!isAdminLoggedIn ? (
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Admin Access</p>
                  <h2 className="text-2xl font-semibold">Sign in securely</h2>
                </div>
              </div>
              <form onSubmit={handleAdminLogin} className="space-y-5">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Admin Email</span>
                  <input
                    name="email"
                    type="email"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                    placeholder="admin@easytrustbank.com"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</span>
                  <input
                    name="password"
                    type="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                    placeholder="Enter admin password"
                  />
                </label>
                {loginError && <p className="text-sm text-rose-600">{loginError}</p>}
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 disabled:opacity-70">
                  {isLoading ? 'Signing in...' : 'Sign in as Admin'}
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl font-semibold">Admin capabilities</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li>• Search and inspect customer accounts</li>
                <li>• Mimic deposits and withdrawals</li>
                <li>• Create manual credit/debit history entries</li>
                <li>• Issue cards directly for any user</li>
                <li>• Track actions and review transaction history</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Admin signed in as</p>
                    <p className="text-lg font-semibold">{adminEmail}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-100">
                    Access granted
                  </div>
                </div>
                <div className="space-y-4">
                  {
                    users && users.map(item=>(
                      <div key={item._id} className="w-full relative rounded-3xl border border-slate-200 bg-slate-50 p-4 text-left hover:border-blue-500 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500 dark:hover:bg-slate-900">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-medium">{item.firstName} {item.lastName}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.email}</p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Account {item.accountNumber} - Balance ${item.balance.toLocaleString()}</p>
                        <Trash className='text-red-500 hover:text-red-700 absolute top-5 right-10'/>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100 mb-5">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Selected customer</p>
                    <h2 className="text-2xl font-semibold">{selectedUser ? `${selectedUser.firstName} ${selectedUser.lastName}` : 'No customer selected'}</h2>
                  </div>
                </div>
                {selectedUser ? (
                  <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-950">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Email</p>
                        <p className="mt-2 font-medium">{selectedUser.email}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-950">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Account</p>
                        <p className="mt-2 font-medium">{selectedUser.accountNumber}</p>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-950">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Balance</p>
                        <p className={`mt-2 text-xl font-semibold ${statusBadge}`}>
                          ${selectedUser.balance.toLocaleString()}
                        </p>
                      </div>
                      <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-950">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Phone</p>
                        <p className="mt-2 font-medium">{selectedUser.phone || '—'}</p>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 dark:border-slate-800 dark:bg-slate-950">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Actions</p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <button onClick={() => setTransactionForm(prev => ({ ...prev, type: 'credit', title: 'Admin Credit', description: 'Credit created by admin' }))} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
                          <DollarSign className="mr-2 inline-block h-4 w-4" /> Prepare credit
                        </button>
                        <button onClick={() => setTransactionForm(prev => ({ ...prev, type: 'debit', title: 'Admin Debit', description: 'Debit created by admin' }))} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
                          <Activity className="mr-2 inline-block h-4 w-4" /> Prepare debit
                        </button>
                        <button onClick={() => setCardForm(prev => ({ ...prev, cardType: 'Virtual' }))} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
                          <CreditCard className="mr-2 inline-block h-4 w-4" /> Issue card
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">Search for a customer to view account details and perform actions.</p>
                )}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.85fr,1.15fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3 mb-6 text-slate-900 dark:text-slate-100">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    <Plus className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Transaction Builder</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Create a credit or debit activity under the selected user&apos;s account.</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Amount</label>
                      <input type="number" required name="amount" value={transactionForm.amount} onChange={handleTransactionFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" placeholder="0.00" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Type</label>
                      <select name="type" required value={transactionForm.type} onChange={handleTransactionFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Sender Account name</label>
                      <input type="text" required name="username" value={transactionForm.username} onChange={handleTransactionFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" placeholder="Sender's name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Receiver Account details</label>
                      <select name="userAccountNumber" 
                        value={transactionForm.userAccountNumber} 
                        onChange={(e)=>setTransactionForm({...transactionForm, userAccountNumber:e.target.value})} 
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
                        <option> Select Account Number</option>
                        {users && users.map(user => (
                          <option key={user._id} value={user.accountNumber}>
                            {user.firstName} {user.lastName} ({user.accountNumber})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
                    <input name="title" required value={transactionForm.title} onChange={handleTransactionFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
                    <textarea name="description" required value={transactionForm.description} onChange={handleTransactionFormChange} rows={3} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"></textarea>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
                      <input name="status" required value={transactionForm.status} onChange={handleTransactionFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Bank</label>
                      <input name="bank" required value={transactionForm.bank} onChange={handleTransactionFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Time</label>
                    <input name="time" type="time" required value={transactionForm.time} onChange={handleTransactionFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Date</label>
                      <input name="date" type="date" required  onChange={handleTransactionFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" />
                  </div>
                </div>
                  <button onClick={() => submitTransaction()} disabled={isLoading} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60">
                    <Plus className="w-4 h-4" /> Submit transaction
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3 mb-6 text-slate-900 dark:text-slate-100">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Issue Card</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Create a new card record for the selected user instantly.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Card type</label>
                    <select name="cardType" value={cardForm.cardType} onChange={handleCardFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
                      <option value="Virtual">Virtual</option>
                      <option value="Physical">Physical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Card number</label>
                    <input name="cardNumber" required value={cardForm.cardNumber} onChange={handleCardFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" placeholder="1234 5678 9012 3456" />
                  </div> 
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Expiry date</label>
                      <input name="expiryDate" required value={cardForm.expiryDate} onChange={handleCardFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">CVV</label>
                      <input name="cvv" required value={cardForm.cvv} onChange={handleCardFormChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" placeholder="123" />
                    </div>
                  </div>
                  <button onClick={submitCard} disabled={isLoading} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60">
                    <Plus className="w-4 h-4" /> Issue card now
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3 mb-6 text-slate-900 dark:text-slate-100">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Search results</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Click a customer to load details and ledger history.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {users.length === 0 ? (
                    <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-400">No users found yet. Use the search box to load accounts.</p>
                  ) : (
                    users.map((user) => (
                      <button key={user._id} onClick={() => handleSelectUser(user)} className="w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-left hover:border-blue-500 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500 dark:hover:bg-slate-900">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{user.firstName} {user.lastName}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
                          </div>
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">${user.balance.toLocaleString()}</p>
                        </div>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Account {user.accountNumber}</p>
                      </button>
                    ))
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3 mb-6 text-slate-900 dark:text-slate-100">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Account transaction history</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Recent ledger entries for the selected user.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {selectedUser ? (
                    historyItems.length === 0 ? (
                      <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-400">No history found for this account yet.</p>
                    ) : (
                      <div className="space-y-3">
                        {historyItems.map((item) => (
                          <div key={item._id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{new Date(item.date).toLocaleDateString()} · {item.time}</p>
                              </div>
                              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.type === 'credit' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                                {item.type.toUpperCase()}
                              </span>
                            </div>
                            <div className="mt-3 flex items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
                              <p>{item.description}</p>
                              <p className="font-semibold">${item.amount.toLocaleString()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-400">Select a customer to review activity.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
       {isLoading && <FancyLoader fullScreen message="fetching cards details..." /> }
    </div>
  );
}
