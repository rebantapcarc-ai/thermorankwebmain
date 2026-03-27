import React, { useState } from 'react';
import { Phone, Mail, CheckCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [techs, setTechs] = useState('1-3');

    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        state: '',
        phone: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setLoading(true);
        setStatus('');
        
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    company: formData.company,
                    phone: formData.phone,
                    state: formData.state,
                    techs: techs
                }),
            });
            
            if (res.ok) {
                setStatus('success');
            } else {
                const errorData = await res.json().catch(() => ({}));
                console.error('Backend Error:', errorData);
                setStatus('error');
            }
        } catch (error) {
            console.error('Network Error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <header style={{ padding: '120px 0 60px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Get Your Free <span style={{ color: 'var(--primary)' }}>Audit</span></h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Ready to scale your HVAC business? Fill out the form below to claim your exclusive territory and get a free marketing audit.
                    </p>
                </div>
            </header>

            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
                        {/* Form */}
                        <div className="glass" style={{ padding: '40px', borderRadius: '32px' }}>
                            {status === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <CheckCircle size={64} color="#4CAF50" style={{ marginBottom: '20px' }} />
                                    <h3>Audit Requested!</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>An HVAC marketing specialist will contact you within 24 hours.</p>
                                </div>
                            ) : (
                                <>
                                    {status === 'error' && (
                                        <div style={{ background: 'rgba(211,47,47,0.1)', border: '1px solid #ff5252', padding: '20px', borderRadius: '12px', marginBottom: '24px', color: '#ff5252', textAlign: 'center' }}>
                                            <p style={{ fontWeight: '700', marginBottom: '10px' }}>Failed to send your request.</p>
                                            <button 
                                                onClick={() => handleSubmit()} 
                                                style={{ background: '#ff5252', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
                                            >
                                                Resend Email
                                            </button>
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Full Name</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Company Name</label>
                                            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme HVAC" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>State</label>
                                        <select name="state" value={formData.state} onChange={handleChange} required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }}>
                                            <option value="" style={{ background: '#1a1a1a', color: 'white' }}>Select State</option>
                                            {[
                                                "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
                                                "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
                                                "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
                                                "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
                                                "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
                                            ].map(state => (
                                                <option key={state} value={state} style={{ background: '#0E1433', color: 'white' }}>{state}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Phone Number</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Email Address</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@acmehvac.com" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Message</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your business goals..." required rows="4" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white', fontFamily: 'inherit' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '12px', fontSize: '0.9rem' }}>Roughly how many techs do you have?</label>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                                            {['1-3', '4-10', '11+'].map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => setTechs(option)}
                                                    style={{
                                                        padding: '12px',
                                                        borderRadius: '10px',
                                                        border: '1px solid',
                                                        borderColor: techs === option ? 'var(--primary)' : 'var(--border)',
                                                        background: techs === option ? 'rgba(59, 74, 143, 0.1)' : 'rgba(255,255,255,0.03)',
                                                        color: techs === option ? 'var(--primary)' : 'var(--text-muted)',
                                                        fontWeight: techs === option ? '700' : '500',
                                                        transition: 'all 0.2s ease',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    {option} Techs
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                        disabled={loading}
                                        style={{ padding: '16px', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                                    >
                                        {loading ? 'Sending Request...' : 'Request My Free Audit'}
                                    </button>
                                </form>
                            </>
                        )}
                        </div>

                        {/* Info */}
                        <div>
                            <h2 style={{ marginBottom: '32px' }}>Contact Information</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: 'var(--primary)', padding: '15px', borderRadius: '12px', height: 'fit-content' }}>
                                        <Phone size={24} color="white" />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Call Us Directly</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>Speak with a strategist today.</p>
                                        <a href="tel:+1800HVACLEADS" style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)' }}>(800) HVAC-LEADS</a>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: 'var(--primary)', padding: '15px', borderRadius: '12px', height: 'fit-content' }}>
                                        <Mail size={24} color="white" />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Email Us</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>We respond within 24 hours.</p>
                                        <a href="mailto:info@thermorank.com" style={{ fontSize: '1.2rem', fontWeight: '700', color: 'white' }}>info@thermorank.com</a>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: 'var(--primary)', padding: '15px', borderRadius: '12px', height: 'fit-content' }}>
                                        <MessageSquare size={24} color="white" />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Text Us</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>For quick questions.</p>
                                        <a href="sms:+1800HVACLEADS" style={{ fontSize: '1.2rem', fontWeight: '700', color: 'white' }}>Send a Text</a>
                                    </div>
                                </div>
                            </div>

                            <div className="glass" style={{ padding: '30px', marginTop: '40px', borderRadius: '20px', background: 'rgba(138, 149, 201, 0.05)' }}>
                                <h4 style={{ marginBottom: '15px' }}>Exclusive Territory Check</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    We only work with ONE HVAC company per zip code. Fill out the form to see if your area is still available for dominance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
