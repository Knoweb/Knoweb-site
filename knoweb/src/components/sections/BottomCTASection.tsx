'use client';

import Link from 'next/link';

export default function BottomCTASection() {
  return (
    <section
      style={{
        paddingTop: '36px',
        paddingBottom: '64px',
        background: '#FFFFFF',
      }}
    >
      <div className="container-max">
        {/* Dark Navy Container Card as in Wireframe Part 2 */}
        <div
          style={{
            background: '#0F1E36',
            borderRadius: '16px',
            padding: '52px 40px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle ambient light */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 79, 235, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px' }}>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(1.75rem, 3.2vw, 2.3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
                marginBottom: '14px',
                lineHeight: 1.2,
              }}
            >
              LET&apos;S TALK ABOUT YOUR REQUIREMENTS
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#CBD5E1',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              New software, a digital project or support for an existing system?
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              {/* Primary button */}
              <Link
                href="/contact"
                style={{
                  textDecoration: 'none',
                  background: '#004FEB',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.94rem',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 14px rgba(0, 79, 235, 0.35)',
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
                Contact Knoweb
              </Link>

              {/* Secondary CTA: Get QuickAssist > */}
              <Link
                href="/quickassist"
                style={{
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  padding: '8px 12px',
                  borderRadius: '6px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#38BDF8';
                  e.currentTarget.style.gap = '10px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.gap = '6px';
                }}
              >
                Get QuickAssist &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
