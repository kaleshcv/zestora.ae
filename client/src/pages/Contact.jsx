import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Contact() {
  useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

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
    <>
      <PageHeader label="Contact Us" title="Let's Build Something" titleHighlight="Intelligent Together" desc="Ready to transform your business with AI? Get in touch and let's discuss your project." />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info animate-on-scroll">
              <h3 style={{ fontSize: '1.5rem', marginBottom: 8 }}>ZESTORA ARTIFICIAL INTELLIGENCE DEVELOPING SERVICES LLC</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 40 }}>We are here to help you start your AI journey. Reach out through any of the channels below.</p>

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
    </>
  );
}
