import React from 'react';
import GlassPanel from '../components/GlassPanel';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SeoManager from '../components/SeoManager';

/**
 * Componente para la página "Licencia de Turismo".
 *
 * Esta página muestra información sobre la licencia de turismo de la empresa,
 * destacando el compromiso con la legalidad, seguridad y calidad.
 */
const LicensePage: React.FC = () => {
  return (
    <>
      <SeoManager
        title="Licencia de Turismo - Seguridad y Confianza | Cartagena Entertainment"
        description="Operamos con licencia de turismo, garantizando servicios seguros, confiables y de alta calidad. Tu tranquilidad es nuestra prioridad en cada experiencia de lujo."
      />
      <div className="container mx-auto px-4 pb-16 sm:pb-24">
        {/* Sección de Encabezado */}
        <section className="text-center mb-12">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-6xl text-white font-display">Licencia de Turismo</h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
              En Cartagena Entertainment Rent and Pleasure, operamos bajo los más altos estándares de calidad y cumplimiento legal. Contamos con una Licencia de Turismo que respalda cada uno de nuestros servicios, garantizando que nuestras operaciones se realizan de manera ética, responsable y en conformidad con las regulaciones vigentes.
            </p>
          </AnimateOnScroll>
        </section>

        {/* Sección de Significado */}
        <section className="mb-16">
          <AnimateOnScroll>
            <h2 className="text-4xl sm:text-5xl text-center text-white mb-12 font-display">¿Qué significa nuestra Licencia para ti?</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
              <AnimateOnScroll>
                  <GlassPanel className="text-center h-full p-8 interactive-panel">
                      <i className="fas fa-shield-alt text-5xl text-[var(--color-keppel)] mb-6"></i>
                      <h3 className="text-2xl font-bold mb-3">Seguridad y Confianza</h3>
                      <p className="text-white/80">La licencia certifica que cumplimos con todos los requisitos legales, brindándote la tranquilidad de disfrutar de servicios seguros y confiables.</p>
                  </GlassPanel>
              </AnimateOnScroll>
              <AnimateOnScroll delay={150}>
                  <GlassPanel className="text-center h-full p-8 interactive-panel">
                      <i className="fas fa-balance-scale text-5xl text-[var(--color-keppel)] mb-6"></i>
                      <h3 className="text-2xl font-bold mb-3">Cumplimiento de Normas</h3>
                      <p className="text-white/80">Nos aseguramos de operar bajo las leyes y regulaciones del sector turístico, promoviendo prácticas responsables y sostenibles.</p>
                  </GlassPanel>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                  <GlassPanel className="text-center h-full p-8 interactive-panel">
                      <i className="fas fa-check-circle text-5xl text-[var(--color-keppel)] mb-6"></i>
                      <h3 className="text-2xl font-bold mb-3">Calidad Garantizada</h3>
                      <p className="text-white/80">Nuestro compromiso con la excelencia está respaldado por certificaciones que avalan la calidad de nuestras experiencias.</p>
                  </GlassPanel>
              </AnimateOnScroll>
          </div>
        </section>

        {/* Sección de Importancia */}
        <section className="mb-16">
            <AnimateOnScroll>
              <h2 className="text-4xl sm:text-5xl text-center text-white mb-12 font-display">¿Por qué elegir una empresa con Licencia?</h2>
            </AnimateOnScroll>
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                <AnimateOnScroll className="h-full">
                    <img 
                      src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Persona firmando un documento, simbolizando la legalidad y el turismo responsable." 
                      className="rounded-2xl shadow-lg w-full h-full object-cover" 
                      loading="lazy"
                      width="600"
                      height="400" 
                      />
                </AnimateOnScroll>
                <div className="grid grid-rows-3 gap-8">
                    <AnimateOnScroll delay={100}>
                        <GlassPanel className="h-full flex items-center p-6 interactive-panel">
                            <i className="fas fa-user-check text-4xl text-[var(--color-keppel)] mr-6"></i>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-white">Protección al Cliente</h3>
                                <p className="text-white/80">Te asegura que estás contratando servicios con una empresa legítima y profesional.</p>
                            </div>
                        </GlassPanel>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                        <GlassPanel className="h-full flex items-center p-6 interactive-panel">
                            <i className="fas fa-leaf text-4xl text-[var(--color-keppel)] mr-6"></i>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-white">Experiencias Responsables</h3>
                                <p className="text-white/80">Promovemos un turismo ético, respetando el entorno, las comunidades locales y la cultura.</p>
                            </div>
                        </GlassPanel>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={300}>
                        <GlassPanel className="h-full flex items-center p-6 interactive-panel">
                             <i className="fas fa-handshake text-4xl text-[var(--color-keppel)] mr-6"></i>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-white">Transparencia</h3>
                                <p className="text-white/80">Operamos con claridad y honestidad en cada uno de nuestros servicios.</p>
                            </div>
                        </GlassPanel>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>

        {/* Sección de Compromiso */}
        <section className="mb-16">
          <AnimateOnScroll>
            <h2 className="text-4xl sm:text-5xl text-center text-white mb-12 font-display">Nuestro Compromiso</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll>
              <GlassPanel className="h-full p-6 text-center interactive-panel">
                <i className="fas fa-seedling text-4xl text-[var(--color-keppel)] mb-4"></i>
                <p className="text-lg text-white/90">Fomentar el desarrollo sostenible del turismo en la región.</p>
              </GlassPanel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <GlassPanel className="h-full p-6 text-center interactive-panel">
                <i className="fas fa-globe-americas text-4xl text-[var(--color-keppel)] mb-4"></i>
                <p className="text-lg text-white/90">Respetar y preservar el entorno natural y cultural del Caribe.</p>
              </GlassPanel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <GlassPanel className="h-full p-6 text-center interactive-panel">
                <i className="fas fa-star text-4xl text-[var(--color-keppel)] mb-4"></i>
                <p className="text-lg text-white/90">Ofrecer a nuestros clientes experiencias únicas, seguras y memorables.</p>
              </GlassPanel>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección de Cierre */}
        <section className="text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl text-white font-display">Viaja con Confianza y Tranquilidad</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
              Nuestra Licencia de Turismo es un reflejo de nuestra dedicación a la calidad, la seguridad y la responsabilidad. Al elegirnos, puedes estar seguro de que cada detalle de tu experiencia ha sido cuidadosamente planificado para superar tus expectativas.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
              <p className="mt-6 text-xl text-white">
                  ¡Contáctanos y descubre por qué somos la elección confiable para vivir el lujo y la exclusividad en el Caribe!
              </p>
          </AnimateOnScroll>
        </section>
      </div>
    </>
  );
};

export default LicensePage;