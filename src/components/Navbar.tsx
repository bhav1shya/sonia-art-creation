import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Instagram,
  Menu,
  X,
  Palette,
  Star,
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/artData';

interface NavbarProps {
  onBookClass: () => void;
}

export function Navbar({ onBookClass }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', code: '01' },
    { label: 'About', href: '#about', code: '02' },
    { label: 'Classes', href: '#classes', code: '03' },
    { label: 'Gallery', href: '#gallery', code: '04' },
    { label: 'Reviews', href: '#reviews', code: '05' },
    { label: 'Contact', href: '#contact', code: '06' },
  ];

  return (
    <>
      {/* Topmost Studio Atelier Status Bar (Sticky or scrolls away smoothly) */}
      <div className="bg-[#1C3E40] text-[#FAF6F0] text-[11px] py-1.5 px-4 hidden md:block border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#C5A059] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Studio Open Today · 10:00 AM – 7:00 PM</span>
            </span>
            <span className="text-white/30">•</span>
            <span className="text-[#FAF6F0]/85">
              🎨 Admissions Open for Drawing, Acrylic, Pichwai &amp; Kids Art
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[#FAF6F0]/90">
              <MapPin className="w-3 h-3 text-[#C56345]" />
              <span>Tonk Rd, Bajaj Nagar, Jaipur</span>
            </div>
            <span className="text-white/30">•</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hover:text-[#C5A059] transition-colors font-semibold flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C56345]" />
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>
            <span className="text-white/30">•</span>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-200 transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3 h-3 text-[#E1306C]" />
              <span>@sonia__creation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Island Atelier Navbar */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'top-2 sm:top-3 px-3 sm:px-6'
            : 'top-2 sm:top-7 md:top-10 px-3 sm:px-6'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
              isScrolled
                ? 'bg-[#FAF6F0]/95 backdrop-blur-md border-[#2D2A26]/15 shadow-xl shadow-black/5'
                : 'bg-[#FAF6F0]/90 backdrop-blur-md border-[#2D2A26]/12 shadow-lg shadow-black/3'
            }`}
          >
            {/* Brand Monogram & Title */}
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-full bg-linear-to-br from-[#C56345] via-[#9E8FB2] to-[#265C5E] p-0.5 shadow-xs group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full rounded-xl sm:rounded-full bg-[#1C3E40] flex items-center justify-center text-white">
                  <span className="font-serif text-xs sm:text-sm font-black tracking-wider text-amber-100">
                    SC
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#265C5E] leading-none">
                    SONIA CREATIONS
                  </span>
                  <span className="text-[10px] font-normal text-[#C56345] font-serif italic hidden xl:inline">
                    सोनिया
                  </span>
                </div>
                <span className="text-[10px] font-semibold tracking-widest text-[#C56345] uppercase block mt-0.5">
                  Art School · Jaipur
                </span>
              </div>
            </a>

            {/* Curated Editorial Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/60 p-1 rounded-full border border-[#2D2A26]/8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2D2A26]/80 hover:text-[#C56345] hover:bg-[#FAF6F0] transition-all flex items-center gap-1 group"
                >
                  <span className="text-[9px] font-mono text-[#2D2A26]/40 group-hover:text-[#C56345] transition-colors">
                    {link.code}
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Right Action Tools: Rating chip, Call, and Book Class */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Google 4.9 Star Badge */}
              <a
                href="#reviews"
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-bold text-[#265C5E] hover:bg-amber-100/70 transition-colors"
                title="4.9 / 5.0 from 41 Google Reviews"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>4.9</span>
                <span className="text-[#2D2A26]/50 font-normal text-[11px]">(41)</span>
              </a>

              {/* Quick Call Icon/Pill */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#2D2A26]/10 text-xs font-semibold text-[#265C5E] hover:border-[#C56345] hover:text-[#C56345] transition-colors"
                title="Call 097842 38989"
              >
                <Phone className="w-3.5 h-3.5 text-[#C56345]" />
                <span className="hidden md:inline">{BUSINESS_INFO.displayPhone}</span>
                <span className="md:hidden">Call</span>
              </a>

              {/* Sculptural "Book a Class" Button */}
              <button
                onClick={onBookClass}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl sm:rounded-full bg-[#C56345] hover:bg-[#A84E33] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>Book a Class</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#2D2A26] hover:text-[#C56345] rounded-xl lg:hidden focus:outline-hidden"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto mt-2 px-1">
            <div className="bg-[#FAF6F0] rounded-2xl border border-[#2D2A26]/15 p-4 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-[#2D2A26]/10">
                <div className="flex items-center gap-1 text-xs font-bold text-[#265C5E]">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5.0 (41 Google Reviews)</span>
                </div>
                <span className="text-[10px] font-bold text-[#C56345] bg-[#C56345]/10 px-2 py-0.5 rounded-md">
                  Women-Owned
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-xs font-medium text-[#2D2A26] bg-white border border-[#2D2A26]/8 hover:border-[#C56345] hover:text-[#C56345] transition-all flex items-center gap-2"
                  >
                    <span className="text-[9px] font-mono text-[#C56345] font-bold">
                      {link.code}
                    </span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-[#2D2A26]/10 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-[#265C5E] text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Sonia Creations! I would like to inquire about art classes at your studio in Jaipur.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
