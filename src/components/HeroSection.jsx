import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/69d355fa8049589838ea7988/16662c900_generated_image.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Modern recycling facility in Riyadh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-inter text-xs tracking-widest uppercase text-primary-foreground/80">
              Leading Recycling in KSA
            </span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Building a{' '}
            <span className="text-secondary">Sustainable</span>{' '}
            Future for Saudi Arabia
          </h1>

          <p className="font-inter text-base lg:text-lg text-primary-foreground/70 leading-relaxed mb-10 max-w-lg">
            Recyclet Saudi delivers innovative recycling solutions across Riyadh,
            transforming waste management in alignment with Saudi Vision 2030.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="font-inter text-sm font-semibold bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Request a Quote
            </a>
            <a
              href="#about"
              className="font-inter text-sm font-medium border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50"
      >
        <span className="font-inter text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}