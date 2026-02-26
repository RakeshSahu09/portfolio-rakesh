import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const certs = [
    { name: "Business Analysis – Microsoft", url: "https://www.linkedin.com/learning/certificates/b910da6762505099d5ab61aed5a31f5ad21f57eaeab14cb0c37987280f5f8069" },
    { name: "MS Excel – Codebasics", url: "https://codebasics.io/certificate/CB-51-513054" },
    { name: "Power BI – Codebasics", url: "https://codebasics.io/certificate/CB-49-513054" },
    { name: "AI & Data Fest 2025", url: "https://codebasics.io/certificate/CB-E-38-15367" },
    { name: "SQL Beginner to Advanced For Data Professionals", url: "https://codebasics.io/certificate/CB-50-513054" }
];

const Certifications = () => {
    const renderCert = (cert, idx, isRowOne) => (
        <motion.a
            key={idx}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -5, scale: 1.05, boxShadow: 'var(--glow-blue)' }}
            className="cert-card"
            style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                border: '1px solid rgba(0,210,255,0.2)',
                borderRadius: '50px',
                padding: '1rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                textDecoration: 'none',
                flex: '1 1 calc(33% - 1.5rem)',
                minWidth: '280px',
                maxWidth: '400px'
            }}
        >
            {isRowOne ? <Award size={20} color="var(--color-neon-violet)" /> : <Star size={20} color="var(--color-electric-blue)" />}
            <span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#fff', textAlign: 'center' }}>
                {cert.name}
            </span>
        </motion.a>
    );

    return (
        <section id="certifications" className="section container">
            <h2 className="section-title">Achievements & <span className="text-gradient">Certifications</span></h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                {/* Row 1: First 3 Certifications */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', width: '100%', maxWidth: '1200px' }}>
                    {certs.slice(0, 3).map((cert, idx) => renderCert(cert, idx, true))}
                </div>

                {/* Row 2: Remaining 2 Certifications */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', width: '100%', maxWidth: '1200px' }}>
                    {certs.slice(3, 5).map((cert, idx) => renderCert(cert, idx + 3, false))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
