import { motion } from 'framer-motion';
import { Truck, BarChart3, Lightbulb, Cpu } from 'lucide-react';

const SERVICES_IMG = 'https://media.base44.com/images/public/69d355fa8049589838ea7988/7bf596f5c_generated_4eba8ea2.png';

const services = [
  {
    icon: Truck,
    title: 'Scrap Collection & Recycling',
    desc: 'Scheduled pickup and processing of scrap materials — metals, plastics, paper, and more — from residential, commercial, and industrial sites across Riyadh.',
    comingSoon: false,
  },
  {
    icon: BarChart3,
    title: 'ESG & Sustainability Support',
    desc: 'We help businesses measure, report, and improve their environmental performance — from ESG audits to sustainability strategy aligned with Vision 2030.',
    comingSoon: true,
  },
  {
    icon: Lightbulb,
    title: 'Upcycling & Sustainability Workshops',
    desc: 'Hands-on workshops for schools, corporates, and communities that transform waste into value and build a culture of sustainability.',
    comingSoon: true,
  },
  {
    icon: Cpu,
    title: 'Tech-Supported Recycling',
    desc: 'Book scrap pickups online with ease - backed by a complete dashboard to track your collections, monitor recycling progress, and receive detailed monthly reports.',
    comingSoon: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-inter text-xs tracking-widest uppercase text-secondary font-semibold">
            What We Offer
          </span>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Comprehensive Recycling Services
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From scrap collection to sustainability consulting, we provide end-to-end solutions
            that help businesses and communities make a measurable environmental impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-card border rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                service.comingSoon
                  ? 'border-dashed border-border opacity-75'
                  : 'border-border hover:shadow-lg hover:border-primary/20'
              }`}
            >
              {service.comingSoon && (
                <span className="absolute top-4 right-4 font-inter text-xs font-semibold bg-secondary/20 text-secondary-foreground px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-foreground text-base mb-3">{service.title}</h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}