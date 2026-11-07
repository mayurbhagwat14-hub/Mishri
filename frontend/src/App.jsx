import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import BirthdayCardScreen from './components/BirthdayCardScreen';
import PhotoRevealScreen from './components/PhotoRevealScreen';
import BirthdayFinaleScreen from './components/BirthdayFinaleScreen';
import { happyBirthdayPlayer } from './utils/audioPlayer';
export default function App() {
  // Screen 1: Intro Kitten Screen with 2 buttons under the cats
  // Screen 2: Direct Birthday Card Screen with 2-sided Confetti, Happy Birthday Song, Sound On/Off, and Next button
  // Screen 3: Photo Reveal Screen (Song is stopped when user clicks Next)
  // Screen 4: Birthday Finale Screen with Sunset scene & replay
  const [currentScreen, setCurrentScreen] = useState(1);
  const [selectedKitten, setSelectedKitten] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const goToScreen = (step) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentScreen(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsTransitioning(false);
    }, 350);
  };

  const handleKittenSelect = (kitten) => {
    setSelectedKitten(kitten);
    setIsMusicPlaying(true);
    goToScreen(2);
  };

  // When Next is pressed on Birthday Card Screen:
  // Song is stopped immediately, and navigates to the next page
  const handleNextFromBirthdayCard = () => {
    happyBirthdayPlayer.stop();
    setIsMusicPlaying(false);
    goToScreen(3);
  };

  const handleNext = () => {
    if (currentScreen < 4) {
      goToScreen(currentScreen + 1);
    }
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      goToScreen(currentScreen - 1);
    }
  };

  const handleReplay = () => {
    happyBirthdayPlayer.stop();
    setIsMusicPlaying(false);
    setSelectedKitten(null);
    goToScreen(1);
  };

  const toggleMusic = () => {
    const playing = happyBirthdayPlayer.toggle();
    setIsMusicPlaying(playing);
  };

  return (
    <div className={`app-container ${currentScreen === 1 ? 'is-screen-one' : ''}`}>
      {/* Main Content Stage */}
      <main className={`content-stage ${currentScreen === 1 ? 'content-stage-screen-one' : ''} ${currentScreen === 3 ? 'content-stage-large-screen' : ''}`}>
        {currentScreen === 1 && (
          <IntroScreen
            onSelectKitten={handleKittenSelect}
            disabled={isTransitioning}
          />
        )}

        {currentScreen === 2 && (
          <BirthdayCardScreen
            selectedKitten={selectedKitten}
            onNext={handleNextFromBirthdayCard}
            isMusicPlaying={isMusicPlaying}
            onToggleMusic={toggleMusic}
            disabled={isTransitioning}
          />
        )}

        {currentScreen === 3 && (
          <PhotoRevealScreen
            onNext={handleNext}
            onBack={handleBack}
            disabled={isTransitioning}
          />
        )}

        {currentScreen === 4 && (
          <BirthdayFinaleScreen
            onReplay={handleReplay}
            disabled={isTransitioning}
          />
        )}
      </main>
    </div>
  );
}
