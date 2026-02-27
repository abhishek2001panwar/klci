"use client";
import React, { useRef, useEffect, useState } from "react";

const galleryImages = [
  { src: "/gallery/gal1.png", size: "big",   speed: 0.08 },
  { src: "/gallery/gal2.png", size: "small",  speed: 0.14 },
  { src: "/gallery/gal3.png", size: "small",  speed: 0.06 },
  { src: "/gallery/gal5.png", size: "small",  speed: 0.16 },
  { src: "/gallery/gal6.png", size: "small",  speed: 0.10 },
  { src: "/gallery/gal4.png", size: "big",    speed: 0.05 },
];

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsets, setOffsets] = useState<number[]>(galleryImages.map(() => 0));
  const [headingOffset, setHeadingOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const relativeScroll = viewCenter - sectionCenter;

      setOffsets(galleryImages.map((img) => relativeScroll * img.speed));
      setHeadingOffset(relativeScroll * 0.04);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f9f7f3] py-16 md:py-24 px-2 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading with subtle parallax */}
        <div
          className="mb-10"
          style={{ transform: `translateY(${headingOffset}px)`, willChange: "transform" }}
        >
          <h2 className="font-meno font-serif text-2xl md:text-4xl text-gray-900 tracking-widest uppercase text-left">
            Gallery
          </h2>
          <div className="border-b-2 border-[#e5e1da] w-24 mt-2"></div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative ${
                img.size === "big"
                  ? "md:col-span-2 h-[420px] md:h-[520px]"
                  : "md:col-span-1 h-[220px] md:h-[320px]"
              } flex items-center justify-center bg-[#f9f7f3] border border-[#e5e1da] shadow-xl`}
              style={{
                overflow: "hidden",
                borderRadius: 0,
                transform: `translateY(${offsets[idx]}px)`,
                willChange: "transform",
                transition: "box-shadow 0.3s ease",
              }}
            >
              {/* Inner image moves slightly opposite for depth */}
              <div
                className="w-full h-full group"
                style={{
                  transform: `translateY(${-offsets[idx] * 0.4}px) scale(1.08)`,
                  willChange: "transform",
                  transition: "transform 0.1s linear",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={img.src}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ borderRadius: 0, display: "block" }}
                />
                {/* Gradient overlay — always visible, darkens on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-60"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.04) 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Subtle top vignette */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 40%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Accent line that slides in on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] bg-[#d1cabd] w-0 group-hover:w-full transition-all duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;