'use client';
import Link from 'next/link';

const problems = [
    {
        problem: 'Fragmented Financial Ecosystems',
        impact: 'Delayed reconciliations, high error rates, and critical compliance vulnerabilities.',
        solution: 'Unified Accounting Engine',
        href: '/solutions#accounting'
    },
    {
        problem: 'Stagnant HR & Workforce Management',
        impact: 'Operational bottlenecks, payroll inaccuracies, and declining employee retention.',
        solution: 'Smart HR & Payroll Suite',
        href: '/solutions#hr'
    },
    {
        problem: 'Siloed Enterprise Data Streams',
        impact: 'Severe data fragmentation, manual re-entry overhead, and inconsistent reporting.',
        solution: 'Integrated Business Intelligence',
        href: '/solutions'
    },
    {
        problem: 'Blind Operational Decision Making',
        impact: 'Reactive management strategies, missed market opportunities, and strategic misalignment.',
        solution: 'Real-Time Insights Dashboard',
        href: '/solutions#monitoring'
    },
];

export default function ProblemsSection() {
    return (
        <section className="section-pad" style={{
            backgroundImage: 'linear-gradient(135deg, rgba(10, 15, 30, 0.7) 0%, rgba(10, 15, 30, 0.85) 100%), url("/bussiness%20problems.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            borderTop: 'none',
            borderBottom: 'none',
            position: 'relative'
        }}>
            <div className="container-max" style={{ position: 'relative', zIndex: 1, padding: '60px 0' }}>
                <div className="section-header centered" style={{ marginBottom: '80px' }}>
                    <div className="tag" style={{
                        marginBottom: '24px',
                        display: 'inline-flex',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#60A5FA',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        padding: '10px 20px',
                        borderRadius: '0',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                    }}>SYSTEMIC CHALLENGES</div>
                    <h2 style={{
                        color: '#ffffff',
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        marginBottom: '24px',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1
                    }}>
                        Common Business Problems <span style={{ color: '#3B82F6' }}>We Eliminate</span>
                    </h2>
                    <p style={{
                        color: '#9CA3AF',
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                        fontWeight: 400
                    }}>
                        Before deploying technology, we dissect the core operational friction points that hinder your growth.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
                    {problems.map((p, i) => (
                        <div key={p.problem} className="problem-row" style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '0',
                            padding: '32px 40px',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'default',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr auto auto',
                            alignItems: 'center',
                            gap: '32px'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                                e.currentTarget.style.transform = 'scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                            }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '0',
                                background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
                                color: '#fff',
                                fontWeight: 800, fontSize: '1.25rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'Outfit, sans-serif', flexShrink: 0,
                                boxShadow: '0 8px 20px rgba(37, 99, 235, 0.3)'
                            }}>
                                {i + 1}
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px', letterSpacing: '0.01em' }}>{p.problem}</div>
                                <div style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: 1.5, maxWidth: '450px' }}>
                                    {p.impact}
                                </div>
                            </div>

                            <div style={{ paddingLeft: '24px', borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <div style={{ color: '#9CA3AF', fontSize: '0.75rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Recommended Solution</div>
                                <div style={{ color: '#60A5FA', fontWeight: 700, fontSize: '1rem' }}>{p.solution}</div>
                            </div>

                            <Link href={p.href} style={{
                                background: '#ffffff',
                                color: '#0F172A',
                                padding: '12px 24px',
                                borderRadius: '0',
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#3B82F6';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.color = '#0F172A';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.1)';
                                }}
                            >
                                Details
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12L10 8L6 4" /></svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
