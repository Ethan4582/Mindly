'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How much time do I need each week?',
    answer: `A digital one-stop shop offering premium Framer & Figma templates, resources, and digital designs. Specializing in web design, we deliver stunning and functional UI/UX solutions for B2B and B2C brands looking to make a lasting impact.`,
  },
  {
    question: 'Do I need a tech or coding background?',
    answer: `The CustomAccordion component is designed to make it easier for users to organize content like FAQs. With this component, you don't have to manually link each question and answer inside Framer. Instead, you can automatically generate as many questions and answers as you need by using a simple dropdown control—making it perfect for users of all experience levels.`,
  },
  {
    question: 'What makes this better than free tutorials?',
    answer: `Absolutely! With CustomAccordion, you have full control over design elements like the background color, border radius, fonts, icons, and more. This allows you to integrate the component seamlessly into your project while maintaining a consistent look with your overall design.`,
  },
  {
    question: 'Can I take a break if life gets busy?',
    answer: `CustomAccordion is ideal for both beginners and experienced Framer users. If you're not familiar with Framer's inner workings, this component saves you time by automating the creation of questions and answers. For advanced users, it offers full customization options so you can tailor the design and functionality to meet your specific needs.`,
  },
  {
    question: 'Will I get all course updates for free?',
    answer: `Yes, the CustomAccordion component is fully responsive and mobile-friendly. It works seamlessly on both desktop and mobile devices, ensuring that your content remains organized and easily accessible, no matter what platform your users are on.`,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full min-h-screen text-white flex flex-col items-center justify-center px-4 py-16">
      {/* Updated grid background */}
      <div className="absolute inset-0 -z-10 h-full w-full " style={{ backgroundColor: "rgb(10, 10, 10)" }}>
        <div 
          className="absolute bottom-0 left-0 right-0 top-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(79, 79, 79, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(79, 79, 79, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: '8rem 6.5rem'
          }}
        />
      </div>

      {/* FAQ Header */}
      <div className="text-center mb-10">
        <p className="text-2xl text-gray-400 mb-2">FAQ</p>
        <h2 className="text-5xl font-bold">
          Frequently Asked{' '}
          <div className='mt-3'> 
            <span className="text-orange-500 ">Questions</span>
          </div>
        </h2>
      </div>

      {/* Accordion - Increased size */}
      <div className="w-full max-w-4xl space-y-4"> {/* Increased max width */}
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden" /* Increased border radius */
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left font-medium text-white hover:bg-[#222] transition text-lg" /* Increased padding and text size */
              onClick={() => toggle(index)}
            >
              {item.question}
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6" /> 
              ) : (
                <ChevronDown className="w-6 h-6" /> 
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.4, // Increased duration
                    ease: "easeInOut" // Smoother easing
                  }}
                 
                >
                  <div>{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-xl text-white-500">
          Still got questions? Reach out,
          <br /> we're here to help
        </p>
        <div className="flex justify-center mb-4 mt-2 w-full">
  <div className="relative flex justify-center w-full">
    {/* Centered Button with exact color */}
    <a
      href="./#pricing"
      className="group relative flex items-center transition-all duration-700 rounded-lg px-4 py-2 text-white font-medium shadow-[inset_0_3px_8px_0_rgba(255,255,255,0.1),inset_0_-3px_6px_0_rgba(255,255,255,0.1)] overflow-hidden mx-auto"
      style={{ backgroundColor: '#F97316', minWidth: '180px', maxWidth: '360px' }}
    >
      {/* Left arrow (hidden by default) */}
      <div className="group-hover:opacity-100 opacity-0 transition-all duration-700 flex items-center justify-center bg-white rounded w-6 h-6">
        <img 
          src="https://framerusercontent.com/images/U0c022TYy3iR6YjbwbyxOaDRsk.svg" 
          alt="" 
          className="w-3 h-3"
        />
      </div>

      {/* Button text */}
      <div className="flex-grow text-center transition-all duration-300 text-sm whitespace-nowrap px-1">
        Enroll Today – Save $169
      </div>

      {/* Right arrow (visible by default) */}
      <div className="group-hover:opacity-0 opacity-100 transition-all duration-700 flex items-center justify-center bg-white rounded w-6 h-6">
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
    </section>
  );
}