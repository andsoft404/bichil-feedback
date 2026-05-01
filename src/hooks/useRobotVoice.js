import { useEffect } from 'react';

export default function useRobotVoice(src) {
  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = 1.0;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.log('Autoplay blocked by browser. Waiting for interaction...');

        const handleInteraction = () => {
          audio.play().catch(e => console.log('Still blocked:', e));
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);
        document.addEventListener('keydown', handleInteraction);
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src]);
}
