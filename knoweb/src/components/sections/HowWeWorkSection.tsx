'use client';

const steps = [
    { num: '01', title: 'Discovery & Assessment', desc: 'We understand your current operations, pain points, and business goals before recommending any solution.' },
    { num: '02', title: 'Solution Fit', desc: 'We match you with the right engagement model — SaaS platform, custom build, or a hybrid approach.' },
    { num: '03', title: 'Demo & Proposal', desc: 'Live demonstration of the proposed solution, followed by a clear, structured proposal with pricing.' },
    { num: '04', title: 'Implementation & Setup', desc: 'Systematic deployment, configuration, and data migration handled by our implementation team.' },
    { num: '05', title: 'Training & Adoption', desc: 'Role-based training programs ensure your team adopts the system confidently from day one.' },
    { num: '06', title: 'Ongoing Support & Growth', desc: 'Structured support, SLA-based response, and a long-term growth partnership beyond go-live.' },
];

export default function HowWeWorkSection() {
    return (
        <section className="section-pad surface-light">
            <div className="container-max">
                <div className="section-header centered">
                    <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Our Process</div>
                    <h2>How We Work</h2>
                    <p>A structured, consultative engagement process from first conversation to long-term partnership.</p>
                </div>

                <div className="grid-3">
                    {steps.map((step, idx) => (
                        <div
                            key={step.num}
                            style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '28px', position: 'relative', transition: 'all 0.25s' }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,87,255,0.3)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,87,255,0.08)';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '3rem', fontWeight: 900, color: 'rgba(0,87,255,0.06)', position: 'absolute', top: '16px', right: '20px', lineHeight: 1 }}>
                                {step.num}
                            </div>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg,#0057FF,#00C6FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#fff', fontWeight: 800, fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>
                                {idx + 1}
                            </div>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0A0F1E', marginBottom: '10px' }}>{step.title}</h3>
                            <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.65 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
