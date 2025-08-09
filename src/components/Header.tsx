import React from 'react';

const Header = () => {
  return (
    <header className="sticky mt-6 top-0 z-50 bg-white shadow-sm rounded-2xl mx-4">
      <div className="container max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-20">
            <img src="https://framerusercontent.com/images/VT9XchCjHXRPw0H08BPtEicHVVs.svg" alt="Logo" className="h-8" />
          </div>
          
          {/* Navigation Links and Button Container */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#curriculum" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium text-sm">
              Curriculum
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium text-sm">
              Reviews
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium text-sm">
              Pricing
            </a>
            <a href="#whyus" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium text-sm">
              Why Us
            </a>
            <a href="#faqs" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium text-sm mr-10">
              FAQs
            </a>

           
           <a
  href="./#pricing"
  className="group relative flex items-center justify-center transition-all duration-700 rounded-lg px-3 py-2 text-white font-medium shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.1),inset_0_-2px_3px_0_rgba(255,255,255,0.1)] overflow-hidden"
  style={{ backgroundColor: '#F97316', minWidth: '45px' }}
>
  {/* Left arrow (hidden by default) */}
  <div className="max-w-0 group-hover:max-w-5 mr-0 group-hover:mr-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center bg-white rounded w-5 h-5">
    <img 
      src="https://framerusercontent.com/images/U0c022TYy3iR6YjbwbyxOaDRsk.svg" 
      alt="" 
      className="w-2.5 h-2.5"
    />
  </div>

  {/* Button text */}
  <div className="transition-all duration-300 text-[14px] whitespace-nowrap">
    Enroll now for $499
  </div>

  {/* Right arrow (visible by default) */}
  <div className="max-w-5 group-hover:max-w-0 ml-1 group-hover:ml-0 overflow-hidden opacity-100 group-hover:opacity-0 transition-all duration-700 flex items-center justify-center bg-white rounded w-5 h-5">
    <img 
      src="https://framerusercontent.com/images/U0c022TYy3iR6YjbwbyxOaDRsk.svg" 
      alt="" 
      className="w-2.5 h-2.5"
    />
  </div>
</a>





          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;