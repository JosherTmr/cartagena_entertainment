import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { boats, Boat } from '../data/boats';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SeoManager from '../components/SeoManager';
import { companyInfo } from '../data/database';
import BoldPaymentButton from '../components/BoldPaymentButton';

const BoatSalesPage: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('Todos');

    const boatTypes = ['Todos', ...Array.from(new Set(boats.map(b => b.type)))];

    const filteredBoats = useMemo(() => {
        if (selectedType === 'Todos') return boats;
        return boats.filter(b => b.type === selectedType);
    }, [selectedType]);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
    };

    return (
        <>
            <SeoManager
                title={`Venta de Botes | ${companyInfo.name}`}
                description="Catálogo exclusivo de yates, lanchas y embarcaciones de lujo en venta. Encuentra tu próxima nave en el Caribe."
            />

            {/* HERO SECTION */}
            <div className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center mb-12 md:mb-16 overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Venta de Botes"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <AnimateOnScroll animationType="zoom-in">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl text-text-light font-serif drop-shadow-2xl mb-4 md:mb-6">
                            Venta de Embarcaciones
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200} animationType="fade-up">
                        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-text-light/90 font-light">
                            Adquiera su propia leyenda. Una selección curada de las mejores naves del mundo.
                        </p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-20">
                {/* FILTERS */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {boatTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${selectedType === type
                                ? 'bg-primary text-bg-dark border-primary font-semibold'
                                : 'bg-transparent text-text-light/70 border-white/20 hover:border-primary/50 hover:text-white'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBoats.map((boat, index) => (
                        <AnimateOnScroll key={boat.id} delay={index * 100} animationType="fade-up">
                            <div className="group relative bg-glass-bg backdrop-blur-glass border border-glass-border rounded-2xl overflow-hidden hover:shadow-glass-hover transition-all duration-500 flex flex-col h-full">
                                {/* IMAGE */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={boat.image}
                                        alt={boat.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                                        {boat.type}
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-serif text-highlight">{boat.name}</h3>
                                    </div>
                                    <p className="text-primary text-xl font-bold mb-4">{formatPrice(boat.price)}</p>

                                    <p className="text-text-light/70 text-sm mb-6 line-clamp-3 flex-grow">
                                        {boat.description}
                                    </p>

                                    {/* SPECS */}
                                    <div className="grid grid-cols-2 gap-y-2 text-sm text-text-light/60 mb-6 border-t border-white/10 pt-4">
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider opacity-50">Dimensiones</span>
                                            {boat.dimensions}
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider opacity-50">Ventajas</span>
                                            <span className="line-clamp-1">{boat.features[0]}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <BoldPaymentButton
                                            description={`Interés en: ${boat.name}`}
                                            orderId={`BOAT-${boat.id}-${Date.now()}`}
                                            style="dark"
                                            size="L"
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BoatSalesPage;
