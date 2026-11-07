import React, { useRef, useEffect } from 'react';
import TransitionWrapper from './TransitionWrapper';
import {
  Heart,
  ArrowLeft
} from 'lucide-react';
import virtualHugVideo from '../assets/WhatsApp Video 2026-11-07 at 12.38.11 AM.mp4';

export default function PhotoRevealScreen({ onNext, onBack, disabled }) {
  const videoRef = useRef(null);

  // Autoplay video on screen entry, always muted and looping seamlessly
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((err) => {
        console.warn("Autoplay error:", err);
      });
    }
  }, []);

  return (
    <TransitionWrapper>
      <div className="large-screen-hug-wrapper">
        {/* Heading: Virtual Hug For You */}
        <h1 className="large-hug-heading">
          Virtual Hug For You 🤗💖
        </h1>

        {/* Main Large Screen Video Card */}
        <div className="large-video-card">
          {/* Large Video Stage (16:9 widescreen format, seamless silent loop) */}
          <div className="large-video-stage">
            <video
              ref={videoRef}
              src={virtualHugVideo}
              autoPlay
              loop
              playsInline
              muted
              className="large-video-elem"
            />
          </div>
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="hug-screen-nav-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onBack}
            disabled={disabled}
            style={{
              padding: '11px 24px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <button
            id="btn-final-surprise"
            type="button"
            className="btn-primary btn-breathing"
            onClick={onNext}
            disabled={disabled}
            style={{
              padding: '12px 30px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>One last Thing ♡</span>
            <Heart size={18} fill="#FFFFFF" />
          </button>
        </div>
      </div>
    </TransitionWrapper>
  );
}
