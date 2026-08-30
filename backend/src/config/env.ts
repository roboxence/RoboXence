import dotenv from 'dotenv';

dotenv.config();

const defaultAllowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000',
  'https://roboxence-2k26.web.app',
  'https://roboxence-2k26.firebaseapp.com'
];

const customOrigins = [
  ...(process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',').map((s) => s.trim()) : []),
  ...(process.env.CLIENT_URL ? [process.env.CLIENT_URL.trim()] : [])
].filter(Boolean);

export const ENV = {
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  ALLOWED_ORIGINS: Array.from(new Set([...defaultAllowedOrigins, ...customOrigins])),
};
