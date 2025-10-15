import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';
import GlassPanel from '../components/GlassPanel';
import { services, Service } from '../data/database';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import BookingBar from '../components/BookingBar';

const HomePage: React.FC = () => {
  const featuredServices = services.filter(s => s.featured).slice(0, 3);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const navigate = useNavigate();

  const handleSearch = (criteria: { destination: string; category: string; date: string }) => {
    const queryParams = new URLSearchParams();
    if (criteria.destination) {
        queryParams.set('destination', criteria.destination);
    }
    if (criteria.category) {
        queryParams.set('category', criteria.category);
    }
    if (criteria.date) {
        queryParams.set('date', criteria.date);
    }
    navigate(`/services?${queryParams.toString()}`);
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-32">
            <AnimateOnScroll>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Tu Aventura de Lujo <br /> en el Corazón del Caribe
                </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                    Descubre yates exclusivos, mansiones de ensueño y experiencias inolvidables diseñadas solo para ti.
                </p>
            </AnimateOnScroll>
        </section>
      </div>

      {/* Desktop Floating Sticky Bar */}
      <div className="hidden md:block sticky top-24 z-30 -mt-24 px-4">
        <AnimateOnScroll delay={400}>
            <BookingBar onSearch={handleSearch} />
        </AnimateOnScroll>
      </div>
      
      {/* Mobile Fixed Bar */}
      <div className="md:hidden">
        <BookingBar onSearch={handleSearch} />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Featured Services Section */}
        <section className="mb-24 mt-16 md:mt-20">
          <AnimateOnScroll>
            <h2 className="text-4xl font-bold text-center text-white mb-12">Servicios Destacados</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimateOnScroll key={service.id} delay={index * 150}>
                 <ServiceCard service={service} onSelect={handleSelectService} />
              </AnimateOnScroll>
            ))}
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section>
          <AnimateOnScroll>
            <h2 className="text-4xl font-bold text-center text-white mb-12">¿Por Qué Elegirnos?</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
              <AnimateOnScroll delay={0}>
                  <GlassPanel className="text-center">
                      <i className="fas fa-gem text-4xl text-[var(--color-keppel)] mb-4"></i>
                      <h3 className="text-xl font-bold mb-2">Exclusividad</h3>
                      <p className="text-white/70">Servicios y propiedades de lujo seleccionados para una experiencia única.</p>
                  </GlassPanel>
              </AnimateOnScroll>
              <AnimateOnScroll delay={150}>
                  <GlassPanel className="text-center">
                      <i className="fas fa-user-shield text-4xl text-[var(--color-keppel)] mb-4"></i>
                      <h3 className="text-xl font-bold mb-2">Privacidad y Seguridad</h3>
                      <p className="text-white/70">Máxima discreción y personal de seguridad para tu tranquilidad.</p>
                  </GlassPanel>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                  <GlassPanel className="text-center">
                      <i className="fas fa-concierge-bell text-4xl text-[var(--color-keppel)] mb-4"></i>
                      <h3 className="text-xl font-bold mb-2">Servicio Personalizado</h3>
                      <p className="text-white/70">Atención 24/7 y un equipo de concierge dedicado a tus deseos.</p>
                  </GlassPanel>
              </AnimateOnScroll>
          </div>
        </section>
      </div>
      
      {/* Spacer for the fixed mobile booking bar */}
      <div className="h-24 md:hidden" />

      <ServiceModal service={selectedService} onClose={handleCloseModal} />
    </>
  );
};

export default HomePage;