import React from 'react';

const LiquidBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--color-navy)]">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="liquid-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid-effect" />
                        <feComposite in="SourceGraphic" in2="liquid-effect" operator="atop" />
                    </filter>
                </defs>
            </svg>
            <div className="absolute inset-0" style={{ filter: 'url(#liquid-filter)' }}>
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow">
                    <div className="absolute w-96 h-96 bg-[var(--color-keppel-dark)] rounded-full opacity-50 top-1/4 left-1/4"></div>
                    <div className="absolute w-80 h-80 bg-[var(--color-prussian-blue)] rounded-full opacity-40 bottom-1/4 right-1/4"></div>
                    <div className="absolute w-72 h-72 bg-[var(--color-teal-dark)] rounded-full opacity-30 top-1/2 right-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default LiquidBackground;
