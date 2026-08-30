import { FestConfig, RoboxenceEvent } from '../types';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errorMsg = data.message || `HTTP ${response.status}: ${response.statusText}`;
    throw new Error(errorMsg);
  }
  return data;
}

export const ApiService = {
  async getConfig(): Promise<FestConfig> {
    const res = await fetch(`${API_BASE}/config`);
    const json = await handleResponse<{ success: boolean; data: FestConfig }>(res);
    return json.data;
  },

  async getEvents(): Promise<RoboxenceEvent[]> {
    const res = await fetch(`${API_BASE}/events`);
    const json = await handleResponse<{ success: boolean; data: RoboxenceEvent[] }>(res);
    return json.data;
  },

  async getEventById(id: string): Promise<RoboxenceEvent> {
    const res = await fetch(`${API_BASE}/events/${id}`);
    const json = await handleResponse<{ success: boolean; data: RoboxenceEvent }>(res);
    return json.data;
  },
};
