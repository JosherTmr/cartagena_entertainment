import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { services, destinations, Service } from '../data/database';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';

const ServicesPage: React.FC = () => {
    const location = useLocation();
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const { filteredServices, title, description } = useMemo(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');
        const destinationId = queryParams.get('destination');

        let servicesToShow = [...services];
        let newTitle = "Todos Nuestros Servicios";
        let newDescription = "Explora la gama completa de experiencias de lujo que hemos curado para ti.";
        
        if (destinationId) {
            const destination = destinations.find(d => d.id === destinationId);
            if (destination) {
                const availableServiceIds = new Set(destination.seasonality.allYear);
                // Simple check, not accounting for date ranges yet as it's complex without a date picker state here
                destination.seasonality.specialSeasons.forEach(ss => {
                    ss.specificServices.forEach(id => availableServiceIds.add(id));
                });
                servicesToShow = services.filter(s => availableServiceIds.has(s.id));
                newTitle = `Servicios en ${destination.name}`;
                newDescription = `Descubre las mejores experiencias disponibles en ${destination.name}.`;
            }
        }

        if (category) {
            servicesToShow = servicesToShow.filter(s => s.category === category);
            // If we are already filtered by destination, we don't overwrite the title
            if (!destinationId) {
                newTitle = `Servicios de ${category}`;
                newDescription = `Explora nuestros servicios exclusivos en la categoría de ${category}.`;
            }
        }
        
        return {
            filteredServices: servicesToShow,
            title: newTitle,
            description: newDescription
        };
    }, [location.search]);

    // Effect to scroll to top when filters change
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
        <div className="container mx-auto px-4 pb-16 sm:pb-24">
            <section className="text-center mb-16">
                <AnimateOnScroll>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">{title}</h1>
                </AnimateOnScroll>
                <AnimateOnScroll delay={200}>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                        {description}
                    </p>
                </AnimateOnScroll>
            </section>

            <section>
                {filteredServices.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service, index) => (
                            <AnimateOnScroll key={service.id} delay={index * 100}>
                                <ServiceCard service={service} onSelect={handleSelectService} />
                            </AnimateOnScroll>
                        ))}
                    </div>
                ) : (
                    <AnimateOnScroll>
                        <div className="text-center py-16">
                            <i className="fas fa-search text-5xl text-[var(--color-keppel)] mb-4"></i>
                            <h3 className="text-2xl font-semibold text-white">No se encontraron servicios</h3>
                            <p className="text-white/70 mt-2">Intenta ajustar tus filtros de búsqueda para encontrar la experiencia perfecta.</p>
                        </div>
                    </AnimateOnScroll>
                )}
            </section>
            
            <ServiceModal service={selectedService} onClose={handleCloseModal} />
        </div>
    );
};

export default ServicesPage;