import React from 'react';
import { motion } from 'framer-motion';
import { Home, HeartPulse, Wheat, Landmark, ShoppingBag, Cog } from 'lucide-react';

const verticals = [
  {
    icon: <Home size={32} />,
    title: 'Residential',
    market: 'Apartments & Villas',
    stat: '30–40%',
    statLabel: 'LPG Savings',
    points: ['Zero-noise operation', 'LPG replacement', 'EV charging', 'Pool heating'],
    color: '#10b981',
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Healthcare',
    market: 'Hospitals & Clinics',
    stat: '99.97%',
    statLabel: 'Uptime SLA',
    points: ['Medical O₂ co-generation', 'Life-support grade backup', 'Zero-soot kitchen', '4-hr emergency response'],
    color: '#ef4444',
  },
  {
    icon: <Wheat size={32} />,
    title: 'Agriculture',
    market: 'Villages & Agro-Clusters',
    stat: '₹300/kg',
    statLabel: 'BPL Rate',
    points: ['Diesel pump replacement', 'Cold storage power', 'Crop drying fuel', '5–10 local jobs/hub'],
    color: '#84cc16',
  },
  {
    icon: <Landmark size={32} />,
    title: 'Government',
    market: 'Panchayats & Smart Cities',
    stat: '25%',
    statLabel: 'MNRE Subsidy',
    points: ['MNRE scheme eligible', 'Carbon credit revenue', 'Model village status', 'CSR facilitation'],
    color: '#f59e0b',
  },
  {
    icon: <ShoppingBag size={32} />,
    title: 'Commercial',
    market: 'Malls, IT Parks & Hotels',
    stat: '23%',
    statLabel: 'Rent Premium',
    points: ['LEED Platinum 18 months', 'Net-Zero certification', 'Live ESG dashboard', 'Tenant attraction'],
    color: '#3b82f6',
  },
  {
    icon: <Cog size={32} />,
    title: 'Industrial',
    market: 'Manufacturing & Textiles',
    stat: '15%',
    statLabel: 'Export Premium',
    points: ['EU CBAM compliance', 'Zero Liquid Discharge', 'Process heat integration', 'Automated BRSR filing'],
    color: '#a855f7',
  },
];

const Verticals: React.FC = () => {
  return (
    <section id="verticals" className="section-padding" style={{ background: 'rgba(15,23,42,0.5)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
            Industry Verticals
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-gradient">Every Sector</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Tailored hydrogen solutions across 6 major industry segments — from villages to data centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: 'rgba(15,23,42,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '1rem',
                padding: '1.75rem',
                transition: 'border-color 0.3s, transform 0.3s',
                cursor: 'default',
              }}
              whileHover={{ y: -4 }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${v.color}50`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            >
              {/* Icon + stat row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{
                  background: `${v.color}18`,
                  color: v.color,
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                }}>
                  {v.icon}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: v.color, lineHeight: 1.1 }}>{v.stat}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{v.statLabel}</div>
                </div>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.8rem', color: v.color, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>{v.market}</p>

              {/* Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {v.points.map((pt, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: v.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
