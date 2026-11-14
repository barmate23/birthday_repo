import React from 'react';
import { Phone, PhoneCall, Heart, Clock, Laugh, Mic, Volume2 } from 'lucide-react';
import { storyData } from '../../data/storyData';

export const ConversationsSection: React.FC = () => {
  const { conversationStory, person } = storyData;

  return (
    <section id="conversations" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-romantic-radial">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-champagne-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-500/30 text-rose-300 text-xs font-medium tracking-widest uppercase mb-4">
            <PhoneCall className="w-3.5 h-3.5 text-champagne-400" />
            Chapter 02 : Endless Conversations
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {conversationStory.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Smartphone Call Interface Mockup */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-72 sm:w-80 rounded-[40px] p-4 bg-gradient-to-b from-champagne-400/40 via-rose-900/60 to-burgundy-950 border-2 border-champagne-400/30 shadow-[0_0_50px_rgba(225,29,72,0.3)]">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-black/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-rose-900/40" />
              </div>

              {/* Call Card Container */}
              <div className="rounded-[30px] bg-burgundy-900/80 backdrop-blur-xl p-6 text-center border border-white/10 shadow-inner flex flex-col items-center">
                {/* Caller Avatar */}
                <div className="relative my-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-champagne-400 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <img
                      src={storyData.galleryMemories[3].imageUrl}
                      alt={person.nickname}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Pulsing ring */}
                  <span className="absolute -inset-2 rounded-full border-2 border-rose-400/50 animate-ping opacity-60 pointer-events-none" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  Chaku ❤️
                </h3>
                <p className="text-xs text-champagne-300 font-medium mb-6">
                  Connected • Endless Late Night Call
                </p>

                {/* Animated Audio Waveform */}
                <div className="w-full bg-burgundy-950/70 rounded-2xl py-3 px-4 mb-6 border border-rose-500/20">
                  <div className="flex items-center justify-center gap-1.5 h-10">
                    {[16, 28, 42, 24, 38, 48, 30, 20, 44, 32, 18, 36, 46, 22].map((height, i) => (
                      <span
                        key={i}
                        className="w-1 bg-gradient-to-t from-rose-600 to-champagne-400 rounded-full animate-pulse"
                        style={{
                          height: `${height}px`,
                          animationDuration: `${0.8 + (i % 5) * 0.2}s`,
                          animationDelay: `${(i * 0.08)}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-rose-300/80 mt-2">
                    <span className="flex items-center gap-1">
                      <Mic className="w-3 h-3 text-champagne-400" /> Whispers & Laughs
                    </span>
                    <span className="font-mono text-champagne-300">02:14:38</span>
                  </div>
                </div>

                {/* Simulated Call Buttons */}
                <div className="flex items-center justify-center gap-6 mt-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-rose-200">
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-rose-600 shadow-[0_0_20px_rgba(225,29,72,0.6)] flex items-center justify-center text-white">
                    <Heart className="w-7 h-7 fill-white animate-pulse" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-rose-200">
                    <Laugh className="w-5 h-5 text-champagne-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Narrative & Call Memories Timeline */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/20 shadow-xl">
              <div className="flex items-center gap-3 text-champagne-300 mb-4">
                <Clock className="w-5 h-5 text-champagne-400" />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  From Brief Texts to Endless Hours
                </span>
              </div>

              {conversationStory.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-rose-100/90 text-base sm:text-lg leading-relaxed font-light mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Call Logs & Memories */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-champagne-400 px-2 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                Favorite Call Memories We Shared
              </h4>

              {conversationStory.callLogs.map((log, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-2xl border border-white/5 hover:border-champagne-400/40 transition duration-300 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-900/50 flex items-center justify-center text-rose-400">
                      <PhoneCall className="w-4 h-4 text-champagne-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{log.note}</p>
                      <p className="text-xs text-rose-300/70">{log.timestamp}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-champagne-300 bg-burgundy-900/80 px-2.5 py-1 rounded-full border border-champagne-500/20 whitespace-nowrap">
                    {log.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
