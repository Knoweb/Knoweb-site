'use client';

import Link from 'next/link';
import BottomCTASection from '@/components/sections/BottomCTASection';
import ErpPillarsCoverflow from '@/components/ui/ErpPillarsCoverflow';

export default function ERPPage() {
  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* ── Edge-to-edge Hero Section matching Home Page Design & Typography ── */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 68px)',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#050811',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        {/* Right-Side ERP Hero Image Visual */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '64%',
            backgroundImage: `url('/erp-hero.png')`,
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.85,
            zIndex: 0,
          }}
        />

        {/* Ambient Pulsating Glow 1 (Violet / Purple) */}
        <div
          style={{
            position: 'absolute',
            top: '18%',
            right: '8%',
            width: '680px',
            height: '680px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(126, 34, 206, 0.09) 38%, transparent 72%)',
            pointerEvents: 'none',
            filter: 'blur(50px)',
            animation: 'heroAuraPulse 7s ease-in-out infinite',
            zIndex: 1,
          }}
        />

        {/* Ambient Pulsating Glow 2 (Electric Cyan / Royal Blue) */}
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            right: '24%',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0, 229, 255, 0.14) 0%, rgba(59, 130, 246, 0.08) 42%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(45px)',
            animation: 'heroAuraPulseSecondary 9s ease-in-out infinite alternate',
            zIndex: 1,
          }}
        />

        {/* Left-to-Right Dark Gradient Vignette for Guaranteed WCAG Contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, #050811 0%, #050811 38%, rgba(5, 8, 17, 0.88) 56%, rgba(5, 8, 17, 0.28) 82%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Mobile Top-to-Bottom Vignette Overlay */}
        <div
          className="block md:hidden"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, #050811 0%, #050811 40%, rgba(5, 8, 17, 0.70) 70%, rgba(5, 8, 17, 0.15) 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Edge-to-edge Content Container with Generous Left Alignment matching Home */}
        <div
          className="container-max"
          style={{
            position: 'relative',
            zIndex: 3,
            paddingTop: '64px',
            paddingBottom: '72px',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: '780px' }}>
            {/* Top Breadcrumb */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                marginBottom: '24px',
              }}
            >
              <Link
                href="/"
                style={{
                  color: '#00E5FF',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
              >
                Home
              </Link>
              <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>/</span>
              <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Practical ERP</span>
            </div>

            {/* Main Headline (H1): Clean 2-line flow without awkward floating dash line */}
            <h1
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: 'clamp(2.4rem, 4.6vw, 4.1rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                marginBottom: '24px',
              }}
            >
              Practical ERP
              <span
                style={{
                  display: 'block',
                  color: '#FFFFFF',
                }}
              >
                Bring Your Operations Together
              </span>
            </h1>

            {/* Description Paragraph: Exact styling as Home Hero (400 weight, #94A3B8, max-width ~620px) */}
            <p
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                fontWeight: 400,
                lineHeight: 1.65,
                color: '#94A3B8',
                maxWidth: '620px',
                margin: 0,
              }}
            >
              One configurable ERP platform connecting important business activities, including sales,
              purchasing, inventory, finance and administration. Adaptable to different industries and operational requirements without excessive customization costs or lengthy deployment cycles.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5 Core Connected Pillars (Interactive 3D Curved Cylindrical Carousel) ── */}
      <ErpPillarsCoverflow />

      <section style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div className="container-max">

          {/* Differentiating Banner */}
          <div
            style={{
              background: '#F0F5FA',
              borderRadius: '16px',
              border: '1px solid #DCE6F1',
              padding: '36px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#0A192F',
                  marginBottom: '8px',
                }}
              >
                Stuck in a Failed or Stalled ERP Implementation?
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Many businesses invest heavily in rigid ERPs that staff cannot adopt or that current consultants cannot support. Our QuickAssist service provides independent assessment to evaluate whether your current system can be rescued or simplified.
              </p>
            </div>

            <Link
              href="/quickassist"
              style={{
                textDecoration: 'none',
                background: '#004FEB',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.92rem',
                padding: '12px 24px',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              Get ERP QuickAssist &gt;
            </Link>
          </div>
        </div>
      </section>

      <BottomCTASection />
    </div>
  );
}
