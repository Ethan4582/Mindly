import React from 'react'

const Button = () => {
  return (
    <div>
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
  )
}

export default Button;