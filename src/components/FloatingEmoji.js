import { useEffect, useState } from 'react';

// --- Floating Emoji Component ---
// eslint-disable-next-line no-unused-vars
const FloatingEmoji = ({ feedbackType }) => {
  const [emojis, setEmojis] = useState([]);

  // Хүсэлт icon SVG
  const RequestIcon = () => (
    <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48 112h288v192H48z" fill="#E3F2FD" stroke="#1976D2" strokeWidth="16"/>
      <path d="M48 304l48-48" stroke="#1976D2" strokeWidth="16"/>
      <path d="M80 144h224M80 176h224M80 208h160" stroke="#333" strokeWidth="12" strokeLinecap="round"/>
      <rect x="16" y="48" width="144" height="48" rx="8" fill="#2196F3" stroke="#1565C0" strokeWidth="8"/>
      <path d="M40 72h96" stroke="#fff" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="400" cy="112" r="80" fill="#FFD54F" stroke="#333" strokeWidth="12"/>
      <path d="M370 100c0-8 8-16 16-16s16 8 16 8" stroke="#333" strokeWidth="8" strokeLinecap="round"/>
      <path d="M400 100c0-8 8-16 16-16s16 8 16 8" stroke="#333" strokeWidth="8" strokeLinecap="round"/>
      <path d="M365 135c15 20 55 20 70 0" stroke="#333" strokeWidth="8" strokeLinecap="round" fill="none"/>
    </svg>
  );

  useEffect(() => {
    // Шинэ emoji үүсгэх
    const interval = setInterval(() => {
      const id = Date.now();
      const left = Math.random() * 70 + 15; // 15% - 85%
      setEmojis(prev => [...prev.slice(-6), { id, left }]);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Emoji устгах
  useEffect(() => {
    const cleanup = setInterval(() => {
      setEmojis(prev => prev.filter(e => Date.now() - e.id < 8000));
    }, 500);
    return () => clearInterval(cleanup);
  }, []);

  // Emoji сонгох
  const getEmoji = () => {
    if (feedbackType === 'Талархал') return <span className="text-3xl">😊</span>;
    if (feedbackType === 'Гомдол') return <span className="text-3xl">😢</span>;
    return <RequestIcon />;
  };

  return (
    <div className="absolute left-0 right-0 top-auto bottom-[100%] h-[600px] overflow-visible pointer-events-none z-0">
      {emojis.map(({ id, left }) => (
        <div
          key={id}
          className="absolute animate-float-full opacity-60"
          style={{ 
            left: `${left}%`, 
            bottom: '0px',
          }}
        >
          {getEmoji()}
        </div>
      ))}
      <style>{`
        @keyframes float-full {
          0% { 
            transform: translateY(0) scale(0.8); 
            opacity: 0; 
          }
          5% { 
            opacity: 0.6; 
          }
          95% { 
            opacity: 0.5; 
          }
          100% { 
            transform: translateY(-600px) scale(0.8); 
            opacity: 0; 
          }
        }
        .animate-float-full {
          animation: float-full 8s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatingEmoji;
