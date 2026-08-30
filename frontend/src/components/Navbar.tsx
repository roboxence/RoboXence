import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Instagram, 
  GraduationCap,
  Volume2,
  VolumeX
} from 'lucide-react';
import { FestConfig } from '../types';

interface NavbarProps {
  config: FestConfig | null;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export default function Navbar({
  config,
  isPlayingAudio,
  onToggleAudio,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[#000208]/92 backdrop-blur-xl border-b border-cyan-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
          : 'py-3.5 bg-gradient-to-b from-[#000208]/85 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        {/* Left Side: Emblem & Title */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-cyan-500/40 bg-slate-950 p-1 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all shrink-0">
              <img
                src={config?.mainEventLogoAsset || '/assets/main_event_logo.jpeg'}
                alt="ROBOXENCE Emblem"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-orbitron font-black text-lg sm:text-xl tracking-widest chrome-text group-hover:text-cyan-300 transition-colors">
                  {config?.eventName || 'ROBOXENCE'}
                </span>
                <span className="text-xs font-orbitron font-bold text-cyan-400">
                  {config?.year || '2026'}
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-400 tracking-wider hidden sm:block">
                DEPT. OF ROBOTICS &amp; AI
              </span>
            </div>
          </a>
        </div>

        {/* Center: College Emblem Slot */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-950/60 border border-slate-800 backdrop-blur-md" title="SVPCET Nagpur">
          <div className="w-7 h-7 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center shrink-0">
            <img
              src={config?.collegeLogoAsset || '/assets/clg_logo.jpeg'}
              alt="SVPCET Logo"
              className="w-full h-full object-contain p-0.5"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-semibold text-slate-300 tracking-wider">
              {config?.collegeShort || 'SVPCET NAGPUR'}
            </span>
            <span className="text-[8px] font-mono text-cyan-400/80">COLLEGE EMBLEM</span>
          </div>
        </div>

        {/* Center / Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 px-3.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-cyan-500/20 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Audio, Instagram, CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={onToggleAudio}
            className={`p-2 rounded-full border transition-all duration-200 ${
              isPlayingAudio
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.4)] animate-pulse'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title={isPlayingAudio ? 'Mute Atmosphere Audio' : 'Play Sci-Fi Atmosphere Audio'}
            aria-label="Toggle ambient audio"
          >
            {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Instagram */}
          <a
            href={config?.instagramEvent || 'https://www.instagram.com/roboxence.official_'}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-pink-300 bg-pink-500/10 border border-pink-500/30 hover:bg-pink-500/20 hover:border-pink-400 transition-all"
            title="Official Instagram"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden 2xl:inline">{config?.instagramEventHandle || '@roboxence.official_'}</span>
          </a>

          {/* Explore CTA */}
          <a
            href="#events"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-orbitron font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-white hover:from-white hover:to-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
          >
            <span>EXPLORE</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onToggleAudio}
            className={`p-2 rounded-lg border transition-all ${
              isPlayingAudio ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
            aria-label="Toggle audio"
          >
            {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-slate-200 hover:text-cyan-300"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#000208]/95 backdrop-blur-2xl border-b border-cyan-500/30 space-y-3 animate-fadeIn">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>{config?.collegeName || 'SVPCET Nagpur'}</span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 font-mono"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <a
              href={config?.instagramEvent || 'https://www.instagram.com/roboxence.official_'}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-mono bg-pink-500/10 border border-pink-500/40 text-pink-300"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              Follow {config?.instagramEventHandle || '@roboxence.official_'}
            </a>

            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-orbitron font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>EXPLORE ALL 4 EVENTS</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
