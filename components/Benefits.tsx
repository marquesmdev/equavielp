import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    "Conformidade legal com visão de negócio.",
    "Redução de riscos trabalhistas e jurídicos.",
    "Menos afastamentos, mais produtividade.",
    "Ambientes que retêm talentos.",
    "Sustentação da performance a longo prazo."
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                    alt="Corporate collaboration" 
                    className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
                    Nosso diferencial competitivo
                </h2>
                <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            <div className="text-teal-500 flex-shrink-0">
                                <CheckCircle2 size={28} />
                            </div>
                            <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};