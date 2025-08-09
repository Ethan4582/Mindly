'use client';

import React from 'react';
import { TextAnimate } from './magicui/TextAnimate';
const LogoCarousel = () => {
  // SVG logo data
  const logos = [
    { src: "https://framerusercontent.com/images/cI2KTiTunRChu9izYs5bS0Ahbk4.svg",  width: 158, height: 38, alt: "Logo 1" },
    { src: "https://framerusercontent.com/images/FiH2Qz1PPpnj4cXfzbk1jqhvu40.svg", width: 158, height: 38, alt: "Logo 5" },
    { src: "https://framerusercontent.com/images/M5bwSbU2NMPvtY5nxJeLdsW6o.svg",  width: 158, height: 38, alt: "Logo 6" },
    { src: "https://framerusercontent.com/images/nXnD26ULduZmWqo8Zyc2LuMs8k.svg",  width: 158, height: 38, alt: "Logo 7" }
  ];

  // Number of copies for seamless looping
  const logoCopies = 3;
  const logoSet = Array(logoCopies).fill(logos).flat();

  return (
    <div className="w-full relative py-1 bg-black ">
      {/* Centered header */}
       <div className="relative flex items-center justify-center mb-10 mt-20">
        <TextAnimate className="text-5xl font-semibold text-white">
           Our grads work here:
        </TextAnimate>
    
        <img
          src="/banner.png"
          alt="text"
          className="h-750% w-45 ml-4"
          style={{ background: "transparent" }}
        />
      </div>
     
<div>

     {/* Blue fading left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-42 z-10"
             style={{
               background: "linear-gradient(to right, #000000 90%, transparent 100%)",
               filter: "blur(0.4px)"
             }} />
        {/* Blue fading right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-42 z-10"
             style={{
               background: "linear-gradient(to left, #000000 90%, transparent 100%)",
               filter: "blur(0.4px)"
             }} />


   
      {/* Top carousel */}
      <div className="relative overflow-hidden bg-black mb-12">
        <div className="flex items-center">
          <div className="flex items-center gap-76 animate-scroll-left whitespace-nowrap">
            {logoSet.map((logo, index) => (
              <div
                key={`logo-top-${index}`}
                className="inline-flex items-center justify-center px-4"
              >
                <div 
                  className="relative w-full h-full flex items-center justify-center"
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

      {/* Bottom carousel - reversed direction */}
      <div className="relative overflow-hidden mt-6 mb-26">
       
        <div className="flex items-center">
          <div className="flex items-center gap-66 animate-scroll-right whitespace-nowrap">
            {[...logoSet].reverse().map((logo, index) => (
              <div
                key={`logo-bottom-${index}`}
                className="inline-flex items-center justify-center px-4"
              >
                <div 
                  className="relative w-full h-full flex items-center justify-center"
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


export default LogoCarousel;

