'use client';

import Link from 'next/link';

export default function SolutionModelsSection() {
    return (
        <section className="section-pad surface-light" style={{ padding: '100px 0', background: '#ffffff' }}>
            <div className="container-max">
                <div className="section-header centered" style={{ marginBottom: '60px' }}>
                    <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Our Offering</div>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0A0F1E', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                        Three Core Solution Models
                    </h2>
                    <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                        Choose the engagement model that fits your business. Whether it's a ready SaaS platform, a custom-built enterprise system, or cutting-edge AI product development.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px'
                }}>
                    {/* SaaS Card */}
                    <div style={{
                        background: '#fff', border: '1px solid #E5E7EB', borderRadius: '0',
                        padding: '40px', position: 'relative', overflow: 'hidden',
                        display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,87,255,0.06)';
                            e.currentTarget.style.borderColor = 'rgba(0,198,255,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = '#E5E7EB';
                        }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(0,198,255,0.1) 0%,transparent 70%)', pointerEvents: 'none' }} />

                        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(0,198,255,0.1)', color: '#0097D9', fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: '0', marginBottom: '24px', alignSelf: 'flex-start' }}>
                            Model A
                        </div>

                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#0A0F1E', marginBottom: '16px', lineHeight: 1.2 }}>
                            Subscription-Based SaaS Platforms
                        </h3>

                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px', flexGrow: 1 }}>
                            {['Ready-to-deploy platforms', 'Subscription pricing', 'Fast implementation', 'Scalable architecture'].map((item) => (
                                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.5 }}>
                                    <span style={{ width: '18px', height: '18px', borderRadius: '0', background: 'rgba(0,198,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#0097D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/products" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#0057FF', border: 'none', borderRadius: '0' }}>
                            View Products
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Link>
                    </div>

                    {/* Custom Card */}
                    <div style={{
                        background: '#fff', border: '1px solid #E5E7EB', borderRadius: '0',
                        padding: '40px', position: 'relative', overflow: 'hidden',
                        display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,87,255,0.06)';
                            e.currentTarget.style.borderColor = 'rgba(0,87,255,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = '#E5E7EB';
                        }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(0,87,255,0.08) 0%,transparent 70%)', pointerEvents: 'none' }} />

                        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(0,87,255,0.1)', color: '#0057FF', fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', marginBottom: '24px', alignSelf: 'flex-start' }}>
                            Model B
                        </div>

                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#0A0F1E', marginBottom: '16px', lineHeight: 1.2 }}>
                            Custom Software Solutions
                        </h3>

                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px', flexGrow: 1 }}>
                            {['Tailored workflows', 'Enterprise & specialized systems', 'Structured delivery process', 'Dedicated ongoing support'].map((item) => (
                                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.5 }}>
                                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(0,87,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/custom-enterprise" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#0A0F1E', border: 'none', borderRadius: '0' }}>
                            Custom & Enterprise
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Link>
                    </div>

                    {/* AI Card */}
                    <div style={{
                        background: '#fff', border: '1px solid #E5E7EB', borderRadius: '0',
                        padding: '40px', position: 'relative', overflow: 'hidden',
                        display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 20px 48px rgba(139,92,246,0.08)';
                            e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = '#E5E7EB';
                        }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 70%)', pointerEvents: 'none' }} />

                        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(139,92,246,0.1)', color: '#7C3AED', fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', marginBottom: '24px', alignSelf: 'flex-start' }}>
                            Model C
                        </div>

                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#0A0F1E', marginBottom: '16px', lineHeight: 1.2 }}>
                            AI Product Development
                        </h3>

                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px', flexGrow: 1 }}>
                            {['Strategic AI planning', 'Predictive reporting', 'Automated report generation', 'Machine learning integration'].map((item) => (
                                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.5 }}>
                                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(139,92,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/ai-development" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#7C3AED', border: 'none', borderRadius: '0' }}>
                            AI Development
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
