import React from 'react';
import { User, Phone, Mail, Award, Shield, Sparkles } from 'lucide-react';
import { FestConfig, RoboxenceEvent } from '../types';

interface TeamSectionProps {
  config: FestConfig | null;
  events: RoboxenceEvent[];
}

export default function TeamSection({ config, events }: TeamSectionProps) {
  const head = config?.headOfEvent || {
    name: "Kaustubh Daoo",
    title: "Head of Departmental Event",
    phone: "+91 90496 84734",
    email: "daookaustubh@gmail.com",
    department: "Department of Robotics and Artificial Intelligence",
  };

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
          <Shield className="w-3.5 h-3.5 text-purple-400" />
          <span>LEADERSHIP &amp; COORDINATORS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-wide mb-3">
          COMMAND CENTRAL
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans">
          The departmental leadership and student coordinators spearheading ROBOXENCE 2026.
        </p>
      </div>

      {/* Head of Event Banner */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="p-6 sm:p-8 rounded-2xl roboxence-glass border border-cyan-500/40 text-center space-y-4 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              {head.title}
            </div>
            <h3 className="text-2xl font-orbitron font-extrabold text-white mt-1">
              {head.name}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              {head.department} • SVPCET Nagpur
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${head.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 hover:text-cyan-300 border border-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{head.phone}</span>
            </a>

            <a
              href={`mailto:${head.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 hover:text-pink-300 border border-slate-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              <span>{head.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Event Coordinators Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="p-5 rounded-2xl roboxence-glass border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
                {evt.title}
              </div>
              <h4 className="text-lg font-orbitron font-bold text-white">
                {evt.coordinator?.name}
              </h4>
              <p className="text-[11px] font-mono text-slate-400">
                {evt.coordinator?.role || 'Event Coordinator'}
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs font-mono">
              <a
                href={`tel:${evt.coordinator?.phone?.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 truncate"
              >
                <Phone className="w-3 h-3 text-cyan-400 shrink-0" />
                <span className="truncate">{evt.coordinator?.phone}</span>
              </a>

              <a
                href={`mailto:${evt.coordinator?.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-pink-300 truncate"
              >
                <Mail className="w-3 h-3 text-pink-400 shrink-0" />
                <span className="truncate">{evt.coordinator?.email}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
