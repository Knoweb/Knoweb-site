'use client';

import Link from 'next/link';

const solutions = [
  {
    id: 'wewili',
    title: 'Wewili Plantation Dashboard',
    description: 'Plantation operations and management information.',
  },
  {
    id: 'inspection',
    title: 'Inspection Dashboard',
    description: 'Inspection records, observations and follow-up.',
  },
  {
    id: 'greenhouse',
    title: 'Greenhouse Monitoring',
    description: 'Environmental conditions and greenhouse monitoring.',
  },
  {
    id: 'atm',
    title: 'ATM Alarming System',
    description: 'Equipment alerts and ATM monitoring.',
  },
];

export default function IndustrySolutionsSection() {
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
            padding: '36px 36px',
          }}
        >
          {/* Section Header */}
          <div style={{ marginBottom: '26px' }}>
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
              INDUSTRY & OPERATIONAL SOLUTIONS
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#475569',
                margin: 0,
              }}
            >
              Specialized applications and monitoring systems.
            </p>
          </div>

          {/* 4 Cards (2x2 Grid) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px',
              marginBottom: '26px',
            }}
          >
            {solutions.map((item) => (
              <div
                key={item.id}
                style={{
                  background: '#F0F5FA',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '120px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#EBF2F8';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F0F5FA';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#0A192F',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#64748B',
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: '14px' }}>
                  <Link
                    href={`/solutions#${item.id}`}
                    style={{
                      textDecoration: 'none',
                      color: '#004FEB',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Explore solution &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Link inside Container */}
          <div>
            <Link
              href="/solutions"
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
              Explore Industry Solutions &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
