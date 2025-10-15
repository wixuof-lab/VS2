import React, { useState } from 'react';
import './App.css';
import Feed from './pages/Feed';
import Discover from './pages/Discover';
import Create from './pages/Create';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showCreate, setShowCreate] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Feed />;
      case 'discover':
        return <Discover />;
      case 'inbox':
        return <Inbox />;
      case 'profile':
        return <Profile />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="App relative">
      {/* Main Content */}
      <div className="pb-16">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onCreateClick={() => setShowCreate(true)}
      />

      {/* Create Modal */}
      {showCreate && <Create onClose={() => setShowCreate(false)} />}
    </div>
  );
}

export default App;
