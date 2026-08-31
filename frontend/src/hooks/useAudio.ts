import { useState, useEffect, useRef, useCallback } from 'react';

const AUDIO_SRC = '/assets/background-theme.mp3';
const DEFAULT_VOLUME = 0.35; // Ambient background level

export function useAmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const userMutedRef = useRef(false);

  // Web Audio API Synthesizer (Reliable Sci-Fi Atmospheric Drone Fallback)
  const startSynth = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (_) {}
      }

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 2.0);
      gain.connect(ctx.destination);
      gainNodeRef.current = gain;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, ctx.currentTime);
      filter.connect(gain);
      filterRef.current = filter;

      // Base drone tone (A1)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, ctx.currentTime);
      osc1.connect(filter);
      osc1.start();
      osc1Ref.current = osc1;

      // Harmonic shimmer
      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110.0, ctx.currentTime);
      osc2.connect(filter);
      osc2.start();
      osc2Ref.current = osc2;

      setIsPlaying(true);
    } catch (err) {
      console.warn('Synth error:', err);
    }
  }, []);

  const stopSynth = useCallback(() => {
    if (audioCtxRef.current && gainNodeRef.current) {
      const ctx = audioCtxRef.current;
      const gain = gainNodeRef.current;
      gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
      setTimeout(() => {
        try {
          ctx.close();
        } catch (_) {}
        audioCtxRef.current = null;
        gainNodeRef.current = null;
        setIsPlaying(false);
      }, 650);
    } else {
      setIsPlaying(false);
    }
  }, []);

  // Initialize or retrieve standard HTML5 Audio element
  const getAudioElement = useCallback(() => {
    if (!audioElementRef.current && typeof window !== 'undefined') {
      const audio = new Audio(AUDIO_SRC);
      audio.loop = true;
      audio.volume = DEFAULT_VOLUME;
      audio.preload = 'auto';
      audioElementRef.current = audio;
    }
    return audioElementRef.current;
  }, []);

  const startAudio = useCallback(() => {
    if (userMutedRef.current) return;
    const audio = getAudioElement();
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log('Background MP3 file unavailable or decoding failed, starting ambient synth:', err.message);
            startSynth();
          });
      } else {
        setIsPlaying(true);
      }
    } else {
      startSynth();
    }
  }, [getAudioElement, startSynth]);

  const stopAudio = useCallback(() => {
    const audio = audioElementRef.current;
    if (audio && !audio.paused) {
      audio.pause();
    }
    stopSynth();
    setIsPlaying(false);
  }, [stopSynth]);

  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      userMutedRef.current = true;
      stopAudio();
    } else {
      userMutedRef.current = false;
      const audio = getAudioElement();
      if (audio) {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => startSynth());
      } else {
        startSynth();
      }
    }
  }, [isPlaying, getAudioElement, startSynth, stopAudio]);

  // Autoplay attempt immediately on mount + fallback on first user interaction
  useEffect(() => {
    let cleanupListeners: (() => void) | null = null;

    const tryPlay = () => {
      if (userMutedRef.current) return;
      const audio = getAudioElement();
      if (!audio) return;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            if (cleanupListeners) cleanupListeners();
          })
          .catch(() => {
            // Autoplay blocked by browser policy; wait for first interaction
            const events = ['click', 'touchstart', 'keydown', 'scroll'];
            const handleInteraction = () => {
              if (userMutedRef.current) return;
              audio.play()
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {});
              cleanup();
            };

            const cleanup = () => {
              events.forEach((evt) => {
                window.removeEventListener(evt, handleInteraction);
              });
            };

            cleanupListeners = cleanup;
            events.forEach((evt) => {
              window.addEventListener(evt, handleInteraction, { once: true, passive: true });
            });
          });
      }
    };

    tryPlay();

    return () => {
      if (cleanupListeners) cleanupListeners();
    };
  }, [getAudioElement]);

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      const audio = audioElementRef.current;
      if (audio) {
        audio.pause();
        audioElementRef.current = null;
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (_) {}
        audioCtxRef.current = null;
      }
    };
  }, []);

  return { isPlaying, toggleAudio };
}
