'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // Check if pathname changed
    if (pathname !== prevPathnameRef.current) {
      prevPathnameRef.current = pathname;
      
      // Use requestAnimationFrame to avoid cascading renders
      requestAnimationFrame(() => {
        setLoading(true);
        
        const timer = setTimeout(() => {
          setLoading(false);
        }, 400);
        
        return () => clearTimeout(timer);
      });
    }
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-transparent"
      style={{
        zIndex: 10000,
        background: 'linear-gradient(90deg, transparent 0%, #8a7d6b 50%, transparent 100%)',
        animation: 'slideIn 400ms ease-out',
      }}
    >
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
