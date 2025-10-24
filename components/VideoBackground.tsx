import React from 'react';

const VideoBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--color-navy)]">
            <video
                className="w-full h-full object-cover"
                src="/hero_video.mp4"
                autoPlay
                loop
                muted
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