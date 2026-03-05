import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'Customer Success — Onboarding, Training & Support',
    description:
        'Learn how Knoweb ensures customer success through structured onboarding, role-based training, SLA-backed support, and long-term partnership.',
};

const supportTiers = [
    {
        tier: 'Standard Support',
        response: '< 4 Business Hours',
        channels: ['Email ticketing', 'Help portal'],
        includes: ['Bug resolution', 'System guidance', 'Documentation access'],
        color: '#6B7280',
    },
    {
        tier: 'Priority Support',
        response: '< 2 Business Hours',
        channels: ['Email ticketing', 'Phone support', 'Help portal'],
        includes: ['Bug resolution', 'System guidance', 'Configuration assistance', 'Monthly review call'],
        color: '#0057FF',
    },
    {
        tier: 'Enterprise Support',
        response: '< 1 Business Hour',
        channels: ['Dedicated account manager', 'Phone', 'Email', 'On-site visits'],
        includes: ['Priority resolution', 'Proactive monitoring', 'Quarterly business reviews', 'Enhancement planning', 'On-site support visits'],
        color: '#7C3AED',
    },
];

const onboardingSteps = [
    {
        title: 'Welcome & Orientation',
        desc: 'Introduction to the Knoweb team, your account structure, and the support channels available to you.',
    },
    {
        title: 'System Configuration',
        desc: 'Your system is configured to match your business — organizational structure, workflows, and user roles.',
    },
    {
        title: 'Data Setup',
        desc: 'Master data loading, opening balances, and historical data migration where applicable.',
    },
    {
        title: 'Training Delivery',
        desc: 'Role-based training sessions for administrators and end-users, with supporting materials.',
    },
    {
        title: 'Go-Live Support',
        desc: 'Knoweb team presence during your first live operational days to ensure a smooth transition.',
    },
    {
        title: 'Post-Go-Live Check-In',
        desc: 'Structured check-in at 30, 60, and 90 days to address questions and optimize usage.',
    },
];

export default function CustomerSuccessPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container-max">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Customer Success</span>
                    </div>
                    <div className="tag-dark" style={{ marginBottom: '20px' }}>Customer Success</div>
                    <h1>Our Commitment to Your Success</h1>
                    <p>
                        Knoweb does not end at implementation. We remain your technology partner through onboarding, adoption, and ongoing growth — with structured support and clear accountability.
                    </p>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-pad">
                <div className="container-max">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                        <div>
                            <div className="tag" style={{ marginBottom: '20px' }}>Our Philosophy</div>
                            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '20px', color: '#0A0F1E' }}>
                                Technology Only Works When People Use It Well
                            </h2>
                            <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: '20px', fontSize: '0.95rem' }}>
                                System adoption is the real challenge in digital transformation. The best platform fails if users don't know how to use it effectively. Knoweb's customer success model is built around ensuring your team gets full value from every investment.
                            </p>
                            <p style={{ color: '#6B7280', lineHeight: 1.7, fontSize: '0.95rem' }}>
                                Our goal is a long-term partnership, not a completed project. We measure success by the operational improvement our customers achieve — not by the software we deploy.
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { icon: '🎯', title: 'Outcome-Oriented', desc: 'We track the business improvements our customers achieve, not just system uptime.' },
                                { icon: '🤝', title: 'Long-Term Partnership', desc: 'Every customer has a dedicated support relationship that grows with their business.' },
                                { icon: '📚', title: 'Continuous Education', desc: 'Ongoing training, feature updates, and best-practice guidance throughout the relationship.' },
                                { icon: '🔒', title: 'Accountable SLAs', desc: 'Defined response times, escalation paths, and resolution commitments — in writing.' },
                            ].map((p) => (
                                <div key={p.title} style={{
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'flex-start',
                                    background: '#F8FAFF',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '10px',
                                    padding: '18px 20px',
                                }}>
                                    <div style={{ fontSize: '1.4rem', flexShrink: 0 }}>{p.icon}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#0A0F1E', fontSize: '0.9rem', marginBottom: '4px' }}>{p.title}</div>
                                        <div style={{ color: '#6B7280', fontSize: '0.825rem', lineHeight: 1.5 }}>{p.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Onboarding */}
            <section className="section-pad surface-light">
                <div className="container-max">
                    <div className="section-header centered">
                        <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Onboarding</div>
                        <h2>Structured Onboarding Process</h2>
                        <p>A defined onboarding program ensures every new customer transitions smoothly from signature to operational confidence.</p>
                    </div>
                    <div className="grid-3">
                        {onboardingSteps.map((s, i) => (
                            <div key={s.title} style={{
                                background: '#fff',
                                border: '1px solid #E5E7EB',
                                borderRadius: '12px',
                                padding: '28px',
                                position: 'relative',
                            }}>
                                <div style={{
                                    width: '32px', height: '32px',
                                    borderRadius: '8px',
                                    background: 'linear-gradient(135deg,#0057FF,#00C6FF)',
                                    color: '#fff',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.8rem',
                                    marginBottom: '16px',
                                }}>
                                    {i + 1}
                                </div>
                                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0A0F1E', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>{s.title}</h3>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Tiers */}
            <section className="section-pad">
                <div className="container-max">
                    <div className="section-header centered">
                        <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Support</div>
                        <h2>Support Structure & SLAs</h2>
                        <p>Clearly defined support tiers with accountable response times and resolution commitments.</p>
                    </div>
                    <div className="grid-3">
                        {supportTiers.map((tier) => (
                            <div key={tier.tier} style={{
                                background: '#fff',
                                border: `1px solid ${tier.color}30`,
                                borderTop: `3px solid ${tier.color}`,
                                borderRadius: '12px',
                                padding: '32px',
                            }}>
                                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#0A0F1E', marginBottom: '8px' }}>{tier.tier}</h3>
                                <div style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '20px', fontWeight: 500 }}>
                                    Initial response: <span style={{ color: tier.color, fontWeight: 700 }}>{tier.response}</span>
                                </div>
                                <div style={{ marginBottom: '16px' }}>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '8px' }}>Channels</div>
                                    {tier.channels.map((c) => (
                                        <div key={c} style={{ fontSize: '0.825rem', color: '#374151', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: tier.color, display: 'inline-block', flexShrink: 0 }} />
                                            {c}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '8px' }}>Includes</div>
                                    {tier.includes.map((inc) => (
                                        <div key={inc} style={{ fontSize: '0.825rem', color: '#374151', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2 6L4.5 8.5L10 3" stroke={tier.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {inc}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
