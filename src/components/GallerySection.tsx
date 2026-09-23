import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Palette, Sparkles, MessageCircle, X, Layers, Plus } from 'lucide-react';
import { GALLERY_ARTWORKS, BUSINESS_INFO } from '../data/artData';
import { BrushStroke, PaletteSwatch } from './BrushStrokes';
import { Artwork } from '../types';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxArtwork, setLightboxArtwork] = useState<Artwork | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const gallerySectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: gallerySectionRef,
    offset: ['start end', 'end start'],
  });

  const bgFloat1 = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const bgFloat2 = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const watermarkGalleryY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const colParallaxEven = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const colParallaxOdd = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  // Extended artworks list for exhibition feel with varied aspect ratios
  const additionalArtworks: Artwork[] = [
    {
      id: 'art-7',
      title: 'Jaipur Dusk Watercolor Wash',
      medium: 'Handmade Cotton Rag Paper & Fine Pigments',
      category: 'canvas',
      dimensions: '22" × 30"',
      image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=85',
      description: 'Luminous wet-in-wet atmospheric study capturing golden hour reflection over Rajasthani stepwells.',
      artistNote: 'Demonstrating paper dampening and transparent granulating pigments.',
      palette: ['#C56345', '#9E8FB2', '#FAF6F0', '#265C5E']
    },
    {
      id: 'art-8',
      title: 'Botanical Gouache & Gold Accent',
      medium: 'Opaque Gouache with Shell Gold Detailing',
      category: 'traditional',
      dimensions: '18" × 24"',
      image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=85',
      description: 'Intricate desert flora rendered with delicate liner brushes and burnished metallic highlights.',
      artistNote: 'Technique practiced in our traditional and botanical modules.',
      palette: ['#265C5E', '#C5A059', '#FAF6F0', '#C56345']
    },
    {
      id: 'art-9',
      title: 'Student Charcoal: Expressive Hands',
      medium: 'Nitram Charcoal on Strathmore Paper',
      category: 'student',
      dimensions: '18" × 24"',
      image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=1200&q=85',
      description: 'Advanced anatomical study completed by an adult student during our weekend portrait intensive.',
      artistNote: 'Showcases student mastery of structural bones, shadows, and subtle skin tones.',
      palette: ['#2D2A26', '#9E8FB2', '#EFE8DF', '#C56345']
    }
  ];

  const allDisplayArtworks = isExpanded
    ? [...GALLERY_ARTWORKS, ...additionalArtworks]
    : GALLERY_ARTWORKS;

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'canvas', label: 'Canvas Paintings' },
    { id: 'traditional', label: 'Traditional Art' },
    { id: 'sketching', label: 'Sketches' },
    { id: 'student', label: 'Student Works' },
  ];

  const filteredArtworks =
    activeCategory === 'all'
      ? allDisplayArtworks
      : allDisplayArtworks.filter((art) => art.category === activeCategory);

  // Aspect ratio variations for an authentic salon / exhibition wall
  const getAspectClass = (index: number) => {
    const patterns = [
      'aspect-3/4 sm:aspect-4/5', // Portrait
      'aspect-4/3',              // Standard Canvas
      'aspect-square',           // Square
      'aspect-16/10',            // Wide
      'aspect-4/5',              // Tall
      'aspect-4/3',              // Classic
      'aspect-square',           // Square
      'aspect-16/9',             // Panoramic
      'aspect-3/4',              // Tall
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section ref={gallerySectionRef} id="gallery" className="py-20 lg:py-28 bg-[#F4ECE1]/50 relative overflow-hidden">
      {/* Decorative Canvas Texture */}
      <div className="absolute inset-0 bg-linen-subtle pointer-events-none opacity-40" />

      {/* Subtle organic backdrops with parallax */}
      <motion.div
        style={{ y: bgFloat1 }}
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#C56345]/6 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgFloat2 }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#265C5E]/6 blur-3xl pointer-events-none"
      />

      {/* Devanagari exhibition watermark */}
      <motion.div
        style={{ y: watermarkGalleryY }}
        className="absolute bottom-1/3 -right-10 text-[#2D2A26]/3 select-none font-serif text-8xl lg:text-[180px] font-black leading-none rotate-6 pointer-events-none"
      >
        प्रदर्शनी
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================ */}
        {/* Section Header                                                   */}
        {/* ================================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#2D2A26]/10 text-xs font-semibold text-[#265C5E] uppercase tracking-wider mb-4">
            <Palette className="w-3.5 h-3.5 text-[#C56345]" />
            <span>Studio Exhibition Wall</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#265C5E] tracking-tight">
            Original Paintings & <span className="brush-highlight text-[#C56345]">Masterworks</span>
          </h2>

          <div className="w-44 mx-auto mt-3 mb-6">
            <BrushStroke color="#C56345" className="h-3.5 w-full" />
          </div>

          <p className="text-sm sm:text-base text-[#2D2A26]/80 leading-relaxed">
            Curated like a fine art exhibition in Jaipur. Discover stretched acrylic canvases, classical oils, Pichwai heritage studies, delicate graphite drawings, and proud student milestones.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#265C5E] text-white shadow-xs'
                    : 'bg-[#FAF6F0] text-[#2D2A26]/80 hover:bg-[#EFE8DF] hover:text-[#2D2A26] border border-[#2D2A26]/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================================================================ */}
        {/* Premium Masonry Exhibition Wall with Varied Card Sizes            */}
        {/* ================================================================ */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((art, idx) => {
              const aspect = getAspectClass(idx);
              const cardParallax = idx % 2 === 0 ? { y: colParallaxEven } : { y: colParallaxOdd };
              return (
                <motion.div
                  key={art.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  style={cardParallax}
                  onClick={() => setLightboxArtwork(art)}
                  className="group relative break-inside-avoid bg-white p-3 rounded-2xl art-canvas-frame border border-[#2D2A26]/10 shadow-xs hover:shadow-2xl transition-all duration-400 cursor-pointer overflow-hidden"
                >
                  {/* Artwork Container */}
                  <div className={`relative w-full ${aspect} rounded-xl overflow-hidden bg-[#FAF6F0]`}>
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark Translucent Overlay appearing on hover */}
                    <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 backdrop-blur-2xs">
                      
                      {/* Top Bar inside overlay */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase font-bold text-white tracking-wider">
                          {art.dimensions}
                        </span>
                        
                        {/* Arrow Icon inside hover overlay */}
                        <div className="w-9 h-9 rounded-full bg-white text-[#2D2A26] flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Bottom Info inside overlay */}
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#C56345] block mb-1">
                          {art.medium}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                          {art.title}
                        </h3>
                        <p className="text-xs text-white/80 line-clamp-2 mt-1">
                          {art.description}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Below Card Framing strip (Exhibition label) */}
                  <div className="pt-3 px-2 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#2D2A26] group-hover:text-[#C56345] transition-colors truncate max-w-[200px] sm:max-w-[240px]">
                        {art.title}
                      </h4>
                      <p className="text-[11px] text-[#2D2A26]/60 truncate">
                        {art.medium}
                      </p>
                    </div>
                    <PaletteSwatch colors={art.palette} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ================================================================ */}
        {/* “View More Artwork” Button                                       */}
        {/* ================================================================ */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#265C5E] hover:bg-[#1B4547] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {isExpanded ? (
              <>
                <Layers className="w-4.5 h-4.5 text-[#FAF6F0]" />
                <span>Show Core Exhibition Works</span>
              </>
            ) : (
              <>
                <Plus className="w-4.5 h-4.5 text-[#FAF6F0]" />
                <span>View More Artwork ({additionalArtworks.length} Additional Pieces)</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* ================================================================ */}
      {/* Lightbox / Art Exhibition Spotlight Dialog                       */}
      {/* ================================================================ */}
      <AnimatePresence>
        {lightboxArtwork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxArtwork(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#FAF6F0] rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-10 art-canvas-frame my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxArtwork(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Artwork View (7 cols) */}
                <div className="lg:col-span-7 bg-[#1A1817] p-6 sm:p-8 flex items-center justify-center min-h-[340px] sm:min-h-[460px]">
                  <img
                    src={lightboxArtwork.image}
                    alt={lightboxArtwork.title}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
                  />
                </div>

                {/* Artwork Details & Curatorial Notes (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C56345] block mb-1">
                      Exhibition Catalog
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#265C5E]">
                      {lightboxArtwork.title}
                    </h3>
                    <p className="text-xs text-[#2D2A26]/70 mt-1">
                      Medium: <strong className="text-[#2D2A26]">{lightboxArtwork.medium}</strong>
                    </p>
                    <p className="text-xs text-[#2D2A26]/70">
                      Dimensions: <strong className="text-[#2D2A26]">{lightboxArtwork.dimensions}</strong>
                    </p>

                    <div className="my-4 pt-4 border-t border-[#2D2A26]/10 space-y-3">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#265C5E] mb-1">
                          Curatorial Description
                        </h4>
                        <p className="text-xs sm:text-sm text-[#2D2A26]/80 leading-relaxed">
                          {lightboxArtwork.description}
                        </p>
                      </div>

                      {lightboxArtwork.artistNote && (
                        <div className="p-3 rounded-lg bg-[#F4ECE1] border border-[#2D2A26]/10">
                          <h5 className="text-[11px] font-bold text-[#C56345] uppercase tracking-wider mb-0.5">
                            Technique & Teaching Note
                          </h5>
                          <p className="text-xs text-[#2D2A26]/75 italic">
                            "{lightboxArtwork.artistNote}"
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Color Palette */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2D2A26]/70 mb-2">
                        Studio Color Palette
                      </h4>
                      <PaletteSwatch colors={lightboxArtwork.palette} />
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <div className="pt-4 border-t border-[#2D2A26]/10">
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Sonia Creations! I saw "${lightboxArtwork.title}" on your gallery exhibition page and would like to know more about this technique or class availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
