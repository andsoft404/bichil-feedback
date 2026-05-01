export default function StarRating({ rating, setRating, className = 'mx-4 mb-4' }) {
  return (
    <div className={`${className} flex justify-center gap-3`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(prev => prev === star ? star - 1 : star)}
          className="transition-all duration-300 hover:scale-125 active:scale-90"
          style={{
            transform: star <= rating ? 'scale(1.1)' : 'scale(1)',
            filter: star <= rating ? 'drop-shadow(0 0 6px #FFD700)' : 'none',
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill={star <= rating ? '#FFD700' : 'none'} stroke={star <= rating ? '#FFD700' : '#ffffff60'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.3s ease' }}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </button>
      ))}
    </div>
  );
}
