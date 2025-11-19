import React from 'react';
import { destinations } from '../data/database';
import SeoManager from '../components/SeoManager';
import AnimateOnScroll from '../components/AnimateOnScroll';
import DestinationCard from '../components/DestinationCard';

/**
 * Componente para la página de visualización de destinos.
 */
const DestinationsPage: React.FC = () => {

  // Clases de Bento Grid (se activan solo en lg:)
  const bentoGridClasses = [
    'lg:col-span-2 lg:row-span-2', // Hero
    'lg:col-span-1 lg:row-span-1',
    'lg:col-span-1 lg:row-span-1',
    'lg:col-span-2 lg:row-span-1',
    'lg:col-span-1 lg:row-span-2',
    'lg:col-span-1 lg:row-span-1',
    'lg:col-span-2 lg:row-span-1',
    'lg:col-span-2 lg:row-span-1',
  ];

  return (
    <>
      <SeoManager
        title="Destinos en Cartagena e Islas del Rosario | Cartagena Entertainment"
        description="Explora los destinos paradisíacos que ofrecemos, desde la vibrante Cholón hasta la serena Playa Escondida. Planea tu próxima aventura en el Caribe."
      />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-10 md:mb-16">
          <AnimateOnScroll animationType="zoom-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-highlight font-serif">Destinos Imperdibles</h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200} animationType="fade-up">
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-text-light/80 px-4">
              Explora los tesoros escondidos y los lugares más icónicos que Cartagena y sus alrededores tienen para ofrecer.
            </p>
          </AnimateOnScroll>
        </section>

        {/* --- BENTO GRID RESPONSIVO --- */}
        <section>
          {/* 
             Mobile: grid-cols-1 (una columna)
             Tablet: md:grid-cols-2
             Desktop: lg:grid-cols-4 (Bento completo)
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[20rem] gap-4 md:gap-6">
            {destinations.map((destination, index) => (

              <DestinationCard
                key={destination.id}
                destination={destination}
                className={bentoGridClasses[index % bentoGridClasses.length]}
              />

            ))}
          </div>
        </section>

        <div className="h-24 md:hidden" />
      </div>
    </>
  );
};

export default DestinationsPage;