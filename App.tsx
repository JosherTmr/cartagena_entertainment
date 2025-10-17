import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import BookingBar from './components/BookingBar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import DestinationsPage from './pages/DestinationsPage';
import AboutPage from './pages/AboutPage';
import LicensePage from './pages/LicensePage';

const AppContent: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            // Make sticky logic dependent on being on the homepage
            if (isHomePage) {
                setIsSticky(window.scrollY > window.innerHeight * 0.8);
            } else {
                setIsSticky(true); // Or false, depending on desired behavior for other pages
            }
        };

        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        } else {
            // For other pages, you might want the header to be sticky from the start
            setIsSticky(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHomePage]);

    return (
        <div className="relative min-h-screen flex flex-col font-sans bg-[var(--color-navy)] text-white">
            <VideoBackground />
            <div className="relative z-10 flex flex-col flex-grow">
                <Header isSticky={isSticky} />

                {/* BookingBar is only part of the layout on the HomePage */}
                {isHomePage && (
                    <div className={`
                        transition-all duration-500 ease-in-out z-20
                        ${isSticky
                            ? 'fixed top-4 w-auto left-1/2 -translate-x-1/2'
                            : 'absolute top-1/2 w-full max-w-5xl left-1/2 -translate-x-1/2 -translate-y-1/2'
                        }
                    `}>
                        <BookingBar onSearch={() => {}} isSticky={isSticky} />
                    </div>
                )}

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/destinations" element={<DestinationsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/license" element={<LicensePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
}

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;