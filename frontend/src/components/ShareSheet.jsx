import React from 'react';
import { X, Copy, Facebook, Twitter, MessageCircle, Mail, Link2, Download } from 'lucide-react';

const ShareSheet = ({ video, onClose }) => {
  const shareOptions = [
    { id: 'whatsapp', label: 'WhatsApp', Icon: MessageCircle, color: 'bg-[#25D366]' },
    { id: 'facebook', label: 'Facebook', Icon: Facebook, color: 'bg-[#1877F2]' },
    { id: 'twitter', label: 'Twitter', Icon: Twitter, color: 'bg-[#1DA1F2]' },
    { id: 'email', label: 'Email', Icon: Mail, color: 'bg-gray-600' },
    { id: 'copy', label: 'Copiar enlace', Icon: Copy, color: 'bg-gray-600' },
    { id: 'download', label: 'Descargar', Icon: Download, color: 'bg-gray-600' }
  ];

  const handleShare = (optionId) => {
    const videoUrl = `https://tiktok.com/video/${video.id}`;
    
    switch(optionId) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(videoUrl)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=Mira este video&body=${videoUrl}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(videoUrl);
        alert('Enlace copiado al portapapeles');
        onClose();
        break;
      case 'download':
        alert('Función de descarga no disponible en demo');
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60" 
        onClick={onClose}
      />

      {/* Sheet */}
      <div className="relative w-full bg-[#1a1a1a] rounded-t-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
          <h2 className="text-white font-semibold text-base">Compartir en</h2>
          <button onClick={onClose}>
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Share Options */}
        <div className="px-4 py-6">
          <div className="grid grid-cols-4 gap-6">
            {shareOptions.map((option) => {
              const Icon = option.Icon;
              return (
                <button
                  key={option.id}
                  onClick={() => handleShare(option.id)}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`w-14 h-14 ${option.color} rounded-full flex items-center justify-center`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className="text-white text-xs text-center">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Actions */}
        <div className="px-4 pb-6 pt-2">
          <div className="space-y-2">
            <button className="w-full py-3 bg-[#2a2a2a] rounded-lg text-white text-sm font-medium">
              Crear Dueto
            </button>
            <button className="w-full py-3 bg-[#2a2a2a] rounded-lg text-white text-sm font-medium">
              Crear Stitch
            </button>
          </div>
        </div>

        {/* Safe Area */}
        <div className="h-8" />
      </div>
    </div>
  );
};

export default ShareSheet;
