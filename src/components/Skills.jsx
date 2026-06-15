import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Code2, Globe2, BrainCircuit, Rocket, Users2 } from 'lucide-react';
import './Skills.css';

const skills = [
    { name: "UI/UX Design", icon: <Palette size={40} strokeWidth={1.5} />, desc: "User Research, Wireframing, Prototyping" },
    { name: "Frontend Dev", icon: <Code2 size={40} strokeWidth={1.5} />, desc: "React, Vue, Modern JavaScript" },
    { name: "Web Technologies", icon: <Globe2 size={40} strokeWidth={1.5} />, desc: "HTML5, CSS3, Three.js" },
    { name: "Problem Solving", icon: <BrainCircuit size={40} strokeWidth={1.5} />, desc: "Digital Logic, Systems Thinking" },
    { name: "Product Thinking", icon: <Rocket size={40} strokeWidth={1.5} />, desc: "Strategy, User-Centricity" },
    { name: "Collaboration", icon: <Users2 size={40} strokeWidth={1.5} />, desc: "Hackathons, Team Leadership" }
];

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="skills-section" ref={ref}>
            <motion.h2
                className="skills-title"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
            >
                Expertise
            </motion.h2>

            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        variants={itemVariants}
                    >
                        <div className="skill-icon">{skill.icon}</div>
                        <h3 className="skill-name">{skill.name}</h3>
                        <p className="skill-desc">{skill.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;    
