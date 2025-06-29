'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, SendHorizontal, X } from 'lucide-react';
import Image from 'next/image';

export default function ChatBotLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Manual toggle open/close
  const handleToggle = () => {
    if (isOpen) {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    } else {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  return (
    <>

      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white shadow-lg rounded-full p-3 flex items-center gap-2 hover:scale-105 transition-transform"
      >
        {/* <MessageCircle className="w-5 h-5" /> */}
        {/* <Whats src="/whatsapp-icon-3943.png" alt='whatsapp' height={100} width={100} className=''/> */}
        <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          className={`fixed bottom-20 right-6 w-80 max-w-[90vw] h-[300px] bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-xl shadow-xl z-50 overflow-hidden flex flex-col transform transition-all duration-300 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <div className='flex items-center gap-2'>
              <div className="relative h-10 w-10 rounded-full">
                <Image
                  src="/icon.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>


              <h3 className="font-semibold text-lg text-black dark:text-white">Xentrova</h3>
            </div>
            <button
              onClick={handleToggle}
              className="text-gray-500 hover:text-red-500 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto text-sm dark:text-gray-700 text-gray-200">
            <div className='w-fit max-w-60 px-2 py-3 rounded-md bg-[#D9FDDD] text-black'>
              👋 Hi! How may we help you?
              Just send us a quick message and we’ll get back to you shortly.
            </div>
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <a
              href='https://wa.link/ep762m'
              target="_blank"
              rel="noopener noreferrer"
              className='bg-primary  p-2 w-full rounded-full text-white font-bold flex justify-center gap-1.5 items-center'>
              Send Message <Send className='h-5 w-5' />
            </a>


          </div>
        </div>
      )}
    </>
  );
}
