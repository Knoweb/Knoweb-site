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
      {/* ── Modern Minimalist Centered Frosted-Glass Hero Section matching About page ── */}
      <section
        style={{
          position: 'relative',
          paddingTop: '76px',
          paddingBottom: '76px',
          backgroundColor: '#071224',
          backgroundImage: `linear-gradient(135deg, rgba(7, 18, 36, 0.58) 0%, rgba(10, 25, 47, 0.42) 50%, rgba(7, 18, 36, 0.62) 100%), url('/hero-team.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Ambient background glows */}
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            right: '5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.18) 0%, rgba(0, 102, 255, 0.06) 50%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(30px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '8%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.14) 0%, transparent 68%)',
            pointerEvents: 'none',
            filter: 'blur(30px)',
          }}
        />

        <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
          {/* Modern Translucent Frosted Glass Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(13, 32, 59, 0.32) 40%, rgba(7, 18, 36, 0.42) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              padding: '48px 44px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.28), inset 0 0 24px rgba(0, 229, 255, 0.06)',
            }}
          >
            {/* Inner ambient card cyan glow */}
            <div
              style={{
                position: 'absolute',
                top: '5%',
                right: '-30px',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 229, 255, 0.16) 0%, rgba(0, 102, 255, 0.04) 55%, transparent 75%)',
                pointerEvents: 'none',
                filter: 'blur(28px)',
              }}
            />

            <div style={{ maxWidth: '820px', position: 'relative', zIndex: 2 }}>
              {/* Breadcrumb */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                  marginBottom: '20px',
                  textShadow: '0 1px 8px rgba(0, 0, 0, 0.7)',
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
                <span style={{ color: '#E2E8F0', fontWeight: 500 }}>QuickAssist</span>
              </div>

              {/* Pill Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(0, 200, 255, 0.14)',
                  border: '1px solid rgba(0, 200, 255, 0.42)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: '#00E5FF',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '5px 14px',
                  borderRadius: '999px',
                  marginBottom: '18px',
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
                QuickAssist Guidance
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.18,
                  color: '#FFFFFF',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 20px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.5)',
                }}
              >
                QuickAssist — Not Sure What to Do?
              </h1>

              {/* Lead Summary (Single concise paragraph combining problem and solution into 2 clear sentences) */}
              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.18rem)',
                  lineHeight: 1.65,
                  color: '#F1F5F9',
                  maxWidth: '780px',
                  margin: 0,
                  textShadow: '0 1px 12px rgba(0, 0, 0, 0.7)',
                }}
              >
                Facing software errors, poor support, an unavailable developer, or website problems? Knoweb QuickAssist helps you understand the situation and explore viable next steps with rapid, independent technical problem triage.
              </p>
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
                  fontFamily: 'Inter, sans-serif',
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
                      fontFamily: 'Inter, sans-serif',
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
                    fontFamily: 'Inter, sans-serif',
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
                    fontFamily: 'Inter, sans-serif',
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
