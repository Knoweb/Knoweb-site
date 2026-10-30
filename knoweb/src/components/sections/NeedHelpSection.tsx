'use client';

import Link from 'next/link';

export default function NeedHelpSection() {
  return (
    <section
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
        background: '#FFFFFF',
      }}
    >
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '24px' }}>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.45rem',
              fontWeight: 800,
              color: '#0A192F',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '6px',
            }}
          >
            NEED HELP WITH YOUR TECHNOLOGY?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              margin: 0,
            }}
          >
            Two clear starting points
          </p>
        </div>

        {/* Two Split Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: QuickAssist (Prominently Highlighted) */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '2px solid #004FEB',
              boxShadow: '0 4px 20px rgba(0, 79, 235, 0.08)',
              padding: '32px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.2s ease',
            }}
          >
            {/* Top highlight badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(0, 79, 235, 0.1)',
                color: '#004FEB',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '4px 10px',
                borderRadius: '6px',
                marginBottom: '14px',
                alignSelf: 'flex-start',
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
              Immediate Guidance
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  color: '#004FEB',
                  marginBottom: '6px',
                }}
              >
                QuickAssist
              </h3>

              <h4
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '12px',
                }}
              >
                Not sure what to do?
              </h4>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#475569',
                  marginBottom: '28px',
                }}
              >
                Errors, poor support or an unavailable developer. Understand the problem and next
                steps.
              </p>
            </div>

            <div>
              <Link
                href="/quickassist"
                style={{
                  textDecoration: 'none',
                  color: '#004FEB',
                  fontWeight: 700,
                  fontSize: '0.98rem',
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
                Get QuickAssist &gt;
              </Link>
            </div>
          </div>

          {/* Card 2: Knoweb Services */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #CBD5E1',
              padding: '32px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#94A3B8';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#CBD5E1';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#F1F5F9',
                  color: '#475569',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  marginBottom: '14px',
                  alignSelf: 'flex-start',
                }}
              >
                Defined Delivery
              </div>

              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  color: '#0A192F',
                  marginBottom: '6px',
                }}
              >
                Knoweb Services
              </h3>

              <h4
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '12px',
                }}
              >
                Know what you need?
              </h4>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#475569',
                  marginBottom: '28px',
                }}
              >
                Development, revamps, takeovers and maintenance. Discuss scope and delivery with
                Knoweb.
              </p>
            </div>

            <div>
              <Link
                href="/services"
                style={{
                  textDecoration: 'none',
                  color: '#004FEB',
                  fontWeight: 700,
                  fontSize: '0.98rem',
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
                Explore Services &gt;
              </Link>
            </div>
          </div>
        </div>

        {/* Helpful clarifier footer note */}
        <p
          style={{
            marginTop: '16px',
            fontSize: '0.86rem',
            color: '#64748B',
            lineHeight: 1.5,
          }}
        >
          Not sure which option to choose? Start with QuickAssist. Any technical assessment or follow-up
          work is agreed separately.
        </p>
      </div>
    </section>
  );
}
