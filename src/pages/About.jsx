import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <header style={{ padding: '120px 0 60px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '20px' }}>The <span style={{ color: 'var(--primary)' }}>HVAC</span> Specialized Agency</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        Thermo Rank was founded with one goal: to provide HVAC contractors with a marketing partner who actually understands their business.
                    </p>
                </div>
            </header>

            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: '24px' }}>Born in the <span style={{ color: 'var(--primary)' }}>Trade</span>.</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.1rem' }}>
                                We didn't start as a marketing agency. We started by helping a local HVAC company in Texas get their phone ringing. We saw how generalist agencies were overcharging and under-delivering because they didn't understand the niche.
                            </p>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
                                Today, Thermo Rank is the leading digital marketing agency for HVAC companies across the United States. We've scaled from one local client to helping contractors in 42 states dominate their city.
                            </p>
                            <div className="glass" style={{ padding: '30px', borderRadius: '20px', borderLeft: '4px solid var(--primary)' }}>
                                <p style={{ fontStyle: 'italic' }}>"We don't work with plumbers. We don't work with roofers. We work with HVAC. That's it."</p>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {[
                                { icon: <Shield size={32} />, title: 'Exclusive', desc: 'One client per territory.' },
                                { icon: <Clock size={32} />, title: 'Fast', desc: 'Leads within 30 days.' },
                                { icon: <Award size={32} />, title: 'Proven', desc: '50,000+ leads generated.' },
                                { icon: <Users size={32} />, title: 'Partners', desc: 'We act as your marketing team.' },
                            ].map((item, i) => (
                                <div key={i} className="glass" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
                                    <div style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                    <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
