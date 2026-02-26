import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Data & Analytics",
        items: ["Power BI", "Power BI Service", "DAX", "Power Query", "Advanced Excel", "Tableau"]
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "SQL Server"]
    },
    {
        category: "Programming",
        items: ["Python"]
    },
    {
        category: "Core Strengths",
        items: ["Data Cleaning", "Data Modelling", "Data Visualization", "Data Preparation", "Business Analysis"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section container">
            <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {skillsData.map((group, groupIdx) => (
                    <motion.div
                        key={groupIdx}
                        className="glass-card"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <h3 style={{ fontSize: '1.4rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '1.5rem', color: 'var(--color-electric-blue)' }}>
                            {group.category}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {group.items.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05, y: -2, boxShadow: 'var(--glow-violet)' }}
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '0.75rem 1.2rem',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(142,45,226,0.3)',
                                        fontSize: '0.95rem',
                                        fontWeight: '500',
                                        cursor: 'default',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
