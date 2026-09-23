/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CreativeProcess } from './components/CreativeProcess';
import { ClassesSection } from './components/ClassesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookClassModal } from './components/BookClassModal';

export default function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [preselectedClassId, setPreselectedClassId] = useState<string | undefined>();

  const handleOpenBookModal = (classId?: string) => {
    setPreselectedClassId(classId);
    setIsBookModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2D2A26] flex flex-col selection:bg-[#C56345]/20 selection:text-[#C56345]">
      {/* Top Sticky Navigation with "Book a Class" Button */}
      <Navbar onBookClass={() => handleOpenBookModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Split screen with 2s entrance sequence) */}
        <Hero onBookClass={() => handleOpenBookModal()} />

        {/* 2. About Section (“More Than Art. It’s a Creative Journey.”) */}
        <AboutSection />

        {/* 3. Creative Process (01 DISCOVER, 02 LEARN, 03 CREATE, 04 EXPRESS) */}
        <CreativeProcess />

        {/* 4. Classes Section (“Learn Your Way Into Art”) */}
        <ClassesSection onSelectClassForBooking={(id) => handleOpenBookModal(id)} />

        {/* 5. Gallery Section (Exhibition wall masonry layout) */}
        <GallerySection />

        {/* 6. Reviews Section (4.9 ★★★★★ 41 Reviews with horizontal carousel) */}
        <ReviewsSection />

        {/* 7. Instagram Section (“Follow Our Creative Journey”) */}
        <InstagramSection />

        {/* 8. Contact & Studio Location Section (“Ready to Create Something Beautiful?”) */}
        <ContactSection />
      </main>

      {/* Footer (Minimal artistic with exact contact & links) */}
      <Footer />

      {/* Floating Call, WhatsApp, Instagram & Back to Top action bar */}
      <FloatingActions />

      {/* Interactive Book a Class / Studio Trial Modal */}
      <BookClassModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        preselectedClassId={preselectedClassId}
      />
    </div>
  );
}
