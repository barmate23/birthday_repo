import React, { useState } from 'react';
import { Eye, Heart, RotateCw, MapPin, Sparkles, Smile } from 'lucide-react';
import { storyData } from '../../data/storyData';

export const TwoMeetingsSection: React.FC = () => {
  const { meetingStory } = storyData;
  // Track flip state for meeting 1 and meeting 2
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false
  });

  const toggleFlip = (num: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [num]: !prev[num]
    }));
  };

  return (
    <section id="meetings" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-burgundy-950">
      {/* Soft background light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-champagne-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-500/30 text-rose-300 text-xs font-medium tracking-widest uppercase mb-4">
            <Eye className="w-3.5 h-3.5 text-champagne-400" />
            Chapter 03 : The Meetings & The Shy Glances
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {meetingStory.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-6" />
        </div>

        {/* Story Intro & That Iconic Eye-Contact Callout */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/20 text-center relative overflow-hidden">
            <div className="space-y-4 max-w-2xl mx-auto">
              {meetingStory.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-base sm:text-lg leading-relaxed ${
                    p.includes('eye contact')
                      ? 'font-serif text-xl sm:text-2xl font-bold text-champagne-300 py-2 border-y border-champagne-400/20'
                      : 'text-rose-100/90 font-light'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Playful Eye Contact Scorecard */}
            <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-burgundy-900/90 border border-champagne-400/30 text-champagne-200 text-xs sm:text-sm font-medium shadow-lg">
              <Smile className="w-4 h-4 text-champagne-400" />
              <span>{meetingStory.specialMemoryHighlight}</span>
            </div>
          </div>
        </div>

        {/* 3D Flipping Memory Cards for Meeting 1 & Meeting 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {meetingStory.meetings.map((m) => {
            const isFlipped = flippedCards[m.number];
            return (
              <div
                key={m.number}
                className="perspective-1000 w-full h-[480px] sm:h-[520px] cursor-pointer group"
                onClick={() => toggleFlip(m.number)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT CARD: Mystery / Envelope Style */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl glass-card-gold p-8 flex flex-col justify-between border-2 border-champagne-400/30 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-rose-600/20 to-transparent pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-950 border border-rose-500/40 text-champagne-300">
                          {m.dateLabel}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-champagne-400/80">
                          <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                          <span>Tap to flip</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                        {m.title}
                      </h3>
                      <p className="text-xs text-rose-300 flex items-center gap-1.5 mb-6">
                        <MapPin className="w-3.5 h-3.5 text-champagne-400" />
                        {m.locationLabel}
                      </p>
                    </div>

                    {/* Center decorative seal */}
                    <div className="my-auto flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 to-champagne-400 p-[2px] shadow-[0_0_25px_rgba(212,175,55,0.4)] group-hover:scale-110 transition duration-300">
                        <div className="w-full h-full rounded-full bg-burgundy-950 flex items-center justify-center">
                          <Heart className="w-9 h-9 text-rose-400 fill-rose-500 animate-pulse" />
                        </div>
                      </div>
                      <p className="font-serif italic text-rose-100 text-lg mt-4 max-w-xs">
                        "{m.memoryNote}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-rose-900/40 flex items-center justify-between text-xs text-champagne-300">
                      <span className="font-script text-base">Click to reveal photograph</span>
                      <Sparkles className="w-4 h-4 text-champagne-400" />
                    </div>
                  </div>

                  {/* BACK CARD: Revealed Photograph with Captions */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl glass-card overflow-hidden border-2 border-champagne-400/50 shadow-2xl flex flex-col">
                    <div className="relative w-full h-3/5 overflow-hidden">
                      <img
                        src={m.imageUrl}
                        alt={m.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-transparent to-transparent" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(m.number);
                        }}
                        className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs text-white border border-white/20 flex items-center gap-1"
                      >
                        <RotateCw className="w-3 h-3 text-champagne-300" /> Flip back
                      </button>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between bg-burgundy-950">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-400 block mb-1">
                          Memory Snapshot
                        </span>
                        <h4 className="font-serif text-xl font-bold text-white mb-2">
                          {m.title}
                        </h4>
                        <p className="text-xs text-rose-100/90 leading-relaxed font-light mb-3">
                          {m.memoryNote}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-burgundy-900/70 border border-champagne-500/20 text-xs text-champagne-200">
                        <span className="font-semibold block text-champagne-300 mb-0.5">
                          Eye Contact Chronicle 😄
                        </span>
                        {m.eyeContactNote}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-rose-300/70 mt-8 font-mono">
          ✦ Click either card to flip and view our meeting memories ✦
        </p>
      </div>
    </section>
  );
};
