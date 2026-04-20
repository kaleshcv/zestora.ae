import { Link } from 'react-router-dom';
import PageHeader, { CTASection } from '../components/PageHeader';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function About() {
  useScrollAnimation();
  return (
    <>
      <PageHeader label="About Us" title="Get to Know" titleHighlight="ZESTORA" desc="Discover who we are, what we stand for, and how we're shaping the future of AI in the region." />

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content animate-on-scroll">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                ZESTORA ARTIFICIAL INTELLIGENCE DEVELOPING SERVICES LLC is an Abu Dhabi based
                technology company specializing in artificial intelligence development, intelligent
                software services, and digital transformation solutions.
              </p>
              <p className="section-subtitle" style={{ maxWidth: '100%', marginTop: 16 }}>
                We partner with businesses across various sectors to help them harness the power of AI,
                automate complex processes, extract valuable insights from data, and build intelligent
                systems that drive growth and operational excellence.
              </p>
              <div className="about-summary" style={{ marginTop: 32 }}>
                <div className="about-summary-item">
                  <svg className="about-summary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span className="about-summary-text"><strong>Legal Name:</strong> ZESTORA ARTIFICIAL INTELLIGENCE DEVELOPING SERVICES LLC</span>
                </div>
                <div className="about-summary-item">
                  <svg className="about-summary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="about-summary-text"><strong>Headquarters:</strong> Abu Dhabi, United Arab Emirates</span>
                </div>
                <div className="about-summary-item">
                  <svg className="about-summary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span className="about-summary-text"><strong>Focus:</strong> AI Development, Intelligent Software, Automation &amp; Analytics</span>
                </div>
              </div>
            </div>
            <div className="about-values animate-on-scroll">
              {[
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: 'Innovation', desc: 'We stay ahead of the curve by adopting the latest AI research and technologies.' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Reliability', desc: 'Every solution is built for performance, stability, and long-term value.' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, title: 'Quality', desc: 'Rigorous standards across design, development, and delivery.' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Collaboration', desc: 'We work as an extension of your team, ensuring alignment at every stage.' },
              ].map((v) => (
                <div className="about-value-card" key={v.title}>
                  <div className="about-value-icon">{v.icon}</div>
                  <h4 className="about-value-title">{v.title}</h4>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-mission">
        <div className="container">
          <div className="vm-grid animate-on-scroll">
            <div className="vm-card vision">
              <span className="vm-card-label">Our Vision</span>
              <h3 className="vm-card-title">To be a leading force in AI-driven digital transformation across the Middle East and beyond.</h3>
              <p className="vm-card-text">We envision a world where businesses of all sizes harness the power of artificial intelligence to operate smarter, faster, and more efficiently.</p>
            </div>
            <div className="vm-card mission">
              <span className="vm-card-label">Our Mission</span>
              <h3 className="vm-card-title">To deliver intelligent, scalable AI solutions that solve real business challenges.</h3>
              <p className="vm-card-text">We partner with businesses to understand their unique needs and deliver custom AI solutions that create measurable impact.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
