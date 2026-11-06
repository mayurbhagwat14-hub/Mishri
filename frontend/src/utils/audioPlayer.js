/**
 * Happy Birthday Melodic Synthesizer using Web Audio API
 * Plays the iconic "Happy Birthday To You" melody with sweet music-box / bell chimes
 * 100% self-contained, instant playback on user click without loading delays
 */

class HappyBirthdaySynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.currentNoteIndex = 0;

    // Frequencies (Hz)
    const G4 = 392.00;
    const A4 = 440.00;
    const B4 = 493.88;
    const C5 = 523.25;
    const D5 = 587.33;
    const E5 = 659.25;
    const F5 = 698.46;
    const G5 = 783.99;

    // Tempo unit: 1 beat = 420ms
    // Note format: [frequency, durationInBeats, pauseBeforeNext]
    this.melody = [
      // Line 1: Happy Birthday to you
      { freq: G4, dur: 0.75, pause: 0.8 },
      { freq: G4, dur: 0.25, pause: 0.3 },
      { freq: A4, dur: 1.0,  pause: 1.0 },
      { freq: G4, dur: 1.0,  pause: 1.0 },
      { freq: C5, dur: 1.0,  pause: 1.0 },
      { freq: B4, dur: 1.8,  pause: 2.0 },

      // Line 2: Happy Birthday to you
      { freq: G4, dur: 0.75, pause: 0.8 },
      { freq: G4, dur: 0.25, pause: 0.3 },
      { freq: A4, dur: 1.0,  pause: 1.0 },
      { freq: G4, dur: 1.0,  pause: 1.0 },
      { freq: D5, dur: 1.0,  pause: 1.0 },
      { freq: C5, dur: 1.8,  pause: 2.0 },

      // Line 3: Happy Birthday dear cutie
      { freq: G4, dur: 0.75, pause: 0.8 },
      { freq: G4, dur: 0.25, pause: 0.3 },
      { freq: G5, dur: 1.0,  pause: 1.0 },
      { freq: E5, dur: 1.0,  pause: 1.0 },
      { freq: C5, dur: 1.0,  pause: 1.0 },
      { freq: B4, dur: 1.0,  pause: 1.0 },
      { freq: A4, dur: 1.8,  pause: 2.0 },

      // Line 4: Happy Birthday to you!
      { freq: F5, dur: 0.75, pause: 0.8 },
      { freq: F5, dur: 0.25, pause: 0.3 },
      { freq: E5, dur: 1.0,  pause: 1.0 },
      { freq: C5, dur: 1.0,  pause: 1.0 },
      { freq: D5, dur: 1.0,  pause: 1.0 },
      { freq: C5, dur: 2.2,  pause: 2.6 }
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playChime(freq, durationSeconds) {
    if (!this.ctx || this.ctx.state !== "running") return;

    try {
      const now = this.ctx.currentTime;

      // Primary soft sine oscillator (music box / bell)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(freq, now);

      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.12, now + 0.02);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(durationSeconds, 0.6));

      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);

      osc1.start(now);
      osc1.stop(now + Math.max(durationSeconds, 0.6) + 0.1);

      // Sweet subtle harmonic overtone for warm celeste shimmer
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(freq * 2, now); // 1 octave higher

      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.035, now + 0.015);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(durationSeconds * 0.75, 0.4));

      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);

      osc2.start(now);
      osc2.stop(now + Math.max(durationSeconds * 0.75, 0.4) + 0.1);
    } catch {
      // Audio fallback
    }
  }

  start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    if (this.isPlaying) return;

    this.isPlaying = true;
    this.currentNoteIndex = 0;
    this.step();
  }

  step() {
    if (!this.isPlaying) return;

    const note = this.melody[this.currentNoteIndex];
    const beatTimeMs = 400; // Tempo base

    this.playChime(note.freq, (note.dur * beatTimeMs) / 1000);

    const pauseMs = note.pause * beatTimeMs;

    this.currentNoteIndex = (this.currentNoteIndex + 1) % this.melody.length;

    // If melody finishes one round, pause for 1.5 seconds before repeating softly
    const delay = (this.currentNoteIndex === 0) ? 1500 : pauseMs;

    this.timerId = setTimeout(() => {
      this.step();
    }, delay);
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const happyBirthdayPlayer = new HappyBirthdaySynth();
export const lullabyPlayer = happyBirthdayPlayer; // backward compatibility
