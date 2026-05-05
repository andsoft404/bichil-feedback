import AdCarousel from '../components/ads/AdCarousel';
import FieldStatusIcon from '../components/forms/FieldStatusIcon';
import ProfileHeader from '../components/ProfileHeader';

export default function RequestFormStep({
  ads,
  adIndex,
  setAdIndex,
  selectedAvatar,
  onBack,
  userName,
  setUserName,
  phone,
  handlePhoneChange,
  isValidPhone,
  detail,
  setDetail,
  showWarning,
  setShowWarning,
  onSuccess,
}) {
  const warningText = !isValidPhone
    ? 'Холбогдох утас буруу байна. 8 орон оруулна уу.'
    : 'Талбар бүрэн бөглөгдөөгүй байна.';

  return (
<div className="w-full min-h-screen bg-[#0048BA] animate-fadeIn flex flex-col">

  <ProfileHeader selectedAvatar={selectedAvatar} onBack={onBack} />

  <div className="lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.78fr)] lg:gap-10 lg:px-10 lg:pt-6 lg:items-start">
  <div>
  <AdCarousel ads={ads} adIndex={adIndex} setAdIndex={setAdIndex} className="mx-5 mt-6 lg:mx-0 lg:mt-28" desktopHeight="460px" />

  {/* Title */}
  <h2 className="font-montserrat text-white text-xl font-black text-center mt-6 mb-5 lg:hidden">{`\u0425\u04af\u0441\u044d\u043b\u0442 \u0445\u044d\u0441\u044d\u0433`}</h2>
  </div>

  <div className="lg:pt-4">

  {/* Desktop title */}
  <h2 className="hidden lg:block font-montserrat text-white text-3xl font-black text-left mb-6">{`\u0425\u04af\u0441\u044d\u043b\u0442 \u0445\u044d\u0441\u044d\u0433`}</h2>

  {/* Name input */}
  <div className="mx-5 lg:mx-0 mb-3 flex items-center gap-3">
    <FieldStatusIcon isComplete={userName.trim().length > 0} />
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value.replace(/[0-9]/g, ''))}
      placeholder={`\u0422\u0430\u043d\u044b \u043d\u044d\u0440 ...`}
      className="flex-1 min-w-0 bg-gray-400 rounded-full px-5 py-3.5 font-poppins text-white text-base outline-none placeholder-white/80"
    />
  </div>

  {/* Phone input */}
  <div className="mx-5 lg:mx-0 mb-5 flex items-center gap-3">
    <FieldStatusIcon type="phone" isComplete={isValidPhone} />
    <input
      type="tel"
      value={phone}
      onChange={(e) => handlePhoneChange(e.target.value)}
      inputMode="numeric"
      maxLength={8}
      minLength={8}
      pattern="[0-9]{8}"
      aria-invalid={showWarning && !isValidPhone}
      placeholder={`\u0425\u043e\u043b\u0431\u043e\u0433\u0434\u043e\u0445 \u0443\u0442\u0430\u0441 ...`}
      className="flex-1 min-w-0 bg-gray-400 rounded-full px-5 py-3.5 font-poppins text-white text-base outline-none placeholder-white/80"
    />
  </div>

  {/* Textarea card */}
  <div className="mx-5 lg:mx-0 mt-4 mb-4 bg-white rounded-2xl p-4 pb-6">
    <p className="font-poppins text-gray-800 text-sm font-bold mb-2">{`\u0425\u04af\u0441\u044d\u043b\u0442 \u0431\u0438\u0447\u0438\u0445`}</p>
    <div className="mt-3 rounded-2xl bg-[#EEF2F6] p-4 shadow-[inset_6px_6px_14px_rgba(100,116,139,0.24),inset_-6px_-6px_14px_rgba(255,255,255,0.9)]">
      <textarea
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        placeholder={`\u0425\u04af\u0441\u044d\u043b\u0442\u044d\u044d \u0431\u0438\u0447\u043d\u044d \u04af\u04af ...`}
        rows={7}
        className="w-full bg-transparent font-poppins text-gray-700 text-sm outline-none resize-none placeholder-gray-400"
      />
    </div>
  </div>

  {/* Warning text */}
  {showWarning && (
  <div className="mx-5 mb-5 lg:mx-0 lg:mb-6 flex items-center gap-2 lg:gap-3">
    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
      <span className="text-white text-xs lg:text-sm font-bold leading-none">!</span>
    </div>
    <p className="font-poppins text-white/60 text-[11px] lg:text-[13px]">{warningText}</p>
  </div>
  )}  

  {/* Submit button */}
  <div className="mx-5 lg:mx-0 mt-12 mb-8">
    <button onClick={() => { if (!userName.trim() || !isValidPhone || !detail.trim()) { setShowWarning(true); } else { setShowWarning(false); onSuccess(); } }} className="w-full py-3.5 font-opensans bg-[#3158E8] rounded-full font-extrabold text-sm tracking-wider text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all">{`\u0418\u043b\u0433\u044d\u044d\u0445`}</button>
  </div>

  </div>
  </div>

</div>
  );
}
