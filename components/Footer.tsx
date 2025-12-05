import React from 'react';
import { Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="h-8 w-8 text-gold-500" />
              <div className="font-serif font-bold text-xl leading-none">
                <span className="block">TOMIELLO &</span>
                <span className="block">SOLDAINI</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm">
              Defesa jurídica com excelência, transparência e atendimento humanizado. Mais de 10 anos garantindo seus direitos.
            </p>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Menu</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contato</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-300">
              <li><span className="text-gray-500 cursor-not-allowed">Política de Privacidade</span></li>
              <li><span className="text-gray-500 cursor-not-allowed">Termos de Uso</span></li>
              <li className="mt-4 text-sm text-gray-500">OAB/SP 336068</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tomiello & Soldaini Advocacia. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
        </div>
      </div>
    </footer>
  );
};