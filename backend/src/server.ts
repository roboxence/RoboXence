import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { ENV } from './config/env.js';
import eventRoutes from './routes/eventRoutes.js';
import configRoutes from './routes/configRoutes.js';
import { notFoundHandler, globalErrorHandler } from './middleware/errorMiddleware.js';

const app = express();

// Security Headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// CORS configuration with production origin whitelist
const allowedOrigins = ENV.ALLOWED_ORIGINS;

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. server-to-server, curl, monitoring, mobile)
      if (!origin) return callback(null, true);

      if (ENV.NODE_ENV === 'development' || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS policy: Origin ${origin} is not allowed`));
    },
    credentials: true,
  })
);

// Global Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

// Body Parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    event: 'ROBOXENCE 2026',
    department: 'Robotics & AI, SVPCET',
    environment: ENV.NODE_ENV,
  });
});

// API Routes
app.use('/api/config', configRoutes);
app.use('/api/events', eventRoutes);

// Error Handlers
app.use(notFoundHandler);
app.use(globalErrorHandler);

// Start HTTP Server
const PORT = ENV.PORT;
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 ROBOXENCE 2026 Service running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=======================================================`);
});

export default app;
