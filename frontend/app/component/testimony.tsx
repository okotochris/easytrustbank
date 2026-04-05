// components/Testimonials.tsx
'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Paris Branch, France",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "EasyTrust Bank has completely changed how I manage my finances. The customer service is outstanding and the mobile app is incredibly intuitive. I feel truly valued as a member.",
    },
    {
      name: "Alexandre Moreau",
      location: "Montréal, Canada",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "As a small business owner, their business banking solutions have been a game-changer. The rates are competitive and the support team always goes above and beyond.",
    },
    {
      name: "Sophie Laurent",
      location: "Paris Branch, France",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "I opened a high-yield savings account and received the $200 bonus within days. The entire process was seamless. I highly recommend EasyTrust Bank to anyone looking for trustworthy banking.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
            <Star className="w-6 h-6 fill-current" />
            <Star className="w-6 h-6 fill-current" />
            <Star className="w-6 h-6 fill-current" />
            <Star className="w-6 h-6 fill-current" />
            <Star className="w-6 h-6 fill-current" />
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
            What Our Members Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who trust EasyTrust Bank with their financial journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-blue-200 mb-8" />

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed flex-1">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Join over <span className="font-semibold text-gray-900">50,000+</span> happy members who trust EasyTrust Bank
          </p>
        </div>
      </div>
    </section>
  );
}