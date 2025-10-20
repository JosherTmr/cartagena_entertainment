import React from 'react';
import { Service } from '../data/database';
import GlassPanel from './GlassPanel';
import LiquidButton from './LiquidButton';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <GlassPanel hasPadding={false} className="overflow-hidden h-full flex flex-col group">
      <div className="relative">
        <img src={service.image} alt={service.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold">{service.title}</h3>
        </div>
        <div className="absolute top-4 right-4 bg-[var(--color-keppel)] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg">
          <i className={service.icon}></i>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-white/70 mb-4 flex-grow">{service.shortDescription}</p>
        <div className="mt-auto">
            <LiquidButton
              onClick={() => onSelect(service)}
              variant="secondary"
            >
              Ver Más Detalles
            </LiquidButton>
        </div>
      </div>
    </GlassPanel>
  );
};

export default ServiceCard;