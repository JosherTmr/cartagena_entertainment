import React from 'react';
import GlassPanel from '../components/GlassPanel';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { companyInfo } from '../data/database';
import SeoManager from '../components/SeoManager';

/**
 * Componente para la página "Sobre Nosotros".
 *
 * Esta página muestra información detallada sobre la empresa, incluyendo:
 * - Nombre y descripción general.
 * - Misión y visión.
 * - La inspiración detrás de la marca.
 * - Los valores fundamentales de la compañía.
 *
 * Toda la información se obtiene del objeto `companyInfo` en `data/database.ts`.
 */
const AboutPage: React.FC = () => {
    
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": companyInfo.name,
        "url": "https://aistudio.google.com/app/project/fc483c65-7286-4e12-a16f-75b87c711202",
        "logo": "https://aistudio.google.com/app/project/fc483c65-7286-4e12-a16f-75b87c711202/Logo_CERP.png",
        "description": companyInfo.description,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+57-300-000-0000",
          "contactType": "customer service"
        },
        "sameAs": [
          companyInfo.socials.facebook,
          companyInfo.socials.instagram
        ]
      };

  return (
    <>
        <SeoManager
            title={`Sobre Nosotros | ${companyInfo.name}`}
            description={`Conoce la misión, visión y valores de ${companyInfo.name}, tus arquitectos de momentos inolvidables en el corazón del Caribe.`}
            schema={organizationSchema}
        />
        <div className="container mx-auto px-4 pb-16 sm:pb-24">
        {/* Sección de Encabezado */}
        <section className="text-center mb-16">
            <AnimateOnScroll>
            <h1 className="text-4xl sm:text-6xl text-white font-display">Sobre {companyInfo.name}</h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
                {companyInfo.description}
            </p>
            </AnimateOnScroll>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
            <AnimateOnScroll>
            <GlassPanel className="h-full interactive-panel">
                <i className="fas fa-bullseye text-4xl text-[var(--color-keppel)] mb-4"></i>
                <h2 className="text-2xl font-bold mb-3">Nuestra Misión</h2>
                <p className="text-white/70">{companyInfo.mission}</p>
            </GlassPanel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
            <GlassPanel className="h-full interactive-panel">
                <i className="fas fa-eye text-4xl text-[var(--color-keppel)] mb-4"></i>
                <h2 className="text-2xl font-bold mb-3">Nuestra Visión</h2>
                <p className="text-white/70">{companyInfo.vision}</p>
            </GlassPanel>
            </AnimateOnScroll>
        </section>
        
        <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <AnimateOnScroll delay={200}>
                <GlassPanel className="h-full interactive-panel">
                    <i className="fas fa-moon text-4xl text-[var(--color-keppel)] mb-4"></i>
                    <h2 className="text-2xl font-bold mb-3">Nuestra Inspiración</h2>
                    <p className="text-white/70">{companyInfo.inspiration}</p>
                </GlassPanel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={350}>
                <img 
                    src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Mujer con traje típico del Caribe, reflejando la inspiración cultural de la empresa." 
                    className="rounded-2xl shadow-lg w-full h-full object-cover" 
                    loading="lazy"
                    width="600"
                    height="400"
                />
            </AnimateOnScroll>
        </section>

        <section className="mt-16">
            <AnimateOnScroll>
            <h2 className="text-4xl font-bold text-center text-white mb-12">Valores que Nos Definen</h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {companyInfo.values.map((value, index) => (
                    <AnimateOnScroll key={value.title} delay={index * 100}>
                        <GlassPanel className="text-center h-full interactive-panel">
                            <i className={`${value.icon} text-4xl text-[var(--color-keppel)] mb-4`}></i>
                            <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                            <p className="text-white/70 text-sm">{value.description}</p>
                        </GlassPanel>
                    </AnimateOnScroll>
                ))}
            </div>
        </section>
        </div>
    </>
  );
};

export default AboutPage;