'use client';

import React, { useState } from 'react';
import AnimatedKnowebLogo from '@/components/ui/AnimatedKnowebLogo';

export default function LogoAnimationShowcase() {
  const [bgTheme, setBgTheme] = useState<'navy' | 'white' | 'slate' | 'checker'>('navy');
  const [variant, setVariant] = useState<'webp' | 'gif' | 'css'>('webp');
  const [speed, setSpeed] = useState<number>(10);
  const [sizeScale, setSizeScale] = useState<'sm' | 'md' | 'lg' | 'full'>('lg');
  const [copied, setCopied] = useState<boolean>(false);

  const bgStyles = {
    navy: {
      background: '#0D203B',
      color: '#FFFFFF',
      border: '1px solid rgba(255, 255, 255, 0.12)',
    },
    white: {
      background: '#FFFFFF',
      color: '#0F172A',
      border: '1px solid #E2E8F0',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    },
    slate: {
      background: '#0F172A',
      color: '#FFFFFF',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    checker: {
      backgroundColor: '#E2E8F0',
      backgroundImage: `
        linear-gradient(45deg, #CBD5E1 25%, transparent 25%),
        linear-gradient(-45deg, #CBD5E1 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #CBD5E1 75%),
        linear-gradient(-45deg, transparent 75%, #CBD5E1 75%)
      `,
      backgroundSize: '24px 24px',
      backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0px',
      color: '#0F172A',
      border: '1px solid #94A3B8',
    },
  };

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0A1220',
        color: '#E2E8F0',
        paddingTop: '90px',
        paddingBottom: '80px',
      }}
    >
      <div className="container-max" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(0, 168, 255, 0.15)',
              border: '1px solid rgba(0, 168, 255, 0.3)',
              color: '#00C8FF',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '14px',
              letterSpacing: '0.05em',
            }}
          >
            OFFICIAL BRAND IDENTITY
          </div>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            KNOWEB Animated Logo
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#94A3B8',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Seamless, infinitely looping 3D animation. The typography &lsquo;KN&rsquo;, &lsquo;WEB&rsquo;, and the cyan swoosh arrow
            remain 100% stationary, while the inner globe rotates continuously from left to right on its vertical Y-axis.
          </p>
        </div>

        {/* Live Stage */}
        <div
          style={{
            borderRadius: '18px',
            padding: '60px 30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '340px',
            transition: 'all 0.3s ease',
            position: 'relative',
            marginBottom: '32px',
            ...bgStyles[bgTheme],
          }}
        >
          {/* Animated Logo Render */}
          <div style={{ transform: 'scale(1)', transition: 'all 0.3s ease' }}>
            <AnimatedKnowebLogo
              variant={variant}
              size={sizeScale}
              speed={speed}
              priority
            />
          </div>

          {/* Active Preset Tag */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '20px',
              fontSize: '0.78rem',
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'rgba(0,0,0,0.4)',
              color: '#94A3B8',
              fontFamily: 'monospace',
            }}
          >
            {variant.toUpperCase()} • {speed}s Period • {sizeScale.toUpperCase()} Size
          </div>
        </div>

        {/* Interactive Control Dashboard */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {/* Control 1: Background Theme */}
          <div
            style={{
              background: '#0D1B2E',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#94A3B8',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Background Preview
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {(
                [
                  ['navy', 'Dark Navy (#0D203B)'],
                  ['white', 'Pure White'],
                  ['slate', 'Slate Dark'],
                  ['checker', 'Alpha Checkers'],
                ] as const
              ).map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setBgTheme(k)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    fontWeight: bgTheme === k ? 600 : 500,
                    border:
                      bgTheme === k
                        ? '1px solid #00C8FF'
                        : '1px solid rgba(255,255,255,0.08)',
                    background: bgTheme === k ? 'rgba(0, 200, 255, 0.15)' : '#081321',
                    color: bgTheme === k ? '#00E5FF' : '#CBD5E1',
                    transition: 'all 0.18s ease',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Control 2: Format / Variant */}
          <div
            style={{
              background: '#0D1B2E',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#94A3B8',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Format Engine
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {(
                [
                  ['webp', 'WebP (32-bit)'],
                  ['gif', 'GIF (Universal)'],
                  ['css', 'CSS / SVG (60fps)'],
                ] as const
              ).map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setVariant(k)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    fontWeight: variant === k ? 600 : 500,
                    border:
                      variant === k
                        ? '1px solid #00C8FF'
                        : '1px solid rgba(255,255,255,0.08)',
                    background: variant === k ? 'rgba(0, 200, 255, 0.15)' : '#081321',
                    color: variant === k ? '#00E5FF' : '#CBD5E1',
                    transition: 'all 0.18s ease',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Control 3: Speed / Duration */}
          <div
            style={{
              background: '#0D1B2E',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#94A3B8',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Loop Speed (Period)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {[8, 10, 12].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    fontWeight: speed === s ? 600 : 500,
                    border:
                      speed === s
                        ? '1px solid #00C8FF'
                        : '1px solid rgba(255,255,255,0.08)',
                    background: speed === s ? 'rgba(0, 200, 255, 0.15)' : '#081321',
                    color: speed === s ? '#00E5FF' : '#CBD5E1',
                    transition: 'all 0.18s ease',
                  }}
                >
                  {s} Seconds {s === 10 ? '★' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Control 4: Display Size */}
          <div
            style={{
              background: '#0D1B2E',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#94A3B8',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Preview Size
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
              {(
                [
                  ['sm', 'Navbar'],
                  ['md', 'Standard'],
                  ['lg', 'Hero'],
                  ['full', 'Master'],
                ] as const
              ).map(([sz, label]) => (
                <button
                  key={sz}
                  onClick={() => setSizeScale(sz)}
                  style={{
                    padding: '8px 6px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    fontWeight: sizeScale === sz ? 600 : 500,
                    border:
                      sizeScale === sz
                        ? '1px solid #00C8FF'
                        : '1px solid rgba(255,255,255,0.08)',
                    background: sizeScale === sz ? 'rgba(0, 200, 255, 0.15)' : '#081321',
                    color: sizeScale === sz ? '#00E5FF' : '#CBD5E1',
                    transition: 'all 0.18s ease',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Download Center & Asset Files */}
        <div
          style={{
            background: '#0D1B2E',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '40px',
          }}
        >
          <h2
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '8px',
            }}
          >
            Generated Asset Packages & Direct Downloads
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.92rem', marginBottom: '24px' }}>
            Production-ready files configured with 0-pause seamless infinite looping, linear easing, and transparent alpha channels.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {/* Download 1: WebP Master */}
            <a
              href="/knoweb-logo-animated.webp"
              download="knoweb-logo-animated.webp"
              style={{
                textDecoration: 'none',
                background: 'rgba(0, 200, 255, 0.08)',
                border: '1px solid rgba(0, 200, 255, 0.3)',
                padding: '18px 20px',
                borderRadius: '12px',
                display: 'block',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ color: '#00E5FF', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
                ⬇ Animated WebP (Master)
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                1200 × 275 px • 32-bit Alpha • 4.3 MB
              </div>
            </a>

            {/* Download 2: WebP Optimized Navbar */}
            <a
              href="/knoweb-logo-animated-nav.webp"
              download="knoweb-logo-animated-nav.webp"
              style={{
                textDecoration: 'none',
                background: 'rgba(0, 200, 255, 0.15)',
                border: '1px solid rgba(0, 200, 255, 0.5)',
                padding: '18px 20px',
                borderRadius: '12px',
                display: 'block',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
                ⚡ WebP Web-Optimized (Navbar)
              </div>
              <div style={{ color: '#00E5FF', fontSize: '0.82rem' }}>
                400 × 92 px • 694 KB (Recommended)
              </div>
            </a>

            {/* Download 3: GIF Master */}
            <a
              href="/knoweb-logo-animated.gif"
              download="knoweb-logo-animated.gif"
              style={{
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '18px 20px',
                borderRadius: '12px',
                display: 'block',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ color: '#E2E8F0', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
                ⬇ Animated GIF (Master)
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                1200 × 275 px • GIF89a Looping • 3.2 MB
              </div>
            </a>

            {/* Download 4: GIF Optimized Navbar */}
            <a
              href="/knoweb-logo-animated-nav.gif"
              download="knoweb-logo-animated-nav.gif"
              style={{
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '18px 20px',
                borderRadius: '12px',
                display: 'block',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ color: '#E2E8F0', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
                ⬇ Animated GIF (Navbar)
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                400 × 92 px • Universal Email/Docs • 513 KB
              </div>
            </a>
          </div>
        </div>

        {/* Integration Code Snippets */}
        <div
          style={{
            background: '#0D1B2E',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
              How to Use in React / Next.js / HTML
            </h2>
            <button
              onClick={() =>
                copyCode(
                  `<AnimatedKnowebLogo variant="webp" size="md" priority />`
                )
              }
              style={{
                padding: '6px 14px',
                background: copied ? '#10B981' : '#00A8FF',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
            >
              {copied ? '✓ Copied!' : 'Copy React Code'}
            </button>
          </div>

          <pre
            style={{
              background: '#060B14',
              padding: '18px',
              borderRadius: '10px',
              color: '#38BDF8',
              fontFamily: 'monospace',
              fontSize: '0.86rem',
              overflowX: 'auto',
              lineHeight: 1.5,
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
{`// Option A: React / Next.js Component (Recommended)
import AnimatedKnowebLogo from '@/components/ui/AnimatedKnowebLogo';

export default function Header() {
  return (
    <AnimatedKnowebLogo
      variant="webp"      // 'webp' | 'gif' | 'css'
      size="md"          // 'sm' (140px) | 'md' (160px) | 'lg' (240px) | 'full'
      priority
    />
  );
}

// Option B: Standard HTML <img> tag (Zero dependencies)
<img
  src="/knoweb-logo-animated-nav.webp"
  alt="KNOWEB"
  width="160"
  height="37"
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
