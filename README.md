# 💰 FINANCE.AI — Dashboard Financeiro (UI/UX Prototype)

O **FINANCE.AI** é um painel de controle financeiro moderno focado em alta legibilidade, contraste e fluidez de interface. Esta versão funciona como um **Protótipo Funcional (UI/UX Demo)**, simulando operações assíncronas do lado do servidor para validar a experiência do usuário antes da integração completa com modelos de inteligência artificial.

---

## ⚠️ Status do Projeto: Demonstração Visual & Fluxo Assíncrono
O projeto implementa uma arquitetura de dados simulados (*Mocks*). A função de análise de transações no backend simula ativamente uma latência de rede de 1500ms. Isso permite homologar o comportamento mecânico do front-end, como o bloqueio de múltiplos cliques em botões, desativação de inputs e inicialização de micro-animações de carregamento (*spinners*) de forma robusta.

---

## 🛠️ Tecnologias e Ecossistema

O projeto adota a vanguarda das ferramentas web para garantir performance máxima:

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Server Actions)
* **Biblioteca Core:** [React 19](https://react.dev/)
* **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/) (Arquitetura moderna de alta performance)
* **Gráficos:** [Recharts](https://recharts.org/) (Renderização dinâmica de dados)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita e prevenção de falhas em tempo de build)
* **Ícones:** Lucide-React

---

## 🎯 Destaques de Engenharia no Front-end

* **Gerenciamento de Estados Assíncronos:** Controle rigoroso do ciclo de vida das requisições, prevenindo condições de corrida (*race conditions*) na interface gráfica.
* **Componentização Limpa:** Tipagem clara de propriedades para garantir manutenibilidade a longo prazo.
* **Design de Alto Contraste:** Estilização focada em usabilidade, com separações visuais marcantes e feedback imediato para as ações do usuário.
* **Pronto para Escalar:** A assinatura do contrato de dados da Server Action está idêntica à que será consumida pela API real, permitindo uma transição com impacto zero na camada visual.

---

## 📦 Inicialização Local

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/rafael-boaro/finance-ai-dashboard.git](https://github.com/rafael-boaro/finance-ai-dashboard.git)
2. **Instalar dependências de produção:**
    ```bash
    npm install
3. **Executar o ambiente de desenvolvimento:**

    ```bash
    npm run dev
    Acesse http://localhost:3000 no seu navegador.
