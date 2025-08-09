import React from 'react';
import { TextAnimate } from './magicui/TextAnimate';

const ExclusiveNetwork = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-2 pt-8">
        
        {/* Small header text */}
        <p className="text-gray-600  font-extralight  text-[23px] mt-10 mb-4 ">
          Join Our Community
        </p>
        
        {/* Main heading */}

           <h1 className="text-[42px] font-bold text-center mb-4 max-w-4xl leading-tight">
  <TextAnimate className="[&_span:last-child]:text-orange-500">Join an Exclusive</TextAnimate>
  <TextAnimate> Network of AI Innovators</TextAnimate>
</h1>

        {/* Description text */}
        <p className="text-gray-500 font-extralight text-[18px] text-center max-w-xl mb-4 leading-relaxed">
          Join our private community to access discussions, job opportunities, 
          and insights you won't find on Twitter or any public forum.
        </p>
        
        <div className="flex justify-center mb-2 w-full">
  <div className="relative flex justify-center w-full">
    {/* Centered Button with exact color */}
        <a
      href="./#pricing"
      className="group relative flex items-center justify-center transition-all duration-700 rounded-lg px-4 py-3 text-white font-medium shadow-[inset_0_3px_8px_0_rgba(255,255,255,0.1),inset_0_-3px_6px_0_rgba(255,255,255,0.1)] overflow-hidden mx-auto"
      style={{ backgroundColor: '#F97316', minWidth: '260px', maxWidth: '420px' }}
    >
      {/* Left arrow (hidden by default) */}
      <div className="max-w-0 group-hover:max-w-6 mr-0 group-hover:mr-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center bg-white rounded w-6 h-6">
        <img 
          src="https://framerusercontent.com/images/U0c022TYy3iR6YjbwbyxOaDRsk.svg"
          alt=""
          className="w-3 h-3"
        />
      </div>
   
      {/* Button text */}
      <div className="transition-all duration-300 text-sm whitespace-nowrap px-1">
        Join Our Community - It's Free
      </div>
  
      {/* Right arrow (visible by default) */}
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
        
        {/* Globe Background - now directly below description text */}
        <div className="flex justify-center w-5xl mt-8">
          <img 
            src="https://framerusercontent.com/images/IdIdxExRKEeAESwBLqg5FOIZFo.png"
            alt="Global network"
            className="w-65% h-70%  object-contain "
          />
        </div>
      </div>
      
      {/* Bottom fade overlay - black to white transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-white-600 to-transparent z-40 pointer-events-none"></div>
    </div>
  );
};

export default ExclusiveNetwork;