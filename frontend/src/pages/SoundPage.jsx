import React, { useState } from 'react';
import { ChevronLeft, Bookmark, MoreHorizontal } from 'lucide-react';
import { mockSounds, mockVideos } from '../data/mockData';

const SoundPage = ({ soundId, onBack, onVideoClick }) => {
  const sound = mockSounds.find(s => s.id === soundId) || mockSounds[0];
  const soundVideos = mockVideos.slice(0, 12); // Mock: show all videos
  const [isFavorite, setIsFavorite] = useState(sound.isFavorite);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <button onClick={onBack}>
          <ChevronLeft size={28} className="text-white" />
        </button>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsFavorite(!isFavorite)}>
            <Bookmark 
              size={24} 
              className={isFavorite ? 'text-[#FE2C55] fill-[#FE2C55]' : 'text-white'} 
            />
          </button>
          <button>
            <MoreHorizontal size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Sound Info */}
      <div className="px-4 py-6">
        {/* Sound Cover */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FE2C55] to-[#25F4EE] animate-spin-slow" />
            <img
              src={sound.coverImage}
              alt={sound.name}
              className="absolute inset-2 w-28 h-28 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Sound Details */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold mb-1">{sound.name}</h1>
          <p className="text-gray-400 text-sm mb-3">{sound.author}</p>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`px-8 py-2 rounded-md font-semibold transition-all ${
              isFavorite
                ? 'bg-[#1a1a1a] border border-gray-600 text-white'
                : 'bg-[#FE2C55] text-white'
            }`}
          >
            {isFavorite ? 'Agregado a favoritos' : 'Agregar a favoritos'}
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-2 mb-6 text-gray-400 text-sm">
          <span>{sound.videoCount} videos</span>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="px-1">
        <h2 className="text-white font-semibold text-base px-3 mb-3">
          Videos con este sonido
        </h2>
        <div className="grid grid-cols-3 gap-1">
          {soundVideos.map((video) => (
            <button
              key={video.id}
              onClick={() => onVideoClick && onVideoClick(video.id)}
              className="relative aspect-[9/16] bg-gray-800 rounded-sm overflow-hidden"
            >
              <img
                src={video.thumbnailUrl}
                alt={video.description}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <path d="M4 2L12 8L4 14V2Z" />
                </svg>
                <span className="text-white text-xs font-semibold drop-shadow-lg">
                  {video.likes}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoundPage;
