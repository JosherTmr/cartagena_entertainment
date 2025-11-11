import React from 'react';
import { destinations } from '../data/database';
import SeoManager from '../components/SeoManager';
import AnimateOnScroll from '../components/AnimateOnScroll';
// ¡Importamos el nuevo componente!
import DestinationCard from '../components/DestinationCard'; // Ajusta la ruta

/**
 * Componente para la página de visualización de destinos.
 * Muestra los destinos en un layout de "Bento Box" asimétrico.
 */
const DestinationsPage: React.FC = () => {
  
  // --- Asignación de clases del Bento Grid ---
  // Esto se queda aquí, ya que es la lógica de *esta página* en específico.
  const bentoGridClasses = [
    'lg:col-span-2 lg:row-span-2', // 0: Playa Tranquila (Hero 2x2)
    'lg:col-span-1 lg:row-span-1', // 1: Isla Grande (1x1)
    'lg:col-span-1 lg:row-span-1', // 2: La Piscina (1x1)
    'lg:col-span-2 lg:row-span-1', // 3: Beach Club (2x1)
    'lg:col-span-1 lg:row-span-2', // 4: Cholón (1x2)
    'lg:col-span-1 lg:row-span-1', // 5: Playa Escondida (1x1)
    'lg:col-span-2 lg:row-span-1', // 6: Cartagena (2x1)
    'lg:col-span-2 lg:row-span-1', // 7: Caño Ratón (2x1)
  ];

  // Las constantes de animación se fueron a DestinationCard.tsx

  return (
    <>
      <SeoManager
        title="Destinos en Cartagena e Islas del Rosario | Cartagena Entertainment"
        description="Explora los destinos paradisíacos que ofrecemos, desde la vibrante Cholón hasta la serena Playa Escondida. Planea tu próxima aventura en el Caribe."
      />
      <div className="container mx-auto px-4 py-20">
        <section className="text-center mb-16">
          <AnimateOnScroll animationType="zoom-in">
            <h1 className="text-4xl sm:text-6xl text-white font-display">Destinos Imperdibles</h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200} animationType="fade-up">
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Explora los tesoros escondidos y los lugares más icónicos que Cartagena y sus alrededores tienen para ofrecer.
            </p>
          </AnimateOnScroll>
        </section>

        {/* --- CONTENEDOR DEL BENTO GRID --- */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-[20rem] gap-6">
            {destinations.map((destination, index) => (
              
              // --- TARJETA BENTO INDIVIDUAL (Modularizada) ---
              // Usamos el componente e inyectamos las clases de layout
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