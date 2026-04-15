import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import RecyclingCalculator from '../components/RecyclingCalculator';
import FounderSection from '../components/FounderSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RecyclingCalculator />
      <FounderSection />
      <ContactSection />
      <Footer />
    </div>
  );
}