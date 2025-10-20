// Contenido para tu archivo FeaturedCarousel.tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Service } from '../data/database';

interface FeaturedCarouselProps {
  services: Service[];
  onSelect: (service: Service) => void;
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ services, onSelect }) => {
  // Ya no reordenamos el array, solo guardamos el índice activo
  const [activeIndex, setActiveIndex] = useState(0); // Empezamos en 0
  const autoplayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % services.length);
  }, [services.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  const resetAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearTimeout(autoplayTimer.current);
    autoplayTimer.current = setTimeout(handleNext, 7000);
  }, [handleNext]);

  useEffect(() => {
    resetAutoplay();
    return () => { if (autoplayTimer.current) clearTimeout(autoplayTimer.current) };
  }, [activeIndex, resetAutoplay]);

  if (!services || services.length === 0) return null;
  
  // Función para determinar la clase de cada item
  const getPositionClass = (index: number) => {
    const total = services.length;
    if (index === activeIndex) return 'active';
    if (index === (activeIndex - 1 + total) % total) return 'prev';
    if (index === (activeIndex + 1) % total) return 'next';
    if (index === (activeIndex + 2) % total) return 'next-2'; // Añadimos una clase para la segunda tarjeta
    return 'hidden';
  };

  return (
    <div className="carousel-container">
      <div className="slide">
        {services.map((service, index) => (
          <div
            key={service.id} // La key ahora sí es estable
            className={`item ${getPositionClass(index)}`}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            {/* El contenido solo se renderiza en el item activo */}
            {index === activeIndex && (
              <div className="content">
                <div className="name">{service.title}</div>
                <div className="des">{service.shortDescription}</div>
                <button onClick={() => onSelect(service)}>Ver Más</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="button-container">
        {/* Los botones ahora llaman a la nueva lógica */}
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