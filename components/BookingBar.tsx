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

        const baseContainerClasses = `search-box bg-[rgba(255,255,255,0.12)] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out hover:shadow-[0_6px_24px_rgba(0,0,0,0.35)]`;
    const containerClasses = `${baseContainerClasses} ${isSticky ? 'rounded-full' : 'rounded-[14px]'}`;
    const selectClass = "w-full bg-transparent text-text-light focus:outline-none appearance-none";

    // --- Layout for Hero and Mobile Modal (Non-Sticky) ---
    if (!isSticky) {
        return (
            <div className={containerClasses}>
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="md:flex items-center gap-4 mb-4">
                        {/* Destino */}
                        <div className="flex flex-col flex-grow w-full pb-3 border-b border-text-light/10 md:pb-0 md:border-b-0">
                            <label htmlFor="destino-select-full" className="text-xs font-semibold text-text-light/70 flex items-center mb-1">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                               <span>Destino</span>
                            </label>
                            <div className="relative">
                                <select id="destino-select-full" value={destination} onChange={e => setDestination(e.target.value)} className={`${selectClass} pr-8`}>
                                    <option value="" className="bg-[var(--bg-dark)]">Todos</option>
                                    {destinations.map(d => (
                                        <option key={d.id} value={d.id} className="bg-[var(--bg-dark)]">{d.name}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-light/70">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="hidden md:block h-10 w-px bg-text-light/20"></div>

                        {/* Servicio */}
                        <div className="flex flex-col flex-grow w-full py-3 border-b border-text-light/10 md:py-0 md:border-b-0">
                            <label htmlFor="servicio-select-full" className="text-xs font-semibold text-text-light/70 flex items-center mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 1a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5V3a2 2 0 0 0-2-2zm0 4h.01"></path></svg>
                                <span>Tipo de Servicio</span>
                            </label>
                            <div className="relative">
                                <select id="servicio-select-full" value={category} onChange={e => setCategory(e.target.value)} className={`${selectClass} pr-8`} disabled={!availableCategories.length}>
                                    <option value="" className="bg-[var(--bg-dark)]">Todos</option>
                                    {availableCategories.map(c => (
                                        <option key={c} value={c} className="bg-[var(--bg-dark)]">{c}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-light/70">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="hidden md:block h-10 w-px bg-text-light/20"></div>

                        {/* Fecha */}
                        <div className="flex flex-col flex-grow w-full pt-3 md:pt-0">
                            <label htmlFor="fecha-input-full" className="text-xs font-semibold text-text-light/70 flex items-center mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                <span>Fecha</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="fecha-input-full"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    className={`w-full bg-transparent focus:outline-none text-text-light`}
                                    placeholder="mm/dd/yyyy"
                                />
                            </div>
                        </div>
                    </div>
                    <LiquidButton type="submit" variant="primary" className="w-full mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
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
                    <label htmlFor="destino-select-sticky" className="sr-only">Destino</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-light/70 mr-3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <select id="destino-select-sticky" aria-label="Seleccionar destino" value={destination} onChange={e => setDestination(e.target.value)} className={`${selectClass} pr-6`}>
                        <option value="" className="bg-[var(--bg-dark)]">Destino</option>
                        {destinations.map(d => (
                            <option key={d.id} value={d.id} className="bg-[var(--bg-dark)]">{d.name}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-text-light/70">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>

                <div className="h-6 w-px bg-text-light/20"></div>

                {/* Servicio */}
                <div className="relative flex-1 flex items-center h-full px-2">
                    <label htmlFor="servicio-select-sticky" className="sr-only">Tipo de Servicio</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-light/70 mr-3"><path d="M12 1a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5V3a2 2 0 0 0-2-2zm0 4h.01"></path></svg>
                    <select id="servicio-select-sticky" aria-label="Seleccionar tipo de servicio" value={category} onChange={e => setCategory(e.target.value)} className={`${selectClass} pr-6`} disabled={!availableCategories.length}>
                        <option value="" className="bg-[var(--bg-dark)]">Servicio</option>
                        {availableCategories.map(c => (
                            <option key={c} value={c} className="bg-[var(--bg-dark)]">{c}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-text-light/70">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>

                <div className="h-6 w-px bg-text-light/20"></div>
                
                {/* Fecha */}
                <div className="relative flex-1 flex items-center h-full px-2">
                    <label htmlFor="fecha-input-sticky" className="sr-only">Fecha</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-light/70 mr-3"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <div className="relative w-full">
                        <input
                            type="date"
                            id="fecha-input-sticky"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            className={`w-full bg-transparent focus:outline-none text-text-light`}
                            aria-label="Seleccionar fecha"
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                </div>

                <LiquidButton type="submit" aria-label="Buscar" variant="primary" className="w-11 h-11 !p-0 flex-shrink-0 ml-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </LiquidButton>
            </form>
        </div>
    );
};

export default BookingBar;