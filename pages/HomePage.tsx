import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

// --- Componentes existentes ---
import AnimateOnScroll from '../components/AnimateOnScroll';
import GlassPanel from '../components/GlassPanel';
import { services, Service, destinations } from '../data/database';
import ServiceModal from '../components/ServiceModal';
import FeaturedCarousel from '../components/FeaturedCarousel';
import SeoManager from '../components/SeoManager';
// Importamos tu botón Liquid
import LiquidButton from '../components/LiquidButton'; 

const HomePage: React.FC = () => {
  const featuredServices = services.filter(s => s.featured);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  // Estado para controlar el hover en Desktop
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Estado para detectar móvil
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Chequeo inicial
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Destinos seleccionados
  const desiredIndices = [6,4,2,3,1,5,0,7]; 
  const featuredDestinations = desiredIndices.map(index => destinations[index])
    .filter(dest => dest !== undefined);
  
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

  // --- VARIANTES RESPONSIVAS ---
  
  const headVariants = {
    initial: {
      // CONFIGURACIÓN MÓVIL (Default)
      color: "#FFF",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      transform: "rotate(0deg)",
      bottom: 0,
      left: 0,
      position: "absolute" as const,
      width: "100%",
      padding: "1rem",
      textAlign: "left" as const,
      display: "flex",
      flexDirection: "row" as const,
      justifyContent: "space-between",
      alignItems: "center",
      
      // SOBRESCRIBIR PARA DESKTOP
      ...( !isMobile && {
        color: "#000",
        backgroundColor: "rgba(77, 184, 168, 0.85)", 
        transform: "rotate(-90deg)",
        transformOrigin: "0% 100%",
        minWidth: "75vmin", 
        width: "auto",
        justifyContent: "flex-start",
        padding: "0.5rem 1rem",
      })
    },
    hovered: {
      // ESTADO EXPANDIDO (Desktop Hover)
      color: "#FFF",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      transform: isMobile ? "rotate(0deg)" : "rotate(0deg) skew(-5deg)", 
      transformOrigin: "0% 100%",
      bottom: 0,
      left: 0,
      position: "absolute" as const,
      width: "100%", 
      minWidth: "100%",
      padding: "1.5rem 2rem",
      textAlign: "left" as const,
      whiteSpace: "normal" as const,
      display: "flex",
      flexDirection: "row" as const,
      justifyContent: "space-between",
      alignItems: "center",
    }
  };

  const titleVariants = {
    initial: { fontSize: isMobile ? "1.2rem" : "1.1rem", fontWeight: isMobile ? "bold" : "normal" },
    hovered: { fontSize: "2rem", fontWeight: "bold", textShadow: "0 2px 4px rgba(0,0,0,0.3)" }
  };

  const buttonVariants = {
    initial: { 
        // En móvil mostramos el botón siempre
        opacity: isMobile ? 1 : 0, 
        display: isMobile ? "block" : "none",
        scale: isMobile ? 0.9 : 0.8,
        x: isMobile ? 0 : 50 
    },
    hovered: { 
        opacity: 1, scale: 1, display: "block", x: 0, 
        transition: { delay: 0.2, type: "spring", stiffness: 100 } 
    }
  };

  const transition = { type: "spring", stiffness: 200, damping: 25 };

  return (
    <>
      <SeoManager
        title="Yates de Lujo y Experiencias Exclusivas en Cartagena | Cartagena Entertainment"
        description="Descubre el máximo lujo en el Caribe. Alquiler de yates, mansiones privadas y experiencias inolvidables en Cartagena y las Islas del Rosario."
        schema={websiteSchema}
      />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 md:py-20">
          
          {/* --- SECCIÓN DESTINOS --- */}
          <section className="mb-16 md:mb-24">
            <AnimateOnScroll animationType="zoom-in">
              <h2 className="text-3xl sm:text-5xl text-center text-white mb-8 md:mb-12 font-display">
                Enamórate de nuestros increíbles destinos
              </h2>
            </AnimateOnScroll>
            
            {/* 
               CONTENEDOR HÍBRIDO:
               Mobile: overflow-x-auto (scroll horizontal), snap-x
               Desktop: overflow-hidden, skew-x-5 (efecto inclinado)
            */}
            <div 
              className="flex w-full 
                         overflow-x-auto snap-x snap-mandatory gap-4 pb-4 
                         md:overflow-hidden md:gap-0 md:pb-0 md:transform md:skew-x-5"
              style={{ height: isMobile ? "60vh" : "75vmin" }}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              {featuredDestinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  // Mobile: ancho 85vw, snap-center. Desktop: flex dinámico.
                  className={`relative h-full rounded-2xl md:rounded-none overflow-hidden flex-shrink-0 
                              w-[85vw] snap-center 
                              md:w-auto md:border-r md:border-white/10 md:flex-shrink-1
                              ${index !== featuredDestinations.length - 1 ? 'md:mr-1' : ''}`}
                  style={{ flex: isMobile ? 'none' : 1 }}
                  animate={{
                    flexGrow: (!isMobile && hoveredIndex === index) ? 14 : 1,
                  }}
                  transition={transition}
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onClick={() => isMobile && setHoveredIndex(index)} // Opcional: interacción táctil
                >
                  <motion.img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                    // En móvil siempre color y brillo. En desktop solo al hover.
                    animate={{ 
                      filter: (isMobile || hoveredIndex === index) ? 'grayscale(0) brightness(1.1)' : 'grayscale(100%) brightness(0.7)' 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <motion.div
                    variants={headVariants}
                    // En móvil forzamos visualmente el estado 'hovered' o mantenemos 'initial' si ya lo configuramos bonito
                    initial="initial"
                    animate={(!isMobile && hoveredIndex === index) ? 'hovered' : 'initial'}
                    transition={transition}
                    className="overflow-hidden"
                  >
                    <motion.span variants={titleVariants} className="font-display tracking-wide">
                        {dest.name}
                    </motion.span>

                    <motion.div variants={buttonVariants}>
                        {/* REDIRIGE USANDO EL ID PARA FILTRAR */}
                        <Link to={`/services?destination=${dest.id}`}> 
                            <LiquidButton 
                              variant="secondary" 
                              className="!px-4 !py-2 !text-xs md:!text-sm border-white/40 hover:border-white text-white"
                            >
                                Ver detalles
                            </LiquidButton>
                        </Link>
                    </motion.div>

                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- Resto de secciones --- */}
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
      
      <div className="h-24 md:hidden" />
      <ServiceModal service={selectedService} onClose={handleCloseModal} />
    </>
  );
};

export default HomePage;