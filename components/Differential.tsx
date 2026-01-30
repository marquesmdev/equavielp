import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Users, Brain } from 'lucide-react';

interface DifferentialItem {
  icon: React.ReactNode;
  label: string;
  desc: string;
  color: string;
  delay: number;
}

interface CardProps {
  item: DifferentialItem;
  align: 'left' | 'right';
}

const Card: React.FC<CardProps> = ({ item, align }) => (
  <motion.div
    initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: item.delay, duration: 0.5 }}
    className={`group relative flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 w-full md:w-64 ${align === 'right' ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}
  >
    {/* Connector Line (Desktop Only) */}
    <div className={`hidden md:block absolute top-1/2 w-8 h-px bg-slate-300 ${align === 'right' ? '-left-8' : '-right-8'}`} />
    <div className={`hidden md:block absolute top-1/2 w-2 h-2 rounded-full bg-slate-300 ${align === 'right' ? '-left-8' : '-right-9'}`} />

    <div className={`p-3 rounded-xl flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
      {item.icon}
    </div>
    <div>
      <h3 className="font-semibold text-slate-800 text-sm md:text-base leading-tight">
        {item.label}
      </h3>
      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
    </div>
  </motion.div>
);

export const Differential: React.FC = () => {
  const leftItems: DifferentialItem[] = [
    { 
      icon: <Heart className="w-6 h-6" />, 
      label: "Saúde Organizacional", 
      desc: "Bem-estar como estratégia",
      color: "bg-rose-100 text-rose-600",
      delay: 0.2
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      label: "Cultura Forte", 
      desc: "Engajamento e pertencimento",
      color: "bg-amber-100 text-amber-600",
      delay: 0.4 
    },
  ];

  const rightItems: DifferentialItem[] = [
    { 
      icon: <Brain className="w-6 h-6" />, 
      label: "Liderança Consciente", 
      desc: "Gestão humanizada",
      color: "bg-indigo-100 text-indigo-600",
      delay: 0.3
    },
    { 
      icon: <ShieldCheck className="w-6 h-6" />, 
      label: "Prevenção de Riscos", 
      desc: "Segurança jurídica e física",
      color: "bg-emerald-100 text-emerald-600",
      delay: 0.5
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Nosso papel estratégico
          </h2>
          <p className="text-slate-600 text-lg">
            Atuamos como o núcleo técnico-humano, conectando quatro pilares essenciais para a longevidade do negócio.
          </p>
        </div>

        {/* Main Layout Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12 md:gap-0">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:gap-24 w-full md:w-1/3 items-center md:items-end order-2 md:order-1 px-4 md:px-0">
            {leftItems.map((item, idx) => (
              <Card key={idx} item={item} align="left" />
            ))}
          </div>

          {/* Center Column (Hub) */}
          <div className="relative z-10 w-full md:w-1/3 flex justify-center order-1 md:order-2">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative w-48 h-48 md:w-56 md:h-56 bg-slate-900 text-white rounded-full flex flex-col items-center justify-center shadow-2xl shadow-slate-400/50 border-[6px] border-white z-20"
            >
               {/* Animated Pulse Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
              
              <span className="font-heading font-bold text-2xl tracking-wider">EQUAVIE</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">Núcleo Estratégico</span>
              
              {/* Decorative Center Lines (Desktop) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-slate-300 rounded-full -z-10 hidden md:block opacity-50"></div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:gap-24 w-full md:w-1/3 items-center md:items-start order-3 px-4 md:px-0">
            {rightItems.map((item, idx) => (
              <Card key={idx} item={item} align="right" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};