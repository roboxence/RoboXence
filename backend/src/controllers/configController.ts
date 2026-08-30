import { Request, Response, NextFunction } from 'express';
import { Store } from '../services/storeService.js';

export async function getConfig(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const config = await Store.getConfig();
    res.json({
      success: true,
      data: config,
    });
  } catch (error) {
    next(error);
  }
}
