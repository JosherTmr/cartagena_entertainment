import React from 'react';

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "relative overflow-hidden inline-flex items-center justify-center px-6 py-3 font-bold text-text-light rounded-[14px] shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-dark hover:-translate-y-[2px] hover:shadow-glass";

  const variantClasses = {
    primary: "bg-gradient-to-br from-primary to-accent focus:ring-primary",
    secondary: "bg-text-light/10 hover:bg-text-light/20 border border-text-light/20 focus:ring-text-light/50 backdrop-blur-sm"
  };

  const spanClasses = "absolute top-0 left-0 w-full h-full bg-text-light opacity-0 transform scale-150 rounded-full group-hover:opacity-20 group-hover:scale-100 transition-transform duration-500 ease-out";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className} group`}
      {...props}
    >
      <span className={spanClasses}></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default LiquidButton;