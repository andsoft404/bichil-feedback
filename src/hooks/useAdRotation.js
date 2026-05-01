import { useEffect, useState } from 'react';

export default function useAdRotation(step, adCount) {
  const [adIndex, setAdIndex] = useState(0);

  useEffect(() => {
    if (step !== 2 && step !== 3) return;
    const timer = setInterval(() => setAdIndex(prev => (prev + 1) % adCount), 3000);
    return () => clearInterval(timer);
  }, [adCount, step]);

  return [adIndex, setAdIndex];
}
