import PageHeader, { CTASection } from '../components/PageHeader';
import useScrollAnimation from '../hooks/useScrollAnimation';

const industries = [
  { icon: '🏥', title: 'Healthcare', desc: 'AI-powered diagnostics, patient analytics, medical image analysis, and intelligent health monitoring systems that improve patient outcomes and streamline hospital operations.' },
  { icon: '🏦', title: 'Finance & Banking', desc: 'Fraud detection, credit risk assessment, algorithmic trading, automated compliance checks, and AI-driven customer service for secure and efficient financial operations.' },
  { icon: '🛒', title: 'Retail & E-commerce', desc: 'Personalized product recommendations, demand forecasting, dynamic pricing, inventory optimization, and customer behavior analytics for higher conversions.' },
  { icon: '🚚', title: 'Logistics & Supply Chain', desc: 'Route optimization, fleet management, warehouse automation, predictive maintenance, and real-time supply chain visibility powered by AI.' },
  { icon: '🏗️', title: 'Real Estate', desc: 'Automated property valuation, market trend analysis, tenant screening, smart building management, and AI-powered CRM for real estate businesses.' },
  { icon: '🏛️', title: 'Government & Smart City', desc: 'Citizen engagement platforms, public safety analytics, traffic management, smart infrastructure monitoring, and data-driven policy planning.' },
  { icon: '🎓', title: 'Education', desc: 'Adaptive learning platforms, automated grading systems, student performance analytics, intelligent tutoring, and AI-assisted content generation.' },
  { icon: '⚡', title: 'Energy & Manufacturing', desc: 'Predictive maintenance, energy consumption optimization, quality control automation, production planning, and IoT-powered smart factory solutions.' },
];

export default function Industries() {
  useScrollAnimation();
  return (
    <>
      <PageHeader label="Industries" title="AI Solutions" titleHighlight="Customized for Your Sector" desc="We design and deploy AI solutions tailored to the unique challenges and opportunities of different business sectors." />

      <section className="section">
        <div className="container">
          <div className="industries-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {industries.map((ind) => (
              <div className="industry-card animate-on-scroll" key={ind.title} style={{ textAlign: 'left', padding: '36px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                  <div className="industry-icon" style={{ margin: 0 }}>{ind.icon}</div>
                  <h3 className="industry-title" style={{ marginBottom: 0 }}>{ind.title}</h3>
                </div>
                <p className="industry-desc" style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
