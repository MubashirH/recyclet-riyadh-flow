import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+966 54 310 3077',
    href: 'tel:+966543103077',
    action: 'Call Now',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@recycletsaudi.com',
    href: 'mailto:info@recycletsaudi.com',
    action: 'Send Email',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Metal Scrap City, Riyadh-Dammam Highway, Riyadh, KSA',
    href: 'https://maps.app.goo.gl/9sbMvAyQz3nr8htX6',
    action: 'Get Directions',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Sat – Thu, 8:00 AM – 6:00 PM',
    href: null,
    action: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-xs tracking-widest uppercase text-secondary font-semibold">
            Get in Touch
          </span>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-5">
            Ready to Start Recycling?
          </h2>
          <p className="font-inter text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Whether you're a business looking for recycling services or have questions about
            our programs, we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-foreground text-sm mb-1">{method.label}</h3>
              <p className="font-inter text-sm text-muted-foreground mb-4">{method.value}</p>
              {method.href && (
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 font-inter text-sm font-medium text-primary hover:underline"
                >
                  {method.action}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Have a Project in Mind?
          </h3>
          <p className="font-inter text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Let's discuss how Recyclet Saudi can help your organization achieve its sustainability
            goals with our tailored recycling solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966543103077"
              className="inline-flex items-center justify-center gap-2 font-inter text-sm font-semibold bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="mailto:info@recycletsaudi.com"
              className="inline-flex items-center justify-center gap-2 font-inter text-sm font-medium border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}