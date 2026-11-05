'use client';

import Link from 'next/link';
import AnimatedKnowebLogo from '@/components/ui/AnimatedKnowebLogo';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useSyncExternalStore } from 'react';

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

const themeListeners = new Set<() => void>();

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback);
  return () => {
    themeListeners.delete(callback);
  };
}

function getThemeSnapshot(): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function getThemeServerSnapshot(): 'light' | 'dark' {
  return 'dark';
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const nextTheme = isDark ? 'light' : 'dark';
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    try {
      localStorage.setItem('knoweb-theme', nextTheme);
    } catch {
      // ignore
    }
    themeListeners.forEach((listener) => listener());
  };

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
          {/* Logo — Official Knoweb brand logo */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <AnimatedKnowebLogo
              size="md"
              width={160}
              height={37}
              priority
            />
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

          {/* Header Controls (Theme Toggle & Mobile Menu) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: theme === 'dark' ? 'rgba(0, 229, 255, 0.12)' : 'rgba(255, 255, 255, 0.12)',
                border: theme === 'dark' ? '1px solid rgba(0, 229, 255, 0.38)' : '1px solid rgba(255, 255, 255, 0.22)',
                color: theme === 'dark' ? '#00E5FF' : '#FBBF24',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: theme === 'dark' ? '0 0 12px rgba(0, 229, 255, 0.22)' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {theme === 'dark' ? (
                /* Moon Icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                /* Sun Icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

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

            {/* Mobile Drawer Theme Switcher */}
            <div
              style={{
                marginTop: '16px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: '#CBD5E1', fontSize: '0.9rem', fontWeight: 500 }}>
                Theme: <strong style={{ color: '#FFFFFF' }}>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</strong>
              </span>
              <button
                onClick={toggleTheme}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '20px',
                  background: theme === 'dark' ? 'rgba(0, 229, 255, 0.14)' : 'rgba(255, 255, 255, 0.12)',
                  border: theme === 'dark' ? '1px solid rgba(0, 229, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.25)',
                  color: theme === 'dark' ? '#00E5FF' : '#FBBF24',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
              </button>
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
