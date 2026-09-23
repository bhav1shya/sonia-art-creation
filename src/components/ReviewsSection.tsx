import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Quote,
  ExternalLink,
  Info,
  Sparkles,
} from 'lucide-react';
import { REVIEW_METRICS, BUSINESS_INFO } from '../data/artData';
import { BrushStroke } from './BrushStrokes';

export function ReviewsSection() {
  const reviews = REVIEW_METRICS.placeholderReviews;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviewsSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: reviewsSectionRef,
    offset: ['start end', 'end start'],
  });

  const bgSpot1Y = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const bgSpot2Y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const metricBoxParallaxY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const quoteParallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const watermarkReviewsY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  // Subtle auto-advance every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section ref={reviewsSectionRef} id="reviews" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative accent spots with parallax */}
      <motion.div
        style={{ y: bgSpot1Y }}
        className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#9E8FB2]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgSpot2Y }}
        className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-[#C56345]/8 blur-3xl pointer-events-none"
      />

      {/* Devanagari watermark */}
      <motion.div
        style={{ y: watermarkReviewsY }}
        className="absolute top-1/3 -right-6 text-[#2D2A26]/3 select-none font-serif text-8xl lg:text-[180px] font-black leading-none -rotate-3 pointer-events-none"
      >
        विश्वास
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================ */}
        {/* Section Header                                                   */}
        {/* ================================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#2D2A26]/10 text-xs font-semibold text-[#265C5E] uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C56345]" />
            <span>Verified Google Business Profile</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#265C5E] tracking-tight">
            Loved by Artists Across <span className="brush-highlight text-[#C56345]">Jaipur</span>
          </h2>

          <div className="w-44 mx-auto mt-3 mb-6">
            <BrushStroke color="#C56345" className="h-3.5 w-full" />
          </div>

          <p className="text-sm sm:text-base text-[#2D2A26]/80 leading-relaxed">
            Consistently rated <strong>4.9 out of 5 stars</strong> across 41 verified reviews. Our studio in Bajaj Nagar is proud to inspire creativity for students of all ages.
          </p>

          {/* Placeholders note */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F4ECE1] border border-[#C56345]/30 text-xs text-[#2D2A26]/80 text-left sm:text-center shadow-2xs">
            <Info className="w-4 h-4 text-[#C56345] shrink-0" />
            <span>
              Review placeholders shown below – verifiable on our official Google Business Profile.
            </span>
          </div>
        </div>

        {/* ================================================================ */}
        {/* Prominent Required Metric Display: 4.9 ★★★★★ 41 Reviews with Parallax */}
        {/* ================================================================ */}
        <motion.div
          style={{ y: metricBoxParallaxY }}
          className="max-w-3xl mx-auto mb-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#2D2A26]/10 art-canvas-frame shadow-xs text-center"
        >
          <div className="space-y-4">
            {/* 4.9 */}
            <div className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black text-[#265C5E] tracking-tight">
              4.9
            </div>

            {/* ★★★★★ */}
            <div className="flex items-center justify-center gap-1.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* 41 Reviews */}
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold text-[#2D2A26]">
                41 Reviews
              </div>
              <p className="text-xs sm:text-sm text-[#2D2A26]/70 flex items-center justify-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Verified Google Business Profile • Bajaj Nagar, Jaipur</span>
              </p>
            </div>

            {/* Link to Google listing */}
            <div className="pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  'Sonia Creations A-24 Tonk Rd New Light Colony Bajaj Nagar Jaipur Rajasthan 302018'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#C56345] hover:text-[#A84E33] underline"
              >
                <span>View Google Maps Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================================================================ */}
        {/* Subtle Horizontal Carousel Interaction with Counter-Parallax     */}
        {/* ================================================================ */}
        <motion.div
          style={{ y: quoteParallaxY }}
          className="max-w-4xl mx-auto relative px-4 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#2D2A26]/12 shadow-md flex items-center justify-center text-[#265C5E] hover:bg-[#C56345] hover:text-white hover:border-[#C56345] transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#2D2A26]/12 shadow-md flex items-center justify-center text-[#265C5E] hover:bg-[#C56345] hover:text-white hover:border-[#C56345] transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Slide Area */}
          <div className="overflow-hidden py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#2D2A26]/10 art-canvas-frame shadow-md relative"
              >
                {/* Quotation icon */}
                <Quote className="w-12 h-12 text-[#C56345]/15 absolute top-6 right-8 pointer-events-none" />

                <div className="space-y-6">
                  {/* Star Rating for individual review */}
                  <div className="flex items-center gap-1">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-[#2D2A26] ml-2">
                      5.0 Out of 5.0
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#2D2A26] leading-relaxed">
                    "{reviews[currentIndex].content}"
                  </p>

                  {/* Review Author & Metadata */}
                  <div className="pt-6 border-t border-[#2D2A26]/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full ${reviews[currentIndex].avatarColor} text-white font-bold text-base flex items-center justify-center shadow-inner`}
                      >
                        {reviews[currentIndex].author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-base text-[#265C5E]">
                          {reviews[currentIndex].author}
                        </h4>
                        <p className="text-xs text-[#2D2A26]/60">
                          {reviews[currentIndex].date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1 bg-[#FAF6F0] rounded-full border border-[#2D2A26]/10 text-[#C56345]">
                        {reviews[currentIndex].courseTaken}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        Google Verified
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#C56345]'
                    : 'w-2.5 bg-[#2D2A26]/20 hover:bg-[#2D2A26]/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Studio Atmosphere Verification Card Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEW_METRICS.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#F4ECE1]/60 p-5 rounded-2xl border border-[#2D2A26]/8 art-canvas-frame"
            >
              <Sparkles className="w-5 h-5 text-[#C56345] mb-2" />
              <h5 className="font-serif font-bold text-sm text-[#265C5E] mb-1">
                {pillar.title}
              </h5>
              <p className="text-xs text-[#2D2A26]/75 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
