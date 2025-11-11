import React, { useState } from 'react';
// --- NUEVOS IMPORTS ---
import { motion } from 'framer-motion'; 

// --- Componentes existentes ---
import AnimateOnScroll from '../components/AnimateOnScroll';
import GlassPanel from '../components/GlassPanel';
import { services, Service, destinations } from '../data/database';
import ServiceModal from '../components/ServiceModal';
import FeaturedCarousel from '../components/FeaturedCarousel';
// Ya no importamos DestinationCard aquí, no se usará EN ESTA PÁGINA
import SeoManager from '../components/SeoManager';

const HomePage: React.FC = () => {
  // --- Estado existente ---
  const featuredServices = services.filter(s => s.featured);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // --- NUEVO ESTADO PARA EL EFECTO DE TARJETAS ---
  /** Controla el índice de la tarjeta que está siendo "hovered" */
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Usamos los primeros 5 destinos como en tu ejemplo
  const featuredDestinations = destinations.slice(0, 5);
  
  // --- Handlers existentes ---
  const handleSelectService = (service: Service) => {
    setSelectedService(service);
  };
  const handleCloseModal = () => {
    setSelectedService(null);
  };
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cartagena Entertainment Rent and Pleasure",
    "url": "https://aistudio.google.com/app/project/fc483c65-7286-4e12-a16f-75b87c711202",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aistudio.google.com/app/project/fc483c65-7286-4e12-a16f-75b87c711202/services?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // --- NUEVAS VARIANTES DE ANIMACIÓN PARA EL TEXTO ---
  // (Traducido de tu .card__head)
  const headVariants = {
    initial: {
      color: "#000",
      // Usamos tu color de marca (Keppel) en lugar de rosa
      backgroundColor: "rgba(77, 184, 168, 0.75)", 
      transform: "rotate(-90deg)",
      transformOrigin: "0% 0%",
      bottom: 0,
      left: 0,
      position: "absolute" as const,
      padding: "0.5em",
      minWidth: "100%",
      textAlign: "center" as const,
      fontSize: "1em",
      whiteSpace: "nowrap" as const,
    },
    hovered: {
      color: "#FFF",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      // El skew(-5deg) es para anular el skew(5deg) del contenedor
      transform: "rotate(0deg) skew(-5deg)", 
      transformOrigin: "bottom left",
      bottom: 0,
      left: 0,
      position: "absolute" as const,
      width: "100%",
      textAlign: "center" as const,
      padding: "0.5em",
      fontSize: "2em",
      whiteSpace: "normal" as const,
    }
  };

  // Transición suave para las animaciones
  const transition = { type: "spring", stiffness: 300, damping: 20 };

  return (
    <>
      <SeoManager
        title="Yates de Lujo y Experiencias Exclusivas en Cartagena | Cartagena Entertainment"
        description="Descubre el máximo lujo en el Caribe. Alquiler de yates, mansiones privadas y experiencias inolvidables en Cartagena y las Islas del Rosario. Vive una aventura sin concesiones."
        schema={websiteSchema}
      />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          
          {/* --- SECCIÓN DE DESTINOS (CON NUEVO EFECTO) --- */}
          <section className="mb-24">
            <AnimateOnScroll animationType="zoom-in">
              <h2 className="text-3xl sm:text-5xl text-center text-white mb-12 font-display">Enamórate de nuestros increíbles destinos</h2>
            </AnimateOnScroll>
            
            {/* Aquí está el nuevo contenedor:
              - display: flex
              - overflow: hidden
              - transform: skew(5deg) (usando `skew-x-5` de Tailwind)
              - height: 75vmin (como en tu CSS)
            */}
            <div 
              className="flex w-full overflow-hidden transform skew-x-5"
              style={{ height: "75vmin" }} // vmin no es una unidad de Tailwind, usamos style
              onMouseLeave={() => setHoveredIndex(null)} // Resetea al salir
            >
              {featuredDestinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  // Añadimos el margen derecho que tenías en tu CSS
                  className={`relative h-full ${index !== featuredDestinations.length - 1 ? 'mr-4' : ''}`}
                  style={{ flex: 1 }} // Inicia con flex: 1
                  animate={{
                    // El "flex-grow: 10" de tu CSS se traduce a esto
                    flexGrow: hoveredIndex === index ? 10 : 1,
                  }}
                  transition={transition}
                  onMouseEnter={() => setHoveredIndex(index)} // Activa esta tarjeta
                >
                  {/* Imagen de fondo */}
                  <motion.img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                    animate={{ 
                      // Pasa de grayscale a color
                      filter: hoveredIndex === index ? 'grayscale(0)' : 'grayscale(100%)' 
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  
                  {/* Título de la tarjeta (el .card__head) */}
                  <motion.div
                    variants={headVariants}
                    animate={hoveredIndex === index ? 'hovered' : 'initial'}
                    transition={transition}
                  >
                    {dest.name}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- El resto de tu homepage (CORREGIDO) --- */}
          
          <section className="mb-24">
            <AnimateOnScroll animationType="fade">
              <h2 className="text-4xl sm:text-5xl text-center text-white mb-12 font-display">Atrevete a vivir experiencias exclusivas</h2>
            </AnimateOnScroll>
             <AnimateOnScroll animationType="zoom-in">
              <FeaturedCarousel services={featuredServices} onSelect={handleSelectService} />
            </AnimateOnScroll>
          </section>
          
          <section>
            <AnimateOnScroll animationType="zoom-in">
              <h2 className="text-4xl sm:text-5xl text-center text-white mb-12 font-display">¿Por Qué Elegirnos?</h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8">
                <AnimateOnScroll delay={0} animationType="slide-in-left">
                    <GlassPanel className="text-center interactive-panel">
                        <i className="fas fa-gem text-4xl text-[var(--color-keppel)] mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Exclusividad</h3>
                        <p className="text-white/70">Servicios y propiedades de lujo seleccionados para una experiencia única.</p>
                    </GlassPanel>
                </AnimateOnScroll>
                <AnimateOnScroll delay={150} animationType="fade-up">
                    <GlassPanel className="text-center interactive-panel">
                        <i className="fas fa-user-shield text-4xl text-[var(--color-keppel)] mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Privacidad y Seguridad</h3>
                        <p className="text-white/70">Máxima discreción y personal de seguridad para tu tranquilidad.</p>
                    </GlassPanel>
                </AnimateOnScroll>
                <AnimateOnScroll delay={300} animationType="slide-in-right">
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