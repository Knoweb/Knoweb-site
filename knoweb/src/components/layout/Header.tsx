'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'SaaS', href: '/saas' },
  { label: 'ERP', href: '/erp' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'QuickAssist', href: '/quickassist' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Dark Navy Navbar matching Wireframe exactly ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: '#0D203B',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div
          className="container-max"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '62px',
          }}
        >
          {/* Logo — "KNOWEB" in bold white as in the wireframe screenshot */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.45rem',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              KNOWEB
            </span>
          </Link>

          {/* Desktop Nav Links — Home, SaaS, ERP, Solutions, Services, QuickAssist, About, Contact */}
          <nav
            className="nav-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#FFFFFF' : '#CBD5E1',
                    transition: 'color 0.18s ease',
                    position: 'relative',
                    padding: '6px 0',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#CBD5E1';
                    }
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: '#38BDF8',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#FFFFFF',
              borderRadius: '6px',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '62px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 999,
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              background: '#0D203B',
              width: '100%',
              maxHeight: 'calc(100vh - 62px)',
              overflowY: 'auto',
              padding: '20px 24px 32px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: isActive ? 600 : 400,
                      padding: '12px 14px',
                      borderRadius: '8px',
                      color: isActive ? '#38BDF8' : '#F1F5F9',
                      background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem' }}>→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Header responsive styling */}
      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
