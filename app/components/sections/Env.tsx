'use client';
import React, { useEffect, useRef, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

function Button({
  children,
  variant = "outline",
  className = "",
  onClick,
  type = "button",
  dark = false,
}) {
  const base =
    "px-6 py-2.5 text-xs tracking-widest uppercase transition-colors duration-300 focus:outline-none";
  const outline = dark
    ? "bg-transparent border border-white text-white hover:bg-white hover:text-black"
    : "bg-transparent border border-black text-black hover:bg-black hover:text-white";
  const solid =
    "bg-[#d1cabd] border border-[#d1cabd] text-black hover:bg-transparent hover:text-[#d1cabd]";
  const variantClass = variant === "solid" ? solid : outline;

  return (
    <button type={type} onClick={onClick} className={`${base} ${variantClass} ${className}`}>
      {children}
    </button>
  );
}

const images = [
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
    alt: "Forest landscape",
    label: "Biodiversity",
    desc: "KLCI has a Sustainability Development Unit in place, to champion the ethos prescribed by the Sustainable Development Framework for mines in India. In keeping with the framework, KLCI operates with cognizance of social and environmental responsibility.",
    isMain: true,
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    alt: "Solar energy",
    label: "Clean Energy",
    desc: "Transitioning to renewable energy sources to reduce our carbon footprint.",
    isMain: false,
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    alt: "Water conservation",
    label: "Water Stewardship",
    desc: "Responsible water management and conservation in all operations.",
    isMain: false,
  },
];

function Env() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const width = useWindowWidth();

  // Breakpoints
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const bg = inView ? "#111" : "#fff";
  const fg = inView ? "#fff" : "#111";
  const border = inView ? "#2e2e2e" : "#e0e0e0";
  const muted = inView ? "#9a9189" : "#888";

  // Grid columns based on breakpoint
  const gridCols = isMobile
    ? "1fr"
    : isTablet
    ? "1fr 1fr"
    : "2fr 1fr 1fr";

  // Image heights
  const mainImgHeight = isMobile ? "260px" : isTablet ? "340px" : "460px";
  const secondaryImgHeight = isMobile ? "200px" : isTablet ? "220px" : "210px";

  // Padding
  const sidePadding = isMobile ? "20px" : isTablet ? "32px" : "48px";

  // Heading font size
  const headingSize = isMobile
    ? "clamp(28px, 8vw, 40px)"
    : isTablet
    ? "clamp(34px, 5vw, 52px)"
    : "clamp(38px, 5vw, 72px)";

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: bg,
        color: fg,
        transition: "background-color 0.8s ease, color 0.8s ease",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
       
        padding: `0 ${sidePadding} 64px`,
        boxSizing: "border-box",
      }}
    >
      {/* ── Top label + View All ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: isMobile ? "32px" : "48px",
          paddingBottom: "20px",
          borderBottom: `1px solid ${border}`,
          transition: "border-color 0.8s ease",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: isMobile ? "9px" : "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: muted,
            transition: "color 0.8s ease",
          }}
        >
          Our Environmental Commitment
        </p>
        <Button variant="outline" dark={inView}>
          View All
        </Button>
      </div>

      {/* ── Big heading ── */}
      <div
        style={{
          paddingTop: isMobile ? "24px" : "36px",
          paddingBottom: isMobile ? "24px" : "36px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: headingSize,
            fontWeight: "400",
            lineHeight: "1.05",
            color: fg,
            transition: "color 0.8s ease",
          }}
        >
          OUR ENVIRONMENTAL
          <br />
          <span style={{ color: "#d1cabd" }}>COMMITMENT</span>
        </h2>
      </div>

      {/* ── Image grid ── */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: gridCols,
          gap: isMobile ? "32px" : "24px",
        }}
      >
        {images.map((img, i) => {
          // On tablet, hide 3rd card or show all stacked
          // On mobile, show all stacked
          const isHiddenOnTablet = isTablet && i === 2;

          return (
            <div
              key={i}
              style={{
                display: isHiddenOnTablet ? "none" : "flex",
                flexDirection: "column",
                gap: "14px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(36px)",
                transition: `opacity 0.7s ease ${0.25 + i * 0.15}s, transform 0.7s ease ${0.25 + i * 0.15}s`,
                // On tablet, make main image span full width
                gridColumn: isTablet && img.isMain ? "1 / -1" : "auto",
              }}
            >
              {/* Image wrapper */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    height: img.isMain ? mainImgHeight : secondaryImgHeight,
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.04)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                {/* Accent line */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: inView ? "100%" : "0%",
                    height: "2px",
                    backgroundColor: "#d1cabd",
                    transition: `width 1s ease ${0.5 + i * 0.15}s`,
                  }}
                />
              </div>

              {/* Category label */}
              <p
                style={{
                  margin: 0,
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#d1cabd",
                }}
                className="font-light"
              >
                {img.label}
              </p>

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  fontSize: img.isMain
                    ? isMobile
                      ? "15px"
                      : "17px"
                    : isMobile
                    ? "13px"
                    : "14px",
                  lineHeight: "1.7",
                  color: inView
                    ? img.isMain
                      ? "#d4cec7"
                      : "#a09890"
                    : "#555",
                  transition: "color 0.8s ease",
                  // On tablet+, limit width of main desc
                  maxWidth: img.isMain && !isMobile ? "600px" : "100%",
                }}
              >
                {img.desc}
              </p>

              {/* Learn More only on first card */}
              {img.isMain && (
                <div style={{ marginTop: "6px" }}>
                  <Button variant="outline" dark={inView}>
                    Learn More
                  </Button>
                </div>
              )}
            </div>
          );
        })}

        {/* On tablet: show cards 2 & 3 side by side below main */}
        {isTablet && (
          <div
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(36px)",
              transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
            }}
          >
            {images
              .filter((img) => !img.isMain)
              .map((img, i) => (
                <div
                  key={i}
                  style={{ display: "flex", flexDirection: "column", gap: "14px" }}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: "100%",
                        height: secondaryImgHeight,
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.6s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.04)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: inView ? "100%" : "0%",
                        height: "2px",
                        backgroundColor: "#d1cabd",
                        transition: `width 1s ease ${0.65 + i * 0.15}s`,
                      }}
                    />
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "10px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "#d1cabd",
                    }}
                    className="font-light"
                  >
                    {img.label}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: inView ? "#a09890" : "#555",
                      transition: "color 0.8s ease",
                    }}
                  >
                    {img.desc}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Env />
    </div>
  );
}