import React from 'react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

const SocialIcon: React.FC<{ href: string; iconClass: string; label: string }> = ({ href, iconClass, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={label}
        className="text-gray-400 hover:text-brand-gold transition-transform duration-300 hover:scale-110"
    >
        <i className={`${iconClass} text-xl`}></i>
    </a>
);

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-[#0C0C0C] text-gray-400 font-sans border-t border-brand-gold/20">
      <div className="container mx-auto px-6 py-6 max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright Info (Left on Desktop) */}
        <div className="text-center md:text-left text-sm text-gray-500 order-3 md:order-1">
            © 2025 The Red Tree Guest House.
        </div>
        
        {/* Navigation Links (Center on Desktop) */}
        <nav className="order-1 md:order-2">
           <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base">
              <li><a onClick={() => navigateTo('home')} className="cursor-pointer hover:text-white transition-colors duration-300">Home</a></li>
              <li><a onClick={() => navigateTo('about')} className="cursor-pointer hover:text-white transition-colors duration-300">About</a></li>
              <li><a onClick={() => navigateTo('rooms')} className="cursor-pointer hover:text-white transition-colors duration-300">Rooms</a></li>
              <li><a onClick={() => navigateTo('locations')} className="cursor-pointer hover:text-white transition-colors duration-300">Locations</a></li>
              <li><a onClick={() => navigateTo('gallery')} className="cursor-pointer hover:text-white transition-colors duration-300">Gallery</a></li>
              <li><a onClick={() => navigateTo('contact')} className="cursor-pointer hover:text-white transition-colors duration-300">Contact</a></li>
           </ul>
        </nav>
        
        {/* Social Icons (Right on Desktop) */}
        <div className="flex gap-5 order-2 md:order-3">
          <SocialIcon href="#" iconClass="fab fa-facebook-f" label="Facebook" />
          <SocialIcon href="#" iconClass="fab fa-instagram" label="Instagram" />
          <SocialIcon href="https://wa.me/923258044401" iconClass="fab fa-whatsapp" label="WhatsApp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;