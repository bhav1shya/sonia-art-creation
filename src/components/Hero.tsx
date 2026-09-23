import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  BookOpen,
  MapPin,
  Sparkles,
  Star,
  Palette,
  CheckCircle2,
  Brush,
  Phone,
  MessageCircle,
  Eye,
  Eraser,
  Check,
  Award,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/artData';
import { BrushStroke } from './BrushStrokes';

interface HeroProps {
  onBookClass?: () => void;
}

interface DisciplineItem {
  id: string;
  name: string;
  hindiName: string;
  tag: string;
  image: string;
  subtitle: string;
  medium: string;
  palette: { name: string; hex: string }[];
  quote: string;
  level: string;
  batchTime: string;
}

const DISCIPLINES: DisciplineItem[] = [
  {
    id: 'acrylic',
    name: 'Canvas & Acrylics',
    hindiName: 'कैनवास एवं ऐक्रेलिक',
    tag: '01 · Canvas Masterclass',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Stretched Linen Canvas',
    medium: 'Heavy-Body Acrylics, Impasto Gel & Palette Knife',
    palette: [
      { name: 'Jaipur Terracotta', hex: '#C56345' },
      { name: 'Peacock Teal', hex: '#265C5E' },
      { name: 'Marigold Ochre', hex: '#C5A059' },
      { name: 'Pure Titanium', hex: '#FAF6F0' },
    ],
    quote: 'Learn bold knife strokes, wet-on-wet blending, and vibrant layering.',
    level: 'Beginners to Advanced',
    batchTime: 'Morning: 10:30 AM · Evening: 4:30 PM',
  },
  {
    id: 'pichwai',
    name: 'Pichwai & Heritage Art',
    hindiName: 'पिछवाई एवं पारंपरिक कला',
    tag: '02 · Rajasthani Heritage',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Handmade Wasli Paper',
    medium: 'Traditional Gouache, Natural Pigments & 24K Gold Leaf Foil',
    palette: [
      { name: 'Royal Indigo', hex: '#1C3E40' },
      { name: 'Sunlit Gold', hex: '#C5A059' },
      { name: 'Lotus Carmine', hex: '#C56345' },
      { name: 'Ivory Wasli', hex: '#F4ECE1' },
    ],
    quote: 'Ancient Rajasthani lotus and peacock motifs taught with fine squirrel-hair brushes.',
    level: 'All Enthusiasts',
    batchTime: 'Tue, Thu, Sat · Special Weekend Batches',
  },
  {
    id: 'sketching',
    name: 'Charcoal & Realism',
    hindiName: 'चारकोल एवं रेखाचित्र',
    tag: '03 · Portraiture & Form',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Toned Canson Paper',
    medium: 'Nitram Willow Charcoal, Graphite 2B-8B & White Chalk',
    palette: [
      { name: 'Deep Carbon', hex: '#2D2A26' },
      { name: 'Smoky Grey', hex: '#5A5652' },
      { name: 'Toned Cream', hex: '#EADBC8' },
      { name: 'Chalk Highlight', hex: '#FAF6F0' },
    ],
    quote: 'Understand light fall, facial proportions, atmospheric depth, and rapid sketching.',
    level: 'Foundation to Master',
    batchTime: 'Daily Mon-Sat: 11:00 AM & 5:00 PM',
  },
  {
    id: 'mixed',
    name: 'Modern Mixed Media',
    hindiName: 'मिक्स्ड मीडिया व टेक्सचर',
    tag: '04 · Experimental Textures',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Textured Cotton Canvas',
    medium: 'Molding Paste, Sand Texture, Gold Leaf & Acrylic Glazes',
    palette: [
      { name: 'Dusty Lilac', hex: '#9E8FB2' },
      { name: 'Deep Teal', hex: '#265C5E' },
      { name: 'Warm Terracotta', hex: '#C56345' },
      { name: 'Raw Umber', hex: '#3D312A' },
    ],
    quote: 'Intuitive modern art exploring spatial harmony, palette textures, and metallic foils.',
    level: 'Open to All',
    batchTime: 'Special Saturday & Sunday Workshops',
  },
];

const STUDIO_PIGMENTS = [
  { name: 'Jaipur Terracotta', hex: '#C56345', bgHex: '#C56345' },
  { name: 'Peacock Teal', hex: '#265C5E', bgHex: '#265C5E' },
  { name: 'Marigold Ochre', hex: '#C5A059', bgHex: '#C5A059' },
  { name: 'Dusty Lavender', hex: '#9E8FB2', bgHex: '#9E8FB2' },
  { name: 'Charcoal Umber', hex: '#2D2A26', bgHex: '#2D2A26' },
  { name: 'Pure Gesso', hex: '#FAF6F0', bgHex: '#E5DFD5' },
];

export function Hero({ onBookClass }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'exhibition' | 'paintpad'>('exhibition');
  const [selectedDisciplineIndex, setSelectedDisciplineIndex] = useState(0);
  const [activeColor, setActiveColor] = useState(STUDIO_PIGMENTS[0]);
  const [washEffect, setWashEffect] = useState<string | null>(null);

  // Canvas paintpad ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  const currentDiscipline = DISCIPLINES[selectedDisciplineIndex];

  // Initialize interactive paintpad
  useEffect(() => {
    if (activeTab !== 'paintpad') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Warm ivory canvas backing
    ctx.fillStyle = '#FAF6F0';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Linen weave faint texture
    ctx.strokeStyle = 'rgba(45, 42, 38, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < rect.width; x += 14) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, rect.height);
      ctx.stroke();
    }
    for (let y = 0; y < rect.height; y += 14) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(rect.width, y);
      ctx.stroke();
    }

    // Invitation text on canvas
    ctx.font = 'italic 16px "Playfair Display", serif';
    ctx.fillStyle = 'rgba(197, 99, 69, 0.7)';
    ctx.textAlign = 'center';
    ctx.fillText('Touch or drag with your mouse to paint your stroke...', rect.width / 2, rect.height / 2);
  }, [activeTab]);

  const startDraw = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    isDrawingRef.current = true;
    lastPosRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const drawMove = (clientX: number, clientY: number) => {
    if (!isDrawingRef.current || !lastPosRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const currX = clientX - rect.left;
    const currY = clientY - rect.top;

    // Organic artistic brush stroke
    ctx.strokeStyle = activeColor.hex;
    ctx.lineWidth = 16;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 0.85;

    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    // Bristle grain highlight
    ctx.strokeStyle = '#FAF6F0';
    ctx.lineWidth = 2.5;
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x + 2, lastPosRef.current.y + 2);
    ctx.lineTo(currX + 2, currY + 2);
    ctx.stroke();

    lastPosRef.current = { x: currX, y: currY };
  };

  const endDraw = () => {
    isDrawingRef.current = false;
    lastPosRef.current = null;
  };

  const clearPaintpad = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#FAF6F0';
    ctx.fillRect(0, 0, rect.width, rect.height);
  };

  const triggerColorWash = (hex: string) => {
    setWashEffect(hex);
    setTimeout(() => setWashEffect(null), 1200);
  };

  // Subtle Parallax Scroll Engine for Atelier Depth
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end start'],
  });

  const bgPool1Y = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const bgPool2Y = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const bgPool3Y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const watermarkDrift1Y = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const watermarkDrift2Y = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const floatingParchmentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const floatingStampY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const plinthParallaxY = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section
      ref={heroSectionRef}
      id="home"
      className="relative min-h-screen pt-36 sm:pt-40 md:pt-44 pb-20 lg:pb-28 flex flex-col justify-center bg-[#FAF6F0] overflow-hidden"
    >
      {/* ================================================================ */}
      {/* 1. Dramatic Atelier Canvas Texture & Color Bleed Background      */}
      {/* ================================================================ */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Organic watercolor wash pools with subtle parallax */}
        <motion.div
          style={{ y: bgPool1Y }}
          className="absolute top-10 left-1/3 w-[600px] h-[600px] rounded-full bg-[#C56345]/8 blur-[120px]"
        />
        <motion.div
          style={{ y: bgPool2Y }}
          className="absolute top-1/2 right-10 w-[550px] h-[550px] rounded-full bg-[#265C5E]/7 blur-[120px]"
        />
        <motion.div
          style={{ y: bgPool3Y }}
          className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-[#9E8FB2]/10 blur-[100px]"
        />
        
        {/* Canvas fine grain */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2D2A26_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Grand Devanagari Artistic Watermarks with multi-depth parallax */}
        <motion.div
          style={{ y: watermarkDrift1Y }}
          className="absolute top-20 right-8 lg:right-24 text-[#2D2A26]/3 select-none font-serif text-9xl lg:text-[200px] font-black leading-none rotate-6"
        >
          सोनिया
        </motion.div>
        <motion.div
          style={{ y: watermarkDrift2Y }}
          className="absolute bottom-10 left-6 lg:left-20 text-[#2D2A26]/3 select-none font-serif text-8xl lg:text-[180px] font-black leading-none -rotate-3"
        >
          सृजन
        </motion.div>

        {/* Dynamic color wash ripple */}
        {washEffect && (
          <motion.div
            initial={{ scale: 0.2, opacity: 0.45 }}
            animate={{ scale: 2.8, opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-2xl pointer-events-none"
            style={{ backgroundColor: washEffect }}
          />
        )}
      </div>

      {/* ================================================================ */}
      {/* 2. Main Hero Atelier Stage Container                            */}
      {/* ================================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Curatorial Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#2D2A26]/12 text-xs font-semibold text-[#265C5E] shadow-2xs backdrop-blur-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#C56345] animate-ping" />
            <span className="font-serif italic text-[#C56345] font-bold">सोनिया क्रिएशन्स</span>
            <span className="text-[#2D2A26]/30">•</span>
            <span>Premier Fine Art Sanctuary · Jaipur</span>
            <span className="text-[#2D2A26]/30">•</span>
            <span className="text-[#C5A059] font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>4.9 (41 Reviews)</span>
            </span>
          </motion.div>
        </div>

        {/* Majestic Monumental Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#265C5E] leading-[1.12]"
          >
            Where{' '}
            <span className="relative inline-block px-2">
              <span className="relative z-10 brush-highlight text-[#C56345]">Creativity</span>
            </span>{' '}
            Comes to Life.
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="w-48 sm:w-72 mx-auto mt-3.5 mb-5"
          >
            <BrushStroke color="#C56345" className="h-3.5 w-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-base sm:text-lg text-[#2D2A26]/85 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the joy of holding a real brush, mixing pigments on ceramic palettes, and crafting masterworks under dedicated mentorship in Bajaj Nagar, Jaipur.
          </motion.p>

          {/* Quick Action Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#classes"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#C56345] hover:bg-[#A84E33] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <BookOpen className="w-4 h-4 text-amber-200" />
              <span>Explore Classes</span>
            </a>

            {onBookClass && (
              <button
                type="button"
                onClick={onBookClass}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#265C5E] hover:bg-[#1C3E40] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Book a Trial Easel</span>
              </button>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#FAF6F0] text-[#2D2A26] border border-[#2D2A26]/15 font-semibold text-sm shadow-2xs hover:shadow-md transition-all"
            >
              <MapPin className="w-4 h-4 text-[#C56345]" />
              <span>Visit Studio on Tonk Rd</span>
            </a>
          </motion.div>
        </div>

        {/* ================================================================ */}
        {/* 3. The Grand Atelier Exhibition & Interactive Easel Showcase     */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ y: plinthParallaxY }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Wooden Easel Top Plinth Accent */}
          <div className="flex justify-center -mb-2 relative z-20">
            <div className="w-32 sm:w-44 h-5 bg-[#7D5226] rounded-t-lg border-t-2 border-[#523414] shadow-md flex items-center justify-center">
              <span className="text-[10px] font-serif uppercase tracking-widest text-amber-100 font-bold">
                SONIA CREATIONS ATELIER
              </span>
            </div>
          </div>

          {/* Master Exhibition Container */}
          <div className="bg-white rounded-3xl art-canvas-frame border-2 border-[#2D2A26]/12 shadow-2xl p-4 sm:p-7 relative z-10">
            
            {/* Top Navigation Shelf: Mode Switcher & Discipline Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#2D2A26]/10">
              
              {/* Discipline Tabs (01 Acrylic, 02 Pichwai, 03 Charcoal, 04 Mixed) */}
              <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {DISCIPLINES.map((discipline, idx) => {
                  const isSelected = activeTab === 'exhibition' && selectedDisciplineIndex === idx;
                  return (
                    <button
                      key={discipline.id}
                      type="button"
                      onClick={() => {
                        setActiveTab('exhibition');
                        setSelectedDisciplineIndex(idx);
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 flex items-center gap-2 border ${
                        isSelected
                          ? 'bg-[#265C5E] text-white border-[#265C5E] shadow-sm'
                          : 'bg-[#FAF6F0] text-[#2D2A26]/80 border-[#2D2A26]/10 hover:border-[#C56345]/50'
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono ${
                          isSelected ? 'text-amber-200' : 'text-[#C56345]'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span>{discipline.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Paintpad Toggle */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab(activeTab === 'paintpad' ? 'exhibition' : 'paintpad')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                    activeTab === 'paintpad'
                      ? 'bg-[#C56345] text-white border-[#C56345] shadow-md ring-2 ring-[#C56345]/30'
                      : 'bg-[#FAF6F0] text-[#265C5E] border-[#265C5E]/20 hover:bg-[#265C5E] hover:text-white'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>{activeTab === 'paintpad' ? 'Return to Gallery' : 'Interactive Paintpad'}</span>
                </button>
              </div>

            </div>

            {/* Display Area: Master Artwork Gallery OR Live Interactive Canvas */}
            <div className="relative mt-5 rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#2D2A26]/10 shadow-inner">
              <AnimatePresence mode="wait">
                {activeTab === 'exhibition' ? (
                  <motion.div
                    key={currentDiscipline.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.45 }}
                    className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] sm:min-h-[440px]"
                  >
                    {/* Left: Master Artwork with Museum Matting (7 cols) */}
                    <div className="lg:col-span-7 relative group overflow-hidden bg-[#2D2A26]">
                      <img
                        src={currentDiscipline.image}
                        alt={currentDiscipline.name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 min-h-[300px] lg:min-h-[440px]"
                      />

                      {/* Archival Museum Vignette Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                      {/* Top Curatorial Tag */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="bg-[#1C3E40]/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 shadow-xs">
                          {currentDiscipline.tag}
                        </span>
                        <span className="bg-amber-100/90 text-[#7D5226] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                          {currentDiscipline.level}
                        </span>
                      </div>

                      {/* Bottom Caption Plaque on Canvas */}
                      <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/10">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block">
                          {currentDiscipline.subtitle}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold">
                          {currentDiscipline.name}
                        </h3>
                        <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                          {currentDiscipline.medium}
                        </p>
                      </div>
                    </div>

                    {/* Right: Studio Recipe, Pigment Bar & Batch Info (5 cols) */}
                    <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between bg-white space-y-5">
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-serif italic text-[#C56345] font-bold">
                            {currentDiscipline.hindiName}
                          </span>
                          <span className="text-[11px] font-bold text-[#265C5E] bg-[#265C5E]/10 px-2 py-0.5 rounded-md">
                            All Materials Included
                          </span>
                        </div>

                        <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#265C5E] leading-snug">
                          {currentDiscipline.name}
                        </h4>

                        <p className="text-xs sm:text-sm text-[#2D2A26]/80 leading-relaxed italic">
                          "{currentDiscipline.quote}"
                        </p>
                      </div>

                      {/* Studio Pigment Recipe Swatch Bar */}
                      <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#2D2A26]/8 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#2D2A26] uppercase tracking-wider text-[10px] flex items-center gap-1">
                            <Palette className="w-3 h-3 text-[#C56345]" />
                            <span>Pigments Used:</span>
                          </span>
                          <span className="text-[10px] text-[#C56345] italic">
                            Click to swatch wash
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-2 pt-1">
                          {currentDiscipline.palette.map((p) => (
                            <button
                              key={p.name}
                              type="button"
                              onClick={() => triggerColorWash(p.hex)}
                              className="group p-1.5 rounded-xl bg-white border border-[#2D2A26]/10 hover:border-[#C56345] text-center transition-all transform hover:scale-105"
                              title={`Swatch ${p.name}`}
                            >
                              <span
                                className="w-5 h-5 rounded-full mx-auto block shadow-xs group-hover:ring-2 ring-[#C56345]"
                                style={{ backgroundColor: p.hex }}
                              />
                              <span className="text-[9px] font-medium text-[#2D2A26]/75 block truncate mt-1">
                                {p.name.split(' ')[0]}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Batch Timings & Next Session */}
                      <div className="space-y-2 text-xs text-[#2D2A26]/80 border-t border-[#2D2A26]/8 pt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[#2D2A26]/60">Studio Batch:</span>
                          <span className="font-semibold text-[#265C5E]">
                            {currentDiscipline.batchTime}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#2D2A26]/60">Studio Location:</span>
                          <span className="font-semibold text-[#2D2A26]">
                            Tonk Rd, Bajaj Nagar
                          </span>
                        </div>
                      </div>

                      {/* Direct Inquire / Book Button for this discipline */}
                      <div className="pt-1 flex gap-2">
                        <a
                          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                            `Hello Sonia Creations! I am interested in joining the ${currentDiscipline.name} course in Jaipur.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Inquire on WhatsApp</span>
                        </a>

                        <a
                          href="#contact"
                          className="py-3 px-4 rounded-xl bg-[#265C5E] hover:bg-[#1C3E40] text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all"
                        >
                          <span>Studio Tour</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>

                    </div>
                  </motion.div>
                ) : (
                  /* Interactive Paintpad Mode */
                  <div className="relative w-full h-[420px] sm:h-[460px] cursor-crosshair touch-none select-none bg-[#FAF6F0]">
                    <canvas
                      ref={canvasRef}
                      onMouseDown={(e) => startDraw(e.clientX, e.clientY)}
                      onMouseMove={(e) => drawMove(e.clientX, e.clientY)}
                      onMouseUp={endDraw}
                      onMouseLeave={endDraw}
                      onTouchStart={(e) => {
                        const touch = e.touches[0];
                        startDraw(touch.clientX, touch.clientY);
                      }}
                      onTouchMove={(e) => {
                        const touch = e.touches[0];
                        drawMove(touch.clientX, touch.clientY);
                      }}
                      onTouchEnd={endDraw}
                      className="w-full h-full block"
                    />

                    {/* Paintpad Tool Ribbon */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={clearPaintpad}
                        className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#2D2A26] border border-[#2D2A26]/15 text-xs font-semibold shadow-md flex items-center gap-1.5 transition-all"
                        title="Clear Canvas"
                      >
                        <Eraser className="w-3.5 h-3.5 text-[#C56345]" />
                        <span>Clear</span>
                      </button>
                    </div>

                    {/* Pigment Palette Wells at the bottom */}
                    <div className="absolute bottom-4 inset-x-4 sm:left-4 sm:right-auto bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border border-[#2D2A26]/12 shadow-lg flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D2A26]/60 px-1 hidden sm:inline">
                        Dip Brush:
                      </span>
                      {STUDIO_PIGMENTS.map((pigment) => {
                        const isSelected = activeColor.hex === pigment.hex;
                        return (
                          <button
                            key={pigment.hex}
                            type="button"
                            onClick={() => setActiveColor(pigment)}
                            className={`w-8 h-8 rounded-full transition-all transform flex items-center justify-center border ${
                              isSelected
                                ? 'scale-110 ring-2 ring-[#C56345] shadow-md border-white'
                                : 'hover:scale-105 border-black/10'
                            }`}
                            style={{ backgroundColor: pigment.hex }}
                            title={pigment.name}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Atelier Feature Pillars */}
            <div className="mt-5 pt-4 border-t border-[#2D2A26]/8 grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-[#2D2A26]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C56345] shrink-0" />
                <span>Small Batches (6-8 Seats)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#265C5E] shrink-0" />
                <span>Canvases &amp; Paints Provided</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Beginner to Pro Levels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Women-Owned Atelier</span>
              </div>
            </div>

          </div>

          {/* Floating Student Testimonial Parchment Note */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{ y: floatingParchmentY }}
            className="hidden xl:flex absolute -bottom-7 -right-6 z-20 bg-amber-50/95 border border-amber-200 p-3.5 rounded-2xl shadow-xl flex-col max-w-[220px]"
          >
            {/* Washi tape sticker touch */}
            <div className="absolute -top-2.5 left-8 w-14 h-4 bg-amber-200/80 -rotate-3 border border-amber-300/60 shadow-2xs backdrop-blur-2xs pointer-events-none" />
            <div className="flex items-center gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
            <p className="font-serif italic text-xs text-[#2D2A26]/85 leading-snug">
              "Sonia Ma'am's studio in Bajaj Nagar is a peaceful sanctuary. She guided my daughter with so much patience!"
            </p>
            <span className="text-[10px] font-bold text-[#C56345] mt-1 block">
              — Verified Google Review
            </span>
          </motion.div>

          {/* Floating Studio Verification Stamp on Bottom-Left */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            style={{ y: floatingStampY }}
            className="hidden xl:flex absolute -bottom-6 -left-6 z-20 bg-white p-3 rounded-2xl art-canvas-frame border border-[#2D2A26]/12 shadow-xl items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#265C5E] to-[#1C3E40] flex items-center justify-center text-white shadow-xs">
              <Award className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#265C5E]">
                <span>4.9 / 5.0 Rating</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              </div>
              <span className="text-[10px] text-[#2D2A26]/70 block font-medium">
                41 Reviews · A-24 Tonk Rd
              </span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
