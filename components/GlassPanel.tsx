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
      className={`bg-[var(--glass-background)] backdrop-blur-lg border border-[var(--glass-border)] rounded-2xl shadow-lg ${paddingClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
