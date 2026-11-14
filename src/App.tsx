import React from 'react';
import { Navbar } from './components/common/Navbar';
import { FloatingHearts } from './components/common/FloatingHearts';
import { MusicPlayer } from './components/common/MusicPlayer';
import { HeroSection } from './components/sections/HeroSection';
import { MatrimonySection } from './components/sections/MatrimonySection';
import { ConversationsSection } from './components/sections/ConversationsSection';
import { TwoMeetingsSection } from './components/sections/TwoMeetingsSection';
import { BondStrongerSection } from './components/sections/BondStrongerSection';
import { StoodByMeSection } from './components/sections/StoodByMeSection';
import { WaitingForForeverSection } from './components/sections/WaitingForForeverSection';
import { BirthdayCelebrationSection } from './components/sections/BirthdayCelebrationSection';
import { PhotoGallerySection } from './components/sections/PhotoGallerySection';
import { ValentineProposalSection } from './components/sections/ValentineProposalSection';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-burgundy-950 text-rose-50 selection:bg-rose-600 selection:text-white">
      {/* Global Ambient Floating Particles */}
      <FloatingHearts count={16} density="normal" />

      {/* Floating Header Navigation */}
      <Navbar />

      {/* Persistent Romantic Music Player */}
      <MusicPlayer />

      {/* Story Chapters */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Cinematic Birthday Landing Page */}
        <HeroSection />

        {/* Section 2: Where Our Story Began – Matrimony Site */}
        <MatrimonySection />

        {/* Section 3: From Messages to Long Conversations */}
        <ConversationsSection />

        {/* Section 4: Two Meetings, Countless Memories */}
        <TwoMeetingsSection />

        {/* Section 5: Our Bond Became Stronger */}
        <BondStrongerSection />

        {/* Section 6: You Stood By Me */}
        <StoodByMeSection />

        {/* Section 7: A Beautiful Future Together */}
        <WaitingForForeverSection />

        {/* Section 8: Special Birthday Wishes & Interactive Cake */}
        <BirthdayCelebrationSection />

        {/* Dedicated Interactive Photo Album */}
        <PhotoGallerySection />

        {/* Section 9: The Final Surprise – Valentine Proposal */}
        <ValentineProposalSection />
      </main>

      {/* Romantic Footer */}
      <Footer />
    </div>
  );
};

export default App;
