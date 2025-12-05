import React from 'react';
import { ShoppingCart, Users, Briefcase, FileText, Gavel, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'consumer',
    title: 'Direito do Consumidor',
    description: 'Cobranças abusivas, negativação indevida, golpes digitais.',
    details: 'Resolver problemas de consumo de forma rápida e eficiente.',
    icon: <ShoppingCart className="h-8 w-8" />
  },
  {
    id: 'family',
    title: 'Direito de Família',
    description: 'Divórcio, guarda, pensão alimentícia, inventário, união estável.',
    details: 'Atuação sensível e estratégica em questões familiares.',
    icon: <Users className="h-8 w-8" />
  },
  {
    id: 'labor',
    title: 'Direito do Trabalho',
    description: 'Demissões, verbas rescisórias, FGTS, horas extras.',
    details: 'Defesa dos direitos trabalhistas do trabalhador ou do empregador.',
    icon: <Briefcase className="h-8 w-8" />
  },
  {
    id: 'civil',
    title: 'Processual Civil',
    description: 'Ações judiciais, recursos, execuções, contratos e litígios cíveis.',
    details: 'Atuação técnica e precisa para resultados sólidos.',
    icon: <FileText className="h-8 w-8" />
  },
  {
    id: 'labor-process',
    title: 'Processual do Trabalho',
    description: 'Atuação completa em demandas trabalhistas, de petições a audiências.',
    details: 'Experiência prática para conduzir processos com segurança.',
    icon: <Gavel className="h-8 w-8" />
  }
];

export const PracticeAreas: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl text-charcoal-900 font-bold mb-4">Áreas de Atuação</h2>
          <p className="text-gray-600 text-lg">
            Oferecemos suporte jurídico completo nas principais áreas do direito, sempre focados em resultados.
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300 group"
            >
              <div className="mb-6 inline-block p-4 bg-gray-50 rounded-full text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 h-16">
                {service.description}
              </p>
              <div className="pt-4 border-t border-gray-100 flex items-center text-sm font-medium text-gold-600">
                <span className="mr-2">{service.details}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};