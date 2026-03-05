'use client';

import Link from 'next/link';

const resources = [
    {
        title: '5 Ways Cloud ERP Transforms Multi-Branch Retail Operations',
        category: 'Insights',
        author: 'Knoweb Editorial',
        date: 'Oct 12, 2023',
        image: '/1.png'
    },
    {
        title: 'SaaS vs. Custom Software: Which is Right for Your Business?',
        category: 'Guides',
        author: 'Knoweb Editorial',
        date: 'Nov 05, 2023',
        image: '/2.png'
    },
    {
        title: 'Automating HR & Payroll: Compliance in a Growing Workforce',
        category: 'Best Practices',
        author: 'Knoweb Editorial',
        date: 'Dec 02, 2023',
        image: '/3.png'
    }
];

export default function ResourcesPreviewSection() {
    return (
        <section className="section-pad surface-light" style={{ padding: '100px 0', background: '#F8FAFC' }}>
            <div className="container-max">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ maxWidth: '640px' }}>
                        <div className="tag" style={{ marginBottom: '20px' }}>Our Resources</div>
                        <h2 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                            fontWeight: 800,
                            color: '#0A0F1E',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            margin: 0
                        }}>
                            Latest Insights & Guides
                        </h2>
                    </div>

                    <Link href="/resources" className="btn-primary" style={{ background: '#0A0F1E', border: 'none' }}>
                        Explore Resources
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3.33334 8H12.6667M8.66668 4L12.6667 8L8.66668 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '32px'
                }}>
                    {resources.map((post, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '0',
                            overflow: 'hidden',
                            border: '1px solid #E5E7EB',
                            transition: 'all 0.3s ease',
                            background: '#fff',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.06)';
                                (e.currentTarget.querySelector('.image-placeholder') as HTMLElement).style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                (e.currentTarget.querySelector('.image-placeholder') as HTMLElement).style.transform = 'scale(1)';
                            }}>
                            {/* Graphic Placeholder */}
                            <div style={{
                                height: '240px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="image-placeholder"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '20px',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    color: '#0A0F1E',
                                    padding: '4px 12px',
                                    borderRadius: '100px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}>
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h3 style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '1.35rem',
                                    color: '#0A0F1E',
                                    lineHeight: 1.3,
                                    marginBottom: '24px',
                                    flexGrow: 1
                                }}>
                                    {post.title}
                                </h3>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingTop: '20px',
                                    borderTop: '1px solid #F3F4F6',
                                    color: '#6B7280',
                                    fontSize: '0.85rem',
                                    fontWeight: 500
                                }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{
                                            width: '24px', height: '24px', borderRadius: '50%', background: '#E5E7EB',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <circle cx="12" cy="7" r="4" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        {post.author}
                                    </span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
