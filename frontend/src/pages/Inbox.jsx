import React, { useState } from 'react';
import { Bell, MessageCircle, Heart, UserPlus, AtSign, ChevronRight } from 'lucide-react';
import { mockNotifications, mockMessages } from '../data/mockData';

const Inbox = () => {
  const [activeTab, setActiveTab] = useState('notifications'); // notifications or messages
  const [notificationFilter, setNotificationFilter] = useState('all'); // all, likes, comments, followers

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black border-b border-gray-800 px-4 pt-safe">
        <h1 className="text-xl font-bold py-4">Bandeja de entrada</h1>
        
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => setActiveTab('notifications')}
            className={`flex-1 pb-3 text-center font-semibold relative ${
              activeTab === 'notifications' ? 'text-white' : 'text-gray-500'
            }`}
          >
            Notificaciones
            {activeTab === 'notifications' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex-1 pb-3 text-center font-semibold relative ${
              activeTab === 'messages' ? 'text-white' : 'text-gray-500'
            }`}
          >
            Mensajes
            {activeTab === 'messages' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'notifications' ? (
        <div>
          {/* Filter Pills */}
          <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
            {[
              { id: 'all', label: 'Todos', icon: Bell },
              { id: 'likes', label: 'Me gusta', icon: Heart },
              { id: 'comments', label: 'Comentarios', icon: MessageCircle },
              { id: 'followers', label: 'Seguidores', icon: UserPlus },
              { id: 'mentions', label: 'Menciones', icon: AtSign }
            ].map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setNotificationFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    notificationFilter === filter.id
                      ? 'bg-[#FE2C55] text-white'
                      : 'bg-[#1a1a1a] text-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* Notifications List */}
          <div className="divide-y divide-gray-800">
            {mockNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center gap-3 px-4 py-4 ${
                  !notification.isRead ? 'bg-[#1a1a1a]' : 'bg-black'
                }`}
              >
                {/* Avatar */}
                <img
                  src={notification.avatar}
                  alt={notification.username}
                  className="w-12 h-12 rounded-full"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-semibold">{notification.username}</span>
                    {notification.verified && (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M8 0L9.79611 2.41L12.7023 2.47L11.6085 4.94L13.6569 6.87L11.1731 8L13.6569 9.13L11.6085 11.06L12.7023 13.53L9.79611 13.59L8 16L6.20389 13.59L3.29772 13.53L4.39151 11.06L2.34315 9.13L4.82686 8L2.34315 6.87L4.39151 4.94L3.29772 2.47L6.20389 2.41L8 0Z" fill="#20D5EC"/>
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{notification.text}</p>
                  <span className="text-xs text-gray-500 mt-1">{notification.timestamp}</span>
                </div>

                {/* Thumbnail or Follow Button */}
                {notification.videoThumbnail ? (
                  <img
                    src={notification.videoThumbnail}
                    alt="video"
                    className="w-16 h-16 rounded object-cover"
                  />
                ) : (
                  <button className="px-6 py-1.5 bg-[#FE2C55] text-white rounded-md text-sm font-semibold">
                    Seguir
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {/* Messages List */}
          <div className="divide-y divide-gray-800">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className="flex items-center gap-3 px-4 py-4 hover:bg-[#1a1a1a] transition-colors cursor-pointer"
              >
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={message.avatar}
                    alt={message.username}
                    className="w-14 h-14 rounded-full"
                  />
                  {message.unread > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FE2C55] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{message.unread}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-semibold">{message.username}</span>
                    {message.verified && (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M8 0L9.79611 2.41L12.7023 2.47L11.6085 4.94L13.6569 6.87L11.1731 8L13.6569 9.13L11.6085 11.06L12.7023 13.53L9.79611 13.59L8 16L6.20389 13.59L3.29772 13.53L4.39151 11.06L2.34315 9.13L4.82686 8L2.34315 6.87L4.39151 4.94L3.29772 2.47L6.20389 2.41L8 0Z" fill="#20D5EC"/>
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 truncate">{message.lastMessage}</p>
                  <span className="text-xs text-gray-500 mt-1">{message.timestamp}</span>
                </div>

                {/* Arrow */}
                <ChevronRight size={20} className="text-gray-600" />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {mockMessages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <MessageCircle size={64} className="text-gray-600 mb-4" />
              <p className="text-gray-400 text-center">No hay mensajes</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Inbox;
