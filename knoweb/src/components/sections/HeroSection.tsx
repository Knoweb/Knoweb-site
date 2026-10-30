'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      style={{
        paddingTop: '92px',
        paddingBottom: '32px',
        background: '#FFFFFF',
      }}
    >
      <div className="container-max">
        {/* Soft light card container as in Wireframe Part 1 */}
        <div
          style={{
            background: 'linear-gradient(180deg, #F0F5FA 0%, #EBF2F8 100%)',
            borderRadius: '16px',
            border: '1px solid #DCE6F1',
            padding: '56px 40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle decorative glow */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 79, 235, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              maxWidth: '840px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Welcome Tag from doc */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(0, 79, 235, 0.08)',
                color: '#004FEB',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '4px 10px',
                borderRadius: '6px',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#004FEB',
                }}
              />
              Welcome to Knoweb
            </div>

            {/* Headline matching Wireframe Part 1 */}
            <h1
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#0A192F',
                marginBottom: '18px',
                letterSpacing: '-0.025em',
              }}
            >
              Practical Software &amp; Digital Solutions
            </h1>

            {/* Subheading / Description matching Wireframe Part 1 & Document */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.6,
                color: '#475569',
                marginBottom: '32px',
                maxWidth: '740px',
              }}
            >
              Business software, ERP, custom development and digital services.
              <br className="hidden sm:inline" /> Solutions for new projects and existing systems.
            </p>

            {/* Action Buttons matching Wireframe Part 1 */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <Link
                href="/solutions"
                style={{
                  textDecoration: 'none',
                  background: '#004FEB',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.94rem',
                  padding: '12px 26px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 8px rgba(0, 79, 235, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0040C8';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#004FEB';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore Solutions
              </Link>

              <Link
                href="/contact"
                style={{
                  textDecoration: 'none',
                  background: '#FFFFFF',
                  color: '#0A192F',
                  fontWeight: 600,
                  fontSize: '0.94rem',
                  padding: '11px 24px',
                  borderRadius: '8px',
                  border: '1.5px solid #004FEB',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F0F7FF';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
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
