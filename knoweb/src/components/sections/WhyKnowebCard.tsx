'use client';

import Link from 'next/link';

export default function WhyKnowebCard() {
  return (
    <section
      style={{
        paddingTop: '36px',
        paddingBottom: '36px',
        background: '#FFFFFF',
      }}
    >
      <div className="container-max">
        {/* Outlined Container Box as in Wireframe Part 2 */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1.5px solid #CBD5E1',
            padding: '38px 36px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#004FEB';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 79, 235, 0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#CBD5E1';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.65rem',
              fontWeight: 800,
              color: '#0A192F',
              letterSpacing: '0.01em',
              marginBottom: '10px',
            }}
          >
            WHY KNOWEB?
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#1E293B',
              marginBottom: '12px',
              lineHeight: 1.5,
            }}
          >
            Practical technology shaped around business requirements.
          </p>

          <p
            style={{
              fontSize: '0.96rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '820px',
              marginBottom: '24px',
            }}
          >
            We focus on understanding business requirements and providing practical technology
            solutions — from ready-to-use software and customized systems to improving and supporting
            existing applications.
          </p>

          <div>
            <Link
              href="/about"
              style={{
                textDecoration: 'none',
                color: '#004FEB',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = '10px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = '6px';
              }}
            >
              About Knoweb &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
