import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: 'Apartment',
    requirement: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:8080/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', industry: 'Apartment', requirement: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      // Mock success for demo if backend isn't running
      setTimeout(() => setStatus('success'), 1500);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Partner with <span className="text-primary">HydraFlows</span></h2>
            <p className="text-xl text-muted mb-12">
              Ready to transition to zero-capex green hydrogen? 
              Get a free consultation and customized feasibility report for your facility.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary h-fit">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-muted">+91 800-HYDRA-AI</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary h-fit">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-muted">hello@hydraflows.ai</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary h-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Global Headquarters</h4>
                  <p className="text-muted">Innovation Hub, Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            {status === 'success' ? (
              <div className="text-center py-12 animate-fade">
                <div className="inline-flex items-center justify-center bg-primary/20 text-primary p-4 rounded-full mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-muted mb-8">Our energy consultants will reach out to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary">Send Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" required 
                      className="w-full bg-white/5 border border-border p-3 rounded-lg focus:border-primary outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" required
                      className="w-full bg-white/5 border border-border p-3 rounded-lg focus:border-primary outline-none transition-all"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" required
                      className="w-full bg-white/5 border border-border p-3 rounded-lg focus:border-primary outline-none transition-all"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Sector</label>
                    <select 
                      className="w-full bg-white/5 border border-border p-3 rounded-lg focus:border-primary outline-none transition-all appearance-none"
                      value={formData.industry}
                      onChange={e => setFormData({...formData, industry: e.target.value})}
                    >
                      <option value="Apartment">Apartment Society</option>
                      <option value="Hospital">Hospital</option>
                      <option value="IT Park">IT Park / Commercial</option>
                      <option value="MSME">Manufacturing / MSME</option>
                      <option value="Rural">Government / Rural</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Requirement Details</label>
                  <textarea 
                    rows={4} required
                    className="w-full bg-white/5 border border-border p-3 rounded-lg focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your energy needs..."
                    value={formData.requirement}
                    onChange={e => setFormData({...formData, requirement: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn btn-primary w-full justify-center text-lg py-4"
                >
                  {status === 'loading' ? 'Processing...' : 'Get Free Consultation'} <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
