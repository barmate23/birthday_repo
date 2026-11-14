import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Menu, X } from 'lucide-react';
import { storyData } from '../../data/storyData';

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / Math.max(1, totalScroll)) * 100;
      setScrollProgress(currentProgress);
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-burgundy-950/85 backdrop-blur-md border-b border-rose-900/40 py-2.5 shadow-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 group text-left"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-600 to-champagne-400 p-[1px] shadow-md group-hover:scale-105 transition">
            <div className="w-full h-full rounded-full bg-burgundy-950 flex items-center justify-center">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-500 group-hover:scale-110 transition" />
            </div>
          </div>
          <div>
            <span className="font-serif text-base sm:text-lg font-semibold tracking-wide text-rose-100 group-hover:text-champagne-300 transition">
              Shradha Jivane
            </span>
            <span className="text-xs font-script text-champagne-400 block -mt-1 text-opacity-90">
              (Chaku ❤️)
            </span>
          </div>
        </button>

        {/* Desktop Chapter Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {storyData.chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollTo(ch.id)}
              className="px-2.5 py-1 text-xs text-rose-200/80 hover:text-white hover:bg-rose-900/30 rounded-full transition font-medium tracking-wide"
            >
              {ch.title}
            </button>
          ))}
        </div>

        {/* Surprise shortcut button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollTo('valentine')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-medium tracking-wide shadow-[0_0_15px_rgba(225,29,72,0.4)] transition hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
            <span>Valentine Surprise</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-rose-200 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Progress line */}
      <div className="w-full h-[2px] bg-white/5 mt-2">
        <div
          className="h-full bg-gradient-to-r from-rose-500 via-champagne-400 to-rose-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-burgundy-950/95 backdrop-blur-xl border-b border-rose-900/60 px-6 py-6 animate-fade-in">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {storyData.chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                className="text-left px-3 py-2 text-sm text-rose-200/90 hover:text-white hover:bg-rose-900/40 rounded-lg transition"
              >
                <span className="text-xs text-champagne-400 block font-mono">{ch.number}</span>
                {ch.title}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo('valentine')}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 text-white font-serif font-medium text-center shadow-lg flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-champagne-300" />
            The Valentine Surprise ❤️
          </button>
        </div>
      )}
    </nav>
  );
};
