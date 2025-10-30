import React, { useMemo, useEffect } from 'react';
import { services, destinations } from '../data/database';
import LiquidButton from './LiquidButton';

interface BookingBarProps {
    onSearch: () => void;
    isSticky: boolean;
    destination: string;
    setDestination: (value: string) => void;
    category: string;
    setCategory: (value: string) => void;
    date: string;
    setDate: (value: string) => void;
}

const BookingBar: React.FC<BookingBarProps> = ({ 
    onSearch, 
    isSticky,
    destination,
    setDestination,
    category,
    setCategory,
    date,
    setDate
}) => {

    const availableCategories = useMemo(() => {
        if (!destination) {
            const allCategories = services.map(s => s.category);
            return [...new Set(allCategories)];
        }

        const selectedDest = destinations.find(d => d.id === destination);
        if (!selectedDest) return [];

        const serviceIds = new Set(selectedDest.seasonality.allYear);
        selectedDest.seasonality.specialSeasons.forEach(season => {
            season.specificServices.forEach(id => serviceIds.add(id));
        });

        const availableServices = services.filter(s => serviceIds.has(s.id));
        const categories = availableServices.map(s => s.category);
        return [...new Set(categories)];
    }, [destination]);

    useEffect(() => {
        if (category && !availableCategories.includes(category)) {
            setCategory('');
        }
    }, [availableCategories, category, setCategory]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch();
    };

    const baseContainerClasses = "bg-[var(--glass-background)] backdrop-blur-lg shadow-lg border border-[var(--glass-border)] transition-all duration-300";
    const containerClasses = `${baseContainerClasses} ${isSticky ? 'rounded-full' : 'rounded-xl'}`;
    const selectClass = "w-full bg-transparent text-white focus:outline-none appearance-none";

    // --- Layout for Hero and Mobile Modal (Non-Sticky) ---
    if (!isSticky) {
        return (
            <div className={containerClasses}>
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="md:flex items-center gap-4 mb-4">
                        {/* Destino */}
                        <div className="flex flex-col flex-grow w-full pb-3 border-b border-white/10 md:pb-0 md:border-b-0">
                            <label htmlFor="destino-select-full" className="text-xs font-semibold text-white/70 flex items-center mb-1">
                               <i className="fas fa-map-marker-alt mr-2"></i>
                               <span>Destino</span>
                            </label>
                            <div className="relative">
                                <select id="destino-select-full" value={destination} onChange={e => setDestination(e.target.value)} className={`${selectClass} pr-8`}>
                                    <option value="" className="bg-gray-800">Todos</option>
                                    {destinations.map(d => (
                                        <option key={d.id} value={d.id} className="bg-gray-800">{d.name}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/70">
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="hidden md:block h-10 w-px bg-white/20"></div>

                        {/* Servicio */}
                        <div className="flex flex-col flex-grow w-full py-3 border-b border-white/10 md:py-0 md:border-b-0">
                            <label htmlFor="servicio-select-full" className="text-xs font-semibold text-white/70 flex items-center mb-1">
                                <i className="fas fa-concierge-bell mr-2"></i>
                                <span>Tipo de Servicio</span>
                            </label>
                            <div className="relative">
                                <select id="servicio-select-full" value={category} onChange={e => setCategory(e.target.value)} className={`${selectClass} pr-8`} disabled={!availableCategories.length}>
                                    <option value="" className="bg-gray-800">Todos</option>
                                    {availableCategories.map(c => (
                                        <option key={c} value={c} className="bg-gray-800">{c}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/70">
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="hidden md:block h-10 w-px bg-white/20"></div>

                        {/* Fecha */}
                        <div className="flex flex-col flex-grow w-full pt-3 md:pt-0">
                            <label htmlFor="fecha-input-full" className="text-xs font-semibold text-white/70 flex items-center mb-1">
                                <i className="fas fa-calendar-alt mr-2"></i>
                                <span>Fecha</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="fecha-input-full"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    className={`w-full bg-transparent focus:outline-none ${date ? 'text-white' : 'text-transparent'}`}
                                />
                                {!date && (
                                    <span className="absolute left-0 inset-y-0 flex items-center pointer-events-none text-white/50">
                                        mm/dd/yyyy
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <LiquidButton type="submit" variant="primary" className="w-full mt-2">
                        <i className="fas fa-search"></i>
                        <span className="inline ml-2">Buscar</span>
                    </LiquidButton>
                </form>
            </div>
        );
    }

    // --- Layout for Sticky Header ---
    return (
        <div className={containerClasses}>
            <form onSubmit={handleSubmit} className="flex items-center h-[48px] px-2">
                
                {/* Destino */}
                <div className="relative flex-1 flex items-center h-full px-2">
                    <i className="fas fa-map-marker-alt text-white/70 mr-3"></i>
                    <select aria-label="Seleccionar destino" value={destination} onChange={e => setDestination(e.target.value)} className={`${selectClass} pr-6`}>
                        <option value="" className="bg-gray-800">Destino</option>
                        {destinations.map(d => (
                            <option key={d.id} value={d.id} className="bg-gray-800">{d.name}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-white/70">
                        <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                </div>

                <div className="h-6 w-px bg-white/20"></div>

                {/* Servicio */}
                <div className="relative flex-1 flex items-center h-full px-2">
                    <i className="fas fa-concierge-bell text-white/70 mr-3"></i>
                    <select aria-label="Seleccionar tipo de servicio" value={category} onChange={e => setCategory(e.target.value)} className={`${selectClass} pr-6`} disabled={!availableCategories.length}>
                        <option value="" className="bg-gray-800">Servicio</option>
                        {availableCategories.map(c => (
                            <option key={c} value={c} className="bg-gray-800">{c}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-white/70">
                        <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                </div>

                <div className="h-6 w-px bg-white/20"></div>
                
                {/* Fecha */}
                <div className="relative flex-1 flex items-center h-full px-2">
                    <i className="fas fa-calendar-alt text-white/70 mr-3"></i>
                    <div className="relative w-full">
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            className={`w-full bg-transparent focus:outline-none ${date ? 'text-white' : 'text-transparent'}`}
                            aria-label="Seleccionar fecha"
                        />
                        {!date && (
                            <span className="absolute left-0 inset-y-0 flex items-center pointer-events-none text-white/50 text-sm">
                                mm/dd/yyyy
                            </span>
                        )}
                    </div>
                </div>

                <LiquidButton type="submit" aria-label="Buscar" variant="primary" className="w-11 h-11 !p-0 flex-shrink-0 ml-2 rounded-full">
                    <i className="fas fa-search"></i>
                </LiquidButton>
            </form>
        </div>
    );
};

export default BookingBar;