import React from 'react';
import { Droplets, ArrowUpRight, Globe, Mail, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Droplets size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">HydraFlows <span className="text-primary">AI</span></span>
            </div>
            <p className="text-muted mb-6">
              Leading the global transition to sustainable, decentralized green hydrogen energy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:text-primary transition-all"><MessageSquare size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:text-primary transition-all"><Globe size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:text-primary transition-all"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Solutions</h4>
            <ul className="space-y-4 text-muted">
              <li><a href="#" className="hover:text-primary flex items-center gap-1">HydraHome <ArrowUpRight size={14} /></a></li>
              <li><a href="#" className="hover:text-primary flex items-center gap-1">HydraMicro <ArrowUpRight size={14} /></a></li>
              <li><a href="#" className="hover:text-primary flex items-center gap-1">HydraRural <ArrowUpRight size={14} /></a></li>
              <li><a href="#" className="hover:text-primary flex items-center gap-1">HydraCommercial <ArrowUpRight size={14} /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-muted">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Sustainability Report</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-muted mb-4 text-sm">Join 5000+ industry experts receiving our monthly energy insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@company.com" 
                className="bg-white/5 border border-border p-3 rounded-lg flex-1 outline-none text-sm"
              />
              <button className="bg-primary px-4 rounded-lg hover:bg-primary-dark transition-all">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© 2026 HydraFlows AI Platform. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
            <a href="#" className="hover:text-white transition-all">ESG Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
