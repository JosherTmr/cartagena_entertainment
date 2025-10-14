import React, { useState, useMemo } from 'react';
import { services, destinations } from '../data/database';
import LiquidButton from './LiquidButton';

interface BookingBarProps {
    onSearch: (criteria: { destination: string; category: string; date: string }) => void;
}

const BookingBar: React.FC<BookingBarProps> = ({ onSearch }) => {
    const [destination, setDestination] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const serviceCategories = useMemo(() => {
        const categories = services.map(s => s.category);
        return [...new Set(categories)]; // Get unique categories
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch({ destination, category, date });
    };

    const inputGroupClass = "flex flex-col gap-2 flex-grow";
    const labelClass = "text-xs font-semibold text-white/70 flex items-center gap-2";
    const selectClass = "w-full bg-transparent text-white focus:outline-none appearance-none";

    return (
        <div className="bg-[var(--glass-background)] liquid-glass glowing-border shadow-lg w-full max-w-7xl mx-auto p-2">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <div className={`${inputGroupClass} md:border-r border-white/10 pr-4`}>
                    <label htmlFor="destino-select" className={labelClass}><i className="fas fa-map-marker-alt"></i> Destino</label>
                    <select id="destino-select" value={destination} onChange={e => setDestination(e.target.value)} className={selectClass}>
                        <option value="" className="bg-gray-800">Todos</option>
                        {destinations.map(d => (
                            <option key={d.id} value={d.id} className="bg-gray-800">{d.name}</option>
                        ))}
                    </select>
                </div>

                <div className={`${inputGroupClass} md:border-r border-white/10 pr-4`}>
                    <label htmlFor="servicio-select" className={labelClass}><i className="fas fa-concierge-bell"></i> Tipo de Servicio</label>
                    <select id="servicio-select" value={category} onChange={e => setCategory(e.target.value)} className={selectClass}>
                        <option value="" className="bg-gray-800">Todos</option>
                        {serviceCategories.map(c => (
                            <option key={c} value={c} className="bg-gray-800">{c}</option>
                        ))}
                    </select>
                </div>
                
                <div className={`${inputGroupClass}`}>
                     <label htmlFor="fecha-input" className={labelClass}><i className="fas fa-calendar-alt"></i> Fecha</label>
                     <input type="date" id="fecha-input" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-transparent text-white focus:outline-none"/>
                </div>

                <LiquidButton type="submit" variant="primary" className="w-full md:w-auto flex-shrink-0">
                    <i className="fas fa-search"></i> <span className="hidden md:inline ml-2">Buscar</span>
                </LiquidButton>
            </form>
        </div>
    );
};

export default BookingBar;
