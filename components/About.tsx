import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Award, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-brand-soft relative overflow-hidden" id="about">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm">QUEM SOMOS</span>
            <h2 className="text-4xl font-heading font-bold text-slate-900 mt-2 mb-6">
              Onde a lei encontra a vida real das empresas
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Desde 2005, a <span className="font-bold text-slate-800">EQUAVIE</span> atua como o núcleo estratégico de saúde organizacional da Mentori Gestão.
              </p>
              <p>
                Nossa missão vai muito além da conformidade. Trabalhamos para que sua empresa cresça sem adoecer pessoas e sem comprometer a longevidade do negócio. 
              </p>
              <p className="border-l-4 border-blue-500 pl-4 italic text-slate-700">
                Somos a ponte entre a saúde humana e a performance empresarial.
              </p>
            </div>
          </div>

          <div className="relative">
             <GlassCard className="relative z-10 p-10">
                <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                            <Award size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Expertise Comprovada</h3>
                            <p className="text-slate-600 mt-2">Mais de 50 grandes projetos entregues em ambientes de alta complexidade.</p>
                        </div>
                    </div>
                    <div className="w-full h-px bg-slate-200"></div>
                    <div className="flex items-start gap-4">
                        <div className="bg-teal-100 p-3 rounded-xl text-teal-600">
                            <TrendingUp size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Foco em Resultado</h3>
                            <p className="text-slate-600 mt-2">Atuação consultiva que transforma dados de saúde em inteligência de negócio.</p>
                        </div>
                    </div>
                </div>
             </GlassCard>
             
             {/* Simple decorative graphic behind card */}
             <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-slate-200 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};