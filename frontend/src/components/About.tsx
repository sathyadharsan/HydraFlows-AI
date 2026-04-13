import React from 'react';
import { Target, Eye, LeafyGreen, ShieldCheck, Globe, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-bg-dark overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000" 
                alt="Renewable Future" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
          
          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pioneering the <span className="text-primary text-gradient">Decentralized</span> Energy Future
            </h2>
            <p className="text-lg text-muted mb-10 leading-relaxed">
              At HydraFlows AI, we believe that clean energy should be accessible, affordable, and worry-free. 
              Our mission is to eliminate the technical and financial barriers to green hydrogen adoption through 
              modular infrastructure and AI-driven efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-border hover:border-primary/30 transition-all">
                <div className="bg-primary/10 p-3 rounded-lg text-primary w-fit mb-4">
                  <Target size={24} />
                </div>
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-muted">To democratize clean energy for all through zero-capex, infrastructure-light solutions.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-border hover:border-primary/30 transition-all">
                <div className="bg-primary/10 p-3 rounded-lg text-primary w-fit mb-4">
                  <Eye size={24} />
                </div>
                <h4 className="font-bold mb-2">Our Vision</h4>
                <p className="text-sm text-muted">A decentralized hydrogen-powered future where every community is energy independent.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact Stats */}
        <div className="mt-24 pt-16 border-t border-border grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Carbon Reduced', value: '500k Tons', icon: <LeafyGreen className="text-primary mb-4" /> },
            { label: 'Uptime SLA', value: '99.99%', icon: <ShieldCheck className="text-primary mb-4" /> },
            { label: 'Facilities Wired', value: '1,200+', icon: <Building2 className="text-primary mb-4" /> },
            { label: 'Global Market', value: '#1 HaaS', icon: <Globe className="text-primary mb-4" /> },
          ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
                <div className="flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-muted uppercase tracking-widest font-semibold">{stat.label}</div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
