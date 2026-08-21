'use client';

import React, { useEffect, useRef, useState } from 'react';

export type ImageOrientation = 'landscape' | 'portrait' | 'wide' | 'tall';

export interface GalleryItem {
  id: string | number;
  src: string;
  alt: string;
  orientation?: ImageOrientation;
}

/* ─────────────── 1. General Collection Images (All Landscape) ─────────────── */
const generalImages: GalleryItem[] = [
  { id: 'g1', src: '/gallery/gal1.png', alt: 'Gallery Image 1', orientation: 'landscape' },
  { id: 'g2', src: '/gallery/gal2.png', alt: 'Gallery Image 2', orientation: 'landscape' },
  { id: 'g3', src: '/gallery/gal3.png', alt: 'Gallery Image 3', orientation: 'landscape' },
  { id: 'g4', src: '/gallery/gal4.png', alt: 'Gallery Image 4', orientation: 'landscape' },
  { id: 'g5', src: '/gallery/gal5.png', alt: 'Gallery Image 5', orientation: 'landscape' },
  { id: 'g6', src: '/gallery/gal6.png', alt: 'Gallery Image 6', orientation: 'landscape' },
  { id: 'g7', src: '/env/env12.jpeg', alt: 'Environment 1', orientation: 'landscape' },
  { id: 'g8', src: '/env/env3.JPG', alt: 'Environment 2', orientation: 'landscape' },
  { id: 'g9', src: '/env/envheader.jpeg', alt: 'Environment 3', orientation: 'landscape' },
  { id: 'g11', src: '/env/10.jpeg', alt: 'About 1', orientation: 'landscape' },
  { id: 'g12', src: '/about1.avif', alt: 'About 2', orientation: 'landscape' },
];

/* ─────────────── 2. Mines Safety Week Event Images (Original 30 Images) ─────────────── */
const eventImages: GalleryItem[] = Array.from({ length: 30 }, (_, index) => {
  const num = index + 1;
  const orientation: ImageOrientation =
    num % 5 === 0 ? 'wide' : num % 3 === 0 ? 'portrait' : 'landscape';

  return {
    id: `event-${num}`,
    src: `/gallery/${num}.JPG`,
    alt: `Mines Safety Observance Week Moment ${num}`,
    orientation,
  };
});

/* ─────────────── Main Gallery Page ─────────────── */
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 px-4 sm:px-8 lg:px-12 py-14">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-10 pt-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-meno font-semibold tracking-widest text-neutral-900 uppercase">
          KLCI GALLERY
        </h1>
      </header>

      <div className="max-w-[1500px] mx-auto space-y-28">
        {/* Section 1: General Collection (Editorial Showcase) */}
        <section>
         

          <GeneralEditorialGrid items={generalImages} />
        </section>

        {/* Section 2: Event Function (Original Intact Bento) */}
        <section>
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                Special Event
              </span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-meno tracking-tight text-neutral-900">
              Final Day Function of Mines Safety Observance Week 2025-26
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 mt-2">
              Hosted by Karnataka Limpo Cement Industry
            </p>
          </div>

          <EventBentoGallery items={eventImages} />
        </section>
      </div>
    </main>
  );
}

/* ─────────────── Curated Editorial Grid for General Images ─────────────── */
function GeneralEditorialGrid({ items }: { items: GalleryItem[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="space-y-6 md:space-y-4">
        {/* Row 1: Hero Large Feature + 2 Stacked Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4">
          {items[0] && (
            <div className="lg:col-span-2 h-[380px] sm:h-[480px] lg:h-[540px]">
              <CleanImageCard item={items[0]} index={0} onClick={() => setLightboxIndex(0)} />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8 h-full">
            {items[1] && (
              <div className="h-[250px] lg:h-[255px]">
                <CleanImageCard item={items[1]} index={1} onClick={() => setLightboxIndex(1)} />
              </div>
            )}
            {items[2] && (
              <div className="h-[250px] lg:h-[255px]">
                <CleanImageCard item={items[2]} index={2} onClick={() => setLightboxIndex(2)} />
              </div>
            )}
          </div>
        </div>

        {/* Row 2: 3-Column Balanced Triplet */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {items.slice(3, 6).map((item, idx) => (
            <div key={item.id} className="h-[280px] md:h-[340px]">
              <CleanImageCard item={item} index={idx + 3} onClick={() => setLightboxIndex(idx + 3)} />
            </div>
          ))}
        </div>

        {/* Row 3: 2-Column Split (1 Standard + 1 Wide) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4">
          {items[6] && (
            <div className="lg:col-span-1 h-[280px] md:h-[360px]">
              <CleanImageCard item={items[6]} index={6} onClick={() => setLightboxIndex(6)} />
            </div>
          )}
          {items[7] && (
            <div className="lg:col-span-2 h-[280px] md:h-[360px]">
              <CleanImageCard item={items[7]} index={7} onClick={() => setLightboxIndex(7)} />
            </div>
          )}
        </div>

        {/* Row 4: Remaining 3 Balanced Cards */}
        {items.length > 8 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {items.slice(8).map((item, idx) => (
              <div key={item.id} className="h-[280px] md:h-[340px]">
                <CleanImageCard item={item} index={idx + 8} onClick={() => setLightboxIndex(idx + 8)} />
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <LightboxModal
          items={items}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
        />
      )}
    </>
  );
}

/* ─────────────── Event Section Bento Gallery (Original Setup) ─────────────── */
const getEventSpanClasses = (orientation: ImageOrientation = 'landscape') => {
  switch (orientation) {
    case 'portrait':
    case 'tall':
      return 'row-span-2 col-span-1 h-[520px] md:h-[640px]';
    case 'wide':
      return 'col-span-1 md:col-span-2 row-span-1 h-[320px] md:h-[380px]';
    case 'landscape':
    default:
      return 'col-span-1 row-span-1 h-[320px] md:h-[380px]';
  }
};

function EventBentoGallery({ items }: { items: GalleryItem[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-6 md:gap-4">
        {items.map((item, i) => (
          <div key={item.id} className={getEventSpanClasses(item.orientation)}>
            <CleanImageCard
              item={item}
              index={i}
              onClick={() => setLightboxIndex(i)}
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <LightboxModal
          items={items}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
        />
      )}
    </>
  );
}

/* ─────────────── Reusable Clean Image Card ─────────────── */
function CleanImageCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const speed = 0.03 + (index % 3) * 0.01;

    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = window.innerHeight / 2 - rect.top - rect.height / 2;
      setOffset(progress * speed);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [index]);

  return (
    <div
      ref={ref}
      className="group relative w-full h-full overflow-hidden rounded-md bg-neutral-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/80"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
        style={{ transform: `scale(1.12) translateY(${offset}px)` }}
        loading="lazy"
      />
    </div>
  );
}

/* ─────────────── Reusable Lightbox Modal ─────────────── */
function LightboxModal({
  items,
  currentIndex,
  onClose,
  onChangeIndex,
}: {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onChangeIndex: (i: number) => void;
}) {
  const prev = () => onChangeIndex((currentIndex - 1 + items.length) % items.length);
  const next = () => onChangeIndex((currentIndex + 1) % items.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [currentIndex]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl max-h-[85vh] flex items-center justify-center">
        <img
          className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl"
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          onClick={e => e.stopPropagation()}
        />
      </div>

      <button
        className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors border border-white/20 text-lg"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        ✕
      </button>

      <button
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white text-2xl hover:bg-white/30 transition-colors border border-white/20"
        onClick={e => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white text-2xl hover:bg-white/30 transition-colors border border-white/20"
        onClick={e => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next image"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 border border-white/20 text-xs font-mono text-white">
        {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
      </div>
    </div>
  );
}