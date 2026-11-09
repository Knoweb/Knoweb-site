'use client';

import Link from 'next/link';
import AnimatedKnowebLogo from '@/components/ui/AnimatedKnowebLogo';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'SaaS Products', href: '/saas' },
  { label: 'Practical ERP', href: '/erp' },
  { label: 'Industry Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs & Insights', href: '/blogs' },
  { label: 'QuickAssist (Tech Help)', href: '/quickassist', highlight: true },
  { label: 'About Knoweb', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Website Development & E-Commerce', href: '/services#web-dev' },
  { label: 'Website Takeover & Management', href: '/services#web-takeover' },
  { label: 'Custom Software Development', href: '/services#custom-dev' },
  { label: 'Existing Software Modernization', href: '/services#modernization' },
  { label: 'Regular Maintenance & Support', href: '/services#maintenance' },
  { label: 'System Integration & Automation', href: '/services#integration' },
  { label: 'Digital Marketing & Social Media', href: '/services#digital-marketing' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0D1E36',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#FFFFFF',
        paddingTop: '64px',
        paddingBottom: '32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-40%',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 79, 235, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-max" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main 4-column Grid matching reference layout */}
        <div
          className="footer-grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1.25fr 1.15fr 0.9fr',
            gap: '44px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* ── Col 1: Logo, Bio & Social Icons ── */}
          <div>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '18px',
              }}
            >
              <AnimatedKnowebLogo size="md" width={160} height={37} />
            </Link>

            <p
              style={{
                color: '#CBD5E1',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                maxWidth: '320px',
                marginBottom: '24px',
              }}
            >
              Practical software, configurable ERP, custom development and digital services.
              Solutions for new projects and existing systems.
            </p>

            {/* Social Media Circular Buttons with SVGs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Knoweb on Facebook"
                className="footer-social-btn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.22s ease',
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Knoweb on LinkedIn"
                className="footer-social-btn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.22s ease',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/94711102102"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Knoweb on WhatsApp"
                className="footer-social-btn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.22s ease',
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.98.58 3.86 1.67 5.48L2 22l4.81-1.65c1.55 1 3.37 1.56 5.23 1.56 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.82 14.28c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.14.12-3.67-.93-3.08-1.28-5.07-4.42-5.22-4.63-.16-.2-1.25-1.66-1.25-3.17 0-1.51.78-2.26 1.07-2.57.28-.3.62-.38.83-.38.21 0 .42 0 .6.01.2.01.46-.07.72.55.26.63.89 2.17.97 2.33.08.16.14.35.03.56-.11.21-.16.34-.32.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.84 1.38 1.8 2.24 1.24 1.1 2.28 1.45 2.61 1.61.32.16.51.14.7-.08.19-.22.83-.97 1.05-1.3.22-.33.44-.28.74-.17.3.11 1.91.9 2.24 1.07.33.16.55.25.63.38.08.13.08.76-.16 1.44z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Knoweb on Instagram"
                className="footer-social-btn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.22s ease',
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: CONTACT (Matching Reference Column 2) ── */}
          <div>
            <h4
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Contact
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Location item with Pin SVG */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    color: '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span
                  style={{
                    color: '#CBD5E1',
                    fontSize: '0.9rem',
                    lineHeight: 1.55,
                  }}
                >
                  No. 11/1/2, Udugama Road,
                  <br />
                  Makuluwa, Galle, Sri Lanka.
                </span>
              </div>

              {/* Phone item with Phone SVG */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span
                  style={{
                    color: '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a
                  href="tel:0711102102"
                  className="footer-link-hover"
                  style={{
                    color: '#CBD5E1',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.18s ease',
                  }}
                >
                  (+94) 711 102 102
                </a>
              </div>

              {/* Email item with Paper Plane SVG (Matching Screenshot) */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span
                  style={{
                    color: '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </span>
                <a
                  href="mailto:info@knowebsolutions.com"
                  className="footer-link-hover"
                  style={{
                    color: '#CBD5E1',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.18s ease',
                  }}
                >
                  info@knowebsolutions.com
                </a>
              </div>

              {/* QuickAssist urgent help pill */}
              <div style={{ marginTop: '8px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '7px 12px',
                    borderRadius: '6px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#38BDF8',
                      boxShadow: '0 0 8px #38BDF8',
                    }}
                  />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#38BDF8' }}>
                    Need urgent help?{' '}
                    <Link
                      href="/quickassist"
                      style={{ color: '#FFFFFF', textDecoration: 'underline' }}
                    >
                      QuickAssist
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Col 3: SERVICES (Matching Reference Column 3) ── */}
          <div>
            <h4
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="footer-link-hover"
                    style={{
                      color: '#CBD5E1',
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      transition: 'color 0.18s ease, transform 0.18s ease',
                      display: 'inline-block',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: NAVIGATION (Without Gallery, as requested) ── */}
          <div>
            <h4
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="footer-link-hover"
                    style={{
                      color: item.highlight ? '#38BDF8' : '#CBD5E1',
                      fontSize: '0.88rem',
                      fontWeight: item.highlight ? 700 : 400,
                      textDecoration: 'none',
                      transition: 'color 0.18s ease, transform 0.18s ease',
                      display: 'inline-block',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '20px' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  background: '#004FEB',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.84rem',
                  padding: '8px 18px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0, 79, 235, 0.35)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0040C8';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#004FEB';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contact Knoweb →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            color: '#94A3B8',
            fontSize: '0.84rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} Knoweb (Pvt.) Ltd. All rights reserved. Practical software &amp; digital solutions.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link
              href="/about"
              className="footer-bottom-link"
              style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.18s' }}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="footer-bottom-link"
              style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.18s' }}
            >
              Contact
            </Link>
            <Link
              href="/quickassist"
              style={{ color: '#38BDF8', textDecoration: 'none', fontWeight: 600 }}
            >
              QuickAssist
            </Link>
          </div>
        </div>
      </div>

      {/* Hover & Responsive CSS */}
      <style>{`
        .footer-social-btn:hover {
          background: #004FEB !important;
          border-color: #38BDF8 !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 79, 235, 0.45);
        }
        .footer-link-hover:hover {
          color: #38BDF8 !important;
          transform: translateX(2px);
        }
        .footer-bottom-link:hover {
          color: #FFFFFF !important;
        }

        @media (max-width: 992px) {
          .footer-grid-layout {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
