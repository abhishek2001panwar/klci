"use client";
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button";

const products = [
  {
    name: "IRON ORE",
    image: "/product1.avif",
    desc:
      "Iron Ore is usually found in the form of Magnatite, Hematite, Geothite, Limonite or Sederite. Of the aforementioned Ore types, Hematite and Magnatite are the most commonly found Ores in India. Hematite is characterised with red rust-like streaks and is often found in banded iron formations. It is further sub-divided into three major types of Ores: Lumps, Fines and C-Ore.",
  },
  {
    name: "RED OCHRE",
    image: "/product2.avif",
    desc:
      "Ochre is a naturally occurring clay earth pigment made up of different proportions of clay and sand and ferric oxide. Red ochre is a type of ochre with a reddish colour that contains a lot of hematite, or dehydrated iron oxide. Red ochre is used widely as a raw material in paint and cement industries.",
  },
  {
    name: "MANGANESE ORE",
    image: "/product3.avif",
    desc:
      "Often occurring alongside Iron ore, Manganese, is too brittle to be useful for structural purposes on its own. However, it is a crucial ingredient in the production of steel because it helps the metal gain valuable physical qualities by removing impurities. The pure metal is utilised in copper and aluminium alloys as well. The main utility of Manganese is in metallurgical applications.",
  },
];

const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setInView(rect.top < window.innerHeight - 80 && rect.bottom > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-start w-full">
      {/* Larger image, no border radius, scales in on scroll */}
      <div
        className={`w-full h-[440px] md:h-[600px] overflow-hidden flex items-center justify-center gap-10 transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? "scale-105 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ borderRadius: 0 }}
        />
      </div>
      {/* Name with dot before, below image, left-aligned, different font */}
      <div className="flex items-center gap-1 mt-6 mb-2">
        <span className="inline-block w-2 h-2 rounded-full bg-gray-800"></span>
        <span className="font-light text-xl md:text-sm text-gray-900 uppercase tracking-widest">{product.name}</span>
      </div>
      {/* Smaller, left-aligned Learn More button */}
      <Button variant="solid" className="font-regular tracking-widest text-xs px-2 py-1 mt-1">Learn More</Button>
    </div>
  );
};

const Product: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f7f3] py-16 md:py-24 px-2 md:px-8">
      <div className="max-w-8xl mx-10">
        <div className="mb-10">
          <h2 className="font-meno text-2xl md:text-4xl text-gray-900 tracking-widest uppercase text-left">Products</h2>
          <div className="border-b-2 border-[#e5e1da] w-24 mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;