'use client'

import React, { useState } from 'react';
import { Wallet, TrendingUp, TrendingDown, DollarSign, Loader2, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { analisarTransacao } from './actions';

const data = [
  { name: 'Alimentação', valor: 1200, color: '#2563eb' }, // Azul forte
  { name: 'Transporte', valor: 450, color: '#16a34a' },  // Verde forte
  { name: 'Lazer', valor: 800, color: '#ca8a04' },      // Amarelo escuro
  { name: 'Saúde', valor: 300, color: '#dc2626' },      // Vermelho forte
];

export default function Dashboard() {
  const [inputTexto, setInputTexto] = useState("");
  const [resultadoIA, setResultadoIA] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleProcessar() {
    if (!inputTexto) return;
    setLoading(true);
    try {
      const dados = await analisarTransacao(inputTexto);
      setResultadoIA(dados);
    } catch (e) {
      alert("Erro ao conectar com a IA. Verifique o terminal.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans text-gray-900">
      <header className="mb-8 border-b-2 border-gray-300 pb-4">
        <h1 className="text-4xl font-extrabold text-black tracking-tight">FINANCE.AI</h1>
        <p className="text-gray-700 font-medium mt-1">Painel de Controle Financeiro Inteligente</p>
      </header>

      {/* Cards de Resumo - Alto Contraste */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card title="SALDO TOTAL" amount="R$ 4.500,00" icon={<Wallet className="text-black w-6 h-6" />} />
        <Card title="ENTRADAS" amount="R$ 6.200,00" icon={<TrendingUp className="text-green-700 w-6 h-6" />} color="text-green-800" />
        <Card title="SAÍDAS" amount="R$ 1.700,00" icon={<TrendingDown className="text-red-700 w-6 h-6" />} color="text-red-800" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Área de Resultado da IA */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200">
           <h3 className="text-xl font-bold mb-6 text-black border-l-4 border-blue-600 pl-3">
            {resultadoIA ? 'ANÁLISE REALIZADA' : 'GASTOS POR CATEGORIA'}
          </h3>

          {loading ? (
            <div className="h-64 flex flex-col items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <Loader2 className="animate-spin text-black w-12 h-12 mb-4" />
              <p className="font-bold text-gray-600">Processando Inteligência...</p>
            </div>
          ) : resultadoIA ? (
            <div className="space-y-6">
              <div className="p-4 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">CATEGORIA IDENTIFICADA</p>
                <p className="text-2xl font-black text-black mt-1">{resultadoIA.categoria || "Não identificada"}</p>
              </div>
              
              <div className="p-4 bg-white border-2 border-blue-800 rounded-lg shadow-[4px_4px_0px_0px_rgba(30,64,175,1)]">
                 <p className="text-xs font-bold text-blue-800 uppercase tracking-wider">VALOR ESTIMADO</p>
                 <p className="text-3xl font-black text-blue-900 mt-1">R$ {resultadoIA.valor || "0,00"}</p>
              </div>

              <div className="bg-gray-50 p-4 border-l-4 border-yellow-500">
                <p className="font-bold text-gray-900 mb-1">💡 DICA DA IA:</p>
                <p className="text-gray-800 font-medium leading-relaxed">"{resultadoIA.sugestao || "Sem dica disponível."}"</p>
              </div>
              
              <button 
                onClick={() => setResultadoIA(null)}
                className="text-sm font-bold text-blue-700 hover:underline mt-2 inline-flex items-center"
              >
                ← Voltar para gráficos
              </button>
            </div>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#000', fontWeight: 'bold'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#000'}} />
                  <Tooltip contentStyle={{backgroundColor: '#000', color: '#fff', borderRadius: '8px'}} itemStyle={{color: '#fff'}} />
                  <Bar dataKey="valor" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Área de Input */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-black text-white p-2 rounded-lg">
               <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-black">NOVA TRANSAÇÃO</h3>
          </div>
          
          <p className="text-sm font-bold text-gray-600 mb-2">
            Descreva seu gasto (Ex: "Uber de 20 reais"):
          </p>
          
          <textarea 
            className="w-full border-2 border-gray-300 rounded-lg p-4 h-40 mb-4 focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-lg text-black font-medium placeholder-gray-400 resize-none"
            placeholder="Digite aqui..."
            value={inputTexto}
            onChange={(e) => setInputTexto(e.target.value)}
          />

          <button 
            onClick={handleProcessar}
            disabled={loading || !inputTexto}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-6 py-4 rounded-lg transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? 'ANALISANDO...' : (
              <>
                PROCESSAR COM IA <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function Card({ title, amount, icon, color = "text-gray-900" }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center justify-between hover:shadow-lg transition-shadow">
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{title}</p>
        <h2 className={`text-2xl font-black ${color}`}>{amount}</h2>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg border border-gray-200">{icon}</div>
    </div>
  );
}