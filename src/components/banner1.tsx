'use client';

import React from 'react';

const LogoCarousel2 = () => {
  // SVG logo data
  const logos = [
    { src: "https://framerusercontent.com/images/vWHyvDNzxMaTeWNSo20DCtl8Q4A.svg",  width: 158, height: 38, alt: "Logo 1" },
    { src: "https://framerusercontent.com/images/JM2Xea24TJbYdSTCkNEyA8Kbas.svg", width: 158, height: 38, alt: "Logo 5" },
    { src: "https://framerusercontent.com/images/d6m9TA9VJcWC81A5Cd463zkR1E.svg",  width: 158, height: 38, alt: "Logo 6" },
    { src: "https://framerusercontent.com/images/87X2pajaYeK2WqDYNyghvROswl0.svg",  width: 158, height: 38, alt: "Logo 7" }
  ];

  // Number of copies for seamless looping
  const logoCopies = 3;
  const logoSet = Array(logoCopies).fill(logos).flat();

  return (
    <div className="relative">
      {/* Left white fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-116 z-10"
        style={{
          background: "linear-gradient(to right, white 80%, transparent 100%)"
        }}
      />
      {/* Right white fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-116 z-10"
        style={{
          background: "linear-gradient(to left, white 80%, transparent 100%)"
        }}
      />

      {/* Top carousel */}
      <div className="relative overflow-hidden mb-12">
        <div className="flex items-center">
          <div className="flex items-center gap-76 animate-scroll-left whitespace-nowrap">
            {logoSet.map((logo, index) => (
              <div
                key={`logo-top-${index}`}
                className="inline-flex items-center justify-center px-4"
              >
                <div 
                  className="relative w-full h-full flex items-center  mt-4 justify-center"
                  style={{
                    width: `${logo.width}px`,
                    height: `${logo.height}px`,
                    minWidth: `${logo.width}px`
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                    style={{ width: logo.width, height: logo.height }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / logoCopies}%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-${100 / logoCopies}%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          display: inline-block;
          animation: scroll-left ${25 * logoCopies}s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-right {
          display: inline-block;
          animation: scroll-right ${25 * logoCopies}s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};


export default LogoCarousel2;

