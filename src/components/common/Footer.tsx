import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 sm:px-6 bg-[#0f0205] border-t border-rose-950 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Heart Icon Badge */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-600 to-champagne-400 p-[1px] mb-6 shadow-[0_0_20px_rgba(225,29,72,0.4)]">
          <div className="w-full h-full rounded-full bg-burgundy-950 flex items-center justify-center">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
          Two Hearts • One Journey • A Lifetime Together
        </h3>
        <p className="font-script text-2xl sm:text-3xl text-champagne-300 mb-6">
          Dedicated with all my love to Shradha Jivane (Chaku) ❤️
        </p>

        <p className="font-serif text-xs sm:text-sm text-rose-300/70 max-w-lg mb-8 leading-relaxed font-light">
          "From our first connection to our endless talks, through those two shy meetings, to standing beside each other and building a future—every second with you is my greatest gift."
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-champagne-400/30 text-champagne-300 text-xs font-medium hover:border-champagne-400 hover:scale-105 transition duration-300 shadow-md"
        >
          <ArrowUp className="w-4 h-4 text-rose-400" />
          <span>Relive Our Story From The Beginning</span>
          <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
        </button>

        <div className="mt-12 pt-6 border-t border-white/5 text-[11px] text-rose-400/60 font-mono">
          Happy Birthday Chaku • Our Forever Love Story
        </div>
      </div>
    </footer>
  );
};
