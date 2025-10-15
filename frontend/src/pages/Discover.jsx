import React, { useState } from 'react';
import { Search, TrendingUp, Hash, Music as MusicIcon } from 'lucide-react';
import { mockHashtags, mockVideos } from '../data/mockData';

const Discover = ({ onNavigateToHashtag, onNavigateToVideo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // all, users, videos, sounds, hashtags

  const trendingSearches = [
    'Dance challenge',
    'Comedy skits',
    'Life hacks',
    'Cooking tips',
    'Fashion trends',
    'Pet videos'
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Search Bar */}
      <div className="sticky top-0 z-20 bg-black px-4 pt-safe pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar usuarios, videos, sonidos..."
            className="w-full bg-[#1a1a1a] rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE2C55]"
          />
        </div>

        {/* Filter Tabs */}
        {searchQuery && (
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
            {['all', 'users', 'videos', 'sounds', 'hashtags'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? 'bg-white text-black'
                    : 'bg-[#1a1a1a] text-gray-300'
                }`}
              >
                {filter === 'all' ? 'Todo' :
                 filter === 'users' ? 'Usuarios' :
                 filter === 'videos' ? 'Videos' :
                 filter === 'sounds' ? 'Sonidos' : 'Hashtags'}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      {!searchQuery ? (
        <div className="px-4">
          {/* Trending Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={20} className="text-[#FE2C55]" />
              <h2 className="text-lg font-bold">Tendencias</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-[#1a1a1a] rounded-lg text-sm hover:bg-[#2a2a2a] transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Top Hashtags */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Hash size={20} className="text-[#FE2C55]" />
              <h2 className="text-lg font-bold">Hashtags populares</h2>
            </div>
            <div className="space-y-3">
              {mockHashtags.map((hashtag) => (
                <div
                  key={hashtag.id}
                  className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg"
                >
                  <div>
                    <p className="font-semibold text-base">{hashtag.name}</p>
                    <p className="text-sm text-gray-400">{hashtag.views} vistas</p>
                  </div>
                  <button
                    className={`px-6 py-1.5 rounded-md text-sm font-semibold transition-all ${
                      hashtag.isFollowing
                        ? 'bg-[#1a1a1a] border border-gray-600 text-white'
                        : 'bg-[#FE2C55] text-white'
                    }`}
                  >
                    {hashtag.isFollowing ? 'Siguiendo' : 'Seguir'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Videos Grid */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Videos en tendencia</h2>
            <div className="grid grid-cols-3 gap-1">
              {mockVideos.slice(0, 9).map((video) => (
                <div
                  key={video.id}
                  className="relative aspect-[9/16] bg-gray-800 rounded-sm overflow-hidden"
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.description}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 left-1 flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <path d="M4 2L12 8L4 14V2Z" />
                    </svg>
                    <span className="text-white text-xs font-semibold">{video.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4">
          <p className="text-gray-400 text-center py-8">
            Buscando: "{searchQuery}"
          </p>
          {/* Search results would go here */}
        </div>
      )}
    </div>
  );
};

export default Discover;
