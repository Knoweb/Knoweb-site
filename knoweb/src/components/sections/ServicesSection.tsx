'use client';

import Link from 'next/link';

const services = [
  {
    id: 'web-dev',
    title: 'Website Development & E-Commerce',
    description: 'New websites, redesigns and online stores.',
  },
  {
    id: 'web-takeover',
    title: 'Website Takeover & Management',
    description: 'Existing website revamps, updates, content management and maintenance.',
  },
  {
    id: 'custom-dev',
    title: 'Custom Software Development',
    description: 'Business applications and tailored software solutions.',
  },
  {
    id: 'modernization',
    title: 'Existing Software Modernization',
    description: 'Assessment, improvement and modernization of existing applications.',
  },
  {
    id: 'maintenance',
    title: 'Regular Maintenance & Support',
    description: 'Troubleshooting, updates, system improvements and ongoing support.',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Social Media',
    description: 'Digital content, campaigns and online presence management.',
  },
  {
    id: 'integration',
    title: 'System Integration & Automation',
    description: 'Connecting applications and improving business workflows.',
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{
        paddingTop: '36px',
        paddingBottom: '36px',
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
            DEVELOPMENT, REVAMPS & MAINTENANCE
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              margin: 0,
            }}
          >
            New systems. Existing systems. Ongoing support.
          </p>
        </div>

        {/* 7 Services Grid (2 Columns) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              style={{
                textDecoration: 'none',
                background: '#F0F5FA',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '22px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '84px',
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
              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#0A192F',
                  marginBottom: '4px',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: '#64748B',
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Footnote about existing systems */}
        <p
          style={{
            fontSize: '0.84rem',
            color: '#64748B',
            marginBottom: '20px',
            lineHeight: 1.5,
          }}
        >
          Existing-system work is subject to technical assessment, access and agreed scope.
        </p>

        {/* Bottom Link */}
        <div>
          <Link
            href="/services"
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
            Explore All Services &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
