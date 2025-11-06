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
        <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--color-navy)]">
            {isDesktop ? (
                <video
                    className="w-full h-full object-cover"
                    src="/hero_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/background.png"
                />
            ) : (
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('/Background_movil.jpg')` }}
                    aria-hidden="true"
                    role="img"
                />
            )}
            {/* Overlay semitransparente para mejorar la legibilidad del contenido */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Componente de atribución */}
            <div className="absolute bottom-1 right-2 z-10">
                <p className="text-xs text-white/50">
                    Video by{' '}
                    <a
                        href="https://coverr.co/es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-colors"
                    >
                        Coverr
                    </a>
                </p>
            </div>
        </div>
    );
};

export default VideoBackground;