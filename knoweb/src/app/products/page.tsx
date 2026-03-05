import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';
import PlatformCard from '@/components/sections/PlatformCard';

export const metadata: Metadata = {
    title: 'Products — SaaS Platforms',
    description:
        'Explore Knoweb subscription-based SaaS platforms for accounting, HR & payroll, retail POS, and operational monitoring.',
};

const tier1 = [
    {
        name: 'KnoAccounts',
        tagline: 'Accounting & Financial Management',
        desc: 'Complete double-entry accounting, invoicing, expense management, and financial reporting for growing businesses.',
        targets: ['SMEs', 'Service businesses', 'Retailers', 'Multi-branch organizations'],
        features: ['Full double-entry accounting', 'Invoice & billing management', 'Expense tracking & approvals', 'Bank reconciliation', 'Tax computation support', 'Financial dashboards & reports'],
        badge: 'Core Platform',
        badgeColor: '#0057FF',
    },
    {
        name: 'KnoPeople',
        tagline: 'HR & Payroll Management',
        desc: 'End-to-end HR management covering attendance, leave, payroll, EPF/ETF, and employee records — fully compliant.',
        targets: ['SMEs', 'Hospitality businesses', 'Retail organizations', 'Professional services'],
        features: ['Payroll processing & payslips', 'Attendance & biometric integration', 'Leave management portal', 'EPF/ETF auto-computation', 'Employee self-service', 'HR compliance reporting'],
        badge: 'Core Platform',
        badgeColor: '#0057FF',
    },
];

const tier2 = [
    {
        name: 'KnoPOS',
        tagline: 'Retail & Order Management',
        desc: 'Intuitive point-of-sale, inventory management, and order processing platform for retail and hospitality operations.',
        targets: ['Retailers', 'Restaurants', 'Cafes', 'Hotels'],
        features: ['POS terminal', 'Multi-outlet management', 'Inventory & stock control', 'Order processing', 'Sales analytics'],
        badge: 'Vertical Platform',
        badgeColor: '#7C3AED',
    },
    {
        name: 'KnoMonitor',
        tagline: 'Operational Monitoring & Dashboards',
        desc: 'Real-time operational visibility, inspection checklists, and KPI dashboards for multi-site and field operations.',
        targets: ['Multi-branch businesses', 'Logistics operators', 'Field service teams'],
        features: ['Live monitoring dashboards', 'Inspection workflows', 'Alert & escalation engine', 'Custom KPI configuration', 'Scheduled reports'],
        badge: 'Vertical Platform',
        badgeColor: '#7C3AED',
    },
    {
        name: 'KnoInspect',
        tagline: 'Quality & Compliance Inspection',
        desc: 'Digital inspection forms, audit checklists, and compliance tracking for organizations with operational standards.',
        targets: ['Food & beverage', 'Hospitality', 'Manufacturing', 'Field operations'],
        features: ['Digital inspection forms', 'Photo evidence capture', 'Compliance checklists', 'Audit trail & logs', 'Defect reporting'],
        badge: 'Vertical Platform',
        badgeColor: '#7C3AED',
    },
];


export default function ProductsPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container-max">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Products</span>
                    </div>
                    <div className="tag-dark" style={{ marginBottom: '20px' }}>SaaS Platforms</div>
                    <h1>Subscription-Based Business Platforms</h1>
                    <p>
                        Ready-to-deploy software platforms for core business functions. Subscribe, deploy, and operate — without the complexity of custom development.
                    </p>
                </div>
            </section>

            {/* Tier 1 */}
            <section className="section-pad">
                <div className="container-max">
                    <div className="section-header">
                        <div className="tag" style={{ marginBottom: '16px' }}>Tier 1</div>
                        <h2>Core Platforms</h2>
                        <p>Foundational platforms for essential business operations. Designed for immediate deployment and long-term scalability.</p>
                    </div>
                    <div className="grid-2">
                        {tier1.map((p) => <PlatformCard key={p.name} p={p} large />)}
                    </div>
                </div>
            </section>

            {/* Tier 2 */}
            <section className="section-pad surface-light">
                <div className="container-max">
                    <div className="section-header">
                        <div className="tag" style={{ marginBottom: '16px' }}>Tier 2</div>
                        <h2>Vertical Platforms</h2>
                        <p>Specialized platforms for specific industry verticals and operational requirements.</p>
                    </div>
                    <div className="grid-3">
                        {tier2.map((p) => <PlatformCard key={p.name} p={p} />)}
                    </div>
                </div>
            </section>

            {/* Pricing note */}
            <section className="section-pad-sm">
                <div className="container-max">
                    <div style={{
                        background: 'linear-gradient(135deg,#EEF2FF,#F0F9FF)',
                        border: '1px solid rgba(0,87,255,0.15)',
                        borderRadius: '14px',
                        padding: '40px',
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: '32px',
                        alignItems: 'center',
                    }}>
                        <div>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0A0F1E', marginBottom: '12px' }}>
                                Flexible Subscription Pricing
                            </h3>
                            <p style={{ color: '#6B7280', fontSize: '0.925rem', lineHeight: 1.65, maxWidth: '520px' }}>
                                All platforms are available on a monthly subscription model. Pricing is based on business size, user count, and module selection. Contact our sales team for a tailored quote.
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0 }}>
                            <Link href="/contact" className="btn-primary">Get a Quote</Link>
                            <Link href="/contact" className="btn-outline">Request Demo</Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
