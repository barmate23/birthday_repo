import React from 'react';
import { Sparkles, ChevronDown, Heart, Gift } from 'lucide-react';
import { ThreeHeart } from '../ThreeHeart';
import { storyData } from '../../data/storyData';

export const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('beginning');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden bg-romantic-radial"
    >
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-rose-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-champagne-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
        {/* Top Celebration Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-champagne-400/30 text-champagne-300 text-xs sm:text-sm font-medium tracking-wide mb-6 animate-pulse shadow-lg">
          <Sparkles className="w-4 h-4 text-champagne-400" />
          <span>A Special Birthday Dedication</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-lg">
          Happy Birthday, <br />
          <span className="text-rose-gradient rose-glow italic font-script tracking-normal">
            My Beautiful Chaku
          </span>{' '}
          <span className="text-rose-500 inline-block animate-pulse">❤️</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-rose-200/90 max-w-2xl mb-8 leading-relaxed font-light">
          "{storyData.person.heroSubtitle}"
        </p>

        {/* Central visual showcase: 3D Heart & Elegant Framed Portrait */}
        <div className="relative my-4 flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* 3D Interactive Heart */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-600/30 via-champagne-500/20 to-rose-600/30 rounded-full blur-xl group-hover:opacity-100 opacity-60 transition duration-1000" />
            <ThreeHeart size="md" interactive={true} />
            <p className="text-[11px] text-champagne-300/70 font-mono tracking-wider mt-1 text-center">
              ✦ Touch / Move cursor to feel my heart beat ✦
            </p>
          </div>

          {/* Prominent Photograph of Shradha with luxury gold/rose frame */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl p-[3px] bg-gradient-to-tr from-champagne-400 via-rose-500 to-champagne-300 shadow-[0_0_40px_rgba(212,175,55,0.3)] transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-burgundy-950 relative group">
              <img
                src="/images/birth.jpg"
                alt={storyData.person.fullName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/20 to-transparent opacity-80" />
              
              {/* Photo Overlay Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[10px] tracking-widest font-semibold uppercase text-champagne-300 bg-burgundy-900/80 px-2.5 py-0.5 rounded-full border border-champagne-400/40">
                  Birthday Queen
                </span>
                <p className="font-serif text-xl font-bold text-white mt-1">
                  {storyData.person.fullName}
                </p>
                <p className="text-xs text-rose-200/90 font-script text-base">
                  Forever my favourite person ❤️
                </p>
              </div>

              {/* Sparkle badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-champagne-400/20 backdrop-blur-md border border-champagne-300/40 flex items-center justify-center">
                <Gift className="w-4 h-4 text-champagne-300" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button: Let's Relive Our Story ❤️ */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={scrollToNext}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 via-rose-700 to-rose-600 text-white font-serif text-lg font-semibold tracking-wide shadow-[0_10px_30px_rgba(225,29,72,0.5)] hover:shadow-[0_12px_40px_rgba(225,29,72,0.7)] hover:scale-105 transition-all duration-300 border border-rose-400/40"
          >
            <Heart className="w-5 h-5 text-champagne-300 fill-rose-500 group-hover:scale-125 transition duration-300" />
            <span>Let's Relive Our Story ❤️</span>
            <Sparkles className="w-4 h-4 text-champagne-300 group-hover:rotate-45 transition duration-300" />
          </button>
          
          <button
            onClick={scrollToNext}
            className="text-xs text-rose-300/70 hover:text-white flex items-center gap-1 mt-2 animate-bounce transition"
          >
            <span>Scroll down to begin our chapters</span>
            <ChevronDown className="w-4 h-4 text-champagne-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
