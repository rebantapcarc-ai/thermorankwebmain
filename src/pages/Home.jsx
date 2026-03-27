import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, BarChart3, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import LiquidEther from '../components/ui/LiquidEther';
import TextPressure from '../components/ui/TextPressure';
import ScrollFloat from '../components/ui/ScrollFloat';

const Home = () => {
    const stats = [
        { label: 'States Served', value: '42', icon: <Globe size={24} /> },
        { label: 'Best return on investment option', value: 'ROI', icon: <TrendingUp size={24} /> },
        { label: 'ROI Guarantee', value: '100%', icon: <CheckCircle size={24} /> },
    ];

    const services = [
        { 
            title: 'Custom HVAC Web Design', 
            desc: 'High-converting websites that turn local traffic into booked appointments.',
            link: '/services'
        },
        { 
            title: 'HVAC-Specific SEO', 
            desc: 'Dominating local search results so your phone rings when customers need AC repair.',
            link: '/services'
        },
        { 
            title: 'GMB Management', 
            desc: 'Putting your business on the map. Literally. We manage your Google Business Profile for maximum calls.',
            link: '/services'
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero" style={{ 
                padding: '120px 0 80px', 
                textAlign: 'center', 
                position: 'relative',
                overflow: 'hidden',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                    <LiquidEther
                        colors={['#0E1433', '#222C5E', '#3B4A8F', '#8A95C9', '#EEF1FA']}
                        mouseForce={35}
                        cursorSize={130}
                        isViscous
                        viscous={25}
                        iterationsViscous={32}
                        iterationsPoisson={40}
                        resolution={0.6}
                        isBounce={false}
                        autoDemo
                        autoSpeed={0.8}
                        autoIntensity={4.0}
                        takeoverDuration={0.3}
                        autoResumeDelay={2000}
                        autoRampDuration={1.0}
                    />
                </div>
                <div className="container fade-in" style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', display: 'block' }}>
                        EXCLUSIVELY FOR HVAC BUSINESSES
                    </span>
                    
                    <div className="hero-text-container" style={{ position: 'relative', height: 'clamp(100px, 20vw, 200px)', marginBottom: '20px', width: '100%', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TextPressure
                            text="THERMORANK"
                            flex
                            alpha={false}
                            stroke
                            width
                            weight
                            italic={false}
                            textColor="#3B4A8F"
                            strokeColor="#151D42"
                            minFontSize={window.innerWidth < 768 ? 40 : 80}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                            Start My Free HVAC Marketing Audit
                        </Link>
                        <a href="tel:+1800HVACLEADS" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                             <Phone size={20} /> (800) HVAC-LEADS
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section style={{ padding: '40px 0', borderY: '1px solid var(--border)', background: 'var(--bg-card)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                        {stats.map((stat, i) => (
                            <ScrollFloat key={i} delay={i * 100}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ color: 'var(--accent-cream)', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                                    <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-cream)' }}>{stat.value}</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{stat.label}</div>
                                </div>
                            </ScrollFloat>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us / Niche Focus */}
            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
                        <ScrollFloat delay={0}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Why Work With Generalists? We Speak <span style={{ color: 'var(--primary)' }}>HVAC</span>.</h2>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                                    Most agencies don't know the difference between a heat pump and a furnace. We do. At Thermo Rank, we only work with HVAC contractors. We know the seasons, the keywords, and exactly what makes a homeowner click "Request Quote."
                                </p>
                                <ul style={{ marginBottom: '40px' }}>
                                    <li style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                                        <CheckCircle color="var(--primary)" /> 
                                        <span>Exclusive Territories — We don't work with your competitors.</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                                        <CheckCircle color="var(--primary)" /> 
                                        <span>No Long-Term Contracts — We earn your business every month.</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                                        <CheckCircle color="var(--primary)" /> 
                                        <span>Transparent Reporting — Real-time call & lead tracking.</span>
                                    </li>
                                </ul>
                                <Link to="/about" className="btn btn-outline">Learn Our HVAC Strategy</Link>
                            </div>
                        </ScrollFloat>
                        <ScrollFloat delay={200}>
                            <div className="glass" style={{ padding: '40px', borderRadius: '24px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--primary)', padding: '10px 20px', borderRadius: '12px', fontWeight: '700' }}>
                                    HVAC EXCLUSIVE
                                </div>
                                <h3 style={{ marginBottom: '20px' }}>Dominate Your Local Market</h3>
                                <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
                                    "Since partnering with Thermo Rank, our calls have increased by 300%. The leads are high-quality and local. Finally, an agency that gets it!"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#333', borderRadius: '50%' }}></div>
                                    <div>
                                        <div style={{ fontWeight: '700' }}>Mike Stevens</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Owner, Comfort Air Solutions</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFloat>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section style={{ background: '#121940' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2>The HVAC Growth Toolkit</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Everything you need to dominate your city.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {services.map((service, i) => (
                            <ScrollFloat key={i} delay={i * 150}>
                                <div className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--border)', height: '100%' }}>
                                    <h3 style={{ marginBottom: '20px' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>{service.desc}</p>
                                    <Link to={service.link} style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        Learn more <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </ScrollFloat>
                        ))}
                    </div>
                </div>
            </section>

            {/* States Served */}
            <section>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '40px' }}>Helping HVAC Businesses Grow Nationwide</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
                        We serve HVAC contractors across 42 states in the US. From local mom-and-pop shops to multi-state operations, we help you scale.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                        {['Texas', 'Florida', 'California', 'Arizona', 'Georgia', 'North Carolina', 'Ohio', 'Michigan', 'Virginia', 'New Jersey'].map(state => (
                            <div key={state} className="glass" style={{ padding: '10px 20px', borderRadius: '100px', fontSize: '0.9rem', border: '1px solid var(--border)' }}>
                                {state}
                            </div>
                        ))}
                        <div style={{ padding: '10px 20px', color: 'var(--primary)', fontWeight: '600' }}>+ 32 More States</div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <ScrollFloat delay={100}>
                        <div className="glass" style={{ padding: '80px 40px', borderRadius: '32px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(59,74,143,0.1) 0%, rgba(14,20,51,0.1) 100%)', border: '1px solid var(--primary)' }}>
                            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Ready to Scale Your HVAC Business?</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                                Claim your exclusive territory today and get a free marketing audit. No pressure, just a plan to get you more booked jobs.
                            </p>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
                                Claim My Exclusive Territory
                            </Link>
                        </div>
                    </ScrollFloat>
                </div>
            </section>
        </div>
    );
};

export default Home;
