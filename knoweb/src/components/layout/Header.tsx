'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'SaaS', href: '/saas' },
  { label: 'ERP', href: '/erp' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'QuickAssist', href: '/quickassist', highlight: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setMobileOpen(false);
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

  const navHeight = scrolled ? '64px' : '72px';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.96)' : '#FFFFFF',
          borderBottom: `1px solid ${scrolled ? '#E5E7EB' : '#EEF2F6'}`,
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
          backdropFilter: 'blur(12px)',
          transition: 'all 0.2s ease',
        }}
      >
        <div
          className="container-max"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: navHeight,
            transition: 'height 0.2s ease',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <Image
              src="/knoweblogo.png"
              alt="Knoweb Logo"
              width={150}
              height={38}
              style={{ objectFit: 'contain', width: 'auto', height: '36px' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="nav-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isQA = link.highlight;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.86rem',
                    fontWeight: isQA ? 700 : 500,
                    padding: isQA ? '6px 14px' : '7px 11px',
                    borderRadius: isQA ? '8px' : '6px',
                    transition: 'all 0.18s ease',
                    color: isQA
                      ? '#004FEB'
                      : isActive
                      ? '#004FEB'
                      : '#374151',
                    background: isQA
                      ? 'rgba(0, 79, 235, 0.08)'
                      : isActive
                      ? '#F3F4F6'
                      : 'transparent',
                    border: isQA ? '1px solid rgba(0, 79, 235, 0.25)' : '1px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive && !isQA) {
                      e.currentTarget.style.color = '#004FEB';
                      e.currentTarget.style.background = '#F9FAFB';
                    } else if (isQA) {
                      e.currentTarget.style.background = 'rgba(0, 79, 235, 0.14)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive && !isQA) {
                      e.currentTarget.style.color = '#374151';
                      e.currentTarget.style.background = 'transparent';
                    } else if (isQA) {
                      e.currentTarget.style.background = 'rgba(0, 79, 235, 0.08)';
                    }
                  }}
                >
                  {isQA && (
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#004FEB',
                        display: 'inline-block',
                      }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div
            className="btn-group-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
            }}
          >
            <Link
              href="/quickassist"
              style={{
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#004FEB',
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'rgba(0, 79, 235, 0.06)',
                border: '1px solid rgba(0, 79, 235, 0.18)',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 79, 235, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 79, 235, 0.06)';
              }}
            >
              Need Tech Help?
            </Link>

            <Link
              href="/contact"
              style={{
                textDecoration: 'none',
                fontSize: '0.84rem',
                fontWeight: 600,
                color: '#FFFFFF',
                background: '#004FEB',
                padding: '8px 18px',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 8px rgba(0, 79, 235, 0.2)',
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
              Contact Us
            </Link>
          </div>

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
              color: '#1F2937',
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
            top: navHeight,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            zIndex: 999,
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              width: '100%',
              maxHeight: 'calc(100vh - 64px)',
              overflowY: 'auto',
              padding: '24px 20px 36px',
              borderBottom: '1px solid #E5E7EB',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isQA = link.highlight;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: isQA ? 700 : 500,
                      padding: '12px 14px',
                      borderRadius: '8px',
                      color: isQA ? '#004FEB' : isActive ? '#004FEB' : '#1F2937',
                      background: isQA
                        ? 'rgba(0, 79, 235, 0.08)'
                        : isActive
                        ? '#F3F4F6'
                        : 'transparent',
                      border: isQA ? '1px solid rgba(0, 79, 235, 0.2)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{link.label}</span>
                    {isQA ? (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '3px 8px',
                          borderRadius: '12px',
                          background: '#004FEB',
                          color: '#fff',
                          fontWeight: 600,
                        }}
                      >
                        Urgent Help
                      </span>
                    ) : (
                      <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>→</span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div
              style={{
                marginTop: '20px',
                paddingTop: '20px',
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Link
                href="/quickassist"
                onClick={() => setMobileOpen(false)}
                style={{
                  textDecoration: 'none',
                  textAlign: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#004FEB',
                  background: 'rgba(0, 79, 235, 0.08)',
                  border: '1px solid rgba(0, 79, 235, 0.2)',
                }}
              >
                Get QuickAssist
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  textDecoration: 'none',
                  textAlign: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#FFFFFF',
                  background: '#004FEB',
                }}
              >
                Contact Knoweb
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Header responsive style */}
      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .btn-group-desktop { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 1025px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
