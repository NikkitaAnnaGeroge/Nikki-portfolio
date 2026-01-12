import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const projects = [
    {
        title: "Canteen Kiosk",
        type: "Java Application",
        desc: "A robust Java-based kiosk system designed for efficient canteen ordering and management, streamlining the food ordering process.",
        github: "https://github.com/NikkitaAnnaGeroge/Java-Project---Canteen-Kiosk-"
    },
    {
        title: "SJCET URL Shortener",
        type: "Web Tool",
        desc: "A practical web-based URL shortening tool that generates clean, shareable links, improving link management efficiency.",
        github: "https://github.com/NikkitaAnnaGeroge/Sjcet-Url-Shortner"
    },
    {
        title: "SoulTracker",
        type: "Mental Health App",
        desc: "A personal companion for emotional well-being combining mood tracking, gamification, and self-reflection to help users improve mental health.",
        github: "https://github.com/NikkitaAnnaGeroge/SoulTracker_demo"
    }
];

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className="projects-section" ref={ref}>
            <motion.h2
                className="projects-title"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
            >
                Selected Works
            </motion.h2>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        // First project (index 0) -> From Right (x: 100)
                        // Second project (index 1) -> From Left (x: -100)
                        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="project-glow" />

                        <div className="project-header">
                            <div>
                                <span className="project-type">{project.type}</span>
                                <h3 className="project-name">{project.title}</h3>
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                    GitHub ↗
                                </a>
                            </div>
                        </div>

                        <p className="project-desc">{project.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
