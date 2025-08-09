import React from 'react';
import { TextAnimate } from './magicui/TextAnimate';

const CourseFit = () => {
  const forYouItems = [
    "You want to master AI for professional work",
    "You're tired of guessing what prompts to write",
    "You value practical skills over academic theory",
    "You need AI skills to stay ahead in your field",
    "You're ready to become your team's AI expert"
  ];

  const notForYouItems = [
    "You want a free course with basic AI tips",
    "You prefer theory over practical application",
    "You dislike structured, step-by-step training",
    "You just want to explore AI without purpose",
    "You're seeking a math-heavy AI deep dive"
  ];

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: 'rgba(242, 241, 238, 0.85)' }}
    >
      
      <div className="relative">
        <img src="https://framerusercontent.com/images/5RNFFX0cPakafg9WfAsXvGnX9jw.png" alt="Course Image"
          className='h-100% w-100% object-cover mb-6' />
        {/* Bottom fade overlay - black to white transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white-600 to-transparent z-40 pointer-events-none"></div>
      </div>
      <div className="max-w-6xl mt-12 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p 
            className="text-lg mb-1 font-normal"
            style={{ color: 'rgb(118, 118, 118)' }}
          >
            Is this for you?
          </p>
         <div className="text-center  text-[38px] font-bold  text-black mb-0.5">
  <TextAnimate className="[&>*:last-child]:text-orange-500">This Course Is a Perfect</TextAnimate>
  <TextAnimate>Fit If You're Ready to ...</TextAnimate>
</div>
        </div>

            {/* Two Column Layout */}
<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-4">
  
  {/* This is for you - Left Column */}
  <div className="rounded-2xl border-2 border-orange-500 overflow-hidden shadow-lg">
    {/* Orange Header */}
    <div 
      className="py-3 px-4 text-center border-b-2 border-orange-500"
      style={{ backgroundColor: 'rgb(255, 111, 0)' }}
    >
      <h2 
        className="text-base font-bold uppercase tracking-wide"
        style={{ color: 'rgb(255, 255, 255)' }}
      >
        THIS IS FOR YOU IF:
      </h2>
    </div>
    
    {/* White Content Area */}
    <div 
      className="p-5"
      style={{ backgroundColor: 'rgb(255, 255, 255)' }}
    >
      <div className="space-y-4">
        {forYouItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            {/* Orange Check Circle */}
            <div 
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: 'rgb(255, 111, 0)' }}
            >
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20,6 9,17 4,12"></polyline>
              </svg>
            </div>
            {/* Text */}
            <p 
              className="text-base font-medium leading-snug"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* This is not for you - Right Column */}
  <div className="rounded-2xl border-2 border-black overflow-hidden shadow-lg">
    {/* Black Header */}
    <div 
      className="py-3 px-4 text-center border-b-2 border-black"
      style={{ backgroundColor: 'rgb(0, 0, 0)' }}
    >
      <h2 
        className="text-base font-bold uppercase tracking-wide"
        style={{ color: 'rgb(255, 255, 255)' }}
      >
        THIS IS NOT FOR YOU IF:
      </h2>
    </div>
    
    {/* White Content Area */}
    <div 
      className="p-5"
      style={{ backgroundColor: 'rgb(255, 255, 255)' }}
    >
      <div className="space-y-4">
        {notForYouItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            {/* Red X Circle */}
            <div 
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: 'rgb(239, 68, 68)' }}
            >
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            {/* Text */}
            <p 
              className="text-base font-medium leading-snug"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default CourseFit;