import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { projects } from './Projects';

const KeyFindings = () => {
    const { id } = useParams();
    const project = projects[parseInt(id)];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="section container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Project Not Found</h2>
                <Link to="/" className="btn-primary">
                    <ArrowLeft size={18} /> Back to Selection
                </Link>
            </div>
        );
    }

    return (
        <section className="section container" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ maxWidth: '800px', margin: '0 auto' }}
            >
                <Link to="/#projects" className="btn-secondary" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                    <ArrowLeft size={18} /> Back to Projects
                </Link>

                <h1 className="key-findings-title" style={{ color: '#fff' }}>
                    {project.title}
                </h1>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    {project.tools.map((tool, i) => (
                        <span key={i} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600', color: project.accent, border: `1px solid ${project.accent}50` }}>
                            {tool}
                        </span>
                    ))}
                </div>

                <div className="glass-card key-findings-card" style={{ borderLeft: `4px solid ${project.accent}` }}>
                    {project.content ? (
                        project.content
                    ) : (
                        <>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: project.accent }}>
                                Key Findings & Impact
                            </h2>

                            <p style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                                {project.desc}
                            </p>

                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#fff' }}>Core Insights</h3>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {project.highlights.map((h, i) => (
                                    <motion.li
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        key={i}
                                        style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}
                                    >
                                        <CheckCircle size={24} color={project.accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span>{h}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default KeyFindings;
