import { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Services from './pages/Services';
import Community from './pages/Community';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import "./css/index.css"

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [profileId, setProfileId] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setProfileId(null);
    window.scrollTo(0, 0);
  };

  const handleShowProfile = (id) => {
    setProfileId(id);
    setCurrentPage('profile');
    window.scrollTo(0, 0);
  };

  const handleBackFromProfile = () => {
    setProfileId(null);
    setCurrentPage('services');
  };

  return (
    <div className="app">
      <Nav currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && (
        <Home onNavigate={handleNavigate} onShowProfile={handleShowProfile} />
      )}

      {currentPage === 'services' && (
        <Services onNavigate={handleNavigate} onShowProfile={handleShowProfile} />
      )}

      {currentPage === 'community' && (
        <Community onNavigate={handleNavigate} />
      )}

      {currentPage === 'about' && (
        <About onNavigate={handleNavigate} />
      )}

      {currentPage === 'contact' && (
        <Contact onNavigate={handleNavigate} />
      )}

      {currentPage === 'profile' && profileId && (
        <Profile
          serviceId={profileId}
          onBack={handleBackFromProfile}
          onNavigate={handleNavigate}
        />
      )}

      {/* Toast */}
      <div className="toast" id="toast"></div>
    </div>
  );
}

export default App;