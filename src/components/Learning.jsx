import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Cpu, Database } from 'lucide-react';

const learningSkills = [
    { name: "Data Science", icon: <Database size={24} color="var(--color-electric-blue)" /> },
    { name: "AI / ML", icon: <Brain size={24} color="var(--color-neon-violet)" /> },
    { name: "PySpark", icon: <Sparkles size={24} color="var(--color-electric-blue)" /> },
    { name: "Hadoop", icon: <Database size={24} color="var(--color-neon-violet)" /> },
    { name: "Big Data", icon: <Cpu size={24} color="var(--color-electric-blue)" /> }
];

const Learning = () => {
    return (
        <section id="learning" className="section container">
            <h2 className="section-title">Currently <span className="text-gradient">Learning</span></h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                Always expanding my horizons. Here are the technologies I am currently exploring and mastering:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                {learningSkills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5, boxShadow: 'var(--glow-violet)' }}
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(142,45,226,0.3)',
                            borderRadius: '16px',
                            padding: '1.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            minWidth: '160px',
                            cursor: 'default',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <div style={{
                            width: '60px', height: '60px', borderRadius: '50%',
                            background: 'rgba(5, 7, 10, 0.5)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}>
                            {skill.icon}
                        </div>
                        <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', textAlign: 'center' }}>
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Learning;
