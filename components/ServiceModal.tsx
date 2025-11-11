import React, { useState, useEffect, useRef } from 'react';
import { Service } from '../data/database';
import GlassPanel from './GlassPanel';
import GlassButton from './GlassButton';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'experience' | 'includes'>('experience');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Cuando el servicio cambia, reseteamos el estado de la imagen
    // y comprobamos si la nueva imagen ya está en caché.
    if (service && imgRef.current?.complete) {
      setImageLoaded(true);
    } else {
      setImageLoaded(false);
    }
  }, [service]);

  if (!service) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola! Estoy interesado en: ${service.title}`);
    window.open(`https://wa.me/573000000000?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Contenedor del modal con altura máxima y centrado vertical */}
      <div className="w-full max-w-4xl my-auto animate-fade-in-up max-h-[calc(100vh-4rem)] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <GlassPanel className="relative overflow-hidden flex-1 flex flex-col" hasPadding={false}>
          {/* Botón para cerrar, con z-index alto para estar por encima de otros elementos */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Cerrar"
          >
            <i className="fas fa-times text-xl"></i>
          </button>

          {/* Área de contenido desplazable */}
          <div className="overflow-y-auto">
            {/* Hero Image con Overlay Gradient */}
            <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#211916] z-10 transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
              <img 
                ref={imgRef}
                src={service.image}
                alt={service.title}
                className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Floating Icon Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-br from-[#59b4a3] to-[#57aa80] text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-2xl z-20 animate-float">
                <i className={service.icon}></i>
              </div>
            </div>

            {/* Sección de Contenido Principal */}
            <div className="p-6 pt-6 space-y-6">
              {/* Título y Categoría */}
              <div>
                <span className="inline-block px-3 py-1 bg-[#59b4a3]/20 text-[#adedcb] text-sm font-semibold rounded-full mb-3">
                  {service.category}
                </span>
                <h2 className="text-4xl font-bold text-white mb-3 font-display">
                  {service.title}
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Lifestyle Focus */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#59b4a3]/20 to-[#57aa80]/20 border-l-4 border-[#59b4a3] p-5">
                <div className="absolute top-0 right-0 text-8xl text-white/5">
                  <i className="fas fa-quote-right"></i>
                </div>
                <p className="text-xl italic text-white font-light relative z-10">
                  "{service.lifestyleFocus}"
                </p>
              </div>

              {/* Puntos Destacados de la Experiencia */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {(service.highlights || []).map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 hover:bg-white/10 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 border border-white/10"
                  >
                    <i className={`fas ${item.icon} text-2xl text-[#59b4a3] mb-2`}></i>
                    <p className="text-white/90 text-sm font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Sección de Pestañas */}
              <div>
                <div className="flex gap-2 border-b border-white/10 mb-4">
                  <button
                    onClick={() => setActiveTab('experience')}
                    className={`px-6 py-3 font-semibold transition-all duration-300 border-b-2 ${
                      activeTab === 'experience'
                        ? 'border-[#59b4a3] text-white'
                        : 'border-transparent text-white/50 hover:text-white/80'
                    }`}
                  >
                    La Experiencia
                  </button>
                  <button
                    onClick={() => setActiveTab('includes')}
                    className={`px-6 py-3 font-semibold transition-all duration-300 border-b-2 ${
                      activeTab === 'includes'
                        ? 'border-[#59b4a3] text-white'
                        : 'border-transparent text-white/50 hover:text-white/80'
                    }`}
                  >
                    Qué Incluye
                  </button>
                </div>

                {/* Contenido de las Pestañas */}
                <div className="min-h-[200px]">
                  {activeTab === 'experience' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="text-[#59b4a3] font-semibold flex items-center gap-2">
                            <i className="fas fa-map-marked-alt"></i>
                            Itinerario Sugerido
                          </h4>
                          <ul className="space-y-2 text-white/80">
                            <li className="flex items-start gap-3">
                              <span className="text-[#59b4a3] mt-1">•</span>
                              <span>Recogida en su hotel o punto de encuentro</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-[#59b4a3] mt-1">•</span>
                              <span>Navegación por aguas cristalinas del Caribe</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-[#59b4a3] mt-1">•</span>
                              <span>Paradas en destinos exclusivos a su elección</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-[#59b4a3] mt-1">•</span>
                              <span>Experiencias personalizadas según sus deseos</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-[#59b4a3] font-semibold flex items-center gap-2">
                            <i className="fas fa-magic"></i>
                            Personalización Total
                          </h4>
                          <p className="text-white/80 leading-relaxed">
                            Cada detalle es diseñado a su medida. Desde el menú gourmet hasta la música ambiente, 
                            nuestro equipo de concierge orquesta una experiencia que refleja su estilo único.
                          </p>
                          <div className="bg-[#59b4a3]/10 rounded-lg p-3 border border-[#59b4a3]/30">
                            <p className="text-sm text-white/90 italic">
                              <i className="fas fa-lightbulb text-[#59b4a3] mr-2"></i>
                              Agregue: Chef privado, fotógrafo profesional o decoración temática
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'includes' && (
                    <div className="animate-fade-in">
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-3"> 
                        {(service.inclusions || []).map((item, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                          >
                            <div className="w-6 h-6 rounded-full bg-[#59b4a3]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#59b4a3]/40 transition-colors">
                              <i className="fas fa-check text-[#59b4a3] text-sm"></i>
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-gradient-to-r from-[#59b4a3]/10 to-transparent rounded-lg border-l-2 border-[#59b4a3]">
                        <p className="text-white/80 text-sm">
                          <i className="fas fa-info-circle text-[#59b4a3] mr-2"></i>
                          Servicios adicionales disponibles bajo solicitud: catering gourmet, fotografía profesional, 
                          decoración personalizada y más.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              {service.tags && service.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 text-white/70 text-sm rounded-full border border-white/10 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Pie de página fijo con el CTA */}
          <div className="p-6 bg-gradient-to-t from-[#211916] via-[#211916]/95 to-transparent backdrop-blur-sm border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-white/60 text-sm mb-1">¿Listo para vivir esta experiencia?</p>
                <p className="text-white font-semibold text-lg">
                  Contáctanos y diseñemos tu momento perfecto
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <GlassButton
                  onClick={handleWhatsAppClick}
                  variant="primary"
                  className="flex-1 md:flex-initial px-8 py-4 rounded-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <i className="fab fa-whatsapp text-xl"></i>
                    Consultar por WhatsApp
                  </span>
                </GlassButton>
              </div>
            </div>
            <p className="text-center text-white/40 text-xs mt-3">
              <i className="fas fa-clock mr-1"></i>
              Respuesta en menos de 1 hora • Disponible 24/7
            </p>
          </div>
        </GlassPanel>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Estilos para la barra de desplazamiento personalizada */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #59b4a3 #211916;
        }
        
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #211916;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #59b4a3;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ServiceModal;
