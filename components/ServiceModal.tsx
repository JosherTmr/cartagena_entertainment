
import React from 'react';
import { Service } from '../data/database';
import GlassPanel from './GlassPanel';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <GlassPanel className="w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fade-in-up">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 text-white/70 hover:text-white bg-gray-800/50 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10"
            aria-label="Cerrar modal"
          >
            <i className="fas fa-times"></i>
          </button>
          
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-64 object-cover rounded-lg mb-6" 
            loading="lazy"
            width="896"
            height="256"
          />
          
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[var(--color-keppel)] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg flex-shrink-0">
              <i className={service.icon}></i>
            </span>
            <h2 className="text-3xl font-bold text-white">{service.title}</h2>
          </div>
          
          <p className="text-white/80 mb-6">{service.fullDescription}</p>
          
          {service.tags && service.tags.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-white/90 mb-2">Etiquetas</h4>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="bg-white/10 text-white/80 text-sm px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          )}
          
          <div className="bg-black/20 border-l-4 border-[var(--color-keppel)] p-4 rounded-r-lg">
            <p className="italic text-white/90">"{service.lifestyleFocus}"</p>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};

export default ServiceModal;