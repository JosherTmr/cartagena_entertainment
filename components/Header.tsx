import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { companyInfo } from '../data/database';
import BookingBar from './BookingBar';
import AnimateOnScroll from './AnimateOnScroll';

interface HeaderProps {
    onSearch: () => void;
    isSticky: boolean;
    destination: string;
    setDestination: (value: string) => void;
    category: string;
    setCategory: (value: string) => void;
    date: string;
    setDate: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
    onSearch, 
    isSticky,
    destination,
    setDestination,
    category,
    setCategory,
    date,
    setDate
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navLinkClasses = "text-white/80 hover:text-white transition-colors duration-300 text-lg";
    const activeLinkClasses = "text-[var(--color-keppel)] font-semibold";
    
    const headerClasses = `
        w-full left-0 transition-all duration-300 z-30
        ${isSticky
            ? 'fixed top-0 bg-[var(--glass-background)] backdrop-blur-lg shadow-lg border-b border-[var(--glass-border)]'
            : 'absolute top-0 bg-transparent'
        }
    `;

    const bookingBarProps = {
        destination,
        setDestination,
        category,
        setCategory,
        date,
        setDate,
        onSearch
    };

    return (
        <>
            <header className={headerClasses}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <NavLink to="/" className="text-2xl font-bold text-white flex-shrink-0 mr-4">
                            <img src="/Logo_CERP.png" alt={companyInfo.name} className="h-12" />
                        </NavLink>
                        
                        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
                            <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} end>Inicio</NavLink>
                            <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Servicios</NavLink>
                            <NavLink to="/destinations" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Destinos</NavLink>
                            <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Nosotros</NavLink>
                            <NavLink to="/license" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Licencia</NavLink>
                        </nav>
                        
                        <div className="flex-grow flex justify-end">
                            <div className={`hidden md:flex items-center transition-opacity duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <BookingBar {...bookingBarProps} isSticky={true} />
                            </div>

                            <div className="md:hidden ml-4">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-[var(--glass-background)] backdrop-blur-md pb-4 px-4">
                        <nav className="flex flex-col items-center space-y-4 pt-4">
                            <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)} end>Inicio</NavLink>
                            <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Servicios</NavLink>
                            <NavLink to="/destinations" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Destinos</NavLink>
                            <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Nosotros</NavLink>
                            <NavLink to="/license" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Licencia</NavLink>
                        </nav>
                    </div>
                )}
            </header>
            
            {/* HERO SECTION - RENDERED ONLY ON HOMEPAGE, FADES OUT ON SCROLL */}
            {isHomePage && (
                 <div className={`
                    absolute top-0 left-0 w-full h-screen
                    transition-opacity duration-500 ease-in-out z-20
                    ${isSticky ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                 `}>
                    <div className="container mx-auto px-4 h-full">
                        <div className="text-center h-full flex flex-col justify-center items-center">
                             <AnimateOnScroll>
                                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    Tu Aventura de Lujo <br /> en el Corazón del Caribe
                                </h1>
                            </AnimateOnScroll>
                            <AnimateOnScroll delay={200}>
                                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                                    Descubre yates exclusivos, mansiones de ensueño y experiencias inolvidables diseñadas solo para ti.
                                </p>
                            </AnimateOnScroll>
                            <AnimateOnScroll delay={400}>
                                <div className="mt-8 w-full max-w-5xl">
                                    <BookingBar {...bookingBarProps} isSticky={false} />
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;