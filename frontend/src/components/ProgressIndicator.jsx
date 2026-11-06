import React from 'react';

export default function ProgressIndicator({ currentStep, totalSteps = 6 }) {
  return (
    <div className="progress-bar-container" aria-label={`Step ${currentStep} of ${totalSteps}`}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;

        return (
          <div
            key={index}
            className={`progress-dot ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
            title={`Step ${stepNum}`}
          />
        );
      })}
    </div>
  );
}
