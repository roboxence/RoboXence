import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { RoboxenceEvent, FestConfig } from '../types';

// Fallback / Initial Seed Data
export const FALLBACK_CONFIG: FestConfig = {
  eventName: "ROBOXENCE",
  year: "2026",
  tagline: "EMERGE · INNOVATE · EXCEL",
  subTagline: "Department of Robotics and Artificial Intelligence presents ROBOXENCE — 4 events, one day, one universe.",
  department: "Department of Robotics and Artificial Intelligence",
  collegeName: "St. Vincent Pallotti College of Engineering and Technology, Nagpur",
  collegeShort: "SVPCET NAGPUR",
  collegeAddress: "St. Vincent Pallotti College of Engineering and Technology, Gavsi Manapur, Wardha Road, Nagpur, Maharashtra 441108",
  collegeLogoAsset: "/assets/clg_logo.jpeg",
  mainEventLogoAsset: "/assets/main_event_logo.jpeg",
  headOfEvent: {
    name: "Kaustubh Daoo",
    title: "Head of Departmental Event",
    phone: "+91 90496 84734",
    email: "daookaustubh@gmail.com",
    department: "Department of Robotics and Artificial Intelligence",
  },
  instagramEvent: "https://www.instagram.com/roboxence.official_",
  instagramCollege: "https://www.instagram.com/svpcetnagpur",
  instagramEventHandle: "@roboxence.official_",
  instagramCollegeHandle: "@svpcetnagpur",
  pillars: [
    {
      title: "INNOVATION",
      subtitle: "Autonomous Ideation & Tech Vectors",
      description: "Pushing the frontiers of technical reasoning, rapid problem synthesis, and creative ideation under competitive constraints.",
      iconName: "Cpu",
      accentColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    },
    {
      title: "TECHNOLOGY",
      subtitle: "Binary Logic & Multimodal AI",
      description: "Harnessing algorithmic number conversion speed and modern generative AI tools for impactful digital campaigns.",
      iconName: "Sparkles",
      accentColor: "border-pink-500/40 text-pink-400 bg-pink-500/10",
    },
    {
      title: "COMPETITION",
      subtitle: "Parallel Arenas & Cash Prizes",
      description: "High-stakes single-day parallel challenges testing forensic deduction, technical agility, and awarding lucrative cash prizes.",
      iconName: "Binary",
      accentColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    },
  ],
};

export const FALLBACK_EVENTS: RoboxenceEvent[] = [
  {
    id: "spin-think-build",
    title: "SPIN THINK BUILD",
    subtitle: "Problem + Tech Randomizer Ideathon",
    category: "Problem + Tech Randomizer Ideathon",
    format: "Team-based (1–5 members)",
    price: 3000,
    description: "Teams spin a randomizer wheel to receive an unexpected combination of a real-world Problem and Technology. Teams must brainstorm, architect an innovative, practical solution concept on the spot, and pitch it to judges in a 2–3 minute presentation (no coding or physical prototype required).",
    image: "/assets/spin_think_build_2.jpeg",
    coordinator: {
      name: "Tanvi Jangid",
      phone: "+91 97660 65913",
      email: "tanvijangid154@gmail.com",
      role: "Event Coordinator",
    },
    cashPrize: "Upto ₹3000/-",
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdEr66W7ZrW5GgnKzHoh9kMDiJMcyblmzWq75OfHcUfCN0axQ/viewform",
    brandColors: {
      primaryHex: "#00f0ff",
      secondaryHex: "#38bdf8",
      accentGlow: "rgba(0, 240, 255, 0.4)",
      badgeBorder: "border-cyan-400/40 hover:border-cyan-400",
      badgeBg: "bg-cyan-500/15",
      badgeText: "text-cyan-300",
    },
    iconName: "Compass",
    keyRules: [
      "Wheel spin assigns 1 real-world Problem + 1 emerging Technology.",
      "Teams brainstorm & architect an innovative solution concept on the spot.",
      "2–3 minute presentation and pitch before the panel of judges.",
      "No coding or physical prototype required."
    ],
    maxParticipants: 5,
    status: "open",
    order: 1
  },
  {
    id: "decode-and-dab",
    title: "DECODE & DAB (Digital Housie)",
    subtitle: "Binary Number Speed & Logic Challenge",
    category: "Binary Number Speed & Logic Challenge",
    format: "Solo or Duo",
    price: 2000,
    description: "A technical algorithmic twist on traditional Tambola/Housie. Tickets contain binary representations instead of decimals. The host announces decimal numbers; participants have 10 seconds to convert to binary and mark their ticket. Prize tiers: Full House, Middle Row, and Four Corners.",
    image: "/assets/decode_and_dab.jpeg",
    coordinator: {
      name: "Simran Mujariya",
      phone: "+91 95276 31244",
      email: "smujariya25@gmail.com",
      role: "Event Coordinator",
    },
    cashPrize: "Upto ₹2000/-",
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSej1j2qGis3Cccskh--akeGh9fS278hpE1bdNFFBy_rrfJ8wQ/viewform",
    brandColors: {
      primaryHex: "#ff007f",
      secondaryHex: "#ec4899",
      accentGlow: "rgba(255, 0, 127, 0.4)",
      badgeBorder: "border-pink-500/40 hover:border-pink-400",
      badgeBg: "bg-pink-500/15",
      badgeText: "text-pink-300",
    },
    iconName: "Binary",
    keyRules: [
      "Tickets contain binary representations instead of decimals.",
      "Host announces decimal numbers live.",
      "Participants have 10 seconds to convert decimal to binary and mark their ticket.",
      "Prizes awarded for Full House, Middle Row, and Four Corners."
    ],
    maxParticipants: 2,
    status: "open",
    order: 2
  },
  {
    id: "mystique",
    title: "MYSTIQUE",
    subtitle: "Technical Mystery & Forensic Investigation",
    category: "Technical Mystery & Forensic Investigation",
    format: "Team-based (3–4 members, 30 mins per case, 2 cases per team)",
    price: 2000,
    description: "A technical investigation arena testing deduction, telemetry analysis, and digital forensics. Teams choose a Hardware or Software mystery track, analyze case dossiers with system logs and clues to determine root causes, answer questions, and defend their conclusions.",
    image: "/assets/mystique.jpeg",
    coordinator: {
      name: "Prajwal Parate",
      phone: "+91 76205 65912",
      email: "prajwalparate870@gmail.com",
      role: "Event Coordinator",
    },
    cashPrize: "Upto ₹2000/-",
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdu2Vao8IQ0V6cMS-o74B_VYCaxDw_z67Sq4PnBWb7yZefRAg/viewform?usp=publish-editor",
    brandColors: {
      primaryHex: "#a855f7",
      secondaryHex: "#8b5cf6",
      accentGlow: "rgba(168, 85, 247, 0.4)",
      badgeBorder: "border-purple-500/40 hover:border-purple-400",
      badgeBg: "bg-purple-500/15",
      badgeText: "text-purple-300",
    },
    iconName: "Search",
    keyRules: [
      "Choose between Hardware or Software mystery track.",
      "Analyze case dossiers containing system logs, anomalies, and forensic clues.",
      "Determine root causes and answer analytical questions within 30 mins per case (2 cases per team).",
      "Defend conclusions and forensic deductions before the jury."
    ],
    maxParticipants: 4,
    status: "open",
    order: 3
  },
  {
    id: "visionix",
    title: "VISIONIX",
    subtitle: "Generative AI & Digital Campaign Challenge",
    category: "Generative AI & Digital Campaign Challenge",
    format: "Solo or Team (1–4 members)",
    price: 2000,
    theme: "AI Imagination. Smarter Ads. Greater Impact.",
    description: "Participants leverage modern Generative AI tools (text, image, video, and voice synthesis) to conceptualize, design, and pitch a futuristic product advertising campaign.",
    image: "/assets/visionix.jpeg",
    coordinator: {
      name: "Vanshika Tamgadge",
      phone: "+91 94048 57053",
      email: "vanshikatamgadge5566@gmail.com",
      role: "Event Coordinator",
    },
    cashPrize: "Upto ₹3000/-",
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScXgs52g9tb8F4RL0oabOEXBLYTL1db-_UBi3NuoMEMv92foQ/viewform",
    brandColors: {
      primaryHex: "#06b6d4",
      secondaryHex: "#10b981",
      accentGlow: "rgba(6, 182, 212, 0.4)",
      badgeBorder: "border-teal-400/40 hover:border-teal-400",
      badgeBg: "bg-teal-500/15",
      badgeText: "text-teal-300",
    },
    iconName: "Sparkles",
    keyRules: [
      "Theme: \"AI Imagination. Smarter Ads. Greater Impact.\"",
      "Leverage modern Generative AI tools (text, image, video, and voice synthesis).",
      "Conceptualize, design, and pitch a futuristic product advertising campaign.",
      "Judged on creative vision, prompt engineering excellence, and campaign impact."
    ],
    maxParticipants: 4,
    status: "open",
    order: 4
  }
];

// Fallback Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAVlVUPAwzSA9IKGbKNmS7_2pDMd7C4Uvs",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "roboxence-2k26.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "roboxence-2k26",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "roboxence-2k26.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "357463046442",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:357463046442:web:b711f7d34213277462c653",
};

let db: any = null;

try {
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
} catch (e) {
  console.warn("Firestore initialization running in local fallback mode:", e);
}

export async function fetchEventsFromFirestore(): Promise<RoboxenceEvent[]> {
  try {
    if (!db || !import.meta.env.VITE_FIREBASE_PROJECT_ID) {
      return FALLBACK_EVENTS;
    }
    const eventsCol = collection(db, 'events');
    const snapshot = await getDocs(eventsCol);
    if (snapshot.empty) {
      return FALLBACK_EVENTS;
    }
    const events: RoboxenceEvent[] = [];
    snapshot.forEach((docSnap) => {
      events.push({ id: docSnap.id, ...(docSnap.data() as any) } as RoboxenceEvent);
    });
    return events.sort((a, b) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.warn("Falling back to local events:", error);
    return FALLBACK_EVENTS;
  }
}

export async function fetchConfigFromFirestore(): Promise<FestConfig> {
  try {
    if (!db || !import.meta.env.VITE_FIREBASE_PROJECT_ID) {
      return FALLBACK_CONFIG;
    }
    const configDoc = doc(db, 'config', 'fest');
    const snapshot = await getDoc(configDoc);
    if (snapshot.exists()) {
      return snapshot.data() as FestConfig;
    }
    return FALLBACK_CONFIG;
  } catch (error) {
    console.warn("Falling back to local config:", error);
    return FALLBACK_CONFIG;
  }
}
