'use client';

import { useState } from 'react';
import { X, GraduationCap, Home, Briefcase, Heart, Leaf, Users, DollarSign, CheckCircle } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';

export default function GrantsAid() {
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
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Grants & Financial Aid</h1>
          <p className="text-xl text-gray-600 mb-12">
            Supporting your dreams and goals through grants, scholarships, and financial assistance programs. Making education, housing, and business development more accessible.
          </p>
        </div>
      </section>

      {/* GRANT CATEGORIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Available Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Education Grants",
                desc: "Financial support for students pursuing higher education, vocational training, or skill development.",
                icon: GraduationCap,
                amount: "Up to $10,000",
                eligibility: ["Enrolled students", "Minimum GPA 2.5", "Financial need", "Canadian citizens/PR"]
              },
              {
                title: "Homebuyer Assistance",
                desc: "Grants and low-interest loans to help first-time homebuyers achieve homeownership.",
                icon: Home,
                amount: "Up to $15,000",
                eligibility: ["First-time buyers", "Income guidelines", "Property value limits", "Credit score 620+"]
              },
              {
                title: "Small Business Grants",
                desc: "Funding for entrepreneurs and small business owners to start or expand their operations.",
                icon: Briefcase,
                amount: "Up to $25,000",
                eligibility: ["Business plan required", "Revenue under $500K", "2+ years experience", "Local business"]
              },
              {
                title: "Healthcare Access",
                desc: "Financial assistance for medical expenses, equipment, and healthcare services.",
                icon: Heart,
                amount: "Up to $5,000",
                eligibility: ["Medical necessity", "Income guidelines", "Insurance coverage gap", "Doctor recommendation"]
              },
              {
                title: "Environmental Grants",
                desc: "Support for eco-friendly projects, renewable energy, and sustainable development.",
                icon: Leaf,
                amount: "Up to $20,000",
                eligibility: ["Environmental impact", "Sustainability focus", "Community benefit", "Feasibility study"]
              },
              {
                title: "Community Development",
                desc: "Grants for community projects, non-profits, and local development initiatives.",
                icon: Users,
                amount: "Up to $50,000",
                eligibility: ["Non-profit status", "Community impact", "Sustainability plan", "Board approval"]
              },
            ].map((grant, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition">
                <grant.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{grant.title}</h3>
                <p className="text-gray-600 mb-6">{grant.desc}</p>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-lg">{grant.amount}</p>
                  <p className="text-sm text-gray-500">Maximum award</p>
                </div>

                <div>
                  <p className="font-medium mb-3">Eligibility:</p>
                  <ul className="space-y-1">
                    {grant.eligibility.map((item, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-2xl font-semibold mt-6 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How to Apply</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Check Eligibility",
                desc: "Review the requirements for your chosen grant program to ensure you qualify."
              },
              {
                step: "2",
                title: "Gather Documents",
                desc: "Prepare all required documentation including proof of income, identification, and supporting materials."
              },
              {
                step: "3",
                title: "Submit Application",
                desc: "Complete the online application form and upload all required documents."
              },
              {
                step: "4",
                title: "Review & Award",
                desc: "Applications are reviewed within 4-6 weeks. Successful applicants receive funding within 30 days."
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                type: "Education Grant",
                amount: "$8,500",
                story: "The education grant helped me complete my nursing degree. I&apos;m now working at a local hospital and giving back to my community.",
                image: "👩‍⚕️"
              },
              {
                name: "James Chen",
                type: "Small Business Grant",
                amount: "$15,000",
                story: "With the business grant, I was able to expand my food truck business and hire two additional employees. We now serve three cities!",
                image: "👨‍🍳"
              },
            ].map((story, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{story.image}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{story.name}</h3>
                    <p className="text-blue-600 font-medium">{story.type} - {story.amount}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{story.story}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCIAL LITERACY */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Financial Education Resources</h2>
          <p className="text-xl text-gray-600 mb-8">
            Build your financial knowledge with our free educational resources and workshops.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Budgeting Basics",
              "Credit Score Improvement",
              "Investment Fundamentals",
              "Small Business Finance",
              "Retirement Planning",
              "Debt Management"
            ].map((resource, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-200 transition">
                <h3 className="font-semibold mb-2">{resource}</h3>
                <p className="text-sm text-gray-600 mb-4">Free online course with certificate</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Start Learning →
                </button>
              </div>
            ))}
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