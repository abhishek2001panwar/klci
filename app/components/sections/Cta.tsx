'use client';
import React, { useState } from "react";

const Cta = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!email) {
      setError("This field is required");
      return;
    }
    if (!checked) {
      setError("You must agree to the terms");
      return;
    }
    setError("");
    // Submit logic here
  };

  return (
    <section className="w-full bg-white py-12 px-2 md:px-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
      >
        {/* Left: Heading */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="font-meno text-3xl md:text-5xl text-black leading-tight">
            Stay up to date with<br />
            klci
          </h2>
        </div>
        {/* Right: Form */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="Email address.."
                className="w-full border border-black rounded-none font-regular text-lg py-3 px-4 focus:outline-none focus:border-[#d1cabd] transition-colors"
                style={{ fontFamily: "font-regular, serif" }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-black hover:text-[#d1cabd] bg-transparent border-none cursor-pointer"
                tabIndex={-1}
                aria-label="Submit"
              >
                <span>&#8250;</span>
              </button>
            </div>
            {touched && !email && (
              <span className="text-xs text-red-500 mt-2">This field is required</span>
            )}
            {error && email && (
              <span className="text-xs text-red-500 mt-2">{error}</span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
              className="w-5 h-5 border border-black focus:ring-0"
              id="cta-agree"
            />
            <label htmlFor="cta-agree" className="font-regular text-sm text-black">
              I confirm I have read and understood the
              <a href="#" className="underline mx-1">Privacy Policy &amp; Cookie Policy</a>, and I agree to the
              <a href="#" className="underline mx-1">Terms</a>.
            </label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Cta;