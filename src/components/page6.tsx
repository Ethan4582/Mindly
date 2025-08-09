import React from 'react';
import { TextAnimate } from './magicui/TextAnimate';

// Configuration objects
const PLAN_FEATURES = [
  "Instant access to the full 8-week curriculum",
  "All future updates and bonus content included",
  "Private community access",
  "Certificate of completion"
];

const PLANS = [
  {
    id: 'basic',
    title: 'Basic',
    price: '$169',
    tagBg: 'var(--pricing-border)',
    tagColor: 'var(--pricing-card-bg)',
    description: 'Get ahead of the game by mastering generative AI.',
    accessType: 'Lifetime access',
    buttonText: 'Enrol now for $169',
    paymentText: 'or 3 payments of $60',
    popular: false
  },
  {
    id: 'ai-access',
    title: 'AI Access',
    price: '$459',
    tagBg: 'rgb(255, 111, 0)',
    tagColor: 'rgb(255, 255, 255)',
    description: 'Get ahead of the game by mastering generative AI.',
    accessType: 'Lifetime access + Bonuses',
    buttonText: 'Enrol now for $459',
    paymentText: 'or 3 payments of $349',
    popular: true
  }
];

const BONUSES = [
  { id: 1, title: 'The "AI for Productivity" Bundle', value: '$99 Value' },
  { id: 2, title: 'The Ultimate Prompt Library', value: '$199 Value' },
  { id: 3, title: 'Live Q&A Recordings Vault', value: '$98 Value' }
];

const Pricing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" >
      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10 h-full w-full"
        style={{ backgroundColor: "var(--pricing-bg)" }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--pricing-border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--pricing-border) 1px, transparent 1px)
            `,
            backgroundSize: '8rem 6.5rem'
          }}
        />
      </div>

      <div className="container mx-auto py-12 px-4 text-center text-white relative z-10">
        <h2 className="text-[var(--pricing-h2-size)] text-gray-500 mb-2">Our Pricing</h2>
        <h1 className="font-bold mb-4" style={{ fontSize: "var(--pricing-title-size)" }}>
          <TextAnimate>Choose Your Path to</TextAnimate>
          <div className="ml-158 flex mt-0.5">
            AI <TextAnimate className="text-orange-500"> Mastery</TextAnimate>
          </div>
        </h1>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className="border border-gray-700 rounded-lg p-6 relative"
              style={{ backgroundColor: "var(--pricing-card-bg)" }}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="text-xs px-2 py-1 rounded" style={{ 
                    backgroundColor: "var(--pricing-gray)", 
                    color: "black" 
                  }}>
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-4">
                <span
                  className="text-sm px-3 py-1 rounded"
                  style={{
                    backgroundColor: "orange-700",
                    color: "white"
                  }}
                >
                  {plan.title}
                </span>
              </div>
              
              <div className="mb-6">
                <h2
                  className="font-bold mb-2"
                  style={{ 
                    color: "var(--pricing-white)", 
                    fontSize: "2.25rem" 
                  }}
                >
                  {plan.price}
                </h2>
                <p className="text-sm" style={{ color: "var(--pricing-gray)" }}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h3
                  className="font-semibold mb-4 text-sm uppercase tracking-wider"
                  style={{ color: "var(--pricing-white)" }}
                >
                  WHAT'S INCLUDED
                </h3>
                <div className="space-y-3">
                  {PLAN_FEATURES.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "var(--pricing-orange)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: "var(--pricing-gray)" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4
                  className="font-semibold text-xl mb-2"
                  style={{ color: "var(--pricing-white)" }}
                >
                  {plan.accessType}
                </h4>
              </div>
              
              <div className="flex justify-center mb-2 w-full">
                <div className="relative flex justify-center w-full">
                  <a
                    href="./#pricing"
                    className="group relative flex items-center justify-center transition-all duration-700 rounded-lg px-4 py-2 text-white font-medium shadow-[inset_0_3px_8px_0_rgba(255,255,255,0.1),inset_0_-3px_6px_0_rgba(255,255,255,0.1)] overflow-hidden mx-auto"
                    style={{ 
                      backgroundColor: 'var(--pricing-orange)', 
                      minWidth: '410px', 
                      maxWidth: '420px' 
                    }}
                  >
                    <div className="max-w-0 group-hover:max-w-6 mr-0 group-hover:mr-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center bg-white rounded w-6 h-6">
                      <img
                        src="https://framerusercontent.com/images/U0c022TYy3iR6YjbwbyxOaDRsk.svg"
                        alt=""
                        className="w-3 h-3"
                      />
                    </div>
                    <div className="transition-all duration-300 text-sm whitespace-nowrap px-1">
                      {plan.buttonText}
                    </div>
                    <div className="max-w-6 group-hover:max-w-0 ml-1 group-hover:ml-0 overflow-hidden opacity-100 group-hover:opacity-0 transition-all duration-700 flex items-center justify-center bg-white rounded w-6 h-6">
                      <img
                        src="https://framerusercontent.com/images/U0c022TYy3iR6YjbwbyxOaDRsk.svg"
                        alt=""
                        className="w-3 h-3"
                      />
                    </div>
                  </a>
                </div>
              </div>
              
              <div
                className="text-center text-xs mx-auto my-2 py-2 border-t border-r  border-l border-b rounded border-gray-500 hover:bg-orange-500  duration-300"
                style={{ 
                  color: "var(--pricing-gray)",
                  width: "390px",
                  borderColor: "grey"
                }}
              >
                {plan.paymentText}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12 mt-12">
          <p className="text-[var(--pricing-h2-size)] text-gray-500 font-bold">
            Sign up before Friday and
          </p>
          <p className="font-bold text-[var(--pricing-h2-size)] text-gray-500">
            get <span className="text-white">$396 in bonuses</span>
          </p>
        </div>

        {/* Bonus Items */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="text-center border rounded-lg p-6 hover:border-orange-500 transition-colors duration-300"
              style={{
                borderColor: "var(--pricing-border)",
                backgroundColor: "var(--pricing-card-bg)"
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--pricing-orange)" }}
              >
                <img
                  src="https://framerusercontent.com/images/Fo5wP3u9PQZzKyPQwpFgnos4q0.svg"
                  alt="Checkmark Icon"
                  className="w-8 h-8 filter brightness-0 invert"
                  style={{ width: "var(--pricing-bonus-img-size)", height: "var(--pricing-bonus-img-size)" }}
                />
              </div>
              <h3 className="font-semibold text-sm mb-2 text-white">
                {bonus.title} ({bonus.value})
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;