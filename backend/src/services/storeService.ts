import { INITIAL_EVENTS, INITIAL_CONFIG } from '../data/seedData.js';

export const Store = {
  async getEvents(): Promise<any[]> {
    return INITIAL_EVENTS;
  },

  async getEventById(id: string): Promise<any | null> {
    return INITIAL_EVENTS.find((e) => e.id === id) || null;
  },

  async getConfig(): Promise<any> {
    return INITIAL_CONFIG;
  },
};
