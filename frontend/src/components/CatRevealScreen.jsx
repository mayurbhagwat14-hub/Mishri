import React from 'react';
import TransitionWrapper from './TransitionWrapper';
import { birthdayConfig } from '../config/birthdayConfig';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CatRevealScreen({ selectedKitten, onNext, onBack, disabled }) {
  const { screenThree, kittens } = birthdayConfig;
  // Fallback to white kitten if none selected for safety
  const currentCat = selectedKitten || kittens.white;

  return (
    <TransitionWrapper>
      <div className="badge-tag" style={{ background: currentCat.accentColor }}>
        <Sparkles size={14} color="#704653" />
        <span>Meet {currentCat.name}!</span>
      </div>

      <div className="image-hero-frame" style={{ maxWidth: '340px', position: 'relative' }}>
        {/* Tiny playful crown */}
        <div className="reveal-crown" title="Cute crown">
          👑
        </div>
        <img
          src={currentCat.image}
          alt={`Your chosen companion, ${currentCat.name}`}
          style={{ height: '300px' }}
        />
      </div>

      <h1 className="heading-handwritten">
        {screenThree.heading}
      </h1>

      <p className="body-warm" style={{ maxWidth: '320px', margin: '0 auto 24px' }}>
        {screenThree.subtitle}
      </p>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          type="button"
          className="btn-secondary"
          onClick={onBack}
          disabled={disabled}
        >
          ← Change
        </button>

        <button
          id="btn-tell-me"
          type="button"
          className="btn-primary btn-breathing"
          onClick={onNext}
          disabled={disabled}
        >
          <span>{screenThree.buttonText}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </TransitionWrapper>
  );
}
