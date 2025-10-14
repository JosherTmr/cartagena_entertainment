import React from 'react';
import GlassPanel from '../components/GlassPanel';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { companyInfo } from '../data/database';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-16 sm:pb-24">
      <section className="text-center mb-16">
        <AnimateOnScroll>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">Sobre {companyInfo.name}</h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
            {companyInfo.description}
          </p>
        </AnimateOnScroll>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
        <AnimateOnScroll>
          <GlassPanel className="h-full">
            <i className="fas fa-bullseye text-4xl text-[var(--color-keppel)] mb-4"></i>
            <h2 className="text-2xl font-bold mb-3">Nuestra Misión</h2>
            <p className="text-white/70">{companyInfo.mission}</p>
          </GlassPanel>
        </AnimateOnScroll>
        <AnimateOnScroll delay={150}>
          <GlassPanel className="h-full">
            <i className="fas fa-eye text-4xl text-[var(--color-keppel)] mb-4"></i>
            <h2 className="text-2xl font-bold mb-3">Nuestra Visión</h2>
            <p className="text-white/70">{companyInfo.vision}</p>
          </GlassPanel>
        </AnimateOnScroll>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <AnimateOnScroll delay={200}>
            <GlassPanel className="h-full">
                <i className="fas fa-moon text-4xl text-[var(--color-keppel)] mb-4"></i>
                <h2 className="text-2xl font-bold mb-3">Nuestra Inspiración</h2>
                <p className="text-white/70">{companyInfo.inspiration}</p>
            </GlassPanel>
        </AnimateOnScroll>
         <AnimateOnScroll delay={350}>
            <img src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Inspiración Caribeña" className="rounded-2xl shadow-lg w-full h-full object-cover" />
        </AnimateOnScroll>
      </section>

      <section className="mt-16">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-center text-white mb-12">Valores que Nos Definen</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {companyInfo.values.map((value, index) => (
                 <AnimateOnScroll key={value.title} delay={index * 100}>
                    <GlassPanel className="text-center h-full">
                        <i className={`${value.icon} text-4xl text-[var(--color-keppel)] mb-4`}></i>
                        <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                        <p className="text-white/70 text-sm">{value.description}</p>
                    </GlassPanel>
                </AnimateOnScroll>
            ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;