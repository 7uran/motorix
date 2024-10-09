"use client"
import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed w-2 h-2 bg-black rounded-full z-[9999]"
            style={{
                transform: `translate(${position.x - 5}px, ${position.y}px)`,
                transition: 'transform 0.1s ease',
            }}
        />
    );
};

export default MouseFollower;
