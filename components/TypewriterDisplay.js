"use client"

import React, { useState, useEffect } from 'react';

export const TypewriterDisplay = ({ text, speed = 40, onComplete, title = "AI Property Analysis", inline = false }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Reset when text changes
  useEffect(() => {
    setDisplayText('');
    setIndex(0);
    setIsComplete(false);
  }, [text]);

  // Typing effect
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));
        setIndex(prevIndex => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (index === text.length && text.length > 0) {
      setIsComplete(true);
      // Don't call onComplete automatically for inline mode
      if (!inline && onComplete) {
        onComplete();
      }
    }
  }, [index, text, speed, onComplete, inline]);

  if (inline) {
    // Inline version for embedding in the UI
    return (
      <div className="w-full">
        <div className="bg-black/60 backdrop-blur-lg rounded-xl p-4 border border-accent-gold/20 mt-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gradient-to-r from-accent-gold to-yellow-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-light text-accent-gold">AI Property Intelligence</h3>
            <button
              onClick={onComplete}
              className="ml-auto text-xs text-white/50 hover:text-accent-gold transition-colors"
            >
              ✕ Close
            </button>
          </div>
          
          <div className="text-white/80 font-light text-xs leading-relaxed max-h-[300px] overflow-y-auto">
            {displayText}
            {!isComplete && text && (
              <span className="inline-block w-0.5 h-4 bg-accent-gold animate-pulse ml-0.5" />
            )}
          </div>
        </div>
      </div>
    );
  }

  // Modal version (existing code)
  return (
    <div className="w-full max-w-2xl">
      <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-accent-gold/30 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          {/* AI Icon */}
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-accent-gold to-yellow-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <h3 className="text-xl font-light text-accent-gold">{title}</h3>
        </div>
        
        <div className="bg-gray-900/50 rounded-xl p-5 min-h-[200px] max-h-[400px] overflow-y-auto border border-white/10">
          <div className="whitespace-pre-wrap text-white/90 font-light text-sm leading-relaxed">
            {displayText}
            {!isComplete && text && (
              <span className="inline-block w-0.5 h-5 bg-accent-gold animate-pulse ml-0.5" />
            )}
          </div>
        </div>

        {isComplete && (
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-green-400 font-light flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Analysis Complete
            </span>
            <button
              onClick={onComplete}
              className="text-xs text-white/60 hover:text-accent-gold transition-colors duration-300"
            >
              Close Analysis
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypewriterDisplay;
