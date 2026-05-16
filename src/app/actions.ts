'use server'

export async function analisarTransacao(textoUsuario: string) {
  if (!textoUsuario) return null;

  // Simula o tempo de "pensamento" da IA para você ver o botão de loading girando
  await new Promise(resolve => setTimeout(resolve, 1500));


  return {
    categoria: "Simulação de Lazer",
    valor: 50.00,
    sugestao: "Esta é uma simulação da interface visual. A IA será conectada futuramente!"
  };
}
const genAI = new GoogleGenerativeAI(apiKey);

export async function analisarTransacao(textoUsuario: string) {
  if (!textoUsuario) return null;

  try {

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

    // Limpeza
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
