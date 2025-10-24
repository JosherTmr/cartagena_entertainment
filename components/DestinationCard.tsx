import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Destination } from '../data/database';
import GlassPanel from './GlassPanel';
import LiquidButton from './LiquidButton';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const navigate = useNavigate();

  const handleViewServices = () => {
    navigate(`/services?destination=${destination.id}`);
  };

  return (
    <GlassPanel hasPadding={false} className="overflow-hidden h-full flex flex-col group interactive-panel">
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width="400"
          height="224"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-white">{destination.name}</h3>
        <p className="text-white/70 mb-4 flex-grow text-sm">{destination.description}</p>
        <div className="mt-auto">
          <LiquidButton onClick={handleViewServices} variant="secondary" className="w-full">
            Descubrir Servicios
          </LiquidButton>
        </div>
      </div>
    </GlassPanel>
  );
};

export default DestinationCard;
