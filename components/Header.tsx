
import React, { useState, useEffect } from 'react';
import SideNavbar from './SideNavbar';
import ThemeToggleButton from './ThemeToggleButton';

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinkClasses = "dark:text-brand-light text-gray-800 font-medium tracking-wide text-base relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full cursor-pointer";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out bg-white dark:bg-rich-onyx shadow-md`}
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-[1200px]">
          <a href="#home" onClick={() => navigateTo('home')} className="font-semibold text-lg text-brand-gold uppercase tracking-widest cursor-pointer">
            The Red Tree
          </a>
          <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                  <li>
                    <a onClick={() => navigateTo('home')} className={`${navLinkClasses} ${currentPage === 'home' ? 'after:w-full' : ''}`}>Home</a>
                  </li>
                   <li>
                    <a onClick={() => navigateTo('about')} className={`${navLinkClasses} ${currentPage === 'about' ? 'after:w-full' : ''}`}>About</a>
                  </li>
                  <li>
                    <a onClick={() => navigateTo('rooms')} className={`${navLinkClasses} ${currentPage === 'rooms' ? 'after:w-full' : ''}`}>Rooms & Suites</a>
                  </li>
                  <li>
                    <a onClick={() => navigateTo('facilities')} className={`${navLinkClasses} ${currentPage === 'facilities' ? 'after:w-full' : ''}`}>Facilities</a>
                  </li>
                  <li>
                    <a onClick={() => navigateTo('locations')} className={`${navLinkClasses} ${currentPage === 'locations' ? 'after:w-full' : ''}`}>Locations</a>
                  </li>
                  <li>
                    <a onClick={() => navigateTo('gallery')} className={`${navLinkClasses} ${currentPage === 'gallery' ? 'after:w-full' : ''}`}>Gallery</a>
                  </li>
                  <li>
                    {/* FIX: Corrected syntax for ternary operator in className. */}
                    <a onClick={() => navigateTo('contact')} className={`${navLinkClasses} ${currentPage === 'contact' ? 'after:w-full' : ''}`}>Contact</a>
                  </li>
              </ul>
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggleButton />
            <button onClick={() => navigateTo('contact')} className="px-6 py-2 border-2 border-brand-gold text-brand-gold font-semibold tracking-wider text-base rounded-lg transition-all hover:bg-brand-gold hover:text-charcoal-black">
                Book Now
            </button>
          </div>
          
          {/* Hamburger Menu Icon & Theme Toggle for Mobile */}
          <div className="lg:hidden flex items-center gap-4 z-50">
            <ThemeToggleButton />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-6 flex flex-col justify-between items-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span className={`block w-full h-0.5 bg-brand-gold transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[11px]' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-brand-gold transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-brand-gold transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[11px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>
      <SideNavbar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navigateTo={navigateTo} 
        currentPage={currentPage} 
      />
    </>
  );
};

// FIX: Corrected component name in default export from 'header' to 'Header' to match the component declaration.
export default Header;
