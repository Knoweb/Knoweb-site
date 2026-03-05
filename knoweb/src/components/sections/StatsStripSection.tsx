'use client';

const stats = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
        ),
        value: '2–4',
        unit: 'Weeks',
        label: 'Fast Implementation',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        value: '50+',
        unit: '',
        label: 'Businesses Deployed',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
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
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '22px',
                                padding: '28px 48px',
                                borderRight: i < stats.length - 1 ? '1px solid #E5E7EB' : 'none',
                                transition: 'background 0.2s',
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
