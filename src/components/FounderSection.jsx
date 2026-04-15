import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const FOUNDER_IMG = 'https://media.base44.com/images/public/69d355fa8049589838ea7988/ff8e2d035_Aftershoot-Images-IMG_15272.png';

const insights = [
  {
    quote: "Sustainability isn't just a trend — it's the foundation of Saudi Arabia's future economy. Every kilogram we recycle brings us closer to the Kingdom's vision.",
    context: 'On the mission of Recyclet Saudi',
  },
  {
    quote: "We started with a simple idea: waste is not waste if you know what to do with it. We learned from the ground up — working directly in the field, understanding the recycling market from the inside out, building relationships with collectors, factories, and suppliers before anything else. Today, we're proving that recycling can be a profitable, impactful business in the GCC.",
    context: 'On building the company',
  },
  {
    quote: 'Vision 2030 gave us the roadmap. Our job is to execute — with precision, innovation, and an unwavering commitment to the environment.',
    context: 'On Vision 2030 alignment',
  },
];

export default function FounderSection() {
  return (
    <section id="founder" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-xs tracking-widest uppercase text-secondary font-semibold">
            Leadership
          </span>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Founder's Insights
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={FOUNDER_IMG}
                  alt="Founder of Recyclet Saudi"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/20 rounded-2xl -z-10" />
            </div>
            <div className="mt-6 text-center lg:text-left">
              <h3 className="font-playfair text-xl font-bold text-foreground">Nahij Nazeer</h3>
              <p className="font-inter text-sm text-muted-foreground mt-1">Founder & CEO, Recyclet Saudi</p>
              <p className="font-inter text-sm text-muted-foreground mt-3 leading-relaxed">
                A passionate environmentalist and entrepreneur with over 10 years
                of experience in sustainability and waste management across the GCC region.
              </p>
              <a href="mailto:ceo@recycletsaudi.com" className="font-inter text-sm text-primary hover:underline mt-2 inline-block">
                ceo@recycletsaudi.com
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-6">
            {insights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:shadow-md hover:border-primary/15 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-secondary/60 mb-4" />
                <p className="font-playfair text-foreground text-lg leading-relaxed italic mb-4">
                  "{item.quote}"
                </p>
                <span className="font-inter text-xs text-muted-foreground tracking-wide uppercase">
                  {item.context}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}