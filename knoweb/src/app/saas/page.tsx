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
    <div style={{ background: '#FFFFFF' }}>
      {/* ── Modern Centered Frosted-Glass Hero Section using saas-hero.jpeg ── */}
      <section
        style={{
          position: 'relative',
          paddingTop: '76px',
          paddingBottom: '76px',
          backgroundColor: '#071224',
          backgroundImage: `linear-gradient(135deg, rgba(7, 18, 36, 0.62) 0%, rgba(10, 25, 47, 0.48) 50%, rgba(7, 18, 36, 0.68) 100%), url('/saas-hero.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Ambient background glows */}
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            right: '5%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.18) 0%, rgba(0, 102, 255, 0.06) 50%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(32px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '8%',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.16) 0%, transparent 68%)',
            pointerEvents: 'none',
            filter: 'blur(30px)',
          }}
        />

        <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
          {/* Modern Translucent Frosted Glass Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(13, 32, 59, 0.35) 40%, rgba(7, 18, 36, 0.46) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              padding: '48px 44px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.28), inset 0 0 24px rgba(0, 229, 255, 0.06)',
            }}
          >
            {/* Inner ambient card cyan glow */}
            <div
              style={{
                position: 'absolute',
                top: '5%',
                right: '-30px',
                width: '440px',
                height: '440px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 229, 255, 0.16) 0%, rgba(0, 102, 255, 0.04) 55%, transparent 75%)',
                pointerEvents: 'none',
                filter: 'blur(28px)',
              }}
            />

            <div style={{ maxWidth: '860px', position: 'relative', zIndex: 2 }}>
              {/* Breadcrumb */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                  marginBottom: '20px',
                  textShadow: '0 1px 8px rgba(0, 0, 0, 0.7)',
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
                <span style={{ color: '#E2E8F0', fontWeight: 500 }}>SaaS Products</span>
              </div>

              {/* Pill Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(0, 200, 255, 0.14)',
                  color: '#00E5FF',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  border: '1px solid rgba(0, 229, 255, 0.35)',
                  marginBottom: '20px',
                  boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#00E5FF',
                    boxShadow: '0 0 8px #00E5FF',
                  }}
                />
                Software for Everyday Business Operations
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.18,
                  color: '#FFFFFF',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 20px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.5)',
                }}
              >
                Business Software &amp; SaaS Products
              </h1>

              {/* Subtitle / Lead Paragraph */}
              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.18rem)',
                  lineHeight: 1.65,
                  color: '#F1F5F9',
                  maxWidth: '780px',
                  marginBottom: '14px',
                  textShadow: '0 1px 12px rgba(0, 0, 0, 0.75)',
                }}
              >
                Ready-to-use business applications designed to help manage essential activities.
              </p>

              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.65,
                  color: '#CBD5E1',
                  maxWidth: '720px',
                  marginBottom: '28px',
                  textShadow: '0 1px 10px rgba(0, 0, 0, 0.65)',
                }}
              >
                Deploy immediately without heavy upfront development. Reliable, user-friendly, and backed by local support.
              </p>

              {/* Value Highlight Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  alignItems: 'center',
                  marginBottom: '28px',
                }}
              >
                {[
                  { icon: '⚡', label: 'Instant Deployment' },
                  { icon: '🛡️', label: 'Local Compliance & Tax Ready' },
                  { icon: '🔄', label: 'Automated Cloud Updates' },
                  { icon: '💳', label: 'Transparent Subscription' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                      color: '#F1F5F9',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <a
                  href="#ginum"
                  style={{
                    textDecoration: 'none',
                    borderRadius: '10px',
                    background: '#0066FF',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.94rem',
                    padding: '12px 26px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 18px rgba(0, 102, 255, 0.45)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0052CC';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 102, 255, 0.65)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0066FF';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 102, 255, 0.45)';
                  }}
                >
                  Explore 6 Platforms &darr;
                </a>
                <Link
                  href="/contact"
                  style={{
                    textDecoration: 'none',
                    borderRadius: '10px',
                    border: '1.5px solid rgba(255, 255, 255, 0.28)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.94rem',
                    padding: '11px 24px',
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
                  Request a Demo &rarr;
                </Link>
              </div>
            </div>
          </div>
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
