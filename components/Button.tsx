
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  variant?: 'gold' | 'outline';
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  type?: 'submit' | 'button' | 'reset';
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'gold',
  className = '',
  as = 'button',
  href,
  type,
  target,
}) => {
  const baseStyles =
    'inline-block px-6 md:px-8 py-2.5 md:py-3 font-semibold tracking-wider uppercase rounded-lg text-sm md:text-base transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-brand-black hover-sheen';

  const variantStyles = {
    gold:
      'bg-brand-gold text-brand-black hover:shadow-xl hover:shadow-brand-gold/20 hover:brightness-110 hover:-translate-y-1 focus:ring-brand-gold',
    outline:
      'bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black focus:ring-brand-gold',
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (as === 'a') {
    return (
      <a
        href={href}
        onClick={onClick}
        className={combinedClassName}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};

export default Button;