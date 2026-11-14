import React from 'react';
import { Star, Sparkles, Infinity, Heart, CheckCircle2 } from 'lucide-react';
import { ThreeHeart } from '../ThreeHeart';
import { storyData } from '../../data/storyData';

export const WaitingForForeverSection: React.FC = () => {
  const { futureStory } = storyData;

  return (
    <section id="future" className="relative py-28 px-4 sm:px-6 overflow-hidden bg-burgundy-950">
      {/* Night-sky starfield simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-burgundy-950 to-burgundy-950 pointer-events-none" />
      
      {/* Scattered twinkling night stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-champagne-400/40 text-champagne-300 text-xs font-medium tracking-widest uppercase mb-4">
            <Infinity className="w-3.5 h-3.5 text-champagne-400" />
            Chapter 06 : Our Waiting Forever
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {futureStory.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-6" />
        </div>

        {/* Two glowing stars moving closer together */}
        <div className="my-10 max-w-lg mx-auto p-6 rounded-3xl glass-card-gold text-center relative border border-champagne-400/30">
          <p className="text-xs uppercase font-mono tracking-widest text-champagne-300 mb-6">
            Two Destined Stars Converging In The Cosmos
          </p>
          
          <div className="relative h-20 flex items-center justify-between px-6">
            {/* Star 1 */}
            <div className="flex flex-col items-center animate-[float_4s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-full bg-champagne-400/20 flex items-center justify-center shadow-[0_0_20px_#ffd875]">
                <Star className="w-7 h-7 text-champagne-300 fill-champagne-400 animate-spin-slow" />
              </div>
              <span className="text-[10px] text-champagne-300 font-serif mt-1">My Heart</span>
            </div>

            {/* Glowing trajectory line */}
            <div className="flex-1 mx-4 relative flex items-center justify-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-champagne-400 via-rose-500 to-champagne-400" />
              <Heart className="absolute w-5 h-5 text-rose-500 fill-rose-500 animate-ping" />
            </div>

            {/* Star 2 */}
            <div className="flex flex-col items-center animate-[floatRev_4s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-full bg-rose-400/20 flex items-center justify-center shadow-[0_0_20px_#fb7185]">
                <Star className="w-7 h-7 text-rose-300 fill-rose-400 animate-spin-slow" />
              </div>
              <span className="text-[10px] text-rose-300 font-serif mt-1">Chaku's Heart</span>
            </div>
          </div>
        </div>

        {/* Story content & 3D Heart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/20 shadow-xl">
              <div className="flex items-center gap-2 text-champagne-300 mb-4">
                <Sparkles className="w-4 h-4 text-champagne-400" />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  A Story Leading To A Lifetime
                </span>
              </div>

              {futureStory.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-rose-100/90 text-base sm:text-lg leading-relaxed font-light mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Our Promises Ahead */}
            <div className="p-6 rounded-3xl bg-burgundy-900/50 border border-white/5 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-champagne-400 mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400 fill-rose-500" />
                What I Promise You For Our Forever
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {futureStory.promises.map((promise, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-200/90">
                    <CheckCircle2 className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
                    <span>{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Heart in Cosmic Aura */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative p-4">
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/20 to-champagne-400/20 rounded-full blur-2xl" />
              <ThreeHeart size="md" interactive={true} />
              <p className="text-center font-script text-2xl text-champagne-300 mt-2">
                "Our hearts beating as one, forever."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
