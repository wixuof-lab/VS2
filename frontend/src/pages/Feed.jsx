import React, { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Music, MoreHorizontal, UserPlus } from 'lucide-react';
import { mockVideos } from '../data/mockData';

const Feed = () => {
  const [videos, setVideos] = useState(mockVideos);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('foryou'); // 'foryou' or 'following'
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      currentVideo.play();
    }
  }, [currentVideoIndex]);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const videoHeight = window.innerHeight;
    const newIndex = Math.round(scrollTop / videoHeight);
    
    if (newIndex !== currentVideoIndex && newIndex >= 0 && newIndex < videos.length) {
      // Pause previous video
      if (videoRefs.current[currentVideoIndex]) {
        videoRefs.current[currentVideoIndex].pause();
      }
      setCurrentVideoIndex(newIndex);
    }
  };

  const toggleLike = (videoId) => {
    setVideos(videos.map(v => 
      v.id === videoId ? { ...v, isLiked: !v.isLiked } : v
    ));
  };

  const toggleFollow = (videoId) => {
    setVideos(videos.map(v => 
      v.id === videoId ? { ...v, isFollowing: !v.isFollowing } : v
    ));
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-safe">
        <div className="flex items-center justify-center gap-6 py-4 px-4">
          <button
            onClick={() => setActiveTab('following')}
            className={`text-base font-medium transition-all ${
              activeTab === 'following' ? 'text-white' : 'text-gray-400'
            }`}
          >
            Siguiendo
          </button>
          <div className="w-px h-4 bg-gray-600" />
          <button
            onClick={() => setActiveTab('foryou')}
            className={`text-lg font-semibold transition-all ${
              activeTab === 'foryou' ? 'text-white' : 'text-gray-400'
            }`}
          >
            Para ti
          </button>
          <button className="absolute right-4 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Video Feed */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative h-screen w-full snap-start snap-always flex items-center justify-center"
          >
            {/* Video */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.videoUrl}
              className="h-full w-full object-cover"
              loop
              playsInline
              muted={false}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Right Action Buttons */}
            <div className="absolute right-2 bottom-20 flex flex-col items-center gap-6 z-10">
              {/* Profile */}
              <div className="relative">
                <img
                  src={video.avatar}
                  alt={video.username}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                {!video.isFollowing && (
                  <button
                    onClick={() => toggleFollow(video.id)}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#FE2C55] rounded-full flex items-center justify-center"
                  >
                    <UserPlus size={14} className="text-white" />
                  </button>
                )}
              </div>

              {/* Like */}
              <button
                onClick={() => toggleLike(video.id)}
                className="flex flex-col items-center gap-1"
              >
                <Heart
                  size={32}
                  className={`${video.isLiked ? 'fill-[#FE2C55] text-[#FE2C55]' : 'text-white'} transition-all`}
                />
                <span className="text-white text-xs font-semibold">{video.likes}</span>
              </button>

              {/* Comment */}
              <button className="flex flex-col items-center gap-1">
                <MessageCircle size={32} className="text-white" />
                <span className="text-white text-xs font-semibold">{video.comments}</span>
              </button>

              {/* Bookmark */}
              <button className="flex flex-col items-center gap-1">
                <Bookmark size={32} className="text-white" />
                <span className="text-white text-xs font-semibold">{video.shares}</span>
              </button>

              {/* Share */}
              <button className="flex flex-col items-center gap-1">
                <Share2 size={32} className="text-white" />
              </button>

              {/* More */}
              <button className="flex flex-col items-center gap-1">
                <MoreHorizontal size={32} className="text-white" />
              </button>

              {/* Sound Icon (Spinning) */}
              <div className="relative w-10 h-10 mt-2">
                <div className="w-full h-full rounded-full bg-gray-800 border-2 border-white overflow-hidden animate-spin-slow">
                  <img
                    src={video.avatar}
                    alt="sound"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-20 left-2 right-20 z-10 px-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white font-semibold text-base">@{video.username}</span>
                {video.verified && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0L9.79611 2.41L12.7023 2.47L11.6085 4.94L13.6569 6.87L11.1731 8L13.6569 9.13L11.6085 11.06L12.7023 13.53L9.79611 13.59L8 16L6.20389 13.59L3.29772 13.53L4.39151 11.06L2.34315 9.13L4.82686 8L2.34315 6.87L4.39151 4.94L3.29772 2.47L6.20389 2.41L8 0Z" fill="#20D5EC"/>
                    <path d="M6.5 8.5L7.5 9.5L9.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <p className="text-white text-sm mb-2 line-clamp-2">{video.description}</p>
              <div className="flex items-center gap-2">
                <Music size={14} className="text-white" />
                <span className="text-white text-xs truncate">{video.soundName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
