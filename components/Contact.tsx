import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { analyzeCase } from '../services/geminiService';
import { AnalysisResult } from '../types';

export const Contact: React.FC = () => {
  const [description, setDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleAnalysis = async () => {
    if (!description.trim()) return;
    
    setIsAnalyzing(true);
    setAnalysis(null);
    
    try {
      const result = await analyzeCase(description);
      setAnalysis(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "551100000000"; // Placeholder for actual number
    let message = "";

    if (analysis) {
      message = `Olá! Gostaria de agendar um atendimento.\n\n*Resumo do Caso:* ${analysis.summary}\n*Área Sugerida:* ${analysis.suggestedArea}\n*Complexidade:* ${analysis.complexity}`;
    } else {
      message = `Olá! Gostaria de agendar um atendimento.`;
    }
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Contato</h4>
            <h2 className="font-serif text-4xl text-charcoal-900 font-bold mb-6">Fale com um Especialista</h2>
            <p className="text-gray-600 text-lg mb-10">
              Estamos prontos para ouvir você. Entre em contato pelos canais abaixo ou utilize nossa análise inteligente para agilizar seu atendimento.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-50 p-3 rounded-full text-gold-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-900">WhatsApp / Telefone</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                  <p className="text-sm text-gray-500">Seg-Sex, 09h às 18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                 <div className="bg-gold-50 p-3 rounded-full text-gold-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-900">Email</h3>
                  <p className="text-gray-600">contato@tomielloesoldaini.adv.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                 <div className="bg-gold-50 p-3 rounded-full text-gold-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-900">Localização</h3>
                  <p className="text-gray-600">São Paulo – SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Pre-Analysis Form */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-lg">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="text-gold-500 h-6 w-6" />
              <h3 className="text-2xl font-serif font-bold text-charcoal-900">Pré-Análise Inteligente</h3>
            </div>
            
            {!analysis ? (
              <>
                <p className="text-gray-600 mb-4 text-sm">
                  Descreva brevemente seu problema abaixo. Nossa IA irá resumir e categorizar seu caso para agilizar o atendimento via WhatsApp.
                </p>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent min-h-[150px] mb-4 text-charcoal-800"
                  placeholder="Ex: Comprei um carro usado que apresentou defeito no motor após 15 dias e a loja se recusa a consertar..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button
                  onClick={handleAnalysis}
                  disabled={isAnalyzing || description.length < 10}
                  className="w-full bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" /> Analisando...
                    </>
                  ) : (
                    <>
                      Analisar meu Caso <Sparkles className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
                {!process.env.API_KEY && (
                   <p className="text-xs text-red-400 mt-2 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Demo mode (API Key missing)
                   </p>
                )}
              </>
            ) : (
              <div className="space-y-4 animate-fade-in">
                <div className="bg-white p-4 rounded-md border-l-4 border-gold-500 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Resumo do Caso</p>
                  <p className="text-charcoal-800 font-medium">{analysis.summary}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-md border border-gray-200">
                     <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Área Sugerida</p>
                     <p className="text-gold-600 font-bold">{analysis.suggestedArea}</p>
                  </div>
                   <div className="bg-white p-3 rounded-md border border-gray-200">
                     <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Complexidade</p>
                     <p className="text-charcoal-600">{analysis.complexity}</p>
                  </div>
                </div>

                <div className="bg-gold-50 p-4 rounded-md text-sm text-gold-800 mb-4">
                  <strong>Recomendação:</strong> {analysis.recommendation}
                </div>

                <div className="flex flex-col space-y-3">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" /> Enviar para WhatsApp
                  </a>
                  <button
                    onClick={() => setAnalysis(null)}
                    className="text-gray-500 hover:text-charcoal-900 text-sm underline"
                  >
                    Fazer nova análise
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};