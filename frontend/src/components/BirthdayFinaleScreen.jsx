import React, { useEffect } from 'react';
import TransitionWrapper from './TransitionWrapper';
import { birthdayConfig } from '../config/birthdayConfig';
import { Heart, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BirthdayFinaleScreen({ onReplay, disabled }) {
  const { screenSix, nickname } = birthdayConfig;

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
          maxWidth: '400px',
          boxShadow: '0 20px 45px rgba(112, 70, 83, 0.18)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5EC 100%)'
        }}
      >
        <img
          src={screenSix.sunsetSceneImage}
          alt="Two cute kittens looking toward a warm glowing sunset horizon"
          loading="eager"
          style={{ height: '260px' }}
        />
      </div>

      <h1 className="heading-script" style={{ fontSize: '2.3rem', marginBottom: '12px' }}>
        {screenSix.heading(nickname)}
      </h1>

      <div
        style={{
          maxWidth: '380px',
          margin: '0 auto 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {screenSix.message.map((msg, idx) => (
          <p key={idx} className="body-warm" style={{ margin: 0, fontSize: '0.96rem' }}>
            {msg}
          </p>
        ))}
      </div>

      <div
        style={{
          fontFamily: "var(--font-handwriting)",
          fontSize: '1.9rem',
          color: 'var(--color-text-deep)',
          fontWeight: 700,
          margin: '10px 0 6px',
          lineHeight: 1.25
        }}
      >
        {screenSix.handwrittenNote}
      </div>

      <div
        style={{
          fontSize: '0.92rem',
          color: 'var(--color-dusty-rose)',
          fontWeight: 600,
          marginBottom: '26px'
        }}
      >
        {screenSix.signature}
      </div>

      <button
        id="btn-replay"
        type="button"
        className="btn-secondary"
        onClick={onReplay}
        disabled={disabled}
        style={{
          padding: '10px 24px',
          fontSize: '0.9rem'
        }}
      >
        <RotateCcw size={15} />
        <span>{screenSix.replayText}</span>
      </button>
    </TransitionWrapper>
  );
}
