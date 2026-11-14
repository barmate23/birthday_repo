import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Sparkles } from 'lucide-react';
import { audioEngine } from '../../utils/audio';
import { storyData } from '../../data/storyData';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [expanded, setExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    setHasInteracted(true);
    audioEngine.togglePlay(storyData.audio.customAudioUrl);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioEngine.toggleMute();
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioEngine.setVolume(val);
    if (isMuted && val > 0) {
      setIsMuted(false);
      audioEngine.toggleMute();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded controls card */}
      {expanded && (
        <div className="mb-3 p-4 rounded-2xl glass-card-gold w-64 text-rose-50 shadow-2xl animate-fade-in border border-champagne-500/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-champagne-300 font-semibold flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5 text-rose-400" />
              Romantic Soundtrack
            </span>
            <button
              onClick={() => setExpanded(false)}
              className="text-xs text-rose-300 hover:text-white"
            >
              ✕
            </button>
          </div>
          <p className="text-sm font-serif font-medium text-white truncate">
            {storyData.audio.defaultTitle}
          </p>
          <p className="text-xs text-rose-300/80 mb-3">
            {storyData.audio.artist}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={handleMuteToggle}
              className="text-rose-300 hover:text-white transition"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-rose-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-champagne-400" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1.5 bg-burgundy-900 rounded-lg appearance-none cursor-pointer accent-champagne-400"
            />
          </div>
          <p className="text-[10px] text-champagne-300/60 mt-2 text-center">
            Piano & strings tuned for Chaku ❤️
          </p>
        </div>
      )}

      {/* Main floating trigger pill */}
      <div className="flex items-center gap-2">
        {!hasInteracted && !isPlaying && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-burgundy-900/90 border border-champagne-500/50 text-xs text-champagne-200 animate-pulse shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
            <span>Play our romantic melody</span>
          </div>
        )}

        <button
          onClick={handleToggle}
          onContextMenu={(e) => {
            e.preventDefault();
            setExpanded(!expanded);
          }}
          className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-full glass-card border transition-all duration-300 shadow-xl ${
            isPlaying
              ? 'border-champagne-400/60 bg-burgundy-900/90 shadow-[0_0_20px_rgba(212,175,55,0.35)]'
              : 'border-rose-400/40 bg-burgundy-950/80 hover:border-rose-400'
          }`}
          aria-label={isPlaying ? "Pause background music" : "Play romantic music"}
          title="Click to play/pause, right-click or long-press for volume"
        >
          {/* Animated sound bars */}
          <div className="flex items-end gap-1 h-4">
            <span
              className={`w-1 bg-rose-400 rounded-full transition-all duration-300 ${
                isPlaying ? 'animate-[bounce_0.8s_ease-in-out_infinite] h-4' : 'h-1.5 opacity-50'
              }`}
            />
            <span
              className={`w-1 bg-champagne-400 rounded-full transition-all duration-300 ${
                isPlaying ? 'animate-[bounce_1.1s_ease-in-out_infinite_0.2s] h-3.5' : 'h-1.5 opacity-50'
              }`}
            />
            <span
              className={`w-1 bg-rose-300 rounded-full transition-all duration-300 ${
                isPlaying ? 'animate-[bounce_0.9s_ease-in-out_infinite_0.4s] h-4' : 'h-1.5 opacity-50'
              }`}
            />
          </div>

          <div className="flex items-center gap-1.5">
            {isPlaying ? (
              <Pause className="w-4 h-4 text-champagne-300 group-hover:scale-110 transition" />
            ) : (
              <Play className="w-4 h-4 text-rose-300 group-hover:scale-110 transition ml-0.5" />
            )}
            <span className="text-xs font-medium tracking-wide text-rose-100 hidden sm:inline">
              {isPlaying ? 'Melody Playing' : 'Play Music'}
            </span>
          </div>

          {/* Settings / expand button */}
          <span
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="text-[10px] text-champagne-300/70 hover:text-champagne-200 border-l border-white/10 pl-2 cursor-pointer"
            title="Audio settings"
          >
            ♫
          </span>
        </button>
      </div>
    </div>
  );
};
