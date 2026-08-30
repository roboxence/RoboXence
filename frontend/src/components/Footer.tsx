import React from 'react';
import { 
  Instagram, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  ChevronUp,
  Cpu,
  Heart
} from 'lucide-react';
import { FestConfig } from '../types';

interface FooterProps {
  config: FestConfig | null;
}

export default function Footer({ config }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-cyan-500/20 bg-[#000208] text-slate-400 text-xs font-mono pt-16 pb-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Column 1: Brand & Department */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-cyan-500/40 p-1 flex items-center justify-center">
                <img
                  src={config?.mainEventLogoAsset || '/assets/main_event_logo.jpeg'}
                  alt="ROBOXENCE"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-orbitron font-extrabold text-white tracking-widest chrome-text">
                  {config?.eventName || 'ROBOXENCE'} {config?.year || '2026'}
                </span>
                <span className="block text-[10px] text-cyan-400">
                  EMERGE · INNOVATE · EXCEL
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              The flagship single-day technical symposium presented by the{' '}
              <strong className="text-slate-200">{config?.department || 'Department of Robotics and Artificial Intelligence'}</strong> at{' '}
              <strong className="text-slate-200">{config?.collegeName || 'SVPCET Nagpur'}</strong>.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={config?.instagramEvent || 'https://www.instagram.com/roboxence.official_'}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-950 border border-pink-500/30 text-pink-400 hover:bg-pink-500/20 hover:border-pink-400 transition-colors"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${config?.headOfEvent.email || 'daookaustubh@gmail.com'}`}
                className="p-2.5 rounded-xl bg-slate-950 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-orbitron font-bold text-white uppercase tracking-wider text-cyan-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-cyan-300 transition-colors">
                  Command Deck / Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  About &amp; Pillars
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-cyan-300 transition-colors">
                  Parallel Arenas
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-300 transition-colors">
                  Leadership &amp; Coordinators
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Transmit Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Campus */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-orbitron font-bold text-white uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Campus Venue</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              {config?.collegeAddress || 'St. Vincent Pallotti College of Engineering and Technology, Gavsi Manapur, Wardha Road, Nagpur, Maharashtra 441108'}
            </p>

            <div className="pt-2 text-xs">
              <div className="text-white font-bold font-orbitron">Head of Departmental Event:</div>
              <div className="text-cyan-300">{config?.headOfEvent.name || 'Kaustubh Daoo'}</div>
              <div className="text-slate-500">{config?.headOfEvent.phone || '+91 90496 84734'}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <span>© {config?.year || '2026'} ROBOXENCE. Department of Robotics &amp; AI, SVPCET Nagpur.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all text-xs"
          >
            <span>Top of Universe</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
