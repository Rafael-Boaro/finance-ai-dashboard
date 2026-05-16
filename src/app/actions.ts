'use server'

import { GoogleGenerativeAI } from "@google/generative-ai";

// Sua chave (está correta, mantive a mesma)
// Puxando a chave de forma segura
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("A chave GEMINI_API_KEY não está definida nas variáveis de ambiente.");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function analisarTransacao(textoUsuario: string) {
  if (!textoUsuario) return null;

  try {
    // IMPORTANTE: Agora que atualizamos a biblioteca no Passo 1,
    // o modelo 'gemini-1.5-flash' vai funcionar. Ele é o padrão atual.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Analise o gasto financeiro: "${textoUsuario}".
      Retorne APENAS um JSON válido (sem markdown) neste formato exato:
      {
        "categoria": "Categoria (Ex: Alimentação, Transporte, Saúde, Lazer)",
        "valor": 0.00 (Número float puro),
        "sugestao": "Dica curta em pt-br"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("🤖 Resposta da IA:", text);

    // Limpeza para garantir JSON puro
    const jsonString = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    return JSON.parse(jsonString);

  } catch (error) {
    console.error("❌ ERRO NO SERVIDOR:", error);
    return {
      categoria: "Erro de Conexão",
      valor: 0,
      sugestao: "Se você atualizou a lib (npm install ...), tente criar uma nova chave no Google AI Studio."
    };
  }
}
