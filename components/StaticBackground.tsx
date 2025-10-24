import React from 'react';

/**
 * A static image background component for pages other than the homepage.
 * It displays a fixed image with a dark overlay to ensure text readability.
 */
const StaticBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--color-navy)]">
            <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/background.png')` }} // <-- ¡Fuente actualizada aquí!
                aria-hidden="true"
                role="img"
            />
            {/* A darker overlay to ensure content on top is readable */}
            <div className="absolute inset-0 bg-black/70"></div>
        </div>
    );
};

export default StaticBackground;