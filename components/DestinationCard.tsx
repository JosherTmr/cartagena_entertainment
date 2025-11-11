import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Destination } from '../data/database';
import GlassButton from './GlassButton';

// --- Constantes de Animación (sin cambios) ---
const cardHoverEffect = { y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.15)" };
const cardTransition = { type: "spring", stiffness: 300, damping: 20 };

interface DestinationCardProps {
  destination: Destination;
  className?: string;
  /**
   * Define el conjunto de tamaños para el contenido de la tarjeta.
   * 'large' es el default para páginas de destino.
   * 'small' es para el mini-bento de la homepage.
   */
  size?: 'small' | 'large'; 
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  destination, 
  className = '', 
  size = 'large' // Default 'large' si no se especifica
}) => {

  // --- Lógica condicional para los tamaños ---
  // Esto nos permite cambiar el estilo basado en la prop 'size'
  const isSmall = size === 'small';

  const paddingClasses = isSmall ? 'p-4' : 'p-5';
  const titleClasses = isSmall ? 'text-lg lg:text-xl' : 'text-2xl lg:text-3xl';
  const descriptionClasses = isSmall ? 'text-xs' : 'text-sm';
  const buttonPadding = isSmall ? 'py-1.5 px-3 text-xs' : 'py-2 px-4 text-xs';
  const buttonPosition = isSmall ? 'top-3 right-3' : 'top-4 right-4';

  return (
    <motion.div
      className={`
        ${className} 
        relative h-full w-full overflow-hidden rounded-2xl
        shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
        cursor-pointer group
      `}
      whileHover={cardHoverEffect}
      transition={cardTransition}
    >
      <img
        src={destination.image}
        alt={`Vista panorámica del destino: ${destination.name}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width="600"
        height="600"
      />
      
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" 
        aria-hidden="true" 
      />

      {/* --- Botón CTA (usa clases condicionales) --- */}
      <div className={`absolute z-10 ${buttonPosition}`}>
        <GlassButton
          to={`/services?destination=${destination.id}`}
          variant="secondary"
          className={buttonPadding}
        >
          Descubrir
        </GlassButton>
      </div>

      {/* --- Texto (usa clases condicionales) --- */}
      <div className={`absolute bottom-0 left-0 z-10 ${paddingClasses}`}>
        <h3 className={`text-white font-bold ${titleClasses}`}>
          {destination.name}
        </h3>
        <p className={`text-white/90 mt-1 line-clamp-2 ${descriptionClasses}`}>
          {destination.description}
        </p>
      </div>
    </motion.div>
  );
};

export default DestinationCard;