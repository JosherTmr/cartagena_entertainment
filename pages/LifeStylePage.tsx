import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassPanel from '../components/GlassPanel';
import AnimateOnScroll from '../components/AnimateOnScroll';
import GlassButton from '../components/GlassButton';
import { companyInfo } from '../data/database';
import SeoManager from '../components/SeoManager';

const StarRating = ({ rating, className = '' }: { rating: number; className?: string }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-400"></i>);
        } else {
            stars.push(<i key={i} className="far fa-star text-yellow-400"></i>);
        }
    }
    return <div className={`flex items-center gap-1 ${className}`}>{stars}</div>;
};

const LifestylePage: React.FC = () => {
    const navigate = useNavigate();
    const { lifestyle, socials } = companyInfo;

    return (
        <>
            <SeoManager
                title="Estilo de Vida de Lujo en el Caribe | Cartagena Entertainment"
                description="Descubre el estilo de vida que ofrecemos a través de momentos exclusivos, reseñas de huéspedes y la arquitectura de experiencias únicas. Vive el lujo en cada detalle."
            />
            <div className="container mx-auto px-4 py-20">
                {/* Header Section */}
                <section className="text-center mb-20">
                    <AnimateOnScroll animationType="zoom-in">
                        <h1 className="text-4xl sm:text-6xl text-white font-display">Un Estilo de Vida, No Solo un Viaje</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200} animationType="fade-up">
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
                            Somos arquitectos de momentos inolvidables. Descubre cómo curamos cada detalle para ofrecerte una experiencia que trasciende lo convencional y se convierte en un recuerdo para toda la vida.
                        </p>
                    </AnimateOnScroll>
                </section>
                
                {/* Google Score Section */}
                <section className="mb-20">
                     <AnimateOnScroll animationType="zoom-in">
                        <GlassPanel className="max-w-md mx-auto interactive-panel">
                            <div className="flex flex-col items-center text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">Puntuación Global</h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl font-bold text-[var(--color-keppel)]">{lifestyle.googleScore.rating}</span>
                                    <div className="text-left">
                                        <StarRating rating={lifestyle.googleScore.rating} className="text-xl" />
                                        <p className="text-white/70 text-sm">Basado en {lifestyle.googleScore.reviewCount} Reseñas</p>
                                    </div>
                                </div>
                            </div>
                        </GlassPanel>
                     </AnimateOnScroll>
                </section>

                {/* Instagram Section */}
                <section className="mb-20">
                    <AnimateOnScroll animationType="zoom-in">
                        <h2 className="text-4xl sm:text-5xl text-center text-white mb-12 font-display">Momentos Exclusivos</h2>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {lifestyle.instagramPosts.map((post, index) => (
                            <AnimateOnScroll key={post.id} delay={index * 150} animationType="fade-up">
                                 <a href={post.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir publicación de Instagram: ${post.caption}`} className="block group relative overflow-hidden rounded-2xl shadow-lg interactive-panel !transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-keppel)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">
                                    <img 
                                        src={post.image} 
                                        alt={post.caption} 
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
                                        width="400"
                                        height="320"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white text-sm">{post.caption}</p>
                                    </div>
                                    <i className="fab fa-instagram absolute top-4 right-4 text-white text-2xl drop-shadow-lg"></i>
                                </a>
                            </AnimateOnScroll>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <AnimateOnScroll delay={300} animationType="fade-up">
                             <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Ver nuestro Instagram" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-keppel)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)] rounded">
                                <GlassButton variant="secondary">
                                    <i className="fab fa-instagram mr-2"></i> Síguenos en Instagram
                                </GlassButton>
                            </a>
                        </AnimateOnScroll>
                    </div>
                </section>

                 {/* Google Reviews Section */}
                <section className="mb-20">
                    <AnimateOnScroll animationType="zoom-in">
                        <h2 className="text-4xl sm:text-5xl text-center text-white mb-12 font-display">Lo que Dicen Nuestros Huéspedes</h2>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-3 gap-8">
                        {lifestyle.googleReviews.map((review, index) => (
                            <AnimateOnScroll key={index} delay={index * 150} animationType="fade-up">
                                <GlassPanel className="h-full flex flex-col interactive-panel">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-bold text-lg">{review.author}</h4>
                                            <StarRating rating={review.rating} />
                                        </div>
                                    </div>
                                    <p className="text-white/70 italic flex-grow">"{review.text}"</p>
                                </GlassPanel>
                            </AnimateOnScroll>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <AnimateOnScroll delay={300} animationType="fade-up">
                             <a href={socials.googleReviews} target="_blank" rel="noopener noreferrer">
                                <GlassButton variant="secondary">
                                    Ver Todas las Reseñas
                                </GlassButton>
                            </a>
                        </AnimateOnScroll>
                    </div>
                </section>

                 {/* Facebook Section */}
                <section className="mb-20">
                    <AnimateOnScroll animationType="zoom-in">
                        <h2 className="text-4xl sm:text-5xl text-center text-white mb-12 font-display">El Detalle del Lujo</h2>
                    </AnimateOnScroll>
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {lifestyle.facebookPosts.map((post, index) => (
                             <AnimateOnScroll key={post.id} delay={index * 150} animationType="fade-up">
                                 <a href={post.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir publicación de Facebook: ${post.caption}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-keppel)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)] rounded">
                                    <GlassPanel hasPadding={false} className="overflow-hidden h-full flex flex-col group interactive-panel">
                                         <div className="relative">
                                            <img 
                                                src={post.image} 
                                                alt={post.caption} 
                                                 className="w-full h-40 sm:h-56 object-cover"
                                                width="400"
                                                height="224"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                            <i className="fab fa-facebook-f absolute top-4 right-4 text-white text-2xl drop-shadow-lg"></i>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-white/80">{post.caption}</p>
                                        </div>
                                    </GlassPanel>
                                 </a>
                             </AnimateOnScroll>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <AnimateOnScroll delay={300} animationType="fade-up">
                             <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Ver nuestro Facebook" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-keppel)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)] rounded">
                                <GlassButton variant="secondary">
                                    <i className="fab fa-facebook-f mr-2"></i> Ver más en Facebook
                                </GlassButton>
                            </a>
                        </AnimateOnScroll>
                    </div>
                </section>


                 {/* Architecture of Moments Section */}
                <section className="mb-20">
                    <AnimateOnScroll animationType="zoom-in">
                        <h2 className="text-4xl sm:text-5xl text-center text-white mb-12 font-display">Arquitectura de Momentos</h2>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-3 gap-8">
                        <AnimateOnScroll animationType="slide-in-left">
                            <GlassPanel className="text-center h-full p-8 interactive-panel">
                                <i className="fas fa-utensils text-5xl text-[var(--color-keppel)] mb-6"></i>
                                <h3 className="text-2xl font-bold mb-3">Gastronomía Exclusiva</h3>
                                <p className="text-white/80">Chef privado y abastecimiento gourmet para paladares exigentes.</p>
                            </GlassPanel>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={150} animationType="fade-up">
                             <GlassPanel className="text-center h-full p-8 interactive-panel">
                                <i className="fas fa-helicopter text-5xl text-[var(--color-keppel)] mb-6"></i>
                                <h3 className="text-2xl font-bold mb-3">Movilidad VIP</h3>
                                <p className="text-white/80">Yates, helicópteros y traslados de lujo para una movilidad sin límites.</p>
                            </GlassPanel>
                        </AnimateOnScroll>
                         <AnimateOnScroll delay={300} animationType="slide-in-right">
                             <GlassPanel className="text-center h-full p-8 interactive-panel">
                                <i className="fas fa-concierge-bell text-5xl text-[var(--color-keppel)] mb-6"></i>
                                <h3 className="text-2xl font-bold mb-3">Conserjería 24/7</h3>
                                <p className="text-white/80">Soporte personalizado para cada detalle y capricho de tu estadía.</p>
                            </GlassPanel>
                        </AnimateOnScroll>
                    </div>
                </section>
                
                {/* Final CTA */}
                <section className="text-center mt-20">
                     <AnimateOnScroll animationType="zoom-in">
                         <GlassButton variant="primary" className="px-10 py-4 text-lg" onClick={() => navigate('/services')}>
                            Vive el Estilo de Vida. ¡Reserva Ahora!
                        </GlassButton>
                     </AnimateOnScroll>
                </section>

            </div>
        </>
    );
};

export default LifestylePage;