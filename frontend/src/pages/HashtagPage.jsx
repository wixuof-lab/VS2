import React, { useState } from 'react';
import { ChevronLeft, TrendingUp } from 'lucide-react';
import { mockHashtags, mockVideos } from '../data/mockData';

const HashtagPage = ({ hashtagId, onBack, onVideoClick }) => {
  const hashtag = mockHashtags.find(h => h.id === hashtagId) || mockHashtags[0];
  const [isFollowing, setIsFollowing] = useState(hashtag.isFollowing);
  const hashtagVideos = mockVideos.slice(0, 15); // Mock: show all videos

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <button onClick={onBack}>
          <ChevronLeft size={28} className="text-white" />
        </button>
        <h1 className="text-lg font-semibold">{hashtag.name}</h1>
        <div className="w-7" />
      </div>

      {/* Hashtag Info */}
      <div className="px-4 py-6 border-b border-gray-800">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FE2C55] to-[#25F4EE] flex items-center justify-center">
            <span className="text-4xl font-bold text-white">#</span>
          </div>
        </div>

        {/* Stats */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp size={20} className="text-[#FE2C55]" />
            <span className="text-2xl font-bold">{hashtag.views}</span>
          </div>
          <p className="text-gray-400 text-sm">visualizaciones</p>
        </div>

        {/* Follow Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-12 py-2.5 rounded-md font-semibold transition-all ${
              isFollowing
                ? 'bg-[#1a1a1a] border border-gray-600 text-white'
                : 'bg-[#FE2C55] text-white'
            }`}
          >
            {isFollowing ? 'Siguiendo' : 'Seguir'}
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 py-4 border-b border-gray-800">
        <p className="text-gray-300 text-sm text-center">
          Descubre videos sobre {hashtag.name} en TikTok
        </p>
      </div>

      {/* Videos Grid */}
      <div className="p-1">
        <div className="grid grid-cols-3 gap-1">
          {hashtagVideos.map((video) => (
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

export default HashtagPage;
