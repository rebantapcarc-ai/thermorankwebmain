import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Search, MapPin, Zap, PhoneCall, BarChart } from 'lucide-react';

const Services = () => {
    const serviceDetails = [
        {
            icon: <Layout size={32} />,
            title: 'Custom HVAC Web Design',
            points: [
                'Mobile-first design for techs and customers',
                'High-speed performance (Core Web Vitals)',
                'Strategic "Schedule Now" placement',
                'Custom photography of YOUR team',
            ],
            desc: 'We build websites that look like a multi-million dollar operation, even if you are just starting out. Our sites are designed to turn clicks into calls.',
            link: '/solutions/hvac-web-design',
            btnText: 'Explore Web Solutions'
        },
        {
            icon: <Search size={32} />,
            title: 'HVAC SEO Specialist',
            points: [
                'City & State level targeting',
                'Long-tail "Emergency Repair" keywords',
                'HVAC-specific content marketing',
                'Competitor analysis & dominance',
            ],
            desc: 'Get found when the AC breaks at 2 AM. We rank your business for the high-intent keywords that actually drive revenue.',
            link: '/solutions/hvac-seo',
            btnText: 'View SEO Packages'
        },
        {
            icon: <MapPin size={32} />,
            title: 'GMB & Local SEO',
            points: [
                'Google Business Profile optimization',
                'Local citation building',
                'Review management strategy',
                'Google Maps "3-Pack" placement',
            ],
            desc: 'Local search is where HVAC jobs are won. We make sure your business is the first one people see on the map.',
            link: '/solutions/hvac-seo',
            btnText: 'Dominating Local Search'
        },
        {
            icon: <PhoneCall size={32} />,
            title: 'Lead Generation Engines',
            points: [
                'Direct-response landing pages',
                'Pay-per-click management',
                'Lead tracking & attribution',
                'Instant call-back technology',
            ],
            desc: 'Stop buying shared leads from HomeAdvisor. We build YOUR OWN lead generation machine that you own and control.',
            link: '/solutions/hvac-lead-gen',
            btnText: 'Claim Your Leads'
        }
    ];

    return (
        <div className="services-page">
            {/* Header */}
            <header style={{ padding: '120px 0 60px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '20px' }}>Our HVAC <span style={{ color: 'var(--primary)' }}>Growth</span> Services</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        We don't offer generic marketing. We offer specialized growth systems for HVAC businesses looking to dominate their local market.
                    </p>
                </div>
            </header>

            {/* Services Grid */}
            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>
                        {serviceDetails.map((service, i) => (
                            <div key={i} className="glass" style={{ padding: '60px', borderRadius: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                                    <div style={{ color: 'var(--primary)', marginBottom: '24px' }}>{service.icon}</div>
                                    <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '24px' }}>{service.title}</h2>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>{service.desc}</p>
                                    <Link to={service.link || "/contact"} className="btn btn-primary">{service.btnText || "Request Details"}</Link>
                                </div>
                                <div className="glass" style={{ order: i % 2 === 0 ? 2 : 1, padding: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px' }}>
                                    <h4 style={{ marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>What's Included:</h4>
                                    <ul style={{ listStyle: 'none' }}>
                                        {service.points.map((point, j) => (
                                            <li key={j} style={{ display: 'flex', gap: '15px', marginBottom: '16px', color: 'var(--text-main)' }}>
                                                <Zap size={20} color="var(--primary)" /> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section style={{ background: '#050505' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2>The Thermo Rank Process</h2>
                        <p style={{ color: 'var(--text-muted)' }}>How we take your HVAC business to the top.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                        {[
                            { step: '01', title: 'Audit', desc: 'We analyze your current site and local competition.' },
                            { step: '02', title: 'Strategy', desc: 'We build a custom roadmap for SEO and web growth.' },
                            { step: '03', title: 'Launch', desc: 'We deploy your high-converting assets.' },
                            { step: '04', title: 'Scale', desc: 'We optimize and drive leads month after month.' },
                        ].map((step, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(59, 74, 143, 0.2)', marginBottom: '-30px' }}>{step.step}</div>
                                <h3 style={{ marginBottom: '15px', position: 'relative' }}>{step.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Ready to Get Your Phone Ringing?</h2>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
                        Get a Free HVAC Marketing Audit
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
