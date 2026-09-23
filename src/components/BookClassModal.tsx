import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Phone, CheckCircle, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, ART_CLASSES } from '../data/artData';
import { BrushStroke } from './BrushStrokes';

interface BookClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedClassId?: string;
}

export function BookClassModal({ isOpen, onClose, preselectedClassId }: BookClassModalProps) {
  const [selectedClass, setSelectedClass] = useState(
    preselectedClassId || 'painting'
  );
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [timing, setTiming] = useState('Weekend Morning (10:30 AM)');
  const [note, setNote] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const className = ART_CLASSES.find((c) => c.id === selectedClass)?.title || 'Art Class';
    const message = `Hello Sonia Creations! I would like to book a class / trial session:\n- Student Name: ${fullName || 'Art Enthusiast'}\n- Class: ${className}\n- Preferred Time: ${timing}\n- Phone: ${phone || 'Provided'}\n${note ? `- Additional Note: ${note}` : ''}`;
    
    // Open WhatsApp
    window.open(
      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    setIsBooked(true);
  };

  const handleResetAndClose = () => {
    setIsBooked(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-[#2D2A26]/60 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-[#FAF6F0] rounded-2xl shadow-2xl border border-[#2D2A26]/15 overflow-hidden z-10 art-canvas-frame my-8"
        >
          {/* Header Banner */}
          <div className="bg-linear-to-r from-[#265C5E] to-[#1B4547] text-white p-6 relative">
            <button
              onClick={handleResetAndClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold uppercase tracking-wider text-amber-200 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Batches · Jaipur</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Book a Class at Sonia Creations
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1">
              Select your art program and schedule a trial session at our Bajaj Nagar studio.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {isBooked ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#265C5E]">
                  Inquiry Forwarded!
                </h4>
                <p className="text-sm text-[#2D2A26]/80 max-w-sm mx-auto leading-relaxed">
                  Your booking request is opening on WhatsApp. You can also call us directly at{' '}
                  <strong className="text-[#C56345]">{BUSINESS_INFO.displayPhone}</strong> to confirm your slot immediately.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleResetAndClose}
                    className="px-6 py-2.5 rounded-lg bg-[#C56345] text-white font-semibold text-sm hover:bg-[#A84E33] transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Select Class */}
                <div>
                  <label className="block text-xs font-bold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Select Art Program <span className="text-[#C56345]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {ART_CLASSES.map((c) => (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => setSelectedClass(c.id)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                          selectedClass === c.id
                            ? 'bg-[#C56345] text-white border-[#C56345] shadow-sm'
                            : 'bg-white text-[#2D2A26] border-[#2D2A26]/10 hover:border-[#C56345]/50'
                        }`}
                      >
                        <span className="block truncate">{c.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Schedule */}
                <div>
                  <label className="block text-xs font-bold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Preferred Batch Time
                  </label>
                  <select
                    value={timing}
                    onChange={(e) => setTiming(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#2D2A26]/15 bg-white text-sm focus:outline-hidden focus:border-[#C56345]"
                  >
                    <option value="Weekday Morning (10:30 AM - 12:30 PM)">Weekday Morning (10:30 AM - 12:30 PM)</option>
                    <option value="Weekday Afternoon (3:00 PM - 5:00 PM)">Weekday Afternoon (3:00 PM - 5:00 PM)</option>
                    <option value="Weekday Evening (5:00 PM - 7:00 PM)">Weekday Evening (5:00 PM - 7:00 PM)</option>
                    <option value="Weekend Morning (10:30 AM - 12:30 PM)">Weekend Morning (10:30 AM - 12:30 PM)</option>
                    <option value="Weekend Special Masterclass">Weekend Special Masterclass</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#C56345]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#2D2A26]/40 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aanya Singhania"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-[#2D2A26]/15 bg-white text-sm focus:outline-hidden focus:border-[#C56345]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number <span className="text-[#C56345]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#2D2A26]/40 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 097842 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-[#2D2A26]/15 bg-white text-sm focus:outline-hidden focus:border-[#C56345]"
                    />
                  </div>
                </div>

                {/* Optional Note */}
                <div>
                  <label className="block text-xs font-bold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Prior Experience or Note (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us if you are a beginner, enrolling a child, or interested in a specific technique..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#2D2A26]/15 bg-white text-sm focus:outline-hidden focus:border-[#C56345] resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#C56345] hover:bg-[#A84E33] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4.5 h-4.5" />
                    <span>Confirm & Book on WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-[#2D2A26]/60 text-center mt-2">
                    Or call our studio directly at{' '}
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="font-semibold text-[#265C5E] underline">
                      {BUSINESS_INFO.displayPhone}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
