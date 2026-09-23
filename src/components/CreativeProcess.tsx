import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Compass, Lightbulb, Palette, Sparkles, Feather } from 'lucide-react';
import { BrushStroke } from './BrushStrokes';

export function CreativeProcess() {
  const processSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: processSectionRef,
    offset: ['start end', 'end start'],
  });

  const bgFloat1Y = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const bgFloat2Y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const curveDriftX = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const cardEvenY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const cardOddY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Awaken Artistic Vision',
      description:
        'Explore your innate aesthetic instincts, experiment with charcoal, gouache, and oil pastels, and find inspiration in nature, architectural heritage, and emotional memory.',
      icon: Compass,
      color: '#C56345',
      accentBg: 'bg-[#C56345]/10',
      badge: 'Step 1 · Observation',
    },
    {
      number: '02',
      title: 'LEARN',
      subtitle: 'Master Pure Technique',
      description:
        'Under patient one-on-one mentorship, understand light and shade, tonal hierarchies, color mixing rules, classical perspective, and mindful brush manipulation.',
      icon: Lightbulb,
      color: '#265C5E',
      accentBg: 'bg-[#265C5E]/10',
      badge: 'Step 2 · Discipline',
    },
    {
      number: '03',
      title: 'CREATE',
      subtitle: 'Layer by Layer on Canvas',
      description:
        'Bring ideas to physical life on stretched linen and archival papers. Work fearlessly with palette knives, fluid washes, textural impasto, and traditional Rajasthani motifs.',
      icon: Palette,
      color: '#9E8FB2',
      accentBg: 'bg-[#9E8FB2]/15',
      badge: 'Step 3 · Creation',
    },
    {
      number: '04',
      title: 'EXPRESS',
      subtitle: 'Share Your Artwork',
      description:
        'Add signature varnishes and finishing details. Take home completed gallery-quality pieces, develop an authentic portfolio, and carry boundless artistic confidence.',
      icon: Sparkles,
      color: '#C5A059',
      accentBg: 'bg-[#C5A059]/15',
      badge: 'Step 4 · Confidence',
    },
  ];

  return (
    <section ref={processSectionRef} className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative Canvas Background Texture */}
      <div className="absolute inset-0 bg-canvas-texture pointer-events-none opacity-60" />

      {/* Subtle organic light spots with parallax drift */}
      <motion.div
        style={{ y: bgFloat1Y }}
        className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#C56345]/6 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgFloat2Y }}
        className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#265C5E]/6 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#2D2A26]/10 text-xs font-semibold text-[#265C5E] uppercase tracking-wider mb-4"
          >
            <Feather className="w-3.5 h-3.5 text-[#C56345]" />
            <span>The Sonia Creations Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#265C5E] tracking-tight"
          >
            A Thoughtfully Guided <span className="brush-highlight text-[#C56345]">Creative Journey</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-48 mx-auto mt-3 mb-6"
          >
            <BrushStroke color="#C56345" className="h-3.5 w-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base text-[#2D2A26]/80 leading-relaxed"
          >
            Whether you have never held a brush or are polishing an advanced portfolio, our four-stage creative pathway guides every student with structured patience and inspiring freedom.
          </motion.p>
        </div>

        {/* Desktop Connected Roadmap Line (Hand-drawn SVG curve with subtle parallax drift) */}
        <div className="relative">
          <motion.div
            style={{ x: curveDriftX }}
            className="hidden lg:block absolute top-28 left-[10%] right-[10%] h-12 pointer-events-none z-0"
          >
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 60"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 30 Q 125 5, 250 30 T 500 30 T 750 30 T 1000 30"
                stroke="#C56345"
                strokeWidth="2.5"
                strokeDasharray="6 8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.2 }}
                whileInView={{ pathLength: 1, opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>

          {/* Four Stages Grid with alternating subtle vertical parallax */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const cardParallaxStyle = idx % 2 === 0 ? { y: cardEvenY } : { y: cardOddY };
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  style={cardParallaxStyle}
                  className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#2D2A26]/10 art-canvas-frame art-canvas-hover flex flex-col justify-between relative"
                >
                  {/* Subtle top indicator bar */}
                  <div
                    className="absolute top-0 left-6 right-6 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: step.color }}
                  />

                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span
                          className="font-serif text-3xl font-black tracking-tight"
                          style={{ color: step.color }}
                        >
                          {step.number}
                        </span>
                        <div className="w-8 h-[2px] bg-[#2D2A26]/10" />
                      </div>
                      <div
                        className={`w-11 h-11 rounded-xl ${step.accentBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-5 h-5" style={{ color: step.color }} />
                      </div>
                    </div>

                    {/* Badge */}
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#2D2A26]/60 block mb-1">
                      {step.badge}
                    </span>

                    {/* Step Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#265C5E] mb-1">
                      {step.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-[#C56345] mb-3">
                      {step.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#2D2A26]/75 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom aesthetic dot accent */}
                  <div className="pt-6 mt-6 border-t border-[#2D2A26]/8 flex items-center justify-between text-xs text-[#2D2A26]/60">
                    <span className="text-[11px] font-medium">Stage {idx + 1} of 4</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`w-1.5 h-1.5 rounded-full ${
                            dotIdx <= idx ? 'bg-[#C56345]' : 'bg-[#2D2A26]/15'
                          }`}
                        />
                      ))}
                    </div>
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
