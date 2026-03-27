import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'HVAC SEO', path: '/solutions/hvac-seo' },
        { name: 'Web Design', path: '/solutions/hvac-web-design' },
        { name: 'Lead Gen', path: '/solutions/hvac-lead-gen' },
        { name: 'Results', path: '/results' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    THERMO<span>RANK</span>
                </Link>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    )
                    )}
                    <a href="tel:+1800HVACLEADS" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                        <Phone size={16} /> (800) HVAC-LEADS
                    </a>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                        Free Audit
                    </Link>
                </div>

                <div className="md-show" style={{ display: 'none' }}>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'white' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            
            {isOpen && (
                <div className="mobile-menu glass" style={{ position: 'absolute', top: '80px', left: 0, right: 0, padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'center' }}>
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="nav-link" style={{ fontSize: '1.2rem' }}>
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>Free Audit</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
