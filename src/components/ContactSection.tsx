import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Star,
  CheckCircle,
  Navigation,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/artData';
import { BrushStroke } from './BrushStrokes';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    courseInterest: 'Painting',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: contactSectionRef,
    offset: ['start end', 'end start'],
  });

  const bgWash1 = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const bgWash2 = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const leftColY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const watermarkContactY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Sonia Creations! My name is ${formData.name || 'Art Enthusiast'}. I am interested in: ${formData.courseInterest}. My phone number is: ${formData.phone || 'provided'}. Note: ${formData.message || 'I would like to inquire about art classes at your Bajaj Nagar studio.'}`;
    window.open(
      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
    setSubmitted(true);
  };

  return (
    <section ref={contactSectionRef} id="contact" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Background accents with parallax */}
      <motion.div
        style={{ y: bgWash1 }}
        className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#C56345]/6 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgWash2 }}
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#265C5E]/6 blur-3xl pointer-events-none"
      />

      {/* Devanagari watermark */}
      <motion.div
        style={{ y: watermarkContactY }}
        className="absolute top-1/2 left-8 text-[#2D2A26]/3 select-none font-serif text-8xl lg:text-[180px] font-black leading-none -rotate-6 pointer-events-none"
      >
        सम्पर्क
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================ */}
        {/* Final CTA Header: “Ready to Create Something Beautiful?”         */}
        {/* ================================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#2D2A26]/10 text-xs font-semibold text-[#265C5E] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C56345]" />
            <span>Join Our Studio in Jaipur</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#265C5E] tracking-tight">
            Ready to Create <span className="brush-highlight text-[#C56345]">Something Beautiful?</span>
          </h2>

          <div className="w-48 mx-auto mt-3 mb-6">
            <BrushStroke color="#C56345" className="h-3.5 w-full" />
          </div>

          <p className="text-sm sm:text-base text-[#2D2A26]/80 leading-relaxed max-w-xl mx-auto">
            Whether you want to pick up a brush for the first time, master traditional Rajasthani art, or enroll your child, we would love to welcome you to our studio on Tonk Road.
          </p>
        </div>

        {/* ================================================================ */}
        {/* Contact & Studio Details Grid                                    */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Profile, Address, Clickable Phone, & 3 Buttons with Parallax */}
          <motion.div style={{ y: leftColY }} className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl art-canvas-frame border border-[#2D2A26]/10 shadow-xs space-y-6">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold text-[#C56345] uppercase tracking-wider">
                    {BUSINESS_INFO.category} • Jaipur
                  </span>
                  <span className="text-[11px] font-bold text-[#265C5E] bg-[#265C5E]/10 px-2 py-0.5 rounded-md">
                    Women-Owned
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#265C5E] mt-0.5">
                  {BUSINESS_INFO.businessName}
                  <span className="block text-base font-normal text-[#265C5E]/75 font-sans mt-0.5">
                    {BUSINESS_INFO.hindiName}
                  </span>
                </h3>
                <p className="text-xs text-[#2D2A26]/70 italic mt-1">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>

              {/* Verified Address Box */}
              <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#2D2A26]/8">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#C56345]/15 flex items-center justify-center shrink-0 text-[#C56345] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2D2A26] uppercase tracking-wider mb-1">
                      Studio Address
                    </h4>
                    <div className="text-sm sm:text-base text-[#2D2A26] font-medium leading-relaxed">
                      A-24, Tonk Rd,<br />
                      New Light Colony,<br />
                      Bajaj Nagar,<br />
                      Jaipur, Rajasthan 302018
                    </div>
                    <div className="mt-2 text-xs font-semibold text-[#265C5E]">
                      Plus Code: <span className="font-mono text-[#C56345]">{BUSINESS_INFO.plusCode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clickable Phone Number */}
              <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#2D2A26]/8">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#265C5E]/15 flex items-center justify-center shrink-0 text-[#265C5E]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2D2A26]/60 uppercase tracking-wider block">
                      Phone (Click to Call)
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="font-serif text-xl sm:text-2xl font-bold text-[#265C5E] hover:text-[#C56345] transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.displayPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Required Three Action Buttons: Call Now, WhatsApp, Get Directions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {/* 1. Call Now */}
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="py-3 px-4 rounded-xl bg-[#265C5E] hover:bg-[#1B4547] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                {/* 2. WhatsApp */}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Sonia Creations! I would like to inquire about art classes and visit your studio on Tonk Road, Jaipur.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                {/* 3. Get Directions */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sonia+Creations+A-24+Tonk+Rd+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#C56345] hover:bg-[#A84E33] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Timings & Google Review Note */}
              <div className="pt-2 border-t border-[#2D2A26]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#2D2A26]/75">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C56345]" />
                  <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-[#265C5E]">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5.0 (41 Reviews)</span>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden art-canvas-frame border border-[#2D2A26]/10 bg-white shadow-xs">
              <iframe
                title="Sonia Creations Studio Map Location"
                src="https://maps.google.com/maps?q=A-24,%20Tonk%20Rd,%20New%20Light%20Colony,%20Bajaj%20Nagar,%20Jaipur,%20Rajasthan%20302018&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale-15 hover:grayscale-0 transition-all duration-300"
              />
              <div className="p-3 bg-[#F4ECE1] flex items-center justify-between text-xs">
                <span className="text-[#2D2A26]/80 truncate">
                  A-24, Tonk Rd, Bajaj Nagar, Jaipur 302018
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sonia+Creations+A-24+Tonk+Rd+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#C56345] hover:underline shrink-0 ml-2"
                >
                  Open Maps &rarr;
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Studio Inquiry & Message Form with Parallax */}
          <motion.div style={{ y: rightColY }} className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-10 rounded-3xl art-canvas-frame border border-[#2D2A26]/10 shadow-xs">
              <div className="mb-6">
                <span className="text-[11px] font-bold text-[#C56345] uppercase tracking-wider block">
                  Get in Touch
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#265C5E] mt-0.5">
                  Send a Message to Sonia Creations
                </h3>
                <p className="text-xs text-[#2D2A26]/70 mt-1 leading-relaxed">
                  Have questions about class schedules, batch availability, or art supplies? Send us a quick note below.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-emerald-900">
                    Inquiry Forwarded!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you! Your inquiry is opening on WhatsApp. You can also reach our studio instructors at{' '}
                    <strong className="font-semibold">{BUSINESS_INFO.displayPhone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A26] mb-1.5">
                      Your Name <span className="text-[#C56345]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyanshi Mathur"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#2D2A26]/15 bg-[#FAF6F0]/40 text-sm focus:outline-hidden focus:border-[#C56345] transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A26] mb-1.5">
                      Phone / WhatsApp Number <span className="text-[#C56345]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 097842 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#2D2A26]/15 bg-[#FAF6F0]/40 text-sm focus:outline-hidden focus:border-[#C56345] transition-all"
                    />
                  </div>

                  {/* Program of Interest */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A26] mb-1.5">
                      Program of Interest
                    </label>
                    <select
                      value={formData.courseInterest}
                      onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#2D2A26]/15 bg-[#FAF6F0]/40 text-sm focus:outline-hidden focus:border-[#C56345] transition-all"
                    >
                      <option value="Drawing">01 · Drawing (Observation & Fundamentals)</option>
                      <option value="Painting">02 · Painting (Canvas & Acrylic/Oil)</option>
                      <option value="Sketching">03 · Sketching (Charcoal & Graphite)</option>
                      <option value="Creative Art">04 · Creative Art (Mixed Media & Textures)</option>
                      <option value="Kids Art">05 · Kids Art (Ages 5-14 Junior Program)</option>
                      <option value="Advanced Art">06 · Advanced Art (Masterclass & Portfolios)</option>
                      <option value="General Inquiry">General Inquiry / Studio Visit</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A26] mb-1.5">
                      Your Message or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your art interests, preferred batch timing (morning/evening), or any questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#2D2A26]/15 bg-[#FAF6F0]/40 text-sm focus:outline-hidden focus:border-[#C56345] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#C56345] hover:bg-[#A84E33] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Studio Inquiry on WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-[#2D2A26]/60 text-center mt-2.5">
                      Or call us directly at{' '}
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-[#265C5E] underline">
                        {BUSINESS_INFO.displayPhone}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
