'use client';

import { useEffect, useRef, useState } from "react";

export default function VerifyPage() {
  const length = 5;
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    inputsRef.current[0]?.focus();
   async function getEmailFromStorage() {
     const savedEmail = localStorage.getItem('email');
    if (!savedEmail) {
     window.location.href = '/register';
     return;
    }
     setEmail(savedEmail);
   }
   getEmailFromStorage()
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newValues.every((v) => v !== "")) {
      const code = newValues.join("");
      console.log("Code:", code);
      // 👉 call your API here
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (!values[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };
  async function handleSubmit() {
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, code: values.join("") })
      });
      if (!res.ok) {
        throw new Error("Error verifying email");
      }
        const data = await res.json()
        localStorage.setItem('user', JSON.stringify(data))
        window.location.href = '/dashboard';
    }
    catch(err){
      console.log(err)
    }
    finally{

    }
  }

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center">
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Verify Email
        </h2>
        <p> A verification code has been sent to your email.</p>
        <p className="text-lg font-medium text-gray-900 dark:text-white">
          {email}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Enter the 5-digit code sent to your email
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mt-6">
          {values.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-lg rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={() => {
            const code = values.join("");
            console.log("Manual submit:", code);
          }}
          className="mt-6 w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition"
        >
          Verify
        </button>

        {/* Optional Resend */}
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Didn’t get the code?{" "}
          <span className="text-emerald-600 cursor-pointer hover:underline">
            Resend
          </span>
        </p>
      </div>
    </div>
  );
}