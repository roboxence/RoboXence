import React from 'react';
import { Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { RoboxenceEvent } from '../types';
import EventCard from './EventCard';

interface EventsSectionProps {
  events: RoboxenceEvent[];
  loading: boolean;
  error: string | null;
  onRefetch: () => void;
  onViewDetails: (event: RoboxenceEvent) => void;
}

export default function EventsSection({
  events,
  loading,
  error,
  onRefetch,
  onViewDetails,
}: EventsSectionProps) {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>PARALLEL ARENAS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-wide mb-4">
          FLAGSHIP CHALLENGES
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans leading-relaxed">
          All 4 challenges operate simultaneously in parallel arenas. Choose your challenge — from fast-paced ideation in Spin Think Build, to binary rapid-fire in Decode & Dab, investigative deduction in Mystique, or AI advertising in Visionix.
        </p>
      </div>

      {/* Loading Skeleton State */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl roboxence-glass h-96 p-4 animate-pulse flex flex-col justify-between"
            >
              <div className="w-full h-44 bg-slate-900 rounded-xl" />
              <div className="space-y-2.5 mt-4">
                <div className="h-6 bg-slate-900 rounded w-3/4" />
                <div className="h-4 bg-slate-900 rounded w-1/2" />
                <div className="h-12 bg-slate-900 rounded w-full mt-2" />
              </div>
              <div className="h-10 bg-slate-900 rounded-xl w-full mt-4" />
            </div>
          ))}
        </div>
      )}

      {/* Error State with Retry Button */}
      {!loading && error && (
        <div className="p-8 rounded-2xl roboxence-glass text-center max-w-lg mx-auto border border-pink-500/40">
          <AlertCircle className="w-10 h-10 text-pink-400 mx-auto mb-3" />
          <h3 className="text-lg font-orbitron font-bold text-white mb-2">
            Failed to Load Arenas
          </h3>
          <p className="text-xs font-mono text-slate-400 mb-4">{error}</p>
          <button
            onClick={onRefetch}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reconnect</span>
          </button>
        </div>
      )}

      {/* Dynamic Event Cards Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
}
