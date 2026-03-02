'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress - faster timing
    const duration = 800; // 0.8 seconds (reduced from 2 seconds)
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = 100 / steps;
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        // Quick fade before hiding loader
        setTimeout(() => {
          setLoading(false);
        }, 150);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 bg-[#f9f7f3] flex items-center justify-center transition-opacity duration-300"
      style={{ opacity: progress === 100 ? 0 : 1, zIndex: 9999 }}
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Logo or Company Name */}
        <div className="text-center mb-4">
          <h1 className="font-meno text-2xl md:text-3xl tracking-[0.3em] text-gray-900 uppercase">
            KLCI
          </h1>
          <div className="h-px w-16 bg-[#d1cabd] mx-auto mt-4" />
        </div>

        {/* Circular Progress */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="#e5e1da"
              strokeWidth="2"
            />
            {/* Progress Circle */}
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="#8a7d6b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
              strokeDashoffset={2 * Math.PI * 45 * (1 - progress / 100)}
              className="transition-all duration-200 ease-out"
            />
          </svg>

          {/* Percentage Counter */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-medium text-3xl md:text-4xl text-gray-900 tabular-nums">
              {progress}
              <span className="text-lg md:text-xl text-gray-600">%</span>
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-600 font-medium">
            Loading Experience
          </p>
          <div className="flex gap-1 justify-center mt-3">
            <div className="w-1 h-1 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="w-1 h-1 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '200ms' }} />
            <div className="w-1 h-1 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '400ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
