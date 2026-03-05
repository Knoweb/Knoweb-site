'use client';

import Link from 'next/link';
import Image from 'next/image';

const brandLogos = [
    { name: 'Dialog', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.25)' } },
    { name: 'Cargills', style: { fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'rgba(255,255,255,0.2)' } },
    { name: 'Softlogic', style: { fontFamily: 'Inter, sans-serif', fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.18)' } },
    { name: 'Hemas', style: { fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: 'rgba(255,255,255,0.22)' } },
    { name: 'MAS Holdings', style: { fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.18)' } },
    { name: 'Haycarb', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.4rem', fontWeight: 700, color: 'rgba(255,255,255,0.22)' } },
];

export default function HeroSection() {
    return (
        <section
            style={{
                background: '#0B0F14',
                color: '#fff',
                paddingTop: '140px',
                paddingBottom: '0',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* Large dark blob shapes in background */}
            <div style={{
                position: 'absolute', top: '-120px', left: '-180px',
                width: '700px', height: '700px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.025)',
                filter: 'blur(2px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: '-80px', right: '-200px',
                width: '650px', height: '650px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.02)',
                filter: 'blur(2px)',
                pointerEvents: 'none',
            }} />
            {/* Subtle green glow top center */}
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '700px', height: '300px',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(0,79,235,0.07) 0%, transparent 70%)',
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
                }}
            >
                {/* Badge */}
                <div
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                        background: '#13171F',
                        border: '1px solid rgba(255,255,255,0.08)',
                        padding: '8px 20px 8px 10px',
                        borderRadius: '6px',
                        marginBottom: '32px',
                        animation: 'heroFadeIn 0.6s ease-out forwards',
                    }}
                >
                    {/* Colored icon — styled like the Clutch badge in the reference */}
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: '26px', height: '26px', borderRadius: '50%',
                        background: '#004FEB',
                        flexShrink: 0,
                    }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
                        </svg>
                    </span>
                    <span style={{
                        fontSize: '0.72rem', fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}>
                        Trusted By Growing Businesses Across Sri Lanka
                    </span>
                </div>

                {/* Headline */}
                <h1
                    style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                        fontWeight: 800, lineHeight: 1.1,
                        color: '#fff', marginBottom: '24px',
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
                        color: 'rgba(255,255,255,0.55)',
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
                        marginBottom: '72px',
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
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.14)',
                            color: 'rgba(255,255,255,0.8)',
                            textDecoration: 'none',
                            fontSize: '0.92rem', fontWeight: 600,
                            padding: '14px 32px', borderRadius: '0',
                            transition: 'all 0.22s ease',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.09)';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.14)';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                        }}
                    >
                        Explore Solutions
                    </Link>
                </div>

                {/* Hero Image */}
                <div
                    style={{
                        width: '100%', maxWidth: '960px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '8px solid #2A3650',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
                        animation: 'heroSlideUp 0.9s cubic-bezier(0.1,0,0.2,1) 0.3s both',
                        position: 'relative',
                        background: '#111827',
                    }}
                >
                    <Image
                        src="/hero-team.png"
                        alt="Knoweb team collaborating at work"
                        width={960}
                        height={540}
                        style={{ display: 'block', width: '100%', height: '540px', objectFit: 'cover', objectPosition: 'center' }}
                        priority
                    />
                </div>
            </div>

            {/* ── Brand Logos Strip ── */}
            <div
                style={{
                    width: '100%',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    marginTop: '72px',
                    padding: '36px 0 48px',
                    background: 'rgba(255,255,255,0.015)',
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
