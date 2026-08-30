import React from 'react';
import { Cpu, Sparkles, Binary, Zap, Compass, Flame } from 'lucide-react';
import { FestConfig } from '../types';

interface AboutSectionProps {
  config: FestConfig | null;
}

export default function AboutSection({ config }: AboutSectionProps) {
  const defaultPillars = [
    {
      title: "INNOVATION",
      subtitle: "Autonomous Ideation & Tech Vectors",
      description: "Pushing the frontiers of technical reasoning, rapid problem synthesis, and creative ideation under competitive constraints.",
      icon: Cpu,
      accent: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    },
    {
      title: "TECHNOLOGY",
      subtitle: "Binary Logic & Multimodal AI",
      description: "Harnessing algorithmic number conversion speed and modern generative AI tools for impactful digital campaigns.",
      icon: Sparkles,
      accent: "border-pink-500/40 text-pink-400 bg-pink-500/10",
    },
    {
      title: "COMPETITION",
      subtitle: "Parallel Arenas & Cash Prizes",
      description: "High-stakes single-day parallel challenges testing forensic deduction, technical agility, and awarding lucrative cash prizes.",
      icon: Binary,
      accent: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono mb-3">
          <Zap className="w-3.5 h-3.5 text-pink-400" />
          <span>FESTIVAL PHILOSOPHY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-wide mb-4">
          ONE UNIVERSE. FOUR ARENAS.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          Organized by the <strong className="text-cyan-300">Department of Robotics and Artificial Intelligence</strong> at{' '}
          <strong className="text-slate-100">St. Vincent Pallotti College of Engineering and Technology, Nagpur</strong>, 
          ROBOXENCE is a high-octane single-day technical fest that fuses robotics, binary logic, case forensic deduction, and generative AI.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {defaultPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl roboxence-glass relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl border ${pillar.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-orbitron font-black text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-orbitron font-bold text-white mb-1 tracking-wide">
                {pillar.title}
              </h3>
              <div className="text-xs font-mono text-cyan-400 mb-3">
                {pillar.subtitle}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quote Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-950/80 to-pink-950/40 border border-cyan-500/30 text-center relative overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.15)]">
        <div className="text-lg sm:text-2xl md:text-3xl font-orbitron font-bold text-white tracking-wide mb-2">
          &ldquo;Spin the challenge. Think the solution. Build the future.&rdquo;
        </div>
        <p className="text-xs sm:text-sm font-mono text-cyan-300">
          All 4 challenges operate simultaneously throughout the single-day festival. Choose your arena.
        </p>
      </div>
    </section>
  );
}
