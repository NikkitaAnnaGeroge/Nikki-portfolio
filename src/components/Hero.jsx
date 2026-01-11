import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="section-container hero-section">
            <div className="hero-content">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-subtitle-top"
                >
                    Hello, I'm
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-title"
                >
                    Nikkita <br /> Anna George
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-role"
                >
                    <span className="text-gradient">UI/UX Designer & Frontend Dev</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="hero-description"
                >
                    Designing intuitive, human-centered digital experiences.
                    Creative technologist blending design, logic, and empathy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="hero-buttons"
                >
                    {/* Button style needs to be consistent. Using class names from Hero.css */}
                    <button className="btn-primary">
                        View Work
                    </button>
                    <button className="btn-secondary">
                        Contact Me
                    </button>
                </motion.div>
            </div>

            {/* 3D Portrait is handled by the Scene component */}
        </section>
    );
};

export default Hero;
