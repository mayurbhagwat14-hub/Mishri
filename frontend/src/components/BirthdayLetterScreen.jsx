import React from 'react';
import TransitionWrapper from './TransitionWrapper';
import { birthdayConfig } from '../config/birthdayConfig';
import { Heart, Sparkles, Feather } from 'lucide-react';

export default function BirthdayLetterScreen({ onNext, onBack, disabled }) {
  const { screenFour, nickname } = birthdayConfig;

  return (
    <TransitionWrapper>
      <div className="badge-tag">
        <Feather size={14} color="#D88FA5" />
        <span>A Letter For You</span>
      </div>

      <div className="stationery-letter">
        <div className="stationery-watermark-flower" aria-hidden="true">
          🌸
        </div>

        <h1 className="letter-heading">
          {screenFour.heading(nickname)}
        </h1>

        <p className="letter-subtitle">
          {screenFour.subtitle}
        </p>

        <div className="letter-divider" />

        <div className="letter-content">
          {screenFour.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="letter-sign-off">
          {screenFour.signOff}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          type="button"
          className="btn-secondary"
          onClick={onBack}
          disabled={disabled}
        >
          ← Back
        </button>

        <button
          id="btn-one-more-thing"
          type="button"
          className="btn-primary btn-breathing"
          onClick={onNext}
          disabled={disabled}
        >
          <span>{screenFour.buttonText}</span>
          <Heart size={18} fill="#FFFFFF" />
        </button>
      </div>
    </TransitionWrapper>
  );
}
