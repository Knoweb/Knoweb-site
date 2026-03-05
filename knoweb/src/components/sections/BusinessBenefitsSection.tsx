const benefits = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
        ),
        title: 'Real-Time Visibility',
        desc: 'Operational dashboards and live reporting across all business functions and branches.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        ),
        title: 'Reduced Manual Errors',
        desc: 'Structured automation removes repetitive manual tasks and reduces costly human errors.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        ),
        title: 'Compliance Confidence',
        desc: 'Built-in regulatory compliance support for statutory requirements, tax, and labour law.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="14" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="10" y2="18"></line>
            </svg>
        ),
        title: 'Better Decision-Making',
        desc: 'Consolidated data and automated reports give management the insight to make faster, better decisions.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="4"></line>
                <line x1="12" y1="20" x2="12" y2="23"></line>
                <line x1="1" y1="12" x2="4" y2="12"></line>
                <line x1="20" y1="12" x2="23" y2="12"></line>
            </svg>
        ),
        title: 'Operational Scalability',
        desc: 'Systems that grow with you — from a single location to multi-branch enterprise operations.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 12 12 17 22 12"></polyline>
                <polyline points="2 17 12 22 22 17"></polyline>
            </svg>
        ),
        title: 'Integrated Workflows',
        desc: 'Connected modules eliminate data silos and create seamless cross-functional business processes.',
    },
];

export default function BusinessBenefitsSection() {
    // Duplicate the array to create a seamless infinite loop
    const doubledBenefits = [...benefits, ...benefits];

    return (
        <section style={{
            background: '#ffffff',
            padding: '100px 0',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div className="container-max" style={{ marginBottom: '40px' }}>
                <div style={{ textAlign: 'center', color: '#0F172A' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        background: 'rgba(0, 87, 255, 0.05)',
                        border: '1px solid rgba(0, 87, 255, 0.1)',
                        borderRadius: '0',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        color: '#3B82F6',
                        marginBottom: '16px'
                    }}>
                        BUSINESS BENEFITS
                    </div>
                    <h2 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(2.5rem, 5vw, 3.25rem)',
                        fontWeight: 800,
                        color: '#0F172A',
                        margin: 0,
                        letterSpacing: '-0.02em',
                    }}>
                        The Value We Deliver
                    </h2>
                </div>
            </div>

            {/* Marquee Container */}
            <div style={{
                position: 'relative',
                width: '100vw',
                left: '50%',
                transform: 'translateX(-50%)',
                overflow: 'hidden',
                padding: '20px 0'
            }}>
                {/* Fade transparent gradients on edges */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: '150px',
                    background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '150px',
                    background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }} />

                <div className="marquee-track">
                    {doubledBenefits.map((b, i) => (
                        <div key={`${b.title}-${i}`} className="marquee-card">
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: '#0057FF', // Blue accent icon
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '20px',
                                boxShadow: '0 8px 16px rgba(0, 87, 255, 0.3)'
                            }}>
                                {b.icon}
                            </div>
                            <h3 style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontWeight: 800,
                                fontSize: '1.25rem',
                                color: '#0F172A',
                                marginBottom: '12px',
                                letterSpacing: '0.01em'
                            }}>
                                {b.title}
                            </h3>
                            <p style={{
                                color: '#4B5563',
                                fontSize: '1rem',
                                lineHeight: 1.6
                            }}>
                                {b.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 12px)); } /* 50% shift + half the 24px gap */
                }
                .marquee-track {
                    display: flex;
                    gap: 24px;
                    width: max-content;
                    animation: marqueeScroll 28s linear infinite;
                    padding: 0 12px;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                .marquee-card {
                    flex: 0 0 340px;
                    background: #f8fafc;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    border-radius: 0;
                    padding: 40px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: default;
                    display: flex;
                    flex-direction: column;
                }
                .marquee-card:hover {
                    transform: translateY(-8px);
                    background: #ffffff;
                    border-color: rgba(0, 87, 255, 0.2);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    z-index: 10;
                }
                @media (max-width: 768px) {
                    .marquee-card {
                        flex: 0 0 280px; /* Smaller card on mobile to fit 2 mostly */
                        padding: 24px;
                    }
                    .marquee-track {
                        animation-duration: 20s; /* slightly faster on mobile */
                    }
                }
            `}</style>
        </section>
    );
}
