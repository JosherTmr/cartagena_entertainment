import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonHoverEffect = { scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" };
const buttonTransition = { duration: 0.3, ease: "easeInOut" };

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  to?: string; // Para usarlo como Link
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  onClick,
  to,
}) => {
  const baseClasses = `
    block rounded-full text-white font-medium backdrop-blur-sm
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-navy)]
  `;

  const variantClasses = {
    primary: 'bg-[var(--color-keppel)] hover:bg-[var(--color-keppel-light)] focus:ring-[var(--color-keppel)] px-6 py-3 text-base',
    secondary: 'bg-white/20 border border-white/30 hover:bg-white/30 focus:ring-white/50 px-5 py-2 text-sm',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: variant === 'secondary' ? buttonHoverEffect : { scale: 1.05 },
    transition: buttonTransition,
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={combinedClasses}>{children}</Link>
      </motion.div>
    );
  }

  return (
    <motion.button onClick={onClick} className={combinedClasses} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default GlassButton;
