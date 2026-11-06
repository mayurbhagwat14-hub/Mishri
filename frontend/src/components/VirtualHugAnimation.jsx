import React from 'react';
import hugVideo from '../assets/WhatsApp Video 2026-11-07 at 12.38.11 AM.mp4';

export default function VirtualHugAnimation({ onComplete }) {
  return (
    <div style={{ width: '100%', maxWidth: '640px', borderRadius: '18px', overflow: 'hidden' }}>
      <video
        src={hugVideo}
        controls
        autoPlay
        playsInline
        style={{ width: '100%', display: 'block', borderRadius: '18px' }}
        onEnded={onComplete}
      />
    </div>
  );
}
