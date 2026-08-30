import { Request, Response, NextFunction } from 'express';
import { Store } from '../services/storeService.js';

export async function getEvents(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const events = await Store.getEvents();
    res.json({
      success: true,
      count: events.length,
      data: events,
    });
  } catch (error) {
    next(error);
  }
}

export async function getEventById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const event = await Store.getEventById(id);

    if (!event) {
      res.status(404).json({
        success: false,
        message: `Event not found with ID: ${id}`,
      });
      return;
    }

    res.json({
      success: true,
      data: event,
    });
  } catch (error) {
    next(error);
  }
}
