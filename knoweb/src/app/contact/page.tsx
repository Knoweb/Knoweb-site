'use client';

import { useState, useEffect, useRef } from 'react';
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
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mapInstance: any = null;

        // 1. Ensure Leaflet CSS is loaded in document head
        if (!document.getElementById('leaflet-css')) {
            const link = document.createElement('link');
            link.id = 'leaflet-css';
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            document.head.appendChild(link);
        }

        const initMap = (L: any) => {
            if (!mapContainerRef.current || mapInstance) return;

            // Coordinates for No. 11/1/2, Udugama Road, Makuluwa, Galle, Sri Lanka
            const pinCoords: [number, number] = [6.0428, 80.2186];
            // On desktop, offset center slightly west so the pin appears beside the card on the right
            const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
            const centerCoords: [number, number] = isDesktop ? [6.0428, 80.2142] : pinCoords;

            const map = L.map(mapContainerRef.current, {
                center: centerCoords,
                zoom: 16,
                scrollWheelZoom: false,
                zoomControl: false,
            });

            // Position zoom controls in the top-right corner
            L.control.zoom({ position: 'topright' }).addTo(map);

            // Clean, high-contrast CartoDB Voyager tiles
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
                maxZoom: 19,
                subdomains: 'abcd',
            }).addTo(map);

            // Sleek Custom Red Marker Pin matching reference
            const redPinIcon = L.divIcon({
                className: 'custom-map-pin',
                html: `
                    <div style="position: relative; display: flex; flex-direction: column; align-items: center; cursor: pointer;">
                        <div style="position: absolute; bottom: 3px; width: 14px; height: 14px; border-radius: 50%; background: rgba(234, 67, 53, 0.4); animation: mapBeaconPulse 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;"></div>
                        <svg width="34" height="42" viewBox="0 0 24 30" fill="none" style="filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5)) drop-shadow(0 0 12px rgba(234,67,53,0.7)); transform: translateY(-2px);">
                            <path d="M12 0C5.37 0 0 5.37 0 12C0 20.25 10.5 28.88 11.25 29.5C11.47 29.68 11.73 29.78 12 29.78C12.27 29.78 12.53 29.68 12.75 29.5C13.5 28.88 24 20.25 24 12C24 5.37 18.63 0 12 0Z" fill="#EA4335"/>
                            <circle cx="12" cy="11" r="4.5" fill="#FFFFFF"/>
                            <circle cx="12" cy="11" r="2.2" fill="#B31412"/>
                        </svg>
                    </div>
                `,
                iconSize: [34, 42],
                iconAnchor: [17, 40],
                popupAnchor: [0, -38],
            });

            const marker = L.marker(pinCoords, { icon: redPinIcon }).addTo(map);
            marker.bindPopup(`
                <div style="font-family: Outfit, Inter, sans-serif; padding: 4px 6px; min-width: 190px;">
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                        <span style="width: 7px; height: 7px; border-radius: 50%; background: #00E5FF; box-shadow: 0 0 6px #00E5FF;"></span>
                        <span style="font-weight: 700; color: #FFFFFF; font-size: 13px;">Knoweb (Pvt) Ltd</span>
                    </div>
                    <div style="color: #CBD5E1; font-size: 11.5px; line-height: 1.45;">
                        No. 11/1/2, Udugama Road,<br/>Makuluwa, Galle, Sri Lanka
                    </div>
                </div>
            `).openPopup();

            mapInstance = map;
        };

        // 2. Ensure Leaflet JS is loaded
        if ((window as any).L) {
            initMap((window as any).L);
        } else {
            const existingScript = document.getElementById('leaflet-js');
            if (!existingScript) {
                const script = document.createElement('script');
                script.id = 'leaflet-js';
                script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
                script.async = true;
                script.onload = () => {
                    if ((window as any).L) {
                        initMap((window as any).L);
                    }
                };
                document.body.appendChild(script);
            } else {
                existingScript.addEventListener('load', () => {
                    if ((window as any).L) {
                        initMap((window as any).L);
                    }
                });
            }
        }

        return () => {
            if (mapInstance) {
                mapInstance.remove();
                mapInstance = null;
            }
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            {/* Contact Hero with Interactive Leaflet Map Background */}
            <section
                style={{
                    position: 'relative',
                    minHeight: '440px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '68px',
                    paddingBottom: '68px',
                    backgroundColor: '#071224',
                    overflow: 'hidden',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
            >
                {/* Embedded Leaflet Map */}
                <div
                    ref={mapContainerRef}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        background: '#0a1628 url(/galle-map.jpg) center 35%/cover no-repeat',
                    }}
                />

                {/* Subtle gradient vignette overlay to ensure text contrast while keeping map vivid */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(7, 18, 36, 0.38) 0%, rgba(10, 25, 47, 0.18) 50%, rgba(7, 18, 36, 0.32) 100%)',
                        pointerEvents: 'none',
                        zIndex: 2,
                    }}
                />

                {/* Custom Map and Card Styles */}
                <style>{`
                    @keyframes mapBeaconPulse {
                        0% {
                            transform: scale(0.7);
                            opacity: 0.95;
                        }
                        70% {
                            transform: scale(2.5);
                            opacity: 0;
                        }
                        100% {
                            transform: scale(2.5);
                            opacity: 0;
                        }
                    }

                    .contact-hero-card {
                        background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(13, 32, 59, 0.38) 40%, rgba(7, 18, 36, 0.48) 100%);
                        backdrop-filter: blur(16px);
                        -webkit-backdrop-filter: blur(16px);
                        border-radius: 24px;
                        border: 1px solid rgba(255, 255, 255, 0.22);
                        padding: 44px 44px;
                        position: relative;
                        overflow: hidden;
                        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.28), inset 0 0 24px rgba(0, 229, 255, 0.06);
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    }

                    .contact-hero-card:hover {
                        border-color: rgba(0, 229, 255, 0.4);
                        box-shadow: 0 28px 70px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 0 30px rgba(0, 229, 255, 0.12);
                    }

                    .leaflet-popup-content-wrapper {
                        background: rgba(13, 32, 59, 0.92) !important;
                        backdrop-filter: blur(12px) !important;
                        -webkit-backdrop-filter: blur(12px) !important;
                        color: #FFFFFF !important;
                        border: 1px solid rgba(0, 229, 255, 0.35) !important;
                        border-radius: 12px !important;
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45) !important;
                    }

                    .leaflet-popup-tip {
                        background: rgba(13, 32, 59, 0.92) !important;
                    }

                    .leaflet-popup-close-button {
                        color: #94A3B8 !important;
                        padding: 6px !important;
                    }

                    .leaflet-control-zoom a {
                        background: rgba(13, 32, 59, 0.88) !important;
                        color: #FFFFFF !important;
                        border-color: rgba(255, 255, 255, 0.15) !important;
                        backdrop-filter: blur(8px) !important;
                        -webkit-backdrop-filter: blur(8px) !important;
                    }

                    .leaflet-control-zoom a:hover {
                        background: #004FEB !important;
                        color: #FFFFFF !important;
                    }

                    @media (max-width: 640px) {
                        .contact-hero-card {
                            padding: 32px 24px;
                            border-radius: 18px;
                        }
                    }
                `}</style>

                <div className="container-max" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
                    <div
                        className="contact-hero-card"
                        style={{
                            maxWidth: '740px',
                            position: 'relative',
                        }}
                    >
                        {/* Ambient inner glow */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-30px',
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(0, 229, 255, 0.14) 0%, transparent 70%)',
                                pointerEvents: 'none',
                                filter: 'blur(24px)',
                            }}
                        />

                        {/* Headline */}
                        <h1
                            style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)',
                                fontWeight: 800,
                                lineHeight: 1.15,
                                color: '#FFFFFF',
                                marginBottom: '18px',
                                letterSpacing: '-0.025em',
                                textShadow: '0 3px 20px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 0, 0, 0.7)',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        >
                            Start a Conversation
                        </h1>

                        {/* Description Paragraph */}
                        <p
                            style={{
                                fontSize: 'clamp(1.05rem, 1.6vw, 1.18rem)',
                                lineHeight: 1.65,
                                color: '#F8FAFC',
                                maxWidth: '660px',
                                margin: 0,
                                textShadow: '0 2px 14px rgba(0, 0, 0, 0.85), 0 0 20px rgba(0, 0, 0, 0.65)',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        >
                            Whether you need a platform demo, a custom software discussion, or simply want to explore your options — we are ready to talk.
                        </p>
                    </div>
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
                                        value: 'No. 11/1/2, Udugama Road, Makuluwa, Galle, Sri Lanka',
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
                            <div style={{ background: '#F8FAFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
                                <div style={{ fontWeight: 700, color: '#0A0F1E', fontSize: '0.9rem', marginBottom: '16px' }}>Quick Actions</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {[
                                        { label: 'Request a Demo', href: '#contact-form' },
                                        { label: 'Explore SaaS Products', href: '/saas' },
                                        { label: 'Explore Practical ERP', href: '/erp' },
                                        { label: 'Explore Solutions', href: '/solutions' },
                                        { label: 'Development & Services', href: '/services' },
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
                                                <path d="M2 6H10M6 2L10 6L6 10" stroke="#004FEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* QuickAssist Urgent Support Highlight Box */}
                            <div style={{
                                background: '#FFFFFF',
                                border: '2px solid #004FEB',
                                borderRadius: '12px',
                                padding: '24px',
                                boxShadow: '0 4px 18px rgba(0,79,235,0.08)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#004FEB', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#004FEB' }} />
                                    Urgent Problem Guidance
                                </div>
                                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 800, color: '#0A192F', marginBottom: '6px' }}>
                                    QuickAssist Triage
                                </h3>
                                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '16px' }}>
                                    Facing software errors, an unresponsive developer, or a broken system? Get fast technical assessment and clear next steps.
                                </p>
                                <Link href="/quickassist" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: '#004FEB',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    textDecoration: 'none'
                                }}>
                                    Go to QuickAssist &gt;
                                </Link>
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
                                                        background: '#fff',
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
                                                background: '#fff',
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
