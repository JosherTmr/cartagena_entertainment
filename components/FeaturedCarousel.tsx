// Contenido para tu archivo FeaturedCarousel.tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Service } from '../data/database';
import LiquidButton from './LiquidButton';

interface FeaturedCarouselProps {
  services: Service[];
  onSelect: (service: Service) => void;
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ services, onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransitioning = useRef(false); // Para prevenir clics/swipes rápidos

  const handleNext = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setActiveIndex(prev => (prev + 1) % services.length);
    setTimeout(() => { isTransitioning.current = false; }, 500); // Coincide con la duración de la transición en CSS
  }, [services.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setActiveIndex(prev => (prev - 1 + services.length) % services.length);
    setTimeout(() => { isTransitioning.current = false; }, 500); // Coincide con la duración de la transición en CSS
  }, [services.length]);
  
  const resetAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearTimeout(autoplayTimer.current);
    autoplayTimer.current = setTimeout(handleNext, 5000);
  }, [handleNext]);

  useEffect(() => {
    resetAutoplay();
    return () => { if (autoplayTimer.current) clearTimeout(autoplayTimer.current) };
  }, [activeIndex, resetAutoplay]);

  // --- Manejadores de Swipe ---
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    if (autoplayTimer.current) clearTimeout(autoplayTimer.current); // Pausa el autoplay
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const threshold = 50; // Distancia mínima de swipe en píxeles
    
    if (touchStartX.current - touchEndX > threshold) {
      handleNext();
    } else if (touchEndX - touchStartX.current > threshold) {
      handlePrev();
    }
    resetAutoplay(); // Reanuda el autoplay
  };

  if (!services || services.length === 0) return null;
  
  const getPositionClass = (index: number) => {
    const total = services.length;
    if (index === activeIndex) return 'active';
    if (index === (activeIndex - 1 + total) % total) return 'prev';
    if (index === (activeIndex + 1) % total) return 'next';
    if (index === (activeIndex + 2) % total) return 'next-2';
    return 'hidden';
  };

  const handleItemClick = (index: number) => {
    const position = getPositionClass(index);
    if (position === 'next' || position === 'next-2') {
        handleNext();
    } else if (position === 'prev') {
        // En la configuración actual, 'prev' no es visible en escritorio, pero se añade por completitud.
        handlePrev();
    }
  };

  return (
    <div 
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slide">
        {services.map((service, index) => {
          const positionClass = getPositionClass(index);
          const shouldLoadImage = positionClass === 'active' || positionClass === 'next' || positionClass === 'next-2';
          return (
          <div
            key={service.id} 
            className={`item ${positionClass}`}
            style={shouldLoadImage ? { backgroundImage: `url(${service.image})` } : undefined}
            onClick={() => handleItemClick(index)}
          >
            <div className="content">
                <div className="name">{service.title}</div>
                <div className="des">{service.shortDescription}</div>
                <LiquidButton onClick={(e) => { e.stopPropagation(); onSelect(service); }} variant="primary">Ver Detalles</LiquidButton>
            </div>
          </div>
          );
        })}
      </div>
      <div className="button-container">
        <LiquidButton type="button" className="prev !p-0 w-11 h-11 rounded-full" onClick={handlePrev} aria-label="Anterior" variant="secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </LiquidButton>
        <LiquidButton type="button" className="next !p-0 w-11 h-11 rounded-full" onClick={handleNext} aria-label="Siguiente" variant="secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </LiquidButton>
      </div>
    </div>
  );
};

export default FeaturedCarousel;