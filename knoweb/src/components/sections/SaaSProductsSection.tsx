'use client';

import Link from 'next/link';

interface SaaSProduct {
  id: string;
  title: string;
  description: string;
  url: string;
  isExternal: boolean;
  logoLight?: string;
  logoDark?: string;
  icon?: 'pharmacy' | 'invoicing';
}

const saasProducts: SaaSProduct[] = [
  {
    id: 'ginum',
    title: 'Ginum',
    description: 'Accounting & finance',
    url: 'http://ginumapps.com/',
    isExternal: true,
    logoLight: '/logos/ginum.png',
    logoDark: '/logos/ginum-dark.png',
  },
  {
    id: 'pirisahr',
    title: 'PirisaHR',
    description: 'Human resources',
    url: 'https://pirisahr.com/',
    isExternal: true,
    logoLight: '/logos/pirisahr.png',
    logoDark: '/logos/pirisahr-dark.png',
  },
  {
    id: 'anawuma',
    title: 'Anawuma',
    description: 'Order management',
    url: 'https://anawuma.com/',
    isExternal: true,
    logoLight: '/logos/anawuma.png',
    logoDark: '/logos/anawuma-dark.png',
  },
  {
    id: 'thanayama',
    title: 'Thanayama',
    description: 'Hospitality operations',
    url: 'https://thanayama.com/',
    isExternal: true,
    logoLight: '/logos/thanayama.png',
    logoDark: '/logos/thanayama-dark.png',
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    description: 'Pharmacy & stock',
    url: '/saas#pharmacy',
    isExternal: false,
    icon: 'pharmacy',
  },
  {
    id: 'invoicing',
    title: 'Invoicing',
    description: 'Billing administration',
    url: '/saas#invoicing',
    isExternal: false,
    icon: 'invoicing',
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
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.45rem',
              fontWeight: 800,
              color: '#0A192F',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '6px',
            }}
          >
            BUSINESS SOFTWARE &amp; SaaS PRODUCTS
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
          {saasProducts.map((product) => {
            const cardContent = (
              <div
                className="saas-product-card"
                style={{
                  background: '#F0F5FA',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '172px',
                  height: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#EBF2F8';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 79, 235, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F0F5FA';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  {/* Logo Container */}
                  <div
                    style={{
                      height: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '14px',
                    }}
                  >
                    {product.logoLight ? (
                      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        {/* Light Mode Logo */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.logoLight}
                          alt={`${product.title} logo`}
                          className="saas-logo-light"
                          style={{
                            maxHeight: '34px',
                            maxWidth: '145px',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                          }}
                        />
                        {/* Dark Mode Logo */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.logoDark}
                          alt={`${product.title} logo`}
                          className="saas-logo-dark"
                          style={{
                            maxHeight: '34px',
                            maxWidth: '145px',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                    ) : product.icon === 'pharmacy' ? (
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '8px',
                          background: 'rgba(16, 185, 129, 0.12)',
                          color: '#059669',
                          border: '1px solid rgba(16, 185, 129, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                          <path d="m8.5 8.5 7 7" />
                        </svg>
                      </div>
                    ) : (
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '8px',
                          background: 'rgba(0, 87, 255, 0.12)',
                          color: '#0057FF',
                          border: '1px solid rgba(0, 87, 255, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="16" height="20" x="4" y="2" rx="2" />
                          <line x1="8" x2="16" y1="6" y2="6" />
                          <line x1="8" x2="16" y1="10" y2="10" />
                          <line x1="8" x2="12" y1="14" y2="14" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
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

                <div style={{ marginTop: '18px' }}>
                  <span
                    style={{
                      color: '#004FEB',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    View details &gt;
                  </span>
                </div>
              </div>
            );

            if (product.isExternal) {
              return (
                <a
                  key={product.id}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  aria-label={`Open ${product.title} website in new tab`}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={product.id}
                href={product.url}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                aria-label={`View ${product.title} details`}
              >
                {cardContent}
              </Link>
            );
          })}
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
