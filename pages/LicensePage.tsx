import React from 'react';
import GlassPanel from '../components/GlassPanel';
import AnimateOnScroll from '../components/AnimateOnScroll';

/**
 * Componente para la página "Licencia de Turismo".
 *
 * Esta página muestra información sobre la licencia de turismo de la empresa,
 * destacando el compromiso con la legalidad, seguridad y calidad.
 */
const LicensePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-16 sm:pb-24">
      {/* Sección de Encabezado */}
      <section className="text-center mb-12">
        <AnimateOnScroll>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">Licencia de Turismo</h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
            En Cartagena Entertainment Rent and Pleasure, operamos bajo los más altos estándares de calidad y cumplimiento legal. Contamos con una Licencia de Turismo que respalda cada uno de nuestros servicios, garantizando que nuestras operaciones se realizan de manera ética, responsable y en conformidad con las regulaciones vigentes.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Sección de Significado */}
      <AnimateOnScroll>
        <GlassPanel className="mb-12">
            <h2 className="text-3xl font-bold text-center text-white mb-8">¿Qué significa nuestra Licencia de Turismo para ti?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <i className="fas fa-shield-alt text-4xl text-[var(--color-keppel)] mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Seguridad y Confianza</h3>
                    <p className="text-white/70">La licencia certifica que cumplimos con todos los requisitos legales, brindándote la tranquilidad de disfrutar de servicios seguros y confiables.</p>
                </div>
                <div>
                    <i className="fas fa-balance-scale text-4xl text-[var(--color-keppel)] mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Cumplimiento de Normas</h3>
                    <p className="text-white/70">Nos aseguramos de operar bajo las leyes y regulaciones del sector turístico, promoviendo prácticas responsables y sostenibles.</p>
                </div>
                <div>
                    <i className="fas fa-check-circle text-4xl text-[var(--color-keppel)] mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
                    <p className="text-white/70">Nuestro compromiso con la excelencia está respaldado por certificaciones que avalan la calidad de nuestras experiencias.</p>
                </div>
            </div>
        </GlassPanel>
      </AnimateOnScroll>

      {/* Sección de Importancia */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <AnimateOnScroll>
            <img src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Turismo Responsable" className="rounded-2xl shadow-lg w-full h-full object-cover" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={150}>
          <GlassPanel className="h-full">
            <h2 className="text-2xl font-bold mb-4">¿Por qué es importante elegir una empresa con Licencia de Turismo?</h2>
            <ul className="space-y-4 text-white/80">
                <li className="flex items-start"><i className="fas fa-user-check text-[var(--color-keppel)] mt-1 mr-3"></i><span><strong className="text-white">Protección al Cliente:</strong> Te asegura que estás contratando servicios con una empresa legítima y profesional.</span></li>
                <li className="flex items-start"><i className="fas fa-leaf text-[var(--color-keppel)] mt-1 mr-3"></i><span><strong className="text-white">Experiencias Responsables:</strong> Promovemos un turismo ético, respetando el entorno, las comunidades locales y la cultura de la región.</span></li>
                <li className="flex items-start"><i className="fas fa-handshake text-[var(--color-keppel)] mt-1 mr-3"></i><span><strong className="text-white">Transparencia:</strong> Operamos con claridad y honestidad en cada uno de nuestros servicios, desde la reserva hasta la entrega final de la experiencia.</span></li>
            </ul>
          </GlassPanel>
        </AnimateOnScroll>
      </section>

      {/* Sección de Compromiso */}
      <AnimateOnScroll>
        <GlassPanel className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Nuestro Compromiso</h2>
            <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-center text-left bg-white/5 p-4 rounded-lg"><i className="fas fa-seedling text-3xl text-[var(--color-keppel)] mr-4"></i><p>Fomentar el desarrollo sostenible del turismo en la región.</p></div>
                <div className="flex items-center text-left bg-white/5 p-4 rounded-lg"><i className="fas fa-globe-americas text-3xl text-[var(--color-keppel)] mr-4"></i><p>Respetar y preservar el entorno natural y cultural del Caribe.</p></div>
                <div className="flex items-center text-left bg-white/5 p-4 rounded-lg"><i className="fas fa-star text-3xl text-[var(--color-keppel)] mr-4"></i><p>Ofrecer a nuestros clientes experiencias únicas, seguras y memorables, siempre respaldadas por nuestro cumplimiento legal.</p></div>
            </div>
        </GlassPanel>
      </AnimateOnScroll>

      {/* Sección de Cierre */}
      <section className="text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-white">Viaja con Confianza y Tranquilidad</h2>
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
  );
};

export default LicensePage;