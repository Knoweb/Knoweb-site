'use client';

import Link from 'next/link';

export default function HeroSection() {
  const headlineWords = ['Practical', 'Software', '&', 'Digital', 'Solutions'];
  let letterIndex = 0;

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '86px',
        backgroundColor: '#0D203B',
        backgroundImage: `linear-gradient(135deg, rgba(13, 32, 59, 0.82) 0%, rgba(10, 25, 47, 0.70) 50%, rgba(13, 32, 59, 0.85) 100%), url('/knowebbc.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 48%',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Scoped Keyframes & Interactive Hover Rules */}
      <style>{`
        @keyframes heroLetterReveal {
          0% {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes heroFadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(22px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Glass Card Container */
        .hero-glass-card {
          transition: all 0.35s ease;
        }
        .hero-glass-card:hover {
          border-color: rgba(0, 229, 255, 0.32) !important;
          box-shadow: 0 28px 75px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 212, 255, 0.14) !important;
        }

        /* Welcome Badge Hover */
        .hero-badge-tag {
          transition: all 0.3s ease;
        }
        .hero-badge-tag:hover,
        .hero-glass-card:hover .hero-badge-tag {
          border-color: rgba(0, 229, 255, 0.65) !important;
          box-shadow: 0 0 18px rgba(0, 229, 255, 0.45), inset 0 0 10px rgba(0, 229, 255, 0.22) !important;
          color: #FFFFFF !important;
        }

        /* Main Headline Hover (Glowing & Subtle Scale) */
        .hero-headline-container {
          display: inline-block;
          transform-origin: left center;
          transition: transform 0.3s ease, text-shadow 0.3s ease;
        }
        .hero-headline-container:hover,
        .hero-glass-card:hover .hero-headline-container {
          transform: scale(1.02);
          text-shadow: 0 0 18px rgba(255, 255, 255, 0.65), 0 0 38px rgba(0, 229, 255, 0.4) !important;
        }

        /* Subtitle Hover */
        .hero-subtitle-text {
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .hero-subtitle-text:hover,
        .hero-glass-card:hover .hero-subtitle-text {
          color: #F1F5F9 !important;
          text-shadow: 0 0 16px rgba(0, 229, 255, 0.4) !important;
        }
      `}</style>

      {/* Ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '4%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.18) 0%, rgba(0, 102, 255, 0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '8%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, transparent 68%)',
          pointerEvents: 'none',
          filter: 'blur(35px)',
        }}
      />

      <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
        {/* Modern Glassmorphic Hero Card */}
        <div
          className="hero-glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(13, 32, 59, 0.70) 0%, rgba(10, 25, 47, 0.58) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            padding: '58px 48px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
          }}
        >
          {/* Inner ambient card cyan glow */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              right: '-40px',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.18) 0%, rgba(0, 102, 255, 0.05) 55%, transparent 75%)',
              pointerEvents: 'none',
              filter: 'blur(25px)',
            }}
          />

          <div
            style={{
              maxWidth: '860px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Welcome Tag */}
            <div
              className="hero-badge-tag"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 200, 255, 0.12)',
                border: '1px solid rgba(0, 200, 255, 0.3)',
                color: '#00E5FF',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                padding: '5px 14px',
                borderRadius: '999px',
                marginBottom: '20px',
                animation: 'heroFadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.04s both',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#00E5FF',
                  boxShadow: '0 0 8px #00E5FF',
                }}
              />
              Welcome to Knoweb
            </div>

            {/* Headline with Staggered Letter-by-Letter Reveal */}
            <h1
              className="hero-headline-container"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(2.3rem, 4.4vw, 3.6rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '18px',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 16px rgba(0, 0, 0, 0.4)',
              }}
            >
              {headlineWords.map((word, wIdx) => {
                const chars = word.split('');
                return (
                  <span
                    key={wIdx}
                    style={{
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {chars.map((char) => {
                      const delay = (0.08 + letterIndex * 0.034).toFixed(3);
                      letterIndex++;
                      return (
                        <span
                          key={letterIndex}
                          style={{
                            display: 'inline-block',
                            animation: `heroLetterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                    {wIdx < headlineWords.length - 1 && (
                      <span style={{ display: 'inline-block', width: '0.28em' }}>&nbsp;</span>
                    )}
                  </span>
                );
              })}
            </h1>

            {/* Subheading / Description (Gently fades in right after headline finishes) */}
            <p
              className="hero-subtitle-text"
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                lineHeight: 1.65,
                color: '#CBD5E1',
                marginBottom: '36px',
                maxWidth: '760px',
                animation: 'heroFadeSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 1.38s both',
              }}
            >
              Business software, ERP, custom development and digital services.
              <br className="hidden sm:inline" /> Solutions for new projects and existing systems.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                animation: 'heroFadeSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 1.58s both',
              }}
            >
              <Link
                href="/solutions"
                style={{
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #0066FF 0%, #004FEB 100%)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.96rem',
                  padding: '13px 28px',
                  borderRadius: '10px',
                  transition: 'all 0.28s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 20px rgba(0, 102, 255, 0.45)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 102, 255, 0.7), 0 0 20px rgba(0, 229, 255, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 102, 255, 0.45)';
                }}
              >
                Explore Solutions
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                style={{
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.07)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.96rem',
                  padding: '12px 26px',
                  borderRadius: '10px',
                  border: '1.5px solid rgba(255, 255, 255, 0.24)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.28s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.14)';
                  e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.6)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contact Knoweb
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
