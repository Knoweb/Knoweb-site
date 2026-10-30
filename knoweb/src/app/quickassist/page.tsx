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
    <div style={{ paddingTop: '96px', paddingBottom: '80px', background: '#FFFFFF' }}>
      {/* ── Breadcrumb & Hero ── */}
      <section style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '48px', background: '#F8FAFC' }}>
        <div className="container-max" style={{ paddingTop: '28px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: '#64748B',
              marginBottom: '20px',
            }}
          >
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: '#004FEB', fontWeight: 600 }}>QuickAssist</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(0, 79, 235, 0.1)',
              color: '#004FEB',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '6px 12px',
              borderRadius: '6px',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#004FEB',
              }}
            />
            Technical Problem Triage &amp; Guidance
          </div>

          <h1
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0A192F',
              lineHeight: 1.2,
              marginBottom: '16px',
              maxWidth: '840px',
            }}
          >
            QuickAssist — Not Sure What to Do?
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: '#334155',
              maxWidth: '780px',
              marginBottom: '14px',
            }}
          >
            Facing software errors, poor support, an unavailable developer or website problems?
          </p>

          <p
            style={{
              fontSize: '0.98rem',
              lineHeight: 1.65,
              color: '#64748B',
              maxWidth: '740px',
              margin: 0,
            }}
          >
            Tell us what&apos;s happening. Knoweb QuickAssist helps you understand the situation and explore possible next steps. Any technical assessment or follow-up work is agreed separately.
          </p>
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
