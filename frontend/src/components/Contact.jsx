import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    try {
      setStatus({ submitting: true, success: null, error: null });
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      
      if (res.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Server connection failed. Ensure the server is running.'
      });
    }
  };

  return (
    <section id="contact" class="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-stone-300">
        <div>
          <span class="text-xs uppercase tracking-widest text-maroon-600 font-semibold block mb-2">
            Inquiries &bull; Communication
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-ink-900">
            Contact & Correspondence
          </h2>
        </div>
        <span class="text-xs font-mono text-stone-400 font-bold hidden md:block">
          Section 09
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Direct Info & Socials (5 cols) */}
        <div class="lg:col-span-5 space-y-8">
          <div class="space-y-4">
            <h3 class="font-serif italic text-2xl text-ink-900 leading-tight">
              Get in touch for collaborations, research opportunities, or technical inquiries.
            </h3>
            <p class="text-sm text-stone-600 leading-relaxed">
              If you have a project in mind, want to discuss data science models, or review development structures, drop a line using the form or reach out directly.
            </p>
          </div>

          <div class="h-px bg-stone-300"></div>

          {/* Contact Details */}
          <div class="space-y-4 font-sans text-sm">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 border border-stone-300 flex items-center justify-center text-maroon-600 shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <span class="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">Email address</span>
                <a href="mailto:salonigorasiya.7906@gmail.com" class="font-mono text-ink-900 hover:text-maroon-600 font-semibold transition-colors">
                  salonigorasiya.7906@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-10 h-10 border border-stone-300 flex items-center justify-center text-maroon-600 shrink-0">
                <Github size={16} />
              </div>
              <div>
                <span class="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">GitHub Registry</span>
                <a href="https://github.com/ErSaloniAi" target="_blank" rel="noopener noreferrer" class="font-mono text-ink-900 hover:text-maroon-600 font-semibold transition-colors">
                  github.com/ErSaloniAi
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-10 h-10 border border-stone-300 flex items-center justify-center text-maroon-600 shrink-0">
                <Linkedin size={16} />
              </div>
              <div>
                <span class="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">LinkedIn Network</span>
                <a href="https://www.linkedin.com/in/salonigorsiya/" target="_blank" rel="noopener noreferrer" class="font-mono text-ink-900 hover:text-maroon-600 font-semibold transition-colors">
                  linkedin.com/in/salonigorsiya
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Underline Form Sheet (7 cols) */}
        <div class="lg:col-span-7 bg-cream-50 hairline-all p-6 sm:p-8 relative">
          <span class="absolute top-4 right-4 text-[9px] font-mono text-stone-400 uppercase tracking-widest">[ Message Sheet ]</span>
          
          <form onSubmit={handleSubmit} class="space-y-8 pt-4">
            
            {/* Row: Name and Email */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex flex-col space-y-1">
                <label htmlFor="name" class="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                  Your Name <span class="text-maroon-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  class="border-b border-stone-300 bg-transparent py-2 text-ink-900 text-sm font-sans focus:border-maroon-600 focus:outline-none transition-colors duration-150"
                  placeholder="e.g. Jane Doe"
                />
              </div>

              <div class="flex flex-col space-y-1">
                <label htmlFor="email" class="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                  Your Email Address <span class="text-maroon-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  class="border-b border-stone-300 bg-transparent py-2 text-ink-900 text-sm font-sans focus:border-maroon-600 focus:outline-none transition-colors duration-150"
                  placeholder="e.g. jane@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div class="flex flex-col space-y-1">
              <label htmlFor="subject" class="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                Subject Heading
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                class="border-b border-stone-300 bg-transparent py-2 text-ink-900 text-sm font-sans focus:border-maroon-600 focus:outline-none transition-colors duration-150"
                placeholder="e.g. Collaboration Request"
              />
            </div>

            {/* Message */}
            <div class="flex flex-col space-y-1">
              <label htmlFor="message" class="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                Message Content <span class="text-maroon-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                class="border-b border-stone-300 bg-transparent py-2 text-ink-900 text-sm font-sans focus:border-maroon-600 focus:outline-none transition-colors duration-150 resize-none"
                placeholder="Write your correspondence here..."
              ></textarea>
            </div>

            {/* Notifications */}
            {status.error && (
              <div class="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-medium">
                <AlertCircle size={14} class="shrink-0" />
                <span>{status.error}</span>
              </div>
            )}
            
            {status.success && (
              <div class="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                <CheckCircle size={14} class="shrink-0" />
                <span>Correspondence saved successfully. Thank you, Saloni will be in touch.</span>
              </div>
            )}

            {/* Submit Button */}
            <div class="flex justify-end pt-2">
              <button
                type="submit"
                disabled={status.submitting}
                class="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-maroon-600 hover:bg-maroon-700 active:bg-maroon-800 disabled:bg-stone-300 disabled:text-stone-500 transition-colors duration-150 cursor-pointer"
              >
                {status.submitting ? (
                  <>
                    <RefreshCw size={12} class="animate-spin" /> Recording...
                  </>
                ) : (
                  <>
                    <Send size={12} /> Send Correspondence
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
      
      {/* Thin Footer Dividers */}
      <footer class="mt-20 pt-8 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between text-[10px] text-stone-400 font-mono">
        <div>
          &copy; {new Date().getFullYear()} SALONI GORSIYA &bull; ALL RIGHTS RESERVED
        </div>
        <div class="mt-2 sm:mt-0 flex gap-4">
          <span>PORTFOLIO 1.0</span>
          <span>DESIGNED VIA EDITORIAL CODE SYSTEM</span>
        </div>
      </footer>
    </section>
  );
}
