import React, { useState } from 'react';
import './App.css';
import Feed from './pages/Feed';
import Discover from './pages/Discover';
import Create from './pages/Create';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';
import SoundPage from './pages/SoundPage';
import HashtagPage from './pages/HashtagPage';
import BottomNav from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showCreate, setShowCreate] = useState(false);
  const [navigationStack, setNavigationStack] = useState([]);
  const [currentPage, setCurrentPage] = useState({ type: 'home' });

  const navigateTo = (pageType, data = {}) => {
    setNavigationStack([...navigationStack, currentPage]);
    setCurrentPage({ type: pageType, data });
  };

  const navigateBack = () => {
    if (navigationStack.length > 0) {
      const previousPage = navigationStack[navigationStack.length - 1];
      setNavigationStack(navigationStack.slice(0, -1));
      setCurrentPage(previousPage);
      if (previousPage.type === 'home' || previousPage.type === 'discover' || 
          previousPage.type === 'inbox' || previousPage.type === 'profile') {
        setActiveTab(previousPage.type === 'home' ? 'home' : previousPage.type);
      }
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage({ type: tab });
    setNavigationStack([]);
  };

  const renderContent = () => {
    switch (currentPage.type) {
      case 'home':
        return (
          <Feed 
            onNavigateToSound={(soundId) => navigateTo('sound', { soundId })}
            onNavigateToHashtag={(hashtag) => navigateTo('hashtag', { hashtag })}
            onNavigateToProfile={(userId) => navigateTo('userProfile', { userId })}
          />
        );
      case 'discover':
        return <Discover />;
      case 'inbox':
        return <Inbox />;
      case 'profile':
        return <Profile />;
      case 'sound':
        return (
          <SoundPage 
            soundId={currentPage.data?.soundId}
            onBack={navigateBack}
            onVideoClick={(videoId) => {
              // Navigate back to feed with specific video
              navigateBack();
            }}
          />
        );
      case 'hashtag':
        return (
          <HashtagPage 
            hashtagId={currentPage.data?.hashtag}
            onBack={navigateBack}
            onVideoClick={(videoId) => {
              // Navigate back to feed with specific video
              navigateBack();
            }}
          />
        );
      case 'userProfile':
        return (
          <Profile 
            userId={currentPage.data?.userId}
            onBack={navigateBack}
          />
        );
      default:
        return (
          <Feed 
            onNavigateToSound={(soundId) => navigateTo('sound', { soundId })}
            onNavigateToHashtag={(hashtag) => navigateTo('hashtag', { hashtag })}
            onNavigateToProfile={(userId) => navigateTo('userProfile', { userId })}
          />
        );
    }
  };

  const showBottomNav = !['sound', 'hashtag', 'userProfile'].includes(currentPage.type);

  return (
    <div className="App relative">
      {/* Main Content */}
      <div className={showBottomNav ? 'pb-16' : ''}>
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <BottomNav
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onCreateClick={() => setShowCreate(true)}
        />
      )}

      {/* Create Modal */}
      {showCreate && <Create onClose={() => setShowCreate(false)} />}
    </div>
  );
}

export default App;
