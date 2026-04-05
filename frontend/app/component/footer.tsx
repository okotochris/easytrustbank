// components/Footer.tsx
import React from 'react';
import { Banknote, MapPin, Phone, Mail, Globe } from 'lucide-react';

function Footer() {
  const fakeRouting = "021000021";
  const fakeIBAN = "FR76 3000 3000 1234 5678 9012 345";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10">
          
          {/* Left Column - Brand & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Banknote className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">EasyTrust Bank</h2>
                <p className="text-xs text-gray-500">Trust • Security • Growth</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              A modern digital banking experience designed for individuals, businesses, 
              and international clients. Built as an educational demonstration project.
            </p>

            {/* Locations */}
            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Headquarters</p>
                  <p className="text-sm">129 Rue Saint-Jacques, Montréal, QC H2Y 1L6, Canada</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Branch Office</p>
                  <p className="text-sm">17 Boulevard des Italiens, 75002 Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/about" className="hover:text-white transition-colors">About Us</a>
              <a href="/personal-banking" className="hover:text-white transition-colors">Personal Banking</a>
              <a href="/business-banking" className="hover:text-white transition-colors">Business Banking</a>
              <a href="/loans-credit" className="hover:text-white transition-colors">Loans & Credit</a>
              <a href="/cards" className="hover:text-white transition-colors">Cards</a>
              <a href="/grants-aid" className="hover:text-white transition-colors">Grants & Aid</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
            
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-white">24/7 Customer Support</p>
                  <p className="text-xs">+1 (514) 555-0123 • +33 1 76 54 32 10</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-white">Email Us</p>
                  <a href="mailto:support@easytrustbank.demo" className="text-xs hover:text-white transition-colors">
                    support@easytrustbank.demo
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-white">Routing & Banking Details</p>
                  <p className="text-xs font-mono">
                    Routing: {fakeRouting}<br />
                    Example IBAN: {fakeIBAN}
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="mt-10">
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/security" className="hover:text-white transition-colors">Security</a>
                <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {currentYear} EasyTrust Bank • Educational Demo Project for School Only
          </p>
          
          <p className="text-center md:text-right opacity-50 max-w-md">
            This is a fictional banking website created purely for educational purposes. 
            It does not represent any real financial institution and no real transactions occur.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;