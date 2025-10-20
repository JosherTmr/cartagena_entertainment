import React, { useState } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import GlassPanel from '../components/GlassPanel';
import { services, Service } from '../data/database';
import ServiceModal from '../components/ServiceModal';
import FeaturedCarousel from '../components/FeaturedCarousel';

/**
 * Componente funcional para la página de inicio.
 *
 * Esta página sirve como la principal puerta de entrada a la aplicación. Presenta:
 * - Una sección "hero" con un eslogan atractivo (manejada por el Header).
 * - Una lista de servicios destacados (`featuredServices`).
 * - Una sección que resalta las fortalezas de la empresa ("¿Por Qué Elegirnos?").
 * - Un modal para ver los detalles de un servicio seleccionado.
 */
const HomePage: React.FC = () => {
  // --- Estado y Navegación ---
  const featuredServices = services.filter(s => s.featured);
  const [selectedService, setSelectedService] = useState<Service | null>(null); // Estado para el servicio seleccionado en el modal

  /**
   * Establece el servicio seleccionado para mostrarlo en el modal.
   * @param service - El objeto de servicio que el usuario ha seleccionado.
   */
  const handleSelectService = (service: Service) => {
    setSelectedService(service);
  };

  /**
   * Cierra el modal de detalles del servicio al establecer el estado a null.
   */
  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      {/* Spacer div to push content below the absolute-positioned hero section in Header */}
      <div className="h-screen" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          {/* Featured Services Section */}
          <section className="mb-24">
            <AnimateOnScroll>
              <h2 className="text-4xl font-bold text-center text-white mb-12">Atrevete a vivir experiencias exclusivas</h2>
            </AnimateOnScroll>
             <AnimateOnScroll>
              <FeaturedCarousel services={featuredServices} onSelect={handleSelectService} />
            </AnimateOnScroll>
          </section>
          
          {/* Why Choose Us Section */}
          <section>
            <AnimateOnScroll>
              <h2 className="text-4xl font-bold text-center text-white mb-12">¿Por Qué Elegirnos?</h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8">
                <AnimateOnScroll delay={0}>
                    <GlassPanel className="text-center interactive-panel">
                        <i className="fas fa-gem text-4xl text-[var(--color-keppel)] mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Exclusividad</h3>
                        <p className="text-white/70">Servicios y propiedades de lujo seleccionados para una experiencia única.</p>
                    </GlassPanel>
                </AnimateOnScroll>
                <AnimateOnScroll delay={150}>
                    <GlassPanel className="text-center interactive-panel">
                        <i className="fas fa-user-shield text-4xl text-[var(--color-keppel)] mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Privacidad y Seguridad</h3>
                        <p className="text-white/70">Máxima discreción y personal de seguridad para tu tranquilidad.</p>
                    </GlassPanel>
                </AnimateOnScroll>
                <AnimateOnScroll delay={300}>
                    <GlassPanel className="text-center interactive-panel">
                        <i className="fas fa-concierge-bell text-4xl text-[var(--color-keppel)] mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Servicio Personalizado</h3>
                        <p className="text-white/70">Atención 24/7 y un equipo de concierge dedicado a tus deseos.</p>
                    </GlassPanel>
                </AnimateOnScroll>
            </div>
          </section>
        </div>
      </div>
      
      {/* Spacer for the fixed mobile booking bar */}
      <div className="h-24 md:hidden" />

      <ServiceModal service={selectedService} onClose={handleCloseModal} />
    </>
  );
};

export default HomePage;