import React, { useEffect } from 'react';
import { 
  X, 
  Users, 
  Banknote, 
  ExternalLink,
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  User, 
  Phone, 
  Mail
} from 'lucide-react';
import { RoboxenceEvent } from '../types';

interface EventDetailsModalProps {
  event: RoboxenceEvent | null;
  onClose: () => void;
}

export default function EventDetailsModal({
  event,
  onClose,
}: EventDetailsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (event) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [event, onClose]);

  if (!event) return null;

  const rulesList = Array.isArray(event.keyRules) ? event.keyRules : [];
  const cleanPrizeAmount = event.cashPrize.replace(/^Upto\s*/i, '').trim();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 max-w-2xl w-full max-h-[90vh] flex flex-col rounded-2xl bg-[#00030a] border border-cyan-500/50 shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#00040e]">
          <div className="flex items-center gap-2.5">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border ${
                event.brandColors?.badgeBg || 'bg-cyan-500/15'
              } ${event.brandColors?.badgeText || 'text-cyan-300'} ${
                event.brandColors?.badgeBorder || 'border-cyan-400/40'
              }`}
            >
              {event.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-200">
          {/* Full Poster Showcase */}
          <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-cyan-500/40 bg-slate-950 shadow-[0_0_30px_rgba(0,240,255,0.2)] flex items-center justify-center">
            <img
              src={event.image}
              alt={`${event.title} Poster`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00030a] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Titles & Theme */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white tracking-wide">
              {event.title}
            </h3>
            <p className="text-xs sm:text-sm font-space font-semibold text-cyan-400 mt-0.5">
              {event.subtitle}
            </p>
            {event.theme && (
              <div className="mt-2 text-xs font-mono text-pink-300 bg-pink-500/10 px-3 py-1 rounded-md border border-pink-500/30 inline-block">
                Theme: &ldquo;{event.theme}&rdquo;
              </div>
            )}
          </div>

          {/* Key Stats Bar (Fees hidden) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 text-xs font-mono text-cyan-300">
              <Users className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-mono">Participation Format</div>
                <div className="font-semibold text-white">{event.format}</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-2.5 text-xs font-mono text-emerald-300">
              <Banknote className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-mono">Reward Pool</div>
                <div className="font-bold text-emerald-300 text-sm font-orbitron">
                  <strong className="font-extrabold text-emerald-200">Upto</strong> {cleanPrizeAmount}
                </div>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Event Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Guidelines */}
          {rulesList.length > 0 && (
            <div>
              <h4 className="font-orbitron font-bold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-pink-400" />
                Key Guidelines &amp; Directives
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {rulesList.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Coordinator Info */}
          <div className="p-4 rounded-xl bg-slate-950/90 border border-pink-500/30 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-pink-300 font-semibold font-mono">
                <User className="w-3.5 h-3.5 text-pink-400" />
                <span>STUDENT EVENT COORDINATOR</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Direct Inquiries</span>
            </div>

            <div className="text-base font-orbitron font-bold text-white">
              {event.coordinator?.name}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {event.coordinator?.phone && (
                <a
                  href={`tel:${event.coordinator.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 hover:text-cyan-300 border border-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{event.coordinator.phone}</span>
                </a>
              )}

              {event.coordinator?.email && (
                <a
                  href={`mailto:${event.coordinator.email}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 hover:text-pink-300 border border-slate-800 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span className="truncate">{event.coordinator.email}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#00040e] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-mono bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors"
          >
            Close
          </button>

          <a
            href={event.googleFormUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-2.5 rounded-xl font-orbitron font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-pink-400 hover:from-white hover:to-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-all flex items-center justify-center gap-2 group"
          >
            <span>REGISTER VIA GOOGLE FORM</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
