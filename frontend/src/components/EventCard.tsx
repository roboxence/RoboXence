import React from 'react';
import { 
  Users, 
  Banknote, 
  ExternalLink,
  Tag
} from 'lucide-react';
import { RoboxenceEvent } from '../types';

interface EventCardProps {
  event: RoboxenceEvent;
  onViewDetails: (event: RoboxenceEvent) => void;
}

export default function EventCard({ event, onViewDetails }: EventCardProps) {
  // Pick border style based on event.id
  const cardBorderClass =
    event.id === 'decode-and-dab'
      ? 'roboxence-card-magenta'
      : event.id === 'mystique'
      ? 'roboxence-card-purple'
      : 'roboxence-glass';

  // Format prize display with "Upto" bolded
  const cleanPrizeAmount = event.cashPrize.replace(/^Upto\s*/i, '').trim();

  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${cardBorderClass}`}
    >
      <div>
        {/* Poster Image Preview */}
        <div
          onClick={() => onViewDetails(event)}
          className="relative w-full h-48 sm:h-52 overflow-hidden cursor-pointer bg-[#00040e] flex items-center justify-center"
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00030a] via-[#00030a]/20 to-transparent" />

          {/* Category Badge Top Left */}
          <div className="absolute top-3 left-3">
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md border ${
                event.brandColors?.badgeBg || 'bg-cyan-500/20'
              } ${event.brandColors?.badgeText || 'text-cyan-300'} ${
                event.brandColors?.badgeBorder || 'border-cyan-400/40'
              }`}
            >
              {event.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3
              onClick={() => onViewDetails(event)}
              className="text-xl sm:text-2xl font-orbitron font-extrabold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
            >
              {event.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
              {event.subtitle}
            </p>
          </div>

          {/* Format, Entry Fee & Prize Chips */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>{event.format}</span>
            </div>

            {event.entryFee && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-cyan-300">
                <Tag className="w-3.5 h-3.5 text-cyan-400" />
                <span>{event.entryFee}</span>
              </div>
            )}

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
              <Banknote className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                <strong className="font-extrabold text-emerald-200">Upto</strong> {cleanPrizeAmount}
              </span>
            </div>
          </div>

          {/* Snippet Description */}
          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Footer Action Buttons */}
      <div className="p-5 sm:p-6 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={() => onViewDetails(event)}
          className="px-3 py-2.5 rounded-xl text-xs font-mono bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors"
        >
          View Details
        </button>

        <a
          href={event.googleFormUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2.5 rounded-xl font-orbitron font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-white hover:to-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center gap-1.5 group/btn"
        >
          <span>Register</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
