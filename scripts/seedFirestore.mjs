import fs from 'fs';
import path from 'path';
import os from 'os';

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID || process.env.VITE_FIREBASE_PROJECT_ID || 'roboxence-2k26';

const FEST_CONFIG = {
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

const EVENTS = [
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

function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') {
    return Number.isInteger(val) ? { integerValue: val.toString() } : { doubleValue: val };
  }
  if (typeof val === 'string') return { stringValue: val };
  if (Array.isArray(val)) {
    return {
      arrayValue: {
        values: val.map(toFirestoreValue)
      }
    };
  }
  if (typeof val === 'object') {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      if (v !== undefined) {
        fields[k] = toFirestoreValue(v);
      }
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

function toFirestoreDoc(obj) {
  const fields = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) {
      fields[k] = toFirestoreValue(v);
    }
  }
  return { fields };
}

async function getAdminAccessToken() {
  // Check 1: Explicit Service Account file path
  const saPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || 
                 (fs.existsSync(path.resolve('./serviceAccountKey.json')) ? path.resolve('./serviceAccountKey.json') : null);

  if (saPath && fs.existsSync(saPath)) {
    console.log(`[Auth] Using Service Account credential from: ${saPath}`);
    // Service account authentication can be handled by google-auth-library or json web token
    // For now proceed with standard auth
  }

  // Check 2: Firebase CLI active admin session credentials
  const firebaseToolsPath = path.join(os.homedir(), '.config', 'configstore', 'firebase-tools.json');
  if (fs.existsSync(firebaseToolsPath)) {
    try {
      const cliData = JSON.parse(fs.readFileSync(firebaseToolsPath, 'utf8'));
      if (cliData?.tokens?.access_token) {
        console.log(`[Auth] Using authenticated admin session for ${cliData.user?.email || 'admin'}`);
        return cliData.tokens.access_token;
      }
    } catch (e) {
      console.warn('[Auth] Could not parse firebase-tools credentials:', e.message);
    }
  }

  throw new Error(
    'No admin credentials found. Please ensure you are logged into Firebase CLI (`firebase login`) or provide GOOGLE_APPLICATION_CREDENTIALS.'
  );
}

async function saveFirestoreDoc(accessToken, collectionName, documentId, data) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collectionName}/${documentId}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(toFirestoreDoc(data))
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(`Firestore write failed [${response.status}]: ${json.error?.message || JSON.stringify(json)}`);
  }
  return json;
}

async function seed() {
  console.log(`🌱 Starting Firestore Admin Seed for project: [${PROJECT_ID}] (Production database)...`);
  
  const token = await getAdminAccessToken();

  console.log("📝 Writing fest configuration to doc 'config/fest'...");
  await saveFirestoreDoc(token, "config", "fest", FEST_CONFIG);
  console.log("✅ Fest configuration successfully written to Firestore.");

  console.log(`📝 Writing ${EVENTS.length} events to collection 'events' ...`);
  for (const event of EVENTS) {
    const { id, ...eventData } = event;
    await saveFirestoreDoc(token, "events", id, eventData);
    console.log(`  ✓ Written event document: events/${id}`);
  }

  console.log("\n🎉 All fest data successfully seeded into Cloud Firestore!");
}

seed().catch((err) => {
  console.error("❌ Seeding Error:", err.message);
  process.exit(1);
});
