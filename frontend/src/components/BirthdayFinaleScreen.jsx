import React, { useEffect } from 'react';
import TransitionWrapper from './TransitionWrapper';
import { birthdayConfig } from '../config/birthdayConfig';
import { Heart, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BirthdayFinaleScreen({ onReplay, disabled }) {
  const { screenSix } = birthdayConfig;

  // Soft, delicate sparkle release on finale entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        confetti({
          particleCount: 30,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#FFF8F1', '#F4C4CF', '#D88FA5', '#E6DDF5', '#FCEFD5'],
          scalar: 0.85,
          ticks: 300,
          disableForReducedMotion: true
        });
      } catch {
        // graceful
      }
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TransitionWrapper>
      <div
        className="image-hero-frame"
        style={{
          maxWidth: '380px',
          boxShadow: '0 16px 38px rgba(112, 70, 83, 0.16)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5EC 100%)',
          marginBottom: '20px'
        }}
      >
        <img
          src={screenSix.sunsetSceneImage}
          alt="Two cute kittens looking toward a warm glowing sunset horizon"
          loading="eager"
          style={{ height: '230px', objectFit: 'cover' }}
        />
      </div>

      {/* Message Card Container - High contrast, prominent & easily readable */}
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto 22px',
          background: '#FFFFFF',
          borderRadius: '22px',
          padding: '24px 22px',
          boxShadow: '0 12px 35px rgba(112, 70, 83, 0.12)',
          border: '1.5px solid rgba(244, 196, 207, 0.7)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}
      >
        {screenSix.message.map((msg, idx) => (
          <p
            key={idx}
            style={{
              margin: 0,
              fontSize: idx === 0 ? '1.14rem' : '1.02rem',
              fontWeight: idx === 0 ? 700 : 500,
              color: idx === 0 ? '#DF6E82' : '#4E2C37',
              lineHeight: 1.62,
              letterSpacing: '0.01em'
            }}
          >
            {msg}
          </p>
        ))}

        <div
          style={{
            fontFamily: "var(--font-handwriting)",
            fontSize: '1.85rem',
            color: '#DF6E82',
            fontWeight: 700,
            marginTop: '8px',
            lineHeight: 1.25
          }}
        >
          {screenSix.handwrittenNote}
        </div>
      </div>

      <button
        id="btn-replay"
        type="button"
        className="btn-secondary"
        onClick={onReplay}
        disabled={disabled}
        style={{
          padding: '12px 28px',
          fontSize: '0.95rem'
        }}
      >
        <RotateCcw size={16} />
        <span>{screenSix.replayText}</span>
      </button>
    </TransitionWrapper>
  );
}
