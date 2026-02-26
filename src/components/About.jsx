import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Users, Target, FileText } from 'lucide-react';

const stats = [
    { icon: <FileText size={40} color="var(--color-electric-blue)" />, val: "20+", label: "BRDs & FRDs" },
    { icon: <Target size={40} color="var(--color-neon-violet)" />, val: "15+", label: "Solution Designs" },
    { icon: <Users size={40} color="var(--color-electric-blue)" />, val: "20+", label: "Stakeholder Sessions" },
    { icon: <Database size={40} color="var(--color-neon-violet)" />, val: "1.8M+", label: "Records Analyzed" },
    { icon: <TrendingUp size={40} color="var(--color-electric-blue)" />, val: "15+", label: "DAX Measures" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const About = () => {
    return (
        <section id="about" className="section container">
            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>

            <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'center' }}>

                <motion.div
                    className="glass-card"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }} className="text-gradient">
                        Professional Summary
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1rem', fontSize: '1.1rem' }}>
                        I specialize in transforming complex data into actionable business intelligence — and now expanding into <strong style={{ color: '#fff' }}>Data Science</strong>.
                        With expertise in <strong style={{ color: '#fff' }}>Power BI, SQL, Excel, and Python</strong>,
                        I build comprehensive dashboards and uncover hidden business insights. Currently upskilling in <strong style={{ color: '#fff' }}>Machine Learning</strong> and <strong style={{ color: '#fff' }}>Big Data</strong> to deliver end-to-end data solutions.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-main)', display: 'grid', gap: '1rem' }}>
                        {[
                            "Business Requirement Documentation (BRD, FRD)",
                            "Dashboard Building & Business Insights",
                            "Stakeholder Management",
                            "Data-Driven Decision-Making"
                        ].map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-electric-blue)', boxShadow: 'var(--glow-blue)' }}></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="glass-card"
                            style={{ textAlign: 'center', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', cursor: 'default' }}
                        >
                            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                {stat.icon}
                            </div>
                            <h4 style={{ fontSize: '2.5rem', margin: 0, background: '-webkit-linear-gradient(45deg, #fff, #a0aab2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                {stat.val}
                            </h4>
                            <p style={{ color: 'var(--color-electric-blue)', fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default About;
