'use client';

import Link from 'next/link';
import BottomCTASection from '@/components/sections/BottomCTASection';

const pillars = [
  {
    title: 'Sales & Distribution',
    desc: 'Quotations, sales orders, delivery dispatch notes, and receivables tracking across all sales channels.',
    bullets: [
      'Multi-channel order capture & approvals',
      'Flexible price lists, discounts & promotions',
      'Delivery scheduling & fulfillment tracking',
      'Customer credit limits & aging analyses',
    ],
  },
  {
    title: 'Purchasing & Procurement',
    desc: 'Standardized purchase requests, supplier quotations, purchase orders, and goods receipt verification.',
    bullets: [
      'Purchase requisitions & multi-level sign-offs',
      'Vendor price comparison & purchase orders',
      'Goods Receipt Notes (GRN) & 3-way matching',
      'Supplier payment tracking & credit control',
    ],
  },
  {
    title: 'Inventory & Warehouse',
    desc: 'Complete inventory visibility across warehouses, retail locations, and transit hubs.',
    bullets: [
      'Real-time multi-location stock balances',
      'Batch numbers, serial tracking & expiry dates',
      'Inter-branch stock transfers & transit records',
      'Automated re-order levels & stock valuation (FIFO/Weighted Avg)',
    ],
  },
  {
    title: 'Financial Management',
    desc: 'Automated accounting entries linked directly to sales, purchases, payroll, and banking operations.',
    bullets: [
      'General ledger, accounts payable & receivable',
      'Bank reconciliation & cash flow tracking',
      'Real-time P&L, balance sheets & tax reports',
      'Multi-currency transactions & audit logging',
    ],
  },
  {
    title: 'Administration & Governance',
    desc: 'Granular security roles, approval hierarchies, and executive dashboards for complete operational control.',
    bullets: [
      'Role-based permissions & secure audit trails',
      'Custom approval workflows for high-value actions',
      'Automated daily/weekly executive summary alerts',
      'Configurable report generator for audits',
    ],
  },
];

export default function ERPPage() {
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
        {/* Right-Side ERP Hero Image Visual */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '64%',
            backgroundImage: `url('/erp-hero.png')`,
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
              <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Practical ERP</span>
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
              Practical ERP &mdash; Bring Your Operations Together
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
              One configurable ERP platform connecting important business activities, including sales,
              purchasing, inventory, finance and administration. Adaptable to different industries and operational requirements without excessive customization costs or lengthy deployment cycles.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5 Core Pillars ── */}
      <section style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div className="container-max">
          <div style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.45rem',
                fontWeight: 800,
                color: '#0A192F',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                marginBottom: '8px',
              }}
            >
              The 5 Connected Pillars
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', margin: 0 }}>
              Configured to your business structure so your departments operate on one single source of truth.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1.5px solid #CBD5E1',
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#004FEB';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 79, 235, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#0A192F',
                      marginBottom: '8px',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#475569',
                      lineHeight: 1.55,
                      marginBottom: '20px',
                    }}
                  >
                    {pillar.desc}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {pillar.bullets.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '8px',
                          fontSize: '0.88rem',
                          color: '#334155',
                        }}
                      >
                        <span style={{ color: '#004FEB', fontWeight: 700 }}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Differentiating Banner */}
          <div
            style={{
              background: '#F0F5FA',
              borderRadius: '16px',
              border: '1px solid #DCE6F1',
              padding: '36px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#0A192F',
                  marginBottom: '8px',
                }}
              >
                Stuck in a Failed or Stalled ERP Implementation?
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Many businesses invest heavily in rigid ERPs that staff cannot adopt or that current consultants cannot support. Our QuickAssist service provides independent assessment to evaluate whether your current system can be rescued or simplified.
              </p>
            </div>

            <Link
              href="/quickassist"
              style={{
                textDecoration: 'none',
                background: '#004FEB',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.92rem',
                padding: '12px 24px',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              Get ERP QuickAssist &gt;
            </Link>
          </div>
        </div>
      </section>

      <BottomCTASection />
    </div>
  );
}
