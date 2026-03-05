'use client';

import { useState } from 'react';
import Link from 'next/link';

const inquiryTypes = [
    'SaaS Platform Enquiry',
    'Custom Software Project',
    'Request a Demo',
    'Pricing & Subscription',
    'Technical Support',
    'Partnership',
    'Other',
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        inquiry: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <section className="page-hero">
                <div className="container-max">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Contact</span>
                    </div>
                    <div className="tag-dark" style={{ marginBottom: '20px' }}>Get in Touch</div>
                    <h1>Start a Conversation</h1>
                    <p>
                        Whether you need a platform demo, a custom software discussion, or simply want to explore your options — we are ready to talk.
                    </p>
                </div>
            </section>

            <section className="section-pad">
                <div className="container-max">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start' }}>
                        {/* Left — info */}
                        <div>
                            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#0A0F1E', marginBottom: '20px' }}>
                                Choose How to Connect
                            </h2>
                            <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: '40px', fontSize: '0.95rem' }}>
                                Our solutions team is available to discuss your requirements, answer questions, and guide you to the right solution path.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                                {[
                                    {
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="#0057FF" strokeWidth="1.3" />
                                                <path d="M3 7l7 5 7-5" stroke="#0057FF" strokeWidth="1.3" strokeLinecap="round" />
                                            </svg>
                                        ),
                                        label: 'Email',
                                        value: 'hello@knoweb.lk',
                                    },
                                    {
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M3 4a1 1 0 011-1h3l1.5 4-2 1.5a11 11 0 005 5L13 12l4 1.5v3a1 1 0 01-1 1C7 18 2 13 2 5a1 1 0 011-1z" stroke="#0057FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ),
                                        label: 'Phone',
                                        value: '+94 11 XXX XXXX',
                                    },
                                    {
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 2C6.69 2 4 4.69 4 8c0 5 6 10 6 10s6-5 6-10c0-3.31-2.69-6-6-6z" stroke="#0057FF" strokeWidth="1.3" />
                                                <circle cx="10" cy="8" r="2" stroke="#0057FF" strokeWidth="1.3" />
                                            </svg>
                                        ),
                                        label: 'Location',
                                        value: 'Colombo, Sri Lanka',
                                    },
                                ].map((item) => (
                                    <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div className="icon-box" style={{ width: '40px', height: '40px', borderRadius: '8px', margin: 0, flexShrink: 0 }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9CA3AF', marginBottom: '2px' }}>{item.label}</div>
                                            <div style={{ fontWeight: 600, color: '#0A0F1E', fontSize: '0.95rem' }}>{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick links */}
                            <div style={{ background: '#F8FAFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '24px' }}>
                                <div style={{ fontWeight: 700, color: '#0A0F1E', fontSize: '0.9rem', marginBottom: '16px' }}>Quick Actions</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {[
                                        { label: 'Request a Demo', href: '#contact-form' },
                                        { label: 'Talk to Sales', href: '#contact-form' },
                                        { label: 'Explore Solutions', href: '/solutions' },
                                        { label: 'View Platforms', href: '/products' },
                                    ].map((a) => (
                                        <Link key={a.label} href={a.href} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            color: '#374151',
                                            textDecoration: 'none',
                                            fontSize: '0.875rem',
                                            padding: '10px 12px',
                                            background: '#fff',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '8px',
                                            fontWeight: 500,
                                        }}>
                                            {a.label}
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2 6H10M6 2L10 6L6 10" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — form */}
                        <div id="contact-form">
                            {submitted ? (
                                <div style={{
                                    background: '#F0FDF9',
                                    border: '1px solid rgba(16,185,129,0.2)',
                                    borderRadius: '14px',
                                    padding: '48px 40px',
                                    textAlign: 'center',
                                }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#065F46', marginBottom: '12px' }}>
                                        Message Received
                                    </h3>
                                    <p style={{ color: '#047857', fontSize: '0.9rem', lineHeight: 1.65 }}>
                                        Thank you for reaching out. A member of the Knoweb team will respond within one business day.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    style={{
                                        background: '#fff',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '14px',
                                        padding: '40px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px',
                                    }}
                                >
                                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0A0F1E', marginBottom: '4px' }}>
                                        Send Us a Message
                                    </h3>
                                    <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '8px' }}>
                                        Fill in the form and the right team member will get back to you promptly.
                                    </p>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                        {[
                                            { id: 'name', label: 'Full Name', placeholder: 'Your full name', type: 'text' },
                                            { id: 'email', label: 'Business Email', placeholder: 'you@company.com', type: 'email' },
                                            { id: 'company', label: 'Company Name', placeholder: 'Your company', type: 'text' },
                                            { id: 'role', label: 'Your Role', placeholder: 'e.g. CEO, IT Manager', type: 'text' },
                                        ].map((field) => (
                                            <div key={field.id}>
                                                <label htmlFor={field.id} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                                                    {field.label}
                                                </label>
                                                <input
                                                    id={field.id}
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    required
                                                    value={formData[field.id as keyof typeof formData]}
                                                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px 14px',
                                                        border: '1px solid #D1D5DB',
                                                        borderRadius: '8px',
                                                        fontSize: '0.875rem',
                                                        color: '#0A0F1E',
                                                        outline: 'none',
                                                        transition: 'border-color 0.2s',
                                                        fontFamily: 'Inter, sans-serif',
                                                    }}
                                                    onFocus={(e) => (e.target.style.borderColor = '#0057FF')}
                                                    onBlur={(e) => (e.target.style.borderColor = '#D1D5DB')}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <label htmlFor="inquiry" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                                            Nature of Enquiry
                                        </label>
                                        <select
                                            id="inquiry"
                                            required
                                            value={formData.inquiry}
                                            onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '10px 14px',
                                                border: '1px solid #D1D5DB',
                                                borderRadius: '8px',
                                                fontSize: '0.875rem',
                                                color: formData.inquiry ? '#0A0F1E' : '#9CA3AF',
                                                outline: 'none',
                                                background: '#fff',
                                                fontFamily: 'Inter, sans-serif',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <option value="">Select enquiry type</option>
                                            {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Tell us about your business and what you're looking for..."
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '10px 14px',
                                                border: '1px solid #D1D5DB',
                                                borderRadius: '8px',
                                                fontSize: '0.875rem',
                                                color: '#0A0F1E',
                                                outline: 'none',
                                                resize: 'vertical',
                                                fontFamily: 'Inter, sans-serif',
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = '#0057FF')}
                                            onBlur={(e) => (e.target.style.borderColor = '#D1D5DB')}
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '13px 32px', fontSize: '0.95rem' }}>
                                        Send Message
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
