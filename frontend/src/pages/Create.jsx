import React, { useState, useRef } from 'react';
import { 
  X, Music, Wand2, Type, Scissors, Volume2, ArrowLeft, Check, 
  MapPin, Hash, AtSign, Users, Upload, Camera, Image as ImageIcon,
  Sparkles, Filter, Smile, Globe, Lock, UserCheck, MessageSquare,
  Copy, GitMerge, ChevronRight, Video, RotateCcw
} from 'lucide-react';

const Create = ({ onClose }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [step, setStep] = useState('select'); // select, edit, publish
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState('public'); // public, friends, private
  const [allowComments, setAllowComments] = useState(true);
  const [allowDuet, setAllowDuet] = useState(true);
  const [allowStitch, setAllowStitch] = useState(true);
  const [selectedCover, setSelectedCover] = useState(0);
  const [location, setLocation] = useState('');
  const [showLocationInput, setShowLocationInput] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setSelectedVideo(videoUrl);
      setSelectedVideoFile(file);
      setStep('edit');
    }
  };

  if (step === 'select') {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={onClose} className="text-white">
            <X size={28} />
          </button>
          <h1 className="text-white font-semibold text-lg">Crear</h1>
          <div className="w-7" />
        </div>

        {/* Upload Options */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-md space-y-4">
            {/* Upload from Device */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-[#FE2C55] hover:bg-[#fe2c55ea] transition-colors rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Upload size={28} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-semibold text-lg">Subir video</h3>
                <p className="text-white/80 text-sm">Desde tu galería</p>
              </div>
              <ChevronRight size={24} className="text-white" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Templates */}
            <button className="w-full bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-[#FE2C55]/20 rounded-full flex items-center justify-center">
                <Sparkles size={28} className="text-[#FE2C55]" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-semibold text-lg">Usar plantilla</h3>
                <p className="text-gray-400 text-sm">Crea con estilos prehechos</p>
              </div>
              <ChevronRight size={24} className="text-gray-400" />
            </button>

            {/* Camera (Disabled in Demo) */}
            <button 
              disabled
              className="w-full bg-[#1a1a1a] opacity-50 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                <Camera size={28} className="text-gray-500" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-gray-500 font-semibold text-lg">Grabar video</h3>
                <p className="text-gray-600 text-sm">No disponible en demo</p>
              </div>
            </button>
          </div>

          {/* Info Text */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">Videos hasta 10 minutos</p>
            <p className="text-gray-500 text-xs mt-1">Formato recomendado: 1080x1920 (9:16)</p>
          </div>
        </div>

        {/* Bottom Tips */}
        <div className="px-6 pb-6">
          <div className="bg-[#1a1a1a] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Sparkles size={20} className="text-[#FE2C55] mt-0.5" />
              <div>
                <h4 className="text-white font-medium text-sm mb-1">Consejos para crear</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Usa hashtags relevantes, agrega música popular y etiqueta tu ubicación para mayor alcance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'edit') {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => setStep('select')} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white font-semibold text-lg">Editar video</h1>
          <button 
            onClick={() => setStep('publish')} 
            className="bg-[#FE2C55] hover:bg-[#fe2c55ea] text-white px-5 py-1.5 rounded-full font-semibold text-sm"
          >
            Siguiente
          </button>
        </div>

        {/* Video Preview */}
        <div className="flex-1 relative bg-black flex items-center justify-center">
          {selectedVideo && (
            <video
              src={selectedVideo}
              className="h-full w-auto max-w-full"
              controls
              autoPlay
              loop
              muted
            />
          )}
          
          {/* Overlay Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <RotateCcw size={20} />
            </button>
          </div>
        </div>

        {/* Edit Tools */}
        <div className="bg-[#0a0a0a] border-t border-gray-800">
          {/* Primary Tools */}
          <div className="px-4 py-4 flex items-center justify-between">
            <button className="flex flex-col items-center gap-1.5 min-w-[60px]">
              <div className="w-11 h-11 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                <Music size={22} className="text-white" />
              </div>
              <span className="text-white text-xs font-medium">Sonidos</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 min-w-[60px]">
              <div className="w-11 h-11 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                <Wand2 size={22} className="text-white" />
              </div>
              <span className="text-white text-xs font-medium">Efectos</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 min-w-[60px]">
              <div className="w-11 h-11 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                <Type size={22} className="text-white" />
              </div>
              <span className="text-white text-xs font-medium">Texto</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 min-w-[60px]">
              <div className="w-11 h-11 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                <ImageIcon size={22} className="text-white" />
              </div>
              <span className="text-white text-xs font-medium">Stickers</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 min-w-[60px]">
              <div className="w-11 h-11 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                <Scissors size={22} className="text-white" />
              </div>
              <span className="text-white text-xs font-medium">Recortar</span>
            </button>
          </div>

          {/* Secondary Tools */}
          <div className="px-4 pb-4 pt-2 flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <button className="px-4 py-2 bg-[#1a1a1a] rounded-full text-white text-sm font-medium whitespace-nowrap flex items-center gap-2">
              <Filter size={16} />
              Filtros
            </button>
            <button className="px-4 py-2 bg-[#1a1a1a] rounded-full text-white text-sm font-medium whitespace-nowrap flex items-center gap-2">
              <Smile size={16} />
              Belleza
            </button>
            <button className="px-4 py-2 bg-[#1a1a1a] rounded-full text-white text-sm font-medium whitespace-nowrap flex items-center gap-2">
              <Volume2 size={16} />
              Voz en off
            </button>
            <button className="px-4 py-2 bg-[#1a1a1a] rounded-full text-white text-sm font-medium whitespace-nowrap">
              Auto captions
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'publish') {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <button onClick={() => setStep('edit')}>
            <ArrowLeft size={24} className="text-white" />
          </button>
          <h1 className="text-white font-semibold text-lg">Publicar</h1>
          <button className="text-[#FE2C55] font-semibold">
            Publicar
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {/* Description */}
          <div className="mb-6">
            <textarea
              placeholder="Describe tu video..."
              className="w-full bg-[#1a1a1a] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE2C55] resize-none"
              rows={4}
            />
          </div>

          {/* Who can view */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">¿Quién puede ver este video?</h3>
            <div className="space-y-2">
              {['Público', 'Amigos', 'Solo yo'].map((option) => (
                <button
                  key={option}
                  className="w-full flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg"
                >
                  <span className="text-white">{option}</span>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Allow options */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Permitir usuarios a:</h3>
            <div className="space-y-3">
              {['Comentar', 'Dueto', 'Stitch'].map((option) => (
                <div key={option} className="flex items-center justify-between">
                  <span className="text-white">{option}</span>
                  <div className="w-12 h-6 bg-[#FE2C55] rounded-full p-1">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Create;
