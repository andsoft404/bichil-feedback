// --- 6 Different Realistic Character Styles with Mood Support ---
const renderCharacter = (selectedAvatar, eyePosition, mood = 'neutral') => {
  // Mood-based expression helpers
  const getMouthPath = (baseY, type) => {
    if (mood === 'Гомдол') {
      // Уурласан - доошоо муруй, бага зэрэг нээлттэй
      return `M 85 ${baseY + 2} Q 100 ${baseY - 8} 115 ${baseY + 2}`;
    } else if (mood === 'Талархал') {
      // Баяртай - том инээмсэглэл
      return `M 82 ${baseY - 5} Q 100 ${baseY + 15} 118 ${baseY - 5}`;
    } else {
      // Хүсэлт / neutral - жижиг инээмсэглэл
      return `M 88 ${baseY} Q 100 ${baseY + 8} 112 ${baseY}`;
    }
  };

  const getEyeStyle = () => {
    if (mood === 'Гомдол') {
      return { eyeHeight: 10, pupilSize: 5, eyebrowAngle: 'angry' };
    } else if (mood === 'Талархал') {
      return { eyeHeight: 8, pupilSize: 5, eyebrowAngle: 'happy', closed: true };
    } else {
      return { eyeHeight: 12, pupilSize: 5, eyebrowAngle: 'neutral' };
    }
  };

  const eyeStyle = getEyeStyle();
  const isHappy = mood === 'Талархал';
  const isAngry = mood === 'Гомдол';

  const characterStyles = {
    1: ( // Эрэгтэй - Business Professional (костюмтай)
      <svg viewBox="0 0 200 280" className={`w-full h-full ${isHappy ? 'animate-bounce-slow' : ''}`}>
        {/* Үс */}
        <ellipse cx="100" cy="55" rx="52" ry="30" fill="#2C1810" />
        <path d="M 48 70 Q 48 30 100 25 Q 152 30 152 70" fill="#2C1810" />
        {/* Толгой */}
        <ellipse cx="100" cy="85" rx="45" ry="50" fill="#E8C39E" />
        {/* Чих */}
        <ellipse cx="55" cy="85" rx="8" ry="12" fill="#E8C39E" />
        <ellipse cx="145" cy="85" rx="8" ry="12" fill="#E8C39E" />
        {/* Хөмсөг - mood-д суурилсан */}
        {isAngry ? (
          <>
            {/* Уурласан хөмсөг - дотогшоо чиглэсэн */}
            <path d="M 70 68 Q 80 62 90 66" stroke="#2C1810" strokeWidth="3" fill="none" />
            <path d="M 110 66 Q 120 62 130 68" stroke="#2C1810" strokeWidth="3" fill="none" />
          </>
        ) : (
          <>
            <path d="M 70 65 Q 80 60 90 65" stroke="#2C1810" strokeWidth="3" fill="none" />
            <path d="M 110 65 Q 120 60 130 65" stroke="#2C1810" strokeWidth="3" fill="none" />
          </>
        )}
        {/* Нүд */}
        {isHappy ? (
          <>
            <path d="M 70 80 Q 80 72 90 80" stroke="#4A3728" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 110 80 Q 120 72 130 80" stroke="#4A3728" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="80" cy="80" rx="10" ry={eyeStyle.eyeHeight} fill="white" />
            <circle cx={80 + eyePosition.x * 0.5} cy={80 + eyePosition.y * 0.5} r={eyeStyle.pupilSize} fill="#4A3728" />
            <circle cx={78 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r="2" fill="white" />
            <ellipse cx="120" cy="80" rx="10" ry={eyeStyle.eyeHeight} fill="white" />
            <circle cx={120 + eyePosition.x * 0.5} cy={80 + eyePosition.y * 0.5} r={eyeStyle.pupilSize} fill="#4A3728" />
            <circle cx={118 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r="2" fill="white" />
          </>
        )}
        {/* Уурын тэмдэг - гомдолд */}
        {isAngry && (
          <>
            {/* Духан дээрх уурын судас */}
            <g className="animate-pulse">
              <path d="M 140 55 L 145 60 M 145 55 L 140 60" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" />
              <path d="M 142 57 L 147 62 M 147 57 L 142 62" stroke="#E53E3E" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Хацар улайсан */}
            <ellipse cx="65" cy="95" rx="8" ry="5" fill="#E53E3E" opacity="0.3" />
            <ellipse cx="135" cy="95" rx="8" ry="5" fill="#E53E3E" opacity="0.3" />
          </>
        )}
        {/* Хамар */}
        <path d="M 100 85 L 97 100 Q 100 105 103 100 L 100 85" fill="#D4A574" />
        {/* Ам - mood-д суурилсан */}
        <path d={getMouthPath(115, 1)} stroke={isHappy ? "#E57373" : "#C4846C"} strokeWidth={isHappy ? "4" : "3"} fill={isHappy ? "#FFE4E1" : "none"} strokeLinecap="round" />
        {/* Хацар - баяртай үед */}
        {isHappy && (
          <>
            <ellipse cx="65" cy="95" rx="10" ry="6" fill="#FFB6C1" opacity="0.5" />
            <ellipse cx="135" cy="95" rx="10" ry="6" fill="#FFB6C1" opacity="0.5" />
          </>
        )}
        {/* Хүзүү */}
        <rect x="88" y="130" width="24" height="20" fill="#E8C39E" />
        {/* Костюм */}
        <path d="M 40 150 L 60 145 L 88 150 L 88 220 L 40 220 Z" fill="#1a365d" />
        <path d="M 160 150 L 140 145 L 112 150 L 112 220 L 160 220 Z" fill="#1a365d" />
        <path d="M 88 150 L 112 150 L 112 220 L 88 220 Z" fill="white" />
        <path d="M 95 155 L 100 175 L 105 155 Z" fill="#c53030" />
        <rect x="96" y="175" width="8" height="40" fill="#c53030" />
      </svg>
    ),
    2: ( // Эмэгтэй - Professional Woman
      <svg viewBox="0 0 200 280" className={`w-full h-full ${isHappy ? 'animate-bounce-slow' : ''}`}>
        {/* Урт үс */}
        <path d="M 45 60 Q 40 120 50 180 L 70 180 Q 60 120 65 70 Z" fill="#8B4513" />
        <path d="M 155 60 Q 160 120 150 180 L 130 180 Q 140 120 135 70 Z" fill="#8B4513" />
        <ellipse cx="100" cy="50" rx="55" ry="25" fill="#8B4513" />
        <path d="M 45 55 Q 45 30 100 20 Q 155 30 155 55 Q 155 70 145 75 L 55 75 Q 45 70 45 55" fill="#8B4513" />
        {/* Толгой */}
        <ellipse cx="100" cy="85" rx="42" ry="48" fill="#FFDAB9" />
        {/* Чих */}
        <ellipse cx="58" cy="85" rx="6" ry="10" fill="#FFDAB9" />
        <ellipse cx="142" cy="85" rx="6" ry="10" fill="#FFDAB9" />
        {/* Хөмсөг */}
        {isAngry ? (
          <>
            {/* Уурласан хөмсөг - дотогшоо чиглэсэн */}
            <path d="M 72 70 Q 80 64 88 68" stroke="#5D4037" strokeWidth="2" fill="none" />
            <path d="M 112 68 Q 120 64 128 70" stroke="#5D4037" strokeWidth="2" fill="none" />
          </>
        ) : (
          <>
            <path d="M 72 68 Q 80 64 88 68" stroke="#5D4037" strokeWidth="2" fill="none" />
            <path d="M 112 68 Q 120 64 128 68" stroke="#5D4037" strokeWidth="2" fill="none" />
          </>
        )}
        {/* Нүд */}
        {isHappy ? (
          <>
            <path d="M 71 80 Q 80 72 89 80" stroke="#3D2314" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 111 80 Q 120 72 129 80" stroke="#3D2314" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="80" cy="80" rx="9" ry={eyeStyle.eyeHeight - 1} fill="white" />
            <circle cx={80 + eyePosition.x * 0.5} cy={80 + eyePosition.y * 0.5} r={eyeStyle.pupilSize} fill="#3D2314" />
            <circle cx={78 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r="2" fill="white" />
            <ellipse cx="120" cy="80" rx="9" ry={eyeStyle.eyeHeight - 1} fill="white" />
            <circle cx={120 + eyePosition.x * 0.5} cy={80 + eyePosition.y * 0.5} r={eyeStyle.pupilSize} fill="#3D2314" />
            <circle cx={118 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r="2" fill="white" />
          </>
        )}
        {/* Уурын тэмдэг */}
        {isAngry && (
          <>
            <g className="animate-pulse">
              <path d="M 140 55 L 145 60 M 145 55 L 140 60" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" />
            </g>
            <ellipse cx="65" cy="95" rx="8" ry="5" fill="#E53E3E" opacity="0.3" />
            <ellipse cx="135" cy="95" rx="8" ry="5" fill="#E53E3E" opacity="0.3" />
          </>
        )}
        {/* Сормуус */}
        <path d="M 71 75 L 68 72 M 75 73 L 73 69 M 85 73 L 87 69 M 89 75 L 92 72" stroke="#3D2314" strokeWidth="1" />
        <path d="M 111 75 L 108 72 M 115 73 L 113 69 M 125 73 L 127 69 M 129 75 L 132 72" stroke="#3D2314" strokeWidth="1" />
        {/* Хамар */}
        <path d="M 100 85 L 98 98 Q 100 102 102 98 L 100 85" fill="#F0C8A0" />
        {/* Уруул */}
        {isHappy ? (
          <>
            <ellipse cx="100" cy="115" rx="14" ry="7" fill="#E57373" />
            <path d="M 86 115 Q 100 108 114 115" stroke="#D32F2F" strokeWidth="1" fill="none" />
          </>
        ) : isAngry ? (
          <path d="M 88 118 Q 100 110 112 118" stroke="#C4846C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        ) : (
          <>
            <ellipse cx="100" cy="115" rx="12" ry="5" fill="#E57373" />
            <path d="M 88 115 Q 100 112 112 115" stroke="#D32F2F" strokeWidth="1" fill="none" />
          </>
        )}
        {/* Хацар */}
        {isHappy && (
          <>
            <ellipse cx="65" cy="95" rx="10" ry="6" fill="#FFB6C1" opacity="0.6" />
            <ellipse cx="135" cy="95" rx="10" ry="6" fill="#FFB6C1" opacity="0.6" />
          </>
        )}
        {/* Хүзүү */}
        <path d="M 90 130 L 90 155 L 110 155 L 110 130" fill="#FFDAB9" />
        {/* Хувцас */}
        <path d="M 50 155 Q 70 145 100 150 Q 130 145 150 155 L 150 220 L 50 220 Z" fill="#5C6BC0" />
        <ellipse cx="100" cy="155" rx="25" ry="12" fill="#FFDAB9" />
      </svg>
    ),
    3: ( // Эрэгтэй - Casual Developer
      <svg viewBox="0 0 200 280" className={`w-full h-full ${isHappy ? 'animate-bounce-slow' : ''}`}>
        {/* Үс */}
        <path d="M 55 65 Q 55 35 100 30 Q 145 35 145 65 L 140 70 L 60 70 Z" fill="#1a1a1a" />
        {/* Толгой */}
        <ellipse cx="100" cy="85" rx="43" ry="48" fill="#D4A574" />
        {/* Чих */}
        <ellipse cx="57" cy="85" rx="7" ry="11" fill="#D4A574" />
        <ellipse cx="143" cy="85" rx="7" ry="11" fill="#D4A574" />
        {/* Шил frame */}
        <rect x="65" y="70" width="30" height="22" rx="4" fill="none" stroke="#333" strokeWidth="3" />
        <rect x="105" y="70" width="30" height="22" rx="4" fill="none" stroke="#333" strokeWidth="3" />
        <line x1="95" y1="81" x2="105" y2="81" stroke="#333" strokeWidth="3" />
        {/* Нүд */}
        {isHappy ? (
          <>
            <path d="M 70 80 Q 80 73 90 80" stroke="#2E7D32" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 110 80 Q 120 73 130 80" stroke="#2E7D32" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="80" cy="80" rx="8" ry={eyeStyle.eyeHeight - 2} fill="white" />
            <circle cx={80 + eyePosition.x * 0.4} cy={80 + eyePosition.y * 0.4} r={eyeStyle.pupilSize - 1} fill="#2E7D32" />
            <circle cx={78 + eyePosition.x * 0.4} cy={78 + eyePosition.y * 0.4} r="1.5" fill="white" />
            <ellipse cx="120" cy="80" rx="8" ry={eyeStyle.eyeHeight - 2} fill="white" />
            <circle cx={120 + eyePosition.x * 0.4} cy={80 + eyePosition.y * 0.4} r={eyeStyle.pupilSize - 1} fill="#2E7D32" />
            <circle cx={118 + eyePosition.x * 0.4} cy={78 + eyePosition.y * 0.4} r="1.5" fill="white" />
          </>
        )}
        {/* Уурын тэмдэг */}
        {isAngry && (
          <>
            <g className="animate-pulse">
              <path d="M 140 58 L 145 63 M 145 58 L 140 63" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" />
            </g>
            <ellipse cx="65" cy="98" rx="6" ry="4" fill="#E53E3E" opacity="0.3" />
            <ellipse cx="135" cy="98" rx="6" ry="4" fill="#E53E3E" opacity="0.3" />
          </>
        )}
        {/* Хөмсөг */}
        {isAngry ? (
          <>
            {/* Уурласан хөмсөг */}
            <path d="M 68 67 Q 80 62 92 65" stroke="#1a1a1a" strokeWidth="2" fill="none" />
            <path d="M 108 65 Q 120 62 132 67" stroke="#1a1a1a" strokeWidth="2" fill="none" />
          </>
        ) : (
          <>
            <path d="M 68 65 Q 80 62 92 65" stroke="#1a1a1a" strokeWidth="2" fill="none" />
            <path d="M 108 65 Q 120 62 132 65" stroke="#1a1a1a" strokeWidth="2" fill="none" />
          </>
        )}
        {/* Хамар */}
        <path d="M 100 88 L 97 102 Q 100 106 103 102 L 100 88" fill="#C49A6C" />
        {/* Ам */}
        <path d={getMouthPath(118, 3)} stroke="#8D6E63" strokeWidth="2.5" fill={isHappy ? "#FFE4E1" : "none"} strokeLinecap="round" />
        {/* Хацар */}
        {isHappy && (
          <>
            <ellipse cx="65" cy="98" rx="8" ry="5" fill="#FFB6C1" opacity="0.5" />
            <ellipse cx="135" cy="98" rx="8" ry="5" fill="#FFB6C1" opacity="0.5" />
          </>
        )}
        {/* Сахал */}
        <ellipse cx="100" cy="125" rx="18" ry="8" fill="#1a1a1a" opacity="0.3" />
        {/* Хүзүү */}
        <rect x="90" y="130" width="20" height="20" fill="#D4A574" />
        {/* Hoodie */}
        <path d="M 45 150 Q 70 140 100 145 Q 130 140 155 150 L 155 220 L 45 220 Z" fill="#455A64" />
        <path d="M 85 145 L 85 180 Q 100 190 115 180 L 115 145" fill="#37474F" />
        <line x1="90" y1="155" x2="90" y2="190" stroke="#263238" strokeWidth="2" />
        <line x1="110" y1="155" x2="110" y2="190" stroke="#263238" strokeWidth="2" />
      </svg>
    ),
    4: ( // Эмэгтэй - Найрсаг Оффис Ажилтан
      <svg viewBox="0 0 200 280" className={`w-full h-full ${isHappy ? 'animate-bounce-slow' : ''}`}>
        {/* Ponytail үс */}
        <ellipse cx="100" cy="45" rx="48" ry="20" fill="#4A2C2A" />
        <path d="M 52 50 Q 50 70 55 85 L 68 75 L 65 55 Z" fill="#4A2C2A" />
        <path d="M 148 50 Q 150 70 145 85 L 132 75 L 135 55 Z" fill="#4A2C2A" />
        <path d="M 140 45 Q 165 50 170 90 Q 175 140 160 170" stroke="#4A2C2A" strokeWidth="18" fill="none" strokeLinecap="round" />
        <ellipse cx="158" cy="175" rx="8" ry="12" fill="#4A2C2A" />
        {/* Толгой */}
        <ellipse cx="100" cy="82" rx="40" ry="45" fill="#FFDBAC" />
        {/* Чих */}
        <ellipse cx="60" cy="82" rx="6" ry="9" fill="#FFDBAC" />
        <ellipse cx="140" cy="82" rx="6" ry="9" fill="#FFDBAC" />
        {/* Ээмэг */}
        <circle cx="60" cy="92" r="3" fill="#FF69B4" />
        <circle cx="140" cy="92" r="3" fill="#FF69B4" />
        {/* Хөмсөг */}
        {isAngry ? (
          <>
            {/* Уурласан хөмсөг */}
            <path d="M 73 70 Q 82 65 91 68" stroke="#4A2C2A" strokeWidth="2" fill="none" />
            <path d="M 109 68 Q 118 65 127 70" stroke="#4A2C2A" strokeWidth="2" fill="none" />
          </>
        ) : (
          <>
            <path d="M 73 68 Q 82 65 91 68" stroke="#4A2C2A" strokeWidth="2" fill="none" />
            <path d="M 109 68 Q 118 65 127 68" stroke="#4A2C2A" strokeWidth="2" fill="none" />
          </>
        )}
        {/* Нүд */}
        {isHappy ? (
          <>
            <path d="M 72 80 Q 82 72 92 80" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 108 80 Q 118 72 128 80" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="82" cy="80" rx="10" ry={eyeStyle.eyeHeight} fill="white" />
            <circle cx={82 + eyePosition.x * 0.5} cy={80 + eyePosition.y * 0.5} r={eyeStyle.pupilSize + 1} fill="#5D4037" />
            <circle cx={80 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r="2.5" fill="white" />
            <ellipse cx="118" cy="80" rx="10" ry={eyeStyle.eyeHeight} fill="white" />
            <circle cx={118 + eyePosition.x * 0.5} cy={80 + eyePosition.y * 0.5} r={eyeStyle.pupilSize + 1} fill="#5D4037" />
            <circle cx={116 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r="2.5" fill="white" />
          </>
        )}
        {/* Уурын тэмдэг */}
        {isAngry && (
          <>
            <g className="animate-pulse">
              <path d="M 137 58 L 142 63 M 142 58 L 137 63" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" />
            </g>
          </>
        )}
        {/* Сормуус */}
        <path d="M 72 74 L 69 70 M 77 72 L 75 68 M 87 72 L 89 68 M 92 74 L 95 70" stroke="#4A2C2A" strokeWidth="1.5" />
        <path d="M 108 74 L 105 70 M 113 72 L 111 68 M 123 72 L 125 68 M 128 74 L 131 70" stroke="#4A2C2A" strokeWidth="1.5" />
        {/* Улаан хацар */}
        <ellipse cx="68" cy="95" rx="8" ry="5" fill="#FFB6C1" opacity={isHappy ? "0.7" : "0.5"} />
        <ellipse cx="132" cy="95" rx="8" ry="5" fill="#FFB6C1" opacity={isHappy ? "0.7" : "0.5"} />
        {/* Хамар */}
        <path d="M 100 85 L 98 98 Q 100 101 102 98 L 100 85" fill="#F0C8A0" />
        {/* Ам */}
        {isHappy ? (
          <>
            <path d="M 82 108 Q 100 128 118 108" stroke="#E57373" strokeWidth="3" fill="#FFE4E1" strokeLinecap="round" />
            <path d="M 88 112 Q 100 120 112 112" fill="#FFF" />
          </>
        ) : isAngry ? (
          <path d="M 85 115 Q 100 105 115 115" stroke="#E57373" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : (
          <>
            <path d="M 85 110 Q 100 125 115 110" stroke="#E57373" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 90 112 Q 100 118 110 112" fill="#FFF" />
          </>
        )}
        {/* Хүзүү */}
        <path d="M 90 125 L 90 148 L 110 148 L 110 125" fill="#FFDBAC" />
        <circle cx="100" cy="142" r="4" fill="#FF69B4" />
        {/* Блузка */}
        <path d="M 50 148 Q 75 140 100 145 Q 125 140 150 148 L 150 220 L 50 220 Z" fill="#FF7043" />
        <ellipse cx="100" cy="152" rx="22" ry="10" fill="#FFDBAC" />
        <circle cx="100" cy="170" r="3" fill="#BF360C" />
        <circle cx="100" cy="185" r="3" fill="#BF360C" />
      </svg>
    ),
    5: ( // Эмэгтэй - Designer/Creative
      <svg viewBox="0 0 200 280" className={`w-full h-full ${isHappy ? 'animate-bounce-slow' : ''}`}>
        {/* Өнгөлөг үс */}
        <ellipse cx="100" cy="48" rx="52" ry="24" fill="#9C27B0" />
        <path d="M 48 55 Q 45 90 55 130 L 75 100 L 70 60 Z" fill="#9C27B0" />
        <path d="M 152 55 Q 155 90 145 130 L 125 100 L 130 60 Z" fill="#9C27B0" />
        <path d="M 70 50 Q 60 20 80 15 Q 100 10 100 30" fill="#E91E63" />
        {/* Толгой */}
        <ellipse cx="100" cy="82" rx="38" ry="43" fill="#FFECD2" />
        {/* Чих */}
        <ellipse cx="62" cy="82" rx="5" ry="9" fill="#FFECD2" />
        <ellipse cx="138" cy="82" rx="5" ry="9" fill="#FFECD2" />
        {/* Ээмэг */}
        <circle cx="62" cy="95" r="4" fill="#FFD700" />
        <circle cx="138" cy="95" r="4" fill="#FFD700" />
        {/* Хөмсөг */}
        {isAngry ? (
          <>
            {/* Уурласан хөмсөг */}
            <path d="M 75 68 Q 83 63 91 66" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
            <path d="M 109 66 Q 117 63 125 68" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
          </>
        ) : (
          <>
            <path d="M 75 68 Q 83 64 91 68" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
            <path d="M 109 68 Q 117 64 125 68" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
          </>
        )}
        {/* Нүд */}
        {isHappy ? (
          <>
            <path d="M 73 78 Q 83 70 93 78" stroke="#7B1FA2" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 107 78 Q 117 70 127 78" stroke="#7B1FA2" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="83" cy="78" rx="8" ry={eyeStyle.eyeHeight - 2} fill="white" />
            <circle cx={83 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r={eyeStyle.pupilSize} fill="#7B1FA2" />
            <circle cx={81 + eyePosition.x * 0.5} cy={76 + eyePosition.y * 0.5} r="2" fill="white" />
            <ellipse cx="117" cy="78" rx="8" ry={eyeStyle.eyeHeight - 2} fill="white" />
            <circle cx={117 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r={eyeStyle.pupilSize} fill="#7B1FA2" />
            <circle cx={115 + eyePosition.x * 0.5} cy={76 + eyePosition.y * 0.5} r="2" fill="white" />
          </>
        )}
        {/* Уурын тэмдэг */}
        {isAngry && (
          <>
            <g className="animate-pulse">
              <path d="M 140 62 L 145 67 M 145 62 L 140 67" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" />
            </g>
            <ellipse cx="75" cy="92" rx="6" ry="4" fill="#E53E3E" opacity="0.3" />
            <ellipse cx="125" cy="92" rx="6" ry="4" fill="#E53E3E" opacity="0.3" />
          </>
        )}
        {/* Сормуус */}
        <path d="M 75 73 L 72 70 M 79 71 L 77 67 M 87 71 L 89 67 M 91 73 L 94 70" stroke="#4A148C" strokeWidth="1" />
        <path d="M 109 73 L 106 70 M 113 71 L 111 67 M 121 71 L 123 67 M 125 73 L 128 70" stroke="#4A148C" strokeWidth="1" />
        {/* Хамар */}
        <path d="M 100 83 L 98 95 Q 100 98 102 95 L 100 83" fill="#FFD4A8" />
        {/* Уруул */}
        {isHappy ? (
          <ellipse cx="100" cy="108" rx="12" ry="7" fill="#EC407A" />
        ) : isAngry ? (
          <path d="M 88 112 Q 100 105 112 112" stroke="#EC407A" strokeWidth="2" fill="none" strokeLinecap="round" />
        ) : (
          <ellipse cx="100" cy="108" rx="10" ry="5" fill="#EC407A" />
        )}
        {/* Хацар */}
        {isHappy && (
          <>
            <ellipse cx="68" cy="92" rx="10" ry="6" fill="#FFB6C1" opacity="0.6" />
            <ellipse cx="132" cy="92" rx="10" ry="6" fill="#FFB6C1" opacity="0.6" />
          </>
        )}
        {/* Хүзүү */}
        <path d="M 92 122 L 92 145 L 108 145 L 108 122" fill="#FFECD2" />
        <ellipse cx="100" cy="140" rx="4" ry="6" fill="#FFD700" />
        {/* Creative хувцас */}
        <path d="M 55 145 Q 78 138 100 142 Q 122 138 145 145 L 150 220 L 50 220 Z" fill="#FF4081" />
        <path d="M 70 155 L 75 220" stroke="#F8BBD9" strokeWidth="3" />
        <path d="M 130 155 L 125 220" stroke="#F8BBD9" strokeWidth="3" />
      </svg>
    ),
    6: ( // Эрэгтэй - Technical Expert
      <svg viewBox="0 0 200 280" className={`w-full h-full ${isHappy ? 'animate-bounce-slow' : ''}`}>
        {/* Үс */}
        <path d="M 58 65 Q 58 40 100 35 Q 142 40 142 65 L 138 72 L 62 72 Z" fill="#5D4037" />
        {/* Толгой */}
        <ellipse cx="100" cy="85" rx="42" ry="47" fill="#DEB887" />
        {/* Чих */}
        <ellipse cx="58" cy="85" rx="7" ry="11" fill="#DEB887" />
        <ellipse cx="142" cy="85" rx="7" ry="11" fill="#DEB887" />
        {/* Хөмсөг */}
        {isAngry ? (
          <>
            <path d="M 70 66 Q 80 70 90 68" stroke="#3E2723" strokeWidth="2.5" fill="none" />
            <path d="M 110 68 Q 120 70 130 66" stroke="#3E2723" strokeWidth="2.5" fill="none" />
          </>
        ) : (
          <>
            <path d="M 70 68 Q 80 64 90 68" stroke="#3E2723" strokeWidth="2.5" fill="none" />
            <path d="M 110 68 Q 120 64 130 68" stroke="#3E2723" strokeWidth="2.5" fill="none" />
          </>
        )}
        {/* Нүд */}
        {isHappy ? (
          <>
            <path d="M 70 80 Q 80 72 90 80" stroke="#1565C0" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 110 80 Q 120 72 130 80" stroke="#1565C0" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="80" cy="80" rx="9" ry={eyeStyle.eyeHeight - 1} fill="white" />
            <circle cx={80 + eyePosition.x * 0.5} cy={80 + eyePosition.y * 0.5} r={eyeStyle.pupilSize} fill="#1565C0" />
            <circle cx={78 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r="2" fill="white" />
            <ellipse cx="120" cy="80" rx="9" ry={eyeStyle.eyeHeight - 1} fill="white" />
            <circle cx={120 + eyePosition.x * 0.5} cy={80 + eyePosition.y * 0.5} r={eyeStyle.pupilSize} fill="#1565C0" />
            <circle cx={118 + eyePosition.x * 0.5} cy={78 + eyePosition.y * 0.5} r="2" fill="white" />
          </>
        )}
        {/* Уурын тэмдэг */}
        {isAngry && (
          <>
            <g className="animate-pulse">
              <path d="M 140 60 L 145 65 M 145 60 L 140 65" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" />
            </g>
            <ellipse cx="72" cy="95" rx="6" ry="4" fill="#E53E3E" opacity="0.3" />
            <ellipse cx="128" cy="95" rx="6" ry="4" fill="#E53E3E" opacity="0.3" />
          </>
        )}
        {/* Хамар */}
        <path d="M 100 85 L 96 102 Q 100 107 104 102 L 100 85" fill="#C9A66B" />
        {/* Ам */}
        <path d={getMouthPath(115, 6)} stroke="#8D6E63" strokeWidth="2" fill={isHappy ? "#FFE4E1" : "none"} strokeLinecap="round" />
        {/* Хацар */}
        {isHappy && (
          <>
            <ellipse cx="65" cy="98" rx="10" ry="6" fill="#FFB6C1" opacity="0.5" />
            <ellipse cx="135" cy="98" rx="10" ry="6" fill="#FFB6C1" opacity="0.5" />
          </>
        )}
        {/* Хүзүү */}
        <rect x="90" y="130" width="20" height="18" fill="#DEB887" />
        {/* Цамц + халат */}
        <path d="M 48 148 Q 74 140 100 145 Q 126 140 152 148 L 152 220 L 48 220 Z" fill="white" />
        <path d="M 48 148 L 65 145 L 65 220 L 48 220 Z" fill="#1976D2" />
        <path d="M 152 148 L 135 145 L 135 220 L 152 220 Z" fill="#1976D2" />
        <circle cx="100" cy="165" r="3" fill="#333" />
        <circle cx="100" cy="180" r="3" fill="#333" />
        <circle cx="100" cy="195" r="3" fill="#333" />
        <rect x="115" y="155" width="25" height="15" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="1" rx="2" />
        <line x1="118" y1="160" x2="137" y2="160" stroke="#333" strokeWidth="1" />
        <line x1="118" y1="165" x2="132" y2="165" stroke="#333" strokeWidth="1" />
      </svg>
    ),
  };
  
  return characterStyles[selectedAvatar] || characterStyles[1];
};

export default renderCharacter;
