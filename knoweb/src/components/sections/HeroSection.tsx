'use client';

import Link from 'next/link';
import Image from 'next/image';

const brandLogos = [
    { name: 'Dialog', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.6rem', fontWeight: 700, color: 'rgba(0,0,0,0.25)' } },
    { name: 'Cargills', style: { fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'rgba(0,0,0,0.2)' } },
    { name: 'Softlogic', style: { fontFamily: 'Inter, sans-serif', fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.18)' } },
    { name: 'Hemas', style: { fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: 'rgba(0,0,0,0.22)' } },
    { name: 'MAS Holdings', style: { fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.18)' } },
    { name: 'Haycarb', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.4rem', fontWeight: 700, color: 'rgba(0,0,0,0.22)' } },
];
export default function HeroSection() {
    return (
        <section
            style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/hero-bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: 'var(--text-primary)',
                paddingTop: '80px',
                paddingBottom: '0',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* Large subtle blue blob shapes in background */}
            <div style={{
                position: 'absolute', top: '-120px', left: '-180px',
                width: '700px', height: '700px',
                borderRadius: '50%',
                background: 'rgba(0,79,235,0.015)',
                filter: 'blur(2px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: '-80px', right: '-200px',
                width: '650px', height: '650px',
                borderRadius: '50%',
                background: 'rgba(0,79,235,0.01)',
                filter: 'blur(2px)',
                pointerEvents: 'none',
            }} />
            {/* Subtle blue glow top center */}
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '700px', height: '300px',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(0,79,235,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* ── Center Content ── */}
            <div
                className="container-max"
                style={{
                    position: 'relative', zIndex: 1,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', textAlign: 'center',
                    width: '100%',
                    flex: 1,
                    justifyContent: 'center',
                }}
            >

                {/* Headline */}
                <h1
                     style={{
                         fontFamily: 'Outfit, sans-serif',
                         fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                         fontWeight: 800, lineHeight: 1.1,
                         color: 'var(--text-primary)', marginBottom: '24px',
                         letterSpacing: '-0.025em',
                         maxWidth: '780px',
                         animation: 'heroFadeIn 0.7s ease-out 0.1s both',
                     }}
                 >
                    Where Smart Software Meets{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #004FEB 0%, #0040C8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Real Business Results
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.05rem',
                        lineHeight: 1.7,
                        marginBottom: '44px',
                        maxWidth: '580px',
                        animation: 'heroFadeIn 0.7s ease-out 0.2s both',
                    }}
                >
                    We craft high-performance SaaS platforms and custom software systems for
                    SMEs and enterprises that refuse to settle for messy spreadsheets.
                </p>

                {/* CTA Button */}
                <div
                    style={{
                        display: 'flex', gap: '16px', flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginBottom: '0px',
                        animation: 'heroFadeIn 0.7s ease-out 0.3s both',
                    }}
                >
                    <Link
                        href="/contact"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: '#004FEB',
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontSize: '0.92rem', fontWeight: 700,
                            padding: '14px 32px', borderRadius: '0',
                            boxShadow: '0 0 24px rgba(0,79,235,0.35)',
                            transition: 'all 0.22s ease',
                            letterSpacing: '0.01em',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#0040C8';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 36px rgba(0,79,235,0.55)';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#004FEB';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(0,79,235,0.35)';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                        }}
                    >
                        Book a Meeting
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <Link
                        href="/solutions"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            color: '#374151',
                            textDecoration: 'none',
                            fontSize: '0.92rem', fontWeight: 600,
                            padding: '14px 32px', borderRadius: '0',
                            transition: 'all 0.22s ease',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#E5E7EB';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = '#D1D5DB';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#F3F4F6';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = '#E5E7EB';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                        }}
                    >
                        Explore Solutions
                    </Link>
                </div>
            </div>

             {/* ── Brand Logos Strip ── */}
             <div
                 style={{
                     width: '100%',
                     borderTop: '1px solid #E5E7EB',
                     marginTop: 'auto',
                     padding: '36px 0 48px',
                     background: 'rgba(255, 255, 255, 0.6)',
                     backdropFilter: 'blur(8px)',
                 }}
             >
                <div
                    className="container-max"
                    style={{
                        display: 'flex', flexWrap: 'wrap',
                        alignItems: 'center', justifyContent: 'center',
                        gap: '40px 56px',
                    }}
                >
                    {brandLogos.map((brand) => (
                        <span key={brand.name} style={brand.style}>
                            {brand.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
