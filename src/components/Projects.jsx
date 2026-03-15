import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

import { projects } from './projectsData';

const projectMeta = [
    {
        pipeline: ['SQL', 'Power Query', 'DAX', 'Power BI'],
        pipelineEnd: '5 dashboards',
        metrics: [
            { val: '5',   label: 'Dept. views built' },
            { val: '15+', label: 'DAX measures' },
            { val: '81%', label: 'Forecast accuracy' },
        ]
    },
    {
        pipeline: ['CSV', 'PostgreSQL', 'SQL', 'EDA'],
        pipelineEnd: '4 analyses',
        metrics: [
            { val: '166K+', label: 'Transactions' },
            { val: '500',   label: 'Stores analyzed' },
            { val: '65.6%', label: 'Revenue drivers' },
        ]
    },
    {
        pipeline: ['CSV', 'Pandas', 'EDA', 'Matplotlib'],
        pipelineEnd: '5 insights',
        metrics: [
            { val: '134K', label: 'Clean bookings' },
            { val: '25',   label: 'Properties' },
            { val: '58%',  label: 'Avg occupancy' },
        ]
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {projects.map((project, idx) => {
                    const meta = projectMeta[idx] || null;
                    return (
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
                                {/* Block 1 — Tool pipeline */}
                                {meta && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem', marginBottom: '0.85rem' }}>
                                        {meta.pipeline.map((step, sIdx) => (
                                            <React.Fragment key={sIdx}>
                                                <span style={{
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    color: 'var(--color-text-muted)',
                                                    borderRadius: '20px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    padding: '3px 10px',
                                                    whiteSpace: 'nowrap',
                                                }}>
                                                    {step}
                                                </span>
                                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>→</span>
                                            </React.Fragment>
                                        ))}
                                        {/* Pipeline end tag */}
                                        <span style={{
                                            background: `${project.accent}18`,
                                            border: `1px solid ${project.accent}`,
                                            color: project.accent,
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            padding: '3px 10px',
                                            whiteSpace: 'nowrap',
                                        }}>
                                            {meta.pipelineEnd}
                                        </span>
                                    </div>
                                )}

                                {/* Block 2 — Metrics strip */}
                                {meta && (
                                    <div className="project-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '1.25rem' }}>
                                        {meta.metrics.map((m, mIdx) => (
                                            <div key={mIdx} style={{
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.07)',
                                                borderRadius: '10px',
                                                padding: '0.75rem 1rem',
                                            }}>
                                                <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#fff', lineHeight: 1 }}>
                                                    {m.val}
                                                </div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                                                    {m.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>
                                    {project.title}
                                </h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    {project.desc}
                                </p>

                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {project.highlights.map((h, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--color-text-main)' }}>
                                            <div style={{ marginTop: '0.4rem', width: '8px', height: '8px', borderRadius: '50%', background: project.accent, boxShadow: `0 0 10px ${project.accent}`, flexShrink: 0 }}></div>
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
                    );
                })}
            </div>

            {/* Responsive styles for project metrics */}
            <style>{`
                @media (max-width: 768px) {
                    .project-metrics > div {
                        padding: 0.5rem 0.75rem !important;
                    }
                    .project-metrics > div > div:first-child {
                        font-size: 1.1rem !important;
                    }
                }
                @media (max-width: 480px) {
                    .glass-card.projects-card {
                        padding: 1.2rem !important;
                    }
                    .project-metrics > div {
                        padding: 0.5rem 0.6rem !important;
                    }
                    .project-metrics > div > div:first-child {
                        font-size: 1rem !important;
                    }
                    .project-metrics > div > div:last-child {
                        font-size: 0.65rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
