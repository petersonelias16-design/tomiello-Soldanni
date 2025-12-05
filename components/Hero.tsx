import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Biblioteca Jurídica e Ambiente de Advocacia"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/90 to-charcoal-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl space-y-8 animate-fade-in-up">
          <div className="border-l-4 border-gold-500 pl-4 md:pl-6">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">
              Tomiello & <br />
              <span className="text-gold-400">Soldaini</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-200 font-light italic">
              Advocacia
            </p>
          </div>

          <p className="text-xl md:text-3xl text-white font-serif leading-relaxed">
            “Defesa jurídica com excelência e transparência.”
          </p>
          
          <p className="text-gray-300 text-lg max-w-xl">
            Atuação estratégica e humanizada com mais de 10 anos de experiência defendendo seus direitos.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <a 
              href="#contact" 
              className="group bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-gold-500/20"
            >
              Falar com Advogado
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex flex-col justify-center border-l border-gray-600 pl-4 md:ml-4">
              <span className="text-gray-400 text-sm uppercase tracking-wider">Localização</span>
              <span className="text-white font-medium">São Paulo — SP</span>
            </div>
          </div>
          
          <div className="pt-8 text-gray-500 text-sm">
            OAB/SP 336068 — Cristopher Tomiello Soldaini
          </div>
        </div>
      </div>
    </section>
  );
};