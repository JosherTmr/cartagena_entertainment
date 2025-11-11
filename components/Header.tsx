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

    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

    const navLinkClasses = "text-text-light/80 hover:text-text-light transition-colors duration-300 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-dark)] rounded";
    const activeLinkClasses = "text-[var(--primary)] font-semibold";
    
    const headerClasses = `
        w-full left-0 transition-all duration-300 z-30
        ${isSticky
            ? 'fixed top-0 header-translucent shadow-lg border-b border-[var(--glass-border)]'
            : 'relative bg-transparent'
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
                        <NavLink to="/" aria-label={`Ir al inicio - ${companyInfo.name}`} className="text-2xl font-bold text-text-light flex-shrink-0 mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-dark)] rounded">
                            <img src="/Logo_CERP.png" alt={`Logo de ${companyInfo.name}`} className="h-12" />
                        </NavLink>
                        
                        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
                            <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} end>Inicio</NavLink>
                            <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Servicios</NavLink>
                            <NavLink to="/destinations" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Destinos</NavLink>
                            <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Nosotros</NavLink>
                            <NavLink to="/license" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Licencia</NavLink>
                            <NavLink 
                                to="/lifestyle" 
                                className="special-button"
                            >
                                <span className="text">Estilo de Vida</span>
                            </NavLink>
                        </nav>
                        
                        <div className="flex-grow flex justify-end">
                            <div className={`hidden md:flex items-center transition-opacity duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <BookingBar {...bookingBarProps} isSticky={true} />
                            </div>

                            <div className="md:hidden ml-4">
                                <button 
                                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                    className="text-text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-dark)] rounded"
                                    aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                                    aria-expanded={isMenuOpen}
                                    aria-controls="mobile-menu"
                                >
                                    {isMenuOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div id="mobile-menu" className="md:hidden header-translucent pb-4 px-4">
                        <nav className="flex flex-col items-center space-y-4 pt-4">
                            <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleNavLinkClick} end>Inicio</NavLink>
                            <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleNavLinkClick}>Servicios</NavLink>
                            <NavLink to="/destinations" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleNavLinkClick}>Destinos</NavLink>
                            <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleNavLinkClick}>Nosotros</NavLink>
                            <NavLink to="/license" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleNavLinkClick}>Licencia</NavLink>
                             <NavLink 
                                to="/lifestyle" 
                                className="special-button"
                                onClick={handleNavLinkClick}
                            >
                                <span className="text">Estilo de Vida</span>
                            </NavLink>
                        </nav>
                    </div>
                )}
            </header>
            
            {/* HERO SECTION - RENDERED ONLY ON HOMEPAGE, FADES OUT ON SCROLL */}
            {isHomePage && !isSticky && (
                 <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="text-center flex flex-col justify-center items-center py-12 md:py-16">
                            <div className="w-full max-w-[700px]">
                                <AnimateOnScroll>
                                    <h1 className="text-4xl md:text-7xl mb-8 md:mb-12 font-headings hero-title">
                                        Atrevete a vivir tu aventura en el corazón del caribe
                                    </h1>
                                </AnimateOnScroll>
                                <AnimateOnScroll delay={200}>
                                    <p className="text-lg md:text-2xl text-text-light/80">
                                        Descubre yates exclusivos, mansiones de ensueño y experiencias inolvidables diseñadas solo para ti.
                                    </p>
                                </AnimateOnScroll>
                            </div>
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