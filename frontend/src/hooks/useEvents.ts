import { useState, useEffect } from 'react';
import { RoboxenceEvent, FestConfig } from '../types';
import { fetchEventsFromFirestore, fetchConfigFromFirestore } from '../services/firebase';

export function useEvents() {
  const [events, setEvents] = useState<RoboxenceEvent[]>([]);
  const [config, setConfig] = useState<FestConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [eventsData, configData] = await Promise.all([
        fetchEventsFromFirestore(),
        fetchConfigFromFirestore(),
      ]);
      setEvents(eventsData);
      setConfig(configData);
    } catch (err: any) {
      console.error('Failed to load events data:', err);
      setError(err.message || 'Failed to connect to Firebase Firestore');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { events, config, loading, error, refetch: loadData };
}
