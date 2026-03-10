"use client";
import React, { useRef, useEffect, useState } from "react";

const galleryImages = [
  { src: "/gallery/gal1.png", label: "01", location: "46°52′N · 11°01′E" },
  { src: "/gallery/gal2.png", label: "02", location: "46°28′N · 11°39′E" },
  { src: "/gallery/gal3.png", label: "03", location: "51°21′N · 4°49′E" },
  { src: "/gallery/gal5.png", label: "04", location: "62°7′N · 7°26′W" },
  { src: "/gallery/gal6.png", label: "05", location: "43°46′N · 11°15′E" },
  { src: "/gallery/gal4.png", label: "06", location: "48°51′N · 2°21′E" },
];

// Desktop layouts: alternating editorial compositions
const desktopLayouts = [
  // Row 1: large left + small right
  {
    wrap:  { justifyContent: "flex-start", alignItems: "flex-start" },
    frame: { width: "52%", height: "75vh", marginLeft: "4%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  {
    wrap:  { justifyContent: "flex-end", alignItems: "flex-end", marginTop: "-220px" },
    frame: { width: "30%", height: "44vh", marginRight: "6%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  // Row 2: small left + large right
  {
    wrap:  { justifyContent: "flex-start", alignItems: "flex-start", marginTop: "40px" },
    frame: { width: "28%", height: "40vh", marginLeft: "18%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  {
    wrap:  { justifyContent: "flex-end", alignItems: "flex-end", marginTop: "-160px" },
    frame: { width: "46%", height: "68vh", marginRight: "3%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  // Row 3: medium center-left + medium right
  {
    wrap:  { justifyContent: "flex-start", alignItems: "flex-start", marginTop: "50px" },
    frame: { width: "38%", height: "56vh", marginLeft: "8%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  {
    wrap:  { justifyContent: "flex-end", alignItems: "flex-end", marginTop: "-180px" },
    frame: { width: "34%", height: "50vh", marginRight: "8%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
];

// Tablet layouts (768–1023px): 2-column, less overlap
const tabletLayouts = [
  {
    wrap:  { justifyContent: "flex-start", alignItems: "flex-start" },
    frame: { width: "56%", height: "52vh", marginLeft: "2%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  {
    wrap:  { justifyContent: "flex-end", alignItems: "flex-end", marginTop: "-140px" },
    frame: { width: "36%", height: "38vh", marginRight: "3%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  {
    wrap:  { justifyContent: "flex-start", alignItems: "flex-start", marginTop: "24px" },
    frame: { width: "34%", height: "36vh", marginLeft: "8%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  {
    wrap:  { justifyContent: "flex-end", alignItems: "flex-end", marginTop: "-100px" },
    frame: { width: "50%", height: "50vh", marginRight: "2%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  {
    wrap:  { justifyContent: "flex-start", alignItems: "flex-start", marginTop: "30px" },
    frame: { width: "44%", height: "44vh", marginLeft: "5%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
  {
    wrap:  { justifyContent: "flex-end", alignItems: "flex-end", marginTop: "-120px" },
    frame: { width: "38%", height: "40vh", marginRight: "5%" },
    img:   { width: "100%", height: "130%", top: "-15%", left: 0 },
  },
];

function useBreakpoint() {
  const [bp, setBp] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bp;
}

function ParallaxImage({
  src,
  label,
  location,
  index,
  bp,
}: {
  src: string;
  label: string;
  location: string;
  index: number;
  bp: "mobile" | "tablet" | "desktop";
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    obs.observe(el);

    const onScroll = () => {
      if (!el || bp === "mobile") return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * 0.15);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [bp]);

  const delay = (index % 2 === 0) ? "0ms" : "120ms";

  // ── Mobile: stacked single column ──────────────────────────────────────────
  if (bp === "mobile") {
    return (
      <div
        ref={wrapRef}
        style={{
          width: "100%",
          marginBottom: "20px",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(40px)",
          transition: `opacity 1s ease ${delay}, transform 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}`,
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: index % 2 === 0 ? "88%" : "75%",
            marginLeft: index % 2 === 0 ? "0" : "auto",
            marginRight: index % 2 === 0 ? "auto" : "0",
            height: "56vw",
            maxHeight: "320px",
          }}
          className="gallery-frame"
        >
          <div style={{
            position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
            background: "linear-gradient(to bottom, rgba(15,14,12,0.04) 0%, transparent 35%, rgba(15,14,12,0.18) 100%)",
          }} />
          <img
            src={src}
            alt={label}
            style={{
              objectFit: "cover",
              display: "block",
              position: "absolute",
              width: "100%",
              height: "110%",
              top: "-5%",
              left: 0,
            }}
          />
          <span style={{
            position: "absolute", bottom: "10px", right: "12px", zIndex: 3,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "9px", letterSpacing: "0.42em",
            color: "rgba(249,247,243,0.40)",
          }}>{label}</span>
          <div className="gallery-hover-border" style={{
            position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none",
            border: "1px solid rgba(201,169,110,0)",
            transition: "border-color 0.5s ease",
          }} />
        </div>
        {/* Location label under image on mobile */}
       
      </div>
    );
  }

  // ── Tablet & Desktop: editorial overlapping layout ─────────────────────────
  const layout = bp === "tablet"
    ? (tabletLayouts[index] || tabletLayouts[0])
    : (desktopLayouts[index] || desktopLayouts[0]);

  return (
    <div
      ref={wrapRef}
      style={{
        display: "flex",
        width: "100%",
        ...layout.wrap,
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 1.1s ease ${delay}, transform 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}`,
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
          ...layout.frame,
        }}
        className="gallery-frame"
      >
        <div style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(to bottom, rgba(15,14,12,0.04) 0%, transparent 35%, rgba(15,14,12,0.18) 100%)",
        }} />

        <img
          src={src}
          alt={label}
          style={{
            objectFit: "cover",
            display: "block",
            transform: `translateY(${offset}px)`,
            willChange: "transform",
            transition: "transform 0.08s linear",
            position: "absolute",
            ...layout.img,
          }}
        />

        <span style={{
          position: "absolute", bottom: "14px", right: "16px", zIndex: 3,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "9px", letterSpacing: "0.42em",
          color: "rgba(249,247,243,0.40)",
        }}>{label}</span>

        <div className="gallery-hover-border" style={{
          position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none",
          border: "1px solid rgba(201,169,110,0)",
          transition: "border-color 0.5s ease",
        }} />
      </div>
    </div>
  );
}

const Gallery: React.FC = () => {
  const bp = useBreakpoint();

  return (
    <>
      <style>{`
        .gallery-frame:hover .gallery-hover-border {
          border-color: rgba(201,169,110,0.35) !important;
        }
        .gallery-frame {
          cursor: crosshair;
        }
      `}</style>

      <section style={{
        background: "#f7f5f0",
        width: "100%",
        padding: bp === "mobile" ? "40px 0 56px" : "64px 0 80px",
        overflow: "hidden",
      }}>
        <div style={{
          maxWidth: "1380px",
          margin: "0 auto",
          padding: bp === "mobile" ? "0 20px" : "0 32px",
        }}>

          {/* Section header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: bp === "mobile" ? "36px" : "56px",
          }}>
            <h2 className="font-meno text-3xl md:text-4xl text-gray-900 tracking-widest uppercase text-left">
              Gallery
            </h2>
            <div style={{ flex: 1, height: 1, background: "rgba(201,169,110,0.18)" }} />
          </div>

          {/* Image grid */}
          <div style={{
            position: "relative",
            width: "100%",
            // On mobile, use a simple flex column; on larger screens, let the
            // editorial overlap do its thing via relative/absolute positioning.
            display: bp === "mobile" ? "flex" : "block",
            flexDirection: bp === "mobile" ? "column" : undefined,
            gap: bp === "mobile" ? "0" : undefined,
          }}>
            {galleryImages.map((img, idx) => (
              <ParallaxImage
                key={img.label}
                src={img.src}
                label={img.label}
                location={img.location}
                index={idx}
                bp={bp}
              />
            ))}
          </div>

          {/* Footer rule */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: bp === "mobile" ? "40px" : "64px",
          }}>
            <div style={{ flex: 1, height: 1, background: "rgba(201,169,110,0.15)" }} />
            <div style={{ flex: 1, height: 1, background: "rgba(201,169,110,0.15)" }} />
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;