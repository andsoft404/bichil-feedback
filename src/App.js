import { useCallback, useEffect, useRef, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SuccessPage from './components/SuccessPage';
import { ads } from './data/ads';
import useAdRotation from './hooks/useAdRotation';
import useFileUploads from './hooks/useFileUploads';
import useGlobalBackSwipe from './hooks/useGlobalBackSwipe';
import { appGlobalStyles } from './styles/appGlobalStyles';
import AvatarSelectionStep from './screens/AvatarSelectionStep';
import FeedbackStep from './screens/FeedbackStep';
import IntroVoiceStep from './screens/IntroVoiceStep';
import MenuSelectionStep from './screens/MenuSelectionStep';
import RequestFormStep from './screens/RequestFormStep';

const REQUEST_TYPE = 'Хүсэлт';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('select');
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const [feedbackType, setFeedbackType] = useState(REQUEST_TYPE);
  const [detail, setDetail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [adIndex, setAdIndex] = useAdRotation(step, ads.length);
  const { uploadedFiles, handleFileSelect, removeFile } = useFileUploads();
  const loadingTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) {
        window.clearTimeout(loadingTimerRef.current);
      }
    };
  }, []);

  const runWithLoading = useCallback((action) => {
    setIsPageLoading(true);

    if (loadingTimerRef.current) {
      window.clearTimeout(loadingTimerRef.current);
    }

    loadingTimerRef.current = window.setTimeout(() => {
      action();
      window.requestAnimationFrame(() => {
        setIsPageLoading(false);
      });
    }, 650);
  }, []);

  const finishIntro = useCallback(() => {
    runWithLoading(() => {
      setShowIntro(false);
    });
  }, [runWithLoading]);

  const handlePhoneChange = (value) => {
    setPhone(value.replace(/\D/g, '').slice(0, 8));
  };

  const resetSuccess = () => {
    runWithLoading(() => {
      setShowSuccess(false);
      setStep(1);
      setUserName('');
      setPhone('');
      setDetail('');
      setShowWarning(false);
    });
  };

  const goToHome = () => {
    runWithLoading(() => {
      setStep(1);
      setActiveTab('select');
      setShowWarning(false);
    });
  };

  const goToMenu = () => {
    runWithLoading(() => {
      setStep(2);
      setActiveTab('select');
      setShowWarning(false);
      setShowSuccess(false);
    });
  };

  const goToFeedback = (type) => {
    runWithLoading(() => {
      setFeedbackType(type);
      setStep(3);
    });
  };

  const showSuccessPage = () => {
    runWithLoading(() => {
      setShowSuccess(true);
    });
  };

  const globalSwipe = useGlobalBackSwipe({
    onBackToHome: goToHome,
    onBackToMenu: goToMenu,
    setActiveTab,
    setShowWarning,
    setStep,
    step,
  });

  const isValidPhone = phone.length === 8;

  return (
    <>
      <style>{appGlobalStyles}</style>
      {isPageLoading && <LoadingScreen />}

      <div
        className="feedback-app-shell relative w-screen h-screen overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-out"
        onTouchStart={globalSwipe.handleTouchStart}
        onTouchEnd={globalSwipe.handleTouchEnd}
      >
        <div className="w-full min-h-full relative z-10">
          {showIntro && <IntroVoiceStep onFinish={finishIntro} />}

          {!showIntro && step === 1 && (
            <AvatarSelectionStep
              selectedAvatar={selectedAvatar}
              setSelectedAvatar={setSelectedAvatar}
              onContinue={goToMenu}
            />
          )}

          {!showIntro && step === 2 && (
            <MenuSelectionStep
              ads={ads}
              adIndex={adIndex}
              setAdIndex={setAdIndex}
              selectedAvatar={selectedAvatar}
              onBack={goToHome}
              onSelectFeedback={goToFeedback}
            />
          )}

          {!showIntro && step === 3 && feedbackType === REQUEST_TYPE && !showSuccess && (
            <RequestFormStep
              ads={ads}
              adIndex={adIndex}
              setAdIndex={setAdIndex}
              selectedAvatar={selectedAvatar}
              onBack={goToMenu}
              userName={userName}
              setUserName={setUserName}
              phone={phone}
              handlePhoneChange={handlePhoneChange}
              isValidPhone={isValidPhone}
              detail={detail}
              setDetail={setDetail}
              showWarning={showWarning}
              setShowWarning={setShowWarning}
              onSuccess={showSuccessPage}
            />
          )}

          {!showIntro && showSuccess && <SuccessPage feedbackType={feedbackType} onReset={resetSuccess} />}

          {!showIntro && step === 3 && feedbackType !== REQUEST_TYPE && !showSuccess && (
            <FeedbackStep
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              feedbackType={feedbackType}
              setFeedbackType={setFeedbackType}
              ads={ads}
              adIndex={adIndex}
              setAdIndex={setAdIndex}
              selectedAvatar={selectedAvatar}
              onBack={goToMenu}
              userName={userName}
              setUserName={setUserName}
              phone={phone}
              handlePhoneChange={handlePhoneChange}
              isValidPhone={isValidPhone}
              detail={detail}
              setDetail={setDetail}
              showWarning={showWarning}
              setShowWarning={setShowWarning}
              uploadedFiles={uploadedFiles}
              handleFileSelect={handleFileSelect}
              removeFile={removeFile}
              rating={rating}
              setRating={setRating}
              onSuccess={showSuccessPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
