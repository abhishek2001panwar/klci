"use client";
import React, { useRef, useEffect, useState } from "react";

const csrSections = [
  {
    id: 1,
    category: "OUR COMMITMENT",
    description: "Sponsoring local school excursions hosted by the Karnataka State Forest Department (Tumkur district)",
    image: "/csr/img1.png",
  },
  {
    id: 2,
    category: "EDUCATION",
    description: "Distribution of Covid-19 safety kits",
    image: "/csr/img2.avif",
  },
  {
    id: 3,
    category: "HEALTH & HYGIENE",
    description: "Sanitization during COVID-19 Pandemic at nearby village",
    image: "/csr/img3.avif",
  },
  {
    id: 4,
    category: "ENVIRONMENT",
    description: "Children's Sports Event Sponsored by KLCI at local school",
    image: "/csr/img4.avif",
  },
  {
    id: 5,
    category: "COMMUNITY",
    description: "KLCI actively supports Temple Festivities (Jatres) in surrounding villages",
    image: "/csr/img5.avif",
  },
  {
    id: 6,
    category: "SWACHH BHARAT",
    description: "Door-to-door distribution of Waste Bins at Local Villages & Raising Awareness about Hygienic Living Conditions & Swachha Bharath Abhiyaan",
    image: "/csr/img6.avif",
  },
  {
    id: 7,
    category: "EDUCATION",
    description: "Supporting of local educational institutions, distribution of books at local schools",
    image: "/csr/img7.avif",
  },
  {
    id: 8,
    category: "ENVIRONMENT",
    description: "Herbal Garden for Distribution of Saplings at Local Villages",
    image: "/csr/img8.avif",
  },
  {
    id: 9,
    category: "GOVERNANCE",
    description: "CSR Activities in Alliance with DMG",
    image: "/csr/img9.avif",
  },
  {
    id: 10,
    category: "AWARENESS",
    description: "Swachata Awareness Program in Surrounding Areas",
    image: "/csr/img10.avif",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView] as const;
}

function CSRCard({ section, index }: { section: (typeof csrSections)[0]; index: number }) {
  const [ref, inView] = useInView();
  const delay = (index % 2) * 0.12;

  return (
    <div
      ref={ref}
      className="group flex flex-col bg-white overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(48px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        borderRadius: "4px",
        boxShadow: inView
          ? "0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)"
          : "0 1px 3px rgba(0,0,0,0.06)",
        willChange: "transform, opacity",
      }}
    >
      {/* Image — fixed height, object-contain on warm bg */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "290px",
          background: "#f5f2ed",
          flexShrink: 0,
        }}
      >
        <img
          src={section.image}
          alt={section.description}
          className="w-full h-full transition-all duration-700 ease-out group-hover:scale-[1.03]"
          style={{
            objectFit: "contain",
            padding: "12px",
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1) translateY(0)" : "scale(0.92) translateY(16px)",
            transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay + 0.1}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay + 0.1}s`,
          }}
        />
        {/* Category pill */}
        <div
          className="absolute top-3 left-3"
          style={{
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(6px)",
            borderRadius: "2px",
            padding: "3px 10px",
            border: "1px solid rgba(180,165,145,0.25)",
          }}
        >
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.22em",
              color: "#8a7a68",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {section.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <div
        className="flex flex-col justify-between flex-1 px-5 py-5"
        style={{
          borderTop: "1px solid #ede9e2",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(12px)",
          transition: `opacity 0.6s ease ${delay + 0.2}s, transform 0.6s ease ${delay + 0.2}s`,
        }}
      >
        {/* Index number + text */}
        <div className="flex gap-3 items-start">
          <span
            style={{
              fontSize: "11px",
              color: "#c8bfb2",
              fontVariantNumeric: "tabular-nums",
              marginTop: "3px",
              flexShrink: 0,
              letterSpacing: "0.05em",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p
            style={{
              fontSize: "13.5px",
              lineHeight: "1.65",
              color: "#3d3530",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            {section.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          className="mt-4"
          style={{
            height: "1px",
            background: "linear-gradient(to right, #d1cabd, transparent)",
            width: inView ? "100%" : "0%",
            transition: `width 0.9s ease ${delay + 0.4}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function CSRPage() {
  const [heroRef, heroInView] = useInView(0.1);

  return (
    <div
      className="w-full min-h-screen"
      style={{ background: "#f9f7f3" }}
    >
      {/* Hero */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center text-center pt-20 pb-14 px-6"
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#a09080",
            marginBottom: "16px",
            opacity: heroInView ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          Corporate Social Responsibility
        </p>
        <h1
          className="font-meno"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            lineHeight: 1.1,
            color: "#2a2420",
            fontWeight: 300,
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
          }}
        >
          Our Social<br />
          <span style={{ color: "#c8bfb2" }}>Commitment</span>
        </h1>

        {/* Decorative line */}
        <div
          style={{
            marginTop: "28px",
            height: "1px",
            background: "linear-gradient(to right, transparent, #d1cabd, transparent)",
            width: heroInView ? "120px" : "0px",
            transition: "width 1.1s ease 0.5s",
          }}
        />
      </section>

      {/* Grid — 2 columns */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
        >
          {csrSections.map((section, index) => (
            <CSRCard key={section.id} section={section} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}