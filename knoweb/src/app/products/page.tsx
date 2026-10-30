import type { Metadata } from 'next';
import Link from 'next/link';
import BottomCTASection from '@/components/sections/BottomCTASection';

export const metadata: Metadata = {
  title: 'Products — Business Software & SaaS Platforms',
  description:
    'Ready-to-use business software applications including Ginum, PirisaHR, Anawuma, Thanayama, Pharmacy, and Practical ERP.',
};

export default function ProductsPage() {
  return (
    <div style={{ paddingTop: '96px', background: '#FFFFFF' }}>
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
            <span style={{ color: '#004FEB', fontWeight: 600 }}>Products</span>
          </div>

          <h1
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0A192F',
              lineHeight: 1.2,
              marginBottom: '16px',
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
              marginBottom: '24px',
            }}
          >
            Explore our ready-to-use software applications designed for everyday business operations.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              href="/saas"
              style={{
                textDecoration: 'none',
                background: '#004FEB',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.92rem',
                padding: '12px 24px',
                borderRadius: '8px',
              }}
            >
              Explore SaaS Applications &gt;
            </Link>

            <Link
              href="/erp"
              style={{
                textDecoration: 'none',
                background: '#FFFFFF',
                color: '#0A192F',
                border: '1.5px solid #004FEB',
                fontWeight: 600,
                fontSize: '0.92rem',
                padding: '11px 22px',
                borderRadius: '8px',
              }}
            >
              Explore Practical ERP &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Grid of Product Categories */}
      <section style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Box 1: SaaS */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1.5px solid #CBD5E1',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#004FEB',
                    background: 'rgba(0, 79, 235, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: '14px',
                  }}
                >
                  6 Core Applications
                </span>
                <h2
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.55rem',
                    fontWeight: 800,
                    color: '#0A192F',
                    marginBottom: '10px',
                  }}
                >
                  SaaS Business Software
                </h2>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Ready-to-use business applications including <strong>Ginum</strong> (Accounting), <strong>PirisaHR</strong> (HR), <strong>Anawuma</strong> (Orders), <strong>Thanayama</strong> (Hospitality), <strong>Pharmacy</strong>, and <strong>Invoicing</strong>.
                </p>
              </div>

              <Link
                href="/saas"
                style={{
                  textDecoration: 'none',
                  color: '#004FEB',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                View all SaaS products &gt;
              </Link>
            </div>

            {/* Box 2: ERP */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1.5px solid #CBD5E1',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#004FEB',
                    background: 'rgba(0, 79, 235, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: '14px',
                  }}
                >
                  Unified Architecture
                </span>
                <h2
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.55rem',
                    fontWeight: 800,
                    color: '#0A192F',
                    marginBottom: '10px',
                  }}
                >
                  Practical ERP
                </h2>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  One configurable platform for connected business operations connecting Sales, Purchasing, Inventory, Finance, and Administration.
                </p>
              </div>

              <Link
                href="/erp"
                style={{
                  textDecoration: 'none',
                  color: '#004FEB',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                View Practical ERP details &gt;
              </Link>
            </div>

            {/* Box 3: QuickAssist */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '2px solid #004FEB',
                boxShadow: '0 4px 20px rgba(0, 79, 235, 0.08)',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#004FEB',
                    background: 'rgba(0, 79, 235, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: '14px',
                  }}
                >
                  Problem Guidance
                </span>
                <h2
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.55rem',
                    fontWeight: 800,
                    color: '#004FEB',
                    marginBottom: '10px',
                  }}
                >
                  Knoweb QuickAssist
                </h2>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Facing software errors, poor support or an unavailable developer? Get objective technical triage and guidance on your next steps.
                </p>
              </div>

              <Link
                href="/quickassist"
                style={{
                  textDecoration: 'none',
                  color: '#004FEB',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                Get QuickAssist &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BottomCTASection />
    </div>
  );
}
