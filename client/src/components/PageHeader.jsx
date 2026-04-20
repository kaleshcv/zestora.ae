import { Link } from 'react-router-dom';

export default function PageHeader({ label, title, titleHighlight, desc }) {
  return (
    <section className="page-header">
      <div className="bg-glow bg-glow-purple"></div>
      <div className="container">
        {label && <span className="section-label">{label}</span>}
        <h1 className="page-header-title">
          {title} {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
        </h1>
        {desc && <p className="page-header-desc">{desc}</p>}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="bg-grid"></div>
      <div className="bg-glow bg-glow-purple"></div>
      <div className="cta-content">
        <div className="container animate-on-scroll">
          <span className="section-label">Ready to Transform?</span>
          <h2 className="section-title">Start Your AI Journey <span className="gradient-text">Today</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
            No upfront costs. No complex commitments. Let's discuss how AI can accelerate your business growth.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link to="/services" className="btn btn-secondary">Explore Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
