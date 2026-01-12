import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const experiences = [
    {
        title: "Mulearn – 30 Day Coding Challenge",
        desc: "Completed an intensive month-long coding challenge focused on improving programming, problem solving, and consistency.",
        link: "https://www.linkedin.com/posts/nikkita-anna-george-a39807327_internshipexperience-thenexusproject-sjcetpalai-activity-7347518878387757056-LNyX/",
        date: "2024"
    },
    {
        title: "Insendium Participation",
        desc: "Actively took part in innovation-driven events and initiatives focused on startups, leadership, and ideation.",
        link: "https://www.linkedin.com/posts/nikkita-anna-george-a39807327_startupbootcamp-iedc-innovation-activity-7359600386573258752-nQLt",
        date: "2024"
    },
    {
        title: "IEEE Events",
        desc: "Participated in IEEE professional development workshops and seminars focused on Excel skills, technology, and career growth.",
        link: "https://www.linkedin.com/posts/nikkita-anna-george-a39807327_excelskills-ieee-professionaldevelopment-activity-7362861187341918209-4Mh7",
        date: "2024"
    },
    {
        title: "24-Hour National Hackathon",
        desc: "Competed in a national-level hackathon focused on teamwork, innovation, and problem-solving under time pressure.",
        link: "https://www.linkedin.com/posts/nikkita-anna-george-a39807327_hackathon-teamwork-innovation-activity-7378438813267955712-SlUR",
        date: "2024"
    }
];

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Re-animate on scroll for that premium feel
        threshold: 0.1,
    });

    return (
        <section id="experience" className="experience-section" ref={ref}>
            <motion.h2
                className="experience-title"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                Experience & Workshops
            </motion.h2>

            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="experience-card glass-panel"
                        // Alternating entrance: Even from Left, Odd from Right
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                        <div className="card-glow" />
                        <div className="exp-content">
                            <span className="exp-date">{exp.date}</span>
                            <h3 className="exp-title">{exp.title}</h3>
                            <p className="exp-desc">{exp.desc}</p>
                            <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="exp-link"
                            >
                                View Details ↗
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
