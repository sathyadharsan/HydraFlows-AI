import React from 'react';
import { Leaf, Award, Recycle, ShieldCheck } from 'lucide-react';

const ESGHighlights: React.FC = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12 glass-card p-10 border-primary/20">
          <div className="md:w-1/3">
            <h3 className="text-3xl font-bold mb-4">Our <span className="text-primary">ESG</span> Commitment</h3>
            <p className="text-muted">
              We don't just provide energy; we provide a path to corporate responsibility and environmental stewardship.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Leaf className="text-primary shrink-0" size={32} />
              <div>
                <h4 className="font-bold">Carbon Neutrality</h4>
                <p className="text-sm text-muted">Helping companies reach Net Zero targets 10 years ahead of schedule.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="text-primary shrink-0" size={32} />
              <div>
                <h4 className="font-bold">Compliant Systems</h4>
                <p className="text-sm text-muted">Fully compliant with SEBI and global ESG reporting standards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Recycle className="text-primary shrink-0" size={32} />
              <div>
                <h4 className="font-bold">Circular Economy</h4>
                <p className="text-sm text-muted">Zero-waste hydrogen production with byproduct recycling.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="text-primary shrink-0" size={32} />
              <div>
                <h4 className="font-bold">Governance</h4>
                <p className="text-sm text-muted">Transparent reporting on energy sources and uptime performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGHighlights;
