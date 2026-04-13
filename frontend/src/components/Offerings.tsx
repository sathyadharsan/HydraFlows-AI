import React, { useState } from 'react';
import { Home, Hospital, TreePine, Building2, Factory, ChevronDown, ChevronUp, CheckCircle2, Zap, Droplets, TrendingDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const offerings = [
  {
    id: 'home',
    title: 'HydraHome',
    subtitle: 'Apartment Societies & Luxury Villas',
    icon: <Home size={28} />,
    scale: '5–50 kW',
    output: '20–200 kg H₂/day',
    pricing: '₹450–580/kg',
    contract: '8 Years',
    mnre: '20% Subsidy',
    color: '#10b981',
    description: 'Ultra-compact single-container pod integrating rooftop solar with society STP treated wastewater or coastal seawater. Silent operation replaces LPG cylinders for community cooking, central heating, and backup power.',
    useCases: [
      'Zero-emission community cooking (replaces LPG)',
      'Hydrogen heating for common areas & pools',
      'Silent backup power (50–200 kWh storage)',
      'PNG pipeline blending (up to 20% H₂ mix)',
      'EV charging augmentation',
    ],
    economics: [
      { label: 'Monthly Consumption', value: '150–300 kg' },
      { label: 'LPG Savings', value: '30–40%' },
      { label: 'ROI Breakeven', value: '24–36 months' },
      { label: 'Water Treated/kg', value: '12L (90% recovery)' },
    ],
    highlight: 'First green hydrogen society in your city — 5–8% property value premium',
  },
  {
    id: 'micro',
    title: 'HydraMicro',
    subtitle: 'Hotels, Hospitals & Gated Communities',
    icon: <Hospital size={28} />,
    scale: '50–200 kW',
    output: '200–800 kg H₂/day',
    pricing: '₹400–500/kg',
    contract: '10 Years',
    mnre: 'Commercial Pilot',
    color: '#3b82f6',
    description: 'N+1 redundant cluster configuration delivering medical-grade reliability. Triple energy backup (solar + wind + grid) with 99.97% uptime SLA. Medical oxygen co-generation capability for healthcare facilities.',
    useCases: [
      'Commercial kitchen fuel — instant on/off, zero soot',
      'Critical medical oxygen + hydrogen co-generation',
      'Off-grid luxury experiences (resort islands)',
      'Hybrid EV charging infrastructure',
      'Emergency medical backup (life-support standards)',
    ],
    economics: [
      { label: 'Monthly Scale', value: '500–2,000 kg' },
      { label: 'Annual Savings', value: '₹8–25 Lakhs' },
      { label: 'Uptime SLA', value: '99.97%' },
      { label: 'SLA Penalty', value: '5% fee reduction' },
    ],
    highlight: 'Hospital-grade reliability with 4-hour emergency response guarantee',
  },
  {
    id: 'rural',
    title: 'HydraRural',
    subtitle: "Villages, Panchayats & Agro-Clusters",
    icon: <TreePine size={28} />,
    scale: '100–300 kW',
    output: '400–1,200 kg H₂/day',
    pricing: '₹380–470/kg',
    contract: '10 Years',
    mnre: '25% Rural Subsidy',
    color: '#84cc16',
    description: 'Decentralized hub with community ownership options. Solar + agricultural waste biogas hybrid. Transforms village STP or pond water into clean energy while creating local employment and revenue.',
    useCases: [
      'Smoke-free cooking for 200–500 households',
      'Agro-processing (cold storage, drying, milling)',
      'Microgrid backbone for village electrification',
      'Irrigation pump fuel (diesel elimination)',
      'Rural EV charging (e-tractors, e-rickshaws)',
    ],
    economics: [
      { label: 'Village Scale', value: '1,000–3,000 kg/month' },
      { label: 'Panchayat Revenue', value: '₹2–5 Lakhs/year' },
      { label: 'BPL Subsidized Rate', value: '₹300/kg' },
      { label: 'Carbon Credit Split', value: '50:50 with Panchayat' },
    ],
    highlight: 'Annadata to Urjadata — farmers become energy producers, not just consumers',
  },
  {
    id: 'commercial',
    title: 'HydraCommercial',
    subtitle: 'Malls, IT Parks, Hotels & Hospitals',
    icon: <Building2 size={28} />,
    scale: '200–500 kW',
    output: '800–2,000 kg H₂/day',
    pricing: '₹360–450/kg',
    contract: '10 Years',
    mnre: 'Accelerated Depreciation',
    color: '#f59e0b',
    description: 'Flagship architecturally integrated installation with solar façade. Dual-output capable (H₂ + fresh water merchant sales). Automated ESG reporting and LEED Platinum fast-track support.',
    useCases: [
      'Industrial-grade laundry (faster drying, fabric care)',
      'Central kitchen 24/7 fuel supply',
      'HVAC process heat (absorption chilling)',
      'Data center backup power',
      'Green event hosting (zero-emission conferences)',
    ],
    economics: [
      { label: 'Commercial Scale', value: '2,000–5,000 kg/month' },
      { label: 'Energy Cost Reduction', value: '25–35%' },
      { label: 'Rent Premium', value: '23% for green spaces' },
      { label: 'LEED Platinum', value: '18 months fast-track' },
    ],
    highlight: 'Net-Zero fast-track — LEED Platinum in 18 months vs 5 years traditional',
  },
  {
    id: 'msme',
    title: 'HydraMSME',
    subtitle: 'Manufacturing, Food Processing & Textiles',
    icon: <Factory size={28} />,
    scale: '300–750 kW',
    output: '1,200–3,000 kg H₂/day',
    pricing: '₹320–410/kg',
    contract: '10 Years',
    mnre: 'Priority Sector Lending',
    color: '#ef4444',
    description: 'Production-line integrated cluster achieving true Zero Liquid Discharge (ZLD). Industrial effluent becomes feedstock. Modular scaling pathway to HydraHybrid and HydraIndustrial tiers.',
    useCases: [
      'Process heat (boilers, furnaces, dryers)',
      'Thermal applications (annealing, curing)',
      'Forklift & intra-factory vehicle fleet fuel',
      'Cogeneration (heat + power)',
      'EU CBAM & global buyer ESG compliance',
    ],
    economics: [
      { label: 'MSME Scale', value: '5,000–15,000 kg/month' },
      { label: 'Export Premium', value: '5–15% via ESG mandate' },
      { label: 'ZLD', value: 'Zero Liquid Discharge' },
      { label: 'BRSR Filing', value: 'Automated Carbon Report' },
    ],
    highlight: 'Meet EU CBAM & global buyer ESG mandates — unlock 5–15% export premium',
  },
];

const Offerings: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="offerings" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
            Complete Offerings
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            5 Modular <span className="text-gradient">H₂ Pod</span> Tiers
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Zero Capex. Pay-per-kg pricing. 4–12 weeks installation. Full MNRE alignment.
          </p>
        </div>

        <div className="space-y-4">
          {offerings.map((item, index) => {
            const isOpen = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card overflow-hidden"
                style={{ border: isOpen ? `1px solid ${item.color}40` : '1px solid var(--border)' }}
              >
                {/* Header Row */}
                <button
                  onClick={() => setExpandedId(isOpen ? null : item.id)}
                  style={{ width: '100%', background: 'transparent', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div className="flex items-center justify-between p-6 gap-4">
                    <div className="flex items-center gap-5" style={{ flex: 1, minWidth: 0 }}>
                      {/* Icon */}
                      <div style={{
                        background: `${item.color}20`,
                        color: item.color,
                        padding: '0.75rem',
                        borderRadius: '0.75rem',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {item.icon}
                      </div>

                      {/* Title + subtitle */}
                      <div style={{ minWidth: 0 }}>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl font-bold" style={{ color: 'white' }}>{item.title}</h3>
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            color: item.color,
                            background: `${item.color}15`,
                            padding: '2px 10px',
                            borderRadius: 999,
                          }}>
                            {item.pricing}
                          </span>
                        </div>
                        <p className="text-muted text-sm mt-1">{item.subtitle}</p>
                      </div>
                    </div>

                    {/* Right: Stats + chevron */}
                    <div className="flex items-center gap-8">
                      <div className="hidden md:flex gap-8">
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Scale</div>
                          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'white' }}>{item.scale}</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Output</div>
                          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'white' }}>{item.output}</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>MNRE</div>
                          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: item.color }}>{item.mnre}</div>
                        </div>
                      </div>
                      <div style={{ color: item.color, flexShrink: 0 }}>
                        {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        borderTop: `1px solid ${item.color}25`,
                        margin: '0 1.5rem',
                      }} />
                      <div className="p-6 pt-5">
                        {/* Description */}
                        <p className="text-muted mb-8" style={{ lineHeight: 1.7, maxWidth: '72ch' }}>
                          {item.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Use Cases */}
                          <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '0.75rem',
                            padding: '1.25rem',
                            border: '1px solid var(--border)',
                          }}>
                            <div className="flex items-center gap-2 mb-4">
                              <Zap size={16} style={{ color: item.color }} />
                              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color }}>
                                Key Applications
                              </span>
                            </div>
                            <div className="space-y-3">
                              {item.useCases.map((uc, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 size={14} style={{ color: item.color, marginTop: 3, flexShrink: 0 }} />
                                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{uc}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Economics */}
                          <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '0.75rem',
                            padding: '1.25rem',
                            border: '1px solid var(--border)',
                          }}>
                            <div className="flex items-center gap-2 mb-4">
                              <TrendingDown size={16} style={{ color: item.color }} />
                              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color }}>
                                Economics
                              </span>
                            </div>
                            <div className="space-y-3">
                              {item.economics.map((ec, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.6rem', borderBottom: i < item.economics.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{ec.label}</span>
                                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'white' }}>{ec.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Highlight + CTA */}
                          <div style={{
                            background: `${item.color}10`,
                            borderRadius: '0.75rem',
                            padding: '1.25rem',
                            border: `1px solid ${item.color}30`,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                          }}>
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <Droplets size={16} style={{ color: item.color }} />
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color }}>
                                  Key Advantage
                                </span>
                              </div>
                              <p style={{ fontSize: '0.95rem', color: 'white', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                "{item.highlight}"
                              </p>
                              <div style={{
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '0.5rem',
                                padding: '0.75rem',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '0.5rem',
                              }}>
                                <div>
                                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contract</div>
                                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white' }}>{item.contract}</div>
                                </div>
                                <div>
                                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pricing</div>
                                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: item.color }}>{item.pricing}</div>
                                </div>
                              </div>
                            </div>
                            <a href="#contact" style={{
                              display: 'block',
                              marginTop: '1rem',
                              background: item.color,
                              color: 'white',
                              textAlign: 'center',
                              padding: '0.65rem',
                              borderRadius: '0.5rem',
                              fontWeight: 700,
                              fontSize: '0.875rem',
                              textDecoration: 'none',
                              transition: 'opacity 0.2s',
                            }}>
                              Get Free Consultation →
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
