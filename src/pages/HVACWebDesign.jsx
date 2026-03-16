import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Zap, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const HVACLeadGen = () => {
    return (
        <div className="lead-gen-page">
            <header style={{ padding: '140px 0 80px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'var(--primary)', filter: 'blur(200px)', borderRadius: '50%' }}></div>
                </div>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(211, 47, 47, 0.1)', padding: '8px 16px', borderRadius: '100px', marginBottom: '24px', border: '1px solid rgba(211, 47, 47, 0.2)' }}>
                        <PhoneCall size={16} color="var(--primary)" />
                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Exclusive Lead Systems</span>
                    </div>
                    <h1 style={{ fontSize: '4rem', marginBottom: '24px', fontWeight: '900', lineHeight: 1.1 }}>
                        Own Your Leads. <br />
                        <span style={{ color: 'var(--primary)' }}>Stop Sharing with Competitors.</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.25rem' }}>
                        Stop fighting for the same HomeAdvisor leads. We build a lead generation machine that delivers exclusive, high-intent HVAC calls directly to your dispatcher.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 36px' }}>Start My Lead Audit</Link>
                        <Link to="/results" className="btn btn-outline" style={{ padding: '18px 36px' }}>See Our ROI</Link>
                    </div>
                </div>
            </header>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            {
                                icon: <Zap size={32} />,
                                title: 'Direct-Response PPC',
                                desc: 'High-performance Google Ads campaigns that only target people with "AC broken" or "No heat" emergencies right now.'
                            },
                            {
                                icon: <BarChart3 size={32} />,
                                title: 'ROI-Obsessed Tracking',
                                desc: 'We track every penny of ad spend down to the recorded phone call. Know exactly where your best customers are coming from.'
                            },
                            {
                                icon: <Users size={32} />,
                                title: 'Market Share Dominance',
                                desc: 'Systematically push competitors out of the top ad spots in your primary zip codes for total local dominance.'
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

            <section style={{ background: '#080808', padding: '100px 0' }}>
                <div className="container">
                    <div className="glass" style={{ padding: '60px', borderRadius: '32px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Why Best-In-Class HVAC Companies <br />Choose Exclusive Leads</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
                            Shared leads are a race to the bottom on price. Exclusive leads are a race to the top of your revenue goals. 
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', textAlign: 'left' }}>
                            <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>The Problem with Aggregators:</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><span style={{ color: '#D32F2F' }}>✘</span> 5 other techs call them first</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><span style={{ color: '#D32F2F' }}>✘</span> Price focused, low margin jobs</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><span style={{ color: '#D32F2F' }}>✘</span> You pay even if they don't answer</li>
                                </ul>
                            </div>
                            <div style={{ padding: '30px', background: 'rgba(211, 47, 47, 0.05)', borderRadius: '20px', border: '1px solid rgba(211, 47, 47, 0.2)' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>The Thermo Rank Advantage:</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><span style={{ color: '#4CAF50' }}>✔</span> 100% Exclusive to YOUR brand</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><span style={{ color: '#4CAF50' }}>✔</span> High-ticket system replacement focus</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><span style={{ color: '#4CAF50' }}>✔</span> Full lead recording and qualifying</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '32px' }}>Fill Your Calendar. <br />Scale Your Fleet.</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
                            We don't just send leads; we send opportunities to grow your business. Build a predictable revenue engine today.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 60px', fontSize: '1.1rem' }}>
                            Get My Growth Strategy <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HVACLeadGen;
