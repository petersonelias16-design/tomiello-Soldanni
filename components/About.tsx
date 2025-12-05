import React from 'react';
import { UserCheck, Clock, MessageCircle, Globe, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const differentials = [
    { icon: <UserCheck className="h-6 w-6" />, text: "Atendimento humanizado" },
    { icon: <Clock className="h-6 w-6" />, text: "Acompanhamento contínuo" },
    { icon: <MessageCircle className="h-6 w-6" />, text: "Linguagem simples" },
    { icon: <Globe className="h-6 w-6" />, text: "Online e Presencial" },
    { icon: <Zap className="h-6 w-6" />, text: "Soluções rápidas" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Content */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-charcoal-900 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Ambiente de Escritório de Advocacia Moderno" 
              className="w-full h-auto rounded-sm shadow-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Sobre o Escritório</h4>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 font-bold mb-6">
                Tradição e Modernidade Jurídica
              </h2>
              <div className="w-20 h-1 bg-gold-500 mb-8"></div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              O escritório <strong className="text-charcoal-900">Tomiello & Soldaini – Advocacia</strong> atua há mais de uma década oferecendo soluções jurídicas modernas, eficientes e centradas nas necessidades reais dos clientes.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-gold-300 pl-4 italic">
              Nosso propósito é unir técnica, experiência e comunicação clara, proporcionando segurança desde o primeiro atendimento até a conclusão do caso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-charcoal-800">
                  <div className="text-gold-500 bg-gold-50 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};