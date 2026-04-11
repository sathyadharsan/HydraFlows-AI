import React from 'react';
import { ChevronRight, Zap, Leaf, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-bg-dark">
      {/* Subtle Background Elements (Low Z-Index) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/5 blur-[100px] -z-10"></div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-border px-4 py-1.5 rounded-full mb-8 text-primary text-sm font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Pioneering Zero-Capex Hydrogen
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
              Clean Energy. <br />
              <span className="text-gradient">Zero Upfront.</span> <br />
              Water-Positive.
            </h1>

            <p className="text-lg md:text-xl text-muted mb-10 max-w-xl leading-relaxed">
              Modular Green Hydrogen-as-a-Service (HaaS). 
              AI-optimized solutions delivering 99.9% uptime with 25–35% cost savings for industries and communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <a href="#contact" className="btn btn-primary text-lg px-10 py-4 justify-center">
                Get Started <ChevronRight size={20} />
              </a>
              <a href="#solutions" className="btn btn-outline text-lg px-10 py-4 justify-center border-border text-white hover:bg-white/5">
                View Tiers
              </a>
            </div>

            {/* Trust Badges Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 border border-border/60 rounded-xl bg-white/5 w-full mt-10 backdrop-blur-sm">
              <div className="flex items-center gap-3 justify-center">
                <Leaf className="text-primary" size={20} />
                <span className="text-xs font-bold uppercase tracking-widest text-muted">100% Green</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Zap className="text-primary" size={20} />
                <span className="text-xs font-bold uppercase tracking-widest text-muted">AI Managed</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <ShieldCheck className="text-primary" size={20} />
                <span className="text-xs font-bold uppercase tracking-widest text-muted">Zero Capex</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-2xl">
              {/* Decorative Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full translate-x-10 translate-y-10"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                  alt="Industrial Green Energy Hub" 
                  className="w-full h-auto rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Floating Performance Indicator */}
              <div className="absolute -bottom-8 -right-8 bg-secondary/80 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-xl animate-fade hidden sm:block">
                <div className="text-primary font-bold text-3xl mb-1">35%</div>
                <div className="text-xs text-muted uppercase tracking-wider font-bold">Cost Efficiency</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
