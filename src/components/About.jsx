import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" className="section-container about-section" ref={ref}>
            <motion.div
                className="glass-panel about-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewPort={{ once: true }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                >
                    <div className="about-image-container premium-frame">
                        <img src="/assets/Nikkita.jpeg" alt="Nikkita Anna George" className="about-image" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="premium-glow" />
                    </div>
                </motion.div>

                <div className="about-content">
                    <h2 className="text-gradient">About Me</h2>

                    <p>
                        I'm a designer-developer who bridges the gap between creative vision and technical execution.
                        My passion lies in building beautiful, usable, and emotionally engaging digital products that solve real problems.
                    </p>

                    <p>
                        With a background in both UI/UX design and frontend development, I don't just design interfaces—I build living, breathing applications.
                        I believe that great software should feel natural, intuitive, and human.
                    </p>

                    <div className="stat-row">
                        <div className="stat-item">
                            <h3>Design</h3>
                            <p>UI/UX & Visuals</p>
                        </div>
                        <div className="stat-item">
                            <h3>Code</h3>
                            <p>Frontend & Logic</p>
                        </div>
                        <div className="stat-item">
                            <h3>Solve</h3>
                            <p>Creative Solutions</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );

};

export default About;
