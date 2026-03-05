import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'Custom & Enterprise Software Solutions',
    description:
        'Knoweb designs and builds custom software systems for complex business requirements, enterprise workflows, and specialized industry platforms.',
};

const whenCustom = [
    'Your business has workflows that no ready platform can accommodate',
    'You require deep integrations with existing systems or data sources',
    'You operate in a regulated or highly specialized industry vertical',
    'Your organization needs a proprietary platform as a strategic asset',
    'Multi-system complexity requires a unified custom-built architecture',
    'Enterprise scale demands more control than SaaS can offer',
];

const deliverables = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="2" width="18" height="18" rx="3" stroke="#0057FF" strokeWidth="1.5" />
                <path d="M7 8h8M7 12h6M7 16h4" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Business Management Systems',
        desc: 'End-to-end operational platforms tailored to your unique business model and workflow requirements.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="6" width="18" height="10" rx="2" stroke="#0057FF" strokeWidth="1.5" />
                <path d="M7 10h8M7 13h4" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Enterprise Platforms',
        desc: 'Large-scale systems with complex permissions, multi-entity structures, and enterprise-grade data architecture.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="2" stroke="#0057FF" strokeWidth="1.5" />
                <rect x="12" y="3" width="7" height="7" rx="2" stroke="#0057FF" strokeWidth="1.5" />
                <rect x="3" y="12" width="7" height="7" rx="2" stroke="#0057FF" strokeWidth="1.5" />
                <rect x="12" y="12" width="7" height="7" rx="2" stroke="#0057FF" strokeWidth="1.5" />
            </svg>
        ),
        title: 'Web & Mobile Applications',
        desc: 'Customer-facing and internal applications for web and mobile platforms, built with modern frameworks.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="5" cy="11" r="2" stroke="#0057FF" strokeWidth="1.5" />
                <circle cx="17" cy="11" r="2" stroke="#0057FF" strokeWidth="1.5" />
                <circle cx="11" cy="5" r="2" stroke="#0057FF" strokeWidth="1.5" />
                <path d="M7 11h4M11 7v4" stroke="#0057FF" strokeWidth="1.5" />
                <path d="M13 11h2" stroke="#0057FF" strokeWidth="1.5" />
            </svg>
        ),
        title: 'System Integrations',
        desc: 'API integrations, middleware, and connector development to link your existing tools and platforms.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 16L8 12L11 15L15 9L18 11" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="2" y="2" width="18" height="18" rx="3" stroke="#0057FF" strokeWidth="1.5" />
            </svg>
        ),
        title: 'IoT & Monitoring Systems',
        desc: 'Connected hardware and software monitoring platforms for operational, environmental, and infrastructure contexts.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2L13.5 8.5H20L14.5 12.5L16.5 19L11 15L5.5 19L7.5 12.5L2 8.5H8.5L11 2Z" stroke="#0057FF" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
        title: 'AI-Powered Features',
        desc: 'Strategic planning tools, financial reporting automation, and intelligent report generation powered by AI.',
    },
];

const methodology = [
    { step: '01', title: 'Requirements Discovery', desc: 'Deep-dive workshops to understand current state, desired state, and system requirements.' },
    { step: '02', title: 'Architecture Design', desc: 'System architecture, data model, and integration design before any code is written.' },
    { step: '03', title: 'Phased Development', desc: 'Structured development sprints with regular demonstrations and stakeholder reviews.' },
    { step: '04', title: 'Quality Assurance', desc: 'Systematic testing across functionality, performance, security, and user acceptance.' },
    { step: '05', title: 'Deployment & Migration', desc: 'Managed deployment with data migration, environment setup, and go-live support.' },
    { step: '06', title: 'Long-Term Support', desc: 'Ongoing maintenance, enhancement roadmap, and structured support partnerships.' },
];

export default function CustomEnterprisePage() {
    return (
        <>
            <section className="page-hero">
                <div className="container-max">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Custom & Enterprise</span>
                    </div>
                    <div className="tag-dark" style={{ marginBottom: '20px' }}>Custom Software</div>
                    <h1>Custom & Enterprise Software Solutions</h1>
                    <p>
                        When standard platforms cannot meet your requirements, Knoweb designs and builds custom systems that fit your exact business model — delivered with structure and long-term support.
                    </p>
                </div>
            </section>

            {/* When custom */}
            <section className="section-pad">
                <div className="container-max">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
                        <div>
                            <div className="tag" style={{ marginBottom: '20px' }}>When Custom Is Right</div>
                            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '20px', color: '#0A0F1E' }}>
                                When Custom Software Is the Right Choice
                            </h2>
                            <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.95rem' }}>
                                Custom software is not for every business. It is appropriate when the business process, scale, or strategic intent cannot be adequately served by an existing platform.
                            </p>
                            <p style={{ color: '#6B7280', lineHeight: 1.7, fontSize: '0.95rem' }}>
                                Knoweb will always guide you toward the most appropriate engagement model — SaaS where it fits, custom where it is warranted.
                            </p>
                        </div>
                        <div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {whenCustom.map((item) => (
                                    <li key={item} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                        background: '#F8FAFF',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '10px',
                                        padding: '16px 20px',
                                        fontSize: '0.875rem',
                                        color: '#374151',
                                        lineHeight: 1.5,
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                                            <path d="M3 8L6 11L13 5" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What we build */}
            <section className="section-pad surface-light">
                <div className="container-max">
                    <div className="section-header centered">
                        <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>What We Build</div>
                        <h2>Types of Custom Solutions We Deliver</h2>
                        <p>From business management systems to enterprise platforms, integrations, and AI-powered tools.</p>
                    </div>
                    <div className="grid-3">
                        {deliverables.map((d) => (
                            <div key={d.title} className="card">
                                <div className="icon-box">{d.icon}</div>
                                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0A0F1E', marginBottom: '10px' }}>{d.title}</h3>
                                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.65 }}>{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="section-pad">
                <div className="container-max">
                    <div className="section-header centered">
                        <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Delivery Methodology</div>
                        <h2>Our Delivery Process</h2>
                        <p>Custom software is delivered through a structured, phased methodology that ensures quality, transparency, and on-time delivery.</p>
                    </div>
                    <div className="grid-3">
                        {methodology.map((m) => (
                            <div key={m.step} style={{
                                background: '#fff',
                                border: '1px solid #E5E7EB',
                                borderRadius: '12px',
                                padding: '28px',
                                position: 'relative',
                            }}>
                                <div style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontSize: '2.5rem',
                                    fontWeight: 900,
                                    color: 'rgba(0,87,255,0.05)',
                                    position: 'absolute',
                                    top: '16px',
                                    right: '20px',
                                    lineHeight: 1,
                                }}>
                                    {m.step}
                                </div>
                                <div style={{
                                    width: '32px', height: '32px',
                                    borderRadius: '8px',
                                    background: 'linear-gradient(135deg,#0057FF,#00C6FF)',
                                    color: '#fff',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.75rem',
                                    marginBottom: '16px',
                                }}>
                                    {parseInt(m.step)}
                                </div>
                                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0A0F1E', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>{m.title}</h3>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.6 }}>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
