import { Request, Response, NextFunction } from 'express';
import { ENV } from '../config/env.js';

export function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
  res.status(404).json({
    success: false,
    message: `Resource not found: ${req.method} ${req.originalUrl}`,
  });
}

export function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error('[ROBOXENCE 2026 API Error]:', err);

  let statusCode = err.statusCode || (res.statusCode !== 200 ? res.statusCode : 500);
  if (err.message && err.message.includes('CORS policy')) {
    statusCode = 403;
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    errors: err.errors || undefined,
    stack: ENV.NODE_ENV === 'development' ? err.stack : undefined,
  });
}
