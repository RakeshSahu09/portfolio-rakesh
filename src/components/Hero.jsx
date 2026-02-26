import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Eye } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                {/* Profile Image Float */}
                <motion.div
                    className="hero-image-container"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    style={{
                        position: 'relative',
                        width: '280px', /* Perfect circle */
                        height: '280px',
                        margin: '0 auto 2rem auto', /* Centers it and gives spacing below */
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-electric-blue), var(--color-neon-violet))',
                        padding: '5px',
                        boxShadow: 'var(--glow-blue)',
                        zIndex: 10
                    }}
                >
                    <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--color-darker)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                        <img
                            src="/profile.png"
                            alt="Rakesh Mohan Sahu"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', /* Will fill the circle without stretching */
                                objectPosition: 'center 15%', /* Focus on face/upper chest */
                            }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/profile.jpg";
                            }}
                        />
                    </div>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.2' }}
                >
                    Hi, I'm <br />
                    <span className="text-gradient hero-name" style={{ fontSize: '5rem', display: 'inline-block' }}>Rakesh Mohan Sahu</span>
                </motion.h1>

                <motion.h2
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ fontSize: '1.8rem', color: 'var(--color-text-muted)', fontWeight: '400', marginBottom: '1.5rem' }}
                >
                    Data Analyst → Data Scientist | Turning Raw Data into Real Decisions
                </motion.h2>

                <motion.p
                    className="hero-quote"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: '1.6', background: 'rgba(0, 210, 255, 0.1)', padding: '1rem 2rem', borderRadius: '50px', border: '1px solid rgba(0, 210, 255, 0.2)' }}
                >
                    "Dashboards to models — the data journey continues."
                </motion.p>

                <motion.div
                    className="btn-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
                >
                    <a href="#projects" className="btn-primary">
                        View Projects <ArrowRight size={18} />
                    </a>
                    <a href="https://drive.google.com/file/d/1Gn-0zjyiD5aBb2B_NCn-mbiCORYbUMGw/view?usp=sharing" className="btn-secondary" target="_blank" rel="noreferrer">
                        View Resume <Eye size={18} />
                    </a>
                    <a href="https://drive.google.com/uc?export=download&id=1Gn-0zjyiD5aBb2B_NCn-mbiCORYbUMGw" className="btn-secondary" target="_blank" rel="noreferrer">
                        Download Resume <Download size={18} />
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Contact Me <Mail size={18} />
                    </a>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
