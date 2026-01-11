import React, { useEffect, useRef } from 'react';
import './CustomCursor.css'; // We'll create this specific CSS

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;

            // Main Dot
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }

            // Follower (Smooth lag)
            if (followerRef.current) {
                followerRef.current.animate({
                    transform: `translate3d(${x - 20}px, ${y - 20}px, 0)`
                }, {
                    duration: 500,
                    fill: "forwards"
                });
            }
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor-dot" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
};

export default CustomCursor;
