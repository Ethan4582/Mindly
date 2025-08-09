import React from 'react'
import LogoCarousel2 from './banner1'
import { TextAnimate } from './magicui/TextAnimate';
const Page7 = () => {
  return (
    <div>
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
              <p className="text-gray-500 text-base uppercase tracking-wide mb-2">Meet Your Instructor</p>
          <h2 className="text-5xl font-bold text-black">
            <TextAnimate>Your Guide to the</TextAnimate>
            <span className="text-orange-500">
              <TextAnimate>AI Revolution</TextAnimate>
            </span>
          </h2>

          <div className="mt-10 flex justify-center">
            <div className="flex max-w-3xl w-full gap-6">
              {/* Box 1: Video - Left */}
              <div className="bg-black  border rounded-2xl overflow-hidden flex-1 flex items-center justify-center shadow-lg aspect-video relative max-w-[500px]">
                <iframe
                  src="https://www.youtube.com/embed/gPsCJy4T67M?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0"
                  title="Instructor Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                />
                {/* YouTube Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16">
                    <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fillOpacity="0.8" style={{ transition: 'fill 0.1s cubic-bezier(0.4, 0, 1, 1), fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1)' }}></path>
                      <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column Container */}
              <div className="flex flex-col gap-3 max-w-[400px]">
                {/* Box 2: Bio - Top Right */}
                 <div className="bg-black rounded-2xl shadow-lg p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-">
                    <div>
                      <h3 className="text-white text-2xl font-semibold">Cooper Geidt</h3>
                      <p className="text-gray-400 text-sm">Senior Prompt Engineer</p>
                    </div>
                    <p className="text-white text-xl" style={{ fontFamily: 'cursive' }}>Cooper Geidt</p>
                  </div>
                  
                 
                  
                  <div >
                    <p className="text-white text-xs font-bold mb-2 mt-4 tracking-wide text-left">BIO</p>
                    <p className="text-gray-300 text-sm leading-relaxed text-left">
                      My work has been featured in Forbes, TechCrunch and I've helped teams at Salesforce build their AI strategies. 
                      I've distilled everything I've learned into this single program. My success is measured by your success. 
                      Let's get started.
                    </p>
                  </div>
                </div>

                {/* Box 3: Socials - Bottom Right */}
                <div className="bg-black rounded-2xl flex flex-col items-center justify-center shadow-lg  ">
                  <div className="flex justify-center pt-2 gap-3 mb-2">
                   <a className="bg-white p-2 rounded-md shadow-lg hover:bg-gray-100" href="https://cv-pink-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img className="h-5 w-5" src="https://framerusercontent.com/images/2xorAgyqmiwmlkzDuNiEPrs.svg" alt="YouTube" />
                </a>
                <a className="bg-white p-2 rounded-md shadow-lg hover:bg-gray-100" href="https://x.com/SinghAshir65848" target="_blank" rel="noopener noreferrer">
                  <img className="h-5 w-5" src="https://framerusercontent.com/images/IdhP6AR2IcZjOMrlNeavORSRoU.svg" alt="Twitter" />
                </a>
                <a className="bg-white p-2 rounded-md shadow-lg hover:bg-gray-100" href="https://www.linkedin.com/in/ashirwad08singh/" target="_blank" rel="noopener noreferrer">
                  <img className="h-5 w-5" src="https://framerusercontent.com/images/MJ9hRgKVlu4XUGs0fOR2EtBqmaY.svg" alt="LinkedIn" />
                </a>
                <a className="bg-white p-2 rounded-md shadow-lg hover:bg-gray-100" href="https://x.com/SinghAshir65848" target="_blank" rel="noopener noreferrer">
                  <img className="h-5 w-5" src="https://framerusercontent.com/images/sQw079Zec3UbFoHABD5ZSSzi1hs.svg" alt="Instagram" />
                </a>
                    <p className="ml-14 mt-2 text-white text-[16px] text-center">240K+ Followers</p>
                </div>

                  </div>
                  
              </div>
            </div>
          </div>

          <div className="mt-16 text-gray-800 text-[20px] tracking-wide">As Featured On
</div>
          <LogoCarousel2/>
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
    </div>
  )
}

export default Page7