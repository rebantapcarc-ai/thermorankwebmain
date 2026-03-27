import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: "Audit Phase",
            price: "FREE",
            description: "To see if your territory is still available.",
            features: [
                "Full SEO Audit of your current site",
                "Competitor analysis",
                "Local Keyword research",
                "Marketing Roadmap report"
            ],
            cta: "Request Free Audit",
            highlight: false
        },
        {
            name: "Dominance Plan",
            price: "Custom",
            description: "For high-growth HVAC teams looking to scale.",
            features: [
                "Exclusive territory rights",
                "Customized Lead Engines",
                "GMB & Local SEO management",
                "Dedicated Account Manager",
                "Monthly Performance reporting"
            ],
            cta: "Start My Strategy Call",
            highlight: true,
            badge: "Best Value"
        },
        {
            name: "Search Only",
            price: "$999+",
            description: "For local repair volume only.",
            features: [
                "Google Business focus",
                "Local citation builds",
                "Review strategy integration",
                "3-Pack tracking"
            ],
            cta: "Inquire Now",
            highlight: false
        }
    ];

    return (
        <div className="pricing-page">
            <header style={{ padding: '120px 0 60px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '20px' }}>Specialized <span style={{ color: 'var(--primary)' }}>HVAC</span> Pricing</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        No hidden fees. Just results. Choose the roadmap that fits your business stage.
                    </p>
                </div>
            </header>

            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="glass"
                                style={{ 
                                    position: 'relative', 
                                    padding: '50px 40px', 
                                    borderRadius: '32px', 
                                    border: '1px solid',
                                    borderColor: plan.highlight ? 'var(--primary)' : 'var(--border)',
                                    transform: plan.highlight ? 'scale(1.05)' : 'none',
                                    zIndex: plan.highlight ? 10 : 1,
                                    background: plan.highlight ? 'rgba(59, 74, 143, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {plan.highlight && (
                                    <div style={{ 
                                        position: 'absolute', 
                                        top: '-15px', 
                                        left: '50%', 
                                        transform: 'translateX(-50%)', 
                                        background: 'var(--primary)', 
                                        color: 'white', 
                                        padding: '5px 20px', 
                                        borderRadius: '100px', 
                                        fontSize: '0.8rem', 
                                        fontWeight: '800',
                                        letterSpacing: '1px'
                                    }}>
                                        {plan.badge}
                                    </div>
                                )}

                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{plan.name}</h3>
                                    <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
                                        <span style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)' }}>{plan.price}</span>
                                        <span style={{ marginLeft: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>/mo</span>
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1rem' }}>{plan.description}</p>

                                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                                        {plan.features.map((feature, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '15px', marginBottom: '16px', fontSize: '0.95rem' }}>
                                                <Check size={18} color="var(--primary)" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to="/contact" className={plan.highlight ? "btn btn-primary" : "btn btn-outline"} style={{ width: '100%', padding: '16px' }}>
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
