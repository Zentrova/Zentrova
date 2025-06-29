'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

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

  // Handle outside click to close
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
        className="fixed bottom-6 right-6 z-50 bg-primary text-white shadow-lg rounded-full p-4 flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div
          ref={panelRef}
          className={`fixed bottom-20 right-6 w-80 max-w-[90vw] h-[450px] bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-xl shadow-xl z-50 overflow-hidden flex flex-col transform transition-all duration-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-lg text-black dark:text-white">Xentrova Chat</h3>
            <button
              onClick={handleToggle}
              className="text-gray-500 hover:text-red-500 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
            <p className="italic text-center mt-10 text-gray-500 dark:text-gray-400">
              👋 Hey there! Chatbot coming soon...
            </p>
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              disabled
              placeholder="Type your message..."
              className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-white rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </>
  );
}
