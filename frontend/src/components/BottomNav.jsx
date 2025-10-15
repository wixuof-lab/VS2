import React from 'react';
import { Home, Search, PlusSquare, MessageSquare, User } from 'lucide-react';

const BottomNav = ({ activeTab, onTabChange, onCreateClick }) => {
  const tabs = [
    { id: 'home', label: 'Inicio', Icon: Home },
    { id: 'discover', label: 'Descubrir', Icon: Search },
    { id: 'create', label: 'Crear', Icon: PlusSquare, isSpecial: true },
    { id: 'inbox', label: 'Bandeja', Icon: MessageSquare },
    { id: 'profile', label: 'Perfil', Icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-40 pb-safe">
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.Icon;
          const isActive = activeTab === tab.id;

          if (tab.isSpecial) {
            return (
              <button
                key={tab.id}
                onClick={onCreateClick}
                className="flex flex-col items-center justify-center relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#25F4EE] rounded-lg transform -rotate-6" style={{ width: '48px', height: '32px' }} />
                  <div className="absolute inset-0 bg-[#FE2C55] rounded-lg transform rotate-6" style={{ width: '48px', height: '32px' }} />
                  <div className="relative bg-white rounded-lg flex items-center justify-center" style={{ width: '48px', height: '32px' }}>
                    <PlusSquare size={24} className="text-black" strokeWidth={2.5} />
                  </div>
                </div>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center py-1 px-3 min-w-[60px]"
            >
              <Icon
                size={28}
                className={`mb-1 transition-colors ${
                  isActive ? 'text-white' : 'text-gray-500'
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-xs transition-colors ${
                  isActive ? 'text-white font-medium' : 'text-gray-500'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
