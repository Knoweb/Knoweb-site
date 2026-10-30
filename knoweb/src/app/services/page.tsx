'use client';

import Link from 'next/link';
import BottomCTASection from '@/components/sections/BottomCTASection';

const serviceList = [
  {
    id: 'web-dev',
    title: 'Website Development & E-Commerce',
    subtitle: 'New websites, redesigns and online stores.',
    overview:
      'We design and engineer fast, modern, and mobile-responsive websites and online stores that establish credibility and convert visitors into clients.',
    bullets: [
      'Custom corporate and brand websites with clean, crisp layouts',
      'E-commerce platforms with local payment gateways (PayHere, Direct Bank, etc.)',
      'Fast-loading frontend architectures built on modern web standards',
      'Search engine friendly structure (technical SEO) and responsive mobile design',
    ],
  },
  {
    id: 'web-takeover',
    title: 'Website Takeover & Management',
    subtitle: 'Existing website revamps, updates, content management and maintenance.',
    overview:
      'When your existing agency or developer is unreachable, unresponsive, or unable to deliver, Knoweb assumes management of your website safely.',
    bullets: [
      'Secure credential handover and DNS/hosting transfer',
      'Plugin updates, vulnerability patching, and security audits',
      'Regular content updates, promotional banners, and copy changes',
      'Fixing broken layouts, 404 links, and slow loading speeds',
    ],
  },
  {
    id: 'custom-dev',
    title: 'Custom Software Development',
    subtitle: 'Business applications and tailored software solutions.',
    overview:
      'Purpose-built software created around your unique business workflows, reporting requirements, and compliance rules.',
    bullets: [
      'Internal business portals and multi-user workflow systems',
      'Custom customer portals and booking engines',
      'Scalable cloud architecture with secure database design',
      'Granular role-based permissions and complete audit histories',
    ],
  },
  {
    id: 'modernization',
    title: 'Existing Software Modernization',
    subtitle: 'Assessment, improvement and modernization of existing applications.',
    overview:
      'Upgrade legacy systems without discarding years of business data. We evaluate existing codebases and incrementally modernize architecture and UI.',
    bullets: [
      'Comprehensive codebase audit and architecture assessment',
      'Modernizing user interfaces for desktop and tablet efficiency',
      'Database performance optimization and data cleanup',
      'Refactoring high-risk legacy code to maintainable standards',
    ],
  },
  {
    id: 'maintenance',
    title: 'Regular Maintenance & Technical Support',
    subtitle: 'Troubleshooting, updates, system improvements and ongoing support.',
    overview:
      'Dependable post-launch support and regular upkeep to prevent costly downtime and keep your systems operating smoothly.',
    bullets: [
      'Guaranteed response times and technical troubleshooting helpdesk',
      'Regular software updates, patch application, and dependency checks',
      'Automated daily offsite backups and disaster recovery verification',
      'Continuous uptime and performance monitoring',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Social Media',
    subtitle: 'Digital content, campaigns and online presence management.',
    overview:
      'Targeted digital marketing strategies designed to increase reach, generate verified inquiries, and maintain consistent brand positioning.',
    bullets: [
      'Search engine optimization (SEO) to rank for high-intent business terms',
      'Targeted pay-per-click (PPC) and social advertising campaigns',
      'Corporate social media content creation and audience engagement',
      'Lead tracking and campaign conversion rate optimization',
    ],
  },
  {
    id: 'integration',
    title: 'System Integration & Automation',
    subtitle: 'Connecting applications and improving business workflows.',
    overview:
      'Eliminate manual data re-entry and fragmented spreadsheets by connecting your sales, accounting, POS, and third-party tools.',
    bullets: [
      'Custom API development and third-party software connectors',
      'Automated sync between POS, ERP, and accounting platforms',
      'Payment gateway and SMS/WhatsApp notification automation',
      'Automated scheduled data exports and management dashboards',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '96px', background: '#FFFFFF' }}>
      {/* ── Page Hero ── */}
      <section style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '48px', background: '#F8FAFC' }}>
        <div className="container-max" style={{ paddingTop: '28px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: '#64748B',
              marginBottom: '20px',
            }}
          >
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: '#004FEB', fontWeight: 600 }}>Services</span>
          </div>

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
              padding: '6px 12px',
              borderRadius: '6px',
              marginBottom: '16px',
            }}
          >
            Defined Scope &amp; Delivery
          </div>

          <h1
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0A192F',
              lineHeight: 1.2,
              marginBottom: '16px',
              maxWidth: '840px',
            }}
          >
            Development, Revamps &amp; Maintenance
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: '#334155',
              maxWidth: '780px',
              marginBottom: '10px',
            }}
          >
            New Systems. Existing Systems. Ongoing Support.
          </p>

          <p
            style={{
              fontSize: '0.96rem',
              lineHeight: 1.6,
              color: '#64748B',
              maxWidth: '740px',
              margin: 0,
            }}
          >
            Knoweb helps businesses develop, improve and maintain websites and software applications with disciplined project management and clear delivery scopes.
          </p>
        </div>
      </section>

      {/* ── Services Detail List ── */}
      <section style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div className="container-max">
          {/* Note callout banner */}
          <div
            style={{
              background: '#F0F5FA',
              borderRadius: '12px',
              border: '1px solid #DCE6F1',
              padding: '20px 24px',
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.5 }}>
              <strong>Notice regarding existing systems:</strong> Existing-system work is subject to technical assessment, access and agreed scope.
            </div>
            <Link
              href="/quickassist"
              style={{
                textDecoration: 'none',
                color: '#004FEB',
                fontWeight: 700,
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
              }}
            >
              Start with QuickAssist &gt;
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {serviceList.map((service) => (
              <div
                key={service.id}
                id={service.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #CBD5E1',
                  padding: '36px 32px',
                  scrollMarginTop: '110px',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#0A192F',
                    marginBottom: '6px',
                  }}
                >
                  {service.title}
                </h2>

                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#004FEB',
                    marginBottom: '10px',
                  }}
                >
                  {service.subtitle}
                </p>

                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: '#475569',
                    marginBottom: '20px',
                    maxWidth: '820px',
                  }}
                >
                  {service.overview}
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '10px',
                    marginBottom: '26px',
                  }}
                >
                  {service.bullets.map((b, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '8px',
                        fontSize: '0.88rem',
                        color: '#334155',
                        background: '#F8FAFC',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      <span style={{ color: '#004FEB', fontWeight: 700 }}>•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    style={{
                      textDecoration: 'none',
                      background: '#004FEB',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      padding: '10px 22px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    Discuss Scope for {service.title} &gt;
                  </Link>

                  <Link
                    href="/quickassist"
                    style={{
                      textDecoration: 'none',
                      background: '#FFFFFF',
                      color: '#475569',
                      border: '1px solid #CBD5E1',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      padding: '10px 20px',
                      borderRadius: '8px',
                    }}
                  >
                    Not sure what to do? Get QuickAssist
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTASection />
    </div>
  );
}
