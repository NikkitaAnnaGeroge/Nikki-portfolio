import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section className="contact-section" ref={ref}>
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="contact-title">Let's Connect</h2>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-input" placeholder="Your Name" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-input" placeholder="your@email.com" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea className="form-textarea" placeholder="Something nice..."></textarea>
                    </div>

                    <button type="submit" className="submit-btn" onClick={() => window.location.href = 'mailto:nikkita@example.com'}>
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
