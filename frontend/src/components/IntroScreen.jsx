import React from 'react';
import { birthdayConfig } from '../config/birthdayConfig';
import { happyBirthdayPlayer } from '../utils/audioPlayer';

export default function IntroScreen({ onSelectKitten, disabled }) {
  const { kittens } = birthdayConfig;

  const handleChoose = (kitten) => {
    if (disabled) return;
    // Play Happy Birthday song immediately upon user click
    try {
      happyBirthdayPlayer.start();
    } catch (e) {
      console.warn("Audio start error:", e);
    }
    onSelectKitten(kitten);
  };

  return (
    <div className="screen-one-fullscreen">
      {/* Background Image of the Two Kittens in sunlit bedroom */}
      <img
        src="/images/bedroom-kittens-exact.jpg"
        alt="Two adorable kittens in sunlit bedroom"
        className="screen-one-bg"
        loading="eager"
      />

      {/* Content overlay positioned cleanly at the top window space */}
      <div className="screen-one-content">
        {/* Tiny hand-drawn heart at the top */}
        <div className="screen-one-top-heart" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#54323E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Hey cuties! Top heading */}
        <h1 className="screen-one-hey">
          Hey cuties!
        </h1>

        {/* This is a surprise for you... */}
        <p className="screen-one-subtitle">
          This is a surprise for you...
        </p>

        {/* Choose */}
        <p className="screen-one-choose-heading">
          Choose ♡
        </p>
      </div>

      {/* 2 Buttons placed directly under the 2 Cats */}
      <div className="cats-buttons-container" aria-label="Choose a kitten">
        <div className="cat-button-col cat-col-left">
          <button
            id="btn-choose-white"
            type="button"
            className="cat-choose-btn cat-btn-white"
            onClick={() => handleChoose(kittens.white)}
            disabled={disabled}
            aria-label="Choose the white kitten"
          >
            <span>🤍 Choose Me!</span>
          </button>
        </div>

        <div className="cat-button-col cat-col-right">
          <button
            id="btn-choose-tabby"
            type="button"
            className="cat-choose-btn cat-btn-tabby"
            onClick={() => handleChoose(kittens.tabby)}
            disabled={disabled}
            aria-label="Choose the tabby kitten"
          >
            <span>🤎 Choose Me!</span>
          </button>
        </div>
      </div>
    </div>
  );
}
