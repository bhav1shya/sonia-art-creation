// ==============================================================================
// SONIA CREATIONS - ART STUDIO & SCHOOL CENTRAL DATA STORE
// ==============================================================================
// OWNER INSTRUCTIONS FOR UPDATING CONTENT:
// 1. LOGO & BRANDING: Replace businessName, hindiName, tagline below.
// 2. CONTACT & LOCATION: Update address, landmark, phone, plusCode in BUSINESS_INFO.
// 3. COURSE INFORMATION: Edit or add classes in ART_CLASSES array below.
// 4. ARTWORK GALLERY: Replace image URLs, titles, and mediums in GALLERY_ARTWORKS.
// 5. REVIEWS: Add or adjust verified Google reviews in REVIEW_METRICS.placeholderReviews.
// 6. INSTAGRAM: Update instagramUrl, handle, and post image URLs in INSTAGRAM_POSTS.
// ==============================================================================

import { ArtClass, Artwork, ContactDetails, InstagramPost, ReviewStat, WhyFeature } from '../types';

/**
 * Verified Business & Studio Information
 * To update contact details or location, edit this object.
 */
export const BUSINESS_INFO: ContactDetails = {
  businessName: 'Sonia Creations',
  hindiName: 'सोनिया क्रिएशन्स',
  category: 'Art School',
  tagline: 'Where Creativity Comes to Life',
  address: 'A-24, Tonk Rd, New Light Colony, Bajaj Nagar, Jaipur, Rajasthan 302018',
  landmark: 'Near Tonk Road, Bajaj Nagar',
  city: 'Jaipur, Rajasthan',
  pincode: '302018',
  plusCode: 'VQ7X+X7 Jaipur, Rajasthan',
  phone: '09784238989',
  displayPhone: '097842 38989',
  whatsappNumber: '919784238989',
  instagramUrl: 'https://www.instagram.com/sonia__creation/',
  instagramHandle: '@sonia__creation',
  googleRating: 4.9,
  reviewsCount: 41,
  isWomenOwned: true,
  timings: [
    { days: 'Monday – Saturday', hours: '10:00 AM – 7:00 PM' },
    { days: 'Sunday', hours: 'Workshops & Prior Appointments' }
  ]
};

export const WHY_FEATURES: WhyFeature[] = [
  {
    title: 'Creative Learning',
    description:
      'Immersive curriculum designed to awaken natural imagination, explore unconventional techniques, and nurture original artistic identity.',
    icon: 'Sparkles',
    color: '#C56345',
    bgColor: 'bg-[#C56345]/10'
  },
  {
    title: 'Personalized Guidance',
    description:
      'Intimate studio batch sizes allow one-on-one brushwork correction, customized pacing, and individual constructive feedback for every student.',
    icon: 'HeartHandshake',
    color: '#265C5E',
    bgColor: 'bg-[#265C5E]/10'
  },
  {
    title: 'Artistic Environment',
    description:
      'A serene, sunlit studio haven on Tonk Road filled with professional easels, rich pigments, and a peaceful ambiance conducive to deep creative focus.',
    icon: 'Palette',
    color: '#9E8FB2',
    bgColor: 'bg-[#9E8FB2]/15'
  },
  {
    title: 'Skill Development',
    description:
      'Comprehensive foundation covering classical drawing fundamentals, proportion, color harmony, composition, and archival finishing across mediums.',
    icon: 'GraduationCap',
    color: '#C5A059',
    bgColor: 'bg-[#C5A059]/15'
  }
];

export const ART_CLASSES: ArtClass[] = [
  {
    id: 'drawing',
    title: 'Drawing',
    category: 'Drawing',
    duration: '1.5 - 2 Hours / Session',
    batchSize: 'Small Batches (6-8 Students)',
    level: 'Beginner to Intermediate',
    description: 'Master observational drawing, geometric construction, optical proportions, linear perspective, and freehand control on high-grade paper.',
    highlights: [
      'Fundamental shape construction and contour drawing',
      'One-point and two-point architectural perspective',
      'Hand-eye coordination and observational accuracy',
      'Foundational preparation for painting and fine art studies'
    ],
    materialsIncluded: true,
    schedule: 'Morning & Evening Batches (Mon - Sat)',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    iconName: 'Pencil',
    tag: 'Core Foundation',
    isPlaceholderNote: 'Editable course placeholder – curriculum customizable upon student consultation'
  },
  {
    id: 'painting',
    title: 'Painting',
    category: 'Painting',
    duration: '2 Hours / Session',
    batchSize: 'Personalized Attention (6 Students)',
    level: 'All Levels',
    description: 'Explore color harmony, brush manipulation, acrylic and oil blending, palette knife impasto textures, and stretched canvas execution.',
    highlights: [
      'Warm and cool color theory, tonal values and chromatic mixing',
      'Stretched canvas preparation and gesso priming',
      'Landscape, floral and contemporary abstract studies',
      'Varnishing and archival preservation of completed canvases'
    ],
    materialsIncluded: true,
    schedule: 'Flexible Weekday & Weekend Batches',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    iconName: 'Palette',
    tag: 'Most Popular',
    isPlaceholderNote: 'Editable course placeholder – curriculum customizable upon student consultation'
  },
  {
    id: 'sketching',
    title: 'Sketching',
    category: 'Sketching',
    duration: '1.5 Hours / Session',
    batchSize: 'Small Batches (6-8 Students)',
    level: 'Beginner to Advanced',
    description: 'Develop dramatic chiaroscuro shading, rapid gestural sketching, graphite grading from 2H to 8B, willow charcoal, and portraiture shading.',
    highlights: [
      'Cross-hatching, stippling, and continuous tonal blending',
      'Willow and compressed charcoal rendering on toned paper',
      'Facial anatomy, drapery folds, and realistic light studies',
      'Expressive monochrome sketches and still life drawing'
    ],
    materialsIncluded: true,
    schedule: 'Daily Batches Available',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    iconName: 'PenTool',
    tag: 'Classic Art',
    isPlaceholderNote: 'Editable course placeholder – curriculum customizable upon student consultation'
  },
  {
    id: 'creative-art',
    title: 'Creative Art',
    category: 'Creative Art',
    duration: '2 Hours / Session',
    batchSize: 'Artisan Group (6-8 Students)',
    level: 'All Levels',
    description: 'Experiment freely with mixed media, textural collages, modern abstract expressions, folk art fusion, and experimental pigment combinations.',
    highlights: [
      'Textural modeling pastes, gold foil, and layered mixed media',
      'Intuitive abstract painting and emotional color expression',
      'Contemporary Rajasthani folk fusion and decorative wall art',
      'Guidance to create signature statement pieces for homes & gifts'
    ],
    materialsIncluded: true,
    schedule: 'Wednesday & Saturday Workshops',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkles',
    tag: 'Expressive',
    isPlaceholderNote: 'Editable course placeholder – curriculum customizable upon student consultation'
  },
  {
    id: 'kids-art',
    title: 'Kids Art',
    category: 'Kids Art',
    duration: '1.5 Hours / Session',
    batchSize: 'Safe & Engaging Studio (8 Kids Max)',
    level: 'Junior Artists (Ages 5 - 14)',
    description: 'A joyful, encouraging studio space designed to ignite young imaginations, strengthen fine motor skills, and spark a lifelong love for art.',
    highlights: [
      'Oil pastels, poster colors, water-based gouache, and clay crafts',
      'Storytelling through illustration and color exploration',
      'Friendly, patient mentorship tailored to each child’s rhythm',
      'School art competition preparation and portfolio building'
    ],
    materialsIncluded: true,
    schedule: 'Afternoon & Weekend Morning Batches',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    iconName: 'Smile',
    tag: 'Ages 5-14',
    isPlaceholderNote: 'Editable course placeholder – curriculum customizable upon student consultation'
  },
  {
    id: 'advanced-art',
    title: 'Advanced Art',
    category: 'Advanced Art',
    duration: '2.5 Hours / Session',
    batchSize: 'Masterclass Mentorship (4-5 Students)',
    level: 'Intermediate & Advanced',
    description: 'Rigorous studio mentorship for dedicated creators, fine arts entrance aspirants, and artists building exhibition-worthy signature collections.',
    highlights: [
      'Advanced classical oil glazing and fat-over-lean discipline',
      'Intricate traditional Indian miniature and Pichwai detailing',
      'Complex composition layout and portfolio development',
      'Individual artist critique, exhibition curation, and pricing advice'
    ],
    materialsIncluded: true,
    schedule: 'Specialized Mentorship Batches',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=800&q=80',
    iconName: 'Award',
    tag: 'Masterclass',
    isPlaceholderNote: 'Editable course placeholder – curriculum customizable upon student consultation'
  }
];

export const GALLERY_ARTWORKS: Artwork[] = [
  {
    id: 'art-1',
    title: 'Sunlit Terracotta Haven',
    medium: 'Acrylic & Impasto Knife on Stretched Linen',
    category: 'canvas',
    dimensions: '30" × 40"',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    description: 'A rich textural study exploring the architectural warmth of Jaipur clay facades, offset with peaceful teal undertones.',
    artistNote: 'Hand-painted canvas placeholder demonstrating heavy body acrylics and palette knife layering in our studio sessions.',
    palette: ['#C56345', '#FAF6F0', '#265C5E', '#D8765A']
  },
  {
    id: 'art-2',
    title: 'Heritage Lotus & Golden Pichwai',
    medium: 'Natural Mineral Pigments with 24K Leaf Detailing',
    category: 'traditional',
    dimensions: '24" × 36"',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=85',
    description: 'An ode to sacred Shrinathji pond motifs, miniature flora, and handcrafted gold foil highlights inspired by Rajasthani heritage.',
    artistNote: 'Fine squirrel-hair brush precision work practiced in our traditional folk art module.',
    palette: ['#265C5E', '#C56345', '#9E8FB2', '#EFE8DF']
  },
  {
    id: 'art-3',
    title: 'Nocturne in Teal & Lavender',
    medium: 'Classical Oil on Stretched Belgian Linen',
    category: 'canvas',
    dimensions: '36" × 48"',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85',
    description: 'Subtle glazing capturing ethereal dusk transitions across evening landscapes with contemplative stillness and depth.',
    artistNote: 'Demonstrating classical wet-on-dry oil glaze transitions and lost-and-found edges.',
    palette: ['#1B4547', '#9E8FB2', '#F0EBF5', '#265C5E']
  },
  {
    id: 'art-4',
    title: 'Student Canvas: Floral Radiance',
    medium: 'Acrylic on Stretched Canvas (Student Showcase)',
    category: 'student',
    dimensions: '18" × 24"',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85',
    description: 'Completed in our 8-week painting foundation course by an adult hobbyist learning blending and color balance from scratch.',
    artistNote: 'Demonstrating rapid student progress under personalized step-by-step studio mentorship.',
    palette: ['#9E8FB2', '#FAF6F0', '#C56345', '#8A78A0']
  },
  {
    id: 'art-5',
    title: 'The Rajasthani Elder: Light & Shade',
    medium: 'Charcoal & Graphite on Toned Cotton Paper',
    category: 'sketching',
    dimensions: '20" × 28"',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85',
    description: 'High-contrast portrait capturing expressive lines, weathered wisdom, and authentic turban folds in Jaipur.',
    artistNote: 'Taught in our fundamental sketching and chiaroscuro studio course.',
    palette: ['#2D2A26', '#EFE8DF', '#C56345', '#9E8FB2']
  },
  {
    id: 'art-6',
    title: 'Student Charcoal: Architectural Study',
    medium: 'Willow Charcoal on Archival Cartridge Paper',
    category: 'student',
    dimensions: '16" × 20"',
    image: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1200&q=85',
    description: 'Perspective drawing and shadow gradation created during the student sketching workshop at Bajaj Nagar.',
    artistNote: 'Student progress artwork showcasing fundamental linear perspective mastery.',
    palette: ['#2D2A26', '#9E8FB2', '#FAF6F0', '#C56345']
  }
];

export const REVIEW_METRICS: ReviewStat = {
  rating: 4.9,
  totalReviews: 41,
  source: 'Google Verified Reviews',
  distribution: [
    { stars: 5, percentage: 96 },
    { stars: 4, percentage: 4 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ],
  pillars: [
    {
      title: 'Individualized Mentorship',
      description: 'Personalized pacing and attentive one-on-one corrections for every student, whether a first-time beginner or seasoned hobbyist.',
      icon: 'HeartHandshake'
    },
    {
      title: 'Serene Bajaj Nagar Sanctuary',
      description: 'A calm, sunlit art studio atmosphere located on Tonk Road, designed to cultivate deep creative immersion away from city distractions.',
      icon: 'Sparkles'
    },
    {
      title: 'Mastery Across Diverse Mediums',
      description: 'Comprehensive instruction spanning acrylics, classical oil, charcoal sketching, watercolors, and traditional Rajasthani heritage arts.',
      icon: 'Palette'
    },
    {
      title: 'Welcoming to All Age Groups',
      description: 'Patient and encouraging atmosphere where children discover boundless confidence and adults rediscover their artistic passions.',
      icon: 'Users'
    }
  ],
  placeholderReviews: [
    {
      id: 'rev-1',
      author: 'Pooja Agarwal',
      rating: 5,
      date: 'Google Review • Student',
      content: 'Learning at Sonia Creations has been a truly therapeutic and enriching experience. The personalized attention given to each technique and brush stroke made even complex canvas painting feel natural and accessible.',
      courseTaken: 'Painting & Canvas Workshop',
      isVerifiedGoogleReview: true,
      avatarColor: 'bg-[#C56345]'
    },
    {
      id: 'rev-2',
      author: 'Rajeev Sharma',
      rating: 5,
      date: 'Google Review • Parent',
      content: 'We enrolled our 10-year-old daughter for the creative art and sketching classes. Her observational drawing and artistic focus have improved tremendously. The studio in Bajaj Nagar is peaceful, encouraging, and wonderfully managed.',
      courseTaken: 'Kids Art & Sketching',
      isVerifiedGoogleReview: true,
      avatarColor: 'bg-[#265C5E]'
    },
    {
      id: 'rev-3',
      author: 'Ananya Rathore',
      rating: 5,
      date: 'Google Review • Art Enthusiast',
      content: 'The traditional Rajasthani and Pichwai folk art guidance here is unmatched in Jaipur. Beautiful atmosphere, step-by-step guidance from scratch, and genuine passion for teaching fine art.',
      courseTaken: 'Heritage & Traditional Art',
      isVerifiedGoogleReview: true,
      avatarColor: 'bg-[#9E8FB2]'
    }
  ]
};

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    caption: 'Another vibrant canvas coming to life at our Bajaj Nagar studio! Layering terracotta warmth with deep teal hues. ✨🎨 #SoniaCreations #JaipurArt',
    likes: '142 likes',
    postDate: 'Recent Studio Reel',
    url: 'https://www.instagram.com/sonia__creation/',
    type: 'post'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=800&q=80',
    caption: 'Pichwai lotus detailing in progress. Traditional Indian art requires deep patience, mindful brush control, and immense devotion. 🪷🌿 #PichwaiArt #RajasthanHeritage',
    likes: '198 likes',
    postDate: 'Weekend Workshop',
    url: 'https://www.instagram.com/sonia__creation/',
    type: 'reel'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    caption: 'Charcoal portraiture masterclass. Understanding how light sculpts form and emotion on paper. Outstanding work by our students! ✏️🖤 #SketchingClassJaipur',
    likes: '165 likes',
    postDate: 'Student Showcase',
    url: 'https://www.instagram.com/sonia__creation/',
    type: 'post'
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    caption: 'Watercolor florals: Letting pigment breathe with natural water flow. Join our morning creative batches on Tonk Road. 🌸💧 #WatercolorJaipur',
    likes: '220 likes',
    postDate: 'Morning Batch',
    url: 'https://www.instagram.com/sonia__creation/',
    type: 'reel'
  },
  {
    id: 'ig-5',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    caption: 'The joy of fearless young artists! Creative foundation workshops on Saturday mornings at Sonia Creations. 🌈🖍️ #YoungArtistsJaipur',
    likes: '184 likes',
    postDate: 'Kids Foundation',
    url: 'https://www.instagram.com/sonia__creation/',
    type: 'post'
  },
  {
    id: 'ig-6',
    imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
    caption: 'Raw palettes, pure pigments, and endless possibilities. Where creativity truly comes to life in the Pink City! 🎨📍 Tonk Rd, Jaipur #SoniaCreations',
    likes: '260 likes',
    postDate: 'Studio Life',
    url: 'https://www.instagram.com/sonia__creation/',
    type: 'post'
  }
];

