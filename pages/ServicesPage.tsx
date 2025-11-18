import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { services, destinations, Service, Destination } from '../data/database';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import SeoManager from '../components/SeoManager';
import { companyInfo } from '../data/database';

const ServicesPage: React.FC = () => {
    const location = useLocation();
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    // --- LÓGICA DE FILTRADO ---
    const { filteredServices, title, description, activeDestination } = useMemo(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');
        const destinationId = queryParams.get('destination');

        let servicesToShow = [...services];
        let newTitle = "Todos Nuestros Servicios";
        let newDescription = "Explora la gama completa de experiencias de lujo que hemos curado para ti en el Caribe.";
        let currentDest: Destination | undefined = undefined;
        
        if (destinationId) {
            currentDest = destinations.find(d => d.id === destinationId);
            if (currentDest) {
                const availableServiceIds = new Set<string>();
                if (currentDest.seasonality?.allYear) {
                    currentDest.seasonality.allYear.forEach(id => availableServiceIds.add(id));
                }
                if (currentDest.seasonality?.specialSeasons) {
                    currentDest.seasonality.specialSeasons.forEach(season => {
                        season.specificServices.forEach(id => availableServiceIds.add(id));
                    });
                }
                servicesToShow = services.filter(s => availableServiceIds.has(s.id));
                newTitle = `Servicios en ${currentDest.name}`;
                newDescription = `Descubre las mejores experiencias de lujo y alquileres disponibles en ${currentDest.name}, Cartagena.`;
            }
        }

        if (category) {
            servicesToShow = servicesToShow.filter(s => s.category === category);
            if (!destinationId) { 
                newTitle = `Servicios de ${category}`;
                newDescription = `Explora nuestros servicios exclusivos en la categoría de ${category}.`;
            } else {
                 newTitle = `${category} en ${currentDest?.name || 'Cartagena'}`;
            }
        }
        
        return {
            filteredServices: servicesToShow,
            title: newTitle,
            description: newDescription,
            activeDestination: currentDest
        };
    }, [location.search]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.search]);

    const handleSelectService = (service: Service) => {
        setSelectedService(service);
    };
    const handleCloseModal = () => {
        setSelectedService(null);
    };
    
    return (
        <>
            <SeoManager 
                title={`${title} | ${companyInfo.name}`}
                description={description}
            />
            
            {/* --- HERO HEADER RESPONSIVO --- */}
            <div className="relative w-full">
                {activeDestination ? (
                    // ALTURA: h-[50vh] en móvil, h-[60vh] en desktop
                    <div className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center mb-12 md:mb-16 overflow-hidden">
                        
                        {/* IMAGEN + KEN BURNS */}
                        <div className="absolute inset-0 w-full h-full">
                             <motion.img 
                                src={activeDestination.image} 
                                alt={activeDestination.name} 
                                className="w-full h-full object-cover object-center"
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.1 }}
                                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                             />
                             {/* GRADIENTE SUAVE */}
                             <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent via-black/40 to-[#211916]" />
                             <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" /> 
                        </div>

                        {/* TEXTO */}
                        <div className="relative z-10 container mx-auto px-4 text-center pt-16 md:pt-10">
                            <AnimateOnScroll animationType="zoom-in">
                                {/* TIPOGRAFÍA RESPONSIVA */}
                                <h1 className="text-4xl sm:text-6xl md:text-8xl text-white font-display drop-shadow-2xl mb-4 md:mb-6 tracking-tight leading-tight">
                                    {title}
                                </h1>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll delay={200} animationType="fade-up">
                                <div className="w-16 md:w-24 h-1 bg-[var(--color-keppel)] mx-auto mb-4 md:mb-6 rounded-full opacity-80 shadow-[0_0_10px_var(--color-keppel)]"></div>
                                <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-white/90 font-light drop-shadow-lg leading-relaxed px-2">
                                    {description}
                                </p>
                            </AnimateOnScroll>
                        </div>
                    </div>
                ) : (
                    // HEADER ESTÁNDAR
                    <div className="container mx-auto px-4 pt-24 pb-8 md:pt-32 md:pb-12 text-center relative">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[var(--color-keppel)]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

                         <AnimateOnScroll animationType="fade">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-display mb-4 md:mb-6">{title}</h1>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={200} animationType="fade">
                             <div className="w-16 h-1 bg-white/20 mx-auto mb-6 rounded-full"></div>
                            <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed">
                                {description}
                            </p>
                        </AnimateOnScroll>
                    </div>
                )}
            </div>

            <div className="container mx-auto px-4 pb-20">
                <section className="relative z-20"> 
                    {filteredServices.length > 0 ? (
                        // GRILLA RESPONSIVA: 1 col (móvil) -> 3 cols (desktop)
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {filteredServices.map((service, index) => (
                                <AnimateOnScroll key={service.id} delay={index * 100} animationType="fade-up">
                                    <ServiceCard service={service} onSelect={handleSelectService} />
                                </AnimateOnScroll>
                            ))} 
                        </div>
                    ) : (
                        <AnimateOnScroll animationType="fade">
                            <div className="text-center py-20 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
                                <div className="w-20 h-20 bg-[var(--color-keppel)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-search text-3xl text-[var(--color-keppel)]"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">No se encontraron servicios</h3>
                                <p className="text-white/60 px-6">
                                    No hay servicios disponibles para esta selección en este momento. Intenta con otro destino.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    )}
                </section>
                
                <div className="h-24 md:hidden" />
                <ServiceModal service={selectedService} onClose={handleCloseModal} />
            </div>
        </>
    );
};

export default ServicesPage;