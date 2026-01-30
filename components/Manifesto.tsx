import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <div className="flex justify-center mb-8">
                    <Quote className="text-blue-400 w-12 h-12 opacity-50" />
                </div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-blue-300 uppercase mb-8">Nossa Visão</h2>
                <p className="text-3xl md:text-5xl font-heading font-medium leading-tight">
                    "Acreditamos que empresas saudáveis são construídas por líderes conscientes. A EQUAVIE existe para garantir que o crescimento da sua empresa não aconteça às custas da saúde das pessoas."
                </p>
            </motion.div>
        </div>
    </section>
  );
};