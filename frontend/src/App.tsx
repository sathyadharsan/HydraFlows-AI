import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Offerings from './components/Offerings';
import Verticals from './components/Verticals';
import About from './components/About';
import Testimonials from './components/Testimonials';
import DashboardMockup from './components/DashboardMockup';
import ContactForm from './components/ContactForm';
import ESGHighlights from './components/ESGHighlights';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div data-aos="fade-up"><DashboardMockup /></div>
      <div data-aos="fade-up"><Solutions /></div>
      <div data-aos="fade-up"><Offerings /></div>
      <div data-aos="fade-up"><Verticals /></div>
      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-up"><Testimonials /></div>
      <div data-aos="fade-up"><ESGHighlights /></div>
      <div data-aos="fade-up"><ContactForm /></div>
      <Footer />
    </div>
  );
}

export default App;
