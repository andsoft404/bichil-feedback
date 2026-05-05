import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const CustomSelect = ({ options, value, onChange, placeholder, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const sunkenStyle = 'bg-gray-100/50 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] border border-black/5';

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${sunkenStyle} rounded-2xl px-4 py-4 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all`}
      >
        <div className="flex items-center gap-3 overflow-hidden">
           {Icon && <Icon size={18} className="text-gray-600" />}
           <span className={`text-sm font-semibold ${value ? 'text-gray-800' : 'text-gray-500'} truncate`}>
             {value || placeholder}
           </span>
        </div>
        <ChevronDown 
          size={18} 
          className={`text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 top-full left-0 w-full mt-2 bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden animate-fadeIn border border-white/60">
          {/* ЭНД ӨӨРЧЛӨЛТ ОРОВ: max-h-56 байсныг max-h-[155px] болгов */}
          <div className="max-h-[155px] overflow-y-auto custom-scrollbar p-2 space-y-1">
            {options.map((option, index) => (
              <div 
                key={index}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-sm font-bold cursor-pointer transition-all flex items-center justify-between
                  ${value === option 
                    ? 'bg-gray-500 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {option}
                {value === option && <Check size={16} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
