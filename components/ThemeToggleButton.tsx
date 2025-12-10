import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SunIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  // Requirements: Desktop: 28–32px Mobile: 22–26px
  const iconBaseClasses = "absolute w-[22px] h-[22px] md:w-[26px] md:h-[26px] transition-all duration-300 ease-in-out text-brand-gold";
  
  // Requirements: minimal, modern, circular, with soft hover glow
  const buttonClasses = "relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold dark:focus-visible:ring-offset-brand-black hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300";

  return (
    <button
      onClick={toggleTheme}
      className={buttonClasses}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <SunIcon className={`${iconBaseClasses} ${!isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
      <MoonIcon className={`${iconBaseClasses} ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} />
    </button>
  );
};

export default ThemeToggleButton;
