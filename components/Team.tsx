import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Cristopher Tomiello Soldaini',
    role: 'Sócio Fundador',
    oab: 'OAB/SP 336068',
    bio: 'Advogado com mais de 10 anos de experiência, especializado em Direito Civil e Consumidor. Focado em estratégias jurídicas personalizadas e resolução eficiente de conflitos.',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.linkedin.com%2Fin%2Fcristopher-tomiello-soldaini-b0672482&psig=AOvVaw3OSqbweC1GR44CmgFPPG6f&ust=1764708259901000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiSgd6gnZEDFQAAAAAdAAAAABAE',
    linkedin: 'https://br.linkedin.com/in/cristopher-tomiello-soldaini-b0672482',
    email: 'cristopher@tomielloesoldaini.adv.br'
  },
  {
    id: '2',
    name: 'Juliana Mendes',
    role: 'Advogada Associada',
    oab: 'OAB/SP 412555',
    bio: 'Especialista em Direito de Família e Sucessões. Atua com sensibilidade e rigor técnico na mediação de conflitos familiares e regularização de patrimônios.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Ricardo Alves',
    role: 'Advogado Trabalhista',
    oab: 'OAB/SP 398221',
    bio: 'Dedicado à defesa dos direitos trabalhistas e assessoria empresarial preventiva. Expert em negociações e contencioso trabalhista estratégico.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    linkedin: '#'
  }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Nossa Equipe</h4>
          <h2 className="font-serif text-4xl text-charcoal-900 font-bold mb-4">Especialistas ao Seu Lado</h2>
          <p className="text-gray-600 text-lg">
            Profissionais qualificados, prontos para oferecer a melhor defesa técnica com atendimento humanizado.
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative">
              <div className="relative overflow-hidden rounded-sm shadow-md mb-6 aspect-[3/4]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to avoid broken layout if the user provided URL (which is a redirect) fails
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex space-x-4 text-white">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="hover:text-gold-400 transition-colors">
                        <Mail className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold-600 font-medium uppercase tracking-wider text-sm mt-1 mb-2">
                  {member.role}
                </p>
                {member.oab && (
                  <div className="inline-flex items-center text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded mb-3">
                    <Award className="w-3 h-3 mr-1" />
                    {member.oab}
                  </div>
                )}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};