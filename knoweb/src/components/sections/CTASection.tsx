'use client';

import Link from 'next/link';

export default function CTASection() {
    return (
        <section style={{
            position: 'relative',
            padding: '160px 20px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {/* Background Blob / Abstract Shapes matching 1st SS */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: '#111216', // Deep dark base
                zIndex: 0,
            }}>
                {/* Huge subtle dark gray blobs simulating the wavy background */}
                <div style={{
                    position: 'absolute',
                    width: '120vw',
                    height: '120vw',
                    minWidth: '1200px',
                    minHeight: '1200px',
                    top: '-50%',
                    left: '-30%',
                    background: '#18191E',
                    borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%',
                    transform: 'rotate(-15deg)',
                }} />
                <div style={{
                    position: 'absolute',
                    width: '90vw',
                    height: '90vw',
                    minWidth: '900px',
                    minHeight: '900px',
                    bottom: '-40%',
                    right: '-20%',
                    background: '#15161A',
                    borderRadius: '50% 50% 40% 60% / 50% 60% 40% 50%',
                    transform: 'rotate(25deg)',
                }} />
            </div>

            <div className="container-max" style={{
                position: 'relative',
                zIndex: 1,
                maxWidth: '800px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                {/* Profile Placeholder from 1st SS */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '32px',
                    border: '2px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#1F2937',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                }}>
                    {/* SVG Avatar Placeholder */}
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>

                {/* Title (same content as 2nd SS) */}
                <h2 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                }}>
                    Talk to a Solutions Consultant
                </h2>

                {/* Subtitle (same content as 2nd SS) */}
                <p style={{
                    color: '#D1D5DB',
                    fontSize: '1.15rem',
                    lineHeight: 1.6,
                    marginBottom: '48px',
                    maxWidth: '560px',
                }}>
                    Get a free 30-minute discovery call to map the right technology path for your operations: SaaS, Custom, or AI.
                </p>

                {/* Buttons wrapper */}
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '64px'
                }}>
                    <Link href="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#004FEB', // Bright lime green from 1st SS
                        color: '#000000',
                        padding: '16px 48px',
                        borderRadius: '0',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'transform 0.2s, background 0.2s',
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.background = '#004FEB';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = '#004FEB';
                        }}
                    >
                        Book a Call
                    </Link>

                    {/* Secondary button to retain demo link from 2nd SS */}
                    <Link href="/demo" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px 48px',
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: '#ffffff',
                        borderRadius: '0',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.color = '#000000';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#ffffff';
                        }}
                    >
                        Request Demo
                    </Link>
                </div>

                {/* Prefer Email section laid out like 1st SS */}
                <div style={{
                    fontSize: '1rem',
                    color: '#9CA3AF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <span>Prefer Email?</span>
                    <a href="mailto:hello@knoweb.com" style={{
                        color: '#ffffff',
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        fontWeight: 600,
                        transition: 'color 0.2s'
                    }}
                        onMouseEnter={e => e.currentTarget.style.color = '#004FEB'}
                        onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
                    >
                        hello@knoweb.com
                    </a>
                </div>
            </div>
        </section>
    );
}
