import { motion } from 'framer-motion';
import { Leaf, Target, Award } from 'lucide-react';

const stats = [
{ value: '10K+', label: 'Tons Recycled Annually' },
{ value: '50+', label: 'Corporate Partners' },
{ value: '100%', label: 'Vision 2030 Aligned' }];


const values = [
{
  icon: Leaf,
  title: 'Eco Innovation',
  desc: 'Pioneering advanced recycling technologies tailored for the Saudi market and climate.'
},
{
  icon: Target,
  title: 'Vision 2030',
  desc: 'Directly supporting the Kingdom\'s sustainability goals and circular economy ambitions.'
},
{
  icon: Award,
  title: 'Quality First',
  desc: 'Certified processes ensuring the highest standards in waste management and material recovery.'
}];


export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <span className="font-inter text-xs tracking-widest uppercase text-secondary font-semibold">
            Who We Are
          </span>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-5">
            Recycling Redefined in Riyadh
          </h2>
          <p className="font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-5">
            Recyclet Saudi is a Riyadh-based recycling and sustainability company committed to supporting Saudi Arabia's transition toward a circular economy and responsible waste management. Our mission is to transform waste into valuable resources by providing efficient recycling solutions for businesses, industries, and communities across the Kingdom.
          </p>
          <p className="font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-5">
            We specialize in the collection, sorting, processing, and supply of recyclable materials, including ferrous and non-ferrous metal scrap, plastic recyclables, and other recoverable materials. These are processed and supplied to local factories and manufacturers as secondary raw materials, helping industries reduce reliance on virgin resources and lower their environmental footprint.
          </p>
          

          
          <p className="font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our approach goes beyond traditional recycling. We work with organizations to implement ESG-aligned sustainability practices, helping companies manage waste more responsibly while contributing to environmental goals and regulatory compliance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((item, i) =>
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center py-8">
            
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-inter text-xs lg:text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}