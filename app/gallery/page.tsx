'use client';

import React, { useEffect, useRef, useState } from 'react';

const galleryImages = [
  '/gallery/gal1.png',
  '/gallery/gal2.png',
  '/gallery/gal3.png',
  '/gallery/gal4.png',
  '/gallery/gal5.png',
  '/gallery/gal6.png',
  '/env.avif',
  '/env1.avif',
  '/env2.avif',
  '/environment.avif',
  '/about.avif',
  '/about1.avif',
];

export default function GalleryPage() {
  return (
    <>
      

      <div className="gallery-root">

        {/* Header */}
        <header className="gallery-header">
          <h1 className="header-title font-meno">
           KLCI GALLERY
          </h1>
          
        </header>

        {/* Gallery */}
        <section className="gallery-body">

          <div className="section-divider">
            <span className="divider-label">Collection</span>
            <span className="divider-line" />
            <span className="divider-count">{galleryImages.length} images</span>
          </div>

          <BentoGallery images={galleryImages} />

        </section>

      </div>
    </>
  );
}

/* ─────────────── Bento Gallery ─────────────── */

function BentoGallery({ images }: { images: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open  = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev  = () => setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
  const next  = () => setLightboxIndex(i => i !== null ? (i + 1) % images.length : null);

  // Keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <ParallaxCard
            key={i}
            src={src}
            index={i}
            onClick={() => open(i)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={close}>
          <img
            className="lightbox-img"
            src={images[lightboxIndex]}
            alt={`Gallery image ${lightboxIndex + 1}`}
            onClick={e => e.stopPropagation()}
          />
          <button className="lightbox-close" onClick={close}>✕</button>
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
          <div className="lightbox-counter">
            {String(lightboxIndex + 1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────── Parallax Card ─────────────── */

function ParallaxCard({ src, index, onClick }: { src: string; index: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const speed = 0.04 + (index % 4) * 0.015;

    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - rect.top - rect.height / 2);
      setOffset(progress * speed);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [index]);

  return (
    <div
      ref={ref}
      className={`gallery-card card-${index}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <img
        src={src}
        alt={`Gallery image ${index + 1}`}
        style={{ transform: `scale(1.12) translateY(${offset}px)` }}
        loading="lazy"
      />
      <div className="card-frame" />
      <span className="card-index">0{index + 1}</span>
    </div>
  );
}