'use client';

const audiences = [
    {
        icon: (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21V9l9-6 9 6v12M9 21v-6h6v6" />
            </svg>
        ),
        title: 'SMEs & Growing Businesses',
        desc: 'Small and medium enterprises scaling their operations with structured digital systems.',
    },
    {
        icon: (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
            </svg>
        ),
        title: 'Retail & Hospitality Operators',
        desc: 'Single and multi-outlet retailers, restaurants, and hospitality businesses.',
    },
    {
        icon: (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" />
            </svg>
        ),
        title: 'Multi-Branch Organizations',
        desc: 'Businesses managing operations across multiple locations requiring centralized visibility.',
    },
    {
        icon: (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
        title: 'Professional Services',
        desc: 'Service firms, consultancies, and professional organizations managing client operations.',
    },
    {
        icon: (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
        title: 'Sector-Specific Operators',
        desc: 'Industry verticals with specialized operational requirements and compliance needs.',
    },
    {
        icon: (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        title: 'Custom Workflow Organizations',
        desc: 'Organizations with complex, unique processes that require tailored digital solutions.',
    },
];

export default function TargetAudienceSection() {
    return (
        <section style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94)), url(/audience.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '100px 0'
        }}>
            <div className="container-max">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        fontWeight: 800, color: '#111827',
                        lineHeight: 1.1, letterSpacing: '-0.02em',
                        marginBottom: '16px',
                    }}>
                        Who Knoweb Is Built For
                    </h2>

                    <p style={{
                        color: '#6B7280', fontSize: '1.05rem',
                        lineHeight: 1.7, maxWidth: '640px',
                        margin: '0 auto'
                    }}>
                        "We build operational platforms for organizations ready to scale beyond manual processes."
                    </p>
                </div>

                {/* Grid of floating cards */}
                <div className="audience-card-grid">
                    {audiences.map((aud, i) => (
                        <div key={i} className="audience-card">
                            <div className="card-icon">
                                {aud.icon}
                            </div>
                            <h3>{aud.title}</h3>
                            <p>{aud.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .audience-card-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }
                
                .audience-card {
                    background: #ffffff;
                    padding: 48px 36px 44px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.03); /* Soft, subtle standard shadow */
                    border: 1px solid rgba(0,0,0,0.02);
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: default;
                    position: relative;
                    z-index: 1;
                }
                
                .audience-card .card-icon {
                    color: #004FEB; /* Default blue icon */
                    margin-bottom: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                
                .audience-card h3 {
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 800;
                    color: #111827;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    margin-bottom: 16px;
                    line-height: 1.4;
                }
                
                .audience-card p {
                    color: #6B7280;
                    font-size: 0.92rem;
                    line-height: 1.7;
                    margin: 0;
                }

                /* Hover States */
                .audience-card:hover {
                    background: #004FEB; /* Knoweb blue */
                    box-shadow: 0 20px 50px rgba(0, 79, 235, 0.25);
                    transform: translateY(-4px);
                    border-color: transparent;
                    z-index: 2;
                }
                
                .audience-card:hover .card-icon {
                    color: #ffffff; /* White icon */
                    transform: scale(1.05); /* Slight pop of icon */
                }
                
                .audience-card:hover h3 {
                    color: #ffffff;
                }
                
                .audience-card:hover p {
                    color: rgba(255, 255, 255, 0.85);
                }

                @media (max-width: 992px) {
                    .audience-card-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
                }
                @media (max-width: 600px) {
                    .audience-card-grid { grid-template-columns: 1fr; gap: 20px; }
                    .audience-card { padding: 36px 28px; }
                }
            `}</style>
        </section>
    );
}
