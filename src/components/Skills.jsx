import React from 'react';
import { motion } from 'framer-motion';

const stages = [
    { num: '01', name: 'Extract',       tools: ['PostgreSQL', 'MySQL', 'SQL Server', 'Power Query'] },
    { num: '02', name: 'Clean & Model', tools: ['Power Query', 'Python (Pandas)', 'Data Modelling', 'Star Schema'] },
    { num: '03', name: 'Analyse',       tools: ['DAX', 'Advanced Excel', 'Python (EDA)', 'Statistical Analysis'] },
    { num: '04', name: 'Visualise',     tools: ['Power BI', 'Power BI Service', 'Tableau', 'Matplotlib / Seaborn'] },
    { num: '05', name: 'Communicate',   tools: ['BRD / FRD', 'Stakeholder Mgmt', 'Solution Design', 'Business Analysis'] },
];

const rowBorder = '1px solid rgba(255,255,255,0.08)';

const Skills = () => (
    <section id="skills" className="section container">
        <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {stages.map((stage, idx) => (
                <motion.div
                    key={idx}
                    className="skills-row"
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    style={{ display: 'flex', alignItems: 'stretch' }}
                >
                    {/* Stage label */}
                    <div
                        className="skills-stage-label"
                        style={{
                            minWidth: '130px',
                            background: 'rgba(255,255,255,0.04)',
                            border: rowBorder,
                            borderRight: 'none',
                            borderRadius: '12px 0 0 12px',
                            padding: '0.85rem 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: '500', letterSpacing: '0.05em' }}>
                            Stage {stage.num}
                        </span>
                        <span style={{ fontSize: '0.95rem', color: 'var(--color-electric-blue)', fontWeight: '600', marginTop: '2px' }}>
                            {stage.name}
                        </span>
                    </div>

                    {/* Arrow divider */}
                    <div
                        className="skills-arrow"
                        style={{
                            width: '28px',
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
                        className="skills-tools"
                        style={{
                            flex: 1,
                            border: rowBorder,
                            borderLeft: 'none',
                            borderRadius: '0 12px 12px 0',
                            background: 'rgba(255,255,255,0.015)',
                            padding: '0.85rem 1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '0.6rem',
                        }}
                    >
                        {stage.tools.map((tool, tIdx) => (
                            <span
                                key={tIdx}
                                style={{
                                    background: 'rgba(0,210,255,0.08)',
                                    border: '1px solid rgba(0,210,255,0.5)',
                                    color: '#fff',
                                    fontWeight: '600',
                                    borderRadius: '20px',
                                    padding: '5px 14px',
                                    fontSize: '0.85rem',
                                    whiteSpace: 'nowrap',
                                }}
                            >
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
                .skills-row {
                    flex-direction: column !important;
                }
                .skills-stage-label {
                    min-width: unset !important;
                    width: 100% !important;
                    border-right: 1px solid rgba(255,255,255,0.08) !important;
                    border-bottom: none !important;
                    border-radius: 12px 12px 0 0 !important;
                }
                .skills-arrow {
                    display: none !important;
                }
                .skills-tools {
                    border-left: 1px solid rgba(255,255,255,0.08) !important;
                    border-radius: 0 0 12px 12px !important;
                    border-top: none !important;
                }
            }
            @media (max-width: 480px) {
                .skills-stage-label span:last-child {
                    font-size: 0.85rem !important;
                }
                .skills-tools span {
                    font-size: 0.75rem !important;
                    padding: 4px 10px !important;
                }
            }
        `}</style>
    </section>
);

export default Skills;
