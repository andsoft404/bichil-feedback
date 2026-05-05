import { createPortal } from 'react-dom';
import { ArrowLeft } from 'lucide-react';
import { getCharacterSrc } from '../data/characters';

export default function ProfileHeader({ selectedAvatar, onBack }) {
  const header = (
    <header className="profile-header-layer fixed top-4 left-0 right-0 z-[9999] w-full px-5 pointer-events-none">
      <div className="relative overflow-hidden rounded-[22px] bg-white border border-white shadow-[0_14px_28px_rgba(0,34,102,0.16),inset_0_1px_0_rgba(255,255,255,0.95)] pointer-events-auto">
        <div className="relative px-4 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="desktop-back-button hidden lg:flex w-12 h-12 rounded-2xl text-[#0A50BF] items-center justify-center hover:scale-[1.03] active:scale-[0.96] transition-transform overflow-visible"
                aria-label="Буцах"
              >
                <ArrowLeft size={24} strokeWidth={3} />
              </button>
            )}

            <img
              src={`${process.env.PUBLIC_URL}/bichil_logo.png`}
              alt="Bichil Globus"
              className="relative z-20 h-16 w-auto object-contain"
            />
          </div>

          <div className="relative z-20 w-[62px] h-[62px] bg-[#E8EDF2] rounded-2xl border border-white/80 shadow-[inset_5px_5px_12px_rgba(92,105,121,0.18),inset_-5px_-5px_12px_rgba(255,255,255,0.9),0_8px_18px_rgba(0,34,102,0.12)] overflow-hidden flex items-center justify-center flex-shrink-0">
            <img
              src={getCharacterSrc(selectedAvatar)}
              alt="Selected profile"
              className="w-full h-full object-contain scale-110"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <>
      {createPortal(header, document.body)}
      <div className="h-[108px] flex-shrink-0" aria-hidden="true" />
    </>
  );
}
