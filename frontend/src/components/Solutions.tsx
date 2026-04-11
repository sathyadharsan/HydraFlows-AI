import React from 'react';
import { Home, Hospital, TreePine, Building2, Factory, TrendingDown, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'HydraHome',
    target: 'Apartment Societies & Villas',
    icon: <Home className="text-primary" size={32} />,
    scale: '5–50 kW',
    output: '20–200 kg H₂/day',
    pricing: '₹450–580/kg',
    description: 'Ultra-compact pod replacing LPG for community cooking and backup power.',
    useCases: 'Community cooking, swimming pool heating, EV charging.',
    benefits: 'Every kg H₂ treats 12L wastewater (90% recovery).',
    savings: '30–40% vs. volatile LPG prices.'
  },
  {
    title: 'HydraMicro',
    target: 'Hotels & Hospitals',
    icon: <Hospital className="text-primary" size={32} />,
    scale: '50–200 kW',
    output: '200–800 kg H₂/day',
    pricing: '₹400–500/kg',
    description: 'N+1 redundant cluster configuration with medical-grade reliability.',
    useCases: 'Critical medical oxygen co-generation, zero-soot commercial kitchens.',
    benefits: '99.97% uptime SLA with 4-hour emergency response.',
    savings: '₹8–25 lakhs annual savings.'
  },
  {
    title: 'HydraRural',
    target: 'Villages & Panchayats',
    icon: <TreePine className="text-primary" size={32} />,
    scale: '100–300 kW',
    output: '400–1,200 kg H₂/day',
    pricing: '₹380–470/kg',
    description: 'Decentralized energy hubs transforming villages from consumers to producers.',
    useCases: 'Smoke-free cooking, agro-processing (cold storage), irrigation.',
    benefits: 'Creates 5–10 skilled rural jobs per hub.',
    savings: 'Subsidized BPL rate: ₹300/kg.'
  },
  {
    title: 'HydraCommercial',
    target: 'IT Parks & Malls',
    icon: <Building2 className="text-primary" size={32} />,
    scale: '200–500 kW',
    output: '800–2,000 kg H₂/day',
    pricing: '₹360–450/kg',
    description: 'Architecturally integrated H₂ with automated ESG and LEED Platinum support.',
    useCases: 'Data center backup, industrial laundry, HVAC process heat.',
    benefits: 'LEED Platinum fast-track in 18 months.',
    savings: '23% premium rent for green spaces.'
  },
  {
    title: 'HydraMSME',
    target: 'Manufacturing & Textiles',
    icon: <Factory className="text-primary" size={32} />,
    scale: '300–750 kW',
    output: '1,200–3,000 kg H₂/day',
    pricing: '₹320–410/kg',
    description: 'Zero Liquid Discharge (ZLD) systems turning industrial effluent into feedstock.',
    useCases: 'Boilers, furnaces, annealing, export compliance (CBAM).',
    benefits: 'Meet global buyer ESG mandates & capture export premiums.',
    savings: 'Match large industry energy economics.'
  }
];

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="section-padding bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-bold mb-4">
            OFFERING PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Modular <span className="text-primary">H₂ Pod</span> Tiers</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Decentralized green hydrogen through seven scalable tiers. 
            Zero Capex, Water-Positive, and AI-Optimized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover:border-primary transition-all group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-secondary p-4 rounded-xl group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted uppercase tracking-widest leading-none mb-1">Scale</div>
                  <div className="text-sm font-bold text-white">{item.scale}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <div className="text-primary text-sm font-semibold mb-4 uppercase tracking-wider">{item.target}</div>
              
              <p className="text-muted mb-6 text-sm flex-grow">{item.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 bg-white/5 p-4 rounded-xl border border-border">
                <div>
                  <div className="text-[10px] text-muted uppercase mb-1">Output</div>
                  <div className="text-xs font-bold">{item.output}</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted uppercase mb-1">Pricing</div>
                  <div className="text-xs font-bold text-primary">{item.pricing}</div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <TrendingDown size={18} className="text-primary mt-1 shrink-0" />
                  <div>
                    <div className="text-sm font-bold">Manager's Insight</div>
                    <div className="text-xs text-muted leading-relaxed">{item.savings}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets size={18} className="text-primary mt-1 shrink-0" />
                  <div>
                    <div className="text-sm font-bold">ESG Benefit</div>
                    <div className="text-xs text-muted leading-relaxed">{item.benefits}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
