import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Menu, X, Github } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        transition: 'all 0.3s ease',
    },
    scrolled: {
        background: 'rgba(5, 7, 10, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--card-border)',
        padding: '1rem 2rem'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1.5rem',
        fontWeight: '800',
        color: '#fff'
    },
    links: {
        display: 'flex',
        gap: '2rem',
        listStyle: 'none'
    },
    link: {
        color: 'var(--color-text-main)',
        fontWeight: '500',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        cursor: 'pointer',
        transition: 'color 0.3s ease'
    }
};

const sectionMap = {
    Home: 'hero',
    About: 'about',
    Skills: 'skills',
    Learning: 'learning',
    Projects: 'projects',
    Experience: 'experience',
    Certifications: 'certifications',
    Contact: 'contact'
};

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ids = ['hero', 'about', 'skills', 'learning', 'projects', 'experience', 'certifications', 'contact'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.3 }
        );
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    const scrollTo = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleNavClick = (item) => {
        if (item === 'Home') {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            scrollTo(item.toLowerCase());
        }
    };

    return (
        <nav style={{ ...styles.nav, ...(scrolled ? styles.scrolled : {}) }}>
            <div style={{ ...styles.logo, cursor: 'pointer', zIndex: 101 }} className="text-gradient" onClick={() => { navigate('/'); window.scrollTo(0, 0); setMobileMenuOpen(false); }}>
                <Layers size={28} color="var(--color-electric-blue)" /> R.M.S
            </div>

            {/* Desktop Menu */}
            <ul style={styles.links} className="nav-links desktop-only">
                {['Home', 'About', 'Skills', 'Learning', 'Projects', 'Experience', 'Certifications', 'Contact'].map(item => (
                    <li key={item}>
                        <span
                            style={styles.link}
                            className={`nav-link ${activeSection === sectionMap[item] ? 'active' : ''}`}
                            onClick={() => handleNavClick(item)}
                        >
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
            <div className="desktop-only" style={{ display: 'flex', alignItems: 'center' }}>
                <a href="https://github.com/RakeshSahu09" target="_blank" rel="noreferrer" aria-label="GitHub profile" style={{ color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', transition: 'color 0.3s' }}>
                    <Github size={20} />
                </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div
                className="mobile-toggle"
                style={{ zIndex: 101, cursor: 'pointer', display: 'none' }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
                {mobileMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, width: '100%', height: '100vh',
                        background: 'rgba(5, 7, 10, 0.95)',
                        backdropFilter: 'blur(15px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 100
                    }}
                >
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
                        {['Home', 'About', 'Skills', 'Learning', 'Projects', 'Experience', 'Certifications', 'Contact'].map(item => (
                            <li key={item}>
                                <span
                                    style={{ ...styles.link, fontSize: '1.5rem' }}
                                    className={`nav-link ${activeSection === sectionMap[item] ? 'active' : ''}`}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        handleNavClick(item);
                                    }}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-only { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navigation;
