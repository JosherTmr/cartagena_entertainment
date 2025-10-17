import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { companyInfo } from '../data/database';
import BookingBar from './BookingBar';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinkClasses = `text-white/80 hover:text-white transition-colors duration-300 text-lg`;
    const activeLinkClasses = `font-semibold text-[var(--color-keppel)]`;
    const headerClasses = `w-full transition-all duration-300 z-50 ${isSticky ? 'fixed top-0 bg-black/20 backdrop-blur-lg shadow-lg' : 'absolute top-0 bg-transparent'}`;

    return (
        <header className={headerClasses}>
            <div className={`container mx-auto px-4 flex items-center transition-all duration-300 ${isSticky ? 'flex-row justify-between h-20' : 'flex-col h-auto pt-4'}`}>
                <div className={`w-full flex items-center ${isSticky ? 'flex-grow justify-start' : 'justify-between'}`}>
                    <NavLink to="/">
                        <img src="/Logo_CERP.png" alt={companyInfo.name} className={`transition-all duration-300 ${isSticky ? 'h-12' : 'h-16'}`} />
                    </NavLink>
                    
                    {/* Desktop Navigation */}
                    <nav className={`hidden md:flex items-center ${isSticky ? 'ml-8' : 'space-x-8'}`}>
                        <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} end>Inicio</NavLink>
                        <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Servicios</NavLink>
                        <NavLink to="/destinations" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Destinos</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Nosotros</NavLink>
                        <NavLink to="/license" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Licencia</NavLink>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
                        </button>
                    </div>
                </div>

                {isSticky && (
                    <div className="hidden md:block flex-grow ml-8">
                        <BookingBar onSearch={() => {}} isSticky={true} />
                    </div>
                )}

                <div className={`
                    transition-all duration-300 w-full
                    ${isSticky ? 'hidden' : 'block md:w-full md:max-w-4xl py-8'}
                `}>
                    <BookingBar onSearch={() => {}} isSticky={false} />
                </div>
            </div>

            {isMenuOpen && (
                <div className={`md:hidden ${isSticky ? 'bg-white' : 'bg-black/50'} pb-4`}>
                    <nav className="flex flex-col items-center space-y-4">
                        <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)} end>Inicio</NavLink>
                        <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Servicios</NavLink>
                        <NavLink to="/destinations" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Destinos</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Nosotros</NavLink>
                        <NavLink to="/license" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Licencia</NavLink>
                        {isSticky && (
                            <div className="mt-4 w-full px-4">
                                <BookingBar onSearch={() => {}} isSticky={true} />
                            </div>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;