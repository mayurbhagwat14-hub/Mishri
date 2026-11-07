import React, { useEffect } from 'react';
import TransitionWrapper from './TransitionWrapper';
import { birthdayConfig } from '../config/birthdayConfig';
import { Sparkles, Cake, Volume2, VolumeX, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import herPhoto from '../assets/image.png';

export default function BirthdayCardScreen({ selectedKitten, onNext, isMusicPlaying, onToggleMusic, disabled }) {
  const { screenSix, nickname } = birthdayConfig;

  // 2-Taraf se 2.8 sec tak celebration confetti blast
  useEffect(() => {
    const duration = 2800; // 2.8 seconds
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.72 },
        colors: ['#FF6B8B', '#FFA8BA', '#FFD166', '#06D6A0', '#118AB2', '#9D4EDD']
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.72 },
        colors: ['#FF6B8B', '#FFA8BA', '#FFD166', '#06D6A0', '#118AB2', '#9D4EDD']
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <TransitionWrapper>
      <div className="birthday-card-container">
        {/* Her Photo Celebration Frame */}
        <div className="birthday-card-hero">
          <img
            src={herPhoto}
            alt="Happy Birthday Rashi"
            className="birthday-hero-img"
            loading="eager"
          />
        </div>

        {/* Main Happy Birthday Heading */}
        <h1 className="birthday-card-title">
          Happy Birthday Rashi ❤️
        </h1>

        {/* Beautiful Birthday Wishes */}
        <div className="birthday-card-letter">
          <p className="birthday-message-p">
            I hope this year brings you closer to your dreams, surrounds you with genuine happiness, and gives you memories you'll always want to keep.
          </p>
          <p className="birthday-message-p">
            Never stop being yourself, never stop dreaming, and never forget that you deserve beautiful things.
          </p>

          <div className="birthday-handwritten-note">
            Today is your day. Make it beautiful. ♡
          </div>
        </div>

        {/* Action Controls: Sound On/Off Button + Next Button */}
        <div className="birthday-card-actions">
          {/* Proper Sound On/Off System Button */}
          <button
            type="button"
            className="sound-toggle-circle-btn"
            onClick={onToggleMusic}
            disabled={disabled}
            aria-label={isMusicPlaying ? "Sound On - Click to mute" : "Sound Off - Click to unmute"}
            title={isMusicPlaying ? "Sound On (Click to Mute)" : "Sound Off (Click to Play)"}
          >
            {isMusicPlaying ? (
              <Volume2 size={20} color="#DF6E82" />
            ) : (
              <VolumeX size={20} color="#8A6C63" />
            )}
          </button>

          {/* Next Button */}
          <button
            id="btn-next-birthday"
            type="button"
            className="btn-primary"
            onClick={onNext}
            disabled={disabled}
            style={{
              padding: '12px 36px',
              fontSize: '1.05rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>Next</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </TransitionWrapper>
  );
}
