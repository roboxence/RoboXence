import React, { useEffect, useRef } from 'react';

interface Particle {
  radius: number;
  angle: number;
  baseSpeed: number;
  size: number;
  alpha: number;
  incline: number;
  color: string;
  glowColor: string;
  infallRate: number;
  trailX: number[];
  trailY: number[];
}

export default function BlackHoleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Majestic Cool Palette: Blue-White, Electric Violet, Indigo, Cosmic Cyan, and Deep Purple
    const PARTICLE_THEMES = [
      { color: 'rgba(240, 248, 255, ', glow: 'rgba(186, 230, 253, ' }, // Bright blue-white highlights
      { color: 'rgba(168, 85, 247, ', glow: 'rgba(147, 51, 234, ' },  // Electric violet/purple
      { color: 'rgba(99, 102, 241, ', glow: 'rgba(79, 70, 229, ' },   // Cosmic indigo/blue
      { color: 'rgba(217, 70, 239, ', glow: 'rgba(192, 38, 211, ' },  // Deep purple plasma
      { color: 'rgba(56, 189, 248, ', glow: 'rgba(14, 165, 233, ' },  // Radiant cyan
    ];

    let particles: Particle[] = [];

    const initParticles = (w: number, h: number) => {
      const minDimension = Math.min(w, h);
      const minR = minDimension * 0.12;
      const maxR = minDimension * 0.68;
      const count = Math.min(400, Math.floor((w * h) / 2800));

      particles = Array.from({ length: count }, () => {
        const r = minR + Math.pow(Math.random(), 1.4) * (maxR - minR);
        const theme = PARTICLE_THEMES[Math.floor(Math.random() * PARTICLE_THEMES.length)];
        return {
          radius: r,
          angle: Math.random() * Math.PI * 2,
          // Reduced baseSpeed for slow, majestic celestial drift
          baseSpeed: (0.35 + Math.random() * 0.25),
          size: Math.random() * 2.0 + 0.8,
          alpha: Math.random() * 0.65 + 0.35,
          incline: 0.35 + (Math.random() - 0.5) * 0.08,
          color: theme.color,
          glowColor: theme.glow,
          infallRate: 0.015 + Math.random() * 0.02,
          trailX: [],
          trailY: [],
        };
      });
    };

    const resize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(width, height);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const centerX = width / 2;
      const centerY = height * 0.44;
      const blackHoleRadius = Math.min(width, height) * 0.125 + 14;
      const diskRadius = blackHoleRadius * 2.9;

      // 1. Deep Space backdrop clear for gentle motion persistence
      ctx.fillStyle = 'rgba(0, 3, 10, 0.24)';
      ctx.fillRect(0, 0, width, height);

      // 2. Volumetric Deep Ambient Glow (Indigo & Purple Corona over Deep Space)
      const ambientGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        blackHoleRadius * 0.8,
        centerX,
        centerY,
        blackHoleRadius * 4.6
      );
      ambientGlow.addColorStop(0, 'rgba(147, 51, 234, 0.24)');
      ambientGlow.addColorStop(0.25, 'rgba(99, 102, 241, 0.16)');
      ambientGlow.addColorStop(0.55, 'rgba(56, 189, 248, 0.07)');
      ambientGlow.addColorStop(0.85, 'rgba(10, 20, 45, 0.02)');
      ambientGlow.addColorStop(1, 'rgba(0, 3, 10, 0)');

      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, blackHoleRadius * 4.6, 0, Math.PI * 2);
      ctx.fill();

      // =========================================================================
      // INTERSTELLAR GRAVITATIONAL LENSING (Blue/Purple Arcs)
      // =========================================================================
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-0.14); // Celestial tilt angle

      // Top Gravitationally Lensed Halo Arc (Blue -> Purple Gradient)
      const topHalo = ctx.createRadialGradient(
        0, 0, blackHoleRadius * 1.02,
        0, 0, blackHoleRadius * 2.25
      );
      topHalo.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      topHalo.addColorStop(0.18, 'rgba(186, 230, 253, 0.88)');
      topHalo.addColorStop(0.45, 'rgba(168, 85, 247, 0.65)');
      topHalo.addColorStop(0.75, 'rgba(99, 102, 241, 0.25)');
      topHalo.addColorStop(1, 'rgba(0, 3, 10, 0)');

      ctx.strokeStyle = topHalo;
      ctx.lineWidth = blackHoleRadius * 0.44;
      ctx.beginPath();
      ctx.ellipse(0, -blackHoleRadius * 0.22, blackHoleRadius * 1.52, blackHoleRadius * 1.28, 0, Math.PI * 1.05, Math.PI * 1.95);
      ctx.stroke();

      // Bottom Gravitationally Lensed Halo Arc
      const bottomHalo = ctx.createRadialGradient(
        0, 0, blackHoleRadius * 1.02,
        0, 0, blackHoleRadius * 1.95
      );
      bottomHalo.addColorStop(0, 'rgba(240, 248, 255, 0.85)');
      bottomHalo.addColorStop(0.22, 'rgba(168, 85, 247, 0.70)');
      bottomHalo.addColorStop(0.58, 'rgba(99, 102, 241, 0.38)');
      bottomHalo.addColorStop(0.85, 'rgba(6, 182, 212, 0.14)');
      bottomHalo.addColorStop(1, 'rgba(0, 3, 10, 0)');

      ctx.strokeStyle = bottomHalo;
      ctx.lineWidth = blackHoleRadius * 0.32;
      ctx.beginPath();
      ctx.ellipse(0, blackHoleRadius * 0.22, blackHoleRadius * 1.42, blackHoleRadius * 0.98, 0, Math.PI * 0.05, Math.PI * 0.95);
      ctx.stroke();

      // =========================================================================
      // MAIN EQUATORIAL ACCRETION DISK (Blue / Purple / Indigo)
      // =========================================================================
      const diskGrad = ctx.createRadialGradient(
        0, 0, blackHoleRadius * 1.02,
        0, 0, diskRadius
      );
      diskGrad.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
      diskGrad.addColorStop(0.10, 'rgba(186, 230, 253, 0.92)');
      diskGrad.addColorStop(0.32, 'rgba(168, 85, 247, 0.75)');
      diskGrad.addColorStop(0.62, 'rgba(99, 102, 241, 0.45)');
      diskGrad.addColorStop(0.88, 'rgba(56, 189, 248, 0.18)');
      diskGrad.addColorStop(1, 'rgba(0, 3, 10, 0)');

      ctx.strokeStyle = diskGrad;
      ctx.lineWidth = blackHoleRadius * 0.62;
      ctx.beginPath();
      ctx.ellipse(0, 0, diskRadius, diskRadius * 0.33, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // =========================================================================
      // ORBITING PARTICLES (Slow, Majestic Celestial Drift with Relativistic Easing)
      // =========================================================================
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-0.14);

      particles.forEach((p) => {
        // Scaled velocity multiplier for a gentle, stately orbital motion
        const angularVelocity = (p.baseSpeed * 8.5) / Math.pow(p.radius, 1.15);
        p.angle += angularVelocity;
        p.radius -= p.infallRate;

        if (p.radius < blackHoleRadius * 1.03) {
          const minR = blackHoleRadius * 1.15;
          const maxR = Math.min(width, height) * 0.68;
          p.radius = minR + Math.pow(Math.random(), 1.4) * (maxR - minR);
          p.trailX = [];
          p.trailY = [];
        }

        const x = Math.cos(p.angle) * p.radius;
        const y = Math.sin(p.angle) * p.radius * p.incline;

        p.trailX.unshift(x);
        p.trailY.unshift(y);
        if (p.trailX.length > 5) {
          p.trailX.pop();
          p.trailY.pop();
        }

        const isApproaching = Math.sin(p.angle) < 0;
        const alphaFactor = isApproaching ? 1.25 : 0.65;
        const currentAlpha = Math.min(1, p.alpha * alphaFactor);

        if (p.trailX.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trailX[0], p.trailY[0]);
          for (let i = 1; i < p.trailX.length; i++) {
            ctx.lineTo(p.trailX[i], p.trailY[i]);
          }
          ctx.strokeStyle = `${p.glowColor}${currentAlpha * 0.6})`;
          ctx.lineWidth = p.size * 0.9;
          ctx.stroke();
        }

        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      // =========================================================================
      // PHOTON SPHERE RING (Blue-White Boundary)
      // =========================================================================
      ctx.save();
      ctx.translate(centerX, centerY);

      const photonRing = ctx.createRadialGradient(
        0, 0, blackHoleRadius * 0.94,
        0, 0, blackHoleRadius * 1.18
      );
      photonRing.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
      photonRing.addColorStop(0.35, 'rgba(186, 230, 253, 0.90)');
      photonRing.addColorStop(0.70, 'rgba(168, 85, 247, 0.55)');
      photonRing.addColorStop(1, 'rgba(0, 3, 10, 0)');

      ctx.fillStyle = photonRing;
      ctx.beginPath();
      ctx.arc(0, 0, blackHoleRadius * 1.18, 0, Math.PI * 2);
      ctx.fill();

      // =========================================================================
      // EVENT HORIZON (Absolute Black Singularity Core)
      // =========================================================================
      ctx.fillStyle = '#000206';
      ctx.beginPath();
      ctx.arc(0, 0, blackHoleRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(168, 85, 247, 0.45)';
      ctx.lineWidth = 1.8;
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#00030a]">
      {/* High-DPI Blue/Purple Interstellar Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Deep Space Vignette Overlays matching #00030a */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00030a]/65 via-transparent to-[#00030a]/95 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_44%,transparent_30%,#00030a_90%)] pointer-events-none" />
    </div>
  );
}
