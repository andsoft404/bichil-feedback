export const appGlobalStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Open+Sans:wght@400;700;800&family=Poppins:wght@400;500;600;700&display=swap');
        body { 
          font-family: 'Poppins', sans-serif; 
          background: #0048BA;
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
          overflow: hidden; 
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 1024px) {
          body {
            background: linear-gradient(135deg, #001a4d 0%, #003080 50%, #001a4d 100%);
            align-items: flex-start;
            justify-content: flex-start;
            padding-left: 0;
            box-sizing: border-box;
          }
          .feedback-app-shell {
            width: 100vw;
            max-width: none;
            margin-left: 0;
            margin-right: 0;
          }
          .profile-header-layer {
            left: 0;
            right: 0;
            width: 100vw;
          }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #9ca3af; border-radius: 10px; }

        /* Desktop main scrollbar */
        @media (min-width: 1024px) {
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: rgba(0, 72, 186, 0.3); border-radius: 10px; }
          ::-webkit-scrollbar-thumb { 
            background: linear-gradient(180deg, #00B2E7, #0060D0); 
            border-radius: 10px; 
            border: 1px solid rgba(255,255,255,0.1);
          }
          ::-webkit-scrollbar-thumb:hover { 
            background: linear-gradient(180deg, #33c4ed, #0080f0); 
          }
          * { scrollbar-width: thin; scrollbar-color: #00B2E7 rgba(0, 72, 186, 0.3); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        
        /* Font families */
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-opensans { font-family: 'Open Sans', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

        @keyframes bannerFade { 0% { opacity: 0; transform: scale(1.08); } 100% { opacity: 1; transform: scale(1); } }
        .animate-bannerFade { animation: bannerFade 0.7s ease-out forwards; }

        @keyframes carouselControlBreathe {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255,255,255,0);
          }
          50% {
            transform: scale(1.12);
            box-shadow: 0 0 18px rgba(255,255,255,0.38);
          }
        }
        .animate-carousel-control-breathe {
          animation: carouselControlBreathe 1.8s ease-in-out infinite;
        }

        @keyframes backArrowRunIn {
          0% {
            opacity: 0;
            filter: blur(0);
            transform: translateX(calc(100vw - 170px)) scale(0.94);
          }
          8% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(calc(92vw - 168px)) scale(1);
          }
          24% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(calc(68vw - 150px)) scale(1);
          }
          42% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(calc(42vw - 120px)) scale(1);
          }
          58% {
            opacity: 0.92;
            filter: blur(0);
            transform: translateX(250px) scale(1);
          }
          72% {
            opacity: 0.28;
            filter: blur(4px);
            transform: translateX(150px) scale(0.98);
          }
          84% {
            opacity: 0.34;
            filter: blur(5px);
            transform: translateX(62px) scale(0.98);
          }
          94% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(-8px) scale(1.04);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0) scale(1);
          }
        }

        @keyframes backButtonShellIn {
          0% {
            opacity: 0;
            transform: scale(0.72);
          }
          70% {
            opacity: 1;
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .desktop-back-button {
          position: relative;
          isolation: isolate;
        }
        .desktop-back-button::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 1rem;
          background: #E8EDF2;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: inset 4px 4px 10px rgba(92,105,121,0.16), inset -4px -4px 10px rgba(255,255,255,0.9), 0 8px 18px rgba(0,34,102,0.1);
          opacity: 0;
          transform: scale(0.72);
          animation: backButtonShellIn 0.42s ease-out 1.02s forwards;
        }
        .desktop-back-button svg {
          position: relative;
          z-index: 1;
          animation: backArrowRunIn 1.18s linear both;
        }

        @keyframes scaleIn { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: scale(1); } }
        .animate-scaleIn { animation: scaleIn 0.2s ease-out forwards; }

        /* Зургууд үсэрч гарч ирэх анимейшн */
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounceIn { 
          animation: bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; 
        }

        /* Одын цацралт анимейшн */
        @keyframes flyOut {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: flyOut 0.8s ease-out forwards;
        }

        /* Vertical snap scroll for avatars */
        .avatar-vertical-scroll {
          scroll-snap-type: y mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .avatar-vertical-scroll::-webkit-scrollbar {
          display: none;
        }
        .avatar-snap-item {
          scroll-snap-align: center;
        }

        /* Character float animation */
        @keyframes characterFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-character-float {
          animation: characterFloat 3s ease-in-out infinite;
        }

        /* Gradient line animation */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
`;
