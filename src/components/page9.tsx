import React from 'react';
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { TextAnimate } from './magicui/TextAnimate';

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/Ethan4582",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/Ethan4582",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/Ethan4582",
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
      <div className="absolute top-[12%] left-[31%] w-16 h-16 z-0">
        <img 
          src="https://framerusercontent.com/images/mYc4VjUYj75reqW1rSgHshSJGAw.svg" 
          alt="decoration-1" 
          className="w-full h-full opacity-90"
        />
      </div>
      
      <div className="absolute top-[12%] right-[31%] w-16 h-16 z-0">
        <img 
          src="https://framerusercontent.com/images/C8PoWljS0YEQT7QiVvx8G9tgQ.svg" 
          alt="decoration-2" 
          className="w-full h-full opacity-90"
        />
      </div>
      
      <div className="absolute top-[38%] left-[20%] w-16 h-16  z-0">
        <img 
          src="https://framerusercontent.com/images/WjjXVW72OIErFGaj6JG50JYD3Uo.svg" 
          alt="decoration-3" 
          className="w-full h-full opacity-90"
        />
      </div>
      
      <div className="absolute top-[38%] right-[20%] w-16 h-16 z-0">
        <img 
          src="https://framerusercontent.com/images/q1Wxm69Uqbeu75kbznNUGZA.svg" 
          alt="decoration-4" 
          className="w-full h-full opacity-90"
        />
      </div>
      

      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto mt-14">
        <p className="text-gray-600 text-[20px] mb-2">Registrations Ongoing!</p>

        <div className='justify-center flex'> 
          <AvatarCircles avatarUrls={avatars} />
        </div>

<div className="text-center leading-tight text-[32px] font-extrabold mt-4 text-black mb-2">
  <TextAnimate className="[&>*:nth-child(5)]:text-orange-500">Enroll Now & Get Instant</TextAnimate>
  <TextAnimate className="[&>*:nth-child(1)]:text-orange-500">Access for $497</TextAnimate>
</div>

        <p className="text-gray-700 mb-6">
          Graduates report promotions, raises, or new
          <br/>
          <p>opportunities within 3 months.</p>
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