import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

import { projects } from './projectsData';

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="glass-card projects-card"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr',
                            gap: '2rem',
                            borderLeft: `3px solid ${project.accent}`,
                            position: 'relative'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>
                                {project.title}
                            </h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                {project.desc}
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {project.highlights.map((h, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--color-text-main)' }}>
                                        <div style={{ marginTop: '0.4rem', width: '8px', height: '8px', borderRadius: '50%', background: project.accent, boxShadow: `0 0 10px ${project.accent}` }}></div>
                                        <span style={{ fontSize: '0.95rem' }}>{h}</span>
                                    </li>
                                ))}
                            </ul>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {project.tools.map((tool, i) => (
                                    <span key={i} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', color: project.accent, border: `1px solid rgba(255,255,255,0.1)` }}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '2rem' }}>
                            <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Link to={`/project/${idx}`} className="btn-primary" style={{ width: '100%', textDecoration: 'none' }}>
                                    <ExternalLink size={18} /> Key Findings
                                </Link>
                                <a href={project.github || "#"} target="_blank" rel="noreferrer" className="btn-secondary" style={{ width: '100%', textDecoration: 'none' }}>
                                    <Github size={18} /> View GitHub
                                </a>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
