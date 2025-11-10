import React, { useRef, useEffect, useState } from 'react';

type AnimationType = 'fade-up' | 'fade' | 'zoom-in' | 'slide-in-left' | 'slide-in-right';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  animationType?: AnimationType;
  threshold?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animationType = 'fade-up',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: threshold
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, threshold]);

  const getAnimationClasses = (type: AnimationType, visible: boolean): string => {
    const baseClasses = 'transition-all duration-700 ease-out';
    if (visible) {
        return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
    switch (type) {
        case 'fade':
            return `${baseClasses} opacity-0`;
        case 'zoom-in':
            return `${baseClasses} opacity-0 scale-95`;
        case 'slide-in-left':
            return `${baseClasses} opacity-0 -translate-x-8`;
        case 'slide-in-right':
            return `${baseClasses} opacity-0 translate-x-8`;
        case 'fade-up':
        default:
            return `${baseClasses} opacity-0 translate-y-2`; // Reduced from translate-y-4
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClasses(animationType, isVisible)}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
