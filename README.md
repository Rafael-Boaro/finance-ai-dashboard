# 📊 Plataforma Financeira com IA (Finance.AI)

Este projeto é um dashboard financeiro de última geração que utiliza Inteligência Artificial para processar, categorizar e analisar transações financeiras em tempo real. Desenvolvido durante meus estudos avançados em **Next.js 16** e **IA Generativa**, ele resolve o problema da organização manual de gastos, transformando frases simples em dados estruturados.

---

## 🚀 Tecnologias de Ponta

Para este projeto, utilizei a vanguarda do ecossistema Web para garantir performance máxima e segurança:

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Server Actions)
* **Biblioteca:** [React 19](https://react.dev/) (Utilizando o novo React Compiler)
* **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/) (Motor de alta performance)
* **IA:** [Google Gemini 1.5 Flash](https://ai.google.dev/) (Integração via SDK oficial)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita para maior robustez)
* **Gráficos:** [Recharts](https://recharts.org/) (Visualizações interativas e responsivas)

---

## 🎯 Funcionalidades Principais

* **Processamento Natural de Gastos:** O usuário digita frases como "Gastei 50 reais no BK" e a IA identifica automaticamente o valor (50.00), a categoria (Alimentação) e fornece uma dica personalizada.
* **Dashboard Inteligente:** Resumo de saldo, entradas e saídas com interface de alto contraste para melhor usabilidade.
* **Gráficos em Tempo Real:** Visualização dinâmica da distribuição de gastos por categoria.
* **Segurança (Server-Side):** Toda a lógica da IA e chaves de acesso são processadas via **Server Actions**, impedindo a exposição de credenciais sensíveis no navegador.

---

## 📦 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/rafael-boaro/plataforma-de-financias-com-ia.git](https://github.com/rafael-boaro/plataforma-de-financias-com-ia.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz e adicione sua chave do Google AI Studio:
    ```env
    GEMINI_API_KEY=sua_chave_aqui
    ```
4.  **Rode em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

---

## ☁️ Notas sobre Deploy (Vercel)

Se você encontrar erros no deploy da Vercel, verifique os seguintes pontos:

1.  **Variáveis de Ambiente:** Certifique-se de que a `GEMINI_API_KEY` foi adicionada manualmente nas configurações do projeto na Vercel (Project Settings > Environment Variables).
2.  **Regiões do Servidor:** Como o Gemini API possui restrições geográficas, certifique-se de que a "Serverless Function Region" na Vercel está configurada para uma região suportada (ex: `Washington, D.C., USA - iad1`).
3.  **Node.js Version:** Garanta que a Vercel está utilizando a versão do Node compatível com o Next.js 16 (Node 18.x ou superior).

---

## 🛡️ Segurança e Boas Práticas

* Uso rigoroso de `.gitignore` para proteger arquivos de ambiente.
* Tratamento de erros robusto para falhas de conexão com a API de IA.
* Código modularizado para facilitar a manutenção e escalabilidade.

---
