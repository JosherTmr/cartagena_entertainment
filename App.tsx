import React, { useState, useEffect, Suspense, lazy, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingBar from './components/BookingBar';
import StaticBackground from './components/StaticBackground';
import VideoBackground from './components/VideoBackground';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';

// Lazy load page components for code-splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const DestinationsPage = lazy(() => import('./pages/DestinationsPage'));
const LifestylePage = lazy(() => import('./pages/LifeStylePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const LicensePage = lazy(() => import('./pages/LicensePage'));

const AppContent: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';
    const [isSticky, setIsSticky] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    
    // Centralized state for the booking bar
    const [destination, setDestination] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (isHomePage) {
                setIsSticky(window.scrollY > 100);
            }
        };

        if (isHomePage) {
            setIsSticky(window.scrollY > 100);
            window.addEventListener('scroll', handleScroll);
        } else {
            setIsSticky(true);
        }

        return () => {
            if (isHomePage) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isHomePage]);

    const handleSearch = useCallback(() => {
        const queryParams = new URLSearchParams();
        if (destination) queryParams.set('destination', destination);
        if (category) queryParams.set('category', category);
        if (date) queryParams.set('date', date);
        navigate(`/services?${queryParams.toString()}`);
        setIsBookingModalOpen(false); // Close modal on search
    }, [destination, category, date, navigate]);


    return (
        <div className="relative min-h-screen flex flex-col font-sans text-white">
            {/* Render backgrounds based on page */}
            {isHomePage ? <VideoBackground /> : <StaticBackground />}

            <div className="relative z-10 flex flex-col flex-grow">
                <Header 
                    onSearch={handleSearch} 
                    isSticky={isSticky}
                    destination={destination}
                    setDestination={setDestination}
                    category={category}
                    setCategory={setCategory}
                    date={date}
                    setDate={setDate}
                />

                <main className={`flex-grow ${!isHomePage || isSticky ? 'pt-20' : ''}`}>
                    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-white/80">Cargando...</div>}>
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                                <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
                                <Route path="/destinations" element={<PageTransition><DestinationsPage /></PageTransition>} />
                                <Route path="/lifestyle" element={<PageTransition><LifestylePage /></PageTransition>} />
                                <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
                                <Route path="/license" element={<PageTransition><LicensePage /></PageTransition>} />
                            </Routes>
                        </AnimatePresence>
                    </Suspense>
                </main>
                <Footer />
            </div>

            {/* Mobile/Tablet Floating Booking Trigger */}
            <button
                type="button"
                className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 transition-all duration-300 ease-in-out transform ${isSticky ? 'translate-y-0' : 'translate-y-full'}`}
                onClick={() => setIsBookingModalOpen(true)}
                aria-label="Abrir barra de búsqueda"
            >
                <div className="bg-[var(--glass-background)] backdrop-blur-lg shadow-lg border border-[var(--glass-border)] rounded-full flex items-center p-2 px-4 justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-keppel)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">
                    <div className="flex items-center gap-3 text-sm text-white/80">
                        <span>📍 Destino</span>
                        <span className="border-l border-white/20 h-4"></span>
                        <span>🛎️ Servicio</span>
                        <span className="border-l border-white/20 h-4"></span>
                        <span>📅 Fecha</span>
                    </div>
                    <div className="bg-[var(--color-keppel)] rounded-full w-11 h-11 flex items-center justify-center flex-shrink-0 ml-2">
                        <i className="fas fa-search text-white"></i>
                    </div>
                </div>
            </button>

            {/* Mobile/Tablet Booking Modal */}
            {isBookingModalOpen && (
                 <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex flex-col justify-end p-4 lg:hidden animate-fade-in"
                    onClick={() => setIsBookingModalOpen(false)}
                >
                    <div
                        className="w-full max-w-md mb-20 animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                       <BookingBar 
                            onSearch={handleSearch} 
                            isSticky={false}
                            destination={destination}
                            setDestination={setDestination}
                            category={category}
                            setCategory={setCategory}
                            date={date}
                            setDate={setDate}
                       />
                    </div>
                </div>
            )}
            <WhatsAppButton />
        </div>
    );
}

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <AppContent />
        </Router>
    );
};

export default App;