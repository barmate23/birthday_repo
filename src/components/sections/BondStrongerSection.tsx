import React from 'react';
import { Heart, Sparkles, Compass, ShieldCheck, Smile } from 'lucide-react';
import { storyData } from '../../data/storyData';

export const BondStrongerSection: React.FC = () => {
  const { bondStory } = storyData;

  const pillarIcons: { [key: string]: React.ReactNode } = {
    Compassion: <Compass className="w-6 h-6 text-champagne-400" />,
    Smile: <Smile className="w-6 h-6 text-rose-400" />,
    Heart: <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
  };

  return (
    <section id="bond" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-romantic-radial">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-500/30 text-rose-300 text-xs font-medium tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-champagne-400" />
            Chapter 04 : The Deepening Bond
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {bondStory.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-6" />
        </div>

        {/* Story Content & Central Heart Connection Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/20 shadow-xl">
              <div className="flex items-center gap-2 text-champagne-300 mb-4">
                <Sparkles className="w-4 h-4 text-champagne-400" />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  Beyond Just Talking
                </span>
              </div>

              {bondStory.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-rose-100/90 text-base sm:text-lg leading-relaxed font-light mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Interactive Visual: Two Hearts Connected Across Space */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full glass-card-gold p-8 rounded-3xl border border-champagne-400/30 text-center relative">
              <div className="flex items-center justify-between mb-8 relative">
                {/* Heart 1: Him */}
                <div className="flex flex-col items-center z-10">
                  <div className="w-16 h-16 rounded-2xl bg-burgundy-900 border-2 border-champagne-400 flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-rose-400 fill-rose-500 animate-pulse" />
                  </div>
                  <span className="text-xs font-serif text-champagne-300 mt-2">Him</span>
                </div>

                {/* Animated Connecting Glowing Beam */}
                <div className="flex-1 mx-4 relative flex items-center justify-center">
                  <div className="w-full h-1 bg-gradient-to-r from-rose-500 via-champagne-400 to-rose-500 relative">
                    {/* Travelling spark */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#ffffff] animate-[shimmer_2s_infinite]" />
                  </div>
                  <span className="absolute px-3 py-1 rounded-full bg-burgundy-950 border border-champagne-400/40 text-[11px] font-mono text-champagne-300 whitespace-nowrap">
                    Destined Connection ❤️
                  </span>
                </div>

                {/* Heart 2: Her (Chaku) */}
                <div className="flex flex-col items-center z-10">
                  <div className="w-16 h-16 rounded-2xl bg-burgundy-900 border-2 border-champagne-400 flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-rose-400 fill-rose-500 animate-pulse" />
                  </div>
                  <span className="text-xs font-serif text-champagne-300 mt-2">Chaku</span>
                </div>
              </div>

              <p className="font-serif italic text-rose-100 text-base leading-relaxed">
                "It was no longer just about two individuals... it was about two hearts beating in harmony."
              </p>
            </div>
          </div>
        </div>

        {/* Three Relationship Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bondStory.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-white/5 hover:border-champagne-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-burgundy-900/80 border border-white/10 flex items-center justify-center mb-4">
                {pillarIcons[pillar.icon] || <Heart className="w-6 h-6 text-rose-400" />}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-rose-200/80 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
