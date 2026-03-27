import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, PhoneCall, Calendar } from 'lucide-react';

const Results = () => {
    const caseStudies = [
        {
            state: 'Texas',
            company: 'Lone Star Cool & Heat',
            before: '12 leads/mo',
            after: '84 leads/mo',
            impact: '+600% Growth',
        },
        {
            state: 'Florida',
            company: 'Sunshine State Air',
            before: '5 calls/week',
            after: '42 calls/week',
            impact: '8x Higher Volume',
        },
        {
            state: 'California',
            company: 'Golden Gate HVAC',
            before: 'Page 4 on Google',
            after: 'Rank #1 Local 3-Pack',
            impact: 'Local Dominance',
        }
    ];

    return (
        <div className="results-page">
            <header style={{ padding: '120px 0 60px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Proven HVAC <span style={{ color: 'var(--primary)' }}>Results</span></h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        We don't just talk about leads. We deliver them. Here is how we've helped HVAC companies across the US scale their operations.
                    </p>
                </div>
            </header>

            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                        {caseStudies.map((study, i) => (
                            <div key={i} className="glass" style={{ padding: '40px', borderRadius: '24px', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase' }}>{study.state}</span>
                                    <div style={{ background: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50', padding: '6px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '700' }}>
                                        {study.impact}
                                    </div>
                                </div>
                                <h3 style={{ marginBottom: '30px' }}>{study.company}</h3>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '5px' }}>Before</div>
                                        <div style={{ fontWeight: '700', textDecoration: 'line-through', opacity: '0.6' }}>{study.before}</div>
                                    </div>
                                    <div style={{ padding: '20px', background: 'rgba(255, 87, 34, 0.1)', borderRadius: '12px', border: '1px solid rgba(255, 87, 34, 0.2)' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '5px' }}>After Thermo Rank</div>
                                        <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>{study.after}</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        <TrendingUp size={16} /> SEO Ranking ↑
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        <PhoneCall size={16} /> Call Volume ↑
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ background: '#050505' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2>What Owners are Saying</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { name: 'David Miller', role: 'Owner, Miller Air', text: 'The ROI was clear within the first 60 days. We had to hire two new techs just to keep up with the calls.' },
                            { name: 'Sarah Jenkins', role: 'Operations Mgr, Blue Ridge Heating', text: 'Finally an agency that speaks our language. They know the HVAC niche better than anyone else.' },
                        ].map((t, i) => (
                            <div key={i} className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
                                <p style={{ fontSize: '1.1rem', marginBottom: '24px', fontStyle: 'italic' }}>"{t.text}"</p>
                                <div>
                                    <div style={{ fontWeight: '700' }}>{t.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="glass" style={{ padding: '60px', borderRadius: '32px', background: 'var(--bg-card)' }}>
                        <h2 style={{ marginBottom: '24px' }}>Want Results Like These?</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Let's talk about how we can grow your HVAC company in your specific city.</p>
                        <Link to="/contact" className="btn btn-primary">Book My Strategy Call</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Results;
