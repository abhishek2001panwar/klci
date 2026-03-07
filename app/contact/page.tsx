'use client';
import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function ContactPage() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    telephone: '',
    message: '',
    marketing: false,
    privacy: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    if (!form.privacy) {
      setError('You must agree to the privacy policy.');
      setLoading(false);
      return;
    }
    const { data, error: supabaseError } = await supabase.from('contact').insert([
      {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        telephone: form.telephone,
        message: form.message,
        marketing: form.marketing,
        privacy: form.privacy,
      },
    ]);
    if (supabaseError) {
      setError('Submission failed. Please try again.');
    } else {
      setSuccess('Thank you for contacting us!');
      setForm({
        first_name: '',
        last_name: '',
        email: '',
        telephone: '',
        message: '',
        marketing: false,
        privacy: false,
      });
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-[#f7f4ef] px-6 pt-24 md:px-16 flex flex-col py-4 md:py-10">
      <div className="max-w-8xl w-full mx-auto flex flex-col md:flex-row gap-16 pt-20">
        {/* Left: Heading and Form */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-6xl md:text-7xl font-meno mb-6 leading-tight">Get in Touch
</h1>
          <p className="text-base md:text-lg text-gray-700 mb-10 max-w-xl">
            If you would like to connect with KLCI regarding our products, environmental initiatives, CSR activities, business partnerships, or general enquiries, please select the appropriate enquiry type and share your details below. Our team will respond at the earliest.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold mb-2">FIRST NAME *</label>
                <input name="first_name" value={form.first_name} onChange={handleChange} className="w-full bg-[#f7f4ef] border border-gray-300 px-4 py-2 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2">LAST NAME *</label>
                <input name="last_name" value={form.last_name} onChange={handleChange} className="w-full bg-[#f7f4ef] border border-gray-300 px-4 py-2 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2">EMAIL ADDRESS *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full bg-[#f7f4ef] border border-gray-300 px-4 py-2 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2">TELEPHONE NUMBER *</label>
                <input name="telephone" type="tel" value={form.telephone} onChange={handleChange} className="w-full bg-[#f7f4ef] border border-gray-300 px-4 py-2 focus:outline-none" required />
              </div>
            
            
             
             
            </div>
            <div>
              <label className="block text-xs font-semibold mb-2">MESSAGE *</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="w-full bg-[#f7f4ef] border border-gray-300 px-4 py-2 min-h-[100px]" required placeholder='Please share your query or requirements here…' />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="inline-flex items-center text-xs">
                <input name="marketing" type="checkbox" checked={form.marketing} onChange={handleChange} className="mr-2" />
                I agree to receive marketing communications.
              </label>
              <label className="inline-flex items-center text-xs">
                <input name="privacy" type="checkbox" checked={form.privacy} onChange={handleChange} className="mr-2" required />
                I confirm I have read and understood the <a href="#" className="underline">Privacy Policy</a> &amp; <a href="#" className="underline">Cookie Policy</a> and I agree to the <a href="#" className="underline">Terms</a>.
              </label>
            </div>
             {success && <div className="text-green-600 mt-2 text-sm">{success}</div>}
            {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
         
            <button type="submit" className="mt-6 px-8 py-2 bg-black text-white font-semibold tracking-widest text-xs" disabled={loading}>{loading ? 'SENDING...' : 'SEND ENQUIRY'}</button>
            </form>
        </div>
        {/* Right: Contact Details */}
        <div className="flex-[1.3] flex flex-col justify-center items-start md:pl-24 mt-12 md:mt-0 max-w-xl w-full">
         <div className="flex-[1.3] flex flex-col justify-center items-center md:pl-24 mt-12 md:mt-0 max-w-3xl w-full">
          <div className="w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              title="Karekurchi B, Karnataka Map"
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18452798.964479353!2d65.8712473!3d20.8391327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x390c6e2e2e2e2e2e%3A0x0!2zMjnCsDAwJzIyLjQiTiA3N8KwNDUnMTkuMCJF!3m2!1d29.0062336!2d77.7551872!4m5!1s0x3bb01a4c33cba0b3%3A0xe1a417ff3c733d66!2sKarekurchi%20B%2C%20Karnataka%20572114!3m2!1d13.3374502!2d76.7019038!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram"><span className="sr-only">Instagram</span><svg width="20" height="20" fill="currentColor" className="text-black"><circle cx="10" cy="10" r="8" /></svg></a>
            <a href="#" aria-label="Facebook"><span className="sr-only">Facebook</span><svg width="20" height="20" fill="currentColor" className="text-black"><rect x="4" y="4" width="12" height="12" /></svg></a>
            <a href="#" aria-label="YouTube"><span className="sr-only">YouTube</span><svg width="20" height="20" fill="currentColor" className="text-black"><rect x="3" y="7" width="14" height="6" rx="2" /></svg></a>
            <a href="#" aria-label="TikTok"><span className="sr-only">TikTok</span><svg width="20" height="20" fill="currentColor" className="text-black"><circle cx="10" cy="10" r="6" /></svg></a>
          </div>
        </div>
      </div>
    </div>
  );
}