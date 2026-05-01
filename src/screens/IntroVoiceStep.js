import { useEffect, useRef, useState } from 'react';

export default function IntroVoiceStep({ onFinish }) {
  const audioRef = useRef(null);
  const finishedRef = useRef(false);
  const [isWaitingForInteraction, setIsWaitingForInteraction] = useState(false);

  useEffect(() => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/robot-voice.mp3`);
    audioRef.current = audio;
    audio.volume = 1;
    audio.preload = 'auto';

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setIsWaitingForInteraction(false);
      onFinish();
    };

    const playAudio = async () => {
      try {
        setIsWaitingForInteraction(false);
        await audio.play();
      } catch (err) {
        setIsWaitingForInteraction(true);
      }
    };

    const handleInteraction = () => {
      playAudio();
    };

    audio.addEventListener('ended', finish);
    audio.addEventListener('error', finish);
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    playAudio();

    return () => {
      audio.removeEventListener('ended', finish);
      audio.removeEventListener('error', finish);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [onFinish]);

  return (
    <div
      className="w-full h-screen bg-[#0048BA] flex items-center justify-center p-5 animate-fadeIn overflow-hidden"
      onPointerDown={() => {
        if (!isWaitingForInteraction) return;
        audioRef.current?.play().catch(() => {});
      }}
    >
      <div className="w-full max-w-[420px] min-h-[78vh] bg-[#F8FAFC] rounded-[30px] border border-white/90 shadow-[inset_12px_12px_28px_rgba(15,23,42,0.12),inset_-12px_-12px_28px_rgba(255,255,255,0.98),0_22px_48px_rgba(0,28,86,0.22)] flex flex-col items-center justify-center px-8 py-10 lg:max-w-[960px] lg:min-h-[620px] lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-14 lg:py-12">
        <div className="flex flex-col items-center lg:items-center">
          <img
            src={`${process.env.PUBLIC_URL}/bichil_logo.png`}
            alt="Bichil Globus"
            className="h-28 lg:h-36 w-auto object-contain lg:-translate-y-4"
          />
          <div className="hidden lg:block mt-8 text-center">
            <h1 className="font-montserrat text-[#102033] text-[34px] font-black leading-tight whitespace-nowrap">
              {'\u0421\u0410\u041D\u0410\u041B \u0413\u041E\u041C\u0414\u041B\u042B\u041D'}
            </h1>
            <h1 className="font-montserrat text-[#102033] text-[34px] font-black leading-tight mt-3">
              {'\u0425\u0423\u0423\u0414\u0410\u0421'}
            </h1>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 flex flex-col items-center justify-center">
          <div className="w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] lg:w-[360px] lg:h-[360px] rounded-[34px] bg-[#EEF2F7] flex items-center justify-center shadow-[inset_14px_14px_28px_rgba(100,116,139,0.28),inset_-14px_-14px_28px_rgba(255,255,255,0.95)]">
            <img
              src={`${process.env.PUBLIC_URL}/voice.gif`}
              alt="Voice assistant"
              className="w-[200px] h-[200px] sm:w-[238px] sm:h-[238px] lg:w-[318px] lg:h-[318px] object-contain rounded-[28px] lg:rounded-[34px]"
              draggable={false}
            />
          </div>

          <div className="mt-8 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-poppins text-[#6B7280] text-sm lg:text-base font-semibold">
              {isWaitingForInteraction ? '\u0414\u0430\u0440\u0430\u0430\u0434 \u04af\u0440\u0433\u044d\u043b\u0436\u043b\u04af\u04af\u043b\u043d\u044d \u04af\u04af' : '\u0422\u0430\u0432\u0442\u0430\u0439 \u043c\u043e\u0440\u0438\u043b\u043d\u043e \u0443\u0443'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
