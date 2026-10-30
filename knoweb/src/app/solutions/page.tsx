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
            <span style={{ color: '#004FEB', fontWeight: 600 }}>Solutions</span>
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
            Specialized Applications &amp; Monitoring Systems
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
            Industry &amp; Operational Solutions
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
            Purpose-built applications and monitoring systems for specialized operational requirements.
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
            Engineered for high reliability in demanding environments, giving operational leaders immediate visibility and rapid response capabilities.
          </p>
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
                      fontFamily: 'Outfit, sans-serif',
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
