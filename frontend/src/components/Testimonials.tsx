import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Facility Director, Apollo Greens',
    text: 'HydraFlows transformed our backup power reliability. We saved 28% on diesel costs in the first six months alone.',
    image: 'https://i.pravatar.cc/150?u=r'
  },
  {
    name: 'Anita Sharma',
    role: 'President, Whispering Palms Society',
    text: 'Zero maintenance and zero noise. Our residents are extremely happy with the shift to clean hydrogen energy.',
    image: 'https://i.pravatar.cc/150?u=a'
  },
  {
    name: 'Vikram Singh',
    role: 'CTO, TechLogistics Park',
    text: 'The AI optimization is brilliant. It handles our peak loads perfectly while maximizing cost efficiency.',
    image: 'https://i.pravatar.cc/150?u=v'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Partners <span className="text-primary">Say</span></h2>
          <p className="text-muted">Trusted by leading institutions across India and beyond.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8 relative">
              <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg italic mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-muted uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
