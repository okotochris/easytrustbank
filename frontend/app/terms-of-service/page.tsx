'use client';

import { useState } from 'react';
import { X, Scale } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function TermsOfService() {
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
          <Scale className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Terms of Service</h1>
          <p className="text-xl text-gray-600 mb-12">
            Please read these terms carefully before using our banking services. By using our services, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm space-y-8">

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>By accessing and using EasyTrust Bank&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                <p>This agreement applies to all visitors, users, and others who access or use our banking services.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Banking Services</h2>
              <div className="space-y-4 text-gray-700">
                <p>EasyTrust Bank provides various banking services including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Checking and savings accounts</li>
                  <li>Online and mobile banking</li>
                  <li>Credit and debit cards</li>
                  <li>Loans and credit facilities</li>
                  <li>Investment and wealth management services</li>
                  <li>International banking services</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Account Opening and Eligibility</h2>
              <div className="space-y-4 text-gray-700">
                <p>To open an account with EasyTrust Bank, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 18 years of age</li>
                  <li>Provide valid identification and proof of address</li>
                  <li>Meet our credit and eligibility requirements</li>
                  <li>Reside in Canada or France (or meet international client requirements)</li>
                </ul>
                <p>We reserve the right to refuse account opening at our discretion.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. User Responsibilities</h2>
              <div className="space-y-4 text-gray-700">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Use our services in accordance with applicable laws and regulations</li>
                  <li>Not engage in fraudulent or illegal activities</li>
                  <li>Keep your contact information current</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Fees and Charges</h2>
              <div className="space-y-4 text-gray-700">
                <p>EasyTrust Bank charges various fees for its services. These fees are disclosed in our fee schedule, which is available on our website and in our branches. Fees may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account maintenance fees</li>
                  <li>Transaction fees</li>
                  <li>ATM fees</li>
                  <li>Overdraft fees</li>
                  <li>International transfer fees</li>
                </ul>
                <p>We reserve the right to change our fees with appropriate notice to customers.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Electronic Banking</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our electronic banking services include online banking, mobile banking, and electronic transfers. By using these services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use secure devices and networks</li>
                  <li>Not share your login credentials</li>
                  <li>Log out after each session</li>
                  <li>Report any suspicious activity immediately</li>
                </ul>
                <p>We are not liable for losses resulting from unauthorized access due to your negligence.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Privacy and Data Protection</h2>
              <div className="space-y-4 text-gray-700">
                <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.</p>
                <p>We use industry-standard security measures to protect your personal and financial information.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Termination</h2>
              <div className="space-y-4 text-gray-700">
                <p>Either party may terminate this agreement at any time. Upon termination:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must return all bank property (cards, checks, etc.)</li>
                  <li>Outstanding balances must be paid in full</li>
                  <li>We will provide final statements and account closure</li>
                  <li>Certain obligations (such as privacy) will survive termination</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>EasyTrust Bank&apos;s liability is limited to the extent permitted by applicable law. We are not liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Indirect or consequential damages</li>
                  <li>Loss of profits or business opportunities</li>
                  <li>Damages resulting from force majeure events</li>
                  <li>Third-party actions or system failures</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Governing Law</h2>
              <div className="space-y-4 text-gray-700">
                <p>These Terms of Service are governed by the laws of Canada and the Province of Quebec. Any disputes will be resolved in the courts of Montreal, Quebec.</p>
                <p>For international clients, applicable local laws may also apply.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Changes to Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the modified terms.</p>
                <p>Major changes will be communicated to customers via email or account notifications.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p><strong>Email:</strong> legal@easytrustbank.demo</p>
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