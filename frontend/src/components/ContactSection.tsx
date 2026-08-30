import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Building, 
  Radio
} from 'lucide-react';
import { FestConfig } from '../types';

interface ContactSectionProps {
  config: FestConfig | null;
}

export default function ContactSection({ config }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Radio className="w-3.5 h-3.5 text-cyan-400" />
          <span>CONTACT &amp; VENUE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-wide mb-3">
          COMMAND CENTRAL
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans">
          For departmental event inquiries, participation guidelines, or campus directions, reach out to Command Central.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Head Coordinator */}
        <div className="p-6 rounded-2xl roboxence-glass border border-cyan-500/30 flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center justify-center mb-3">
              <Building className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
              Head of Departmental Event
            </div>
            <h3 className="text-lg font-orbitron font-bold text-white">
              {config?.headOfEvent.name || 'Kaustubh Daoo'}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              {config?.department || 'Department of Robotics & AI'}
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <a
              href={`tel:${config?.headOfEvent.phone?.replace(/[^0-9+]/g, '') || '+919049684734'}`}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{config?.headOfEvent.phone || '+91 90496 84734'}</span>
            </a>

            <a
              href={`mailto:${config?.headOfEvent.email || 'daookaustubh@gmail.com'}`}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-pink-400 text-xs font-mono text-slate-200 hover:text-pink-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-pink-400 shrink-0" />
              <span className="truncate">{config?.headOfEvent.email || 'daookaustubh@gmail.com'}</span>
            </a>
          </div>
        </div>

        {/* Card 2: Campus Venue */}
        <div className="p-6 rounded-2xl roboxence-glass border border-cyan-500/30 flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
              Institutional Venue
            </div>
            <h3 className="text-lg font-orbitron font-bold text-white">
              {config?.collegeShort || 'SVPCET NAGPUR'}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-2 leading-relaxed">
              {config?.collegeAddress || 'St. Vincent Pallotti College of Engineering and Technology, Gavsi Manapur, Wardha Road, Nagpur, Maharashtra 441108'}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <span className="text-[11px] font-mono text-cyan-300 block">
              Single-Day Fest · Parallel Arenas
            </span>
          </div>
        </div>

        {/* Card 3: Social Broadcasts */}
        <div className="p-6 rounded-2xl roboxence-glass border border-pink-500/30 flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-300 flex items-center justify-center mb-3">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-pink-400 font-bold mb-1">
              Social Broadcasts
            </div>
            <h3 className="text-lg font-orbitron font-bold text-white">
              Official Channels
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Follow for live festival telemetry and announcements.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <a
              href={config?.instagramEvent || 'https://www.instagram.com/roboxence.official_'}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-xs font-mono text-pink-300 hover:bg-pink-500/20 transition-all"
            >
              <span>Event Instagram</span>
              <span className="font-bold">{config?.instagramEventHandle || '@roboxence.official_'}</span>
            </a>

            <a
              href={config?.instagramCollege || 'https://www.instagram.com/svpcetnagpur'}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all"
            >
              <span>College Instagram</span>
              <span className="font-bold">{config?.instagramCollegeHandle || '@svpcetnagpur'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
