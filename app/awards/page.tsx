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
  {
    id: 1,
    title: 'Environmental Excellence Award',
    year: '2024',
    category: 'Sustainability',
    image: '/env.avif',
  },
  {
    id: 2,
    title: 'Innovation in Mining',
    year: '2024',
    category: 'Technology',
    image: '/env1.avif',
  },
  {
    id: 3,
    title: 'Community Impact Award',
    year: '2023',
    category: 'Social Responsibility',
    image: '/env2.avif',
  },
  {
    id: 4,
    title: 'Safety Excellence',
    year: '2023',
    category: 'Workplace Safety',
    image: '/environment.avif',
  },
  {
    id: 5,
    title: 'Quality Leadership',
    year: '2023',
    category: 'Product Quality',
    image: '/about.avif',
  },
  {
    id: 6,
    title: 'Industry Leader Award',
    year: '2022',
    category: 'Business Excellence',
    image: '/about1.avif',
  },
  {
    id: 7,
    title: 'Green Mining Award',
    year: '2022',
    category: 'Environment',
    image: '/intro1.avif',
  },
  {
    id: 8,
    title: 'Export Excellence',
    year: '2022',
    category: 'International Trade',
    image: '/intro2.avif',
  },
];

function AwardCard({ award, index }: { award: Award; index: number }) {
  const [scale, setScale] = useState(0.94);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const itemCenter = rect.top + rect.height / 2;
        const windowCenter = windowHeight / 2;
        const distance = Math.abs(itemCenter - windowCenter);
        const maxDistance = windowHeight * 0.7;
        const scaleValue = Math.max(0.92, Math.min(1, 1 - (distance / maxDistance) * 0.08));
        setScale(scaleValue);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLeft = index % 2 === 0;

  const textBlock = (
    <div style={{
      padding: isLeft ? '0 60px 0 20px' : '0 20px 0 60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <p style={{
        fontSize: '11px',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: '#9a8c7a',
        marginBottom: '16px',
        fontWeight: 400,
      }}>
        {award.category}
      </p>
      <h2 className='font-quentin' style={{
        fontSize: 'clamp(28px, 3.5vw, 48px)',
        fontWeight: 500,
        lineHeight: 1.15,
        color: '#1a1a18',
        marginBottom: '24px',
       
    
      }}>
        {award.title}
      </h2>
      <div style={{
        width: '40px',
        height: '1px',
        background: '#c4a882',
        marginBottom: '24px',
      }} />
     
    </div>
  );

  const imageBlock = (
    /* Outer border frame with padding — the whole frame scales on scroll */
    <div style={{
      border: '1px solid #d6cfc4',
      padding: '12px',
      background: '#f7f4ef',
      boxShadow: '0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)',
      transform: `scale(${scale})`,
      transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }}>
      {/* Inner clip — image is clipped here */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '4/3',
      }}>
        {/* Award number tag */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 10,
          background: 'rgba(247,244,239,0.92)',
          padding: '6px 12px',
          backdropFilter: 'blur(6px)',
        }}>
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#1a1a18',
            fontWeight: 400,
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Image with subtle hover zoom */}
        <img
          src={award.image}
          alt={award.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          loading="lazy"
        />

        {/* Gradient overlay only — no text */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,8,6,0.72) 0%, rgba(10,8,6,0.25) 45%, transparent 72%)',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );

  return (
    <div
      ref={itemRef}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        maxWidth: '1200px',
        margin: '0 auto 100px auto',
        padding: '0 40px',
        alignItems: 'center',
      }}
    >
      {isLeft ? textBlock : imageBlock}
      {isLeft ? imageBlock : textBlock}
    </div>
  );
}

export default function AwardsPage() {
  return (
    <>

      <div className="awards-page bg-[#f9f7f3]">
        <div className="awards-header">
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#9a8c7a',
            marginBottom: '20px',
          }}>
            Recognition & Achievements
          </p>
          <h1 className='font-meno' style={{
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 300,
            color: '#1a1a18',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}>
            OUR AWARDS
          </h1>
        </div>

        {awards.map((award, index) => (
          <AwardCard key={award.id} award={award} index={index} />
        ))}
      </div>
    </>
  );
}