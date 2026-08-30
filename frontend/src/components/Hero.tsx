import React from 'react';
import { 
  ArrowRight, 
  Trophy, 
  Cpu, 
  Layers
} from 'lucide-react';
import { FestConfig } from '../types';

interface HeroProps {
  config: FestConfig | null;
}

export default function Hero({ config }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Departmental & College Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)] mb-6 animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
            {config?.department || 'Department of Robotics and Artificial Intelligence'}
          </span>
        </div>

        {/* Institution subtitle */}
        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xl mb-4 tracking-wide">
          {config?.collegeName || 'St. Vincent Pallotti College of Engineering and Technology, Nagpur'}
        </p>

        {/* Brushed Chrome Giant Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-orbitron tracking-tight leading-none chrome-text select-none mb-3">
          {config?.eventName || 'ROBOXENCE'}
        </h1>

        {/* Tagline & Year */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6">
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-pink-500" />
          <h2 className="text-sm sm:text-lg md:text-xl font-orbitron font-extrabold tracking-[0.25em] text-pink-400">
            {config?.tagline || 'EMERGE · INNOVATE · EXCEL'}
          </h2>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-pink-500" />
        </div>

        {/* Sub-description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed mb-10">
          {config?.subTagline || '4 flagship events, one single day, one boundless technological universe.'}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-xs mb-14">
          <a
            href="#events"
            className="w-full px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-pink-400 hover:from-white hover:to-cyan-300 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all flex items-center justify-center gap-2 group"
          >
            <span>EXPLORE 4 EVENTS</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Key Festival Pillars Bar (3 Stats) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl text-left">
          <div className="p-3.5 rounded-xl roboxence-glass flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-orbitron font-bold text-white">4 Flagships</div>
              <div className="text-[10px] font-mono text-slate-400">Parallel Arenas</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl roboxence-glass flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-500/15 text-pink-400 border border-pink-500/30 shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-orbitron font-bold text-white">Cash Prizes</div>
              <div className="text-[10px] font-mono text-slate-400">All 4 Events</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl roboxence-glass flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400 border border-purple-500/30 shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-orbitron font-bold text-white">AI &amp; Robotics</div>
              <div className="text-[10px] font-mono text-slate-400">Cutting-Edge Tracks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
