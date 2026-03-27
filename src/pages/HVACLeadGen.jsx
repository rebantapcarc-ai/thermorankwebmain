import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Smartphone, Zap, ShieldCheck, CheckCircle, BarChart3 } from 'lucide-react';

const HVACWebDesign = () => {
    return (
        <div className="web-design-page">
            <header style={{ padding: '140px 0 80px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '15%', right: '10%', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(180px)', borderRadius: '50%' }}></div>
                </div>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(138, 149, 201, 0.1)', padding: '8px 16px', borderRadius: '100px', marginBottom: '24px', border: '1px solid rgba(138, 149, 201, 0.2)' }}>
                        <Layout size={16} color="var(--primary)" />
                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Premium HVAC Web Solutions</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '24px', fontWeight: '900', lineHeight: 1.1 }}>
                        Websites That Sell While <br />
                        <span style={{ color: 'var(--primary)' }}>Your Techs Are In The Field</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.25rem' }}>
                        Your website should be your #1 salesperson. We build hyper-fast, mobile-optimized sites designed specifically to turn frantic homeowners into high-value HVAC jobs.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 36px' }}>View Demo Site</Link>
                        <Link to="/contact" className="btn btn-outline" style={{ padding: '18px 36px' }}>Start My Build</Link>
                    </div>
                </div>
            </header>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        {[
                            {
                                icon: <Smartphone size={32} />,
                                title: 'Mobile-Extreme Performance',
                                desc: 'Most homeowners call you while on their phone. Our sites load in under 2 seconds on 4G networks to ensure you never lose a lead to a slow load.'
                            },
                            {
                                icon: <Zap size={32} />,
                                title: 'Conversion-Led Layouts',
                                desc: 'Strategic "Click-to-Call" buttons and booking forms placed exactly where customers expect them. Optimized for emergency repair volume.'
                            },
                            {
                                icon: <ShieldCheck size={32} />,
                                title: 'Instated Trust Signals',
                                desc: 'Automatic integration of your licenses, insurance, state certifications, and real-time reviews from across the web.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
                                <div style={{ color: 'var(--primary)', marginBottom: '24px' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '16px' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ background: '#121940', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Designed for The <br /><span style={{ color: 'var(--primary)' }}>HVAC Reality.</span></h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
                                Homeowners don't browse HVAC sites for fun. They are usually stressed and in a hurry. Our designs focus on "Quick Wins"—getting them the information they need to trust you and call you instantly.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    '100% Custom HVAC Content Copywriting',
                                    'Service-Specific Landing Pages',
                                    'Real-Time Booking Integration',
                                    'ADA & Accessibility Compliance',
                                    'SSL & Advanced Security Protocols'
                                ].map((check, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                                        <CheckCircle size={20} color="var(--primary)" />
                                        <span>{check}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass" style={{ padding: '30px', borderRadius: '24px', position: 'relative' }}>
                            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', marginBottom: '20px', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                    <span style={{ fontWeight: '700' }}>Site Performance Score</span>
                                    <span style={{ color: 'var(--primary)', fontWeight: '800' }}>98/100</span>
                                </div>
                                <div style={{ height: '8px', width: '100%', background: '#222C5E', borderRadius: '4px' }}>
                                    <div style={{ height: '100%', width: '98%', background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)', borderRadius: '4px' }}></div>
                                </div>
                            </div>
                            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                    <span style={{ fontWeight: '700' }}>Mobile Conversion Rate</span>
                                    <span style={{ color: 'var(--secondary)', fontWeight: '800' }}>14.2%</span>
                                </div>
                                <div style={{ height: '8px', width: '100%', background: '#222C5E', borderRadius: '4px' }}>
                                    <div style={{ height: '100%', width: '85%', background: 'linear-gradient(90deg, var(--secondary) 0%, var(--primary) 100%)', borderRadius: '4px' }}></div>
                                </div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px' }}>*Industry average is 3.5%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Is Your Website Costing You Jobs?</h2>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 50px', fontSize: '1.2rem' }}>Audit My Current Site</Link>
                </div>
            </section>
        </div>
    );
};

export default HVACWebDesign;
