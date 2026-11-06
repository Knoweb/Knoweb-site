'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface LeafletMapInstance {
    remove: () => void;
    invalidateSize?: () => void;
}

interface LeafletControl {
    addTo: (map: LeafletMapInstance) => void;
}

interface LeafletLayer {
    addTo: (map: LeafletMapInstance) => LeafletLayer;
}

interface LeafletMarker extends LeafletLayer {
    bindPopup: (content: string) => { openPopup: () => void };
}

interface LeafletGlobal {
    map: (element: HTMLElement, options?: Record<string, unknown>) => LeafletMapInstance;
    control: {
        zoom: (options?: Record<string, unknown>) => LeafletControl;
    };
    tileLayer: (url: string, options?: Record<string, unknown>) => LeafletLayer;
    divIcon: (options?: Record<string, unknown>) => unknown;
    marker: (coords: [number, number], options?: Record<string, unknown>) => LeafletMarker;
}

declare global {
    interface Window {
        L?: LeafletGlobal;
    }
}

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
        let mapInstance: LeafletMapInstance | null = null;

        // 1. Ensure Leaflet CSS is loaded in document head
        if (!document.getElementById('leaflet-css')) {
            const link = document.createElement('link');
            link.id = 'leaflet-css';
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            document.head.appendChild(link);
        }

        const initMap = (L: LeafletGlobal) => {
            if (!mapContainerRef.current || mapInstance) return;

            // Coordinates for No. 11/1/2, Udugama Road, Makuluwa, Galle, Sri Lanka
            const pinCoords: [number, number] = [6.0428, 80.2186];
            const centerCoords: [number, number] = pinCoords;

            const map = L.map(mapContainerRef.current, {
                center: centerCoords,
                zoom: 16,
                scrollWheelZoom: false,
                zoomControl: false,
            });

            // Position zoom controls in the top-right corner
            L.control.zoom({ position: 'topright' }).addTo(map);

            // OpenStreetMap Standard Tiles (100% Free, No API Key Required)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
                maxZoom: 19,
                subdomains: ['a', 'b', 'c'],
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

            const marker = L.marker(pinCoords, { icon: redPinIcon });
            marker.addTo(map);
            marker.bindPopup(`
                <div style="font-family: Inter, sans-serif; padding: 4px 6px; min-width: 190px;">
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

            setTimeout(() => {
                if (map && map.invalidateSize) {
                    map.invalidateSize();
                }
            }, 300);
        };

        // 2. Ensure Leaflet JS is loaded
        if (typeof window !== 'undefined' && window.L) {
            initMap(window.L);
        } else {
            const existingScript = document.getElementById('leaflet-js');
            if (!existingScript) {
                const script = document.createElement('script');
                script.id = 'leaflet-js';
                script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
                script.async = true;
                script.onload = () => {
                    if (window.L) {
                        initMap(window.L);
                    }
                };
                document.body.appendChild(script);
            } else {
                existingScript.addEventListener('load', () => {
                    if (window.L) {
                        initMap(window.L);
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
                {/* Embedded Right-Side Interactive Leaflet Map */}
                <div
                    ref={mapContainerRef}
                    className="contact-map-bg"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                        background: '#0a1628 url(/galle-map.jpg) center 35%/cover no-repeat',
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

                {/* Custom Map Styles */}
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

                    .contact-map-bg {
                        width: 64%;
                    }

                    @media (max-width: 768px) {
                        .contact-map-bg {
                            width: 100%;
                            opacity: 0.55;
                        }
                    }

                    .leaflet-popup-content-wrapper {
                        background: rgba(13, 32, 59, 0.94) !important;
                        backdrop-filter: blur(12px) !important;
                        -webkit-backdrop-filter: blur(12px) !important;
                        color: #FFFFFF !important;
                        border: 1px solid rgba(0, 229, 255, 0.35) !important;
                        border-radius: 12px !important;
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45) !important;
                    }

                    .leaflet-popup-tip {
                        background: rgba(13, 32, 59, 0.94) !important;
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
                `}</style>

                {/* Edge-to-edge Content Container with Left Alignment matching Home */}
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
                    <div style={{ maxWidth: '680px' }}>
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
                            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Contact</span>
                        </div>

                        {/* Main Headline (H1): Exact styling as Home Hero (Light 300 weight, pure white) */}
                        <h1
                            style={{
                                fontFamily:
                                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                fontSize: 'clamp(2.75rem, 5.8vw, 5.25rem)',
                                fontWeight: 300,
                                lineHeight: 1.12,
                                color: '#FFFFFF',
                                letterSpacing: '-0.025em',
                                marginBottom: '24px',
                            }}
                        >
                            Start a Conversation
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
                            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#0A0F1E', marginBottom: '20px' }}>
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
                                        value: 'info@knowebsolutions.com',
                                        href: 'mailto:info@knowebsolutions.com',
                                    },
                                    {
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M3 4a1 1 0 011-1h3l1.5 4-2 1.5a11 11 0 005 5L13 12l4 1.5v3a1 1 0 01-1 1C7 18 2 13 2 5a1 1 0 011-1z" stroke="#0057FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ),
                                        label: 'Phone',
                                        value: '0711 102 102',
                                        href: 'tel:0711102102',
                                    },
                                    {
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 01-5.82 2.42c-1.48 0-2.93-.39-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z" />
                                            </svg>
                                        ),
                                        label: 'WhatsApp',
                                        value: '0711 102 102',
                                        href: 'https://wa.me/94711102102',
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
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    style={{
                                                        textDecoration: 'none',
                                                        fontWeight: 600,
                                                        color: '#0A0F1E',
                                                        fontSize: '0.95rem',
                                                        transition: 'color 0.2s ease',
                                                    }}
                                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0057FF')}
                                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#0A0F1E')}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <div style={{ fontWeight: 600, color: '#0A0F1E', fontSize: '0.95rem' }}>{item.value}</div>
                                            )}
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
                                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.2rem', fontWeight: 800, color: '#0A192F', marginBottom: '6px' }}>
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
                                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#065F46', marginBottom: '12px' }}>
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
                                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0A0F1E', marginBottom: '4px' }}>
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
