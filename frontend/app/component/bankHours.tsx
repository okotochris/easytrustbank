// components/BankingHours.tsx
import React from 'react';
import { Clock, Phone, Mail, MapPin } from 'lucide-react';

export default function BankingHours() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 lg:p-12">
      <h3 className="text-3xl font-semibold text-gray-900 mb-12 flex items-center gap-3">
        <Clock className="w-7 h-7 text-blue-600" />
        Banking Hours & Support
      </h3>

      {/* All 4 sections in one row on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* 1. Banking Hours */}
        <div className="lg:border-r lg:border-gray-100 lg:pr-12 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-6 h-6 text-blue-600" />
            <h4 className="font-semibold text-lg text-gray-900">Branch Hours</h4>
          </div>
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span>Mon – Fri</span>
              <span className="font-medium">9:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="font-medium">9:00 AM – 1:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        {/* 2. Phone Banking */}
        <div className="lg:border-r lg:border-gray-100 lg:pr-8">
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-6 h-6 text-blue-600" />
            <h4 className="font-semibold text-lg text-gray-900">Phone Banking</h4>
          </div>
          <p className="text-emerald-600 font-medium">Available 24/7</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href="tel:+15145550123" className="block hover:text-blue-700 transition">
              🇨🇦 +1 (514) 555-0123
            </a>
            <a href="tel:+33176543210" className="block hover:text-blue-700 transition">
              🇫🇷 +33 1 76 54 32 10
            </a>
          </div>
        </div>

        {/* 3. Email Support */}
        <div className="lg:border-r lg:border-gray-100 lg:pr-8">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-6 h-6 text-blue-600" />
            <h4 className="font-semibold text-lg text-gray-900">Email Support</h4>
          </div>
          <p className="text-gray-600">Response within 24 hours</p>
          <a 
            href="mailto:support@easytrustbank.demo" 
            className="mt-3 block text-blue-600 hover:text-blue-700 font-medium transition"
          >
            info@easytrustbank.com
          </a>
        </div>

        {/* 4. Visit Us */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h4 className="font-semibold text-lg text-gray-900">Visit Us</h4>
          </div>
          
          <div className="space-y-6 text-sm">
            <div>
              <p className="font-medium text-gray-900">Headquarters</p>
              <p className="text-blue-600">Montréal, Canada</p>
              <p className="text-gray-600 mt-1 leading-tight">
                129 Rue Saint-Jacques<br />
                Montréal, QC H2Y 1L6
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-900">Branch Office</p>
              <p className="text-blue-600">Paris, France</p>
              <p className="text-gray-600 mt-1 leading-tight">
                17 Boulevard des Italiens<br />
                75002 Paris
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}