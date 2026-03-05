'use client';

import Link from 'next/link';

const caseStudies = [
    {
        title: 'FinTech Startup - Stealth Mode',
        highlights: ['SaaS', 'Stripe Integration'],
        image: '/1.png'
    },
    {
        title: 'Greenify - Social Engagement',
        highlights: ['Interactive', 'Fluid Color Palette'],
        image: '/2.png'
    },
    {
        title: 'LawLex - Webflow Website',
        highlights: ['CMS', 'Dynamic Filtering'],
        image: '/3.png'
    },
    {
        title: 'Quizora - No-Code MVP for EdTech',
        highlights: ['Gamified', 'Stripe Subscription'],
        image: '/4.png'
    }
];

export default function CustomerSuccessSection() {
    return (
        <section style={{ background: '#0F1115', padding: '120px 0' }}>
            <div className="container-max" style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        margin: 0,
                        letterSpacing: '-0.02em',
                    }}>
                        Customer Success Highlights
                    </h2>
                </div>

                {/* 2-Column Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '48px 40px',
                    marginBottom: '60px'
                }} className="selected-work-grid">
                    {caseStudies.map((study, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* Large Image Area */}
                            <div style={{
                                width: '100%',
                                aspectRatio: '4/3',
                                borderRadius: '24px',
                                marginBottom: '20px',
                                overflow: 'hidden',
                                position: 'relative',
                            }}>
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '12px',
                                letterSpacing: '0.01em',
                            }}>
                                {study.title}
                            </h3>

                            {/* Tags (Pills) */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {study.highlights.map((highlight, idx) => (
                                    <span key={idx} style={{
                                        display: 'inline-block',
                                        padding: '4px 12px',
                                        borderRadius: '0',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: '#D1D5DB',
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.02em',
                                    }}>
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Button */}
                <div style={{ textAlign: 'center' }}>
                    <Link href="/portfolio" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px 28px',
                        borderRadius: '0',
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.color = '#000000';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#ffffff';
                        }}>
                        View All Previous Works
                    </Link>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .selected-work-grid {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
}
