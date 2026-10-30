'use client';

import Link from 'next/link';

export default function PracticalERPSection() {
  return (
    <section
      style={{
        paddingTop: '36px',
        paddingBottom: '36px',
        background: '#FFFFFF',
      }}
    >
      <div className="container-max">
        {/* Outlined Container Box as in Wireframe Part 1 */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '14px',
            border: '1.5px solid #CBD5E1',
            padding: '40px 36px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#004FEB';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 79, 235, 0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#CBD5E1';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#0A192F',
              letterSpacing: '0.01em',
              marginBottom: '10px',
            }}
          >
            PRACTICAL ERP
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: '#334155',
              marginBottom: '14px',
            }}
          >
            One configurable platform for connected business operations.
          </p>

          <p
            style={{
              fontSize: '0.96rem',
              fontWeight: 500,
              color: '#64748B',
              marginBottom: '26px',
              letterSpacing: '0.02em',
            }}
          >
            Sales &nbsp;/&nbsp; Purchasing &nbsp;/&nbsp; Inventory &nbsp;/&nbsp; Finance &nbsp;/&nbsp; Administration
          </p>

          <div>
            <Link
              href="/erp"
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
              Explore Practical ERP &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
