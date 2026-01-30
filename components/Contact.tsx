import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">Vamos conversar?</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2 mb-6">
            Transforme a obrigação legal em vantagem competitiva.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Fale com nossos consultores especialistas e descubra como alinhar saúde e performance.
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-green-900/30"
          >
            <MessageCircle size={22} />
            Falar no WhatsApp
          </motion.a>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            {/* Address */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors"
            >
                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400 mb-4">
                    <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-white font-semibold mb-2">Endereço</h4>
                <p className="text-slate-400 text-sm">Av. Carlos Gomes, 700<br />Porto Alegre, RS</p>
            </motion.div>

            {/* Email */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors"
            >
                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400 mb-4">
                    <Mail className="w-6 h-6" />
                </div>
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <a href="mailto:contato@equavie.com.br" className="text-slate-400 text-sm hover:text-blue-300 transition-colors">contato@equavie.com.br</a>
            </motion.div>

            {/* Phone */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors"
            >
                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400 mb-4">
                    <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-white font-semibold mb-2">Telefone</h4>
                <p className="text-slate-400 text-sm">(51) 3333-3333</p>
            </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-heading font-bold tracking-tight text-white">
            EQUAVIE
          </div>
          <p className="text-slate-500 text-sm text-center md:text-right">
            Núcleo Estratégico da Mentori Gestão © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};