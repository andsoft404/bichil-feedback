import AdCarousel from '../components/ads/AdCarousel';
import ProfileHeader from '../components/ProfileHeader';

export default function MenuSelectionStep({ ads, adIndex, setAdIndex, onSelectFeedback, selectedAvatar }) {
  return (
<div className="w-full min-h-screen bg-[#0048BA] flex flex-col animate-fadeIn relative overflow-hidden">

  <ProfileHeader selectedAvatar={selectedAvatar} />

  <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.82fr)] lg:gap-10 lg:px-10 lg:pt-6 lg:items-start">
  <AdCarousel ads={ads} adIndex={adIndex} setAdIndex={setAdIndex} className="mx-5 mt-6 lg:mx-0 lg:mt-0" desktopHeight="360px" />

  <div className="lg:pt-4">

  {/* Title text */}
  <div className="text-center lg:text-left mt-8 lg:mt-0 mb-6 lg:mb-8 mx-5 lg:mx-0">
    <h2 className="font-montserrat text-white text-xl lg:text-3xl font-black leading-snug">{`\u0422\u0430 \u0434\u043e\u043e\u0440\u0445 \u0446\u044d\u0441\u044d\u044d\u0441`}</h2>
    <h2 className="font-montserrat text-white text-xl lg:text-3xl font-black leading-snug">{`\u0441\u043e\u043d\u0433\u043e\u043b\u0442\u043e\u043e \u0445\u0438\u0439\u043d\u044d \u04af\u04af`}</h2>
  </div>

  {/* Three menu cards */}
  <div className="mx-5 lg:mx-0 grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-3 lg:gap-5">
    {/* Хүсэлт илгээх */}
    <button
      onClick={() => onSelectFeedback('\u0425\u04af\u0441\u044d\u043b\u0442')}
      className="rounded-2xl overflow-hidden flex flex-col justify-end aspect-square lg:aspect-[16/10] xl:aspect-square transition-all hover:scale-[1.02] active:scale-[0.97] relative"
      style={{ background: 'linear-gradient(135deg, #4A90D9 0%, #357ABD 100%)' }}
    >
      <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <span className="font-poppins text-gray-800 text-sm lg:text-base font-bold bg-white rounded-xl mx-3 mb-3 px-3 py-2 text-center relative z-10">{`\u0425\u04af\u0441\u044d\u043b\u0442 \u0438\u043b\u0433\u044d\u044d\u0445`}</span>
    </button>
    {/* Гомдол илгээх */}
    <button
      onClick={() => onSelectFeedback('\u0413\u043e\u043c\u0434\u043e\u043b')}
      className="rounded-2xl overflow-hidden flex flex-col justify-end aspect-square lg:aspect-[16/10] xl:aspect-square transition-all hover:scale-[1.02] active:scale-[0.97] relative"
      style={{ background: 'linear-gradient(135deg, #4A90D9 0%, #357ABD 100%)' }}
    >
      <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <span className="font-poppins text-gray-800 text-sm lg:text-base font-bold bg-white rounded-xl mx-3 mb-3 px-3 py-2 text-center relative z-10">{`\u0413\u043e\u043c\u0434\u043e\u043b \u0438\u043b\u0433\u044d\u044d\u0445`}</span>
    </button>
    {/* Талархал илгээх */}
    <button
      onClick={() => onSelectFeedback('\u0422\u0430\u043b\u0430\u0440\u0445\u0430\u043b')}
      className="rounded-2xl overflow-hidden flex flex-col justify-end aspect-square lg:aspect-[16/10] xl:aspect-square transition-all hover:scale-[1.02] active:scale-[0.97] col-span-1 relative"
      style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #00B2E7 100%)' }}
    >
      <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=400&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <span className="font-poppins text-gray-800 text-sm lg:text-base font-bold bg-white rounded-xl mx-3 mb-3 px-3 py-2 text-center relative z-10">{`\u0422\u0430\u043b\u0430\u0440\u0445\u0430\u043b \u0438\u043b\u0433\u044d\u044d\u0445`}</span>
    </button>
  </div>
  </div>
  </div>
</div>
  );
}
