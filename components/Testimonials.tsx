import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <Quote className="h-12 w-12 text-gold-500 opacity-50" />
        </div>
        
        <blockquote className="font-serif text-2xl md:text-4xl italic leading-relaxed text-gray-100 mb-8">
          "Profissional extremamente atento, transparente e eficiente. Recomendo sem hesitar."
        </blockquote>
        
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px w-12 bg-gold-500"></div>
          <cite className="not-italic text-gold-400 font-semibold tracking-wider uppercase">
            Cliente Verificado
          </cite>
          <div className="h-px w-12 bg-gold-500"></div>
        </div>
      </div>
    </section>
  );
};