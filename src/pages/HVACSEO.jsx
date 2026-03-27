import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, BarChart3, TrendingUp, CheckCircle, Zap } from 'lucide-react';

const HVACSEO = () => {
    return (
        <div className="seo-page">
            <header style={{ padding: '140px 0 80px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(150px)', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '300px', height: '300px', background: 'var(--secondary)', filter: 'blur(150px)', borderRadius: '50%' }}></div>
                </div>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(138, 149, 201, 0.15)', padding: '8px 16px', borderRadius: '100px', marginBottom: '24px', border: '1px solid rgba(138, 149, 201, 0.3)' }}>
                        <Search size={16} color="var(--primary)" />
                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Top-Rated HVAC SEO Agency</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '24px', fontWeight: '900', lineHeight: 1.1 }}>
                        Dominating Organic Search <br />
                        <span style={{ color: 'var(--primary)' }}>Exclusively for HVAC Techs</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.25rem' }}>
                        Stop wasting money on leads everyone else is buying. We rank your business #1 for keywords that drive high-ticket installs and emergency repairs.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 36px' }}>Get Free SEO Audit</Link>
                        <a href="tel:+1800HVACLEADS" className="btn btn-outline" style={{ padding: '18px 36px' }}>Call Now</a>
                    </div>
                </div>
            </header>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Strategic Search Engine Optimization</h2>
                        <p style={{ color: 'var(--text-muted)' }}>We don't just "do SEO"—we engineer growth systems for HVAC market leaders.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            {
                                icon: <MapPin size={32} />,
                                title: 'Local Pack Dominance',
                                desc: 'We optimize your Google Business Profile to ensure you appear in the "Local 3-Pack" when homeowners search for urgent repair near them.'
                            },
                            {
                                icon: <BarChart3 size={32} />,
                                title: 'Keyword Intelligence',
                                desc: 'We target high-intent keywords like "Emergency AC Repair [City]" and "Best Heating Contractor [State]" to drive ready-to-buy traffic.'
                            },
                            {
                                icon: <TrendingUp size={32} />,
                                title: 'Authority Building',
                                desc: 'Through HVAC-specific content and high-value backlinks, we establish your brand as the leading authority in your service area.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="glass" style={{ padding: '40px', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
                        <div className="glass" style={{ padding: '50px', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'var(--primary)' }}></div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '32px' }}>The HVAC SEO Checklist</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Mobile-First Technical Optimization',
                                    'Service-Area Pages (Zip Code Targeting)',
                                    'Schema Markup for HVAC Contractors',
                                    'GMB Review Management Strategy',
                                    'Heatmap Tracking & Conversion Optimization',
                                    'Professional HVAC Copywriting'
                                ].map((check, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'center' }}>
                                        <CheckCircle size={20} color="var(--primary)" />
                                        <span style={{ fontWeight: '500' }}>{check}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Ranking #1 Isn't Luck. <br /><span style={{ color: 'var(--primary)' }}>It's Math.</span></h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
                                HVAC is one of the most competitive local industries. You need an agency that knows the seasonal shifts, the specific pain points of homeowners, and the technical landscape of search in 2024.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px' }}>
                                        <Zap size={24} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Instant Indexing</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>We fast-track your content to Google for faster results.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px' }}>
                                        <BarChart3 size={24} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Real-Time Tracking</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Watch your keyword rankings climb from your custom dashboard.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="glass" style={{ padding: '80px 40px', borderRadius: '32px', background: 'linear-gradient(135deg, rgba(59,74,143,0.1) 0%, rgba(14,20,51,0.1) 100%)', border: '1px solid var(--primary)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready to Own Your Zip Code?</h2>
                        <p style={{ marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                            We only work with ONE HVAC company per market. Check if your territory is still available before your competitor does.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 48px', fontSize: '1.1rem' }}>Claim My Territory</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HVACSEO;
