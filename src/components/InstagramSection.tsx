import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Heart, ExternalLink, Play, Sparkles, Info } from 'lucide-react';
import { INSTAGRAM_POSTS, BUSINESS_INFO } from '../data/artData';
import { BrushStroke } from './BrushStrokes';

export function InstagramSection() {
  const instaSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: instaSectionRef,
    offset: ['start end', 'end start'],
  });

  const bgFloatY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const cardEvenY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const cardOddY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={instaSectionRef} id="instagram" className="py-20 lg:py-28 bg-[#F4ECE1]/60 relative overflow-hidden">
      {/* Canvas linen overlay */}
      <div className="absolute inset-0 bg-linen-subtle pointer-events-none opacity-50" />

      {/* Decorative ambient color pool with parallax */}
      <motion.div
        style={{ y: bgFloatY }}
        className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#E1306C]/6 blur-3xl pointer-events-none"
      />

      {/* Devanagari watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-1/2 left-4 text-[#2D2A26]/3 select-none font-serif text-8xl lg:text-[160px] font-black leading-none -rotate-6 pointer-events-none"
      >
        रचना
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================ */}
        {/* Section Header with exact Title & Subtitle                       */}
        {/* ================================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#2D2A26]/10 text-xs font-semibold text-[#E1306C] uppercase tracking-wider mb-4">
            <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>@sonia__creation</span>
          </div>

          {/* Title: “Follow Our Creative Journey” */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#265C5E] tracking-tight">
            Follow Our <span className="brush-highlight text-[#C56345]">Creative Journey</span>
          </h2>

          <div className="w-44 mx-auto mt-3 mb-4">
            <BrushStroke color="#C56345" className="h-3.5 w-full" />
          </div>

          {/* Subtitle: “Discover more artwork, classes and creative moments.” */}
          <p className="font-serif text-base sm:text-lg text-[#C56345] font-semibold mb-2">
            Discover more artwork, classes and creative moments.
          </p>

          <p className="text-xs sm:text-sm text-[#2D2A26]/80 leading-relaxed max-w-xl mx-auto">
            Get daily glimpses inside our Bajaj Nagar studio in Jaipur. See students mixing palettes, working on canvases, and exploring traditional techniques.
          </p>

          {/* Prominent Button: “Follow @sonia__creation” */}
          <div className="mt-7">
            <a
              href="https://www.instagram.com/sonia__creation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow @sonia__creation</span>
              <ExternalLink className="w-4 h-4 ml-0.5 opacity-90" />
            </a>
          </div>

          {/* Explicit Note */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#2D2A26]/10 text-[11px] text-[#2D2A26]/70">
            <Info className="w-3 h-3 text-[#C56345]" />
            <span>Editable placeholder gallery – replace image assets directly in artData.ts</span>
          </div>
        </div>

        {/* ================================================================ */}
        {/* Instagram-Inspired Visual Grid with Editable Placeholders        */}
        {/* ================================================================ */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post, idx) => {
            const cardParallax = idx % 2 === 0 ? { y: cardEvenY } : { y: cardOddY };
            return (
              <motion.a
                key={post.id}
                href="https://www.instagram.com/sonia__creation/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                style={cardParallax}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-white art-canvas-frame border border-[#2D2A26]/10 cursor-pointer block shadow-2xs hover:shadow-lg transition-all"
              >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Type Badge (Reel/Post) */}
              {post.type === 'reel' && (
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/50 backdrop-blur-xs flex items-center justify-center text-white shadow-sm">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
              )}

              {/* Hover Dark Overlay with Caption */}
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3.5 flex flex-col justify-between text-white text-xs backdrop-blur-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                    {post.postDate}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-rose-300">
                    <Heart className="w-3 h-3 fill-rose-300" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <p className="line-clamp-3 text-[11px] text-white/90 leading-snug">
                  {post.caption}
                </p>

                <div className="flex items-center justify-center gap-1 text-[10px] font-semibold text-amber-200">
                  <span>Open Instagram</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>
              </div>
            </motion.a>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F0] border border-[#2D2A26]/10 text-xs text-[#2D2A26]/80">
            <Sparkles className="w-3.5 h-3.5 text-[#C56345]" />
            <span>Tag your studio creations with <strong>#SoniaCreations</strong> on Instagram!</span>
          </div>
        </div>

      </div>
    </section>
  );
}
