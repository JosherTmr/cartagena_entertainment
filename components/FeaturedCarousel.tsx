// Contenido para tu archivo FeaturedCarousel.tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Service } from '../data/database';

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
    autoplayTimer.current = setTimeout(handleNext, 7000);
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
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`item ${getPositionClass(index)}`}
            style={{ backgroundImage: `url(${service.image})` }}
            onClick={() => handleItemClick(index)}
          >
            <div className="content">
                <div className="name">{service.title}</div>
                <div className="des">{service.shortDescription}</div>
                <button onClick={(e) => { e.stopPropagation(); onSelect(service); }}>Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="prev" onClick={handlePrev} aria-label="Anterior">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="next" onClick={handleNext} aria-label="Siguiente">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default FeaturedCarousel;