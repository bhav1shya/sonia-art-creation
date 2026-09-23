import { Phone, Instagram, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/artData';
import { BrushStroke } from './BrushStrokes';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1C3E40] text-[#FAF6F0] relative overflow-hidden pt-16 pb-12">
      {/* Subtle organic background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#C56345]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#9E8FB2]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white block">
                SONIA CREATIONS
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#C56345] uppercase block mt-1">
                Art School · Jaipur
              </span>
            </div>

            <div className="w-24">
              <BrushStroke color="#C56345" className="h-2 w-full" />
            </div>

            <p className="text-xs sm:text-sm text-[#FAF6F0]/75 leading-relaxed max-w-sm">
              An artistic learning sanctuary in Bajaj Nagar, Jaipur. Dedicated to personalized mentorship across drawing, painting, sketching, and traditional Indian heritage arts.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs text-[#FAF6F0]/90 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#C56345]" />
              <span>Women-Owned Studio • 4.9 ★ (41 Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <div className="w-12">
              <BrushStroke color="#C56345" className="h-1.5 w-full" />
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FAF6F0]/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C56345] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Studio Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Studio & Contact
            </h4>
            <div className="w-12">
              <BrushStroke color="#C56345" className="h-1.5 w-full" />
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#FAF6F0]/80">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C56345] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Address:</span>
                  <p className="leading-relaxed">
                    A-24, Tonk Rd, New Light Colony, Bajaj Nagar, Jaipur, Rajasthan 302018
                  </p>
                  <span className="text-[11px] text-[#C56345] font-mono block mt-0.5">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C56345] shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Phone:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="hover:text-[#C56345] transition-colors font-medium"
                  >
                    {BUSINESS_INFO.displayPhone}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Instagram:</span>
                  <a
                    href="https://www.instagram.com/sonia__creation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-200 hover:text-white transition-colors underline"
                  >
                    https://www.instagram.com/sonia__creation/
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6F0]/60 gap-4">
          <p>
            © {currentYear} Sonia Creations (सोनिया क्रिएशन्स). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span>Bajaj Nagar, Jaipur</span>
            <span>•</span>
            <span>Women-Owned Art School</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
