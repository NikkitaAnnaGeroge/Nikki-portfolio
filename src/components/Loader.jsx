import React from 'react';

const Loader = () => {
    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontFamily: 'sans-serif',
            fontSize: '1.5rem',
            letterSpacing: '0.2rem',
            zIndex: 0
        }}>
            LOADING...
        </div>
    );
};

export default Loader;
