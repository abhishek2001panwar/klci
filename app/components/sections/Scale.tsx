"use client";
import React, { useRef, useEffect, useState } from "react";

const scaleImage = "/scale.MP4"; // Place your image in public/scale.avif


const Scale: React.FC = () => {
	const imgRef = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!imgRef.current) return;
			const rect = imgRef.current.getBoundingClientRect();
			setInView(rect.top < window.innerHeight && rect.bottom > 0);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="relative w-full min-h-[60vh] md:min-h-[92vh] flex items-center justify-center bg-[#f9f7f3] overflow-hidden">
			<div
				ref={imgRef}
				className={`w-full h-[60vh] md:h-[92vh] flex items-end justify-start transition-transform duration-[1600ms] ease-out relative ${inView ? "scale-95 opacity-100" : "scale-0 opacity-0"}`}
			>
				<div className="relative w-full h-full">
					<video
						src={scaleImage}
						muted
						autoPlay
						loop
						className="w-full h-full object-cover rounded-xl md:rounded-3xl shadow-xl"
						style={{ minHeight: "60vh", minWidth: "100%", objectFit: "cover", display: "block" }}
					/>
					{/* Dark overlay for better contrast, perfectly matching video */}
					<div className="absolute inset-0 rounded-xl md:rounded-3xl bg-black/30 pointer-events-none" style={{ zIndex: 2 }} />
				</div>
				{/* Bottom left text overlay */}
				<div
					className={`absolute left-2 right-2 bottom-2 md:left-8 md:right-auto md:bottom-8 max-w-full md:max-w-md bg-white/80 rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg transition-all duration-1000 ease-out
						${inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
					style={{ zIndex: 10 }}
				>
					<div className="font-meno text-base md:text-2xl text-gray-900 mb-1 md:mb-2 uppercase tracking-widest">CERTIFIED ENVIRONMENT<br />QUALITY MONITORING</div>
					<div className="font-regular text-xs md:text-base text-gray-700">
						The Ambient Air Quality, Water Quality and Noise Level are monitored periodically by an external ISO 14001, 22000 & 9001 certified laboratory to ensure environmental regulatory compliance and safety.
					</div>
				</div>
			</div>
		</section>
	);
};

export default Scale;
