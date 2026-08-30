# ROBOXENCE 2026 — EMERGE · INNOVATE · EXCEL
### Department of Robotics and Artificial Intelligence
### St. Vincent Pallotti College of Engineering and Technology, Nagpur

---

## 🌌 Overview
**ROBOXENCE 2026** is the premier single-day technical fest organized by the Department of Robotics and Artificial Intelligence at SVPCET Nagpur on **10th September 2026**.

This repository contains the decoupled, production-ready architecture:
1. **`frontend/`**: High-performance React 18 + Vite + TypeScript application featuring a Gargantua (*Interstellar*) relativistic blackhole physics background, direct Google Forms registration integration, prize pools up to ₹3000/-, and responsive deep-space dark UI.
2. **`backend/`**: Lightweight Node.js + Express + TypeScript service providing health telemetry, configuration endpoints, and fallback event data.

---

## 🏛️ Project Architecture
```
roboxence-2026/
├── frontend/                     # React + Vite + Tailwind CSS Frontend
│   ├── public/assets/            # Posters, college emblems, background audio
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   ├── Navbar.tsx        # Cyber navigation with college emblem & audio toggle
│   │   │   ├── Hero.tsx          # Metallic typography & festival CTAs
│   │   │   ├── BlackHoleBackground.tsx # High-DPI relativistic black hole canvas
│   │   │   ├── AboutSection.tsx  # Festival pillars & department overview
│   │   │   ├── EventCard.tsx     # Parallel arena cards with 'Upto ₹X/-' rewards
│   │   │   ├── EventsSection.tsx # Arena grid with dynamic fallback data
│   │   │   ├── EventDetailsModal.tsx # Detailed dossiers & Google Form links
│   │   │   ├── TeamSection.tsx   # Leadership & coordinator contacts
│   │   │   ├── ContactSection.tsx# Venue information & social broadcasts
│   │   │   └── Footer.tsx
│   │   ├── services/
│   │   │   ├── firebase.ts       # Fallback event data and Firestore client
│   │   │   └── api.ts            # REST fallback service
│   │   ├── hooks/
│   │   │   ├── useEvents.ts      # Dynamic event data hook
│   │   │   └── useAudio.ts       # Background theme & synthesizer audio hook
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css             # Deep space styling & typography
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md
│
├── backend/                      # Node.js + Express + TypeScript Service
│   ├── src/
│   │   ├── config/               # Environment loaders
│   │   ├── controllers/          # Event & config controllers
│   │   ├── data/                 # Seed dataset (4 events, rules, prizes)
│   │   ├── middleware/           # Error handling & rate limiters
│   │   ├── routes/               # Express REST routes
│   │   ├── services/             # Static store service
│   │   └── server.ts             # Express server entry point
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
```

---

## ⚡ Quick Start

### 1. Install All Dependencies
```bash
npm run install:all
```

### 2. Configure Environment (Frontend)
Copy `frontend/.env.example` to `frontend/.env`:
```bash
cp frontend/.env.example frontend/.env
```

### 3. Run Locally (Concurrent Dev Servers)
```bash
npm run dev
```
- **Frontend App**: `http://localhost:5173`
- **Backend Service**: `http://localhost:5000`
