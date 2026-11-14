import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Cake, Sparkles, Heart, Wind, Gift, ArrowRight } from 'lucide-react';
import { audioEngine } from '../../utils/audio';
import { storyData } from '../../data/storyData';

export const BirthdayCelebrationSection: React.FC = () => {
  const { person } = storyData;
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  const handleBlowCandles = () => {
    if (candlesBlown) return;

    setIsBlowing(true);
    audioEngine.playCandleBlowSound();

    setTimeout(() => {
      setCandlesBlown(true);
      setIsBlowing(false);

      // Trigger colorful birthday confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#e11d48', '#d4af37', '#fb7185', '#ffd700', '#ffffff']
      });
    }, 600);
  };

  const scrollToValentine = () => {
    const el = document.getElementById('valentine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="wishes" className="relative py-28 px-4 sm:px-6 overflow-hidden bg-romantic-radial">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-champagne-400/40 text-champagne-300 text-xs font-medium tracking-widest uppercase mb-4">
            <Cake className="w-3.5 h-3.5 text-champagne-400" />
            Chapter 07 : Birthday Wishes & Cake
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {person.birthdayWishHeading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Birthday Cake Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="glass-card-gold p-8 rounded-3xl border border-champagne-400/40 w-full max-w-md text-center shadow-2xl relative overflow-hidden">
              <span className="text-xs uppercase font-mono tracking-widest text-champagne-300 block mb-6">
                ✦ Make A Wish, Chaku ✦
              </span>

              {/* 3D-styled Multi-layer Birthday Cake */}
              <div className="relative my-8 flex flex-col items-center justify-center">
                {/* Candles Row */}
                <div className="flex items-end justify-center gap-4 sm:gap-6 mb-1 relative z-20">
                  {[0, 1, 2].map((idx) => (
                    <div key={idx} className="flex flex-col items-center relative">
                      {/* Flame or Smoke */}
                      {!candlesBlown ? (
                        <div
                          className={`w-4 h-6 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white candle-flame ${
                            isBlowing ? 'scale-75 opacity-50' : ''
                          }`}
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        />
                      ) : (
                        <div className="w-2 h-6 flex flex-col items-center smoke-puff">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400/60 blur-[1px]" />
                        </div>
                      )}

                      {/* Wick */}
                      <div className="w-0.5 h-2 bg-gray-900" />

                      {/* Candle Stick */}
                      <div className="w-3 h-10 rounded-sm bg-gradient-to-b from-champagne-300 to-rose-400 shadow-sm border-t border-white/40" />
                    </div>
                  ))}
                </div>

                {/* Cake Top Tier */}
                <div className="w-40 sm:w-48 h-14 rounded-2xl bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400 shadow-md border-b-2 border-rose-600/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-3 bg-white/40 rounded-b-xl" />
                  <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
                </div>

                {/* Cake Bottom Tier */}
                <div className="w-56 sm:w-64 h-18 rounded-2xl bg-gradient-to-r from-burgundy-800 via-rose-700 to-burgundy-800 shadow-xl border-t-2 border-champagne-400/40 flex items-center justify-center relative -mt-1">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-champagne-300" />
                    <span className="font-script text-xl text-champagne-200">
                      Happy Birthday Shradha
                    </span>
                    <Sparkles className="w-4 h-4 text-champagne-300" />
                  </div>
                </div>

                {/* Cake Stand / Plate */}
                <div className="w-64 sm:w-72 h-4 rounded-full bg-gradient-to-r from-champagne-400 via-champagne-200 to-champagne-400 shadow-[0_4px_20px_rgba(212,175,55,0.4)] mt-1" />
              </div>

              {/* Action Button: Blow Out Candles */}
              {!candlesBlown ? (
                <button
                  onClick={handleBlowCandles}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-champagne-500 via-champagne-400 to-champagne-500 hover:from-champagne-400 hover:to-champagne-300 text-burgundy-950 font-serif font-bold text-base tracking-wide shadow-lg hover:scale-105 transition duration-300 flex items-center justify-center gap-2"
                >
                  <Wind className="w-5 h-5 text-burgundy-950" />
                  <span>Blow Out The Candles 🎂</span>
                </button>
              ) : (
                <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm font-medium animate-fade-in flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-champagne-400" />
                  <span>May all your heartfelt wishes come true! ❤️</span>
                </div>
              )}
            </div>
          </div>

          {/* Birthday Letter & Photos Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-rose-500/20 shadow-2xl relative">
              <div className="flex items-center gap-2 text-champagne-400 mb-6">
                <Gift className="w-5 h-5 text-champagne-400" />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  A Heartfelt Birthday Wish For You
                </span>
              </div>

              <div className="space-y-4 font-serif text-rose-100/90 text-lg sm:text-xl leading-relaxed">
                {person.birthdayWishMessage.map((msg, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0 || idx === person.birthdayWishMessage.length - 1
                        ? 'font-bold text-champagne-300 text-xl sm:text-2xl'
                        : 'font-light'
                    }
                  >
                    {msg}
                  </p>
                ))}
              </div>

              {/* Transition to The Final Surprise */}
              <div className="mt-8 pt-6 border-t border-rose-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-script text-2xl text-rose-300">
                  With all my love and devotion...
                </span>

                <button
                  onClick={scrollToValentine}
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-serif font-semibold text-sm shadow-[0_0_20px_rgba(225,29,72,0.4)] transition hover:scale-105"
                >
                  <span>One Last Surprise For You...</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
