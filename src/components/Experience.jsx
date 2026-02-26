import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
    {
        role: "Business Development Associate",
        company: "Agile ICO",
        date: "April, 2024 - June, 2025",
        desc: [
            "20+ BRD & FRD created for technical implementation.",
            "Drafted 15+ comprehensive business proposals.",
            "Led numerous stakeholder workshops.",
            "Authored extensive solution design documentation."
        ]
    }
];

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="section container" ref={ref}>
            <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>

            <div style={{ position: 'relative', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* SVG Timeline Line */}
                <svg className="timeline-line" style={{ position: 'absolute', top: 0, left: '20px', width: '4px', height: '100%', zIndex: '-1' }}>
                    <motion.line
                        x1="2"
                        y1="0"
                        x2="2"
                        y2="100%"
                        stroke="var(--color-electric-blue)"
                        strokeWidth="4"
                        style={{ pathLength }}
                    />
                </svg>

                {experienceData.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className="glass-card timeline-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        style={{ position: 'relative', marginLeft: '2rem' }}
                    >
                        <div className="timeline-dot" style={{ position: 'absolute', left: '-50px', top: '24px', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-neon-violet)', boxShadow: 'var(--glow-violet)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: 0 }}>{exp.role}</h3>
                                <span style={{ fontSize: '1.1rem', color: 'var(--color-electric-blue)', fontWeight: '600' }}>
                                    <Briefcase size={16} style={{ display: 'inline', marginRight: '6px' }} />
                                    {exp.company}
                                </span>
                            </div>
                            <span style={{ background: 'rgba(142,45,226,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', color: '#fff', fontSize: '0.9rem', border: '1px solid var(--card-border)' }}>
                                {exp.date}
                            </span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {exp.desc.map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                    <span style={{ color: 'var(--color-electric-blue)' }}>✦</span> {item}
                                </li>
                            ))}
                        </ul>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
