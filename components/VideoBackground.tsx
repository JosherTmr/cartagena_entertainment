import React, { useState, useEffect } from 'react';

const VideoBackground: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        setIsDesktop(mediaQuery.matches);

        const handleResize = (e: MediaQueryListEvent) => {
            setIsDesktop(e.matches);
        };

        mediaQuery.addEventListener('change', handleResize);

        // Cleanup listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-[var(--bg-dark)] hero-container">
            {isDesktop ? (
                <video
                    className="w-full h-full object-cover"
                    src="/hero_video.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata" // Cambiado de "auto" a "metadata" para optimizar la carga
                    poster="/background.webp"
                />
            ) : (
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('/Background_movil.webp')` }}
                    aria-hidden="true"
                    role="img"
                />
            )}
            {/* Overlay semitransparente para mejorar la legibilidad del contenido */}
            <div className="absolute inset-0 hero-overlay"></div>

            {/* Componente de atribución */}
            <div className="absolute bottom-1 right-2 z-10">
                <p className="text-xs text-text-light/50">
                    Video by{' '}
                    <a
                        href="https://coverr.co/es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-text-light transition-colors"
                    >
                        Coverr
                    </a>
                </p>
            </div>
        </div>
    );
};

export default VideoBackground;