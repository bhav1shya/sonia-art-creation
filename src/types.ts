export interface ArtClass {
  id: string;
  title: string;
  category: string;
  duration: string;
  batchSize: string;
  level: string;
  description: string;
  highlights: string[];
  materialsIncluded: boolean;
  schedule: string;
  image: string;
  iconName: string;
  tag?: string;
  isPlaceholderNote?: string;
}

export interface Artwork {
  id: string;
  title: string;
  medium: string;
  category: 'all' | 'canvas' | 'traditional' | 'sketching' | 'watercolor' | 'studio' | 'student';
  dimensions: string;
  image: string;
  description: string;
  artistNote?: string;
  palette: string[];
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  courseTaken: string;
  isVerifiedGoogleReview: boolean;
  avatarColor: string;
}

export interface WhyFeature {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

export interface ReviewStat {
  rating: number;
  totalReviews: number;
  source: string;
  distribution: {
    stars: number;
    percentage: number;
  }[];
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  placeholderReviews: CustomerReview[];
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  postDate: string;
  url: string;
  type: 'post' | 'reel';
}

export interface ContactDetails {
  businessName: string;
  hindiName: string;
  tagline: string;
  category: string;
  address: string;
  landmark: string;
  city: string;
  pincode: string;
  plusCode: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  instagramUrl: string;
  instagramHandle: string;
  googleRating: number;
  reviewsCount: number;
  isWomenOwned: boolean;
  timings: {
    days: string;
    hours: string;
  }[];
}

