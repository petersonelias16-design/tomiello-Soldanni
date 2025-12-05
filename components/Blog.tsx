import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Como identificar juros abusivos em contratos bancários?',
    category: 'Direito do Consumidor',
    excerpt: 'Saiba quais são os seus direitos ao identificar taxas irregulares em financiamentos de veículos e empréstimos pessoais.',
    date: '28 de Outubro, 2023',
    author: 'Cristopher Tomiello',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: '2',
    title: 'Guarda Compartilhada: Entenda as mudanças para 2024',
    category: 'Direito de Família',
    excerpt: 'A legislação sobre guarda de filhos está em constante evolução. Entenda o que é prioridade nas decisões judiciais atuais.',
    date: '15 de Novembro, 2023',
    author: 'Juliana Mendes',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: '3',
    title: 'Direitos do trabalhador em regime de Home Office',
    category: 'Direito do Trabalho',
    excerpt: 'Hora extra, ajuda de custo e ergonomia. O que a lei diz sobre o trabalho remoto e quais os deveres do empregador.',
    date: '05 de Dezembro, 2023',
    author: 'Ricardo Alves',
    image: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Blog Jurídico</h4>
            <h2 className="font-serif text-4xl text-charcoal-900 font-bold mb-4">Notícias e Artigos</h2>
            <p className="text-gray-600 text-lg">
              Mantenha-se informado sobre seus direitos com nossas análises e atualizações jurídicas.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-gold-600 font-bold hover:text-gold-700 transition-colors mt-4 md:mt-0">
            Ver todos os artigos <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-charcoal-900 text-gold-400 text-xs font-bold px-3 py-1 uppercase tracking-wide rounded-sm shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-xs mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <a href={post.slug} className="inline-flex items-center text-gold-600 font-bold text-sm hover:underline mt-auto">
                  Ler artigo completo
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#" className="inline-flex items-center text-gold-600 font-bold hover:text-gold-700 transition-colors">
            Ver todos os artigos <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};