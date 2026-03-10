"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { supabase } from "../../../lib/supabase";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    if (!agree) {
      setError("You must agree to the terms.");
      setLoading(false);
      return;
    }
    const { error: supabaseError } = await supabase
      .from("enquiry")
      .insert([{ email, agree }]);
    if (supabaseError) {
      setError("Submission failed. Please try again.");
    } else {
      setSuccess("Thank you! We will keep you updated.");
      setEmail("");
      setAgree(false);
    }
    setLoading(false);
  };

  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 px-2 md:px-8 font-regular text-xs md:text-sm">
      <div className="max-w-8xl mx-5 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16 pb-6">

        {/* Quick Links */}
        <div>
          <h3 className=" text-2xl md:text-3xl mb-2">Quick Links</h3>
          <div className="border-t border-white/20 mb-4 w-full" />
          <ul className="space-y-1 mt-4 py-3">
            {[
              { label: "PRODUCTS", href: "/products" },
              { label: "ENVIRONMENTAL CARE", href: "/environmental-care" },
              { label: "CSR INITIATIVES", href: "/csr" },
              { label: "GALLERY", href: "/gallery" },
              { label: "AWARDS & RECOGNITION", href: "/awards" },
              { label: "CAREERS", href: "/careers" },
            ].map((link) => (
              <li key={link.label} className="py-0.5">
                <Link
                  href={link.href}
                  prefetch={true}
                  className="uppercase text-[10px] md:text-xs tracking-widest font-medium hover:text-[#d1cabd] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className=" text-2xl md:text-3xl mb-2">Company</h3>
          <div className="border-t border-white/20 mb-4 w-full" />
          <ul className="space-y-1 mt-4 py-3">
            {[
              "Established in India",
              "Responsible Mining Practices",
              "Community-Centric Growth",
              "Environment First Approach",
              "Safety & Compliance Driven",
            ].map((label) => (
              <li key={label} className="py-1">
                <p className="uppercase text-[10px] md:text-xs tracking-widest font-medium hover:text-[#d1cabd] transition-colors">
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h3 className=" text-2xl md:text-3xl mb-2">Stay Updated</h3>
          <div className="border-t border-white/20 mb-4 w-full" />

          <form className="flex flex-col gap-3 mt-4" onSubmit={handleSubmit}>
            {/* Email + Button in one row */}
            <div>
              <label className="block text-xs font-semibold mb-2">EMAIL ADDRESS *</label>
              <div className="flex items-stretch gap-0">
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 focus:outline-none text-white border border-white/30 border-r-0"
                  style={{
                    background: "#000",
                    colorScheme: "dark",
                    WebkitTextFillColor: "white",
                  }}
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2 text-xl text-black bg-white border border-white hover:bg-[#d1cabd] hover:border-[#d1cabd] transition-colors cursor-pointer disabled:opacity-50"
                  aria-label="Submit"
                  disabled={loading}
                >
                  ›
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 mt-1">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 border border-white bg-black focus:ring-0 flex-shrink-0"
                id="footer-agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label htmlFor="footer-agree" className="text-xs text-white/70 leading-relaxed">
                I confirm I have read and understood the{" "}
                <a href="#" className="underline hover:text-[#d1cabd]">Privacy Policy &amp; Cookie Policy</a>
                , and I agree to the{" "}
                <a href="#" className="underline hover:text-[#d1cabd]">Terms</a>.
              </label>
            </div>

            {/* Messages */}
            {success && <p className="text-green-400 text-xs mt-1">{success}</p>}
            {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
          </form>

          {/* Social icons */}
          {/* <div className="flex gap-4 mt-8">
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaTiktok />, href: "#" },
              { icon: <FaYoutube />, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl hover:bg-[#d1cabd] hover:text-black transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div> */}
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-5 flex flex-wrap justify-between items-center border-t border-white/20 pt-3 pb-6">
        <div className="text-white/60 mt-2 md:mt-0 text-[10px] md:text-xs">
          © 2026 KLCI. ALL RIGHTS RESERVED.
        </div>
        <div className="font-meno text-[10px] md:text-xs tracking-widest mt-2 md:mt-0 text-white/40">
          KLCI
        </div>
      </div>
    </footer>
  );
};

export default Footer;