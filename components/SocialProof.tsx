import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  "Petrobras",
  "PUCRS",
  "TRE",
  "STEMAC",
  "FITESA",
  "FEPPS"
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm font-semibold tracking-widest uppercase mb-8"
        >
          Empresas que confiam na nossa estratégia
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-heading font-bold text-slate-400 hover:text-slate-700 transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};