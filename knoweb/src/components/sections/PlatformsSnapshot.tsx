import Link from 'next/link';

const platforms = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="4" width="18" height="14" rx="2" stroke="#0057FF" strokeWidth="1.5" />
                <path d="M7 9H15M7 13H11" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        category: 'Accounting & Invoicing',
        desc: 'Complete financial management including invoicing, expense tracking, bank reconciliation, and financial reports.',
        features: ['Invoice management', 'Expense tracking', 'Financial reports', 'Tax compliance'],
        color: '#EEF2FF',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="8" r="3.5" stroke="#0057FF" strokeWidth="1.5" />
                <path d="M4 18c0-3.31 3.13-6 7-6s7 2.69 7 6" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        category: 'HR & Payroll',
        desc: 'People management from attendance and leave to payroll processing, statutory compliance, and employee records.',
        features: ['Payroll processing', 'Leave management', 'Attendance tracking', 'EPF/ETF compliance'],
        color: '#F0FDF9',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 7h16M3 11h10M3 15h6" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="17" cy="14" r="3" stroke="#0057FF" strokeWidth="1.5" />
            </svg>
        ),
        category: 'Retail & POS',
        desc: 'Point-of-sale, order management, inventory control, and multi-branch operational coordination.',
        features: ['POS interface', 'Order management', 'Inventory control', 'Multi-branch sync'],
        color: '#FFF7ED',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 16L8 12L11 15L15 9L18 11" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="2" y="2" width="18" height="18" rx="3" stroke="#0057FF" strokeWidth="1.5" />
            </svg>
        ),
        category: 'Operational Dashboards',
        desc: 'Real-time monitoring dashboards, inspection workflows, and operational insight platforms for multi-site operations.',
        features: ['Real-time monitoring', 'Custom KPIs', 'Inspection forms', 'Alerts & reports'],
        color: '#FFF5F5',
    },
];

export default function PlatformsSnapshot() {
    return (
        <section className="section-pad surface-light">
            <div className="container-max">
                <div className="section-header">
                    <div className="tag" style={{ marginBottom: '16px' }}>SaaS Platforms</div>
                    <h2>Platform Categories</h2>
                    <p>Ready-to-deploy platforms across core business functions. Subscription-based, fast to implement, and built for growing businesses.</p>
                    <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '20px', color: '#0057FF', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
                        View all platforms
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="grid-4">
                    {platforms.map((p) => (
                        <div key={p.category} className="card" style={{ background: '#fff' }}>
                            <div className="icon-box" style={{ background: p.color }}>{p.icon}</div>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '10px', color: '#0A0F1E' }}>
                                {p.category}
                            </h3>
                            <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
                                {p.desc}
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                {p.features.map((f) => (
                                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#374151' }}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 6L4.5 8.5L10 3" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
