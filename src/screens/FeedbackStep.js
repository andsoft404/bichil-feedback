import { useRef, useState } from 'react';
import AdCarousel from '../components/ads/AdCarousel';
import FieldStatusIcon from '../components/forms/FieldStatusIcon';
import FileAttachment from '../components/forms/FileAttachment';
import StarRating from '../components/forms/StarRating';
import ProfileHeader from '../components/ProfileHeader';
import { branchImages, branches, positions } from '../data/options';

export default function FeedbackStep({
  activeTab,
  setActiveTab,
  feedbackType,
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
  uploadedFiles,
  handleFileSelect,
  removeFile,
  rating,
  setRating,
  onSuccess,
}) {
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [confirmedBranch, setConfirmedBranch] = useState(null);
  const [branchCategory, setBranchCategory] = useState('central');
  const [workerName, setWorkerName] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [positionDropdownOpen, setPositionDropdownOpen] = useState(false);
  const branchSwipeRef = useRef(null);
  const branchGroups = {
    central: {
      label: 'Төв салбар',
      branches: branches.slice(0, 4),
      images: branchImages.slice(0, 4),
    },
    unit: {
      label: 'Нэгж салбар',
      branches: branches.slice(4),
      images: branchImages.slice(4),
    },
  };
  const activeBranchGroup = branchGroups[branchCategory];
  const activeBranches = activeBranchGroup.branches;
  const activeBranchImages = activeBranchGroup.images;
  const isBranchConfirmed = confirmedBranch?.category === branchCategory && confirmedBranch?.index === selectedBranch;
  const handleBranchCategoryChange = (category) => {
    setBranchCategory(category);
    setSelectedBranch(0);
    setConfirmedBranch(null);
  };
  const isComplaint = feedbackType === 'Гомдол';
  const warningText = isComplaint && !isValidPhone
    ? 'Холбогдох утас буруу байна. 8 орон оруулна уу.'
    : 'Талбар бүрэн бөглөгдөөгүй байна.';

  return (
<div
  className="w-full min-h-screen lg:h-screen lg:overflow-hidden animate-fadeIn"
  style={{ background: '#0048BA' }}
>
<div className="w-full lg:h-full">
{/* ГОМДОЛ / ТАЛАРХАЛ flow */}
{(activeTab === 'select' || activeTab === 'org' || activeTab === 'person') ? (
  <>
    <ProfileHeader selectedAvatar={selectedAvatar} onBack={onBack} />

    <div className="lg:grid lg:grid-cols-[minmax(0,0.86fr)_minmax(420px,0.9fr)] lg:gap-10 lg:px-10 lg:pt-6 lg:items-start lg:h-[calc(100vh-108px)] lg:overflow-hidden">
    <div className={`lg:h-full lg:overflow-hidden lg:transition-transform lg:duration-500 lg:ease-out ${activeTab === 'select' ? 'lg:translate-x-[54%]' : 'lg:translate-x-0'}`}>
    <AdCarousel ads={ads} adIndex={adIndex} setAdIndex={setAdIndex} className="mx-5 mt-6 lg:mx-0 lg:mt-0" desktopHeight="360px" />

    <div className="lg:pt-0 lg:max-w-[620px] lg:mx-auto">

    {/* Title */}
    <div className="text-center mt-6 lg:mt-8 mb-5 lg:mb-7">
      <h2 className="font-montserrat text-white text-xl lg:text-3xl font-black">{feedbackType === 'Гомдол' ? 'Гомдлын хэсэг' : 'Талархлын хэсэг'}</h2>
    </div>

    {/* Two cards - Байгууллага / Ажилтан */}
    <div className="grid grid-cols-2 gap-6 lg:gap-10 mx-5 lg:mx-0 mb-4">
      <button 
        onClick={() => setActiveTab(activeTab === 'org' ? 'select' : 'org')}
        className={`rounded-2xl overflow-hidden flex flex-col justify-end aspect-square transition-all hover:scale-[1.02] active:scale-[0.97] relative ${activeTab === 'person' ? 'opacity-40' : ''}`}
        style={{ background: 'linear-gradient(135deg, #4A90D9 0%, #357ABD 100%)' }}
      >
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0 z-0"
          style={{ background: 'linear-gradient(135deg, rgba(74, 144, 217, 0.78) 0%, rgba(53, 122, 189, 0.9) 100%)' }}
        />
        <span className="font-poppins text-gray-800 text-sm lg:text-base font-bold bg-white rounded-xl mx-3 mb-3 px-3 py-2 text-center relative z-10">Байгууллага</span>
      </button>
      <button 
        onClick={() => setActiveTab(activeTab === 'person' ? 'select' : 'person')}
        className={`rounded-2xl overflow-hidden flex flex-col justify-end aspect-square transition-all hover:scale-[1.02] active:scale-[0.97] relative ${activeTab === 'org' ? 'opacity-40' : ''}`}
        style={{ background: 'linear-gradient(135deg, #4A90D9 0%, #357ABD 100%)' }}
      >
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <span className="font-poppins text-gray-800 text-sm lg:text-base font-bold bg-white rounded-xl mx-3 mb-3 px-3 py-2 text-center relative z-10">Ажилтан</span>
      </button>
    </div>

    {activeTab === 'select' && (
      <div className="flex items-center gap-2 mx-5 lg:mx-0 mt-1">
        <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[9px] font-bold">!</span>
        </div>
        <p className="font-poppins text-gray-400 text-[15px]">Та өөрт тохирох хэсгээ сонгоно уу?</p>
      </div>
    )}
    </div>
    </div>

    <div className={`lg:pt-0 lg:h-full lg:overflow-y-auto lg:pr-2 lg:pb-8 lg:transition-all lg:duration-500 lg:ease-out lg:origin-center ${activeTab === 'select' ? 'lg:opacity-0 lg:scale-95 lg:pointer-events-none lg:delay-0' : 'lg:opacity-100 lg:scale-100 lg:delay-300'}`}>

    {/* Org form - appears below cards */}
    {activeTab === 'org' && (
      <div className={`${feedbackType === 'Талархал' ? 'mt-7' : 'mt-12'} animate-fadeIn lg:mt-0 lg:max-w-none lg:ml-0 lg:mr-0`}>
        {/* Title */}
        <h2 className={`font-montserrat text-white text-lg lg:text-2xl font-black text-center ${feedbackType === 'Талархал' ? 'mb-3' : 'mb-5'}`}>{feedbackType === 'Гомдол' ? 'Байгууллагад илгээх\nгомдол' : 'Байгууллагад илгээх\nталархал'}</h2>

        {feedbackType === 'Гомдол' && (
        <>
        {/* Name input */}
        <div className="mx-5 mt-4 mb-3 flex items-center gap-3">
          <FieldStatusIcon isComplete={userName.trim().length > 0} />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value.replace(/[0-9]/g, ''))}
            placeholder="Таны нэр ..."
            className="flex-1 bg-gray-400 rounded-full px-5 py-3.5 font-poppins text-white text-base outline-none placeholder-white/80"
          />
        </div>

        {/* Phone input */}
        <div className="mx-5 mb-5 flex items-center gap-3">
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
            placeholder="Холбогдох утас ..."
            className="flex-1 bg-gray-400 rounded-full px-5 py-3.5 font-poppins text-white text-base outline-none placeholder-white/80"
          />
        </div>
        </>
        )}

        {/* Textarea card */}
        <div className={`mx-5 ${feedbackType === 'Талархал' ? 'mt-6' : 'mt-12'} mb-4 bg-white rounded-2xl p-4 pb-6`}>
          <p className="font-poppins text-gray-800 text-sm font-bold mb-2">Хүсэлт бичих</p>
          <div className="mt-3 rounded-2xl bg-[#EEF2F6] p-4 shadow-[inset_6px_6px_14px_rgba(100,116,139,0.24),inset_-6px_-6px_14px_rgba(255,255,255,0.9)]">
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="Энд бичнэ үү ..."
              rows={7}
              className="w-full bg-transparent font-poppins text-gray-700 text-sm outline-none resize-none placeholder-gray-400"
            />
          </div>
        </div>

        {feedbackType === 'Гомдол' ? (
        <>
        <FileAttachment
          uploadId="fileUploadOrg"
          uploadedFiles={uploadedFiles}
          onFileSelect={handleFileSelect}
          onRemoveFile={removeFile}
          className="mx-5 mb-4"
        />
        </>
        ) : (
        <>
        <StarRating rating={rating} setRating={setRating} className="mx-5 mb-4" />
        </>
        )}

        {/* Warning */}
        {showWarning && (
        <div className="mx-5 mb-4 lg:mx-8 lg:mb-5 flex items-center gap-2 lg:gap-3">
          <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs lg:text-sm font-bold leading-none">!</span>
          </div>
          <p className="font-poppins text-white/60 text-[11px] lg:text-[13px]">{warningText}</p>
        </div>
        )}

        {/* Submit button */}
        <div className="mx-5 mt-8 mb-8">
          <button onClick={() => { if (!detail.trim() || (isComplaint && (!userName.trim() || !isValidPhone))) { setShowWarning(true); } else { setShowWarning(false); onSuccess(); } }} className="w-full py-3.5 font-opensans bg-[#3158E8] rounded-full font-extrabold text-sm tracking-wider text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all">Илгээх</button>
        </div>
      </div>
    )}

    {/* Person form - appears below cards */}
    {activeTab === 'person' && (
      <div className="mt-8 animate-fadeIn lg:mt-0 lg:max-w-none lg:ml-0 lg:mr-0">
        {/* Title */}
        <h2 className="font-montserrat text-white text-lg lg:text-2xl font-black text-center mb-5">{feedbackType === 'Гомдол' ? 'Ажилтанд илгээх\nгомдол' : 'Ажилтанд илгээх\nталархал'}</h2>

        {/* Branch selector - white card with swipe */}
        <div className="mx-5 mb-4 bg-[#0A50BF] rounded-2xl px-1 pt-4 pb-4 border border-white/10 shadow-[inset_7px_7px_16px_rgba(0,31,92,0.32),inset_-7px_-7px_16px_rgba(80,140,255,0.22),0_12px_24px_rgba(0,28,86,0.18)]">
          <p className="font-poppins text-center text-white text-[21px] font-bold mb-4">Та салбараа сонгоно уу?</p>
          <div className="grid grid-cols-2 gap-4 mx-4 mb-5">
            {[
              { key: 'central', label: 'Төв салбар' },
              { key: 'unit', label: 'Нэгж салбар' },
            ].map((item) => (
              <div
                key={item.key}
                className={`rounded-2xl bg-[#0A50BF] p-2 shadow-[inset_6px_6px_14px_rgba(0,31,92,0.34),inset_-6px_-6px_14px_rgba(80,140,255,0.22)] transition-opacity ${branchCategory === item.key ? '' : 'opacity-40'}`}
              >
                <button
                  type="button"
                  onClick={() => handleBranchCategoryChange(item.key)}
                  className="w-full min-h-[48px] lg:min-h-[56px] rounded-xl bg-white font-poppins text-gray-800 text-sm lg:text-base font-bold text-center transition-all hover:scale-[1.02] active:scale-[0.97] shadow-[0_8px_18px_rgba(0,28,86,0.18)]"
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 px-3">
            <button onClick={() => setSelectedBranch(prev => prev <= 0 ? activeBranches.length - 1 : prev - 1)} className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white/90 hover:text-white hover:bg-white/25 transition-colors flex items-center justify-center animate-carousel-control-breathe flex-shrink-0">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div
              className={`w-[240px] h-[240px] sm:w-[270px] sm:h-[270px] rounded-2xl overflow-hidden relative bg-transparent flex-shrink-0 border-2 transition-all duration-300 ${isBranchConfirmed ? 'border-white shadow-[0_0_0_5px_rgba(255,255,255,0.2),0_14px_28px_rgba(0,24,78,0.26)]' : 'border-transparent'}`}
              onTouchStart={(e) => { e.stopPropagation(); branchSwipeRef.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                e.stopPropagation();
                if (branchSwipeRef.current === null) return;
                const diff = e.changedTouches[0].clientX - branchSwipeRef.current;
                branchSwipeRef.current = null;
                if (diff > 40) setSelectedBranch(prev => prev <= 0 ? activeBranches.length - 1 : prev - 1);
                else if (diff < -40) setSelectedBranch(prev => (prev + 1) % activeBranches.length);
              }}
            >
              {activeBranchImages[selectedBranch] && (
                <img
                  src={activeBranchImages[selectedBranch]}
                  alt={activeBranches[selectedBranch]}
                  className="absolute inset-0 w-full h-full object-cover object-bottom"
                />
              )}
              <div className="absolute inset-0 flex items-end justify-center pb-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setConfirmedBranch({ category: branchCategory, index: selectedBranch });
                  }}
                  className={`font-poppins text-sm font-bold rounded-full px-10 py-2.5 border-2 transition-all duration-300 ${isBranchConfirmed ? 'bg-white/95 border-white text-[#0A50BF] shadow-[0_0_0_5px_rgba(255,255,255,0.22)]' : 'bg-white border-transparent text-gray-800'}`}
                >
                  {isBranchConfirmed ? 'Сонгогдсон' : 'Сонгох'}
                </button>
              </div>
            </div>
            <button onClick={() => setSelectedBranch(prev => (prev + 1) % activeBranches.length)} className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white/90 hover:text-white hover:bg-white/25 transition-colors flex items-center justify-center animate-carousel-control-breathe flex-shrink-0">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

          {/* Selected branch name */}
          <p className="font-montserrat text-white text-sm font-black text-center mt-6 mb-2">{activeBranches[selectedBranch]}</p>
        </div>

        {/* Name input */}
        <div className="mx-5 mt-12 mb-3 flex items-center gap-3">
          <FieldStatusIcon isComplete={workerName.trim().length > 0} />
          <input
            type="text"
            value={workerName}
            onChange={(e) => setWorkerName(e.target.value.replace(/[0-9]/g, ''))}
            placeholder="Ажилтны нэр ... (Заавал биш)"
            className="flex-1 bg-gray-400 rounded-full px-5 py-3.5 font-poppins text-white text-base outline-none placeholder-white/80"
          />
        </div>

        {feedbackType === 'Гомдол' && (
        <div className="mx-5 mb-5 flex items-center gap-3">
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
            placeholder="Холбогдох утас ..."
            className="flex-1 bg-gray-400 rounded-full px-5 py-3.5 font-poppins text-white text-base outline-none placeholder-white/80"
          />
        </div>
        )}

        {/* Position selector */}
        <div className="mx-5 mt-9 mb-4">
          <p className="font-poppins text-white/70 text-sx font-bold tracking-wide mb-2">Албан тушаал</p>
          <div className="relative">
            <button
              onClick={() => setPositionDropdownOpen(!positionDropdownOpen)}
              className="w-full bg-white rounded-2xl px-4 py-3 flex items-center justify-between font-poppins text-sm"
            >
              <span className={selectedPosition ? 'text-gray-800 font-bold' : 'text-black'}>{selectedPosition || 'Сонгох'}</span>
              <svg className={`w-4 h-4 text-gray-500 transition-transform ${positionDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            {positionDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-lg z-10 overflow-hidden">
                {positions.map((pos) => (
                  <button
                    key={pos}
                    onClick={() => { setSelectedPosition(pos); setPositionDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-poppins text-sm hover:bg-gray-100 transition-colors ${selectedPosition === pos ? 'bg-blue-50 text-[#0048BA] font-bold' : 'text-gray-700'}`}
                  >
                    {pos}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Detail textarea - white card */}
        <div className="mx-5 mt-7 mb-4 bg-white rounded-2xl p-4 pb-6">
          <p className="font-poppins text-gray-800 text-sm font-bold mb-2">Дэлгэрэнгүй</p>
          <div className="mt-3 rounded-2xl bg-[#EEF2F6] p-4 shadow-[inset_6px_6px_14px_rgba(100,116,139,0.24),inset_-6px_-6px_14px_rgba(255,255,255,0.9)]">
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="Энд бичнэ үү ..."
              rows={7}
              className="w-full bg-transparent font-poppins text-gray-700 text-sm outline-none resize-none placeholder-gray-400"
            />
          </div>
        </div>

        {feedbackType === 'Гомдол' ? (
        <>
        <FileAttachment
          uploadId="fileUploadPerson"
          uploadedFiles={uploadedFiles}
          onFileSelect={handleFileSelect}
          onRemoveFile={removeFile}
          className="mx-5 mb-4"
        />
        </>
        ) : (
        <>
        <StarRating rating={rating} setRating={setRating} className="mx-5 mb-4" />
        </>
        )}

        {showWarning && (
        <div className="mx-5 mb-4 lg:mx-8 lg:mb-5 flex items-center gap-2 lg:gap-3">
          <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs lg:text-sm font-bold leading-none">!</span>
          </div>
          <p className="font-poppins text-white/60 text-[11px] lg:text-[13px]">{warningText}</p>
        </div>
        )}

        {/* Submit button */}
        <div className="mx-5 mt-8 mb-8">
          <button onClick={() => { if (!detail.trim() || (isComplaint && !isValidPhone)) { setShowWarning(true); } else { setShowWarning(false); onSuccess(); } }} className="w-full py-3.5 font-opensans bg-[#3158E8] rounded-full font-extrabold text-sm tracking-wider text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all">Илгээх</button>
        </div>
      </div>
    )}
    </div>
    </div>
  </>
) : null}
          </div>
          </div>
  );
}
