# ROBOXENCE 2026 — Backend Service

Lightweight backend service for **ROBOXENCE 2026** (Department of Robotics and Artificial Intelligence, SVPCET Nagpur).

---

## 🛠️ Tech Stack & Features
- **Runtime**: Node.js & TypeScript
- **Framework**: Express.js
- **Security**: Helmet, CORS, Express-Rate-Limit
- **Endpoints**:
  - `GET /api/health` — System status and telemetry
  - `GET /api/config` — Fest institutional configuration
  - `GET /api/events` — Parallel arena data

---

## 📁 Directory Structure
```
backend/
├── src/
│   ├── config/             # Environment loaders
│   ├── controllers/        # REST route handlers (Event, Config)
│   ├── data/               # Fest seed dataset
│   ├── middleware/         # Rate limiting & error handling
│   ├── routes/             # Express API routes
│   ├── services/           # Static store service
│   └── server.ts           # Service entrypoint
├── .env.example
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Run Development Server
```bash
npm run dev
```
Health Check: `http://localhost:5000/api/health`
