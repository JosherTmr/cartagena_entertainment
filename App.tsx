import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import DestinationsPage from './pages/DestinationsPage';
import AboutPage from './pages/AboutPage';
import LicensePage from './pages/LicensePage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="relative min-h-screen flex flex-col font-sans bg-[var(--color-navy)] text-white">
                <VideoBackground />
                <div className="relative z-10 flex flex-col flex-grow">
                    <Header />
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
        </Router>
    );
};

export default App;