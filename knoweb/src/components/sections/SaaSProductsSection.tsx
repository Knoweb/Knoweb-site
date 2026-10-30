'use client';

import Link from 'next/link';

const saasProducts = [
  {
    id: 'ginum',
    title: 'Ginum',
    description: 'Accounting & finance',
  },
  {
    id: 'pirisahr',
    title: 'PirisaHR',
    description: 'Human resources',
  },
  {
    id: 'anawuma',
    title: 'Anawuma',
    description: 'Order management',
  },
  {
    id: 'thanayama',
    title: 'Thanayama',
    description: 'Hospitality operations',
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    description: 'Pharmacy & stock',
  },
  {
    id: 'invoicing',
    title: 'Invoicing',
    description: 'Billing administration',
  },
];

export default function SaaSProductsSection() {
  return (
    <section
      style={{
        paddingTop: '36px',
        paddingBottom: '36px',
        background: '#FFFFFF',
      }}
    >
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '24px' }}>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.45rem',
              fontWeight: 800,
              color: '#0A192F',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '6px',
            }}
          >
            BUSINESS SOFTWARE & SaaS PRODUCTS
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              margin: 0,
            }}
          >
            Ready-to-use applications for everyday business operations.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '24px',
          }}
        >
          {saasProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: '#F0F5FA',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '140px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#EBF2F8';
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F0F5FA';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0A192F',
                    marginBottom: '6px',
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#475569',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {product.description}
                </p>
              </div>

              <div style={{ marginTop: '16px' }}>
                <Link
                  href={`/saas#${product.id}`}
                  style={{
                    textDecoration: 'none',
                    color: '#004FEB',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  View details &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div>
          <Link
            href="/saas"
            style={{
              textDecoration: 'none',
              color: '#004FEB',
              fontWeight: 700,
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'gap 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.gap = '10px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = '6px';
            }}
          >
            Explore All SaaS Products &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
