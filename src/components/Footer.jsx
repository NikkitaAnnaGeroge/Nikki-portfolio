import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)'
        }}>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
                <a
                    href="https://www.linkedin.com/in/nikkita-anna-george-a39807327/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s' }}
                    onMouseOver={(e) => e.target.style.color = '#bb86fc'}
                    onMouseOut={(e) => e.target.style.color = 'white'}
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/NikkitaAnnaGeroge"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s' }}
                    onMouseOver={(e) => e.target.style.color = '#00f2ea'}
                    onMouseOut={(e) => e.target.style.color = 'white'}
                >
                    GitHub
                </a>
            </div>

            <p style={{ color: '#666', fontSize: '0.9rem' }}>
                © {new Date().getFullYear()} Nikkita Anna George. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
