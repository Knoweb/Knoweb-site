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
  bgImage?: string;
}

const products: ProductItem[] = [
  {
    id: 'ginum',
    name: 'Ginum',
    tagline: 'Accounting & Finance Management',
    url: 'http://ginumapps.com/',
    logoLight: '/logos/ginum.png',
    logoDark: '/logos/ginum-dark.png',
    bgImage: '/ginum-dashboard-bg.jpg',
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
    bgImage: '/pirisahr-dashboard-bg.jpg',
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
        {/* Right-Side SaaS Hero Image Visual */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '64%',
            backgroundImage: `url('/saas-hero.jpeg')`,
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
              <span style={{ color: '#E2E8F0', fontWeight: 500 }}>SaaS Products</span>
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
              Business Software &amp; SaaS Products
            </h1>

            {/* Description Paragraph: Exact styling as Home Hero (400 weight, #94A3B8, max-width ~600px) */}
            <p
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                fontWeight: 400,
                lineHeight: 1.65,
                color: '#94A3B8',
                maxWidth: '580px',
                marginBottom: '38px',
              }}
            >
              Ready-to-use business applications designed to help manage essential activities.
              Deploy immediately without heavy upfront development.
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
              {/* Primary Button: Royal Blue matching Home */}
              <a
                href="#ginum"
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
                Explore 6 Platforms &darr;
              </a>

              {/* Secondary Button: Dark translucent with subtle border matching Home */}
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
                Request a Demo &rarr;
              </Link>
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
                {/* ── Background UI Visual (Ginum & SaaS Platforms) ── */}
                {product.bgImage && (
                  <div
                    className="saas-card-bg-wrap"
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      width: '60%',
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
                        top: '-4%',
                        right: '-2%',
                        width: '112%',
                        height: '112%',
                        backgroundImage: `url(${product.bgImage})`,
                        backgroundPosition: 'right 30%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.78,
                        filter: 'contrast(1.05) saturate(1.15)',
                        transition:
                          'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                      }}
                    />

                    {/* Left-to-Right Gradient Vignette: Light Mode */}
                    <div
                      className="saas-card-vignette-light"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 10%, rgba(255, 255, 255, 0.70) 28%, rgba(255, 255, 255, 0.18) 52%, transparent 75%, transparent 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Left-to-Right Gradient Vignette: Dark Mode */}
                    <div
                      className="saas-card-vignette-dark"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(90deg, #0E223D 0%, #0E223D 10%, rgba(14, 34, 61, 0.75) 28%, rgba(14, 34, 61, 0.22) 52%, transparent 75%, transparent 100%)',
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
                        className="saas-capability-item"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.9rem',
                          color: '#0F172A',
                          fontWeight: 600,
                          background: 'rgba(255, 255, 255, 0.94)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          padding: '11px 16px',
                          borderRadius: '8px',
                          border: '1px solid rgba(203, 213, 225, 0.90)',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <span style={{ color: '#004FEB', fontWeight: 800, fontSize: '0.95rem' }}>✓</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTASection />
    </div>
  );
}
