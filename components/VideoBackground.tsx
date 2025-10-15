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
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
    );
};

export default VideoBackground;