import React from 'react';

const VideoBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--color-navy)]">
            {/* Imagen estática para móviles para reducir consumo */}
            <div
                className="w-full h-full bg-cover bg-center md:hidden"
                style={{ backgroundImage: `url('/background.png')` }}
                aria-hidden="true"
                role="img"
            />
            {/* Video solo en pantallas medianas en adelante */}
            <video
                className="hidden md:block w-full h-full object-cover"
                src="/hero_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/background.png"
            />
            {/* Overlay semitransparente para mejorar la legibilidad del contenido */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Componente de atribución: ¡la clave! */}
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