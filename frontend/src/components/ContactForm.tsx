import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, ChevronRight, ChevronLeft, Building2, User, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Use local backend during development and Vercel backend during production
const API_BASE = import.meta.env.PROD 
  ? 'https://hydra-flows-ai-ffe5.vercel.app' 
  : 'http://localhost:3001';
const sectors = [
  { value: 'Apartment', label: 'Apartment / Villa', icon: '🏢' },
  { value: 'Hospital', label: 'Hospital / Healthcare', icon: '🏥' },
  { value: 'IT Park', label: 'IT Park / Commercial', icon: '🏗️' },
  { value: 'MSME', label: 'Manufacturing / MSME', icon: '🏭' },
  { value: 'Rural', label: 'Government / Rural', icon: '🌾' },
  { value: 'Hotel', label: 'Hotel / Hospitality', icon: '🏨' },
];

const steps = [
  { id: 1, label: 'Your Details', icon: <User size={16} /> },
  { id: 2, label: 'Your Sector', icon: <Building2 size={16} /> },
  { id: 3, label: 'Requirements', icon: <MessageSquare size={16} /> },
];

const ContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    industry: '', scale: '', requirement: '', timeline: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const set = (key: string, val: string) => setFormData(prev => ({ ...prev, [key]: val }));

  const handleSubmit = async () => {
    setStatus('loading');
    console.log('[ContactForm] Submitting to:', `${API_BASE}/api/contact/submit`);
    try {
      const res = await fetch(`${API_BASE}/api/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      console.log('[ContactForm] Response:', data);
      
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        console.error('[ContactForm] Server error:', data.error);
        setStatus('error');
      }
    } catch (err) {
      console.error('[ContactForm] Connection error:', err);
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)', padding: '0.8rem 1rem',
    borderRadius: '0.5rem', color: 'white', fontSize: '0.95rem',
    outline: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.8rem', fontWeight: 600,
    color: 'var(--text-muted)', marginBottom: '0.4rem',
    textTransform: 'uppercase', letterSpacing: '0.06em',
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container">
        <div style={{ display: 'grid', gap: '4rem' }} className="md:grid-cols-2">
          <div>
            <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-bold mb-6 uppercase tracking-widest">Get In Touch</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white', lineHeight: 1.2 }}>
              Partner with <span className="text-gradient">HydraFlows</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Ready to transition to zero-capex green hydrogen? Get a free consultation and customized feasibility report within 48 hours.
            </p>
            {[
              { icon: <Phone size={20} />, label: 'Call Us', value: '+91 800-HYDRA-AI' },
              { icon: <Mail size={20} />, label: 'Email Us', value: 'hello@hydraflows.ai' },
              { icon: <MapPin size={20} />, label: 'Headquarters', value: 'Innovation Hub, Bengaluru, India' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--primary)', padding: '0.85rem', borderRadius: '0.75rem', height: 'fit-content' }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: '0.2rem' }}>{c.label}</div>
                  <div style={{ color: 'var(--text-muted)' }}>{c.value}</div>
                </div>
              </div>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '2rem' }}>
              {['48hr Response', 'Free Feasibility Report', 'No Commitment', 'MNRE Subsidy Guidance'].map((b, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.6rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(16,185,129,0.15)', color: 'var(--primary)', padding: '1.25rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                  <CheckCircle2 size={48} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>Request Received!</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Our energy consultants will reach out within 24 hours.</p>
                <button onClick={() => { setStatus('idle'); setStep(1); }} className="btn btn-primary">Send Another Inquiry</button>
              </motion.div>
            ) : (
              <>
                {/* Step indicator */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                  {steps.map((st, i) => (
                    <React.Fragment key={st.id}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: step >= st.id ? 'var(--primary)' : 'rgba(255,255,255,0.08)', color: step >= st.id ? 'white' : 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', border: step === st.id ? '2px solid var(--primary-light)' : '2px solid transparent', transition: 'all 0.3s', marginBottom: '0.3rem' }}>
                          {step > st.id ? <CheckCircle2 size={16} /> : st.id}
                        </div>
                        <span style={{ fontSize: '0.65rem', color: step >= st.id ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600, textAlign: 'center', letterSpacing: '0.05em' }}>{st.label}</span>
                      </div>
                      {i < steps.length - 1 && <div style={{ height: 2, flex: 1, background: step > st.id ? 'var(--primary)' : 'rgba(255,255,255,0.1)', marginTop: '-1.2rem', transition: 'background 0.3s' }} />}
                    </React.Fragment>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                          <label style={labelStyle}>Full Name *</label>
                          <input style={inputStyle} placeholder="Rajesh Kumar" value={formData.name} onChange={e => set('name', e.target.value)} onFocus={e => (e.target.style.borderColor = 'var(--primary)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                        </div>
                        <div>
                          <label style={labelStyle}>Company Name</label>
                          <input style={inputStyle} placeholder="Your Company" value={formData.company} onChange={e => set('company', e.target.value)} onFocus={e => (e.target.style.borderColor = 'var(--primary)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={labelStyle}>Email *</label>
                          <input style={inputStyle} type="email" placeholder="you@company.com" value={formData.email} onChange={e => set('email', e.target.value)} onFocus={e => (e.target.style.borderColor = 'var(--primary)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                        </div>
                        <div>
                          <label style={labelStyle}>Phone *</label>
                          <input style={inputStyle} type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={e => set('phone', e.target.value)} onFocus={e => (e.target.style.borderColor = 'var(--primary)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Select your industry sector:</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        {sectors.map(sec => (
                          <button key={sec.value} onClick={() => set('industry', sec.value)} style={{ background: formData.industry === sec.value ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)', border: formData.industry === sec.value ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)', borderRadius: '0.6rem', padding: '0.75rem 0.8rem', color: formData.industry === sec.value ? 'var(--primary)' : 'var(--text-muted)', fontWeight: formData.industry === sec.value ? 700 : 500, fontSize: '0.85rem', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', fontFamily: 'inherit' }}>
                            <span style={{ marginRight: '0.4rem' }}>{sec.icon}</span>{sec.label}
                          </button>
                        ))}
                      </div>
                      <div>
                        <label style={labelStyle}>Approximate Scale</label>
                        <select style={{ ...inputStyle, cursor: 'pointer' }} value={formData.scale} onChange={e => set('scale', e.target.value)}>
                          <option value="">Select your scale</option>
                          <option value="Small (5–50 kW)">Small — 5–50 kW</option>
                          <option value="Medium (50–300 kW)">Medium — 50–300 kW</option>
                          <option value="Large (300–750 kW)">Large — 300–750 kW</option>
                          <option value="Enterprise (750kW+)">Enterprise — 750 kW+</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                  {step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div style={{ marginBottom: '1rem' }}>
                        <label style={labelStyle}>Requirement Details *</label>
                        <textarea rows={4} style={{ ...inputStyle, resize: 'none' }} placeholder="Tell us about your current energy setup and what you're hoping to achieve..." value={formData.requirement} onChange={e => set('requirement', e.target.value)} onFocus={e => (e.target.style.borderColor = 'var(--primary)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Deployment Timeline</label>
                        <select style={{ ...inputStyle, cursor: 'pointer' }} value={formData.timeline} onChange={e => set('timeline', e.target.value)}>
                          <option value="">When do you want to start?</option>
                          <option value="Immediately">Immediately (0–1 month)</option>
                          <option value="1–3 months">1–3 months</option>
                          <option value="3–6 months">3–6 months</option>
                          <option value="6–12 months">Planning phase</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem' }}>
                  {step > 1 && (
                    <button onClick={() => setStep(s => s - 1)} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.07)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', padding: '0.85rem 1.25rem', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem' }}>
                      <ChevronLeft size={18} /> Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button onClick={() => setStep(s => s + 1)} disabled={(step === 1 && (!formData.name || !formData.email || !formData.phone)) || (step === 2 && !formData.industry)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', background: 'var(--primary)', color: 'white', padding: '0.85rem', borderRadius: '0.5rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem', opacity: (step === 1 && (!formData.name || !formData.email || !formData.phone)) || (step === 2 && !formData.industry) ? 0.5 : 1, transition: 'all 0.2s', border: 'none' }}>
                      Continue <ChevronRight size={18} />
                    </button>
                  ) : (
                    <button onClick={handleSubmit} disabled={!formData.requirement || status === 'loading'} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'var(--primary)', color: 'white', padding: '0.85rem', borderRadius: '0.5rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem', opacity: !formData.requirement || status === 'loading' ? 0.6 : 1, border: 'none' }}>
                      {status === 'loading' ? 'Submitting...' : <><span>Get Free Consultation</span> <Send size={18} /></>}
                    </button>
                  )}
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>🔒 Your data is secure. No spam. Response within 24–48 hours.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
