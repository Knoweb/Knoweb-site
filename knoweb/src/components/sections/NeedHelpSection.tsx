'use client';

import Link from 'next/link';

export default function NeedHelpSection() {
  return (
    <section
      className="need-help-section"
      style={{
        paddingTop: '48px',
        paddingBottom: '52px',
        background: '#FFFFFF',
        transition: 'background 0.3s ease',
      }}
    >
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '28px' }}>
          <h2
            className="need-help-heading"
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
            NEED HELP WITH YOUR TECHNOLOGY?
          </h2>
          <p
            className="need-help-subheading"
            style={{
              fontSize: '1rem',
              color: '#475569',
              margin: 0,
            }}
          >
            Two clear starting points
          </p>
        </div>

        {/* Two Split Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* ── Card 1: QuickAssist (Cyber Dark Glowing Tech Theme) ── */}
          <div
            className="help-card-quickassist"
            style={{
              background:
                'linear-gradient(145deg, #07152B 0%, #061938 42%, #05142E 72%, #0B2855 100%)',
              borderRadius: '20px',
              border: '1.5px solid rgba(0, 150, 255, 0.45)',
              boxShadow:
                '0 10px 35px rgba(0, 30, 80, 0.35), 0 0 20px rgba(0, 150, 255, 0.12)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition:
                'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
              minHeight: '380px',
            }}
          >
            {/* Ambient Background Glow Behind Robot */}
            <div
              style={{
                position: 'absolute',
                top: '15%',
                right: '5%',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(0, 132, 255, 0.22) 0%, rgba(0, 229, 255, 0.12) 50%, transparent 75%)',
                filter: 'blur(35px)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* Left Column: Content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                zIndex: 2,
                flex: '1 1 55%',
                maxWidth: '380px',
              }}
            >
              <div>
                {/* Immediate Guidance Pill */}
                <div
                  className="qa-badge"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(0, 229, 255, 0.12)',
                    border: '1px solid rgba(0, 229, 255, 0.4)',
                    color: '#00E5FF',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    marginBottom: '16px',
                    boxShadow: '0 0 14px rgba(0, 229, 255, 0.2)',
                  }}
                >
                  <span
                    className="qa-badge-dot"
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#00E5FF',
                      boxShadow: '0 0 8px #00E5FF',
                    }}
                  />
                  Immediate Guidance
                </div>

                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#0084FF',
                    marginBottom: '8px',
                    textShadow: '0 0 24px rgba(0, 132, 255, 0.65)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  QuickAssist
                </h3>

                <h4
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Not sure what to do?
                </h4>

                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: '#CBD5E1',
                    marginBottom: '32px',
                  }}
                >
                  Errors, poor support or an unavailable developer. Understand the problem and next
                  steps.
                </p>
              </div>

              <div>
                <Link
                  href="/quickassist"
                  className="qa-cta-btn"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#0066FF',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.96rem',
                    padding: '12px 26px',
                    borderRadius: '10px',
                    border: '1.5px solid #00D5FF',
                    boxShadow:
                      '0 4px 20px rgba(0, 102, 255, 0.5), 0 0 15px rgba(0, 213, 255, 0.4)',
                    transition:
                      'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
                  }}
                >
                  Get QuickAssist &gt;
                </Link>
              </div>
            </div>

            {/* Right Column: Floating 3D AI Robot Illustration */}
            <div
              className="qa-robot-container"
              style={{
                position: 'relative',
                zIndex: 1,
                flex: '0 0 45%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="qa-robot-glow-ring" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/quickassist-robot.png"
                alt="QuickAssist AI Robot Tech Assistant"
                className="qa-robot-img"
                style={{
                  width: '100%',
                  maxWidth: '240px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 12px 28px rgba(0, 132, 255, 0.45))',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              />
            </div>
          </div>

          {/* ── Card 2: Knoweb Services (High-Tech Modern Hybrid Theme) ── */}
          <div
            className="help-card-services"
            style={{
              background:
                'linear-gradient(180deg, #F8FAFC 0%, #EDF2F7 35%, #182C4C 70%, #0A192F 100%)',
              borderRadius: '20px',
              border: '1.5px solid rgba(148, 163, 184, 0.45)',
              boxShadow: '0 10px 35px rgba(0, 0, 0, 0.08)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition:
                'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
              minHeight: '380px',
            }}
          >
            {/* Ambient Background Glow Behind Tech Station */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                right: '5%',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(0, 102, 255, 0.22) 0%, rgba(0, 213, 255, 0.12) 50%, transparent 75%)',
                filter: 'blur(35px)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* Left Column: Content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                zIndex: 2,
                flex: '1 1 55%',
                maxWidth: '380px',
              }}
            >
              <div>
                {/* Defined Delivery Pill */}
                <div
                  className="services-badge"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(226, 232, 240, 0.85)',
                    border: '1px solid rgba(148, 163, 184, 0.45)',
                    color: '#334155',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    marginBottom: '16px',
                  }}
                >
                  Defined Delivery
                </div>

                <h3
                  className="services-card-title"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#0A192F',
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Knoweb Services
                </h3>

                <h4
                  className="services-card-subtitle"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Know what you need?
                </h4>

                <p
                  className="services-card-desc"
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: '#475569',
                    marginBottom: '32px',
                  }}
                >
                  Development, revamps, takeovers and maintenance. Discuss scope and delivery with
                  Knoweb.
                </p>
              </div>

              <div>
                <Link
                  href="/services"
                  className="services-cta-btn"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#0066FF',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.96rem',
                    padding: '12px 26px',
                    borderRadius: '10px',
                    border: '1.5px solid #00D5FF',
                    boxShadow:
                      '0 4px 20px rgba(0, 102, 255, 0.45), 0 0 15px rgba(0, 213, 255, 0.35)',
                    transition:
                      'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
                  }}
                >
                  Explore Services &gt;
                </Link>
              </div>
            </div>

            {/* Right Column: Floating 3D Tech Station Illustration */}
            <div
              className="services-tech-container"
              style={{
                position: 'relative',
                zIndex: 1,
                flex: '0 0 45%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="services-tech-glow-ring" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/knoweb-services-tech.png"
                alt="Knoweb Services 3D Development Workstation"
                className="services-tech-img"
                style={{
                  width: '100%',
                  maxWidth: '260px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 12px 28px rgba(0, 102, 255, 0.35))',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              />
            </div>
          </div>
        </div>

        {/* Helpful clarifier footer note */}
        <p
          className="need-help-clarifier"
          style={{
            marginTop: '20px',
            fontSize: '0.86rem',
            color: '#64748B',
            lineHeight: 1.5,
          }}
        >
          Not sure which option to choose? Start with QuickAssist. Any technical assessment or follow-up
          work is agreed separately.
        </p>
      </div>

      {/* ── Professional Animations & Styles matching User Request ── */}
      <style>{`
        /* Levitation Floating Animations */
        .qa-robot-img {
          animation: qa-robot-float 4.2s ease-in-out infinite;
        }

        .services-tech-img {
          animation: services-tech-float 4.8s ease-in-out infinite;
        }

        @keyframes qa-robot-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(-1.5deg);
          }
        }

        @keyframes services-tech-float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }

        /* Pulsing Glow Rings */
        .qa-robot-glow-ring {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.25) 0%, transparent 70%);
          animation: qa-aura-pulse 3.5s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .services-tech-glow-ring {
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 102, 255, 0.22) 0%, transparent 70%);
          animation: services-tech-aura 3.8s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes qa-aura-pulse {
          0% {
            transform: scale(0.9);
            opacity: 0.45;
          }
          100% {
            transform: scale(1.25);
            opacity: 0.85;
          }
        }

        @keyframes services-tech-aura {
          0% {
            transform: scale(0.92);
            opacity: 0.35;
          }
          100% {
            transform: scale(1.22);
            opacity: 0.75;
          }
        }

        /* Interactive Hover States */
        .help-card-quickassist:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 229, 255, 0.75) !important;
          box-shadow: 0 16px 45px rgba(0, 79, 235, 0.4), 0 0 30px rgba(0, 229, 255, 0.3) !important;
        }

        .help-card-quickassist:hover .qa-robot-img {
          transform: translateY(-14px) scale(1.06) rotate(-2deg);
        }

        .help-card-services:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 150, 255, 0.75) !important;
          box-shadow: 0 16px 45px rgba(0, 102, 255, 0.28), 0 0 25px rgba(0, 213, 255, 0.25) !important;
        }

        .help-card-services:hover .services-tech-img {
          transform: translateY(-12px) scale(1.05);
        }

        .qa-cta-btn:hover,
        .services-cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 25px rgba(0, 102, 255, 0.65), 0 0 20px #00E5FF !important;
        }

        /* Dark Mode Adjustments */
        html.dark .need-help-section,
        [data-theme="dark"] .need-help-section {
          background: #0B192E !important;
        }

        html.dark .need-help-heading,
        [data-theme="dark"] .need-help-heading {
          color: #FFFFFF !important;
        }

        html.dark .need-help-subheading,
        [data-theme="dark"] .need-help-subheading {
          color: #94A3B8 !important;
        }

        html.dark .help-card-services,
        [data-theme="dark"] .help-card-services {
          background: linear-gradient(180deg, #1E293B 0%, #15243C 45%, #0A192F 100%) !important;
          border-color: rgba(255, 255, 255, 0.18) !important;
        }

        html.dark .services-card-title,
        [data-theme="dark"] .services-card-title,
        html.dark .services-card-subtitle,
        [data-theme="dark"] .services-card-subtitle {
          color: #FFFFFF !important;
        }

        html.dark .services-card-desc,
        [data-theme="dark"] .services-card-desc {
          color: #CBD5E1 !important;
        }

        html.dark .services-badge,
        [data-theme="dark"] .services-badge {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          color: #E2E8F0 !important;
        }

        /* Responsive Mobile Layout */
        @media (max-width: 820px) {
          .help-card-quickassist,
          .help-card-services {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px;
          }
          .qa-robot-container,
          .services-tech-container {
            width: 100% !important;
            flex: auto !important;
            justifyContent: center !important;
          }
          .qa-robot-img,
          .services-tech-img {
            max-width: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
