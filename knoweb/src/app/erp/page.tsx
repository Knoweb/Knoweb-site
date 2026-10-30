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
            <span style={{ color: '#004FEB', fontWeight: 600 }}>Practical ERP</span>
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
            Unified Business Architecture
          </div>

          <h1
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0A192F',
              lineHeight: 1.2,
              marginBottom: '16px',
              maxWidth: '820px',
            }}
          >
            Practical ERP — Bring Your Operations Together
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
            One configurable ERP platform connecting important business activities, including sales,
            purchasing, inventory, finance and administration.
          </p>

          <p
            style={{
              fontSize: '0.96rem',
              lineHeight: 1.6,
              color: '#64748B',
              maxWidth: '720px',
              margin: 0,
            }}
          >
            Adaptable to different industries and operational requirements without excessive customization costs or lengthy deployment cycles.
          </p>
        </div>
      </section>

      {/* ── 5 Core Pillars ── */}
      <section style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div className="container-max">
          <div style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
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
                      fontFamily: 'Outfit, sans-serif',
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
                  fontFamily: 'Outfit, sans-serif',
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
