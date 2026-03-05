import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'How We Work — Our Engagement Process',
    description: 'Learn how Knoweb engages with clients — from discovery and solution fit through implementation, training, and long-term support.',
};

const phases = [
    {
        num: '01', title: 'Discovery & Assessment', duration: 'Week 1–2', dark: true,
        desc: 'We start every engagement with a structured discovery session. Our team learns about your business model, current operational challenges, technology landscape, and growth objectives.',
        activities: ['Business process review', 'Pain point mapping', 'Technology stack assessment', 'Stakeholder interviews', 'Operational goals alignment'],
        outcome: 'Documented understanding of requirements, constraints, and success criteria.',
    },
    {
        num: '02', title: 'Solution Fit', duration: 'Week 2–3', dark: false,
        desc: 'Based on discovery, we identify whether a SaaS platform, custom solution, or hybrid approach best fits your needs. We are honest about what fits and what does not.',
        activities: ['Solution model selection', 'Platform capability mapping', 'Gap analysis', 'Build vs. subscribe recommendation', 'Budget and timeline framing'],
        outcome: 'Clear recommendation — SaaS, Custom, or Hybrid — with rationale.',
    },
    {
        num: '03', title: 'Demo & Proposal', duration: 'Week 3–4', dark: true,
        desc: 'We demonstrate the proposed solution using live systems or structured prototypes. This is followed by a formal proposal covering scope, approach, timeline, and pricing.',
        activities: ['Live platform demonstration', 'Custom prototype walkthrough', 'Scope of work documentation', 'Pricing presentation', 'Q&A and refinement'],
        outcome: 'Signed proposal and project initiation.',
    },
    {
        num: '04', title: 'Implementation & Setup', duration: '2–8 Weeks', dark: false,
        desc: 'Our implementation team handles system configuration, customization, data migration, and environment setup — minimizing disruption to your operations.',
        activities: ['System configuration', 'Data migration and cleansing', 'Integration setup', 'User account creation', 'Pre-go-live testing'],
        outcome: 'Working deployed system, validated and ready for use.',
    },
    {
        num: '05', title: 'Training & Adoption', duration: 'Go-Live Week', dark: true,
        desc: 'Role-based training ensures every user can operate the system from day one. We do not hand over a system and disappear — we support adoption.',
        activities: ['Administrator training', 'End-user training sessions', 'Training documentation', 'Practice and Q&A sessions', 'Go-live support presence'],
        outcome: 'Confident, capable users ready to operate independently.',
    },
    {
        num: '06', title: 'Ongoing Support & Growth', duration: 'Continuous', dark: false,
        desc: 'Post-go-live, we remain your technology partner. Structured support, defined SLAs, and a growth roadmap ensure your system evolves with your business.',
        activities: ['SLA-based technical support', 'System health monitoring', 'Periodic review sessions', 'Enhancement requests', 'Expansion planning'],
        outcome: 'A long-term technology partnership, not a one-time transaction.',
    },
];

export default function HowWeWorkPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container-max">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link><span>/</span><span>How We Work</span>
                    </div>
                    <div className="tag-dark" style={{ marginBottom: '20px' }}>Our Process</div>
                    <h1>How We Work</h1>
                    <p>Knoweb follows a structured, consultative engagement process — from the first conversation through long-term partnership. Every engagement is handled with discipline and transparency.</p>
                </div>
            </section>

            <section className="section-pad">
                <div className="container-max">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {phases.map((phase) => (
                            <div key={phase.num} className="phase-row">
                                {/* Left panel */}
                                <div style={{
                                    background: phase.dark ? '#06142E' : '#EEF2FF',
                                    padding: '36px 32px',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                                }}>
                                    <div>
                                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '3.5rem', fontWeight: 900, color: phase.dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,87,255,0.12)', lineHeight: 1, marginBottom: '16px' }}>
                                            {phase.num}
                                        </div>
                                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: phase.dark ? '#fff' : '#0A0F1E', marginBottom: '8px' }}>
                                            {phase.title}
                                        </h3>
                                        <div style={{ fontSize: '0.75rem', color: phase.dark ? 'rgba(255,255,255,0.5)' : '#6B7280', fontWeight: 600 }}>{phase.duration}</div>
                                    </div>
                                </div>

                                {/* Right content */}
                                <div className="phase-content">
                                    <div>
                                        <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>{phase.desc}</p>
                                        <div style={{ background: '#F0FDF9', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '14px 16px' }}>
                                            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#059669', marginBottom: '6px', textTransform: 'uppercase' as const }}>Phase Outcome</div>
                                            <div style={{ fontSize: '0.85rem', color: '#065F46' }}>{phase.outcome}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9CA3AF', marginBottom: '12px', textTransform: 'uppercase' as const }}>Activities</div>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {phase.activities.map((a) => (
                                                <li key={a} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#374151' }}>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L4.5 8.5L10 3" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                    {a}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
