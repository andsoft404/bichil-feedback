import { useRef } from 'react';

const EDGE_SWIPE_START = 56;
const MIN_BACK_SWIPE_DISTANCE = 120;
const MAX_VERTICAL_DRIFT = 70;

export default function useGlobalBackSwipe({
  onBackToHome,
  onBackToMenu,
  setActiveTab,
  setShowWarning,
  setStep,
  step,
}) {
  const globalSwipeRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const containerLeft = e.currentTarget.getBoundingClientRect().left;

    globalSwipeRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      relativeX: touch.clientX - containerLeft,
    };
  };

  const handleTouchEnd = (e) => {
    if (globalSwipeRef.current === null) return;

    const dx = e.changedTouches[0].clientX - globalSwipeRef.current.x;
    const dy = e.changedTouches[0].clientY - globalSwipeRef.current.y;
    const startedFromLeftEdge = globalSwipeRef.current.relativeX <= EDGE_SWIPE_START;
    const isRightSwipe = dx >= MIN_BACK_SWIPE_DISTANCE;
    const isMostlyHorizontal = Math.abs(dx) > Math.abs(dy) * 2.5;
    const hasLowVerticalDrift = Math.abs(dy) <= MAX_VERTICAL_DRIFT;
    globalSwipeRef.current = null;

    if (!startedFromLeftEdge || !isRightSwipe || !isMostlyHorizontal || !hasLowVerticalDrift) return;

    if (step === 3 && onBackToMenu) {
      onBackToMenu();
    } else if (step === 2 && onBackToHome) {
      onBackToHome();
    } else if (step === 3) {
      setStep(2);
      setActiveTab('select');
      setShowWarning(false);
    } else if (step === 2) {
      setStep(1);
    }
  };

  return {
    handleTouchStart,
    handleTouchEnd,
  };
}
