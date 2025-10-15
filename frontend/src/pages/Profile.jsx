import React, { useState } from 'react';
import { MoreHorizontal, Plus, Lock, Grid, Bookmark, Heart, ChevronLeft, Share2 } from 'lucide-react';
import { mockUsers, mockVideos } from '../data/mockData';

const Profile = ({ userId = '1', onBack }) => {
  const [activeTab, setActiveTab] = useState('videos'); // videos, liked, saved
  const user = mockUsers.find(u => u.id === userId) || mockUsers[0];
  const userVideos = mockVideos.filter(v => v.userId === userId);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-gray-800">
        {onBack && (
          <button onClick={onBack}>
            <ChevronLeft size={24} className="text-white" />
          </button>
        )}
        <span className="font-semibold text-lg">@{user.username}</span>
        <div className="flex items-center gap-3">
          <button>
            <Bell size={24} className="text-white" />
          </button>
          <button>
            <MoreHorizontal size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 py-6">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-24 h-24 rounded-full border-2 border-gray-700"
          />
        </div>

        {/* Username */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center gap-2 mb-1">
            <h1 className="text-xl font-bold">@{user.username}</h1>
            {user.verified && (
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L9.79611 2.41L12.7023 2.47L11.6085 4.94L13.6569 6.87L11.1731 8L13.6569 9.13L11.6085 11.06L12.7023 13.53L9.79611 13.59L8 16L6.20389 13.59L3.29772 13.53L4.39151 11.06L2.34315 9.13L4.82686 8L2.34315 6.87L4.39151 4.94L3.29772 2.47L6.20389 2.41L8 0Z" fill="#20D5EC"/>
              </svg>
            )}
          </div>
          <h2 className="text-base text-gray-300">{user.displayName}</h2>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="text-center">
            <div className="font-bold text-lg">{user.following}</div>
            <div className="text-gray-400 text-sm">Siguiendo</div>
          </div>
          <div className="w-px h-8 bg-gray-700" />
          <div className="text-center">
            <div className="font-bold text-lg">{user.followers}</div>
            <div className="text-gray-400 text-sm">Seguidores</div>
          </div>
          <div className="w-px h-8 bg-gray-700" />
          <div className="text-center">
            <div className="font-bold text-lg">{user.likes}</div>
            <div className="text-gray-400 text-sm">Me gusta</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-[#FE2C55] text-white font-semibold py-3 rounded-md">
            Editar perfil
          </button>
          <button className="px-4 bg-[#1a1a1a] rounded-md">
            <Bookmark size={20} className="text-white" />
          </button>
          <button className="px-4 bg-[#1a1a1a] rounded-md">
            <Share2 size={20} className="text-white" />
          </button>
        </div>

        {/* Bio */}
        {user.bio && (
          <p className="text-center text-sm mb-4">{user.bio}</p>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="flex">
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 relative ${
              activeTab === 'videos' ? 'text-white' : 'text-gray-500'
            }`}
          >
            <Grid size={20} />
            {activeTab === 'videos' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('liked')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 relative ${
              activeTab === 'liked' ? 'text-white' : 'text-gray-500'
            }`}
          >
            <Heart size={20} />
            {activeTab === 'liked' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 relative ${
              activeTab === 'saved' ? 'text-white' : 'text-gray-500'
            }`}
          >
            <Lock size={20} />
            {activeTab === 'saved' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
            )}
          </button>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {activeTab === 'videos' && userVideos.map((video) => (
          <div
            key={video.id}
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
              <span className="text-white text-xs font-semibold drop-shadow-lg">{video.likes}</span>
            </div>
          </div>
        ))}

        {activeTab === 'liked' && (
          <div className="col-span-3 flex flex-col items-center justify-center py-20">
            <Lock size={48} className="text-gray-600 mb-4" />
            <p className="text-gray-400 text-center">Los videos que le gustaron a este usuario son privados</p>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="col-span-3 flex flex-col items-center justify-center py-20">
            <Lock size={48} className="text-gray-600 mb-4" />
            <p className="text-gray-400 text-center">Videos guardados privados</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Bell = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Profile;
