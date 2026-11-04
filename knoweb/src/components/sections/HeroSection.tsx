'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '124px',
        paddingBottom: '76px',
        backgroundImage: `linear-gradient(135deg, rgba(13, 32, 59, 0.94) 0%, rgba(10, 25, 47, 0.90) 50%, rgba(13, 32, 59, 0.96) 100%), url('/knowebbc.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 200, 255, 0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
        {/* Modern Glassmorphic Hero Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            padding: '56px 44px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
          }}
        >
          {/* Inner ambient card glow */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              maxWidth: '860px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Inline reveal keyframes for instant smooth rendering */}
            <style>{`
              @keyframes heroTextReveal {
                0% {
                  opacity: 0;
                  transform: translateY(26px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

            {/* Welcome Tag */}
            <div
              className="hero-reveal-tag"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 200, 255, 0.12)',
                border: '1px solid rgba(0, 200, 255, 0.3)',
                color: '#00E5FF',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                padding: '5px 14px',
                borderRadius: '999px',
                marginBottom: '20px',
                animation: 'heroTextReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#00E5FF',
                  boxShadow: '0 0 8px #00E5FF',
                }}
              />
              Welcome to Knoweb
            </div>

            {/* Headline */}
            <h1
              className="hero-reveal-heading"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(2.3rem, 4.4vw, 3.6rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '18px',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 16px rgba(0, 0, 0, 0.4)',
                animation: 'heroTextReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both',
              }}
            >
              Practical Software &amp; Digital Solutions
            </h1>

            {/* Subheading / Description */}
            <p
              className="hero-reveal-subtitle"
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                lineHeight: 1.65,
                color: '#CBD5E1',
                marginBottom: '36px',
                maxWidth: '760px',
                animation: 'heroTextReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both',
              }}
            >
              Business software, ERP, custom development and digital services.
              <br className="hidden sm:inline" /> Solutions for new projects and existing systems.
            </p>

            {/* Action Buttons */}
            <div
              className="hero-reveal-actions"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                animation: 'heroTextReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.50s both',
              }}
            >
              <Link
                href="/solutions"
                style={{
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #0066FF 0%, #004FEB 100%)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.96rem',
                  padding: '13px 28px',
                  borderRadius: '10px',
                  transition: 'all 0.22s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 18px rgba(0, 102, 255, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 102, 255, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 102, 255, 0.4)';
                }}
              >
                Explore Solutions
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                style={{
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.96rem',
                  padding: '12px 26px',
                  borderRadius: '10px',
                  border: '1.5px solid rgba(255, 255, 255, 0.28)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.22s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contact Knoweb
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
