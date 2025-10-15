import React, { useState } from 'react';
import { X, Heart, Send } from 'lucide-react';
import { mockComments } from '../data/mockData';

const CommentsSheet = ({ videoId, commentsCount, onClose }) => {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');

  const handleLikeComment = (commentId) => {
    setComments(comments.map(c => 
      c.id === commentId ? { ...c, isLiked: !c.isLiked } : c
    ));
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: `c${comments.length + 1}`,
        videoId,
        userId: '1',
        username: 'tu_usuario',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
        verified: false,
        text: newComment,
        likes: '0',
        isLiked: false,
        replies: 0,
        createdAt: new Date().toISOString()
      };
      setComments([newCommentObj, ...comments]);
      setNewComment('');
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
      <div className="relative w-full bg-[#1a1a1a] rounded-t-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
          <h2 className="text-white font-semibold text-base">
            {commentsCount} comentarios
          </h2>
          <button onClick={onClose}>
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {comments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-gray-400 text-center">
                Sé el primero en comentar
              </p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                {/* Avatar */}
                <img
                  src={comment.avatar}
                  alt={comment.username}
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">
                      {comment.username}
                    </span>
                    {comment.verified && (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M8 0L9.79611 2.41L12.7023 2.47L11.6085 4.94L13.6569 6.87L11.1731 8L13.6569 9.13L11.6085 11.06L12.7023 13.53L9.79611 13.59L8 16L6.20389 13.59L3.29772 13.53L4.39151 11.06L2.34315 9.13L4.82686 8L2.34315 6.87L4.39151 4.94L3.29772 2.47L6.20389 2.41L8 0Z" fill="#20D5EC"/>
                      </svg>
                    )}
                  </div>
                  <p className="text-white text-sm mb-2">{comment.text}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs">
                    <span>{comment.createdAt}</span>
                    <button className="hover:text-white">
                      {comment.replies} respuestas
                    </button>
                  </div>
                </div>

                {/* Like Button */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <button onClick={() => handleLikeComment(comment.id)}>
                    <Heart
                      size={20}
                      className={`${
                        comment.isLiked
                          ? 'fill-[#FE2C55] text-[#FE2C55]'
                          : 'text-gray-400'
                      } transition-all`}
                    />
                  </button>
                  <span className="text-gray-400 text-xs">{comment.likes}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-800 bg-black">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePostComment()}
              placeholder="Agregar comentario..."
              className="flex-1 bg-[#1a1a1a] rounded-full px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE2C55]"
            />
            <button
              onClick={handlePostComment}
              disabled={!newComment.trim()}
              className={`${
                newComment.trim()
                  ? 'text-[#FE2C55]'
                  : 'text-gray-600'
              } transition-colors`}
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsSheet;
