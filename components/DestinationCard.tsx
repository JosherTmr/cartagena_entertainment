import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Destination } from '../data/database'; 

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, className = '' }) => {
  return (
    <motion.div
      // 'touch-action-manipulation' mejora la respuesta del tap en móviles
      className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer touch-action-manipulation ${className}`}
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {/* Enlace usa el ID para el filtro correcto */}
      <Link to={`/services?destination=${destination.id}`} className="block w-full h-full">
        
        {/* Imagen */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          {/* 
             GRADIENTE:
             - Mobile (Default): Opacidad 80% abajo para leer texto siempre.
             - Desktop: Opacidad 60% que baja a 40% en hover.
          */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 md:opacity-60 md:group-hover:opacity-40 transition-opacity duration-300" />
        </div>

        {/* Contenido */}
        <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 flex flex-col justify-end h-full z-10">
          <motion.div
            // Mobile: Texto siempre visible en su posición final.
            initial={{ y: 0, opacity: 1 }} 
            // Desktop: Podríamos animarlo, pero mantenerlo fijo es más seguro.
            // Usamos clases CSS group-hover para efectos sutiles en desktop.
            className="transform md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300"
          >
            <h3 className="text-xl md:text-3xl font-display text-white mb-1 drop-shadow-md">
              {destination.name}
            </h3>
            
            {/* Descripción:
               - Mobile: Siempre visible, texto pequeño.
               - Desktop: Se expande en hover (h-0 -> h-auto).
            */}
            <div className="block md:h-0 md:group-hover:h-auto md:overflow-hidden transition-all duration-300">
                <p className="text-xs md:text-sm text-gray-200 mt-1 md:mt-2 opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                    Explora yates y experiencias en {destination.name}.
                </p>
            </div>
          </motion.div>
        </div>

        {/* Icono Flecha (Solo decorativo) */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;