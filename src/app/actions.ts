'use server'

export async function analisarTransacao(textoUsuario: string) {
  if (!textoUsuario) return null;

  // Simula o tempo de "pensamento" da IA para ver o botão de loading a girar
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    categoria: "Simulação de Lazer",
    valor: 50.00,
    sugestao: "Esta é uma simulação da interface visual. A IA será conectada futuramente!"
  };
}
