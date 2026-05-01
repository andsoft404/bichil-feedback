import { useRef, useState } from 'react';
import EyeTracker from '../components/avatar/EyeTracker';

const AVATAR_COUNT = 7;

export default function AvatarSelectionStep({ onContinue, selectedAvatar, setSelectedAvatar }) {
  const [swipeY, setSwipeY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartY = useRef(null);
  const dragStartY = useRef(null);

  return (
<div className="w-full h-screen bg-white flex flex-col animate-fadeIn relative overflow-hidden">

  {/* Dark header with logo - centered */}
  <div className="w-full px-5 pt-10 pb-4 flex flex-col items-center">
    <img src={`${process.env.PUBLIC_URL}/bichil_logo.png`} alt="Logo" className="w-15 h-15 object-contain" />
  </div>

  {/* Green rounded panel */}
  <div
    className="mx-4 mt-auto mb-4 bg-gradient-to-br from-[#39BD7C] via-[#2EAA6E] to-[#1F8F5C] rounded-[28px] border border-emerald-700/10 shadow-[0_22px_45px_rgba(22,101,52,0.22),inset_0_1px_0_rgba(255,255,255,0.35)] flex flex-col items-center relative overflow-hidden"
    style={{ height: '74vh' }}
  >

    {/* Title */}
    <div className="text-center mt-8 mb-3 z-10">
      <h1 className="text-[22px] sm:text-2xl lg:text-3xl font-black text-white uppercase leading-tight" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '1.5px' }}>
        {'\u0421\u0410\u041D\u0410\u041B \u0413\u041E\u041C\u0414\u041B\u042B\u041D'}
      </h1>
      <h1 className="text-[22px] sm:text-2xl lg:text-3xl font-black text-white uppercase leading-tight" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '1.5px' }}>
        {'\u0425\u0423\u0423\u0414\u0410\u0421'}
      </h1>
    </div>

    {/* Avatar area with left/right arrows */}
    <div className="flex items-center justify-center w-full px-2 z-10 pt-6 pb-4">
      {/* Left arrow */}
      <button
        onClick={() => setSelectedAvatar(prev => prev <= 1 ? AVATAR_COUNT : prev - 1)}
        className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white/90 hover:text-white hover:bg-white/25 transition-colors flex items-center justify-center animate-carousel-control-breathe flex-shrink-0"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      {/* Avatar display */}
      <div 
        className="w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] lg:w-[430px] lg:h-[430px] mx-2 bg-[#238F60] rounded-2xl border border-white/10 shadow-[inset_6px_6px_14px_rgba(0,0,0,0.12),inset_-6px_-6px_14px_rgba(255,255,255,0.08),0_14px_28px_rgba(0,0,0,0.12)] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
        style={{ transform: `translateX(${swipeY}px)`, transition: isDragging ? 'none' : 'transform 0.3s ease-out' }}
        onTouchStart={(e) => { touchStartY.current = e.touches[0].clientX; setIsDragging(true); }}
        onTouchMove={(e) => {
          if (touchStartY.current === null) return;
          const diff = e.touches[0].clientX - touchStartY.current;
          setSwipeY(Math.max(-80, Math.min(80, diff)));
        }}
        onTouchEnd={() => {
          setIsDragging(false);
          if (swipeY < -30) setSelectedAvatar(prev => prev >= AVATAR_COUNT ? 1 : prev + 1);
          else if (swipeY > 30) setSelectedAvatar(prev => prev <= 1 ? AVATAR_COUNT : prev - 1);
          setSwipeY(0);
          touchStartY.current = null;
        }}
        onMouseDown={(e) => { dragStartY.current = e.clientX; setIsDragging(true); e.preventDefault(); }}
        onMouseMove={(e) => {
          if (dragStartY.current === null || !isDragging) return;
          const diff = e.clientX - dragStartY.current;
          setSwipeY(Math.max(-80, Math.min(80, diff)));
        }}
        onMouseUp={() => {
          setIsDragging(false);
          if (swipeY < -30) setSelectedAvatar(prev => prev >= AVATAR_COUNT ? 1 : prev + 1);
          else if (swipeY > 30) setSelectedAvatar(prev => prev <= 1 ? AVATAR_COUNT : prev - 1);
          setSwipeY(0);
          dragStartY.current = null;
        }}
        onMouseLeave={() => {
          if (isDragging) {
            setIsDragging(false);
            if (swipeY < -30) setSelectedAvatar(prev => prev >= AVATAR_COUNT ? 1 : prev + 1);
            else if (swipeY > 30) setSelectedAvatar(prev => prev <= 1 ? AVATAR_COUNT : prev - 1);
            setSwipeY(0);
            dragStartY.current = null;
          }
        }}
        onWheel={(e) => {
          e.preventDefault();
          if (e.deltaY > 0) setSelectedAvatar(prev => prev >= AVATAR_COUNT ? 1 : prev + 1);
          else setSelectedAvatar(prev => prev <= 1 ? AVATAR_COUNT : prev - 1);
        }}
      >
        <div className="w-[94%] h-[94%] flex items-center justify-center">
          <EyeTracker selectedAvatar={selectedAvatar} />
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={() => setSelectedAvatar(prev => prev >= AVATAR_COUNT ? 1 : prev + 1)}
        className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white/90 hover:text-white hover:bg-white/25 transition-colors flex items-center justify-center animate-carousel-control-breathe flex-shrink-0"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>

    {/* Hint text */}
    <div className="flex items-center gap-2 mb-4 z-10">
      <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-black leading-none flex-shrink-0">!</span>
      <p className="font-poppins text-white text-[12px] sm:text-[13px] font-semibold tracking-wide">{'\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d\u0445\u04e9\u04e9 \u043d\u0443\u0443\u0446 \u0434\u04af\u0440\u0438\u0439\u0433 \u0441\u043e\u043d\u0433\u043e\u043e\u0440\u043e\u0439'}</p>
    </div>

    {/* Continue button - INSIDE green panel */}
    <div className="px-8 pb-6 mt-auto z-10 w-full">
      <button
        onClick={() => onContinue()}
        className="font-opensans w-full max-w-[320px] lg:max-w-[480px] mx-auto block py-4 lg:py-5 bg-white rounded-full font-extrabold text-sm lg:text-lg tracking-[0.15em] text-gray-800 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all uppercase"
      >
        {'\u04AE\u0420\u0413\u042D\u041B\u0416\u041B\u04AE\u04AE\u041B\u042D\u0425'}
      </button>
    </div>
  </div>
</div>
  );
}
