import React, { useState } from 'react';
import BlackHoleBackground from './components/BlackHoleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EventDetailsModal from './components/EventDetailsModal';
import { useEvents } from './hooks/useEvents';
import { useAmbientAudio } from './hooks/useAudio';
import { RoboxenceEvent } from './types';

export default function App() {
  const { events, config, loading, error, refetch } = useEvents();
  const { isPlaying: isPlayingAudio, toggleAudio } = useAmbientAudio();

  // Modal active states
  const [selectedEventDetails, setSelectedEventDetails] = useState<RoboxenceEvent | null>(null);

  return (
    <div className="min-h-screen bg-transparent text-slate-100 relative overflow-x-hidden">
      {/* Relativistic Blackhole Canvas Animation */}
      <BlackHoleBackground />

      {/* Futuristic Navbar */}
      <Navbar
        config={config}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={toggleAudio}
      />

      {/* Main Content */}
      <main>
        {/* Hero with CTAs */}
        <Hero config={config} />

        {/* Fest Philosophy & 3 Pillars */}
        <AboutSection config={config} />

        {/* Dynamic API-Driven Flagship Arenas */}
        <EventsSection
          events={events}
          loading={loading}
          error={error}
          onRefetch={refetch}
          onViewDetails={(evt) => setSelectedEventDetails(evt)}
        />

        {/* Departmental Command Central & Coordinators */}
        <TeamSection config={config} events={events} />

        {/* Transmission & Contact Section */}
        <ContactSection config={config} />
      </main>

      {/* Departmental Footer */}
      <Footer config={config} />

      {/* ========================================================================= */}
      {/* INTERACTIVE MODALS                                                       */}
      {/* ========================================================================= */}

      {/* Event Details Modal */}
      {selectedEventDetails && (
        <EventDetailsModal
          event={selectedEventDetails}
          onClose={() => setSelectedEventDetails(null)}
        />
      )}
    </div>
  );
}
