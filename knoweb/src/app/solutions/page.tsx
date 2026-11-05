'use client';

import Link from 'next/link';
import BottomCTASection from '@/components/sections/BottomCTASection';

const industrySolutions = [
  {
    id: 'wewili',
    title: 'Wewili Plantation Dashboard',
    tagline: 'Plantation Operations & Estate Intelligence',
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
                margin: 0,
              }}
            >
              Purpose-built applications and monitoring systems for specialized operational requirements.
              Engineered for high reliability in demanding environments, giving operational leaders immediate visibility and rapid response capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Solutions List ── */}
      <section style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div className="container-max">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {industrySolutions.map((item) => (
              <div
                key={item.id}
                id={item.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #CBD5E1',
                  padding: '36px 32px',
                  scrollMarginTop: '110px',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '10px',
                  }}
                >
                  <h2
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1.65rem',
                      fontWeight: 800,
                      color: '#0A192F',
                    }}
                  >
                    {item.title}
                  </h2>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#004FEB',
                      background: 'rgba(0, 79, 235, 0.08)',
                      padding: '4px 12px',
                      borderRadius: '6px',
                    }}
                  >
                    {item.tagline}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    color: '#334155',
                    marginBottom: '8px',
                  }}
                >
                  {item.summary}
                </p>

                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: '#64748B',
                    marginBottom: '24px',
                    maxWidth: '820px',
                  }}
                >
                  {item.overview}
                </p>

                <h4
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '12px',
                  }}
                >
                  System Capabilities &amp; Architecture
                </h4>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '10px',
                    marginBottom: '28px',
                  }}
                >
                  {item.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '8px',
                        fontSize: '0.9rem',
                        color: '#475569',
                        background: '#F8FAFC',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      <span style={{ color: '#004FEB', fontWeight: 700 }}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link
                    href={`/contact?solution=${encodeURIComponent(item.title)}`}
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
                    Request Technical Overview for {item.title} &gt;
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
                    Need troubleshooting on an existing system?
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
