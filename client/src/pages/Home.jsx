import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <HeroSection />
      <TrustedSection />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ApproachSection />
      <TechStackSection />
      <CaseStudySection />
      <HeyBoboSection />
      <ContactSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="bg-grid"></div>
      <div className="bg-glow bg-glow-purple"></div>
      <div className="bg-glow bg-glow-blue"></div>
      <div className="container">
        <div className="hero-content animate-on-scroll">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            ZESTORA ARTIFICIAL INTELLIGENCE DEVELOPING SERVICES
          </div>
          <h1 className="hero-title">
            Intelligent AI Solutions.<br />
            <span className="gradient-text">Digital Transformation.</span>
          </h1>
          <p className="hero-subtitle">
            We build cutting-edge artificial intelligence solutions that empower businesses
            to automate processes, unlock data-driven insights, and accelerate digital
            transformation at scale.
          </p>
          <div className="hero-location">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Abu Dhabi, United Arab Emirates
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-card">
              <div className="hero-code">
                <span className="comment">// Empowering businesses with AI</span><br />
                <span className="keyword">const</span> zestora = {'{'}<br />
                &nbsp;&nbsp;name: <span className="string">"ZESTORA AI Services"</span>,<br />
                &nbsp;&nbsp;location: <span className="string">"Abu Dhabi, UAE"</span>,<br />
                &nbsp;&nbsp;expertise: [<span className="string">"AI"</span>, <span className="string">"ML"</span>, <span className="string">"NLP"</span>, <span className="string">"Computer Vision"</span>],<br />
                &nbsp;&nbsp;<span className="func">transform</span>: (business) =&gt; business.<span className="func">evolve</span>()<br />
                {'}'};<br /><br />
                zestora.<span className="func">transform</span>(<span className="string">"your-business"</span>);<br />
                <span className="comment">// → Ready for the future ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedSection() {
  const items = [
    { icon: '🏥', label: 'Healthcare' },
    { icon: '🏦', label: 'Finance' },
    { icon: '🛒', label: 'Retail' },
    { icon: '🏗️', label: 'Real Estate' },
    { icon: '🏛️', label: 'Government' },
    { icon: '🚚', label: 'Logistics' },
    { icon: '🎓', label: 'Education' },
    { icon: '⚡', label: 'Energy' },
  ];
  const doubled = [...items, ...items];
  return (
    <section className="trusted-section">
      <div className="container">
        <div className="trusted-label">Trusted Across Industries</div>
      </div>
      <div className="trusted-logos-track">
        <div className="trusted-logos">
          {doubled.map((item, i) => (
            <div className="trusted-logo-item" key={i}>
              <span className="trusted-logo-icon">{item.icon}</span> {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content animate-on-scroll">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Building the Future with <span className="gradient-text">Artificial Intelligence</span></h2>
            <p className="section-subtitle">
              ZESTORA ARTIFICIAL INTELLIGENCE DEVELOPING SERVICES LLC is an Abu Dhabi based
              AI company specializing in intelligent software development. We help businesses
              improve operational efficiency, automate workflows, and make smarter decisions
              through advanced AI and data-driven solutions.
            </p>
            <div className="about-summary">
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
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: 'Innovation', desc: 'We stay ahead of the curve by adopting the latest AI research and technologies, ensuring our clients receive forward-thinking solutions.' },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Reliability', desc: 'Every solution we deliver is built for performance, stability, and long-term value, giving our clients full confidence in their investment.' },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, title: 'Quality', desc: 'We maintain rigorous standards across design, development, and delivery, ensuring every project meets and exceeds expectations.' },
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
  );
}

function VisionMissionSection() {
  return (
    <section className="section vision-mission" id="vision">
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">Vision &amp; Mission</span>
          <h2 className="section-title">Where We're Headed. <span className="gradient-text">Why We Exist.</span></h2>
        </div>
        <div className="vm-grid animate-on-scroll">
          <div className="vm-card vision">
            <span className="vm-card-label">Our Vision</span>
            <h3 className="vm-card-title">To be a leading force in AI-driven digital transformation across the Middle East and beyond.</h3>
            <p className="vm-card-text">We envision a world where businesses of all sizes harness the power of artificial intelligence to operate smarter, faster, and more efficiently — creating sustainable value and driving global progress.</p>
          </div>
          <div className="vm-card mission">
            <span className="vm-card-label">Our Mission</span>
            <h3 className="vm-card-title">To deliver intelligent, scalable AI solutions that solve real business challenges.</h3>
            <p className="vm-card-text">We partner with businesses to understand their unique needs and deliver custom AI solutions that create measurable impact, from strategy and development to deployment and beyond.</p>
          </div>
        </div>
        <div className="mission-points animate-on-scroll">
          {[
            { icon: <svg className="mission-point-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, text: 'Drive innovation through continuous research and adoption of cutting-edge AI technologies' },
            { icon: <svg className="mission-point-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, text: 'Maximize customer value by aligning every solution with business objectives and measurable outcomes' },
            { icon: <svg className="mission-point-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, text: 'Build scalable architectures that grow with your business and adapt to evolving market demands' },
            { icon: <svg className="mission-point-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: 'Ensure secure and compliant technology delivery with data privacy at the core of everything we build' },
            { icon: <svg className="mission-point-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, text: 'Combine UAE market expertise with global technology standards for world-class delivery' },
          ].map((p, i) => (
            <div className="mission-point" key={i}>{p.icon}<span className="mission-point-text">{p.text}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/><circle cx="12" cy="14" r="2"/></svg>, title: 'Artificial Intelligence Solutions', desc: 'Custom AI systems designed to automate complex decision-making, optimize operations, and unlock new capabilities for your business.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: 'Machine Learning Development', desc: 'Build and deploy machine learning models that learn from your data, improve over time, and deliver predictive intelligence at scale.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, title: 'Data Analytics & Business Intelligence', desc: 'Transform raw data into actionable insights with advanced analytics dashboards, reporting tools, and data visualization platforms.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>, title: 'AI Automation Solutions', desc: 'Streamline repetitive tasks and workflows with intelligent automation, reducing costs and freeing your team for higher-value work.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, title: 'Natural Language Processing', desc: 'Enable your systems to understand, interpret, and generate human language for smarter communication and content analysis.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, title: 'Computer Vision', desc: 'Implement visual recognition systems for image analysis, object detection, quality inspection, and real-time video processing.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: 'Custom Software Development', desc: 'Build AI-enabled platforms and applications tailored to your exact requirements, from web apps to enterprise systems.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>, title: 'AI Consulting & Strategy', desc: 'Expert guidance on AI adoption, feasibility analysis, roadmap planning, and technology selection to align AI with your business goals.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="8.5" cy="14.5" r="1.5"/><circle cx="15.5" cy="14.5" r="1.5"/></svg>, title: 'Chatbot & Virtual Assistants', desc: 'Design and deploy conversational AI assistants that handle customer queries, automate support, and engage users 24/7.' },
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="services-intro animate-on-scroll">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">End-to-End <span className="gradient-text">AI Solutions</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>From strategy to deployment, we offer comprehensive AI and software development services tailored to your business needs.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card animate-on-scroll" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
          <div className="service-card animate-on-scroll" style={{ gridColumn: 'span 3' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div className="service-icon" style={{ flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>
              </div>
              <div>
                <h3 className="service-title">Predictive Analytics &amp; Recommendation Systems</h3>
                <p className="service-desc">Leverage historical data to forecast trends, predict outcomes, and deliver personalized recommendations that drive engagement and revenue growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { icon: '🏥', title: 'Healthcare', desc: 'AI-powered diagnostics, patient analytics, and intelligent health monitoring for better outcomes.' },
    { icon: '🏦', title: 'Finance & Banking', desc: 'Fraud detection, risk assessment, and automated compliance for secure financial operations.' },
    { icon: '🛒', title: 'Retail & E-commerce', desc: 'Personalized recommendations, demand forecasting, and smart inventory management.' },
    { icon: '🚚', title: 'Logistics & Supply Chain', desc: 'Route optimization, predictive maintenance, and real-time supply chain visibility.' },
    { icon: '🏗️', title: 'Real Estate', desc: 'Property valuation models, market trend analysis, and intelligent tenant management.' },
    { icon: '🏛️', title: 'Government & Smart City', desc: 'Citizen engagement platforms, traffic analysis, and smart infrastructure management.' },
    { icon: '🎓', title: 'Education', desc: 'Adaptive learning platforms, student analytics, and AI-assisted content generation.' },
    { icon: '⚡', title: 'Energy & Manufacturing', desc: 'Predictive maintenance, energy optimization, and quality control automation.' },
  ];
  return (
    <section className="section industries" id="industries">
      <div className="container">
        <div className="industries-intro animate-on-scroll">
          <span className="section-label">Industries We Serve</span>
          <h2 className="section-title">AI Solutions <span className="gradient-text">Customized for Your Sector</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>We design and deploy AI solutions tailored to the unique challenges and opportunities of different business sectors.</p>
        </div>
        <div className="industries-grid">
          {industries.map((ind) => (
            <div className="industry-card animate-on-scroll" key={ind.title}>
              <div className="industry-icon">{ind.icon}</div>
              <h3 className="industry-title">{ind.title}</h3>
              <p className="industry-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const features = [
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: 'Deep AI Expertise', desc: 'Real-world AI, ML, and modern tech experience' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Data Privacy & Security', desc: 'Encryption, compliance, and secure practices' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: 'Scalable Architecture', desc: 'Systems built to grow with your business' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Quality Assurance', desc: 'Rigorous testing and code review standards' },
  ];
  const extras = [
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg>, label: 'Custom Solutions' },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, label: 'Business-Oriented' },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>, label: 'End-to-End Service' },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'UAE Market Expertise' },
  ];
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }} className="animate-on-scroll">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Built Different. <span className="gradient-text">Delivered Better.</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our strengths go beyond technology. We combine deep AI expertise with business acumen to deliver solutions that create real impact.
          </p>
        </div>

        <div className="ngrok-split animate-on-scroll">
          <div className="ngrok-split-left">
            {features.map((f, i) => (
              <div className="ngrok-feature-item" key={i}>
                <div className="ngrok-feature-icon">{f.icon}</div>
                <div>
                  <strong>{f.title}</strong>
                  <span className="ngrok-feature-desc">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="ngrok-split-right">
            <div className="ngrok-code-label">Fig. 1 — AI pipeline config</div>
            <div className="ngrok-code-block">
              <div className="ngrok-code-lines">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(n => <span key={n}>{n}</span>)}
              </div>
              <pre><code>
{`pipeline:
  - stage: data_ingestion
    config:
      source: "enterprise_db"
      format: streaming

  - stage: model_inference
    config:
      model: zestora-ai-v2
      gpu_accelerated: true
      batch_size: `}<span className="ngrok-code-num">128</span>{`
      confidence: `}<span className="ngrok-code-num">0.95</span>
              </code></pre>
            </div>
          </div>
        </div>

        <div className="ngrok-banner animate-on-scroll">
          <div className="ngrok-banner-left">
            <h3 className="ngrok-banner-title">Even more ways to optimize and scale your AI workloads</h3>
            <a href="#services" className="ngrok-banner-link">EXPLORE SERVICES →</a>
          </div>
          <div className="ngrok-banner-extras">
            {extras.map((e, i) => (
              <div className="ngrok-banner-extra" key={i}>{e.icon} {e.label}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const steps = [
    { num: '01', title: 'Discovery & Requirement Analysis', desc: 'We start by deeply understanding your business, goals, challenges, and stakeholder needs to define clear project requirements.' },
    { num: '02', title: 'Business & Technical Consultation', desc: 'Our experts evaluate feasibility, identify the right technologies, and align the proposed solution with your business strategy.' },
    { num: '03', title: 'Solution Architecture & Planning', desc: 'We design a robust architecture and detailed project plan covering timelines, milestones, and resource allocation.' },
    { num: '04', title: 'UI/UX Design', desc: 'For solutions with user interfaces, we create intuitive, modern designs that prioritize usability and seamless user experience.' },
    { num: '05', title: 'Development & Integration', desc: 'Our engineers build the solution using agile methodology, integrating with your existing systems and third-party services.' },
    { num: '06', title: 'Testing & Quality Assurance', desc: 'Comprehensive testing including unit, integration, performance, and security testing to ensure a flawless product.' },
    { num: '07', title: 'Deployment & Go-Live Support', desc: 'Smooth deployment to production with monitoring, rollback plans, and hands-on support to ensure a successful launch.' },
    { num: '08', title: 'Maintenance, Monitoring & Optimization', desc: 'Ongoing monitoring, performance optimization, and proactive maintenance to keep your solution running at peak efficiency.' },
  ];
  return (
    <section className="section approach" id="approach">
      <div className="container">
        <div className="approach-intro animate-on-scroll">
          <span className="section-label">Our Approach</span>
          <h2 className="section-title">From Discovery to <span className="gradient-text">Deployment</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>A structured, transparent process that ensures every project is delivered on time, on budget, and to the highest standards.</p>
        </div>
        <div className="approach-timeline">
          {steps.map((s) => (
            <div className="approach-step animate-on-scroll" key={s.num}>
              <div className="approach-number">{s.num}</div>
              <div className="approach-step-content">
                <h4 className="approach-step-title">{s.title}</h4>
                <p className="approach-step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const [activeTab, setActiveTab] = useState('frontend');
  const tabs = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'ai-data', label: 'AI & Data' },
    { key: 'database', label: 'Database' },
    { key: 'cloud', label: 'Cloud & DevOps' },
    { key: 'security', label: 'Security' },
  ];
  const panels = {
    frontend: [
      { icon: '⚛️', name: 'React / Next.js', desc: 'Modern web applications' },
      { icon: '📘', name: 'TypeScript', desc: 'Type-safe scalable development' },
      { icon: '🎨', name: 'Tailwind CSS', desc: 'Rapid, clean UI design' },
    ],
    backend: [
      { icon: '🟢', name: 'Node.js', desc: 'Server-side JavaScript' },
      { icon: '🐍', name: 'Python', desc: 'Backend & AI development' },
      { icon: '⚡', name: 'FastAPI', desc: 'High-performance AI APIs' },
      { icon: '🔗', name: 'REST API / GraphQL', desc: 'System integration' },
    ],
    'ai-data': [
      { icon: '🔥', name: 'PyTorch', desc: 'Deep learning framework' },
      { icon: '🧠', name: 'TensorFlow', desc: 'Machine learning at scale' },
      { icon: '📊', name: 'Pandas / NumPy / scikit-learn', desc: 'Analytics & model development' },
      { icon: '✨', name: 'LLM & Generative AI', desc: 'OpenAI integrations & LLM platforms' },
      { icon: '🗄️', name: 'Vector Databases', desc: 'AI assistants & retrieval systems' },
    ],
    database: [
      { icon: '🐘', name: 'PostgreSQL', desc: 'Structured application data' },
      { icon: '🔴', name: 'Redis', desc: 'Caching & performance' },
      { icon: '🍃', name: 'MongoDB', desc: 'Flexible document storage' },
    ],
    cloud: [
      { icon: '☁️', name: 'AWS / Azure / GCP', desc: 'Cloud hosting & scaling' },
      { icon: '🐳', name: 'Docker', desc: 'Containerized deployment' },
      { icon: '⎈', name: 'Kubernetes', desc: 'Container orchestration' },
      { icon: '🔄', name: 'GitHub / GitLab CI/CD', desc: 'Code management & pipelines' },
      { icon: '▲', name: 'Vercel', desc: 'Frontend deployment' },
    ],
    security: [
      { icon: '🔒', name: 'HTTPS & SSL/TLS', desc: 'Secure communication' },
      { icon: '👥', name: 'Role-Based Access Control', desc: 'Granular permissions' },
      { icon: '🔐', name: 'Encrypted Storage', desc: 'Secure secrets management' },
      { icon: '💳', name: 'PCI DSS Compliance', desc: 'Tokenized payment processing' },
    ],
  };
  return (
    <section className="section" id="tech-stack">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }} className="animate-on-scroll">
          <span className="section-label">Technology Stack</span>
          <h2 className="section-title">Powered by <span className="gradient-text">Modern Technology</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>We leverage best-in-class tools and frameworks to build robust, scalable, and secure solutions.</p>
        </div>
        <div className="tech-tabs animate-on-scroll">
          {tabs.map((t) => (
            <button key={t.key} className={`tech-tab${activeTab === t.key ? ' active' : ''}`} onClick={() => setActiveTab(t.key)}>{t.label}</button>
          ))}
        </div>
        <div className="tech-panel active">
          {(panels[activeTab] || []).map((item) => (
            <div className="tech-item" key={item.name}>
              <div className="tech-item-icon">{item.icon}</div>
              <div>
                <div className="tech-item-name">{item.name}</div>
                <div className="tech-item-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const products = [
    { name: 'SURYA', tag: 'Tethered Lighting', desc: '12+ hours continuous lighting at 120m coverage. Ideal for night operations & emergency response.', stat: '12h+', statLabel: 'Flight Time' },
    { name: 'TRINETRA', tag: 'Surveillance', desc: '24/7 monitoring with thermal imaging for border & infrastructure security.', stat: '24/7', statLabel: 'Monitoring' },
    { name: 'AINDRASTRA', tag: 'Armed Defense', desc: 'Precision engagement (9mm/7.62mm) that eliminates frontline exposure.', stat: '0', statLabel: 'Risk to Soldiers' },
    { name: 'GARUDA', tag: 'Kamikaze Strike', desc: '10 km range rapid strike capability. Backpack deployable for field units.', stat: '10km', statLabel: 'Strike Range' },
    { name: 'MEGHDOOT', tag: 'Fixed-Wing', desc: '50 km strategic range for long-distance reconnaissance missions.', stat: '50km', statLabel: 'Range' },
    { name: 'VAJRA', tag: 'Fiber-Tethered FPV', desc: 'Anti-jamming technology that works in GPS-denied & hostile RF zones.', stat: '100%', statLabel: 'Jam-Proof' },
    { name: 'BARBARIKA', tag: 'Interceptor', desc: '400+ km/h high-speed counter-drone defense system.', stat: '400+', statLabel: 'km/h Speed' },
  ];

  return (
    <section className="section cs-section" id="case-study">
      <div className="container">
        {/* Header */}
        <div className="cs-header animate-on-scroll">
          <span className="section-label">Featured Product</span>
          <h2 className="section-title">ZESTORA Defense — <span className="gradient-text">Autonomous Defense Systems</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            India's next-generation drone ecosystem. AI-powered autonomous systems engineered by ZESTORA for modern warfare.
          </p>
        </div>

        {/* Key Stats Bar */}
        <div className="cs-stats animate-on-scroll">
          {[
            { value: '100%', label: 'Mission Success Rate' },
            { value: '22+', label: 'Systems Delivered' },
            { value: '60–70%', label: 'Lower Cost vs Imports' },
            { value: '24/7', label: 'Operational Capability' },
          ].map((s, i) => (
            <div className="cs-stat" key={i}>
              <div className="cs-stat-value">{s.value}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Problem → Solution Split */}
        <div className="cs-split animate-on-scroll">
          <div className="cs-split-panel cs-problem">
            <div className="cs-panel-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              THE CHALLENGE
            </div>
            <h3 className="cs-panel-title">The Critical Gap in Modern Defense</h3>
            <div className="cs-problem-list">
              {[
                { icon: '⏱️', title: 'Limited Flight Time', desc: 'Traditional drones operate for only 30–45 min, leaving surveillance gaps' },
                { icon: '⚠️', title: 'High Personnel Risk', desc: 'Soldiers exposed to sniper fire, ambushes, and IEDs during patrol' },
                { icon: '📡', title: 'EW Vulnerability', desc: 'Conventional drones fail under RF jamming in hostile environments' },
                { icon: '🔗', title: 'Import Dependency', desc: '70%+ of India\'s defense drones are imported — cost & supply risk' },
              ].map((p, i) => (
                <div className="cs-problem-item" key={i}>
                  <span className="cs-problem-icon">{p.icon}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cs-split-panel cs-solution">
            <div className="cs-panel-label cs-panel-label-green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              OUR SOLUTION
            </div>
            <h3 className="cs-panel-title">Autonomous Systems Built for Real Combat</h3>
            <p className="cs-solution-desc">ZESTORA delivers a fully integrated drone ecosystem with AI powering autonomous decision-making across every platform.</p>
            <div className="cs-solution-points">
              {[
                '24/7 uninterrupted operations',
                'Jam-proof communication systems',
                'Indigenous manufacturing (Make in India)',
                'Rapid deployment in under 3 minutes',
                'AI-powered intrusion detection & tracking',
                'Swarm coordination capabilities',
              ].map((p, i) => (
                <div className="cs-solution-point" key={i}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7-Product Ecosystem */}
        <div className="cs-products animate-on-scroll">
          <h3 className="cs-products-title">The 7-Product Ecosystem</h3>
          <div className="cs-products-nav">
            {products.map((p, i) => (
              <button
                key={i}
                className={`cs-product-tab${activeProduct === i ? ' active' : ''}`}
                onClick={() => setActiveProduct(i)}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div className="cs-product-detail">
            <div className="cs-product-info">
              <span className="cs-product-tag">{products[activeProduct].tag}</span>
              <h4 className="cs-product-name">{products[activeProduct].name}</h4>
              <p className="cs-product-desc">{products[activeProduct].desc}</p>
            </div>
            <div className="cs-product-stat-card">
              <div className="cs-product-stat-value">{products[activeProduct].stat}</div>
              <div className="cs-product-stat-label">{products[activeProduct].statLabel}</div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="cs-tech animate-on-scroll">
          <h3 className="cs-tech-title">Built for the Future of Warfare</h3>
          <div className="cs-tech-grid">
            <div className="cs-tech-card">
              <div className="cs-tech-card-icon">🔗</div>
              <h4>Optical Fiber Tether</h4>
              <p>100% secure communication, completely immune to RF jamming and electronic warfare.</p>
            </div>
            <div className="cs-tech-card">
              <div className="cs-tech-card-icon">🧠</div>
              <h4>AI-Powered Systems</h4>
              <p>Real-time intrusion detection, autonomous tracking & targeting, swarm coordination.</p>
            </div>
            <div className="cs-tech-card">
              <div className="cs-tech-card-icon">🏆</div>
              <h4>Breakthrough Firsts</h4>
              <p>Asia's first Lumens lighting drone. World's first human-looped interceptor system.</p>
            </div>
          </div>
        </div>

        {/* Impact Bar */}
        <div className="cs-impact animate-on-scroll">
          <div className="cs-impact-group">
            <div className="cs-impact-heading">Defense Impact</div>
            <div className="cs-impact-items">
              <span>100% force protection</span>
              <span>24/7 ISR capability</span>
              <span>&lt;3 min deployment</span>
            </div>
          </div>
          <div className="cs-impact-divider"></div>
          <div className="cs-impact-group">
            <div className="cs-impact-heading">Business Impact</div>
            <div className="cs-impact-items">
              <span>70% cost reduction</span>
              <span>Domestic supply chain</span>
              <span>$5B market by 2033</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeyBoboSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    { name: 'AI Coaching', icon: '🎯', desc: 'Detects posture, movement, and actions via camera. Gives instant corrections like a real trainer and tracks improvement over time.', stat: 'Real-Time', statLabel: 'Feedback' },
    { name: 'Education', icon: '📚', desc: 'Daily assignments tracking, smart reminders, and personalized learning paths that adapt to your pace and style.', stat: 'Smart', statLabel: 'Learning' },
    { name: 'Health & Fitness', icon: '💪', desc: 'Workout correction via camera, diet suggestions based on goals, and habit tracking for long-term consistency.', stat: '24/7', statLabel: 'Guidance' },
    { name: 'AI Brain', icon: '🧠', desc: 'Central dashboard that connects all modules, suggests next actions automatically, and alerts for missed workouts, pending assignments, and health risks.', stat: '1', statLabel: 'Platform' },
  ];

  const useCases = [
    { title: 'Students', items: ['Assignment tracking', 'Smart study guidance', 'Focus improvement'] },
    { title: 'Fitness Enthusiasts', items: ['Real-time posture correction', 'Personalized routines', 'Progress tracking'] },
    { title: 'Professionals', items: ['Daily productivity tracking', 'Habit optimization', 'Work-life balance'] },
    { title: 'Families', items: ['Learning + health + growth', 'Shared dashboards', 'Multi-user support'] },
  ];

  return (
    <section className="section hb-section" id="heybobo">
      <div className="container">
        {/* Hero Header */}
        <div className="hb-hero animate-on-scroll">
          <span className="section-label">Zestora Product</span>
          <h2 className="hb-headline">Your Personal AI Coach <span className="gradient-text">for Life</span></h2>
          <p className="hb-subheadline">HeyBobo is an intelligent, real-time AI assistant that helps you improve your health, education, and performance — by understanding you, guiding you, and correcting you in the moment.</p>
          <div className="hb-highlights">
            {['Real-Time Feedback', 'AI-Powered Coaching', 'Multi-Domain Intelligence', 'Personalized Growth'].map((h, i) => (
              <span className="hb-highlight-pill" key={i}>{h}</span>
            ))}
          </div>
          <div className="hb-cta-row">
            <a href="#contact" className="btn btn-primary">Start Your AI Coach</a>
            <a href="#contact" className="btn btn-secondary">Try Demo</a>
          </div>
        </div>

        {/* Problem / Solution Split */}
        <div className="cs-split animate-on-scroll">
          <div className="cs-split-panel cs-problem">
            <div className="cs-panel-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              THE GAP TODAY
            </div>
            <h3 className="cs-panel-title">Despite access to content, people still struggle to improve.</h3>
            <div className="cs-problem-list">
              {[
                { icon: '🚫', title: 'No Real-Time Guidance', desc: 'Learning and fitness apps give static instructions — no live correction.' },
                { icon: '👤', title: 'Lack of Personalization', desc: 'One-size-fits-all programs fail to adapt to individual needs.' },
                { icon: '📉', title: 'Low Consistency', desc: 'Without accountability, users drop off quickly.' },
                { icon: '🧩', title: 'Fragmented Experience', desc: 'Education, fitness, and health exist in separate apps with no integration.' },
              ].map((p, i) => (
                <div className="cs-problem-item" key={i}>
                  <span className="cs-problem-icon">{p.icon}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cs-split-panel cs-solution">
            <div className="cs-panel-label cs-panel-label-green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ONE AI. MULTIPLE IMPROVEMENTS.
            </div>
            <h3 className="cs-panel-title">HeyBobo — Your Always-On Personal Coach</h3>
            <p className="cs-solution-desc">HeyBobo acts as your always-on personal coach, combining education, fitness & posture correction, health & diet guidance, and daily productivity tracking into one intelligent system.</p>
            <div className="hb-how-it-works">
              {[
                'Uses camera + AI detection to understand your actions',
                'Gives instant feedback like a human trainer',
                'Tracks progress across multiple domains',
                'Adapts recommendations based on your behavior',
              ].map((step, i) => (
                <div className="hb-how-step" key={i}>
                  <span className="hb-how-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Features Tabs */}
        <div className="cs-products animate-on-scroll">
          <h3 className="cs-products-title">Core Features</h3>
          <div className="cs-products-nav">
            {features.map((f, i) => (
              <button
                key={i}
                className={`cs-product-tab${activeFeature === i ? ' active' : ''}`}
                onClick={() => setActiveFeature(i)}
              >
                <span style={{ marginRight: '6px' }}>{f.icon}</span> {f.name}
              </button>
            ))}
          </div>
          <div className="cs-product-detail">
            <div className="cs-product-info">
              <span className="cs-product-tag">{features[activeFeature].name}</span>
              <h4 className="cs-product-name">{features[activeFeature].icon} {features[activeFeature].name}</h4>
              <p className="cs-product-desc">{features[activeFeature].desc}</p>
            </div>
            <div className="cs-product-stat-card">
              <div className="cs-product-stat-value">{features[activeFeature].stat}</div>
              <div className="cs-product-stat-label">{features[activeFeature].statLabel}</div>
            </div>
          </div>
        </div>

        {/* AI Intelligence */}
        <div className="hb-ai-brain animate-on-scroll">
          <div className="hb-ai-header">
            <h3>More Than an App — <span className="gradient-text">It Thinks Like a Human</span></h3>
            <p>HeyBobo's AI Brain understands your routines, predicts your next needs, and connects your actions across domains.</p>
          </div>
          <div className="hb-ai-prompts">
            {[
              '"You missed your workout today — want a quick 10-min session?"',
              '"You have an assignment due — start now?"',
              '"Your posture is incorrect — adjust your back."',
            ].map((prompt, i) => (
              <div className="hb-ai-prompt" key={i}>
                <div className="hb-ai-prompt-icon">🧠</div>
                <span>{prompt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="hb-usecases animate-on-scroll">
          <h3 className="cs-tech-title">Built For Everyone</h3>
          <div className="hb-usecases-grid">
            {useCases.map((uc, i) => (
              <div className="hb-usecase-card" key={i}>
                <h4>{uc.title}</h4>
                <ul>
                  {uc.items.map((item, j) => (
                    <li key={j}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Impact + Why HeyBobo */}
        <div className="cs-impact animate-on-scroll">
          <div className="cs-impact-group">
            <div className="cs-impact-heading">Measurable Results</div>
            <div className="cs-impact-items">
              <span>Higher consistency</span>
              <span>Faster learning</span>
              <span>Improved fitness accuracy</span>
              <span>One app for everything</span>
            </div>
          </div>
          <div className="cs-impact-divider"></div>
          <div className="cs-impact-group">
            <div className="cs-impact-heading">The HeyBobo Advantage</div>
            <div className="cs-impact-items">
              <span>Real-time AI feedback</span>
              <span>Multi-domain integration</span>
              <span>Human-like decisions</span>
              <span>Continuous personalization</span>
            </div>
          </div>
        </div>

        {/* Vision + Tagline */}
        <div className="hb-vision animate-on-scroll">
          <div className="hb-vision-inner">
            <span className="cs-product-tag">Future Vision</span>
            <h3>The Universal Personal Coach</h3>
            <p>HeyBobo aims to become your daily decision-making assistant, personal trainer, learning companion, and health advisor — all in one intelligent system.</p>
            <div className="hb-tagline">"Your Life. Optimized by AI."</div>
            <div className="hb-cta-row" style={{ marginTop: '32px' }}>
              <a href="#contact" className="btn btn-primary">Experience AI Coaching</a>
              <a href="#contact" className="btn btn-secondary">Get Early Access</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = 'Please enter a valid email';
    if (!formData.message.trim()) errs.message = 'Please enter a message';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        if (data.errors) {
          const fieldErrors = {};
          data.errors.forEach(err => { fieldErrors[err.path] = err.msg; });
          setErrors(fieldErrors);
        }
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }} className="animate-on-scroll">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Let's Build Something <span className="gradient-text">Intelligent Together</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>Ready to transform your business with AI? Get in touch and let's discuss how we can help.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info animate-on-scroll">
            <div className="contact-info-item">
              <div className="contact-info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div><div className="contact-info-label">Address</div><div className="contact-info-text">Musaffah 0,37, Hussein Ali Mohammed, Al-Essa Building, Abu Dhabi, UAE</div></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
              <div><div className="contact-info-label">Email</div><div className="contact-info-text"><a href="mailto:info@zestora.ae">info@zestora.ae</a></div></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div className="contact-info-label">Working Hours</div><div className="contact-info-text">Sunday – Thursday: 9:00 AM – 6:00 PM</div></div>
            </div>
            <a href="https://wa.me/97126000000" className="contact-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232560.8018456!2d54.3!3d24.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7d2b4500186ab20!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ZESTORA Location - Abu Dhabi, UAE"
              ></iframe>
            </div>
          </div>
          <div className="contact-form-wrapper animate-on-scroll">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <p className="contact-form-subtitle">Fill out the form and our team will get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" value={formData.name} onChange={handleChange} style={errors.name ? { borderColor: '#EF4444' } : {}} />
                  {errors.name && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4 }}>{errors.name}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="john@company.com" value={formData.email} onChange={handleChange} style={errors.email ? { borderColor: '#EF4444' } : {}} />
                  {errors.email && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4 }}>{errors.email}</div>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-input" placeholder="+971 50 000 0000" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" className="form-input" placeholder="Your Company" value={formData.company} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your project or requirements..." value={formData.message} onChange={handleChange} style={errors.message ? { borderColor: '#EF4444' } : {}} />
                {errors.message && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4 }}>{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'} style={status === 'success' ? { background: '#10B981' } : {}}>
                {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : status === 'error' ? 'Error – Try Again' : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="ngrok-cta-section">
      <div className="ngrok-crosshair ngrok-crosshair-left"></div>
      <div className="ngrok-crosshair ngrok-crosshair-right"></div>
      <div className="container">
        <div className="ngrok-cta-inner animate-on-scroll">
          <h2 className="ngrok-cta-title">
            Start your AI journey with ZESTORA.<br />
            <em>Right now.</em>
          </h2>
          <div className="ngrok-cta-icons">
            <span title="Consultation">🧭</span>
            <span title="Development">💻</span>
            <span className="ngrok-cta-icon-active" title="AI Solutions">🤖</span>
            <span title="Deployment">🚀</span>
            <span title="More">⋯</span>
          </div>
          <div className="ngrok-cta-command">
            <span className="ngrok-cta-prompt">$</span>
            <span className="ngrok-cta-cmd">npx zestora-ai init --project your-business</span>
            <button className="ngrok-cta-copy" onClick={() => navigator.clipboard?.writeText('npx zestora-ai init --project your-business')} title="Copy">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
          </div>
          <a href="#contact" className="ngrok-cta-link">
            GET IN TOUCH AND START BUILDING
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
