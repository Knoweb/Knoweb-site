'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function WhyKnowebSection() {
    return (
        <section
            style={{
                background: '#0B0F14',
                padding: '100px 0',
                borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
        >
            <div className="container-max">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '80px',
                        alignItems: 'center',
                    }}
                    className="why-knoweb-grid"
                >
                    {/* ── Left: Text Content ── */}
                    <div>
                        {/* Tag */}
                        <div
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                background: 'rgba(0,79,235,0.1)',
                                border: '1px solid rgba(0,79,235,0.2)',
                                padding: '4px 14px', borderRadius: '100px',
                                fontSize: '0.7rem', fontWeight: 700,
                                color: '#004FEB', marginBottom: '24px',
                                letterSpacing: '0.06em', textTransform: 'uppercase',
                            }}
                        >
                            Our Purpose
                        </div>

                        <h2
                            style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)',
                                fontWeight: 800, lineHeight: 1.15,
                                color: '#F1F5F9', marginBottom: '24px',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Practical Software for{' '}
                            <span style={{ color: '#004FEB' }}>Real Business Growth.</span>
                        </h2>

                        <p
                            style={{
                                color: 'rgba(255,255,255,0.55)',
                                fontSize: '1.05rem', lineHeight: 1.75,
                                marginBottom: '20px', maxWidth: '500px',
                            }}
                        >
                            Most businesses don&apos;t need more software complexity — they need
                            platforms that work on day one. Knoweb was built on a simple belief:
                            prioritize{' '}
                            <strong style={{ color: 'rgba(255,255,255,0.8)' }}>practical systems over complexity</strong>,
                            focus relentlessly on{' '}
                            <strong style={{ color: 'rgba(255,255,255,0.8)' }}>measurable business improvement</strong>,
                            and stand by our clients as a{' '}
                            <strong style={{ color: 'rgba(255,255,255,0.8)' }}>long-term technology partner</strong>{' '}
                            through every stage of growth.
                        </p>

                        <p
                            style={{
                                color: 'rgba(255,255,255,0.45)',
                                fontSize: '0.98rem', lineHeight: 1.7,
                                marginBottom: '36px', maxWidth: '500px',
                            }}
                        >
                            From subscription-based SaaS platforms to fully custom enterprise systems
                            and AI-powered products — we replace messy spreadsheets and fragmented
                            tools with structured digital operations.
                        </p>

                        {/* CTA Link */}
                        <Link
                            href="/about"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.14)',
                                color: 'rgba(255,255,255,0.85)',
                                textDecoration: 'none',
                                fontSize: '0.9rem', fontWeight: 600,
                                padding: '12px 28px', borderRadius: '0',
                                transition: 'all 0.22s ease',
                                letterSpacing: '0.01em',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,79,235,0.1)';
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,79,235,0.3)';
                                (e.currentTarget as HTMLAnchorElement).style.color = '#004FEB';
                                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.14)';
                                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)';
                                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                            }}
                        >
                            Know More About Us
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* ── Right: Team Photo ── */}
                    <div style={{ position: 'relative', padding: '28px 0 28px 0' }}>

                        {/* Top-left blue square decoration */}
                        <div style={{
                            position: 'absolute', top: 0, left: '0px',
                            width: '250px', height: '250px',
                            background: '#004FEB',
                            zIndex: 0,
                        }} />

                        {/* Main image */}
                        <div style={{
                            position: 'relative', zIndex: 1,
                            border: '1px solid rgba(255,255,255,0.12)',
                            overflow: 'hidden',
                            marginLeft: '28px',
                            marginRight: '0',
                        }}>
                            <Image
                                src="/about-team.png"
                                alt="Knoweb team working on software systems"
                                width={600}
                                height={440}
                                style={{ display: 'block', width: '100%', height: '440px', objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </div>

                        {/* Bottom-right blue square with stat badge */}
                        <div style={{
                            position: 'absolute', bottom: 0, right: '-12px',
                            width: '150px', height: '150px',
                            background: '#004FEB',
                            zIndex: 2,
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'flex-start', justifyContent: 'flex-end',
                            padding: '20px 22px',
                        }}>
                            <div style={{
                                fontSize: '2.4rem', fontWeight: 800,
                                color: '#fff', lineHeight: 1,
                                marginBottom: '6px',
                                fontFamily: 'Outfit, sans-serif',
                            }}>50+</div>
                            <div style={{
                                fontSize: '0.68rem', fontWeight: 700,
                                color: 'rgba(255,255,255,0.75)',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}>Businesses Deployed</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
