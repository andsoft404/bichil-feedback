import { createPortal } from 'react-dom';

export default function LoadingScreen() {
  const loader = (
    <div className="fixed inset-0 z-[12000] bg-[#0048BA] flex items-center justify-center animate-fadeIn">
      <div className="w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] rounded-[34px] bg-[#F8FAFC] border border-white/90 shadow-[inset_12px_12px_28px_rgba(15,23,42,0.12),inset_-12px_-12px_28px_rgba(255,255,255,0.98),0_22px_48px_rgba(0,28,86,0.24)] flex items-center justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/loading.gif`}
          alt="Loading"
          className="w-[170px] h-[170px] lg:w-[238px] lg:h-[238px] object-contain rounded-[28px]"
          draggable={false}
        />
      </div>
    </div>
  );

  return createPortal(loader, document.body);
}
