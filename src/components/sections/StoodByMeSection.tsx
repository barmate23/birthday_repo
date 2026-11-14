import React from 'react';
import { HeartHandshake, Quote, Sparkles, Heart } from 'lucide-react';
import { storyData } from '../../data/storyData';

export const StoodByMeSection: React.FC = () => {
  const { supportStory } = storyData;

  return (
    <section id="support" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-burgundy-950">
      {/* Warm golden glow reflecting her unconditional support */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne-500/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-champagne-400/40 text-champagne-300 text-xs font-medium tracking-widest uppercase mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-champagne-400" />
            Chapter 05 : Unconditional Support
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {supportStory.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-6" />
        </div>

        {/* Cinematic Letter / Appreciation Showcase */}
        <div className="relative glass-card-gold p-8 sm:p-12 md:p-16 rounded-[36px] border-2 border-champagne-400/40 shadow-[0_0_60px_rgba(212,175,55,0.15)] overflow-hidden">
          {/* Subtle watermark quote icon */}
          <Quote className="absolute -top-6 -right-6 w-48 h-48 text-champagne-400/5 rotate-12 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-2 text-champagne-300 font-script text-2xl sm:text-3xl">
              <span>My Dearest Shradha,</span>
            </div>

            {supportStory.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-serif text-lg sm:text-xl md:text-2xl text-rose-100/95 leading-relaxed font-light"
              >
                {para}
              </p>
            ))}

            {/* Special Highlight Callout */}
            <div className="my-8 p-6 sm:p-8 rounded-2xl bg-burgundy-900/80 border-l-4 border-champagne-400 shadow-inner">
              <p className="font-serif italic text-xl sm:text-2xl text-champagne-200 leading-snug">
                {supportStory.quoteHighlight}
              </p>
            </div>

            {/* Bottom Signature */}
            <div className="pt-6 border-t border-rose-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-rose-300/80">
                <Sparkles className="w-4 h-4 text-champagne-400" />
                <span>Believing in each other, always and unconditionally.</span>
              </div>
              <div className="flex items-center gap-2 font-script text-2xl sm:text-3xl text-rose-300">
                <span>Forever grateful to have you</span>
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
