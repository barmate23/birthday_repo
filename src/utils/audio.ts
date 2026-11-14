/**
 * Romantic Audio Engine with Web Audio API
 * Provides soothing romantic piano & ambient chords,
 * candle blowing sound effect, and celebration fanfare.
 */

class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private isMuted = false;
  private volume = 0.6;
  private masterGain: GainNode | null = null;
  private melodyInterval: any = null;
  private audioEl: HTMLAudioElement | null = null;
  private listeners: ((playing: boolean) => void)[] = [];

  constructor() {
    // Lazy init on first user gesture
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public subscribe(fn: (playing: boolean) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach(l => l(this.isPlaying));
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    if (this.audioEl) {
      this.audioEl.volume = this.volume;
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    if (this.audioEl) {
      this.audioEl.muted = this.isMuted;
    }
  }

  public togglePlay(customUrl?: string): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play(customUrl);
      return true;
    }
  }

  public play(customUrl?: string) {
    this.initContext();
    this.isPlaying = true;
    this.notify();

    if (customUrl) {
      if (!this.audioEl) {
        this.audioEl = new Audio(customUrl);
        this.audioEl.loop = true;
      }
      this.audioEl.play().catch(() => {
        // Fallback to synth if external audio fails or blocked
        this.startRomanticMelody();
      });
    } else {
      this.startRomanticMelody();
    }
  }

  public pause() {
    this.isPlaying = false;
    this.notify();
    if (this.audioEl) {
      this.audioEl.pause();
    }
    if (this.melodyInterval) {
      clearInterval(this.melodyInterval);
      this.melodyInterval = null;
    }
  }

  /**
   * Generates a warm, emotional ambient romantic chord progression & gentle piano notes
   * Key: D-flat major / F major (F - C/E - Dm - Bb) with soft overtone resonance
   */
  private startRomanticMelody() {
    if (this.melodyInterval) clearInterval(this.melodyInterval);

    // Warm chord progression frequencies: Fmaj, C, Dmin, Bbmaj7
    const chords = [
      [174.61, 220.00, 261.63, 349.23], // Fmaj
      [130.81, 164.81, 196.00, 261.63], // C
      [146.83, 174.61, 220.00, 293.66], // Dm
      [116.54, 146.83, 174.61, 233.08]  // Bbmaj
    ];

    // Piano melody notes (high octave)
    const melodyNotes = [
      349.23, 392.00, 440.00, 523.25, 587.33, 659.25, 698.46
    ];

    let chordIdx = 0;
    let step = 0;

    const playStep = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      // Play pad note on every 4 steps (chord change)
      if (step % 4 === 0) {
        const chord = chords[chordIdx % chords.length];
        chord.forEach((freq) => {
          this.playPadVoice(freq, 3.8);
        });
        chordIdx++;
      }

      // Play soft piano/harp arpeggio note
      if (Math.random() > 0.2) {
        const note = melodyNotes[Math.floor(Math.random() * melodyNotes.length)];
        this.playPianoNote(note, 1.8);
      }

      step++;
    };

    playStep();
    this.melodyInterval = setInterval(playStep, 1000);
  }

  private playPadVoice(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch {
      // Ignored
    }
  }

  private playPianoNote(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc2.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc2.frequency.setValueAtTime(freq * 2.002, this.ctx.currentTime); // Subtle shimmer detune

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + duration);
      osc2.stop(now + duration);
    } catch {
      // Ignored
    }
  }

  /**
   * Sound effect: Realistic candle blowing (air whoosh + gentle fairy chime)
   */
  public playCandleBlowSound() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      
      // Air whoosh simulation with noise buffer
      const bufferSize = this.ctx.sampleRate * 1.2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(250, now + 1.0);
      filter.Q.setValueAtTime(2.5, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.2, now + 0.3);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      whiteNoise.start(now);
      whiteNoise.stop(now + 1.2);

      // Magical sparkle chimes right after blow
      const chimeNotes = [880, 1174.66, 1396.91, 1760];
      chimeNotes.forEach((f, idx) => {
        const chimeOsc = this.ctx!.createOscillator();
        const chimeGain = this.ctx!.createGain();
        chimeOsc.type = 'sine';
        chimeOsc.frequency.setValueAtTime(f, now + 0.6 + idx * 0.12);

        chimeGain.gain.setValueAtTime(0.06, now + 0.6 + idx * 0.12);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6 + idx * 0.12);

        chimeOsc.connect(chimeGain);
        chimeGain.connect(this.masterGain!);

        chimeOsc.start(now + 0.6 + idx * 0.12);
        chimeOsc.stop(now + 1.8 + idx * 0.12);
      });
    } catch {
      // Ignored
    }
  }

  /**
   * Sound effect: Romantic proposal celebration fanfare (glockenspiel / harp arpeggio)
   */
  public playCelebrationSound() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      // Majestic harp flourish in D-flat / F major
      const notes = [
        349.23, 440.0, 523.25, 698.46, 880.0, 1046.5, 1396.91, 1760.0
      ];

      notes.forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const osc2 = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'triangle';
        osc2.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        osc2.frequency.setValueAtTime(freq * 1.5, now + i * 0.08);

        const startTime = now + i * 0.08;
        const dur = 2.4;

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + dur);

        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(startTime);
        osc2.start(startTime);
        osc.stop(startTime + dur);
        osc2.stop(startTime + dur);
      });
    } catch {
      // Ignored
    }
  }
}

export const audioEngine = new RomanticAudioEngine();
