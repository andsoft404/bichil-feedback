import { useState } from 'react';
import SuccessPage from './components/SuccessPage';
import { ads } from './data/ads';
import useAdRotation from './hooks/useAdRotation';
import useFileUploads from './hooks/useFileUploads';
import useGlobalBackSwipe from './hooks/useGlobalBackSwipe';
import useRobotVoice from './hooks/useRobotVoice';
import { appGlobalStyles } from './styles/appGlobalStyles';
import AvatarSelectionStep from './screens/AvatarSelectionStep';
import FeedbackStep from './screens/FeedbackStep';
import MenuSelectionStep from './screens/MenuSelectionStep';
import RequestFormStep from './screens/RequestFormStep';

const REQUEST_TYPE = 'Хүсэлт';

export default function App() {
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
  useRobotVoice('robot-voice.mp3');

  const handlePhoneChange = (value) => {
    setPhone(value.replace(/\D/g, '').slice(0, 8));
  };

  const globalSwipe = useGlobalBackSwipe({
    setActiveTab,
    setShowWarning,
    setStep,
    step,
  });

  const resetSuccess = () => {
    setShowSuccess(false);
    setStep(1);
    setUserName('');
    setPhone('');
    setDetail('');
    setShowWarning(false);
  };

  const isValidPhone = phone.length === 8;

  return (
    <>
      <style>{appGlobalStyles}</style>

      <div
        className="feedback-app-shell relative w-screen h-screen overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-out"
        onTouchStart={globalSwipe.handleTouchStart}
        onTouchEnd={globalSwipe.handleTouchEnd}
      >
        <div className="w-full min-h-full relative z-10">
          {step === 1 && (
            <AvatarSelectionStep
              selectedAvatar={selectedAvatar}
              setSelectedAvatar={setSelectedAvatar}
              onContinue={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <MenuSelectionStep
              ads={ads}
              adIndex={adIndex}
              setAdIndex={setAdIndex}
              selectedAvatar={selectedAvatar}
              onSelectFeedback={(type) => {
                setFeedbackType(type);
                setStep(3);
              }}
            />
          )}

          {step === 3 && feedbackType === REQUEST_TYPE && !showSuccess && (
            <RequestFormStep
              ads={ads}
              adIndex={adIndex}
              setAdIndex={setAdIndex}
              selectedAvatar={selectedAvatar}
              userName={userName}
              setUserName={setUserName}
              phone={phone}
              handlePhoneChange={handlePhoneChange}
              isValidPhone={isValidPhone}
              detail={detail}
              setDetail={setDetail}
              showWarning={showWarning}
              setShowWarning={setShowWarning}
              onSuccess={() => setShowSuccess(true)}
            />
          )}

          {showSuccess && <SuccessPage onReset={resetSuccess} />}

          {step === 3 && feedbackType !== REQUEST_TYPE && (
            <FeedbackStep
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              feedbackType={feedbackType}
              setFeedbackType={setFeedbackType}
              ads={ads}
              adIndex={adIndex}
              setAdIndex={setAdIndex}
              selectedAvatar={selectedAvatar}
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
              onSuccess={() => setShowSuccess(true)}
            />
          )}
        </div>
      </div>
    </>
  );
}
