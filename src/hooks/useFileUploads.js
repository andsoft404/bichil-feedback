import { useState } from 'react';

export default function useFileUploads() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(f => ({
      file: f,
      id: Date.now() + Math.random(),
      name: f.name,
      size: f.size,
      type: f.type,
      preview: f.type.startsWith('image/') ? URL.createObjectURL(f) : null,
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    e.target.value = '';
  };

  const removeFile = (id) => {
    setUploadedFiles(prev => {
      const file = prev.find(f => f.id === id);
      if (file?.preview) URL.revokeObjectURL(file.preview);
      return prev.filter(f => f.id !== id);
    });
  };

  return {
    uploadedFiles,
    handleFileSelect,
    removeFile,
  };
}
