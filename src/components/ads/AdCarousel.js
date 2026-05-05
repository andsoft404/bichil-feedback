import { useRef } from 'react';

export default function AdCarousel({
  ads,
  adIndex,
  setAdIndex,
  className = 'mx-4 mt-6',
  height = '22vh',
  desktopHeight,
}) {
  const dragRef = useRef({ active: false, startX: 0, moved: false });

  const showPreviousAd = () => {
    setAdIndex(prev => prev <= 0 ? ads.length - 1 : prev - 1);
  };

  const showNextAd = () => {
    setAdIndex(prev => (prev + 1) % ads.length);
  };

  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragRef.current = { active: true, startX: e.clientX, moved: false };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.active) return;
    if (Math.abs(e.clientX - dragRef.current.startX) > 8) {
      dragRef.current.moved = true;
    }
  };

  const handlePointerUp = (e) => {
    if (!dragRef.current.active) return;

    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.active = false;

    if (Math.abs(dx) < 45) return;
    if (dx < 0) showNextAd();
    else showPreviousAd();
  };

  return (
    <div
      className={`${className} h-[var(--ad-height)] lg:h-[var(--ad-desktop-height)] rounded-2xl overflow-hidden relative cursor-grab active:cursor-grabbing select-none`}
      style={{
        '--ad-height': height,
        '--ad-desktop-height': desktopHeight || height,
        touchAction: 'pan-y',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { dragRef.current.active = false; }}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
    >
      <div key={adIndex} className="absolute inset-0 animate-bannerFade">
        <img src={ads[adIndex].img} alt={ads[adIndex].label} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <p className="font-montserrat text-white text-sm font-bold tracking-wider drop-shadow-lg">{ads[adIndex].label}</p>
            <p className="font-poppins text-white text-[11px] mt-1 drop-shadow-lg">{ads[adIndex].title}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-3 z-20 pointer-events-none">
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); showPreviousAd(); }}
          className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white/90 hover:text-white hover:bg-white/25 transition-colors flex items-center justify-center animate-carousel-control-breathe pointer-events-auto"
          aria-label="Previous advertisement"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); showNextAd(); }}
          className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white/90 hover:text-white hover:bg-white/25 transition-colors flex items-center justify-center animate-carousel-control-breathe pointer-events-auto"
          aria-label="Next advertisement"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {ads.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full transition-all ${i === adIndex ? 'bg-white' : 'bg-white/40'}`}></span>
        ))}
      </div>
    </div>
  );
}
