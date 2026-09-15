// Web Audio API sound synthesizer for relaxing ocean ambience & pirate sound effects

class AudioManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private oceanGainNode: GainNode | null = null;
  private oceanSource: AudioNode | null = null;
  private isPlayingOcean: boolean = false;

  constructor() {
    // Check saved audio preference
    const saved = localStorage.getItem('pirate_game_audio_muted');
    if (saved !== null) {
      this.isMuted = saved === 'true';
    }
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    localStorage.setItem('pirate_game_audio_muted', String(this.isMuted));
    if (this.isMuted) {
      this.stopOceanAmbience();
    } else {
      this.startOceanAmbience();
    }
    return this.isMuted;
  }

  // Soothing ocean waves using synthesized pink noise and modulated low-pass filter
  public startOceanAmbience() {
    if (this.isMuted || this.isPlayingOcean) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      // Pink noise algorithm
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Ocean lowpass filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      // LFO for wave ebb and flow (6 seconds wave cycle)
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime); // ~5.5s wave swell
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(260, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      // Main volume node
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.22, this.ctx.currentTime + 2.5);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      whiteNoise.start();
      lfo.start();

      this.oceanSource = whiteNoise;
      this.oceanGainNode = masterGain;
      this.isPlayingOcean = true;
    } catch {
      // Graceful fallback if Web Audio is blocked prior to user interaction
    }
  }

  public stopOceanAmbience() {
    if (!this.isPlayingOcean) return;
    try {
      if (this.oceanGainNode && this.ctx) {
        this.oceanGainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1);
        setTimeout(() => {
          this.oceanSource?.disconnect();
          this.isPlayingOcean = false;
        }, 1100);
      } else {
        this.isPlayingOcean = false;
      }
    } catch {
      this.isPlayingOcean = false;
    }
  }

  // Play pleasant pirate gold coin jingle
  public playCoinSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      
      const freqs = [987.77, 1318.51, 1975.53]; // B5, E6, B6 chime
      freqs.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } catch {
      // Ignored
    }
  }

  // Play triumphant fanfare for correct answer
  public playCorrectSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      notes.forEach((note, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note, now + idx * 0.1);

        gain.gain.setValueAtTime(0.2, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.55);
      });
    } catch {
      // Ignored
    }
  }

  // Play gentle dull thud for mistake
  public playWrongSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.3);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.38);
    } catch {
      // Ignored
    }
  }

  // Play seagull cry in the distance
  public playSeagull() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.linearRampToValueAtTime(2100, now + 0.15);
      osc.frequency.linearRampToValueAtTime(1300, now + 0.4);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.48);
    } catch {
      // Ignored
    }
  }

  // Ticking sound when time is running low
  public playTimerTick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Ignored
    }
  }

  // Grand fanfare for opening the ultimate treasure chest (500 gold + 100 diamonds)
  public playGrandChestOpening() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      
      // Brass fanfare chords
      const chords = [
        [392.00, 523.25, 659.25], // G4, C5, E5
        [440.00, 587.33, 698.46], // A4, D5, F5
        [523.25, 659.25, 783.99], // C5, E5, G5
        [587.33, 783.99, 987.77, 1046.50] // D5, G5, B5, C6 (Resolve)
      ];

      chords.forEach((chord, step) => {
        const stepTime = now + step * 0.28;
        chord.forEach(freq => {
          const osc = this.ctx!.createOscillator();
          const gain = this.ctx!.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, stepTime);

          const dur = step === chords.length - 1 ? 1.4 : 0.25;
          gain.gain.setValueAtTime(0.18, stepTime);
          gain.gain.exponentialRampToValueAtTime(0.001, stepTime + dur);

          osc.connect(gain);
          gain.connect(this.ctx!.destination);

          osc.start(stepTime);
          osc.stop(stepTime + dur + 0.1);
        });
      });
    } catch {
      // Ignored
    }
  }

  // Wooden button tap
  public playButtonClick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.05);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Ignored
    }
  }
}

export const audio = new AudioManager();
