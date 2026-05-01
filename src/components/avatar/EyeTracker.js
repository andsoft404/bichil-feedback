import { getCharacterSrc } from '../../data/characters';

const EyeTracker = ({ selectedAvatar, mood = 'neutral' }) => {
  return (
    <div className={`relative w-full h-full mx-auto flex items-center justify-center ${mood === 'Талархал' ? 'animate-character-happy' : ''}`}>
      <img
        src={getCharacterSrc(selectedAvatar)}
        alt={`Character ${selectedAvatar}`}
        className="w-full h-full object-contain scale-110 select-none pointer-events-none"
        draggable={false}
      />
    </div>
  );
};

export default EyeTracker;
