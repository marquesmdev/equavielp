import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { BrainCircuit, Armchair } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">O que fazemos</span>
          <h2 className="text-4xl font-heading font-bold text-slate-900 mt-2">
            Soluções Integradas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: NR-1 */}
          <GlassCard className="hover:shadow-2xl transition-shadow duration-300 border-t-4 border-t-blue-500">
            <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600">
              <BrainCircuit size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Gestão de riscos psicossociais (NR-1)</h3>
            <p className="text-blue-600 font-medium mb-6">Inteligência organizacional aplicada à gestão.</p>
            
            <ul className="space-y-3 mb-8 text-slate-600">
              {['Mapeamento de riscos psicossociais', 'Diagnóstico de clima e liderança', 'Relatórios com linguagem executiva', 'Planos de ação preventivos'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-100">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">O Diferencial</p>
              <p className="text-slate-800 italic">"Transformamos a exigência da norma em um diagnóstico profundo da saúde da sua cultura."</p>
            </div>
          </GlassCard>

          {/* Card 2: NR-17 */}
          <GlassCard className="hover:shadow-2xl transition-shadow duration-300 border-t-4 border-t-teal-500" delay={0.2}>
            <div className="mb-6 bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-600">
              <Armchair size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Ergonomia e produtividade (NR-17)</h3>
            <p className="text-teal-600 font-medium mb-6">Ergonomia é saúde, eficiência e prevenção.</p>
            
            <ul className="space-y-3 mb-8 text-slate-600">
              {['Análise ergonômica do trabalho (AET)', 'Ajustes físicos e comportamentais', 'Educação de lideranças', 'Redução de afastamentos'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-100">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">O Diferencial</p>
              <p className="text-slate-800 italic">"Foco na eficiência operacional e na redução real dos índices de afastamento."</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};