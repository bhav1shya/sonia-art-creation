import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Palette,
  CheckCircle,
  Clock,
  Users,
  Info,
  BookOpen,
  MessageCircle,
  X,
} from 'lucide-react';
import { ART_CLASSES, BUSINESS_INFO } from '../data/artData';
import { ArtClass } from '../types';
import { BrushStroke } from './BrushStrokes';

interface ClassesSectionProps {
  onSelectClassForBooking?: (classId: string) => void;
}

export function ClassesSection({ onSelectClassForBooking }: ClassesSectionProps) {
  const [selectedClass, setSelectedClass] = useState<ArtClass | null>(null);

  const classesSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: classesSectionRef,
    offset: ['start end', 'end start'],
  });

  const bgWash1 = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const bgWash2 = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const watermarkClassesY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const cardCol1Y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const cardCol2Y = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const cardCol3Y = useTransform(scrollYProgress, [0, 1], [25, -25]);

  // Formatted numbers 01 to 06
  const getCardNumber = (index: number) => {
    return `0${index + 1}`;
  };

  return (
    <section ref={classesSectionRef} id="classes" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative backdrop with parallax */}
      <motion.div
        style={{ y: bgWash1 }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#9E8FB2]/8 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgWash2 }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C56345]/8 blur-3xl pointer-events-none"
      />

      {/* Devanagari background watermark */}
      <motion.div
        style={{ y: watermarkClassesY }}
        className="absolute top-1/4 -left-12 text-[#2D2A26]/3 select-none font-serif text-8xl lg:text-[180px] font-black leading-none -rotate-6 pointer-events-none"
      >
        चित्रकला
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================ */}
        {/* Section Header with Required Title: “Learn Your Way Into Art”     */}
        {/* ================================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#2D2A26]/10 text-xs font-semibold text-[#265C5E] uppercase tracking-wider mb-4">
            <Palette className="w-3.5 h-3.5 text-[#C56345]" />
            <span>Studio Programs & Disciplines</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#265C5E] tracking-tight">
            Learn Your Way <span className="brush-highlight text-[#C56345]">Into Art</span>
          </h2>

          <div className="w-44 mx-auto mt-3 mb-6">
            <BrushStroke color="#C56345" className="h-3.5 w-full" />
          </div>

          <p className="text-sm sm:text-base text-[#2D2A26]/80 leading-relaxed max-w-2xl mx-auto">
            Explore our six foundational and expressive art disciplines. From classical pencil sketching and canvas painting to vibrant traditional Indian crafts, each session is adapted to your individual creative rhythm.
          </p>

          {/* Editable Content Notice */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4ECE1] text-[11px] text-[#2D2A26]/70 border border-[#2D2A26]/10">
            <Info className="w-3.5 h-3.5 text-[#C56345]" />
            <span>Course names & descriptions are customizable upon student consultation.</span>
          </div>
        </div>

        {/* ================================================================ */}
        {/* Six Interactive Cards Grid (Drawing, Painting, Sketching, etc.)   */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ART_CLASSES.map((course, index) => {
            const cardNumber = getCardNumber(index);
            const cardParallax =
              index % 3 === 0
                ? { y: cardCol1Y }
                : index % 3 === 1
                ? { y: cardCol2Y }
                : { y: cardCol3Y };

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={cardParallax}
                onClick={() => setSelectedClass(course)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#2D2A26]/10 art-canvas-frame shadow-xs cursor-pointer flex flex-col justify-between transition-all duration-400 hover:-translate-y-2 hover:shadow-xl"
              >
                <div>
                  {/* Card Image Container with Subtle Zoom on Hover */}
                  <div className="relative aspect-16/10 overflow-hidden bg-[#FAF6F0]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Gradient darkening on bottom for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Top Left: Step Number (01, 02, 03, etc.) */}
                    <div className="absolute top-3 left-3 bg-[#FAF6F0]/95 backdrop-blur-md px-3 py-1 rounded-full border border-black/10 font-serif font-black text-xs text-[#265C5E] tracking-wider shadow-xs">
                      {cardNumber}
                    </div>

                    {/* Top Right: Tag Badge */}
                    {course.tag && (
                      <div className="absolute top-3 right-3 bg-[#C56345] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                        {course.tag}
                      </div>
                    )}

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-serif text-2xl font-bold tracking-tight">
                        {course.title}
                      </h3>
                      <p className="text-[11px] text-white/80 font-medium">
                        {course.level}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Hover Accent Brush Stroke */}
                    <div className="overflow-hidden h-2.5 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <BrushStroke color="#C56345" className="h-2 w-full" />
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#2D2A26]/80 leading-relaxed line-clamp-3 mb-4">
                      {course.description}
                    </p>

                    {/* Quick Specs Pill */}
                    <div className="flex flex-wrap gap-2 text-[11px] text-[#2D2A26]/70">
                      <span className="inline-flex items-center gap-1 bg-[#FAF6F0] px-2.5 py-1 rounded-md border border-[#2D2A26]/8">
                        <Clock className="w-3 h-3 text-[#C56345]" />
                        {course.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#FAF6F0] px-2.5 py-1 rounded-md border border-[#2D2A26]/8">
                        <Users className="w-3 h-3 text-[#265C5E]" />
                        {course.batchSize}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Interactive Arrow Icon */}
                <div className="px-6 py-4 bg-[#FAF6F0]/60 border-t border-[#2D2A26]/8 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#265C5E] group-hover:text-[#C56345] transition-colors">
                    View Curriculum & Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#2D2A26]/10 flex items-center justify-center text-[#265C5E] group-hover:bg-[#C56345] group-hover:text-white group-hover:border-[#C56345] transition-all transform group-hover:translate-x-1 shadow-2xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner with WhatsApp Inquiry Trigger */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-white border border-[#2D2A26]/10 art-canvas-frame shadow-xs max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#C56345]/15 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#C56345]" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-serif font-bold text-base text-[#265C5E]">
                Need a Custom Studio Schedule or Batch Timing?
              </h4>
              <p className="text-xs text-[#2D2A26]/75 mt-0.5">
                We accommodate beginners, weekend hobbyists, and personalized private workshops.
              </p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Sonia Creations! I would like to inquire about class schedules and customized batch timings in Jaipur.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* ================================================================ */}
      {/* Interactive Class Details & Booking Modal                         */}
      {/* ================================================================ */}
      <AnimatePresence>
        {selectedClass && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClass(null)}
              className="fixed inset-0 bg-[#2D2A26]/60 backdrop-blur-xs"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#2D2A26]/15 overflow-hidden z-10 art-canvas-frame my-8"
            >
              {/* Image & Header */}
              <div className="relative aspect-16/8 bg-[#FAF6F0] overflow-hidden">
                <img
                  src={selectedClass.image}
                  alt={selectedClass.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <button
                  onClick={() => setSelectedClass(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#C56345] text-xs font-bold uppercase tracking-wider mb-2">
                    {selectedClass.category} Program
                  </div>
                  <h3 className="font-serif text-3xl font-bold tracking-tight">
                    {selectedClass.title}
                  </h3>
                  <p className="text-xs text-white/80">{selectedClass.level}</p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C56345] mb-2">
                    Program Overview
                  </h4>
                  <p className="text-sm text-[#2D2A26]/85 leading-relaxed">
                    {selectedClass.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#265C5E] mb-3">
                    What You Will Learn & Practice
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedClass.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#2D2A26]/80">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#FAF6F0] border border-[#2D2A26]/8 text-xs">
                  <div>
                    <span className="font-bold text-[#2D2A26] block">Session Duration:</span>
                    <span className="text-[#2D2A26]/75">{selectedClass.duration}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#2D2A26] block">Batch Format:</span>
                    <span className="text-[#2D2A26]/75">{selectedClass.batchSize}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#2D2A26] block">Art Materials:</span>
                    <span className="text-[#2D2A26]/75">High-grade studio materials provided</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#2D2A26] block">Batch Schedule:</span>
                    <span className="text-[#2D2A26]/75">{selectedClass.schedule}</span>
                  </div>
                </div>

                {/* Editable note */}
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-800 flex items-center gap-2">
                  <Info className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>
                    Course curriculum is adaptable to individual student interests and pace.
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => {
                      const id = selectedClass.id;
                      setSelectedClass(null);
                      if (onSelectClassForBooking) {
                        onSelectClassForBooking(id);
                      }
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#C56345] hover:bg-[#A84E33] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Book Trial Session</span>
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Sonia Creations! I would like to inquire about the ${selectedClass.title} class at your Bajaj Nagar studio in Jaipur.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
