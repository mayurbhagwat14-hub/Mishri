import React from 'react';

export default function TransitionWrapper({ children, className = '' }) {
  return (
    <div className={`screen-wrapper ${className}`}>
      {children}
    </div>
  );
}
