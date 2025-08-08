import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#e9e7e2] w-full py-16 px-4 lg:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full">
            <div >
            <div className="flex items-center space-x-2 mb-4">
            <a href="/">
               <img
                  alt="Mindly logo"
                  className="h-100% w-100%"
                  src="https://framerusercontent.com/images/EikAR3cusqcpgBaP6DAo0We2ids.svg"
               />
            </a>
            </div>

              <p className="text-gray-600 text-[16px]">Learn the skill that turns everyday</p>
              <p className="text-gray-600 mb-8">AI into extraordinary results.</p>

              <div className="flex space-x-3 mt-58">
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
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-[21px] font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-3 mb-6">
              <li><a className="text-gray-600 hover:text-gray-900 hoverOrange" href="#">Curriculum</a></li>
              <li><a className="text-gray-600 hover:text-gray-900 hoverOrange" href="#">Pricing</a></li>
              <li><a className="text-gray-600 hover:text-gray-900 hoverOrange" href="#">Testimonials</a></li>
              <li><a className="text-gray-600 hover:text-gray-900 hoverOrange" href="#">FAQs</a></li>
            </ul>
            <div className="mb-6 text-[16px]">
              <p className="font-semibold text-[19px]  mb-4 text-gray-900 hoverOrangeUnderline">help@aiuni.com</p>
              <p className="text-gray-600  mb-14">For all your questions</p>
              <p className="font-semibold text-[19px] mb-4 text-gray-900 hoverOrangeUnderline">press@schoolofai.com</p>
              <p className="text-gray-600 ">For all media inquiries</p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Others</h3>
            <ul className="space-y-3 text-[16px] mb-8">
              <li><a className="text-gray-600 hover:text-gray-900 hoverOrange" href="#">Terms of Service</a></li>
              <li><a className="text-gray-600 hover:text-gray-900 hoverOrange" href="#">Privacy Policy</a></li>
              <li><a className="text-gray-600 hover:text-gray-900 hoverOrange" href="#">404</a></li>
            </ul>
            <div className="mb-4 text-[16px]">
              <p className="font-semibold mt-10 text-gray-900 hoverOrangeUnderline">+1 (464) 7315-0235</p>
              <p className="text-gray-600 ">9am–8pm ET, Mon–Thu</p>
              <p className="text-gray-600  mb-18">9am–6pm ET, Fri–Sun</p>
              <p className="text-gray-600 mb-4 ">1509 Capitol Street</p>
              <p className="text-gray-600 ">Suit #1092B, Kansas</p>
              <p className="text-gray-600 ">MS 10921</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-6 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-lg text-gray-600">
          <p>© 2025 Mindly.</p>
          <p>All Rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
