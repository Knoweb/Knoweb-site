'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions',
    href: '/solutions',
    dropdown: [
      { label: 'Accounting & Financial', href: '/solutions#accounting', icon: '📊', desc: 'Invoicing, GL, bank reconciliation & reporting' },
      { label: 'HR & Workforce', href: '/solutions#hr', icon: '👥', desc: 'Payroll, attendance, EPF/ETF & compliance' },
      { label: 'Retail & Hospitality', href: '/solutions#retail', icon: '🏪', desc: 'POS, inventory & multi-outlet management' },
      { label: 'Monitoring & Dashboards', href: '/solutions#monitoring', icon: '📡', desc: 'Real-time KPIs, alerts & operational visibility' },
      { label: 'Integrated Business Systems', href: '/solutions#custom', icon: '🔗', desc: 'Unified platforms across finance, HR & ops' },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'Custom & Enterprise', href: '/custom-enterprise' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Customer Success', href: '/customer-success' },
  { label: 'About Knoweb', href: '/about' },
  { label: 'Resources', href: '/resources' },
];

const pillItems = ['SaaS Platforms', 'Custom Software', 'AI Product Development'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openDropdown = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setDropdownOpen(true); };
  const closeDropdown = () => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 120); };

  const navHeight = scrolled ? '60px' : '68px';

  /* ── shared link hover styles ── */
  const linkBase: React.CSSProperties = {
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    fontSize: '0.82rem',
    fontWeight: 500,
    padding: '6px 10px',
    borderRadius: '0',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.15s, background 0.15s',
    whiteSpace: 'nowrap',
  };

  return (
    <>
      {/* ── MAIN HEADER ── */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'rgba(11,15,20,0.97)' : '#0B0F14',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'all 0.25s ease',
        }}
      >
        {/* ── Top nav row ── */}
        <div
          className="container-max"
          style={{ display: 'flex', alignItems: 'center', height: navHeight, gap: '0', transition: 'height 0.25s ease' }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0, marginRight: '32px' }}
          >
            <Image src="/knoweblogo.png" alt="Knoweb logo" width={180} height={48} style={{ objectFit: 'contain' }} priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop" style={{ alignItems: 'center', gap: '2px', flex: 1 }}>
            {navLinks.map((link) =>
              link.dropdown ? (
                /* Solutions with dropdown */
                <div
                  key={link.label}
                  ref={dropdownRef}
                  style={{ position: 'relative' }}
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    style={{
                      background: dropdownOpen ? 'rgba(0,79,235,0.08)' : 'none',
                      border: 'none', cursor: 'pointer',
                      color: dropdownOpen ? '#004FEB' : 'rgba(255,255,255,0.75)',
                      fontSize: '0.82rem', fontWeight: 500,
                      padding: '6px 10px', borderRadius: '0',
                      display: 'flex', alignItems: 'center', gap: '4px',
                      transition: 'color 0.15s, background 0.15s',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Mega-dropdown */}
                  {dropdownOpen && (
                    <div
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                      style={{
                        position: 'absolute', top: 'calc(100% + 8px)', left: '-12px',
                        background: '#0F172A',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '14px',
                        padding: '8px',
                        width: '320px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
                        zIndex: 200,
                        animation: 'fadeUp 0.15s ease',
                      }}
                    >
                      <div style={{ padding: '8px 12px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '6px' }}>
                        <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Solution Areas
                        </div>
                      </div>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          style={{
                            display: 'flex', alignItems: 'flex-start', gap: '12px',
                            padding: '10px 12px', borderRadius: '0',
                            textDecoration: 'none', transition: 'background 0.15s',
                            color: 'rgba(255,255,255,0.85)',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,79,235,0.06)')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <span style={{ fontSize: '1.1rem', lineHeight: 1.4 }}>{item.icon}</span>
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '2px' }}>
                              {item.label}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.4 }}>
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div style={{ padding: '10px 12px 4px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '6px' }}>
                        <Link
                          href="/solutions"
                          onClick={() => setDropdownOpen(false)}
                          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600, color: '#004FEB', textDecoration: 'none' }}
                        >
                          View all solutions
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6H10M6 2L10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  style={linkBase}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#004FEB';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,79,235,0.07)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.75)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="btn-group-desktop" style={{ alignItems: 'center', gap: '10px', marginLeft: '16px', flexShrink: 0 }}>
            <Link
              href="/contact"
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 500, padding: '6px 14px', borderRadius: '0', transition: 'color 0.15s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              style={{
                background: '#004FEB',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.82rem', fontWeight: 700,
                padding: '8px 20px', borderRadius: '0',
                display: 'flex', alignItems: 'center', gap: '6px',
                transition: 'all 0.2s ease',
                boxShadow: '0 0 14px rgba(0,79,235,0.3)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#0040C8';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(0,79,235,0.5)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#004FEB';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 14px rgba(0,79,235,0.3)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Talk to Sales
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5H11M7 2.5L11 6.5L7 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '0', color: 'rgba(255,255,255,0.8)' }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <path d="M4 4L18 18M4 18L18 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* ── Pill bar ── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.02)',
          padding: '6px 0',
          display: mobileOpen ? 'none' : 'flex',
          justifyContent: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            {pillItems.map((item, i) => (
              <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#475569', letterSpacing: '0.02em', padding: '2px 12px' }}>
                  {item}
                </span>
                {i < pillItems.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.8rem' }}>•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      {mobileOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── MOBILE SLIDE-OVER PANEL ── */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 1001,
          width: '300px', maxWidth: '85vw',
          background: '#0F172A',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.6)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex', flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        {/* Panel header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image src="/knoweblogo.png" alt="Knoweb logo" width={160} height={42} style={{ objectFit: 'contain' }} priority />
          </Link>
          <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#475569', borderRadius: '0' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M4 16L16 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: '12px', flex: 1 }}>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '11px 10px', borderRadius: '0',
                    color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: 600,
                    fontFamily: 'Inter, sans-serif', textAlign: 'left',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,79,235,0.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: 'transform 0.2s', transform: mobileDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileDropdownOpen && (
                  <div style={{ paddingLeft: '12px', paddingBottom: '4px' }}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '10px',
                          padding: '9px 10px', borderRadius: '0',
                          textDecoration: 'none', color: '#94A3B8',
                          fontSize: '0.825rem', fontWeight: 500,
                          transition: 'background 0.15s, color 0.15s',
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,79,235,0.06)'; (e.currentTarget as HTMLAnchorElement).style.color = '#004FEB'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8'; }}
                      >
                        <span style={{ fontSize: '0.95rem' }}>{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '11px 10px', borderRadius: '0',
                  color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                  fontSize: '0.9rem', fontWeight: 500,
                  transition: 'background 0.15s, color 0.15s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,79,235,0.06)'; (e.currentTarget as HTMLAnchorElement).style.color = '#004FEB'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.75)'; }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile CTAs */}
        <div style={{ padding: '16px 20px 28px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#004FEB',
              color: '#ffffff', textDecoration: 'none',
              fontWeight: 700, fontSize: '0.875rem',
              padding: '12px', borderRadius: '0',
              boxShadow: '0 0 18px rgba(0,79,235,0.35)',
            }}
          >
            Talk to Sales
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              fontWeight: 600, fontSize: '0.875rem',
              padding: '11px', borderRadius: '0',
              transition: 'border-color 0.15s',
            }}
          >
            Request Demo
          </Link>
        </div>
      </div>
    </>
  );
}
