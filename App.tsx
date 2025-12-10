
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomsPage from './pages/RoomsPage';
import LocationsPage from './pages/LocationsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import FloatingCta from './components/FloatingCta';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    const [pageName, elementId] = page.split('#');

    // If we are already on the page, just scroll to the element.
    if (pageName === currentPage && elementId) {
      document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // If we are changing the page.
    setCurrentPage(pageName);

    if (elementId) {
      // Use a timeout to allow the new page component to render before scrolling.
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-slate-gray font-sans" style={{ letterSpacing: '-0.5px' }}>
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main>
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'about' && <AboutPage navigateTo={navigateTo} />}
        {currentPage === 'rooms' && <RoomsPage navigateTo={navigateTo} />}
        {currentPage === 'locations' && <LocationsPage navigateTo={navigateTo} />}
        {currentPage === 'facilities' && <FacilitiesPage navigateTo={navigateTo} />}
        {currentPage === 'gallery' && <GalleryPage navigateTo={navigateTo} />}
        {currentPage === 'contact' && <ContactPage navigateTo={navigateTo} />}
      </main>
      <FloatingCta />
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
