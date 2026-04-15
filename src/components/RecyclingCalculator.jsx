import { useState } from 'react';
import { motion } from 'framer-motion';
import { TreePine, Zap, Wind, Droplets } from 'lucide-react';

const WASTE_TYPES = [
  { id: 'paper', label: 'Paper & Cardboard', color: 'bg-amber-100 text-amber-800' },
  { id: 'plastic', label: 'Plastic', color: 'bg-blue-100 text-blue-800' },
  { id: 'metal', label: 'Metal & Cans', color: 'bg-slate-100 text-slate-800' },
  { id: 'glass', label: 'Glass', color: 'bg-teal-100 text-teal-800' },
];

// Impact per kg of each material
const IMPACT = {
  paper:   { trees: 0.017, energy: 4.1,  co2: 0.9,  water: 26 },
  plastic: { trees: 0,     energy: 5.8,  co2: 1.5,  water: 2  },
  metal:   { trees: 0,     energy: 14.0, co2: 2.1,  water: 40 },
  glass:   { trees: 0,     energy: 0.67, co2: 0.31, water: 1.5},
};

const results = [
  { icon: TreePine, label: 'Trees Saved',        key: 'trees',  unit: 'trees',  color: 'text-green-600',  bg: 'bg-green-50'  },
  { icon: Zap,      label: 'Energy Conserved',   key: 'energy', unit: 'kWh',    color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { icon: Wind,     label: 'CO₂ Reduced',        key: 'co2',    unit: 'kg',     color: 'text-primary',    bg: 'bg-teal-50'   },
  { icon: Droplets, label: 'Water Saved',        key: 'water',  unit: 'liters', color: 'text-blue-600',   bg: 'bg-blue-50'   },
];

export default function RecyclingCalculator() {
  const [weights, setWeights] = useState({ paper: '', plastic: '', metal: '', glass: '' });

  const totals = results.reduce((acc, r) => {
    acc[r.key] = WASTE_TYPES.reduce((sum, t) => {
      const w = parseFloat(weights[t.id]) || 0;
      return sum + w * IMPACT[t.id][r.key];
    }, 0);
    return acc;
  }, {});

  const hasInput = Object.values(weights).some(v => parseFloat(v) > 0);

  return (
    <section id="calculator" className="py-24 lg:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-inter text-xs tracking-widest uppercase text-secondary font-semibold">
            Your Impact
          </span>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Recycling Impact Calculator
          </h2>
          <p className="font-inter text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Enter the approximate weight (kg) of materials you recycle per month to see your
            estimated positive environmental impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="font-inter font-semibold text-foreground mb-6">Monthly Waste (kg)</h3>
            <div className="space-y-5">
              {WASTE_TYPES.map((type) => (
                <div key={type.id}>
                  <label className="flex items-center justify-between mb-2">
                    <span className="font-inter text-sm font-medium text-foreground">{type.label}</span>
                    <span className={`font-inter text-xs px-2 py-0.5 rounded-full ${type.color}`}>
                      {weights[type.id] ? `${weights[type.id]} kg` : '0 kg'}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={weights[type.id] || 0}
                    onChange={(e) => setWeights(prev => ({ ...prev, [type.id]: e.target.value }))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary bg-muted"
                  />
                  <div className="flex justify-between font-inter text-xs text-muted-foreground mt-1">
                    <span>0 kg</span><span>1,000 kg</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setWeights({ paper: '', plastic: '', metal: '', glass: '' })}
              className="mt-6 font-inter text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Reset all
            </button>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {!hasInput ? (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center h-full flex flex-col items-center justify-center gap-3">
                <TreePine className="w-10 h-10 text-muted-foreground/40" />
                <p className="font-inter text-muted-foreground text-sm">
                  Adjust the sliders to see your estimated impact
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {results.map((r, i) => (
                  <motion.div
                    key={r.key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className={`rounded-2xl border border-border p-6 ${r.bg}`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center mb-4`}>
                      <r.icon className={`w-5 h-5 ${r.color}`} />
                    </div>
                    <div className={`font-playfair text-2xl font-bold ${r.color} mb-1`}>
                      {totals[r.key] >= 1000
                        ? `${(totals[r.key] / 1000).toFixed(1)}k`
                        : totals[r.key] < 1
                        ? totals[r.key].toFixed(2)
                        : totals[r.key].toFixed(1)}
                    </div>
                    <div className="font-inter text-xs text-muted-foreground">{r.unit}</div>
                    <div className="font-inter text-sm font-medium text-foreground mt-1">{r.label}</div>
                  </motion.div>
                ))}

                <div className="col-span-2 bg-primary rounded-2xl p-5 text-center">
                  <p className="font-inter text-sm text-primary-foreground/80 mb-1">Total waste recycled</p>
                  <p className="font-playfair text-2xl font-bold text-primary-foreground">
                    {Object.values(weights).reduce((s, v) => s + (parseFloat(v) || 0), 0).toFixed(0)} kg/month
                  </p>
                  <a href="#contact" className="inline-block mt-3 font-inter text-xs font-semibold bg-secondary text-secondary-foreground px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Start Recycling With Us
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}