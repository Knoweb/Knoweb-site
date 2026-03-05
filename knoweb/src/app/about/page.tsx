import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'About Knoweb — Company Overview, Vision & Mission',
    description:
        'Learn about Knoweb (Pvt.) Ltd — a hybrid technology company combining SaaS platforms and custom software solutions, on a Sri Lanka-to-global growth path.',
};

const principles = [
    { title: 'Clarity Over Complexity', desc: 'We design solutions that are easy to understand and operate — not impressive on paper but difficult in practice.' },
    { title: 'Practical Before Theoretical', desc: 'Every recommendation is evaluated by whether it will work in your business — not whether it follows technology trends.' },
    { title: 'Long-Term Relationships', desc: 'We invest in relationships that outlast the initial project. Our clients stay because real value is delivered over time.' },
    { title: 'Accountability', desc: 'We own our delivery commitments, response obligations, and outcome expectations — and hold ourselves to them.' },
    { title: 'Continuous Improvement', desc: 'Our platforms and practices evolve. We improve based on real client feedback and emerging business requirements.' },
    { title: 'Global-Ready Thinking', desc: 'Knoweb is built to grow internationally. Every system is designed with global standards, multi-currency, and scalable architecture in mind.' },
];

export default function AboutPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container-max">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>About</span>
                    </div>
                    <div className="tag-dark" style={{ marginBottom: '20px' }}>About Knoweb</div>
                    <h1>About Knoweb (Pvt.) Ltd</h1>
                    <p>
                        A hybrid technology company delivering subscription-based SaaS platforms and custom software solutions — built for growing businesses and designed for global standards.
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="section-pad">
                <div className="container-max">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                        <div>
                            <div className="tag" style={{ marginBottom: '20px' }}>Company Overview</div>
                            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '20px', color: '#0A0F1E' }}>
                                What Knoweb Is
                            </h2>
                            <p style={{ color: '#4B5563', lineHeight: 1.75, marginBottom: '20px', fontSize: '0.95rem' }}>
                                Knoweb (Pvt.) Ltd is a technology company based in Sri Lanka, operating as a hybrid platform and software services organization. We combine two core business models: subscription-based SaaS platforms for common business functions, and on-demand custom software development for complex or specialized requirements.
                            </p>
                            <p style={{ color: '#6B7280', lineHeight: 1.75, marginBottom: '20px', fontSize: '0.95rem' }}>
                                Unlike traditional IT service companies, Knoweb is structured as a platform company first. Our SaaS platforms are production-grade, commercially deployed systems — not bespoke builds repackaged as products.
                            </p>
                            <p style={{ color: '#6B7280', lineHeight: 1.75, fontSize: '0.95rem' }}>
                                Our custom software division extends this capability for organizations whose requirements go beyond what available platforms can serve — designing, building, and maintaining tailored systems with long-term support commitments.
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Visual data boxes */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                {[
                                    { label: 'Founded', value: '2020', sub: 'Colombo, Sri Lanka' },
                                    { label: 'Business Models', value: '2', sub: 'SaaS & Custom' },
                                    { label: 'Platforms', value: '5+', sub: 'Deployed in market' },
                                    { label: 'Sectors', value: '6', sub: 'Industries served' },
                                ].map((m) => (
                                    <div key={m.label} style={{
                                        background: '#EEF2FF',
                                        borderRadius: '12px',
                                        padding: '24px',
                                        border: '1px solid rgba(0,87,255,0.1)',
                                    }}>
                                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 900, color: '#0057FF', lineHeight: 1 }}>{m.value}</div>
                                        <div style={{ fontWeight: 600, color: '#0A0F1E', fontSize: '0.85rem', marginTop: '6px' }}>{m.label}</div>
                                        <div style={{ color: '#6B7280', fontSize: '0.75rem', marginTop: '2px' }}>{m.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-pad section-dark">
                <div className="container-max">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                        <div className="card-dark">
                            <div style={{
                                width: '44px', height: '44px',
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg,#0057FF,#00C6FF)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '20px',
                            }}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.5" />
                                    <circle cx="11" cy="11" r="3" stroke="white" strokeWidth="1.5" />
                                    <path d="M11 2v2M11 18v2M2 11h2M18 11h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00C6FF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Our Vision</div>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#fff', marginBottom: '14px' }}>
                                To be the trusted technology platform of choice for growing businesses across South Asia and beyond.
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                                Knoweb's vision is to become a recognized platform company serving businesses across multiple markets — delivering practical, reliable technology that creates measurable business improvement at scale.
                            </p>
                        </div>
                        <div className="card-dark">
                            <div style={{
                                width: '44px', height: '44px',
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg,#0057FF,#00C6FF)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '20px',
                            }}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M11 2L13.5 8.5H20L14.5 12.5L16.5 19L11 15L5.5 19L7.5 12.5L2 8.5H8.5L11 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00C6FF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Our Mission</div>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#fff', marginBottom: '14px' }}>
                                To deliver practical business systems that genuinely improve how organizations operate and grow.
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                                We are committed to building technology that works — not technology that impresses. Every platform, every custom system, and every support interaction must contribute to real, measurable operational improvement for our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operating Principles */}
            <section className="section-pad surface-light">
                <div className="container-max">
                    <div className="section-header centered">
                        <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>How We Operate</div>
                        <h2>Operating Principles</h2>
                        <p>The principles that guide how Knoweb builds products, delivers services, and manages relationships.</p>
                    </div>
                    <div className="grid-3">
                        {principles.map((p) => (
                            <div key={p.title} className="card">
                                <div className="divider" />
                                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0A0F1E', marginBottom: '10px' }}>{p.title}</h3>
                                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.65 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Intent */}
            <section className="section-pad">
                <div className="container-max">
                    <div style={{
                        background: 'linear-gradient(135deg,#06142E,#0A1F4E)',
                        borderRadius: '16px',
                        padding: '56px 48px',
                        color: '#fff',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '48px',
                        alignItems: 'center',
                    }}>
                        <div>
                            <div className="tag-dark" style={{ marginBottom: '20px' }}>Strategic Intent</div>
                            <h2 style={{ color: '#fff', fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: '16px' }}>
                                Sri Lanka to Global — A Structured Growth Path
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '16px' }}>
                                Knoweb's immediate market is Sri Lanka — building platform depth, client trust, and operational proof across multiple sectors. The architecture, standards, and positioning are global-ready from day one.
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                                Our growth pathway targets regional expansion across South Asia, with multi-currency, multi-language, and multi-regulatory capability built into our platform roadmap — not bolted on after growth.
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { stage: 'Phase 1', title: 'Sri Lanka Market Depth', desc: 'Platform deployment and market penetration across core verticals.' },
                                { stage: 'Phase 2', title: 'Regional Expansion', desc: 'South Asia market entry with adapted platform configurations.' },
                                { stage: 'Phase 3', title: 'Global Platform', desc: 'International SaaS positioning and partner channel development.' },
                            ].map((s) => (
                                <div key={s.stage} style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '10px',
                                    padding: '18px 20px',
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'flex-start',
                                }}>
                                    <div style={{
                                        background: 'linear-gradient(135deg,#0057FF,#00C6FF)',
                                        color: '#fff',
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        padding: '4px 8px',
                                        borderRadius: '6px',
                                        flexShrink: 0,
                                        whiteSpace: 'nowrap',
                                    }}>{s.stage}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem', marginBottom: '4px' }}>{s.title}</div>
                                        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>{s.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
