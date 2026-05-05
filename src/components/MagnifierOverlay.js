export default function MagnifierOverlay({ magnifier, branchImages, branches, onClose }) {
  if (!magnifier.visible || magnifier.idx === null) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => e.stopPropagation()}
    >
      <div className="relative animate-scaleIn">
        <div className="w-56 h-80 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/30">
          <img
            src={branchImages[magnifier.idx]}
            className="w-full h-full object-cover"
            alt={branches[magnifier.idx]}
            draggable={false}
          />
        </div>
        <p className="text-white text-sm font-bold tracking-wider text-center mt-3 uppercase drop-shadow-lg">{branches[magnifier.idx]}</p>
      </div>
    </div>
  );
}
