import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Palette,
  Sparkles,
  Eraser,
  RefreshCw,
  Eye,
  Award,
  Star,
  Check,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { BrushStroke } from './BrushStrokes';

interface ArtworkShowcase {
  id: string;
  title: string;
  subtitle: string;
  medium: string;
  image: string;
  palette: string[];
  tag: string;
  artistNote: string;
}

const SHOWCASE_WORKS: ArtworkShowcase[] = [
  {
    id: 'canvas-1',
    title: 'Sunlit Terracotta Haven',
    subtitle: 'Stretched Linen Canvas',
    medium: 'Heavy-Body Acrylic & Palette Knife',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=85',
    palette: ['#C56345', '#265C5E', '#C5A059', '#FAF6F0'],
    tag: 'Acrylic Masterclass',
    artistNote: 'Exploring textural layering and Indian earth pigments in our weekend workshop.',
  },
  {
    id: 'heritage-2',
    title: 'Jaipur Lotus & Heritage Motif',
    subtitle: 'Handmade Wasli Paper',
    medium: 'Pichwai Traditional Gouache & Shell Gold',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1000&q=85',
    palette: ['#265C5E', '#C5A059', '#FAF6F0', '#C56345'],
    tag: 'Rajasthani Heritage',
    artistNote: 'Fine squirrel-hair brush precision with 24k gold leaf foil burnishing.',
  },
  {
    id: 'sketch-3',
    title: 'The Sculptor’s Gaze',
    subtitle: 'Canson Toned Paper',
    medium: 'Nitram Charcoal & White Chalk',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1000&q=85',
    palette: ['#2D2A26', '#9E8FB2', '#FAF6F0', '#C56345'],
    tag: 'Portrait & Realism',
    artistNote: 'Adult student work demonstrating cast shadow mapping and bone structures.',
  },
  {
    id: 'creative-4',
    title: 'Monsoon Mist in Pink City',
    subtitle: 'Textured Cotton Canvas',
    medium: 'Oil Glaze & Sand Texture Paste',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1000&q=85',
    palette: ['#9E8FB2', '#265C5E', '#C56345', '#FAF6F0'],
    tag: 'Mixed Media Art',
    artistNote: 'Loose intuitive brushwork capturing raindrops dancing over heritage courtyards.',
  },
];

const STUDIO_PIGMENTS = [
  { name: 'Jaipur Terracotta', hex: '#C56345', description: 'Rich earthy warmth' },
  { name: 'Peacock Teal', hex: '#265C5E', description: 'Deep Rajasthani indigo-teal' },
  { name: 'Marigold Ochre', hex: '#C5A059', description: 'Sunlit royal gold' },
  { name: 'Dusty Lavender', hex: '#9E8FB2', description: 'Subtle twilight shade' },
  { name: 'Charcoal Umber', hex: '#2D2A26', description: 'Deep contour & shadow' },
];

export function InteractiveStudioEasel() {
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState(0);
  const [activePigment, setActivePigment] = useState(STUDIO_PIGMENTS[0]);
  const [isPaintingMode, setIsPaintingMode] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  // Interactive Mini Paint Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  const currentArtwork = SHOWCASE_WORKS[selectedArtworkIndex];

  // Initialize Canvas for interactive painting
  useEffect(() => {
    if (!isPaintingMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Fill with canvas texture background
    ctx.fillStyle = '#FAF6F0';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Add faint canvas grid lines
    ctx.strokeStyle = 'rgba(45, 42, 38, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < rect.width; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, rect.height);
      ctx.stroke();
    }
    for (let y = 0; y < rect.height; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(rect.width, y);
      ctx.stroke();
    }

    // Default welcoming greeting brush mark
    ctx.font = 'italic 15px "Playfair Display", serif';
    ctx.fillStyle = 'rgba(197, 99, 69, 0.6)';
    ctx.textAlign = 'center';
    ctx.fillText('Drag or touch to paint your brush stroke here...', rect.width / 2, rect.height / 2);
  }, [isPaintingMode]);

  // Painting drawing handlers
  const startDrawing = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    isDrawingRef.current = true;
    lastPosRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
    setHasDrawn(true);
  };

  const draw = (clientX: number, clientY: number) => {
    if (!isDrawingRef.current || !lastPosRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const currentX = clientX - rect.left;
    const currentY = clientY - rect.top;

    ctx.strokeStyle = activePigment.hex;
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 0.85;

    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    // Subtle bristle secondary stroke for realistic paintbrush texture
    ctx.strokeStyle = '#FAF6F0';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x + 2, lastPosRef.current.y + 2);
    ctx.lineTo(currentX + 2, currentY + 2);
    ctx.stroke();

    lastPosRef.current = { x: currentX, y: currentY };
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
    lastPosRef.current = null;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#FAF6F0';
    ctx.fillRect(0, 0, rect.width, rect.height);
    setHasDrawn(false);
  };

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      
      {/* Decorative Wooden Easel Top Clamp Mockup */}
      <div className="flex justify-center -mb-2 relative z-20">
        <div className="w-28 h-4 bg-[#8C6239] rounded-t-md border border-[#5C3F22] shadow-sm flex items-center justify-center">
          <div className="w-16 h-1 bg-[#5C3F22]/40 rounded-full" />
        </div>
      </div>

      {/* Main Easel / Canvas Board */}
      <div className="relative z-10 bg-white p-3.5 sm:p-4 rounded-3xl art-canvas-frame border-2 border-[#2D2A26]/12 shadow-2xl transition-all">
        
        {/* Top Control Bar: Mode Switcher & Live Tag */}
        <div className="flex items-center justify-between pb-3 border-b border-[#2D2A26]/8 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C56345] animate-pulse" />
            <span className="font-serif text-xs font-bold text-[#265C5E]">
              Studio Easel · Tonk Road
            </span>
          </div>

          {/* Toggle between "View Gallery" and "Interactive Canvas" */}
          <div className="flex items-center gap-1 bg-[#FAF6F0] p-1 rounded-full border border-[#2D2A26]/10">
            <button
              type="button"
              onClick={() => setIsPaintingMode(false)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                !isPaintingMode
                  ? 'bg-[#265C5E] text-white shadow-xs'
                  : 'text-[#2D2A26]/70 hover:text-[#2D2A26]'
              }`}
            >
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>Gallery</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsPaintingMode(true)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                isPaintingMode
                  ? 'bg-[#C56345] text-white shadow-xs'
                  : 'text-[#2D2A26]/70 hover:text-[#2D2A26]'
              }`}
            >
              <span className="flex items-center gap-1">
                <Palette className="w-3 h-3" />
                <span>Try Painting</span>
              </span>
            </button>
          </div>
        </div>

        {/* Display Area: Either Showcase Artwork OR Live Canvas */}
        <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden bg-[#FAF6F0] mt-3 border border-[#2D2A26]/8">
          <AnimatePresence mode="wait">
            {!isPaintingMode ? (
              <motion.div
                key={currentArtwork.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45 }}
                className="relative w-full h-full group"
              >
                <img
                  src={currentArtwork.image}
                  alt={currentArtwork.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Corner Masking Tape Touch */}
                <div className="absolute top-2 left-2 w-12 h-4 bg-amber-100/80 -rotate-12 border border-amber-300/40 shadow-xs pointer-events-none backdrop-blur-2xs" />
                <div className="absolute bottom-2 right-2 w-12 h-4 bg-amber-100/80 -rotate-12 border border-amber-300/40 shadow-xs pointer-events-none backdrop-blur-2xs" />

                {/* Medium badge on top right */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-xs">
                  {currentArtwork.tag}
                </div>

                {/* Curatorial Caption Ribbon */}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block">
                    {currentArtwork.subtitle}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    {currentArtwork.title}
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                    {currentArtwork.artistNote}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="relative w-full h-full cursor-crosshair touch-none select-none bg-[#FAF6F0]">
                <canvas
                  ref={canvasRef}
                  onMouseDown={(e) => startDrawing(e.clientX, e.clientY)}
                  onMouseMove={(e) => draw(e.clientX, e.clientY)}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    startDrawing(touch.clientX, touch.clientY);
                  }}
                  onTouchMove={(e) => {
                    const touch = e.touches[0];
                    draw(touch.clientX, touch.clientY);
                  }}
                  onTouchEnd={stopDrawing}
                  className="w-full h-full block"
                />

                {/* Clear canvas floating button */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="p-2 rounded-full bg-white/90 hover:bg-white text-[#2D2A26] border border-[#2D2A26]/15 shadow-md transition-all"
                    title="Clear canvas"
                  >
                    <Eraser className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Active Pigment Indicator */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#2D2A26]/10 text-[11px] font-semibold text-[#2D2A26] flex items-center gap-1.5 shadow-sm">
                  <span
                    className="w-3 h-3 rounded-full border border-black/20"
                    style={{ backgroundColor: activePigment.hex }}
                  />
                  <span>Painting with: {activePigment.name}</span>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Interactive Studio Paint Palette (Dip Your Brush) */}
        <div className="mt-4 pt-3 border-t border-[#2D2A26]/8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D2A26]/70 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C56345]" />
              <span>Studio Pigments &amp; Palette</span>
            </span>
            <span className="text-[10px] text-[#C56345] font-semibold">
              {activePigment.name}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            {STUDIO_PIGMENTS.map((pigment) => {
              const isSelected = activePigment.hex === pigment.hex;
              return (
                <button
                  key={pigment.hex}
                  type="button"
                  onClick={() => {
                    setActivePigment(pigment);
                  }}
                  className={`group relative flex-1 h-9 rounded-xl transition-all transform flex items-center justify-center border ${
                    isSelected
                      ? 'scale-105 ring-2 ring-[#C56345] shadow-md border-white'
                      : 'hover:scale-102 border-black/10'
                  }`}
                  style={{ backgroundColor: pigment.hex }}
                  title={`${pigment.name} - ${pigment.description}`}
                >
                  {isSelected && (
                    <Check className="w-4 h-4 text-white drop-shadow-md stroke-[3]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Artwork Switcher Buttons (Mini Salon Selectors) */}
        {!isPaintingMode && (
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {SHOWCASE_WORKS.map((work, idx) => {
              const isSelected = selectedArtworkIndex === idx;
              return (
                <button
                  key={work.id}
                  type="button"
                  onClick={() => setSelectedArtworkIndex(idx)}
                  className={`p-1.5 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-[#FAF6F0] border-[#C56345] shadow-xs'
                      : 'bg-white/60 border-[#2D2A26]/10 hover:border-[#2D2A26]/25'
                  }`}
                >
                  <span
                    className={`block text-[10px] font-bold truncate ${
                      isSelected ? 'text-[#C56345]' : 'text-[#2D2A26]/70'
                    }`}
                  >
                    0{idx + 1} · {work.tag.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        )}

      </div>

      {/* Floating Studio Verification Stamp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -bottom-5 -left-4 sm:-left-6 z-30 bg-[#FAF6F0] p-2.5 sm:p-3 rounded-2xl art-canvas-frame border border-[#2D2A26]/12 shadow-xl flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C56345] to-[#C5A059] flex items-center justify-center text-white shadow-xs">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1 text-xs font-bold text-[#265C5E]">
            <span>4.9 / 5.0 Rating</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
          <span className="text-[10px] text-[#2D2A26]/70 block font-medium">
            41 Verified Google Reviews • Tonk Rd
          </span>
        </div>
      </motion.div>

      {/* Floating Hand-painted artist note card */}
      <motion.div
        initial={{ opacity: 0, x: 20, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ duration: 0.7, delay: 0.95 }}
        className="hidden sm:flex absolute -top-6 -right-5 z-20 bg-amber-50/95 border border-amber-200/80 p-3 rounded-xl shadow-lg transform rotate-3 flex-col max-w-[160px]"
      >
        <span className="text-[9px] font-bold text-[#C56345] uppercase tracking-wider">
          Daily Studio Sessions
        </span>
        <span className="font-serif text-xs font-bold text-[#2D2A26] mt-0.5">
          Morning &amp; Evening Batches
        </span>
        <span className="text-[9px] text-[#2D2A26]/70 mt-0.5 italic">
          All materials &amp; canvas provided
        </span>
      </motion.div>

      {/* Wooden Easel Base Legs */}
      <div className="flex justify-between px-10 -mt-2 relative z-0 pointer-events-none opacity-40">
        <div className="w-3 h-8 bg-[#8C6239] rounded-b-md shadow-inner" />
        <div className="w-3 h-8 bg-[#8C6239] rounded-b-md shadow-inner" />
      </div>

    </div>
  );
}
