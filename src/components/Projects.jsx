import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
    return (
        <motion.div
            className="project-card"
            // Scroll-driven motion replace with proven reliable animation matching Experience section
            // Even index (0, 2): Comes from Right (50px)
            // Odd index (1): Comes from Left (-50px)
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
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
