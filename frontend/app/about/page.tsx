// app/about/page.tsx
'use client';

import { useState } from 'react';
import { Shield, Users, Award, Heart } from 'lucide-react';
import Header from '../component/header';
import Footer from '../component/footer';


export default function About() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [registerStep, setRegisterStep] = useState(1);

  const nextStep = () => {
    if (registerStep < 4) {
      setRegisterStep(registerStep + 1);
    } else {
      alert("✅ Account created successfully! (Demo only - nothing is saved)");
      setShowRegister(false);
      setRegisterStep(1);
    }
  };

  const fakeLoginSubmit = () => {
    alert("✅ Welcome back to EasyTrust Bank! (Demo mode)");
    setShowLogin(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header 
        onLoginClick={() => setShowLogin(true)} 
        onRegisterClick={() => setShowRegister(true)} 
      />

      {/* Hero Section with Image */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://picsum.photos/id/1015/2000/1200')`, // ← Replace with your preferred image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              About EasyTrust Bank
            </h1>
            <p className="mt-6 text-2xl text-blue-100">
              Building trust through exceptional banking since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg text-gray-700 max-w-none space-y-8">
            <p>
              EasyTrust Bank is a modern financial institution headquartered in Montréal, Canada, 
              with a branch in Paris, France. We are committed to providing secure, innovative, 
              and truly member-focused banking solutions.
            </p>
            <p>
              Our mission is simple: to make banking effortless, trustworthy, and rewarding for 
              individuals, families, and businesses across borders. We combine the best of digital 
              technology with the warmth of personal service.
            </p>
            <p>
              Founded in 2020, we have grown rapidly by putting our members first — not shareholders. 
              Every decision we make is guided by one question: <span className="font-semibold">How does this help our members succeed?</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Security",
                desc: "Your financial security is our highest priority. We use advanced encryption and security protocols to protect your assets and data.",
                color: "blue"
              },
              {
                icon: Award,
                title: "Innovation",
                desc: "We continuously invest in the latest technology to deliver seamless, intuitive, and cutting-edge banking experiences.",
                color: "emerald"
              },
              {
                icon: Users,
                title: "Member First",
                desc: "As a member-owned institution, your success is our success. We exist to serve you, not the other way around.",
                color: "amber"
              },
              {
                icon: Heart,
                title: "Community Commitment",
                desc: "We actively support local communities and causes that matter most to our members in Canada and France.",
                color: "rose"
              },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div 
                  key={i}
                  className="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group"
                >
                  <div className={`w-20 h-20 rounded-3xl bg-${value.color}-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-11 h-11 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl font-bold mb-8">Our Mission</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              To provide accessible, secure, and innovative banking solutions that empower our members 
              to achieve financial confidence and freedom — whether they are in Montréal, Paris, or anywhere in between.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-8">Our Vision</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              To become the most trusted digital banking partner for individuals and businesses across Canada and Europe by combining technology with genuine human care.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals (Register & Login) */}
      {/* You can keep your existing modal code here or I can improve it further if you want */}
      {/* ... your existing register and login modals ... */}
    </div>
  );
}