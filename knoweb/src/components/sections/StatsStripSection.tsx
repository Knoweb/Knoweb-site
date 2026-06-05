'use client';

const stats = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: 'visible' }}>
                <circle cx="12" cy="12" r="3.5" className="animated-sun-pulse" style={{ transformOrigin: '12px 12px', animation: 'sun-pulse 3s ease-in-out infinite' }} />
                <g className="animated-sun-spin" style={{ transformOrigin: '12px 12px', animation: 'sun-spin 16s linear infinite' }}>
                    <line x1="12" y1="2" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                    <line x1="17.66" y1="7.05" x2="19.07" y2="5.64" />
                </g>
            </svg>
        ),
        value: '2–4',
        unit: 'Weeks',
        label: 'Fast Implementation',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: 'visible' }}>
                <g className="animated-rocket-float" style={{ transformOrigin: '12px 12px', animation: 'rocket-float 3.5s ease-in-out infinite' }}>
                    <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5 2 0 4-1 5.5-2.5L18.5 8.5C21 6 22 2.5 22 2c-.5 0-4 1-6.5 3.5L4.5 16.5z" />
                    <path d="M12 15l-3-3m3 3l-2.5 4.5M9 12L4.5 9.5" />
                    <path d="M3.5 20.5c-1 1-1.5 2.5-1.5 3 0.5 0 2-0.5 3-1.5" className="animated-rocket-flame" style={{ transformOrigin: '3.5px 22px', animation: 'rocket-flame 0.5s ease-in-out infinite alternate', stroke: '#004FEB', strokeWidth: 2 }} />
                </g>
            </svg>
        ),
        value: '50+',
        unit: '',
        label: 'Businesses Deployed',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: 'visible' }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="12" x2="12" y2="7" className="animated-clock-hour" style={{ transformOrigin: '12px 12px', animation: 'clock-hand-spin 20s linear infinite' }} />
                <line x1="12" y1="12" x2="16" y2="12" className="animated-clock-min" style={{ transformOrigin: '12px 12px', animation: 'clock-hand-spin 3s linear infinite' }} />
            </svg>
        ),
        value: '10+',
        unit: '',
        label: 'Years of Pixel‑Perfect Craft',
    },
];

export default function StatsStripSection() {
    return (
        <section
            style={{
                background: '#ffffff',
                borderTop: '1px solid #E5E7EB',
                borderBottom: '1px solid #E5E7EB',
                padding: '52px 0',
            }}
        >
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes sun-spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes sun-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.18); }
                }
                @keyframes rocket-float {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(3px, -3px); }
                }
                @keyframes rocket-flame {
                    0%, 100% { transform: scale(0.8); opacity: 0.7; }
                    50% { transform: scale(1.2); opacity: 1; }
                }
                @keyframes clock-hand-spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                .stat-card:hover .animated-sun-spin {
                    animation: sun-spin 3s linear infinite !important;
                }
                .stat-card:hover .animated-sun-pulse {
                    animation: sun-pulse 0.7s ease-in-out infinite !important;
                }
                .stat-card:hover .animated-rocket-float {
                    animation: rocket-float 0.8s ease-in-out infinite !important;
                }
                .stat-card:hover .animated-clock-hour {
                    animation: clock-hand-spin 5s linear infinite !important;
                }
                .stat-card:hover .animated-clock-min {
                    animation: clock-hand-spin 0.8s linear infinite !important;
                }
            `}} />
            
            <div className="container-max">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '0',
                    }}
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '22px',
                                padding: '28px 48px',
                                borderRight: i < stats.length - 1 ? '1px solid #E5E7EB' : 'none',
                                transition: 'background 0.2s',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,79,235,0.04)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                            }}
                        >
                            {/* Large circular icon */}
                            <div
                                style={{
                                    width: '64px', height: '64px', borderRadius: '50%',
                                    background: '#F3F4F6',
                                    border: 'none',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#111827', flexShrink: 0,
                                }}
                            >
                                {stat.icon}
                            </div>

                            {/* Number + label stacked */}
                            <div>
                                {/* Large number */}
                                <div
                                    style={{
                                        fontFamily: 'Outfit, sans-serif',
                                        fontSize: '2.4rem', fontWeight: 800,
                                        color: '#111827', lineHeight: 1,
                                        letterSpacing: '-0.03em',
                                        marginBottom: '6px',
                                        display: 'flex', alignItems: 'baseline', gap: '6px',
                                    }}
                                >
                                    {stat.value}
                                    {stat.unit && (
                                        <span style={{
                                            fontSize: '1rem', fontWeight: 600,
                                            color: '#6B7280',
                                        }}>
                                            {stat.unit}
                                        </span>
                                    )}
                                </div>

                                {/* Blue accent label */}
                                <div
                                    style={{
                                        fontSize: '0.82rem', fontWeight: 600,
                                        color: '#004FEB',
                                        letterSpacing: '0.01em',
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
