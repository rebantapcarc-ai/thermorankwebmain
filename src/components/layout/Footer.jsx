import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Link to="/" className="logo" style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.5rem', textTransform: 'uppercase' }}>
                            THERMO<span style={{ color: 'white' }}>RANK</span>
                        </Link>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                            The #1 HVAC Digital Marketing Agency. We specialize in helping HVAC companies scale their business through targeted lead generation and SEO.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services">HVAC Web Design</Link></li>
                            <li><Link to="/services">HVAC SEO</Link></li>
                            <li><Link to="/services">Local SEO & GMB</Link></li>
                            <li><Link to="/services">Lead Generation</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/results">Case Studies</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul className="footer-links">
                            <li style={{ display: 'flex', gap: '10px' }}><Mail size={18} color="var(--primary)" /> info@thermorank.com</li>
                            <li style={{ display: 'flex', gap: '10px' }}><Phone size={18} color="var(--primary)" /> (800) HVAC-LEADS</li>
                            <li style={{ display: 'flex', gap: '10px' }}><MapPin size={18} color="var(--primary)" /> Serving HVAC Business Nationwide</li>
                        </ul>
                    </div>
                </div>
                
                <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Thermo Rank Marketing. All rights reserved. Built for HVAC Growth.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
