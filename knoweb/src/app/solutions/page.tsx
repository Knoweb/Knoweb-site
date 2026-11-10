'use client';

import Link from 'next/link';
import BottomCTASection from '@/components/sections/BottomCTASection';

interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  overview: string;
  bgImage: string;
  bgPosition: string;
  url?: string;
  urlLabel?: string;
  features: string[];
}

const industrySolutions: SolutionItem[] = [
  {
    id: 'wewili',
    title: 'Wewili Plantation Dashboard',
    tagline: 'Plantation Operations & Estate Intelligence',
    url: 'https://www.wevili.com/login',
    urlLabel: 'Visit Wewili Platform ↗',
    bgImage: '/sol-wavili.png',
    bgPosition: 'right 30%',
    summary: 'Plantation operations and management information.',
    overview:
      'A specialized digital monitoring system tailored for tea, rubber, coconut, and agro-plantations. It aggregates field data, worker productivity, crop yield, and factory dispatch into real-time executive dashboards.',
    features: [
      'Field plucking / harvesting logs and daily weight tracking',
      'Division-wise worker attendance and muster roll tracking',
      'Fertilizer, chemical, and nursery input utilization records',
      'Factory dispatch tracking, green leaf intake, and outturn calculations',
      'Rainfall and estate weather station logging',
      'Comparative monthly estate yield and cost per kilo analytics',
    ],
  },
  {
    id: 'inspection',
    title: 'Inspection Dashboard',
    tagline: 'Field Audits & Compliance Verification',
    bgImage: '/sol-inspection.png',
    bgPosition: 'right 25%',
    summary: 'Inspection records, observations and follow-up.',
    overview:
      'Standardize quality, safety, and compliance audits across multiple facilities, retail stores, or construction sites with digital mobile forms and instant discrepancy resolution workflows.',
    features: [
      'Configurable digital audit checklists by facility type',
      'On-site photo capture, annotations, and GPS timestamping',
      'Automated issue scoring and severity ranking',
      'Corrective Action & Preventive Action (CAPA) tracking',
      'Automated PDF audit reports distributed immediately upon submission',
      'Compliance trend dashboards comparing branch performance over time',
    ],
  },
  {
    id: 'greenhouse',
    title: 'Greenhouse Monitoring System',
    tagline: 'Agri-Tech Environmental Telemetry',
    url: 'mailto:Sanotagreenhouse@sanota.com',
    urlLabel: 'Contact Sanota Team ↗',
    bgImage: '/sol-greenhouse.png',
    bgPosition: 'right 20%',
    summary: 'Environmental conditions and greenhouse monitoring.',
    overview:
      'Continuous telemetry monitoring of critical micro-climates in commercial poly-tunnels and smart greenhouses. Protect delicate crops and optimize yield with early warning sensor triggers.',
    features: [
      'Real-time temperature, ambient humidity, and vapor pressure deficit (VPD)',
      'Soil moisture, electrical conductivity (EC), and pH level tracking',
      'Automated instant alerts via SMS, WhatsApp, and email when thresholds are breached',
      'Historical trend logging against crop cycle milestones',
      'Irrigation and fan automation trigger interfaces',
      'Battery backup and offline sensor data synchronization',
    ],
  },
  {
    id: 'atm',
    title: 'ATM Alarming System',
    tagline: 'Financial Infrastructure & Physical Security Monitoring',
    url: 'http://68.183.235.229/',
    urlLabel: 'Live Alarm Monitoring Portal ↗',
    bgImage: '/sol-alarm.png',
    bgPosition: 'right 30%',
    summary: 'Equipment alerts and ATM monitoring.',
    overview:
      'Mission-critical physical security and telemetry monitoring for remote ATM kiosks and bank branch vaults. Ensures uninterrupted surveillance and rapid security response.',
    features: [
      'Multi-sensor inputs (vibration, thermal, door open, chest breach, smoke)',
      'Immediate alert dispatch to central command centers and rapid response teams',
      'UPS power status, mains power failure, and ambient temperature telemetry',
      'False-alarm mitigation logic and camera snapshot triggering',
      'Detailed event logging and regulatory compliance audit logs',
      'Hardware heartbeat monitoring to detect network tampering or signal loss',
    ],
  },
];

export default function SolutionsPage() {
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
        {/* Right-Side Solution Image Visual */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '64%',
            backgroundImage: `url('/solution.jpg')`,
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
              <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Solutions</span>
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
              Industry &amp; Operational Solutions
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
                marginBottom: '38px',
              }}
            >
              Purpose-built applications and monitoring systems for specialized operational requirements.
              Engineered for high reliability in demanding environments, giving operational leaders immediate visibility and rapid response capabilities.
            </p>

            {/* Buttons: Exact styling as Home Hero */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <a
                href="#wewili"
                style={{
                  textDecoration: 'none',
                  borderRadius: '10px',
                  background: '#0066FF',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  padding: '13px 30px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 20px rgba(0, 102, 255, 0.45)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0052CC';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 30px rgba(0, 102, 255, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0066FF';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 4px 20px rgba(0, 102, 255, 0.45)';
                }}
              >
                Explore 4 Solutions &darr;
              </a>

              <Link
                href="/contact"
                style={{
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255, 255, 255, 0.28)',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '12px 28px',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.55)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Talk to an Expert &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions List (Exact SaaS Product Card Architecture & Visual Fidelity) ── */}
      <section style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div className="container-max">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {industrySolutions.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="saas-product-card"
                style={{
                  position: 'relative',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #CBD5E1',
                  padding: '36px 32px',
                  scrollMarginTop: '110px',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                }}
              >
                {/* ── Background UI Visual Layer (Dashboard Screenshot with Vignette) ── */}
                {item.bgImage && (
                  <div
                    className="saas-card-bg-wrap"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'none',
                      zIndex: 0,
                      overflow: 'hidden',
                    }}
                  >
                    {/* Dashboard Mockup Layer */}
                    <div
                      className="saas-card-bg-image"
                      style={{
                        position: 'absolute',
                        inset: '-2%',
                        width: '104%',
                        height: '104%',
                        backgroundImage: `url(${item.bgImage})`,
                        backgroundPosition: item.bgPosition || 'right 30%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.50,
                        filter: 'contrast(1.05) saturate(1.10)',
                        transition:
                          'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                      }}
                    />

                    {/* Left-to-Right Protective Gradient: Light Mode (100% Crisp Content Readability) */}
                    <div
                      className="saas-card-vignette-light"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 28%, rgba(255, 255, 255, 0.94) 50%, rgba(255, 255, 255, 0.65) 75%, rgba(255, 255, 255, 0.15) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Left-to-Right Protective Gradient: Dark Mode */}
                    <div
                      className="saas-card-vignette-dark"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(90deg, #0E223D 0%, #0E223D 28%, rgba(14, 34, 61, 0.94) 50%, rgba(14, 34, 61, 0.65) 75%, rgba(14, 34, 61, 0.18) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                )}

                {/* ── Foreground Content Layer (Guaranteed Crisp Readability) ── */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      marginBottom: '14px',
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1.65rem',
                        fontWeight: 800,
                        color: '#0A192F',
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h2>
                    <span
                      className="saas-tagline-badge"
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#004FEB',
                        background: 'rgba(238, 244, 255, 0.92)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        border: '1px solid rgba(0, 79, 235, 0.22)',
                        padding: '5px 14px',
                        borderRadius: '6px',
                        boxShadow: '0 2px 6px rgba(0, 79, 235, 0.08)',
                      }}
                    >
                      {item.tagline}
                    </span>
                  </div>

                  <p
                    className="saas-card-summary"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#0A192F',
                      marginBottom: '8px',
                    }}
                  >
                    {item.summary}
                  </p>

                  <p
                    className="saas-card-details"
                    style={{
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      color: '#1E293B',
                      fontWeight: 600,
                      marginBottom: '24px',
                      maxWidth: '740px',
                    }}
                  >
                    {item.overview}
                  </p>

                  <h4
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      color: '#0A192F',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '14px',
                        background: '#004FEB',
                        borderRadius: '2px',
                      }}
                    ></span>
                    System Capabilities &amp; Architecture
                  </h4>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '12px',
                      marginBottom: '28px',
                    }}
                  >
                    {item.features.map((feature, i) => (
                      <div
                        key={i}
                        className="saas-capability-item"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.92rem',
                          color: '#0A192F',
                          fontWeight: 600,
                          background: '#FFFFFF',
                          padding: '12px 18px',
                          borderRadius: '10px',
                          border: '1.5px solid #CBD5E1',
                          boxShadow:
                            '0 3px 10px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <span
                          style={{
                            color: '#004FEB',
                            fontWeight: 800,
                            fontSize: '1rem',
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        <span style={{ lineHeight: 1.4 }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: '14px',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}
                  >
                    {item.url && (
                      <a
                        href={item.url}
                        target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                        rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
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
                          boxShadow: '0 2px 8px rgba(0, 79, 235, 0.25)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {item.urlLabel || `Visit ${item.title} ↗`}
                      </a>
                    )}

                    <Link
                      href={`/contact?solution=${encodeURIComponent(item.title)}`}
                      style={{
                        textDecoration: 'none',
                        background: item.url ? 'rgba(0, 79, 235, 0.08)' : '#004FEB',
                        color: item.url ? '#004FEB' : '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        padding: '10px 22px',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: item.url ? '1px solid rgba(0, 79, 235, 0.22)' : 'none',
                        boxShadow: item.url ? 'none' : '0 2px 8px rgba(0, 79, 235, 0.25)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Request Technical Overview &rarr;
                    </Link>

                    <Link
                      href="/quickassist"
                      style={{
                        textDecoration: 'none',
                        background: '#FFFFFF',
                        color: '#475569',
                        border: '1.5px solid #CBD5E1',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Need troubleshooting on an existing system?
                    </Link>
                  </div>
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
