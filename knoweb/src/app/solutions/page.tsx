import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'Solutions — Business Software by Function',
    description: 'Explore Knoweb solutions grouped by business need: accounting, HR, retail, monitoring, and integrated enterprise systems.',
};

const solutions = [
    {
        id: 'accounting',
        title: 'Accounting & Financial Management',
        problem: 'Manual bookkeeping, spreadsheet-based reporting, and tax compliance gaps create financial risk and slow business decisions.',
        impact: 'Inaccurate books erode management confidence and create audit and compliance exposure.',
        approach: 'A structured accounting platform with automated invoicing, expense capture, bank reconciliation, and real-time financial dashboards.',
        model: 'SaaS Platform', modelColor: '#0057FF',
        features: ['Invoice & billing management', 'Expense tracking & approval', 'Bank reconciliation', 'Financial reporting suite', 'Tax computation & filing support', 'Multi-branch consolidation'],
    },
    {
        id: 'hr',
        title: 'HR & Workforce Management',
        problem: 'Manual payroll processing, paper-based leave management, and compliance documentation create HR inefficiency and legal exposure.',
        impact: 'Payroll errors, compliance gaps, and poor record management directly impact staff morale and regulatory standing.',
        approach: 'A unified HR platform managing attendance, leave, payroll, EPF/ETF, and employee lifecycle from a single system.',
        model: 'SaaS Platform', modelColor: '#0057FF',
        features: ['Payroll processing & payslips', 'Leave & attendance management', 'EPF/ETF compliance automation', 'Employee record management', 'Performance tracking', 'Multi-branch HR coordination'],
    },
    {
        id: 'retail',
        title: 'Retail & Hospitality Operations',
        problem: 'Manual order processing, disconnected inventory, and lack of sales visibility make retail and hospitality operations inefficient.',
        impact: 'Stock discrepancies, slow service, and poor sales insight reduce revenue and customer experience.',
        approach: 'An integrated POS, order management, and inventory platform with real-time multi-branch visibility.',
        model: 'SaaS Platform', modelColor: '#0057FF',
        features: ['POS terminal interface', 'Order & table management', 'Inventory tracking', 'Multi-outlet management', 'Sales reporting & analytics', 'Supplier & procurement management'],
    },
    {
        id: 'monitoring',
        title: 'Operational Monitoring & Dashboards',
        problem: 'Multi-site businesses lack consolidated real-time visibility into operations, compliance, and performance across locations.',
        impact: 'Delayed problem detection, inconsistent standards, and reactive management reduce operational quality.',
        approach: 'Real-time monitoring dashboards, inspection workflows, and KPI platforms providing centralized operational oversight.',
        model: 'SaaS or Custom', modelColor: '#7C3AED',
        features: ['Real-time performance dashboards', 'Inspection & audit forms', 'Alert & escalation workflows', 'Multi-branch KPI tracking', 'Scheduled compliance reports', 'Custom metric configuration'],
    },
    {
        id: 'custom',
        title: 'Integrated Business Systems',
        problem: 'Organizations using disconnected software face data re-entry, reporting inconsistencies, and a fragmented view of the business.',
        impact: 'Disconnected systems prevent strategic decision-making and create operational bottlenecks.',
        approach: 'Custom-built or integrated system architectures that connect finance, HR, operations, and management into a unified platform.',
        model: 'Custom or SaaS', modelColor: '#7C3AED',
        features: ['Cross-module data integration', 'Custom workflow automation', 'Unified management dashboards', 'API & system connectors', 'Role-based access control', 'Consolidated reporting'],
    },
];

export default function SolutionsPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container-max">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link><span>/</span><span>Solutions</span>
                    </div>
                    <div className="tag-dark" style={{ marginBottom: '20px' }}>Solutions</div>
                    <h1>Solutions Grouped by Business Need</h1>
                    <p>Knoweb solutions address specific operational problems. Explore by business function to find the right solution for your organization.</p>
                </div>
            </section>

            <section className="section-pad">
                <div className="container-max">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        {solutions.map((s) => (
                            <div id={s.id} key={s.id} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '40px' }}>
                                <div className="solution-detail">
                                    {/* Left */}
                                    <div>
                                        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#0A0F1E', marginBottom: '16px' }}>{s.title}</h2>
                                        <div style={{ display: 'inline-flex', alignItems: 'center', background: `${s.modelColor}15`, color: s.modelColor, fontSize: '0.75rem', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', marginBottom: '24px' }}>
                                            {s.model}
                                        </div>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '8px' }}>The Problem</div>
                                            <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.65 }}>{s.problem}</p>
                                        </div>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '8px' }}>Business Impact</div>
                                            <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.65 }}>{s.impact}</p>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '8px' }}>Our Approach</div>
                                            <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.65 }}>{s.approach}</p>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div>
                                        <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0A0F1E', marginBottom: '16px' }}>Key Capabilities</div>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                                            {s.features.map((f) => (
                                                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#374151' }}>
                                                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                                    </span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.85rem' }}>Talk to Sales</Link>
                                            <Link href="/contact" className="btn-outline" style={{ fontSize: '0.85rem' }}>Request Demo</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
