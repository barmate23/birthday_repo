import React, { useState } from 'react';
import { Camera, Sparkles, Calendar, MapPin, Maximize2, Heart } from 'lucide-react';
import { StoryMemory } from '../../types';
import { storyData } from '../../data/storyData';
import { LightboxModal } from '../common/LightboxModal';

export const PhotoGallerySection: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<StoryMemory | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Birthday Queen', 'My Chaku', 'Milestone', 'Together', 'Forever'];

  const filteredMemories = activeFilter === 'All'
    ? storyData.galleryMemories
    : storyData.galleryMemories.filter(m => m.tag === activeFilter);

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-burgundy-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-champagne-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-champagne-400/40 text-champagne-300 text-xs font-medium tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-champagne-400" />
            Chapter 08 : Memory Keepsake Album
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Capturing Our Most Cherished Moments ❤️
          </h2>
          <p className="text-rose-200/80 font-serif italic text-base sm:text-lg max-w-xl mx-auto mb-6">
            "Every photograph holds a heartbeat, a quiet smile, and a memory we'll keep for a lifetime."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-8" />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition duration-300 ${
                  activeFilter === f
                    ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-lg border border-rose-400/50'
                    : 'bg-burgundy-900/60 text-rose-300/80 hover:text-white hover:bg-rose-900/40 border border-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Polaroid-style Memory Cards Grid (with swipe support on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemories.map((mem) => (
            <div
              key={mem.id}
              onClick={() => setSelectedMemory(mem)}
              className="group relative cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:rotate-1"
            >
              {/* Polaroid Card Wrapper */}
              <div className="bg-[#fcfaf7] p-4 pb-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-champagne-300/50 relative overflow-hidden text-neutral-900">
                {/* Photo container */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-burgundy-950 mb-4 shadow-inner">
                  <img
                    src={mem.imageUrl}
                    alt={mem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                    <span className="text-white text-xs font-serif flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-champagne-300" /> Click to view full
                    </span>
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  </div>

                  {mem.tag && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-burgundy-950/80 text-champagne-300 border border-champagne-400/40">
                      {mem.tag}
                    </span>
                  )}
                </div>

                {/* Handwritten-style Polaroid Caption */}
                <div className="px-1 text-center">
                  <h4 className="font-serif text-lg font-bold text-burgundy-950 truncate mb-1">
                    {mem.title}
                  </h4>
                  <p className="font-script text-rose-700 text-lg leading-tight line-clamp-1">
                    {mem.description}
                  </p>

                  <div className="mt-2 pt-2 border-t border-neutral-200/80 flex items-center justify-between text-[11px] text-neutral-500 font-sans">
                    {mem.date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-rose-600" /> {mem.date}
                      </span>
                    )}
                    {mem.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-rose-600" /> {mem.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Tape accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-champagne-200/70 rotate-2 backdrop-blur-sm shadow-sm pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Tip for uploading own photos */}
        <div className="mt-14 p-4 rounded-2xl glass-card text-center max-w-xl mx-auto border border-champagne-400/20">
          <p className="text-xs text-rose-200/80 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
            <span>Customize anytime: replace photographs easily in <code className="text-champagne-300 bg-burgundy-900/60 px-1 py-0.5 rounded">src/data/storyData.ts</code></span>
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
    </section>
  );
};
