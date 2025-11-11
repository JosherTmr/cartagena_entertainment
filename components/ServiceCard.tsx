import React from 'react';
import { Service } from '../data/database';
import GlassPanel from './GlassPanel';
import GlassButton from './GlassButton';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <GlassPanel hasPadding={false} className="overflow-hidden h-full flex flex-col group interactive-panel cursor-pointer">
      <div className="relative">
        <img 
          src={service.image} 
          alt={`Imagen del servicio: ${service.title}`} 
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
          loading="lazy"
          width="400"
          height="192"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
        </div>
        <div className="absolute top-3 right-3 bg-[var(--color-keppel)] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl shadow-lg">
          <i className={service.icon}></i>
        </div>
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <p className="text-white/70 mb-3 sm:mb-4 flex-grow text-sm sm:text-base">{service.shortDescription}</p>
        <div className="mt-auto">
            <GlassButton
              onClick={() => onSelect(service)}
              variant="secondary"
              className="w-full"
            >
              Ver Más Detalles
            </GlassButton>
        </div>
      </div>
    </GlassPanel>
  );
};

export default ServiceCard;