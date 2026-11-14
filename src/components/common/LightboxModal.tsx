import React from 'react';
import { X, Calendar, MapPin } from 'lucide-react';
import { StoryMemory } from '../../types';

interface LightboxProps {
  memory: StoryMemory | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxProps> = ({ memory, onClose }) => {
  if (!memory) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-3xl glass-card-gold p-4 sm:p-6 border border-champagne-400/40 shadow-2xl flex flex-col md:flex-row gap-6 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-rose-200 hover:text-white flex items-center justify-center border border-white/20 transition hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="w-full md:w-3/5 h-64 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden bg-burgundy-950/80 relative flex items-center justify-center">
          <img
            src={memory.imageUrl}
            alt={memory.title}
            className="w-full h-full object-cover rounded-2xl shadow-inner"
            loading="lazy"
          />
        </div>

        {/* Memory Content */}
        <div className="w-full md:w-2/5 flex flex-col justify-between py-2 text-rose-50">
          <div>
            {memory.tag && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-950/80 border border-rose-500/40 text-rose-300 mb-3">
                {memory.tag}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              {memory.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-rose-100/90 leading-relaxed mb-6">
              {memory.description}
            </p>
          </div>

          <div className="pt-4 border-t border-rose-900/40 space-y-2 text-xs text-rose-300/80">
            {memory.date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-champagne-400" />
                <span>{memory.date}</span>
              </div>
            )}
            {memory.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{memory.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
