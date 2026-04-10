'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';
import FancyLoader from '@/app/component/loading';
import { useRouter } from 'next/navigation';


export default function PinLogin() {
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();


  const addNumber = (num: string) => {
    setMessage('');
    if (pin.length < 4) {
      setPin(pin + num);
    }
  };

  const removeNumber = () => {
    setPin(pin.slice(0, -1));
  };

  const clearAll = () => {
    setPin('');
  };

  const handleLogin = async () => {
    if (pin.length !== 4) {
      setMessage('Enter 4-digit PIN');
      return;
    }

    try {
      setLoading(true);
    const user = localStorage.getItem('user');

    if (!user) {
      setMessage('No user data found. Please login again.');
      window.location.href = '/login';
      return;
    }
    const userData = JSON.parse(user);

    const email = userData.email;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify-pin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Invalid PIN');
        setPin('');
        return;
      }

      // success → redirect or store auth
      setMessage('Login successful ✅');

      // Example redirect:
      router.push('/dashboard');

    } catch (err) {
      setMessage('Server error ❌');
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950 px-4">
      <div className="w-full max-w-sm bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg">

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Lock className="text-blue-600" />
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">
            Enter Your PIN
          </h1>
        </div>

        {/* PIN dots */}
        <div className="flex justify-center gap-3 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border ${
                pin[i] ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Keyboard */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[1,2,3,4,5,6,7,8,9].map((num) => (
            <button
              key={num}
              onClick={() => addNumber(num.toString())}
              disabled={loading}
              className="py-3 rounded-lg bg-gray-200 dark:bg-zinc-800 text-lg font-semibold hover:bg-gray-300 dark:hover:bg-zinc-700"
            >
              {num}
            </button>
          ))}

          <button
            onClick={clearAll}
            disabled={loading}
            className="py-3 rounded-lg bg-red-200 text-red-700 font-semibold"
          >
            C
          </button>

          <button
            onClick={() => addNumber('0')}
            disabled={loading}
            className="py-3 rounded-lg bg-gray-200 dark:bg-zinc-800 text-lg font-semibold"
          >
            0
          </button>

          <button
            onClick={removeNumber}
            disabled={loading}
            className="py-3 rounded-lg bg-yellow-200 text-yellow-800 font-semibold"
          >
            ⌫
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Verifying...' : 'Login'}
        </button>

        {/* Message */}
        {message && (
          <p className="text-center text-sm mt-3 text-red-500">
            {message}
          </p>
        )}
      </div>
      {loading && <FancyLoader fullScreen message="Verifying PIN...." /> }
    </div>
  );
}