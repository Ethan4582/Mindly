import React from 'react';
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

const Page9 = () => {
  return (
    <section className="relative bg-white min-h-screen overflow-hidden pt-16 pb-24 px-6 text-center font-sans">
      {/* Top reversed SVG */}
      <div className="absolute top-0 left-0 w-full h-[90%] -translate-y-1/2 transform rotate-180 z-0">
        <img 
          src="https://framerusercontent.com/images/6cqE0atJGDTBwQz1Y0kb6Va9wE.svg" 
          alt="top-decoration" 
          className="w-full h-full"
        />
      </div>
      
      {/* Adjusted positions for decorative SVGs */}
      <div className="absolute top-[20%] left-[15%] w-16 h-16 z-0">
        <img 
          src="https://framerusercontent.com/images/mYc4VjUYj75reqW1rSgHshSJGAw.svg" 
          alt="decoration-1" 
          className="w-full h-full opacity-90"
        />
      </div>
      
      <div className="absolute top-[15%] right-[15%] w-20 h-20 z-0">
        <img 
          src="https://framerusercontent.com/images/C8PoWljS0YEQT7QiVvx8G9tgQ.svg" 
          alt="decoration-2" 
          className="w-full h-full opacity-90"
        />
      </div>
      
      <div className="absolute bottom-[30%] left-[15%]  w-16 h-16  z-0">
        <img 
          src="https://framerusercontent.com/images/WjjXVW72OIErFGaj6JG50JYD3Uo.svg" 
          alt="decoration-3" 
          className="w-full h-full opacity-90"
        />
      </div>
      
      <div className="absolute bottom-[18%] right-[15%] w-16 h-16 z-0">
        <img 
          src="https://framerusercontent.com/images/q1Wxm69Uqbeu75kbznNUGZA.svg" 
          alt="decoration-4" 
          className="w-full h-full opacity-90"
        />
      </div>
      

      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto mt-22">
        <p className="text-gray-600 text-[20px] mb-2">Registrations Ongoing!</p>

        <div className='justify-center flex'> 
          <AvatarCircles avatarUrls={avatars} />
        </div>

        {/* Main Heading */}
        <div className="text-4xl font-bold mt-4 text-black mb-2">
          Enroll Now & Get <span className="text-orange-500">Instant <br /> Access</span> for $497
        </div>

        <p className="text-gray-700 mb-6">
          Graduates report promotions, raises, or new
          <br/>
          <p>opportunities within 3 months.</p>
        </p>

        <div className="flex justify-center mb-4 w-full">
          <div className="relative flex justify-center w-full">
            {/* Centered Button with exact color */}
            <a
              href="./#pricing"
              className="group relative flex items-center transition-all duration-700 rounded-lg px-6 py-3 text-white font-medium shadow-[inset_0_4px_10px_0_rgba(255,255,255,0.1),inset_0_-4px_8px_0_rgba(255,255,255,0.1)] overflow-hidden mx-auto"
              style={{ backgroundColor: '#F97316', minWidth: '260px', maxWidth: '400px' }}
            >
              {/* Left arrow (hidden by default) */}
              <div className="group-hover:opacity-100 opacity-0 transition-all duration-700 flex items-center justify-center bg-white rounded w-8 h-8">
                <img 
                  src="https://framerusercontent.com/images/U0c022TYy3iR6YjbwbyxOaDRsk.svg" 
                  alt="" 
                  className="w-4 h-3.5"
                />
              </div>

              {/* Button text */}
              <div className="flex-grow text-center transition-all duration-300 text-base whitespace-nowrap px-2">
                Enroll Today - Save $169
              </div>

              {/* Right arrow (visible by default) */}
              <div className="group-hover:opacity-0 opacity-100 transition-all duration-700 flex items-center justify-center bg-white rounded w-8 h-8">
                <img 
                  src="https://framerusercontent.com/images/U0c022TYy3iR6YjbwbyxOaDRsk.svg" 
                  alt="" 
                  className="w-4 h-3.5"
                />
              </div>
            </a>
            {/* Image to the right of the button */}
            <img
              src="/text.png"
              alt="text"
              className="h-full w-auto object-contain absolute left-5/6  top-1/2 -translate-y-1/2"
              style={{ background: "transparent" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Feature Row */}
      <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
        <div className='text-[14px]'>
          <img src="https://framerusercontent.com/images/4J4JYEyWBnBjIIg7Jln4N3UcVNM.svg" alt="flag" className="mx-auto mb-2" />
          <p className="text-sm font-medium text-black">6 Weeks of Career-</p>
          <p className="text-sm font-medium text-black">Oriented Training</p>
        </div>
        <div className='text-[14px]'>
          <img src="https://framerusercontent.com/images/XwwCxpmmqW4eIDLuDE12ZGVnUAw.svg" alt="play" className="mx-auto mb-2" />
          <p className="text-sm font-medium text-black">Learn by Doing </p>
          <p className="text-sm font-medium text-black">Not Watching</p>
        </div>
        <div className='text-[14px]'>
          <img src="https://framerusercontent.com/images/NDxJcxFRCtic3NqmZlbfWtSV0cM.svg" alt="user" className="mx-auto mb-2" />
          <p className="text-sm font-medium text-black">Lifetime Access with All</p>
          <p className="text-sm font-medium text-black">Future Updates</p>
        </div>
      </div>
      
      {/* Bottom SVG */}
       <div className="absolute bottom-0 left-0 w-full h-[90%] translate-y-1/2 z-0">
        <img 
          src="https://framerusercontent.com/images/6cqE0atJGDTBwQz1Y0kb6Va9wE.svg" 
          alt="bottom-decoration" 
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Page9;