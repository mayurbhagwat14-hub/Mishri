import React, { useState } from 'react';
import TransitionWrapper from './TransitionWrapper';
import { birthdayConfig } from '../config/birthdayConfig';
import { Heart, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CatSelectionScreen({ onSelectKitten, selectedKitten, onBack }) {
  const { screenTwo, kittens } = birthdayConfig;
  const [localSelection, setLocalSelection] = useState(selectedKitten?.id || null);
  const [feedbackMessage, setFeedbackMessage] = useState(
    selectedKitten ? screenTwo.selectedFeedback : null
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (kitten) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setLocalSelection(kitten.id);
    setFeedbackMessage(screenTwo.selectedFeedback);

    // Trigger subtle sparkle / heart confetti
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F4C4CF', '#D88FA5', '#E6DDF5', '#FFF8F1'],
        scalar: 0.9,
        disableForReducedMotion: true
      });
    } catch {
      // safe fallback
    }

    // Smooth delay before advancing so user sees the glowing selection feedback
    setTimeout(() => {
      onSelectKitten(kitten);
    }, 750);
  };

  return (
    <TransitionWrapper>
      <div className="badge-tag">
        <Heart size={14} fill="#D88FA5" color="#D88FA5" />
        <span>Decision Time</span>
      </div>

      <h1 className="heading-handwritten">
        {screenTwo.heading}
      </h1>

      <p className="body-warm" style={{ marginBottom: '10px' }}>
        {feedbackMessage || screenTwo.subtext}
      </p>

      <div className="kitten-cards-grid" role="radiogroup" aria-label="Choose your cutie">
        {/* Kitten A: White Kitten */}
        <button
          id="card-kitten-white"
          type="button"
          role="radio"
          aria-checked={localSelection === kittens.white.id}
          className={`kitten-card ${localSelection === kittens.white.id ? 'selected' : ''}`}
          onClick={() => handleSelect(kittens.white)}
          disabled={isTransitioning}
          style={{
            background: localSelection === kittens.white.id ? '#FFF5F7' : '#FFFFFF'
          }}
        >
          <div className="kitten-card-img-wrap" style={{ backgroundColor: kittens.white.accentColor }}>
            <img
              src={kittens.white.image}
              alt={kittens.white.description}
              loading="eager"
            />
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(4px)',
                borderRadius: '999px',
                padding: '4px 8px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                color: '#704653',
                fontWeight: 600
              }}
            >
              <Heart size={12} fill="#D88FA5" color="#D88FA5" />
              <span>Blush</span>
            </span>
          </div>

          <h2 className="kitten-card-title">{kittens.white.name}</h2>
          <p className="kitten-card-tagline">{kittens.white.tagline}</p>

          {localSelection === kittens.white.id && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '8px',
                color: '#D88FA5',
                fontSize: '0.85rem',
                fontWeight: 700
              }}
            >
              <CheckCircle2 size={16} /> Selected ♡
            </div>
          )}
        </button>

        {/* Kitten B: Tabby Kitten */}
        <button
          id="card-kitten-tabby"
          type="button"
          role="radio"
          aria-checked={localSelection === kittens.tabby.id}
          className={`kitten-card ${localSelection === kittens.tabby.id ? 'selected' : ''}`}
          onClick={() => handleSelect(kittens.tabby)}
          disabled={isTransitioning}
          style={{
            background: localSelection === kittens.tabby.id ? '#F9F6FD' : '#FFFFFF'
          }}
        >
          <div className="kitten-card-img-wrap" style={{ backgroundColor: kittens.tabby.accentColor }}>
            <img
              src={kittens.tabby.image}
              alt={kittens.tabby.description}
              loading="eager"
            />
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(4px)',
                borderRadius: '999px',
                padding: '4px 8px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                color: '#704653',
                fontWeight: 600
              }}
            >
              <Star size={12} fill="#D88FA5" color="#D88FA5" />
              <span>Lavender</span>
            </span>
          </div>

          <h2 className="kitten-card-title">{kittens.tabby.name}</h2>
          <p className="kitten-card-tagline">{kittens.tabby.tagline}</p>

          {localSelection === kittens.tabby.id && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '8px',
                color: '#D88FA5',
                fontSize: '0.85rem',
                fontWeight: 700
              }}
            >
              <CheckCircle2 size={16} /> Selected ♡
            </div>
          )}
        </button>
      </div>

      <div style={{ marginTop: '12px' }}>
        <button
          type="button"
          className="btn-secondary"
          onClick={onBack}
          disabled={isTransitioning}
        >
          ← Back
        </button>
      </div>
    </TransitionWrapper>
  );
}
