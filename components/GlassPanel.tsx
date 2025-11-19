import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hasPadding?: boolean;
}

const GlassPanel: React.FC<GlassPanelProps> = ({ children, className = '', hasPadding = true }) => {
  const paddingClass = hasPadding ? 'p-6' : '';
  return (
    <div
      className={`glass-panel ${paddingClass} ${className}
      ${className.includes('interactive-panel') ? 'transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-glass hover:border-primary' : ''}`}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
