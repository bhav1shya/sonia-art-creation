import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Palette, Sparkles, MapPin, Heart, Brush, GraduationCap, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO, WHY_FEATURES } from '../data/artData';
import { BrushStroke } from './BrushStrokes';

export function AboutSection() {
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: aboutSectionRef,
    offset: ['start end', 'end start'],
  });

  const bgWash1Y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const bgWash2Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const watermarkAboutY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const mainImageParallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const smallCardParallaxY = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const textColParallaxY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const iconMap: Record<string, typeof Sparkles> = {
    Sparkles: Sparkles,
    HeartHandshake: HeartHandshake,
    Palette: Palette,
    GraduationCap: GraduationCap,
  };

  return (
    <section ref={aboutSectionRef} id="about" className="py-20 lg:py-28 bg-[#F4ECE1]/60 relative overflow-hidden">
      {/* Canvas linen overlay */}
      <div className="absolute inset-0 bg-linen-subtle pointer-events-none opacity-50" />

      {/* Subtle organic backdrops with parallax translation */}
      <motion.div
        style={{ y: bgWash1Y }}
        className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#C56345]/6 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgWash2Y }}
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#265C5E]/6 blur-3xl pointer-events-none"
      />

      {/* Subtle Devanagari background watermark */}
      <motion.div
        style={{ y: watermarkAboutY }}
        className="absolute top-1/3 -right-10 text-[#2D2A26]/3 select-none font-serif text-8xl lg:text-[160px] font-black leading-none rotate-12 pointer-events-none"
      >
        साधना
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================ */}
        {/* Section Header with Required Title & Women-Owned Badge            */}
        {/* ================================================================ */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          
          {/* Small Badge: “Women-Owned Art School” */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#C56345]/30 text-xs font-semibold text-[#265C5E] uppercase tracking-wider mb-4 shadow-2xs"
          >
            <Heart className="w-3.5 h-3.5 text-[#C56345] fill-[#C56345]" />
            <span className="text-[#C56345] font-bold">Women-Owned Art School</span>
            <span className="text-[#2D2A26]/30">•</span>
            <span className="text-[#265C5E]">Jaipur, Rajasthan</span>
          </motion.div>

          {/* Editorial Title: “More Than Art. It’s a Creative Journey.” */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#265C5E] tracking-tight leading-[1.15]"
          >
            More Than Art.{' '}
            <span className="block mt-1 sm:mt-2 brush-highlight text-[#C56345]">
              It’s a Creative Journey.
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ originX: 0 }}
            className="w-48 sm:w-60 mt-3 mb-6"
          >
            <BrushStroke color="#C56345" className="h-3.5 w-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-[#2D2A26]/85 leading-relaxed"
          >
            Located at <strong>A-24, Tonk Road in New Light Colony, Bajaj Nagar</strong>, Sonia Creations ({BUSINESS_INFO.hindiName}) is a dedicated artistic learning space in Jaipur. Here, curious beginners, devoted hobbyists, and aspiring artists find a nurturing studio environment to discover, practice, and celebrate fine art.
          </motion.p>
        </div>

        {/* ================================================================ */}
        {/* Asymmetric Editorial Layout: Large Artwork & Supporting Card      */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
          
          {/* Left Column: Asymmetric Artwork Composition (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative">
              
              {/* One Large Artwork Image */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ y: mainImageParallaxY }}
                className="bg-white p-3.5 sm:p-5 rounded-2xl art-canvas-frame shadow-xl border border-[#2D2A26]/10"
              >
                <div className="aspect-16/10 sm:aspect-16/11 rounded-xl overflow-hidden relative bg-[#FAF6F0]">
                  <img
                    src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=85"
                    alt="Sonia Creations Studio Space in Jaipur"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Studio Tag Overlay */}
                  <div className="absolute top-3 left-3 bg-[#FAF6F0]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/10 text-xs font-semibold text-[#265C5E] flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#C56345]" />
                    <span>Tonk Road · Bajaj Nagar, Jaipur</span>
                  </div>
                </div>

                {/* Caption strip */}
                <div className="pt-3.5 flex flex-wrap items-center justify-between gap-2 px-1">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#2D2A26]">
                      Sonia Creations Art Studio
                    </h4>
                    <p className="text-xs text-[#2D2A26]/70">
                      Sunlit studio atmosphere with easels, pigments, and natural lighting
                    </p>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 bg-[#265C5E]/10 text-[#265C5E] rounded-md">
                    4.9 ★ (41 Google Reviews)
                  </span>
                </div>
              </motion.div>

              {/* Smaller Supporting Image / Card (Asymmetric Layer) with Counter-Parallax */}
              <motion.div
                initial={{ opacity: 0, x: 25, y: 25 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                style={{ y: smallCardParallaxY }}
                className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-64 md:w-72 bg-[#FAF6F0] p-3 rounded-2xl art-canvas-frame shadow-2xl border border-[#2D2A26]/12"
              >
                <div className="aspect-4/3 rounded-xl overflow-hidden bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80"
                    alt="Hands-on Palette Mixing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2.5 px-1">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#C56345] tracking-wider">
                    <Brush className="w-3 h-3 text-[#C56345]" />
                    <span>Personalized Mentorship</span>
                  </div>
                  <h5 className="font-serif text-xs font-bold text-[#2D2A26] mt-0.5">
                    Individual Attention for Every Student
                  </h5>
                  <p className="text-[11px] text-[#2D2A26]/70 mt-0.5 leading-snug">
                    Small batch sizes ensure personalized feedback and comfortable pacing.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Studio Values (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y: textColParallaxY }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#265C5E]/10 text-xs font-bold text-[#265C5E]">
              <span>Studio Philosophy</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#265C5E] leading-snug">
              Awakening the Artist Within Every Student
            </h3>

            <p className="text-sm sm:text-base text-[#2D2A26]/80 leading-relaxed">
              At <strong>Sonia Creations</strong>, art is not merely an activity—it is a pathway to self-expression, calm mindfulness, and creative confidence. In an increasingly digital world, working with physical pigments, textured canvas, and paper provides a rare, grounding sanctuary.
            </p>

            <p className="text-sm sm:text-base text-[#2D2A26]/80 leading-relaxed">
              Our studio in Jaipur welcomes curious children embarking on their first brush strokes, university students curating portfolios, and working professionals discovering relaxing weekend creative hobbies.
            </p>

            {/* Core Values Quote */}
            <div className="p-4 rounded-xl bg-white border border-[#2D2A26]/10 shadow-2xs">
              <blockquote className="italic font-serif text-sm sm:text-base text-[#265C5E] leading-relaxed">
                "Where pencils meet passion, and colors turn into lifelong creative joy."
              </blockquote>
              <div className="mt-2 text-xs font-semibold text-[#C56345]">
                — Sonia Creations Studio Philosophy
              </div>
            </div>

            {/* Contact Callout */}
            <div className="pt-2">
              <a
                href="#classes"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C56345] hover:text-[#A84E33] transition-colors group"
              >
                <span>Discover our six art disciplines</span>
                <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* ================================================================ */}
        {/* Why Sonia Creations Feature Cards Grid                           */}
        {/* ================================================================ */}
        <div className="mt-16 pt-16 border-t border-[#2D2A26]/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#265C5E]">
              Why Learn at Sonia Creations?
            </h3>
            <p className="text-xs sm:text-sm text-[#2D2A26]/70 mt-1.5">
              Thoughtful studio features designed to foster authentic artistic growth in Jaipur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_FEATURES.map((feature, idx) => {
              const IconComponent = iconMap[feature.icon] || Sparkles;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-[#2D2A26]/10 art-canvas-frame art-canvas-hover flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#265C5E] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#2D2A26]/75 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#2D2A26]/8">
                    <span className="text-[11px] font-semibold text-[#C56345]">
                      Studio Feature • Verified
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
