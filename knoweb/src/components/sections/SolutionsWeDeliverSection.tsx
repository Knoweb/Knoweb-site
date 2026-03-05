'use client';

import Link from 'next/link';

const services = [
    {
        number: '1.',
        title: 'Accounting & Financial Management',
        desc: 'Complete financial control across your organization — from daily transactions to board-level reporting. Eliminate manual errors and gain real-time cash flow visibility.',
        bullets: ['Invoicing & GL Ledger', 'Bank reconciliation', 'Financial reports'],
        link: '/products/accounting',
    },
    {
        number: '2.',
        title: 'HR & Workforce Management',
        desc: 'Streamline your entire employee lifecycle — from attendance tracking to complex payroll calculation, EPF/ETF compliance, and employee self-service portals.',
        bullets: ['Payroll & Attendance', 'EPF / ETF compliance', 'Leave management'],
        link: '/products/hr-payroll',
    },
    {
        number: '3.',
        title: 'Retail & Hospitality Operations',
        desc: 'End-to-end operational control for single or multi-outlet environments — integrating POS, inventory, and backend operations to prevent stockouts and errors.',
        bullets: ['POS system integration', 'Multi-branch management', 'Sales reports'],
        link: '/products/retail-pos',
    },
    {
        number: '4.',
        title: 'Monitoring & Dashboards',
        desc: 'Transform raw operational data into actionable insights with real-time KPI tracking, automated alerts, and centralized multi-site performance dashboards.',
        bullets: ['Live KPIs & custom alerts', 'Multi-site visibility', 'Audit reports'],
        link: '/products/dashboards',
    },
    {
        number: '5.',
        title: 'Custom Software Solutions',
        desc: 'Fully bespoke enterprise systems built around your unique workflows. We design, develop, and deliver structured digital platforms with dedicated ongoing support.',
        bullets: ['Tailored workflows', 'API integrations', 'Ongoing support'],
        link: '/custom-enterprise',
    },
    {
        number: '6.',
        title: 'AI Product Development',
        desc: 'We embed AI into real business workflows — predictive reporting, automated data extraction, intelligent recommendations, and ML pipelines built to scale.',
        bullets: ['Predictive analytics', 'Intelligent automation', 'ML pipelines'],
        link: '/custom-enterprise',
    },
];

export default function SolutionsWeDeliverSection() {
    return (
        <section
            style={{
                background: '#EEF1F6',
                padding: '100px 0',
            }}
        >
            <div className="container-max">

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2
                        style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800, color: '#111827',
                            lineHeight: 1.1, letterSpacing: '-0.02em',
                            marginBottom: '16px',
                        }}
                    >
                        Services We Offer
                    </h2>
                    <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                        We build, deploy, and support structured digital platforms that target
                        core operational areas and generate rapid business value.
                    </p>
                </div>

                {/* 2-column grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '28px',
                    }}
                    className="services-grid"
                >
                    {services.map((service, i) => (
                        <div
                            key={i}
                            style={{
                                background: '#ffffff',
                                border: '1px solid #E2E8F0',
                                borderRadius: '0',
                                padding: '44px 44px 36px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                transition: 'box-shadow 0.25s, transform 0.25s',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                            }}
                        >
                            {/* Decorative watermark shape */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                right: '-30px',
                                width: '130px',
                                height: '130px',
                                background: 'rgba(0,79,235,0.04)',
                                borderRadius: '0',
                                transform: 'rotate(20deg)',
                                pointerEvents: 'none',
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                width: '70px',
                                height: '70px',
                                background: 'rgba(0,79,235,0.04)',
                                borderRadius: '0',
                                transform: 'rotate(15deg)',
                                pointerEvents: 'none',
                            }} />

                            {/* Numbered title */}
                            <h3
                                style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontSize: '1.4rem', fontWeight: 700,
                                    color: '#004FEB',
                                    marginBottom: '14px',
                                    lineHeight: 1.3,
                                }}
                            >
                                {service.number}{service.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    color: '#4B5563',
                                    fontSize: '0.92rem', lineHeight: 1.75,
                                    marginBottom: '24px',
                                }}
                            >
                                {service.desc}
                            </p>

                            {/* Bullet points */}
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                                {service.bullets.map((bullet) => (
                                    <li key={bullet} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{
                                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                            width: '20px', height: '20px', borderRadius: '50%',
                                            background: '#004FEB', flexShrink: 0,
                                        }}>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span style={{ color: '#004FEB', fontSize: '0.875rem', fontWeight: 500 }}>
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Learn more */}
                            <Link
                                href={service.link}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    color: '#004FEB', fontWeight: 600,
                                    fontSize: '0.875rem', textDecoration: 'none',
                                    marginTop: 'auto',
                                    transition: 'gap 0.2s',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '10px'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '6px'; }}
                            >
                                Learn more
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: 'center', marginTop: '52px' }}>
                    <Link
                        href="/solutions"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: '#004FEB',
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontSize: '0.9rem', fontWeight: 700,
                            padding: '14px 40px', borderRadius: '0',
                            transition: 'all 0.22s ease',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#0040C8';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#004FEB';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                        }}
                    >
                        View All Solutions
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M3 7.5H12M8 3.5L12 7.5L8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .services-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
