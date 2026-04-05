'use client';

import { useState } from 'react';
import { X, Lock } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function PrivacyPolicy() {
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
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* HEADER */}
      <Header onLoginClick={() => setShowLogin(true)} onRegisterClick={() => setShowRegister(true)} />

      {/* HERO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Lock className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mb-12">
            Your privacy is our priority. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* PRIVACY CONTENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm space-y-8">

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Open an account or apply for our products and services</li>
                  <li>Use our online banking services or mobile applications</li>
                  <li>Contact us for customer support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p>This may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (name, address, date of birth, etc.)</li>
                  <li>Contact information (phone number, email address)</li>
                  <li>Financial information (account numbers, transaction history)</li>
                  <li>Employment and income information</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide banking products and services</li>
                  <li>Process transactions and maintain your accounts</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Improve our products and services</li>
                  <li>Communicate with you about your accounts and our offerings</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Information Sharing</h2>
              <div className="space-y-4 text-gray-700">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who assist us in operating our business</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>We implement comprehensive security measures to protect your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Employee training on data protection</li>
                  <li>Secure data centers with physical access controls</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our website uses cookies and similar technologies to enhance your browsing experience:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand user behavior</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
                <p>You can control cookie preferences through your browser settings.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. International Data Transfers</h2>
              <div className="space-y-4 text-gray-700">
                <p>As a bank operating in Canada and France, your information may be transferred between these countries. We ensure that such transfers comply with applicable data protection laws and maintain adequate protection for your personal information.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Changes to This Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the effective date.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p><strong>Email:</strong> privacy@easytrustbank.demo</p>
                  <p><strong>Phone:</strong> +1 (514) 555-0123</p>
                  <p><strong>Mail:</strong> 129 Rue Saint-Jacques, Montréal, QC H2Y 1L6, Canada</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                <strong>Last Updated:</strong> April 4, 2026<br />
                <strong>Effective Date:</strong> April 4, 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* REGISTER MODAL */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-100 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden">
            <div className="flex justify-between items-center border-b px-8 py-6">
              <div>
                <h2 className="text-2xl font-bold">Open Your Account</h2>
                <p className="text-sm text-gray-500">Step {registerStep} of 4</p>
              </div>
              <button onClick={() => {setShowRegister(false); setRegisterStep(1);}} className="text-3xl text-gray-400 hover:text-gray-600">
                <X size={28} />
              </button>
            </div>

            <div className="p-8">
              {registerStep === 1 && (
                <div className="space-y-6">
                  <input type="text" placeholder="Full Name" className="w-full border rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="email" placeholder="Email Address" className="w-full border rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                  <input type="tel" placeholder="Phone Number" className="w-full border rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500" />
                </div>
              )}

              {registerStep === 2 && (
                <div className="space-y-6">
                  <input type="text" placeholder="Street Address" className="w-full border rounded-2xl px-6 py-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="border rounded-2xl px-6 py-4" />
                    <input type="text" placeholder="Postal Code" className="border rounded-2xl px-6 py-4" />
                  </div>
                  <select className="w-full border rounded-2xl px-6 py-4">
                    <option>Canada</option>
                    <option>France</option>
                    <option>Other</option>
                  </select>
                </div>
              )}

              {registerStep === 3 && (
                <div className="space-y-6 text-center py-8">
                  <p className="text-lg">Choose your account type</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="border-2 border-blue-600 text-blue-700 py-6 rounded-2xl font-medium">Checking</button>
                    <button className="border border-gray-300 py-6 rounded-2xl">Savings</button>
                  </div>
                </div>
              )}

              {registerStep === 4 && (
                <div className="space-y-6">
                  <p className="text-center">Create a secure password</p>
                  <input type="password" placeholder="Password" className="w-full border rounded-2xl px-6 py-4" />
                  <input type="password" placeholder="Confirm Password" className="w-full border rounded-2xl px-6 py-4" />
                </div>
              )}

              <button
                onClick={nextStep}
                className="mt-10 w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold text-lg transition"
              >
                {registerStep === 4 ? "Create My Account" : "Continue"}
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 pb-8">Demo only — No data is stored in MongoDB yet</p>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-100">
          <div className="bg-white rounded-3xl max-w-md w-full p-10">
            <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
            <div className="space-y-6">
              <input type="text" placeholder="Email or Username" className="w-full border rounded-2xl px-6 py-4" />
              <input type="password" placeholder="Password" className="w-full border rounded-2xl px-6 py-4" />
              <button onClick={fakeLoginSubmit} className="w-full bg-blue-700 text-white py-4 rounded-2xl font-semibold">Sign In Securely</button>
            </div>
            <button onClick={() => setShowLogin(false)} className="mt-6 text-gray-500 underline w-full text-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}