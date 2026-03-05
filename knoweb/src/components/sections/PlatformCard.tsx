'use client';

import Link from 'next/link';

type Platform = {
    name: string;
    tagline: string;
    desc: string;
    targets: string[];
    features: string[];
    badge: string;
    badgeColor: string;
};

export default function PlatformCard({ p, large = false }: { p: Platform; large?: boolean }) {
    return (
        <div
            style={{
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '14px',
                padding: large ? '40px' : '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,87,255,0.3)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,87,255,0.08)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
        >
            <div style={{
                display: 'inline-flex', alignItems: 'center',
                background: `${p.badgeColor}12`, color: p.badgeColor,
                fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px',
                borderRadius: '100px', marginBottom: '16px', alignSelf: 'flex-start',
            }}>
                {p.badge}
            </div>

            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: large ? '1.4rem' : '1.15rem', color: '#0A0F1E', marginBottom: '4px' }}>
                {p.name}
            </h3>
            <div style={{ fontSize: '0.8rem', color: '#0057FF', fontWeight: 600, marginBottom: '12px' }}>{p.tagline}</div>
            <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '20px' }}>{p.desc}</p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {p.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#374151' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L4.5 8.5L10 3" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: 'auto' }}>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '8px', fontWeight: 600 }}>Best suited for</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {p.targets.map((t) => (
                        <span key={t} style={{ background: '#F3F4F6', color: '#374151', fontSize: '0.7rem', padding: '3px 10px', borderRadius: '100px', fontWeight: 500 }}>
                            {t}
                        </span>
                    ))}
                </div>
                <Link href="/contact" className="btn-primary" style={{ fontSize: '0.8rem' }}>
                    Request Demo
                </Link>
            </div>
        </div>
    );
}
