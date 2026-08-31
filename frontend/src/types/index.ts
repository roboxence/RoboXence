export interface Coordinator {
  name: string;
  phone: string;
  email: string;
  role: string;
}

export interface BrandColors {
  primaryHex: string;
  secondaryHex: string;
  accentGlow: string;
  badgeBorder?: string;
  badgeBg?: string;
  badgeText?: string;
}

export interface RoboxenceEvent {
  _id?: string;
  id: string;
  title: string;
  subtitle: string;
  category: string;
  format: string;
  price?: number;
  entryFee?: string;
  description: string;
  image: string;
  coordinator: Coordinator;
  cashPrize: string; // "Upto ₹4000/-"
  googleFormUrl?: string;
  theme?: string;
  brandColors?: BrandColors;
  iconName?: string;
  keyRules: string[];
  maxParticipants?: number;
  status?: 'open' | 'closed' | 'upcoming';
  order?: number;
}

export interface FestPillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface FestConfig {
  eventName: string;
  year: string;
  tagline: string;
  subTagline: string;
  department: string;
  collegeName: string;
  collegeShort: string;
  collegeAddress: string;
  collegeLogoAsset: string;
  mainEventLogoAsset: string;
  headOfEvent: {
    name: string;
    title: string;
    phone: string;
    email: string;
    department: string;
  };
  instagramEvent: string;
  instagramCollege: string;
  instagramEventHandle: string;
  instagramCollegeHandle: string;
  pillars: FestPillar[];
}

export interface TeamMember {
  name: string;
  email: string;
  phone: string;
  college?: string;
  branch?: string;
  year?: string;
}
