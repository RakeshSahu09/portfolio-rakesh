import React from 'react';
import { motion } from 'framer-motion';

const tracks = [
    { label: 'TRACK', name: 'Data Science', tools: ['Machine Learning', 'NumPy', 'Scikit-learn', 'Model Evaluation'] },
    { label: 'TRACK', name: 'Big Data',     tools: ['PySpark', 'Hadoop', 'Big Data'] },
];

const rowBorder = '1px solid rgba(142,45,226,0.2)';

const Learning = () => (
    <section id="learning" className="section container">
        <h2 className="section-title">Currently <span className="text-gradient">Learning</span></h2>
        <p style={{
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            fontSize: '1.1rem',
        }}>
            Expanding from analytics into full-stack data science and big data engineering.
        </p>
        <p style={{
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            fontSize: '1.1rem',
            marginTop: '0.4rem',
            marginBottom: '3rem',
        }}>
            Domain experience across retail, hospitality &amp; enterprise BI.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {tracks.map((track, idx) => (
                <motion.div
                    key={idx}
                    className="learning-row"
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    style={{ display: 'flex', alignItems: 'stretch' }}
                >
                    {/* Stage label */}
                    <div
                        className="learning-stage-label"
                        style={{
                            minWidth: '130px',
                            background: 'rgba(142,45,226,0.06)',
                            border: rowBorder,
                            borderRight: 'none',
                            borderRadius: '12px 0 0 12px',
                            padding: '0.85rem 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{
                            fontSize: '0.7rem',
                            color: 'var(--color-text-muted)',
                            fontWeight: '500',
                            letterSpacing: '1px',
                        }}>
                            {track.label}
                        </span>
                        <span style={{
                            fontSize: '0.95rem',
                            color: 'var(--color-neon-violet)',
                            fontWeight: '600',
                            marginTop: '2px',
                        }}>
                            {track.name}
                        </span>
                    </div>

                    {/* Arrow divider */}
                    <div
                        className="learning-arrow"
                        style={{
                            width: '28px',
                            background: 'rgba(142,45,226,0.03)',
                            borderTop: rowBorder,
                            borderBottom: rowBorder,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-text-muted)',
                            fontSize: '0.85rem',
                            flexShrink: 0,
                        }}
                    >
                        →
                    </div>

                    {/* Pills area */}
                    <div
                        className="learning-tools"
                        style={{
                            flex: 1,
                            background: 'rgba(142,45,226,0.03)',
                            border: rowBorder,
                            borderLeft: 'none',
                            borderRadius: '0 12px 12px 0',
                            padding: '0.85rem 1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '0.6rem',
                        }}
                    >
                        {track.tools.map((tool, tIdx) => (
                            <span
                                key={tIdx}
                                className="learning-pill"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    background: 'rgba(142,45,226,0.1)',
                                    border: '1px solid rgba(142,45,226,0.5)',
                                    color: '#fff',
                                    fontWeight: '600',
                                    borderRadius: '20px',
                                    padding: '5px 14px',
                                    fontSize: '0.85rem',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <span style={{
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '50%',
                                    background: 'var(--color-neon-violet)',
                                    flexShrink: 0,
                                }} />
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Responsive styles */}
        <style>{`
            @media (max-width: 768px) {
                .learning-row {
                    flex-direction: column !important;
                }
                .learning-stage-label {
                    min-width: unset !important;
                    width: 100% !important;
                    border-right: 1px solid rgba(142,45,226,0.2) !important;
                    border-bottom: none !important;
                    border-radius: 12px 12px 0 0 !important;
                }
                .learning-arrow {
                    display: none !important;
                }
                .learning-tools {
                    border-left: 1px solid rgba(142,45,226,0.2) !important;
                    border-radius: 0 0 12px 12px !important;
                    border-top: none !important;
                }
            }
            @media (max-width: 480px) {
                .learning-stage-label span:last-child {
                    font-size: 0.85rem !important;
                }
                .learning-pill {
                    font-size: 0.75rem !important;
                    padding: 4px 10px !important;
                }
            }
        `}</style>
    </section>
);

export default Learning;
