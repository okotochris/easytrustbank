'use client';

import { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';
import FancyLoader from '@/app/component/loading';

export default function SetPinPage() {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [step, setStep] = useState<'pin' | 'confirm'>('pin');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        if (!savedEmail) {
            window.location.href = '/login';
        }else{
             setEmail(savedEmail);
        }
       
    }, []);
  const addNumber = (num: string) => {
    setMessage('');

    if (step === 'pin') {
      if (pin.length < 4) setPin(pin + num);
    } else {
      if (confirmPin.length < 4) setConfirmPin(confirmPin + num);
    }
  };

  const removeNumber = () => {
    if (step === 'pin') {
      setPin(pin.slice(0, -1));
    } else {
      setConfirmPin(confirmPin.slice(0, -1));
    }
  };

  const clearAll = () => {
    if (step === 'pin') setPin('');
    else setConfirmPin('');
  };

  const handleSubmit = async () => {
    if (pin.length !== 4) return setMessage('Enter 4-digit PIN');
    if (confirmPin.length !== 4) return setMessage('Confirm your PIN');
    if (pin !== confirmPin) return setMessage('PINs do not match');

    try {
      setIsLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/set-pin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin, email }),
      });

      if (!res.ok) throw new Error();
      window.localStorage.removeItem('email');
      setPin('');
      setConfirmPin('');
      window.location.href = '/dashboard';
      setStep('pin');
    } catch {
      setMessage('Failed to set PIN ❌');
    } finally {
      setLoading(false);
    }
  };

  const currentValue = step === 'pin' ? pin : confirmPin;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950 px-4">
      <div className="w-full max-w-sm bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg">

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Lock className="text-blue-600" />
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">
            {step === 'pin' ? 'Create PIN' : 'Confirm PIN'}
          </h1>
        </div>

        {/* PIN dots */}
        <div className="flex justify-center gap-3 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border ${
                currentValue[i] ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
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
              className="py-3 rounded-lg bg-gray-200 dark:bg-zinc-800 text-lg font-semibold hover:bg-gray-300 dark:hover:bg-zinc-700"
            >
              {num}
            </button>
          ))}

          <button
            onClick={clearAll}
            className="py-3 rounded-lg bg-red-200 text-red-700 font-semibold"
          >
            C
          </button>

          <button
            onClick={() => addNumber('0')}
            className="py-3 rounded-lg bg-gray-200 dark:bg-zinc-800 text-lg font-semibold"
          >
            0
          </button>

          <button
            onClick={removeNumber}
            className="py-3 rounded-lg bg-yellow-200 text-yellow-800 font-semibold"
          >
            ⌫
          </button>
        </div>

        {/* Actions */}
        <button
          onClick={() => {
            if (step === 'pin') {
              if (pin.length === 4) setStep('confirm');
            } else {
              handleSubmit();
            }
          }}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? 'Saving...'
            : step === 'pin'
            ? 'Continue'
            : 'Finish'}
        </button>

        {/* Message */}
        {message && (
          <p className="text-center text-sm mt-3 text-red-500">
            {message}
          </p>
        )}
      </div>
       {
              isLoading && <FancyLoader fullScreen message="Updating pin...." /> 
            } 
    </div>
  );
}