import React from 'react';
import GlassPanel from '../components/GlassPanel';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { destinations } from '../data/database';
import SeoManager from '../components/SeoManager';

/**
 * Componente para la página de visualización de destinos.
 *
 * Esta página muestra una lista de los destinos disponibles donde la empresa
 * ofrece servicios. Incluye una barra de búsqueda que permite a los usuarios
 * explorar los servicios filtrando por destino, categoría o fecha.
 */
const DestinationsPage: React.FC = () => {
  return (
    <>
      <SeoManager
        title="Destinos en Cartagena e Islas del Rosario | Cartagena Entertainment"
        description="Explora los destinos paradisíacos que ofrecemos, desde la vibrante Cholón hasta la serena Playa Escondida. Planea tu próxima aventura en el Caribe."
      />
      <div className="container mx-auto px-4 py-20">
        <section className="text-center mb-16">
          <AnimateOnScroll animationType="fade">
            <h1 className="text-4xl sm:text-6xl text-white font-display">Destinos Imperdibles</h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200} animationType="fade">
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Explora los tesoros escondidos y los lugares más icónicos que Cartagena y sus alrededores tienen para ofrecer.
            </p>
          </AnimateOnScroll>
        </section>

        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <AnimateOnScroll key={destination.id} delay={index * 150} animationType="fade-up">
                <GlassPanel hasPadding={false} className="overflow-hidden h-full flex flex-col interactive-panel">
                  <img 
                    src={destination.image} 
                    alt={`Vista panorámica del destino: ${destination.name}`} 
                    className="w-full h-64 object-cover" 
                    loading="lazy"
                    width="600"
                    height="256"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                    <p className="text-white/70 flex-grow">{destination.description}</p>
                  </div>
                </GlassPanel>
              </AnimateOnScroll>
            ))}
          </div>
        </section>
        {/* Spacer for the fixed mobile booking bar */}
        <div className="h-24 md:hidden" />
      </div>
    </>
  );
};

export default DestinationsPage;