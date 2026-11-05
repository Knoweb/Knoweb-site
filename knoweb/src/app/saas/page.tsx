'use client';

import Link from 'next/link';
import BottomCTASection from '@/components/sections/BottomCTASection';

interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  details: string;
  features: string[];
  url?: string;
  logoLight?: string;
  logoDark?: string;
}

const products: ProductItem[] = [
  {
    id: 'ginum',
    name: 'Ginum',
    tagline: 'Accounting & Finance Management',
    url: 'http://ginumapps.com/',
    logoLight: '/logos/ginum.png',
    logoDark: '/logos/ginum-dark.png',
    summary: 'Accounting records and financial administration.',
    details:
      'Ginum provides small and medium enterprises with dependable bookkeeping, invoicing, expense tracking, and financial statements without unnecessary complexity.',
    features: [
      'Customer invoicing and receipt generation',
      'Expense recording and cashbook management',
      'Bank reconciliation and statement import',
      'Automated Profit & Loss, Balance Sheet, and Trial Balance',
      'Tax computation and compliance schedule preparation',
      'Multi-user access control with audit trail',
    ],
  },
  {
    id: 'pirisahr',
    name: 'PirisaHR',
    tagline: 'Human Resources & Payroll',
    url: 'https://pirisahr.com/',
    logoLight: '/logos/pirisahr.png',
    logoDark: '/logos/pirisahr-dark.png',
    summary: 'Employee information, attendance and payroll administration.',
    details:
      'PirisaHR streamlines HR administration from employee onboarding and daily attendance to monthly payroll calculations and statutory compliance.',
    features: [
      'Comprehensive employee profiles and digital records',
      'Attendance tracking and biometric device integration',
      'Leave application, approval workflows, and balance tracking',
      'Automated payroll calculation with allowances and deductions',
      'EPF, ETF, and PAYE statutory report generation',
      'Multi-branch staff management and department hierarchy',
    ],
  },
  {
    id: 'anawuma',
    name: 'Anawuma',
    tagline: 'Order & Delivery Management',
    url: 'https://anawuma.com/',
    logoLight: '/logos/anawuma.png',
    logoDark: '/logos/anawuma-dark.png',
    summary: 'Customer orders, records and follow-up.',
    details:
      'Anawuma manages the entire order cycle from customer inquiry to delivery confirmation, ensuring zero misplaced orders and accurate order fulfilment.',
    features: [
      'Centralized order intake across sales channels',
      'Real-time order status tracking and fulfillment dispatch',
      'Inventory allocation to prevent stockouts',
      'Customer communication and delivery notifications',
      'Automated invoicing directly linked to order items',
      'Sales rep performance and customer order histories',
    ],
  },
  {
    id: 'thanayama',
    name: 'Thanayama',
    tagline: 'Hospitality & Accommodation Management',
    url: 'https://thanayama.com/',
    logoLight: '/logos/thanayama.png',
    logoDark: '/logos/thanayama-dark.png',
    summary: 'Reservations, guest information and accommodation administration.',
    details:
      'Thanayama simplifies front desk, room reservations, billing folios, and guest communication for boutique hotels, resorts, and guest houses.',
    features: [
      'Interactive room reservation calendar and availability grid',
      'Fast guest check-in, registration, and room assignment',
      'Consolidated guest billing, food & beverage add-ons, and folios',
      'Housekeeping status updates and room readiness alerts',
      'Guest history records and preference logging',
      'Daily occupancy and revenue breakdown reports',
    ],
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy Management System',
    tagline: 'Pharmacy Operations & Stock Control',
    summary: 'Pharmacy operations and inventory records.',
    details:
      'Designed specifically for pharmacies and medical dispensaries to maintain strict stock control, monitor drug expiry, and process high-speed sales.',
    features: [
      'Fast barcode-enabled point of sale dispensing',
      'Batch-wise stock control and automatic expiry date alerts',
      'Prescription records and patient medication history',
      'Re-order level notifications and supplier purchase management',
      'Gross margin analysis and price adjustments',
      'Regulatory audit readiness and scheduled stock audits',
    ],
  },
  {
    id: 'invoicing',
    name: 'Invoicing Systems',
    tagline: 'Billing & Receivable Administration',
    summary: 'Invoice preparation and billing administration.',
    details:
      'A streamlined, lightweight billing system for service businesses, consultants, traders, and distribution operations needing prompt invoice issuance.',
    features: [
      'Rapid quotation-to-invoice conversion',
      'Custom invoice templates with brand logo and payment details',
      'Automated payment tracking and overdue balance alerts',
      'Credit note and debit note handling',
      'Direct PDF generation and email delivery to clients',
      'Customer balance statements and accounts receivable reporting',
    ],
  },
];

export default function SaaSPage() {
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
            <span style={{ color: '#004FEB', fontWeight: 600 }}>SaaS Products</span>
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
            Software for Everyday Business Operations
          </div>

          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0A192F',
              lineHeight: 1.2,
              marginBottom: '16px',
              maxWidth: '820px',
            }}
          >
            Business Software &amp; SaaS Products
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
            Ready-to-use business applications designed to help manage essential activities.
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
            Deploy immediately without heavy upfront development. Reliable, user-friendly, and backed by local support.
          </p>
        </div>
      </section>

      {/* ── Product List ── */}
      <section style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div className="container-max">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {products.map((product) => (
              <div
                key={product.id}
                id={product.id}
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
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '14px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {product.logoLight && (
                      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.logoLight}
                          alt={`${product.name} logo`}
                          className="saas-logo-light"
                          style={{ maxHeight: '36px', maxWidth: '140px', objectFit: 'contain' }}
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.logoDark}
                          alt={`${product.name} logo`}
                          className="saas-logo-dark"
                          style={{ maxHeight: '36px', maxWidth: '140px', objectFit: 'contain' }}
                        />
                      </div>
                    )}
                    <h2
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1.65rem',
                        fontWeight: 800,
                        color: '#0A192F',
                        margin: 0,
                      }}
                    >
                      {product.name}
                    </h2>
                  </div>
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
                    {product.tagline}
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
                  {product.summary}
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
                  {product.details}
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
                  Key Capabilities
                </h4>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '10px',
                    marginBottom: '28px',
                  }}
                >
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
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

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      }}
                    >
                      Visit {product.name} ↗
                    </a>
                  )}

                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    style={{
                      textDecoration: 'none',
                      background: product.url ? 'rgba(0, 79, 235, 0.08)' : '#004FEB',
                      color: product.url ? '#004FEB' : '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      padding: '10px 22px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    Request Demo &gt;
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
                    Replacing an existing system?
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
