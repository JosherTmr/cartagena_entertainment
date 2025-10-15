import React, { useState, useMemo, useEffect } from 'react';
import { services, destinations } from '../data/database';
import LiquidButton from './LiquidButton';

interface BookingBarProps {
    onSearch: (criteria: { destination: string; category: string; date: string }) => void;
}

const BookingBar: React.FC<BookingBarProps> = ({ onSearch }) => {
    const [destination, setDestination] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

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
        // If the current category is not in the new list of available categories, reset it.
        if (category && !availableCategories.includes(category)) {
            setCategory('');
        }
    }, [availableCategories, category]);
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch({ destination, category, date });
    };

    const inputGroupClass = "flex flex-col gap-1 flex-grow";
    const labelClass = "text-xs font-semibold text-white/70 flex items-center gap-2";
    const selectClass = "w-full bg-transparent text-white focus:outline-none appearance-none";

    return (
        <div className="bg-[var(--glass-background)] backdrop-blur-md shadow-lg fixed bottom-0 left-0 w-full p-3 border-t border-[var(--glass-border)] rounded-t-2xl z-40 md:relative md:w-full md:max-w-7xl md:mx-auto md:p-2 md:rounded-xl md:border">
            <form onSubmit={handleSubmit} className="flex flex-row items-center gap-2 md:gap-4 w-full">
                <div className={`${inputGroupClass} border-r border-white/10 pr-2 md:pr-4`}>
                    <label htmlFor="destino-select" className={labelClass}>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="hidden md:inline">Destino</span>
                    </label>
                    <select id="destino-select" value={destination} onChange={e => setDestination(e.target.value)} className={selectClass}>
                        <option value="" className="bg-gray-800">Todos</option>
                        {destinations.map(d => (
                            <option key={d.id} value={d.id} className="bg-gray-800">{d.name}</option>
                        ))}
                    </select>
                </div>

                <div className={`${inputGroupClass} border-r border-white/10 pr-2 md:pr-4`}>
                    <label htmlFor="servicio-select" className={labelClass}>
                        <i className="fas fa-concierge-bell"></i>
                        <span className="hidden md:inline">Tipo de Servicio</span>
                    </label>
                    <select id="servicio-select" value={category} onChange={e => setCategory(e.target.value)} className={selectClass} disabled={!availableCategories.length}>
                        <option value="" className="bg-gray-800">Todos</option>
                        {availableCategories.map(c => (
                            <option key={c} value={c} className="bg-gray-800">{c}</option>
                        ))}
                    </select>
                </div>
                
                <div className={`${inputGroupClass}`}>
                     <label htmlFor="fecha-input" className={labelClass}>
                        <i className="fas fa-calendar-alt"></i>
                        <span className="hidden md:inline">Fecha</span>
                    </label>
                     <input type="date" id="fecha-input" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-transparent text-white focus:outline-none"/>
                </div>

                <LiquidButton type="submit" variant="primary" className="w-auto flex-shrink-0">
                    <i className="fas fa-search"></i> <span className="hidden md:inline ml-2">Buscar</span>
                </LiquidButton>
            </form>
        </div>
    );
};

export default BookingBar;