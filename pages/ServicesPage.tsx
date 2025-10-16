import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { services, destinations, Service } from '../data/database';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import BookingBar from '../components/BookingBar';

/**
 * Componente para la página de visualización de servicios.
 *
 * Esta página muestra una lista de servicios que puede ser filtrada mediante
 * parámetros en la URL (`?category=...` o `?destination=...`).
 * Utiliza `useMemo` para calcular eficientemente los servicios a mostrar
 * cada vez que cambian los parámetros de búsqueda.
 */
const ServicesPage: React.FC = () => {
    // --- Hooks ---
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    /**
     * @property {Service[]} filteredServices - La lista de servicios filtrada según la URL.
     * @property {string} title - El título a mostrar en la página, dinámico según el filtro.
     * @property {string} description - La descripción que acompaña al título.
     */
    const { filteredServices, title, description } = useMemo(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');
        const destinationId = queryParams.get('destination');

        let servicesToShow = [...services];
        let newTitle = "Todos Nuestros Servicios";
        let newDescription = "Explora la gama completa de experiencias de lujo que hemos curado para ti.";
        
        // Filtrar por destino si se proporciona el parámetro 'destination'
        if (destinationId) {
            const destination = destinations.find(d => d.id === destinationId);
            if (destination) {
                const availableServiceIds = new Set(destination.seasonality.allYear);
                // NOTA: La lógica de temporadas especiales es simplificada.
                destination.seasonality.specialSeasons.forEach(ss => {
                    ss.specificServices.forEach(id => availableServiceIds.add(id));
                });
                servicesToShow = services.filter(s => availableServiceIds.has(s.id));
                newTitle = `Servicios en ${destination.name}`;
                newDescription = `Descubre las mejores experiencias disponibles en ${destination.name}.`;
            }
        }

        // Filtrar adicionalmente por categoría si se proporciona
        if (category) {
            servicesToShow = servicesToShow.filter(s => s.category === category);
            if (!destinationId) { // Solo sobrescribir el título si no hay un filtro de destino
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

    // Efecto para hacer scroll hacia arriba cuando cambian los filtros.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.search]);

    /**
     * Abre el modal con los detalles del servicio seleccionado.
     * @param service - El servicio a mostrar.
     */
    const handleSelectService = (service: Service) => {
        setSelectedService(service);
    };

    /**
     * Cierra el modal de detalles del servicio.
     */
    const handleCloseModal = () => {
        setSelectedService(null);
    };
    
    /**
     * Maneja una nueva búsqueda desde el BookingBar, actualizando la URL.
     * @param criteria - Los nuevos criterios de búsqueda.
     */
    const handleSearch = (criteria: { destination: string; category: string; date: string }) => {
        const queryParams = new URLSearchParams();
        if (criteria.destination) queryParams.set('destination', criteria.destination);
        if (criteria.category) queryParams.set('category', criteria.category);
        if (criteria.date) queryParams.set('date', criteria.date);
        navigate(`?${queryParams.toString()}`);
    };

    return (
        <>
            {/* Desktop Floating Sticky Bar */}
            <div className="hidden md:block sticky top-24 z-30 py-4">
                <div className="container mx-auto px-4">
                    <BookingBar onSearch={handleSearch} />
                </div>
            </div>
            
             {/* Mobile Fixed Bar */}
            <div className="md:hidden">
                <BookingBar onSearch={handleSearch} />
            </div>

            <div className="container mx-auto px-4 pt-16 pb-16 sm:pb-24">
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
                
                {/* Spacer for the fixed mobile booking bar */}
                <div className="h-24 md:hidden" />
                
                <ServiceModal service={selectedService} onClose={handleCloseModal} />
            </div>
        </>
    );
};

export default ServicesPage;