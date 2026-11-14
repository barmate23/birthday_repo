import React from 'react';
import { Heart, Sparkles, MessageCircle, CheckCheck, Users, Compass } from 'lucide-react';
import { storyData } from '../../data/storyData';

export const MatrimonySection: React.FC = () => {
  const { matrimonyStory, person } = storyData;

  return (
    <section id="beginning" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-burgundy-950">
      {/* Subtle backdrop elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-champagne-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-500/30 text-rose-300 text-xs font-medium tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-champagne-400" />
            Chapter 01 : The Beginning
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {matrimonyStory.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-500/10 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3 text-champagne-300 mb-4">
                <Users className="w-5 h-5 text-champagne-400" />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  A Destiny Made Connection
                </span>
              </div>

              {matrimonyStory.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-rose-100/90 text-base sm:text-lg leading-relaxed font-light mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}

              <div className="pt-6 mt-6 border-t border-rose-900/40 grid grid-cols-3 gap-3 text-center">
                {matrimonyStory.stats.map((s, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-burgundy-900/40 border border-white/5">
                    <p className="text-[10px] sm:text-xs text-rose-300/70 uppercase tracking-wider mb-1">
                      {s.label}
                    </p>
                    <p className="text-xs sm:text-sm font-serif font-bold text-champagne-300 truncate">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Matrimony Interface & Chat Simulation */}
          <div className="lg:col-span-6">
            <div className="glass-card-gold rounded-3xl p-6 border border-champagne-400/30 shadow-2xl relative">
              {/* Matrimony Header Mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-rose-900/40 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-champagne-400 shadow-md">
                      <img
                        src={storyData.galleryMemories[2].imageUrl}
                        alt={person.nickname}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-burgundy-950 rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif font-bold text-white text-base">
                        {person.fullName}
                      </h4>
                      <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                    </div>
                    <p className="text-xs text-rose-300/80">
                      Matched via Matrimony • <span className="text-champagne-300 font-medium">100% Destined</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-500" />
                  <span>Connected</span>
                </div>
              </div>

              {/* Chat Simulation Area */}
              <div className="space-y-3.5 py-2 max-h-[380px] overflow-y-auto pr-1">
                {matrimonyStory.chats.map((chat) => (
                  <div
                    key={chat.id}
                    className={`flex flex-col ${
                      chat.sender === 'him' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-md transition-all duration-300 hover:scale-[1.01] ${
                        chat.sender === 'him'
                          ? 'bg-gradient-to-r from-rose-700 to-rose-600 text-white rounded-tr-none border border-rose-400/20'
                          : 'bg-burgundy-900/90 text-rose-100 rounded-tl-none border border-champagne-500/20'
                      }`}
                    >
                      <p className="leading-snug">{chat.text}</p>
                      <div
                        className={`flex items-center gap-1 text-[10px] mt-1 ${
                          chat.sender === 'him' ? 'text-rose-200/70 justify-end' : 'text-rose-300/60'
                        }`}
                      >
                        <span>{chat.time}</span>
                        {chat.sender === 'him' && (
                          <CheckCheck className="w-3 h-3 text-champagne-300" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Chat Prompt Footer */}
              <div className="mt-4 pt-3 border-t border-rose-900/40 flex items-center justify-between text-xs text-rose-300/80">
                <span className="flex items-center gap-1.5 font-script text-base text-champagne-300">
                  <MessageCircle className="w-4 h-4 text-rose-400" />
                  And just like that, our forever story began to unfold...
                </span>
                <Heart className="w-4 h-4 text-rose-400 fill-rose-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
