import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Droplets size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">HydraFlows <span className="text-primary">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-primary font-medium">Home</a>
          <a href="#solutions" className="hover:text-primary font-medium">Solutions</a>
          <a href="#offerings" className="hover:text-primary font-medium">Offerings</a>
          <a href="#verticals" className="hover:text-primary font-medium">Verticals</a>
          <a href="#about" className="hover:text-primary font-medium">About</a>
          <a href="#contact" className="btn btn-primary flex items-center justify-center">Book Demo</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-xl border-t border-border p-6 flex flex-col gap-6 animate-fade">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#solutions" onClick={() => setIsOpen(false)}>Solutions</a>
          <a href="#offerings" onClick={() => setIsOpen(false)}>Offerings</a>
          <a href="#verticals" onClick={() => setIsOpen(false)}>Verticals</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="btn btn-primary w-fit" onClick={() => setIsOpen(false)}>Book Demo</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
