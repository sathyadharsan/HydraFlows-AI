import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CloudRain, Coins, Activity } from 'lucide-react';

const DashboardMockup: React.FC = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Real-time <span className="text-primary">Impact</span> Dashboard</h2>
            <p className="text-xl text-muted mb-8">
              Monitor your sustainability metrics and financial performance in real-time. 
              Our AI-driven dashboard provides deep insights into energy consumption and savings.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <CloudRain className="text-primary" />, title: "CO2 Emissions Saved", value: "1,240 Tons", desc: "Equivalent to planting 50,000 trees." },
                { icon: <Coins className="text-primary" />, title: "Cost Savings", value: "$45,200", desc: "YTD savings compared to grid vs. hydrogen." },
                { icon: <Activity className="text-primary" />, title: "Uptime Reliability", value: "99.99%", desc: "Autonomous failover and grid-balancing." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 relative"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <BarChart3 className="text-primary" size={24} />
                <span className="font-bold">AI Smart Flow Optimizer</span>
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-8 bg-primary rounded-full"></div>
                <div className="h-2 w-8 bg-secondary rounded-full border border-border"></div>
              </div>
            </div>

            {/* Mock Chart */}
            <div className="flex items-end gap-3 h-48 mb-6">
              {[40, 60, 45, 90, 65, 80, 50, 70, 85, 95, 60, 75].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="flex-1 bg-gradient-to-t from-primary to-primary-light rounded-t-sm"
                ></motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-xs text-muted mb-1 uppercase tracking-widest">Active Units</div>
                <div className="text-xl font-bold">124</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-xs text-muted mb-1 uppercase tracking-widest">Efficiency</div>
                <div className="text-xl font-bold">94.2%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardMockup;
