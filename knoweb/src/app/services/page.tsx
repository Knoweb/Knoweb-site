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
    <div style={{ background: '#FFFFFF' }}>
      {/* ── Edge-to-edge Hero Section matching Home Page Design & Typography ── */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 68px)',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#050811',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        {/* Right-Side Services Image Visual */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '64%',
            backgroundImage: `url('/services.jpg')`,
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.85,
            zIndex: 0,
          }}
        />

        {/* Ambient Pulsating Glow 1 (Violet / Purple) */}
        <div
          style={{
            position: 'absolute',
            top: '18%',
            right: '8%',
            width: '680px',
            height: '680px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(126, 34, 206, 0.09) 38%, transparent 72%)',
            pointerEvents: 'none',
            filter: 'blur(50px)',
            animation: 'heroAuraPulse 7s ease-in-out infinite',
            zIndex: 1,
          }}
        />

        {/* Ambient Pulsating Glow 2 (Electric Cyan / Royal Blue) */}
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            right: '24%',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0, 229, 255, 0.14) 0%, rgba(59, 130, 246, 0.08) 42%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(45px)',
            animation: 'heroAuraPulseSecondary 9s ease-in-out infinite alternate',
            zIndex: 1,
          }}
        />

        {/* Left-to-Right Dark Gradient Vignette for Guaranteed WCAG Contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, #050811 0%, #050811 38%, rgba(5, 8, 17, 0.88) 56%, rgba(5, 8, 17, 0.28) 82%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Mobile Top-to-Bottom Vignette Overlay */}
        <div
          className="block md:hidden"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, #050811 0%, #050811 40%, rgba(5, 8, 17, 0.70) 70%, rgba(5, 8, 17, 0.15) 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Edge-to-edge Content Container with Generous Left Alignment matching Home */}
        <div
          className="container-max"
          style={{
            position: 'relative',
            zIndex: 3,
            paddingTop: '64px',
            paddingBottom: '72px',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            {/* Top Breadcrumb */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                marginBottom: '24px',
              }}
            >
              <Link
                href="/"
                style={{
                  color: '#00E5FF',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
              >
                Home
              </Link>
              <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>/</span>
              <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Services</span>
            </div>

            {/* Main Headline (H1): Exact styling as Home Hero (Light 300 weight, pure white) */}
            <h1
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: 'clamp(2.75rem, 5.8vw, 5.25rem)',
                fontWeight: 300,
                lineHeight: 1.12,
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                marginBottom: '24px',
              }}
            >
              Development, Revamps &amp; Maintenance
            </h1>

            {/* Description Paragraph: Exact styling as Home Hero (400 weight, #94A3B8, max-width ~620px) */}
            <p
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                fontWeight: 400,
                lineHeight: 1.65,
                color: '#94A3B8',
                maxWidth: '620px',
                margin: 0,
              }}
            >
              New Systems. Existing Systems. Ongoing Support. Knoweb helps businesses develop,
              improve and maintain websites and software applications with disciplined project management and clear delivery scopes.
            </p>
          </div>
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
                    fontFamily: 'Inter, sans-serif',
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
