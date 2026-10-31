'use client';

import Link from 'next/link';
import AnimatedKnowebLogo from '@/components/ui/AnimatedKnowebLogo';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'SaaS Products', href: '/saas' },
  { label: 'Practical ERP', href: '/erp' },
  { label: 'Industry Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
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
  const linkStyle: React.CSSProperties = {
    color: '#475569',
    fontSize: '0.88rem',
    textDecoration: 'none',
    transition: 'color 0.18s ease',
    display: 'inline-block',
  };

  return (
    <footer
      style={{
        background: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        paddingTop: '56px',
        paddingBottom: '32px',
      }}
    >
      <div className="container-max">
        {/* Main 4-column Grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1.3fr 1.1fr',
            gap: '40px',
            paddingBottom: '44px',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '16px',
              }}
            >
              <AnimatedKnowebLogo
                size="md"
                width={160}
                height={37}
              />
            </Link>

            <p
              style={{
                color: '#475569',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                maxWidth: '300px',
                marginBottom: '18px',
              }}
            >
              Practical software, configurable ERP, custom development and digital services.
              Solutions for new projects and existing systems.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'rgba(0, 79, 235, 0.08)',
                border: '1px solid rgba(0, 79, 235, 0.2)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#004FEB',
                }}
              />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#004FEB' }}>
                Need urgent help?{' '}
                <Link
                  href="/quickassist"
                  style={{ color: '#004FEB', textDecoration: 'underline' }}
                >
                  QuickAssist
                </Link>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#0A192F',
                marginBottom: '16px',
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
                    style={{
                      ...linkStyle,
                      color: item.highlight ? '#004FEB' : '#475569',
                      fontWeight: item.highlight ? 700 : 500,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#004FEB')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = item.highlight ? '#004FEB' : '#475569')
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Solutions */}
          <div>
            <h4
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#0A192F',
                marginBottom: '16px',
              }}
            >
              Services &amp; Delivery
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
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#004FEB')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#0A192F',
                marginBottom: '16px',
              }}
            >
              Start a Discussion
            </h4>
            <p
              style={{
                color: '#475569',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                marginBottom: '18px',
              }}
            >
              Discuss your project scope, request a software demonstration, or get rapid troubleshooting
              guidance.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link
                href="/contact"
                style={{
                  textDecoration: 'none',
                  textAlign: 'center',
                  background: '#004FEB',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#0040C8')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#004FEB')}
              >
                Contact Knoweb
              </Link>
              <Link
                href="/quickassist"
                style={{
                  textDecoration: 'none',
                  textAlign: 'center',
                  background: '#FFFFFF',
                  color: '#004FEB',
                  border: '1px solid rgba(0, 79, 235, 0.3)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  padding: '9px 18px',
                  borderRadius: '8px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 79, 235, 0.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
              >
                Get QuickAssist &gt;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            color: '#64748B',
            fontSize: '0.84rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} Knoweb (Pvt.) Ltd. All rights reserved. Practical software &amp; digital solutions.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link
              href="/about"
              style={{ color: '#64748B', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#004FEB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{ color: '#64748B', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#004FEB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              Contact
            </Link>
            <Link
              href="/quickassist"
              style={{ color: '#004FEB', textDecoration: 'none', fontWeight: 600 }}
            >
              QuickAssist
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
