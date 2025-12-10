
import React, { useEffect } from 'react';

interface SideNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  navigateTo: (page: string) => void;
  currentPage: string;
}

const navLinks = [
  { name: 'Home', page: 'home' },
  { name: 'About', page: 'about' },
  { name: 'Rooms & Suites', page: 'rooms' },
  { name: 'Facilities', page: 'facilities' },
  { name: 'Locations', page: 'locations' },
  { name: 'Gallery', page: 'gallery' },
  { name: 'Contact', page: 'contact' },
];

const SocialIcon: React.FC<{ href: string; iconClass: string }> = ({ href, iconClass }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-grey hover:text-brand-gold transition-all duration-300 transform hover:scale-125">
        <i className={`${iconClass} text-2xl`}></i>
    </a>
);

const SideNavbar: React.FC<SideNavbarProps> = ({ isOpen, onClose, navigateTo, currentPage }) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleNavigation = (page: string) => {
    navigateTo(page);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Side Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gradient-to-b dark:from-rich-onyx dark:to-charcoal-black shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
                 <a onClick={() => handleNavigation('home')} className="font-semibold text-lg text-brand-gold uppercase tracking-widest cursor-pointer">
                    The Red Tree
                </a>
                <button
                    onClick={onClose}
                    className="text-gray-500 dark:text-brand-grey hover:text-brand-gold"
                    aria-label="Close menu"
                >
                    <i className="fas fa-times text-3xl"></i>
                </button>
            </div>
          <nav>
            <ul className="space-y-6">
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={`transition-all duration-500 ease-out ${
                    isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${index * 50 + 150}ms` }}
                >
                  <a
                    onClick={() => handleNavigation(link.page)}
                    className={`block text-xl font-medium text-gray-800 dark:text-white transition-colors duration-300 hover:text-brand-gold cursor-pointer ${currentPage === link.page ? 'text-brand-gold' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-8 border-t border-gray-200 dark:border-brand-gold/20">
             <div className="flex justify-center items-center gap-8">
                <SocialIcon href="#" iconClass="fab fa-facebook-f" />
                <SocialIcon href="#" iconClass="fab fa-instagram" />
             </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideNavbar;
