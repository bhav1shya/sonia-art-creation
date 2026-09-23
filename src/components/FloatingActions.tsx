import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/artData';

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      
      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#2D2A26]/15 text-[#2D2A26] shadow-md hover:bg-[#F4ECE1] hover:text-[#C56345] flex items-center justify-center transition-all animate-in fade-in zoom-in-75 duration-200"
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Action Cluster: Instagram, Call, WhatsApp */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 bg-[#FAF6F0]/90 backdrop-blur-md p-1.5 rounded-2xl border border-[#2D2A26]/15 shadow-xl">
        
        {/* Instagram */}
        <a
          href={BUSINESS_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-xl bg-linear-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform"
          aria-label="Instagram Profile"
          title="Instagram @sonia__creation"
        >
          <Instagram className="w-5 h-5" />
        </a>

        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center gap-1.5 h-11 px-3.5 rounded-xl bg-[#265C5E] text-white text-xs font-semibold shadow-md hover:bg-[#1B4547] hover:scale-105 transition-all"
          aria-label="Call Sonia Creations"
          title="Call 097842 38989"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden md:inline">{BUSINESS_INFO.displayPhone}</span>
          <span className="md:hidden">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hello Sonia Creations! I would like to inquire about art classes and workshops in Jaipur.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 h-11 px-4 rounded-xl bg-[#25D366] text-white text-xs font-semibold shadow-md hover:bg-[#1EBE5D] hover:scale-105 transition-all"
          aria-label="Chat on WhatsApp"
          title="Instant WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
