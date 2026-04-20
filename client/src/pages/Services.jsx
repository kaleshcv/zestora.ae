import PageHeader, { CTASection } from '../components/PageHeader';
import useScrollAnimation from '../hooks/useScrollAnimation';

const services = [
  { icon: '🤖', title: 'Artificial Intelligence Solutions', desc: 'Custom AI systems designed to automate complex decision-making, optimize operations, and unlock new capabilities for your business.' },
  { icon: '📈', title: 'Machine Learning Development', desc: 'Build and deploy machine learning models that learn from your data, improve over time, and deliver predictive intelligence at scale.' },
  { icon: '📊', title: 'Data Analytics & Business Intelligence', desc: 'Transform raw data into actionable insights with advanced analytics dashboards, reporting tools, and data visualization platforms.' },
  { icon: '⚙️', title: 'AI Automation Solutions', desc: 'Streamline repetitive tasks and workflows with intelligent automation, reducing costs and freeing your team for higher-value work.' },
  { icon: '💬', title: 'Natural Language Processing', desc: 'Enable your systems to understand, interpret, and generate human language for smarter communication and content analysis.' },
  { icon: '👁️', title: 'Computer Vision', desc: 'Implement visual recognition systems for image analysis, object detection, quality inspection, and real-time video processing.' },
  { icon: '💻', title: 'Custom Software Development', desc: 'Build AI-enabled platforms and applications tailored to your exact requirements, from web apps to enterprise systems.' },
  { icon: '🧭', title: 'AI Consulting & Strategy', desc: 'Expert guidance on AI adoption, feasibility analysis, roadmap planning, and technology selection to align AI with your business goals.' },
  { icon: '🤖', title: 'Chatbot & Virtual Assistants', desc: 'Design and deploy conversational AI assistants that handle customer queries, automate support, and engage users 24/7.' },
  { icon: '📉', title: 'Predictive Analytics & Recommendation Systems', desc: 'Leverage historical data to forecast trends, predict outcomes, and deliver personalized recommendations that drive engagement and revenue growth.' },
];

export default function Services() {
  useScrollAnimation();
  return (
    <>
      <PageHeader label="Our Services" title="End-to-End" titleHighlight="AI Solutions" desc="From strategy to deployment, we offer comprehensive AI and software development services tailored to your business needs." />

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card animate-on-scroll" key={s.title}>
                <div className="service-icon" style={{ fontSize: '1.5rem' }}>{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
