'use client';

import { useState } from 'react';
import Link from 'next/link';

const problemTypes = [
  'Errors or system crashing',
  'Previous developer unavailable / unresponsive',
  'Slow performance or hosting issues',
  'Website broken or security warning',
  'Uncertain whether to fix or rebuild existing software',
  'Integration or data synchronization failure',
  'Other urgent technical issue',
];

export default function QuickAssistPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    problemType: problemTypes[0],
    description: '',
    urgency: 'Standard (within 24 hours)',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#FFFFFF', paddingBottom: '80px' }}>
      {/* ── Modern Dark Glassmorphic Hero Section with hero-team.png ── */}
      <section
        style={{
          position: 'relative',
          paddingTop: '68px',
          paddingBottom: '68px',
          backgroundColor: '#071224',
          backgroundImage: `linear-gradient(135deg, rgba(7, 18, 36, 0.78) 0%, rgba(10, 25, 47, 0.64) 50%, rgba(7, 18, 36, 0.82) 100%), url('/hero-team.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <style>{`
          @keyframes pulseDot {
            0% { transform: scale(0.9); opacity: 0.9; }
            50% { transform: scale(2.2); opacity: 0; }
            100% { transform: scale(2.2); opacity: 0; }
          }

          .qa-hero-card {
            transition: all 0.4s ease;
          }
          .qa-hero-card:hover {
            border-color: rgba(0, 229, 255, 0.38) !important;
            box-shadow: 0 28px 70px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 0 35px rgba(0, 229, 255, 0.12) !important;
          }

          @media (max-width: 960px) {
            .qa-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 36px !important;
            }
            .qa-hero-card {
              padding: 32px 24px !important;
              border-radius: 18px !important;
            }
          }
        `}</style>

        {/* Ambient background glows */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '6%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.16) 0%, rgba(0, 102, 255, 0.05) 50%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(32px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-70px',
            left: '6%',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.14) 0%, transparent 68%)',
            pointerEvents: 'none',
            filter: 'blur(30px)',
          }}
        />

        <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
          <div
            className="qa-hero-card"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(13, 32, 59, 0.42) 40%, rgba(7, 18, 36, 0.52) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              padding: '48px 44px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.28), inset 0 0 24px rgba(0, 229, 255, 0.06)',
            }}
          >
            {/* Inner ambient card cyan glow */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '25%',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 229, 255, 0.14) 0%, transparent 70%)',
                pointerEvents: 'none',
                filter: 'blur(28px)',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.25fr 0.95fr',
                gap: '40px',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
              }}
              className="qa-hero-grid"
            >
              {/* Left Column: Information & Text */}
              <div>
                {/* Breadcrumb */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.85rem',
                    color: '#94A3B8',
                    marginBottom: '18px',
                  }}
                >
                  <Link href="/" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}>
                    Home
                  </Link>
                  <span style={{ color: '#64748B' }}>/</span>
                  <span style={{ color: '#00E5FF', fontWeight: 600 }}>QuickAssist</span>
                </div>

                {/* Badge Tag */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(7, 18, 36, 0.65)',
                    border: '1px solid rgba(0, 229, 255, 0.42)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    color: '#00E5FF',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    marginBottom: '18px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.35)',
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
                  Technical Problem Triage &amp; Guidance
                </div>

                {/* Main Headline */}
                <h1
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
                    fontWeight: 800,
                    lineHeight: 1.18,
                    color: '#FFFFFF',
                    marginBottom: '16px',
                    letterSpacing: '-0.025em',
                    textShadow: '0 3px 20px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  QuickAssist — Not Sure What to Do?
                </h1>

                {/* Subtitle / Problem Callout */}
                <p
                  style={{
                    fontSize: 'clamp(1.05rem, 1.5vw, 1.18rem)',
                    fontWeight: 600,
                    lineHeight: 1.55,
                    color: '#F8FAFC',
                    marginBottom: '12px',
                    textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  Facing software errors, poor support, an unavailable developer or website problems?
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.96rem',
                    lineHeight: 1.65,
                    color: '#CBD5E1',
                    marginBottom: '24px',
                    maxWidth: '620px',
                    textShadow: '0 1px 8px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Tell us what&apos;s happening. Knoweb QuickAssist helps you understand the situation and explore possible next steps. Any technical assessment or follow-up work is agreed separately.
                </p>

                {/* Feature Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    { icon: '⚡', label: 'Response within 24 Hours' },
                    { icon: '🛡️', label: 'Independent Technical Review' },
                    { icon: '🤝', label: 'No Lock-in Consultation' },
                  ].map((feat) => (
                    <div
                      key={feat.label}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(13, 32, 59, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        color: '#E2E8F0',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                      }}
                    >
                      <span>{feat.icon}</span>
                      <span>{feat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Hero Team Image Showcase */}
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 229, 255, 0.35)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55), 0 0 30px rgba(0, 229, 255, 0.15)',
                    background: '#0D203B',
                  }}
                >
                  {/* Team image */}
                  <img
                    src="/hero-team.png"
                    alt="Knoweb Technical Team"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                      maxHeight: '380px',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Gradient vignette overlay at bottom of image */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7, 18, 36, 0.88) 0%, rgba(7, 18, 36, 0.18) 50%, transparent 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Status badge pinned at bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      right: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'rgba(7, 18, 36, 0.88)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 229, 255, 0.4)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <span
                      style={{
                        position: 'relative',
                        display: 'flex',
                        width: '10px',
                        height: '10px',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '50%',
                          background: '#00E5FF',
                          animation: 'pulseDot 2s infinite',
                          opacity: 0.75,
                        }}
                      />
                      <span
                        style={{
                          position: 'relative',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: '#00E5FF',
                        }}
                      />
                    </span>
                    <div>
                      <div style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700 }}>
                        Knoweb Technical Specialists
                      </div>
                      <div style={{ color: '#94A3B8', fontSize: '0.74rem' }}>
                        Ready to diagnose &amp; guide your issue
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Grid: Form + Scenarios ── */}
      <section style={{ paddingTop: '56px' }}>
        <div className="container-max">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '48px',
              alignItems: 'start',
            }}
            className="qa-grid"
          >
            {/* Left: QuickAssist Request Form */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '2px solid #004FEB',
                boxShadow: '0 8px 30px rgba(0, 79, 235, 0.08)',
                padding: '36px 32px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#0A192F',
                  marginBottom: '8px',
                }}
              >
                Describe Your Situation
              </h2>
              <p
                style={{
                  color: '#64748B',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  marginBottom: '24px',
                }}
              >
                Provide a quick summary of what is happening. A technical specialist will review your issue and advise on viable next steps.
              </p>

              {submitted ? (
                <div
                  style={{
                    padding: '32px 20px',
                    textAlign: 'center',
                    background: '#F0FDF4',
                    borderRadius: '12px',
                    border: '1px solid #BBF7D0',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#16A34A',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      fontSize: '1.4rem',
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#166534',
                      marginBottom: '8px',
                    }}
                  >
                    QuickAssist Request Received
                  </h3>
                  <p style={{ color: '#15803D', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    Thank you. A Knoweb technical specialist will review your details and reach out to you directly to guide you on the next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        color: '#1E293B',
                        marginBottom: '6px',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyantha Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.92rem',
                        color: '#0F172A',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#004FEB')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#CBD5E1')}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          color: '#1E293B',
                          marginBottom: '6px',
                        }}
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. +94 77 123 4567"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.92rem',
                          color: '#0F172A',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          color: '#1E293B',
                          marginBottom: '6px',
                        }}
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ABC Holdings"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.92rem',
                          color: '#0F172A',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        color: '#1E293B',
                        marginBottom: '6px',
                      }}
                    >
                      What best describes your problem? *
                    </label>
                    <select
                      value={formData.problemType}
                      onChange={(e) => setFormData({ ...formData, problemType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.92rem',
                        color: '#0F172A',
                        background: '#FFFFFF',
                        outline: 'none',
                      }}
                    >
                      {problemTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        color: '#1E293B',
                        marginBottom: '6px',
                      }}
                    >
                      Explain what is happening *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="e.g. Our billing system displays an error whenever we try to close monthly accounts. The developer who created it is unreachable and we cannot afford downtime."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.92rem',
                        color: '#0F172A',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#004FEB',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      padding: '13px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease',
                      marginTop: '6px',
                      boxShadow: '0 4px 14px rgba(0, 79, 235, 0.25)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#0040C8')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#004FEB')}
                  >
                    Submit for QuickAssist Review &gt;
                  </button>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: '#64748B',
                      textAlign: 'center',
                      margin: 0,
                    }}
                  >
                    No obligation. Initial review helps identify whether a fix, takeover, or alternative solution is appropriate.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Differentiation & Common Situations */}
            <div>
              {/* Differentiation card */}
              <div
                style={{
                  background: '#F0F5FA',
                  borderRadius: '14px',
                  border: '1px solid #DCE6F1',
                  padding: '28px 24px',
                  marginBottom: '28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0A192F',
                    marginBottom: '12px',
                  }}
                >
                  QuickAssist vs. Knoweb Services
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      padding: '14px 16px',
                      borderRadius: '8px',
                      borderLeft: '4px solid #004FEB',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#004FEB', marginBottom: '4px' }}>
                      QuickAssist (Problem-Driven)
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                      For businesses experiencing issues, errors, or sudden roadblocks who need impartial guidance on what to do next.
                    </div>
                  </div>

                  <div
                    style={{
                      background: '#FFFFFF',
                      padding: '14px 16px',
                      borderRadius: '8px',
                      borderLeft: '4px solid #64748B',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1E293B', marginBottom: '4px' }}>
                      Knoweb Services (Project-Driven)
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                      For businesses with defined requirements seeking new website development, custom software build, or ongoing scheduled maintenance.
                    </div>
                  </div>
                </div>
              </div>

              {/* How it works */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  padding: '28px 24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#0A192F',
                    marginBottom: '18px',
                  }}
                >
                  How QuickAssist Operates
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#004FEB',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        flexShrink: 0,
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>
                        Initial Assessment
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                        We review symptoms, error logs, and accessibility to understand the root cause.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#004FEB',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        flexShrink: 0,
                      }}
                    >
                      2
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>
                        Feasibility Review
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                        We evaluate whether your current system can be repaired or if an alternative path is more sensible.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#004FEB',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        flexShrink: 0,
                      }}
                    >
                      3
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>
                        Clear Recommendation
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                        You receive straightforward technical recommendations and an agreed scope before any billable work starts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .qa-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
