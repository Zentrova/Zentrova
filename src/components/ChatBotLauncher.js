'use client';

import { useEffect, useRef, useState } from 'react';
import { Send, X } from 'lucide-react';
import Image from 'next/image';

export default function ChatBotLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("Hello! I have a question about your services.");
  const panelRef = useRef(null);

  // IMPORTANT: Replace with your WhatsApp number including country code (e.g., 911234567890)
  const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

  // This effect runs only once when the component mounts
  useEffect(() => {
    const hasOpened = sessionStorage.getItem('whatsapp-launcher-opened');

    if (!hasOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setTimeout(() => setIsVisible(true), 10);
        sessionStorage.setItem('whatsapp-launcher-opened', 'true');
      }, 4000); // Opens after 4 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  // Handles closing the panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const launcherButton = document.getElementById('whatsapp-launcher-button');
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        launcherButton &&
        !launcherButton.contains(event.target)
      ) {
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

  const handleToggle = () => {
    if (isOpen) {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    } else {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const generatedWhatsAppLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <>
      <button
        id="whatsapp-launcher-button"
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white shadow-xl rounded-full p-3 flex items-center gap-2 hover:scale-105 transition-transform"
        aria-label="Open WhatsApp Chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          className={`fixed bottom-24 right-6 w-80 max-w-[90vw] h-[350px] bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-xl shadow-xl z-50 overflow-hidden flex flex-col transform transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        >
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-neutral-800 border-b border-gray-200 dark:border-gray-700">
            <div className='flex items-center gap-2'>
              <div className="relative h-10 w-10 rounded-full">
                <Image src="/icon.svg" alt="Logo" fill className="object-contain" />
              </div>
              <h3 className="font-semibold text-lg text-black dark:text-white">Xentrova</h3>
            </div>
            <button onClick={handleToggle} className="text-gray-500 hover:text-red-500 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col">
            <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>
              Hi! Tell us how we can help. Your message will open in WhatsApp.
            </p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full flex-1 p-2 resize-none bg-gray-100 dark:bg-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black dark:text-white"
              placeholder="Type your message..."
            />
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-neutral-900">
            <a
              href={message ? generatedWhatsAppLink : undefined}
              onClick={(e) => !message && e.preventDefault()}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-primary p-2 w-full rounded-full text-white font-bold flex justify-center gap-1.5 items-center transition-opacity ${!message ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'}`}
            >
              Send Message <Send className='h-5 w-5' />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
