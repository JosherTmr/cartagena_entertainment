import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ComingSoonPage: React.FC = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="fixed inset-0 bg-static-main bg-cover bg-center z-0"></div>
            <div className="fixed inset-0 hero-overlay z-0"></div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-panel max-w-2xl mx-auto p-12 md:p-16"
                >
                    {/* Icon or Logo placeholder */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-8 text-[var(--keppel)]"
                    >
                        <i className="fas fa-compass text-6xl md:text-7xl animate-pulse"></i>
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--highlight)] font-serif">
                        Próximamente
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-[var(--white-smoke)] mb-10 leading-relaxed">
                        Estamos trabajando en esta experiencia para ti. <br className="hidden md:block" />
                        Muy pronto podrás descubrir nuevos horizontes con nosotros.
                    </p>

                    {/* Action Button */}
                    <Link to="/" className="inline-block">
                        <button className="glass-button px-8 py-3 rounded-full text-lg font-medium group flex items-center gap-2 mx-auto">
                            <span>Volver al Inicio</span>
                            <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </Link>
                </motion.div>

                {/* Footer/Copyright for this page */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-12 text-[var(--celadon)] opacity-60 text-sm"
                >
                    &copy; {new Date().getFullYear()} CERP. Todos los derechos reservados.
                </motion.div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
