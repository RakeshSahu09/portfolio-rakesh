import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Download, ArrowUp, Eye } from 'lucide-react';

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="contact" className="section container" style={{ paddingBottom: '2rem' }}>
            <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>

            <motion.div
                className="glass-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
            >
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Interested in working together or have a question?
                    Feel free to reach out via email or let's connect on LinkedIn.
                </p>

                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', width: '100%' }}>

                    <a href="tel:+919337393870" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,210,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-electric-blue)', boxShadow: 'var(--glow-blue)', color: 'var(--color-electric-blue)', transition: 'all 0.3s' }}>
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 style={{ margin: 0, color: '#fff' }}>Phone</h4>
                            <span style={{ color: 'var(--color-text-muted)' }}>+91 9337393870</span>
                        </div>
                    </a>

                    <a href="mailto:sahurakesh00098@gmail.com" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(142,45,226,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-neon-violet)', boxShadow: 'var(--glow-violet)', color: 'var(--color-neon-violet)', transition: 'all 0.3s' }}>
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 style={{ margin: 0, color: '#fff' }}>Email</h4>
                            <span style={{ color: 'var(--color-text-muted)' }}>sahurakesh00098@gmail.com</span>
                        </div>
                    </a>

                </div>

                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                    <a href="https://linkedin.com/in/rakeshmohansahu" target="_blank" rel="noreferrer" style={{ padding: '0.8rem', background: '#0e76a8', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', boxShadow: '0 0 15px rgba(14, 118, 168, 0.5)' }}>
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/rakeshmohansahu" target="_blank" rel="noreferrer" style={{ padding: '0.8rem', background: '#333', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }}>
                        <Github size={24} />
                    </a>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'var(--card-border)', margin: '1rem 0' }}></div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="https://drive.google.com/file/d/1Gn-0zjyiD5aBb2B_NCn-mbiCORYbUMGw/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        View Complete Resume <Eye size={20} style={{ marginLeft: '10px' }} />
                    </a>
                    <a href="https://drive.google.com/uc?export=download&id=1Gn-0zjyiD5aBb2B_NCn-mbiCORYbUMGw" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        Download Resume <Download size={20} style={{ marginLeft: '10px' }} />
                    </a>
                </div>

            </motion.div>

            {/* Floating Back to Top */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, boxShadow: 'var(--glow-blue)' }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'var(--color-darker)',
                    border: '1px solid var(--color-electric-blue)',
                    color: 'var(--color-electric-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 1000
                }}
            >
                <ArrowUp size={24} />
            </motion.button>
        </section>
    );
};

export default Contact;
