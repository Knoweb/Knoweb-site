import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Resources — Articles, Guides & Industry Insights',
    description:
        'Explore Knoweb resources: educational articles, implementation guides, webinars, and business technology thought leadership.',
};

const articles = [
    {
        category: 'Guide',
        title: 'When to Choose SaaS vs. Custom Software for Your Business',
        excerpt: 'A practical decision guide for SMEs and growing businesses — helping you identify which engagement model delivers the right outcome for your situation.',
        readTime: '8 min read',
        color: '#EEF2FF',
        textColor: '#0057FF',
    },
    {
        category: 'Article',
        title: 'The Real Cost of Manual Payroll Processing',
        excerpt: 'Understanding the hidden costs of spreadsheet payroll — from error rates to compliance exposure — and how a platform approach changes the economics.',
        readTime: '6 min read',
        color: '#F0FDF9',
        textColor: '#059669',
    },
    {
        category: 'Industry Insight',
        title: 'How Multi-Branch Retailers Can Achieve Real-Time Operational Visibility',
        excerpt: 'Practical guidance on moving from fragmented branch reporting to a centralized, real-time operational dashboard — and what it enables.',
        readTime: '7 min read',
        color: '#FFF7ED',
        textColor: '#D97706',
    },
    {
        category: 'Guide',
        title: 'Digital Transformation for SMEs: A Practical Framework',
        excerpt: 'A structured approach for SMEs beginning or accelerating their technology adoption — focused on outcomes, not just software selection.',
        readTime: '10 min read',
        color: '#FFF5F5',
        textColor: '#DC2626',
    },
    {
        category: 'Webinar',
        title: 'Accounting Automation: From Manual Books to Financial Intelligence',
        excerpt: 'Recording of our live session covering the accounting automation journey — from manual ledgers to automated reporting and financial dashboards.',
        readTime: '45 min watch',
        color: '#EEF2FF',
        textColor: '#0057FF',
    },
    {
        category: 'Article',
        title: 'HR Compliance in Sri Lanka: What Every Employer Must Know',
        excerpt: 'An overview of EPF, ETF, and labour law compliance requirements for Sri Lankan employers, and how technology supports compliance at scale.',
        readTime: '9 min read',
        color: '#F0FDF9',
        textColor: '#059669',
    },
];

export default function ResourcesPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container-max">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Resources</span>
                    </div>
                    <div className="tag-dark" style={{ marginBottom: '20px' }}>Resources</div>
                    <h1>Business Technology Resources</h1>
                    <p>
                        Educational content to help business leaders and operations teams make better technology decisions and get more value from digital systems.
                    </p>
                </div>
            </section>

            {/* Filter tabs */}
            <section style={{ borderBottom: '1px solid #E5E7EB', background: '#fff', position: 'sticky', top: '68px', zIndex: 50 }}>
                <div className="container-max">
                    <div style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
                        {['All', 'Articles', 'Guides', 'Webinars', 'Industry Insights'].map((tab, i) => (
                            <button key={tab} style={{
                                background: 'none',
                                border: 'none',
                                padding: '16px 20px',
                                fontSize: '0.875rem',
                                fontWeight: i === 0 ? 700 : 500,
                                color: i === 0 ? '#0057FF' : '#6B7280',
                                borderBottom: i === 0 ? '2px solid #0057FF' : '2px solid transparent',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s',
                            }}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles grid */}
            <section className="section-pad">
                <div className="container-max">
                    <div className="grid-3">
                        {articles.map((a) => (
                            <div key={a.title} className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    background: a.color,
                                    color: a.textColor,
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    padding: '4px 10px',
                                    borderRadius: '100px',
                                    marginBottom: '16px',
                                    alignSelf: 'flex-start',
                                }}>
                                    {a.category}
                                </div>
                                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0A0F1E', marginBottom: '12px', lineHeight: 1.4 }}>
                                    {a.title}
                                </h3>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '20px', flex: 1 }}>
                                    {a.excerpt}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                    <span style={{ color: '#9CA3AF', fontSize: '0.75rem' }}>{a.readTime}</span>
                                    <span style={{ color: '#0057FF', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        Read
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 6H10M6 2L10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter signup */}
                    <div style={{
                        background: 'linear-gradient(135deg,#EEF2FF,#F0F9FF)',
                        border: '1px solid rgba(0,87,255,0.15)',
                        borderRadius: '14px',
                        padding: '40px',
                        marginTop: '48px',
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: '32px',
                        alignItems: 'center',
                    }}>
                        <div>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#0A0F1E', marginBottom: '8px' }}>
                                Stay Updated with Business Technology Insights
                            </h3>
                            <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
                                Subscribe to receive new guides, articles, and industry resources from Knoweb.
                            </p>
                        </div>
                        <Link href="/contact" className="btn-primary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                            Subscribe
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
