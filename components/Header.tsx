import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { companyInfo } from '../data/database';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClasses = "text-white/80 hover:text-white transition-colors duration-300 text-lg";
    const activeLinkClasses = "text-[var(--color-keppel)] font-semibold";

    return (
        <header className="bg-black/20 backdrop-blur-lg glowing-border">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <NavLink to="/" className="text-2xl font-bold text-white">
                        {companyInfo.name}
                    </NavLink>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} end>Inicio</NavLink>
                        <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Servicios</NavLink>
                        <NavLink to="/destinations" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Destinos</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Nosotros</NavLink>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/50 pb-4">
                    <nav className="flex flex-col items-center space-y-4">
                        <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)} end>Inicio</NavLink>
                        <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Servicios</NavLink>
                        <NavLink to="/destinations" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Destinos</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Nosotros</NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;