import { formatSize, getFileIcon } from '../../utils/fileUtils';

export default function FileAttachment({ uploadId, uploadedFiles, onFileSelect, onRemoveFile, className = 'mx-4 mb-4' }) {
  return (
    <div className={className}>
      <p className="font-poppins text-white/70 text-sm font-bold tracking-wide mb-2 text-center">Холбогдох баримт, зураг хавсаргах:</p>
      <input
        type="file"
        multiple
        accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx"
        onChange={onFileSelect}
        className="hidden"
        id={uploadId}
      />
      <div
        onClick={() => document.getElementById(uploadId).click()}
        className="bg-gray-400 rounded-full px-5 py-3 font-poppins text-white/80 text-base cursor-pointer"
      >
        Attach:
      </div>
      {uploadedFiles.length > 0 && (
        <div className="mt-2 space-y-1.5">
          {uploadedFiles.map((f) => (
            <div key={f.id} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              {f.preview ? (
                <img src={f.preview} alt="" className="w-8 h-8 rounded object-cover flex-shrink-0" />
              ) : (
                <span className="text-[16px] flex-shrink-0">{getFileIcon(f.type)}</span>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-poppins text-white text-[11px] truncate">{f.name}</p>
                <p className="font-poppins text-white/70 text-[9px]">{formatSize(f.size)}</p>
              </div>
              <button onClick={() => onRemoveFile(f.id)} className="text-white/70 hover:text-red-400 text-[14px] flex-shrink-0 leading-none">Ã—</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
