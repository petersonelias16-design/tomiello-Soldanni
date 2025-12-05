import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeCase = async (userDescription: string): Promise<AnalysisResult> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Analise o seguinte relato de um potencial cliente jurídico: "${userDescription}".
      
      Retorne um objeto JSON contendo:
      1. 'summary': Um resumo profissional de uma frase do problema.
      2. 'suggestedArea': A área do direito mais provável (Consumidor, Família, Trabalho, Cível, etc).
      3. 'complexity': Nível de complexidade estimado (Baixa, Média, Alta).
      4. 'recommendation': Uma frase curta sugerindo o próximo passo (ex: "Necessário agendar consulta").`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            suggestedArea: { type: Type.STRING },
            complexity: { type: Type.STRING },
            recommendation: { type: Type.STRING },
          },
          required: ["summary", "suggestedArea", "complexity", "recommendation"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AnalysisResult;

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return {
      summary: "Não foi possível analisar automaticamente.",
      suggestedArea: "Triagem Manual",
      complexity: "Indefinida",
      recommendation: "Fale diretamente com o advogado."
    };
  }
};