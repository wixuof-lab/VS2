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
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <button onClick={onClose}>
            <X size={24} className="text-white" />
          </button>
          <h1 className="text-white font-semibold text-lg">Crear video</h1>
          <div className="w-6" />
        </div>

        {/* Camera View */}
        <div className="flex-1 relative bg-gray-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M40 18L44 15V33L40 30V18Z" fill="white"/>
                </svg>
              </div>
              <p className="text-gray-400 text-sm">Cámara no disponible en demo</p>
              <p className="text-gray-500 text-xs mt-1">Usa el botón de subir para seleccionar un video</p>
            </div>
          </div>

          {/* Recording Timer */}
          {isRecording && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-red-500 rounded-full">
              <span className="text-white font-semibold">{recordingTime}s</span>
            </div>
          )}

          {/* Grid Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full w-px bg-white/10 absolute left-1/3" />
            <div className="h-full w-px bg-white/10 absolute right-1/3" />
            <div className="w-full h-px bg-white/10 absolute top-1/3" />
            <div className="w-full h-px bg-white/10 absolute bottom-1/3" />
          </div>
        </div>

        {/* Controls */}
        <div className="px-4 py-6 bg-black border-t border-gray-800">
          <div className="flex items-center justify-around mb-6">
            {/* Effects */}
            <button className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center">
                <Wand2 size={24} className="text-white" />
              </div>
              <span className="text-white text-xs">Efectos</span>
            </button>

            {/* Record/Upload Button */}
            <button
              className="relative"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-20 h-20 rounded-full border-4 border-[#FE2C55] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FE2C55]" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800 rounded-full">
                <span className="text-white text-xs">Subir</span>
              </div>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Flip */}
            <button className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white text-xs">Voltear</span>
            </button>
          </div>

          {/* Speed/Timer Options */}
          <div className="flex items-center justify-center gap-6">
            <button className="flex items-center gap-1 text-white text-sm">
              <Volume2 size={16} />
              <span>15s</span>
            </button>
            <button className="flex items-center gap-1 text-white text-sm">
              <span>Velocidad</span>
            </button>
            <button className="flex items-center gap-1 text-white text-sm">
              <span>Belleza</span>
            </button>
            <button className="flex items-center gap-1 text-white text-sm">
              <span>Filtros</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'edit') {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <button onClick={() => setStep('select')}>
            <ArrowLeft size={24} className="text-white" />
          </button>
          <h1 className="text-white font-semibold text-lg">Editar</h1>
          <button onClick={() => setStep('publish')} className="text-[#FE2C55] font-semibold">
            Siguiente
          </button>
        </div>

        {/* Video Preview */}
        <div className="flex-1 relative bg-gray-900 flex items-center justify-center">
          {selectedVideo && (
            <video
              src={selectedVideo}
              className="max-h-full max-w-full"
              controls
              autoPlay
              loop
            />
          )}
        </div>

        {/* Edit Tools */}
        <div className="px-4 py-4 bg-black border-t border-gray-800">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1">
              <Music size={24} className="text-white" />
              <span className="text-white text-xs">Sonidos</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <Wand2 size={24} className="text-white" />
              <span className="text-white text-xs">Efectos</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <Type size={24} className="text-white" />
              <span className="text-white text-xs">Texto</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <Scissors size={24} className="text-white" />
              <span className="text-white text-xs">Cortar</span>
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
