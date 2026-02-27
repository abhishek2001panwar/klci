import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 px-2 md:px-8 font-regular text-xs md:text-sm">
      <div className="max-w-8xl mx-5 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16 pb-6">
        {/* Quick Links */}
        <div>
          <h3 className="font-quentin text-2xl md:text-3xl mb-2">Quick Links</h3>
          <div className="border-t border-white/20 mb-4 w-full" />
          <ul className="space-y-1 mt-4 py-3">
            {[
              { label: "PRODUCTS", href: "/products" },
              { label: "ENVIRONMENTAL CARE", href: "/environmental-care" },
              { label: "CSR INITIATIVES", href: "/csr" },
              { label: "GALLERY", href: "/gallery" },
              { label: "AWARDS & RECOGNITION", href: "/awards" },
              { label: "CAREERS", href: "/careers" },
            ].map(link => (
              <li key={link.label} className="py-0.5">
                <a href={link.href} className="uppercase text-[10px] md:text-xs tracking-widest font-medium hover:text-[#d1cabd] transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="font-quentin text-2xl md:text-3xl mb-2">Company</h3>
          <div className="border-t border-white/20 mb-4 w-full" />
          <ul className="space-y-1 mt-4 py-3">
            {[
              { label: "ABOUT US", href: "/about" },
              { label: "MANUFACTURING PROCESS", href: "/manufacturing" },
              { label: "QUALITY & CERTIFICATIONS", href: "/quality" },
              { label: "SUSTAINABILITY", href: "/sustainability" },
              { label: "MEDIA & NEWS", href: "/media" },
              { label: "CONTACT US", href: "/contact" },
            ].map(link => (
              <li key={link.label} className="py-0.5">
                <a href={link.href} className="uppercase text-[10px] md:text-xs tracking-widest font-medium hover:text-[#d1cabd] transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Stay up to date */}
        <div>
          <h3 className="font-quentin text-2xl md:text-3xl mb-2">Stay Updated</h3>
          <div className="border-t border-white/20 mb-4 w-full" />
          <form className="flex flex-col gap-3 mt-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email address.."
                className="w-full border border-white bg-black text-white rounded-none font-regular text-lg py-3 px-4 focus:outline-none focus:border-[#d1cabd] transition-colors"
                style={{ fontFamily: "font-regular, serif" }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-white hover:text-[#d1cabd] bg-transparent border-none cursor-pointer"
                tabIndex={-1}
                aria-label="Submit"
              >
                <span>&#8250;</span>
              </button>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <input
                type="checkbox"
                className="w-5 h-5 border border-white bg-black focus:ring-0"
                id="footer-agree"
              />
              <label htmlFor="footer-agree" className="font-regular text-xs md:text-sm text-white">
                I confirm I have read and understood the
                <a href="#" className="underline mx-1">Privacy Policy &amp; Cookie Policy</a>, and I agree to the
                <a href="#" className="underline mx-1">Terms</a>.
              </label>
            </div>
          </form>
          {/* Social icons */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl hover:bg-[#d1cabd] hover:text-black transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl hover:bg-[#d1cabd] hover:text-black transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl hover:bg-[#d1cabd] hover:text-black transition-colors">
              <FaTiktok />
            </a>
            <a href="#" className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl hover:bg-[#d1cabd] hover:text-black transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom links */}
      <div className="max-w-7xl mx-auto mx-5 flex flex-wrap justify-between items-center border-t border-white/20 pt-8 pb-6">
        <div className="flex flex-wrap gap-6 text-[10px] md:text-xs">
          <a href="/contact" className="hover:underline">CUSTOMER CARE</a>
          <a href="/privacy" className="hover:underline">PRIVACY POLICY</a>
          <a href="/cookies" className="hover:underline">COOKIE POLICY</a>
          <a href="/terms" className="hover:underline">TERMS &amp; CONDITIONS</a>
          <a href="/disclaimer" className="hover:underline">DISCLAIMER</a>
          <a href="/sitemap" className="hover:underline">SITEMAP</a>
        </div>
        <div className="text-white/60 mt-2 md:mt-0 text-[10px] md:text-xs">© 2026 KLCI. ALL RIGHTS RESERVED.</div>
        <div className="font-meno text-[10px] md:text-xs tracking-widest mt-2 md:mt-0 text-white/40">KLCI</div>
      </div>
    </footer>
  );
};

export default Footer;