'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Award {
  id: number;
  title: string;
  year: string;
  category: string;
  image: string;
}

const awards: Award[] = [
  { id: 1, title: 'Directorate General of Mines Award', year: '2023-24', category: 'Sustainability', image: '/awards/award1.avif' },
  { id: 2, title: 'Me & Mc', year: '2021-22', category: 'Technology', image: '/awards/award2.avif' },
  { id: 3, title: 'Awards conferred by MEMC', year: '2021-22', category: 'Social Responsibility', image: '/awards/award3.avif' },
  { id: 4, title: 'Awards conferred by MEMC', year: '2021-22', category: 'Workplace Safety', image: '/awards/award4.avif' },
  { id: 5, title: 'Awards conferred by MEMC', year: '2021-22', category: 'Product Quality', image: '/awards/award5.avif' },
  { id: 6, title: 'Awards conferred by MEMC', year: '2022-23', category: 'Business Excellence', image: '/awards/award6.avif' },
  { id: 7, title: 'Awards conferred by MEMC', year: '2023-24', category: 'Environment', image: '/awards/award7.avif' },
  { id: 8, title: 'Certificate of Appreciation', year: '2024-25', category: 'International Trade', image: '/awards/award8.avif' },
  { id: 9, title: 'Awards conferred by MEMC', year: '2024-25', category: 'International Trade', image: '/awards/award9.avif' },
];

function AwardCard({ award, index }: { award: Award; index: number }) {
  // imgScale: 0.75 when far from viewport center → 1.0 when centered
  const [imgScale, setImgScale] = useState(0.75);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const itemCenter = rect.top + rect.height / 2;
        const windowCenter = windowHeight / 2;
        const distance = Math.abs(itemCenter - windowCenter);
        const maxDistance = windowHeight * 0.75;
        const scaleValue = Math.max(0.75, Math.min(1, 1 - (distance / maxDistance) * 0.25));
        setImgScale(scaleValue);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div ref={itemRef} className="max-w-7xl mx-auto mb-16 md:mb-24 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* Text Block */}
        <div className={`flex flex-col gap-6 md:gap-8 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="flex flex-col gap-2">
            {/* <p className="font-medium text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] uppercase text-gray-600">
              {award.category}
            </p> */}
            <div className="border-b border-[#e5e1da] w-16 md:w-20" />
          </div>

          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
            {award.title}
          </h2>

          <div className="w-10 h-px bg-[#c4a882]" />

          <p className="text-sm md:text-base text-gray-900 font-medium">
            {award.year}
          </p>
        </div>

        {/* Image Block — container is ALWAYS full width & fixed height, never scales */}
        <div className={`relative w-full ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>

          {/* Static border frame — always full size */}
          <div
            className="absolute border border-[#e5e1da] z-10 pointer-events-none"
            style={{ inset: '-8px' }}
          />

          {/* Fixed container — clips the scaling image inside */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-[#f0ede8]">

            {/* Award number tag */}
            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5">
              <span className="text-[11px] tracking-[0.3em] text-gray-900 font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Only the IMAGE scales — container stays full width */}
            <img
            className='object-contain'
              src={award.image}
              alt={award.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transform: `scale(${imgScale})`,
                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transformOrigin: 'center center',
              }}
            />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <div className="w-full bg-[#f9f7f3]">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center bg-[#f9f7f3] pt-24 md:pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-7xl w-full text-center">
          <p className="font-medium text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase text-gray-600 mb-6 md:mb-8">
            Recognition & Achievements
          </p>
          <h1 className="font-meno text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight">
            OUR AWARDS
          </h1>
        </div>
      </section>

      {/* Awards List */}
      <div className="py-8 md:py-12">
        {awards.map((award, index) => (
          <AwardCard key={award.id} award={award} index={index} />
        ))}
      </div>
    </div>
  );
}