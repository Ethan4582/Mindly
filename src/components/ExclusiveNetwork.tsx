import React from 'react';

const ExclusiveNetwork = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-2 pt-16">
        {/* Small header text */}
        <p className="text-gray-600 text-sm tracking-wide mt-2">
          Join Our Community
        </p>
        
        {/* Main heading */}
        <h1 className="text-6xl font-bold text-center mb-4 max-w-4xl leading-tight">
          Join an <span className="text-orange-500">Exclusive</span>
          <br />
          Network of AI Innovators
        </h1>
        
        {/* Description text */}
        <p className="text-gray-600 text-lg text-center max-w-2xl mb-8 leading-relaxed">
          Join our private community to access discussions, job opportunities, 
          and insights you won't find on Twitter or any public forum.
        </p>
      </div>
      
      {/* Globe Background */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-0 flex justify-center w-full">
        <img 
          src="https://framerusercontent.com/images/IdIdxExRKEeAESwBLqg5FOIZFo.png"
          alt="Global network"
          className="w-190 h-190 object-contain mt-9  opacity-90"
        />
      </div>
    </div>
  );
};

export default ExclusiveNetwork;