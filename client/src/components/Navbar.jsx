import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMobile = () => {
    setMobileOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  const isHome = location.pathname === '/';

  const navItems = isHome
    ? [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Industries', href: '#industries' },
        { label: 'Approach', href: '#approach' },
        { label: 'Technology', href: '#tech-stack' },
        { label: 'Testimonials', href: '#testimonials' },
      ]
    : [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'Industries', to: '/industries' },
        { label: 'Contact', to: '/contact' },
      ];

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const offset = document.getElementById('navbar')?.offsetHeight || 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const isActive = (item) => {
    if (item.to) return location.pathname === item.to;
    return false;
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container">
          <Link to="/" className="nav-logo">
            ZESTORA
          </Link>

          <div className="nav-links">
            {navItems.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} className={isActive(item) ? 'active' : ''}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} onClick={(e) => handleAnchorClick(e, item.href)}>
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="nav-actions">
            {isHome ? (
              <>
                <a href="#contact" className="btn btn-secondary" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact Us</a>
                <a href="#contact" className="btn btn-primary" onClick={(e) => handleAnchorClick(e, '#contact')}>Get Started</a>
              </>
            ) : (
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
            )}
          </div>

          <button
            className={`mobile-toggle${mobileOpen ? ' active' : ''}`}
            onClick={toggleMobile}
            aria-label="Toggle navigation menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' active' : ''}`}>
        {navItems.map((item) =>
          item.to ? (
            <Link key={item.label} to={item.to}>{item.label}</Link>
          ) : (
            <a key={item.label} href={item.href} onClick={(e) => { handleAnchorClick(e, item.href); toggleMobile(); }}>
              {item.label}
            </a>
          )
        )}
        {isHome ? (
          <a href="#contact" className="btn btn-primary" onClick={(e) => { handleAnchorClick(e, '#contact'); toggleMobile(); }}>Contact Us</a>
        ) : (
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        )}
      </div>
    </>
  );
}
