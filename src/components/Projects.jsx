import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        title: "Canteen Kiosk",
        type: "Java Application",
        desc: "A robust Java-based kiosk system designed for efficient canteen ordering and management.",
        github: "https://github.com/NikkitaAnnaGeroge/Java-Project---Canteen-Kiosk-"
    },
    {
        title: "SJCET URL Shortener",
        type: "Web Tool",
        desc: "A practical web-based URL shortening tool that generates clean, shareable links.",
        github: "https://github.com/NikkitaAnnaGeroge/Sjcet-Url-Shortner"
    },
    {
        title: "SoulTracker",
        type: "Mental Health App",
        desc: "A personal companion for emotional well-being combining mood tracking and reflection.",
        github: "https://github.com/NikkitaAnnaGeroge/SoulTracker_demo"
    }
];

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end center"]
    });

    // Scroll-driven motion: content moves as you scroll
    // Even index (0, 2): Comes from Right (100px -> 0)
    // Odd index (1): Comes from Left (-100px -> 0)
    const xRange = index % 2 === 0 ? [100, 0] : [-100, 0];
    const x = useTransform(scrollYProgress, [0, 1], xRange);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <motion.div
            ref={cardRef}
            className="project-card"
            style={{ x, opacity, scale }}
        >
            <div className="project-glow" />
            <div className="project-header">
                <div>
                    <span className="project-type">{project.type}</span>
                    <h3 className="project-name">{project.title}</h3>
                </div>
                <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub ↗
                    </a>
                </div>
            </div>
            <p className="project-desc">{project.desc}</p>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <motion.h2
                className="projects-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Selected Works
            </motion.h2>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
