import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Target, Users, Heart, Star, Shield, CheckCircle, Gift, Crown, Zap, Award, MessageCircle, Network, Handshake, TrendingUp, Phone } from 'lucide-react';

export const EmbaixadoresPage = () => {
  const navigate = useNavigate();
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleVideoPlay = (videoId, youtubeId) => {
    setPlayingVideo(videoId);
  };

  const handleCTAClick = () => {
    navigate('/formulario', { 
      state: { 
        trainingName: 'Embaixadores do Bem',
        source: 'embaixadores-page'
      } 
    });
    // Garantir que o scroll vá para o topo após a navegação
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green scroll-smooth">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background com gradiente e elementos flutuantes */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://i.imgur.com/4cMr158.jpeg)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sbie-dark-green/90 via-sbie-menu-green/80 to-black/70" />
          
          {/* Elementos flutuantes dourados */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-sbie-bronze/20 to-sbie-beige/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-sbie-beige/30 to-sbie-bronze/30 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-sbie-bronze/15 to-sbie-beige/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-sbie-beige/25 to-sbie-bronze/25 rounded-full blur-xl animate-bounce" style={{animationDelay: '3s'}} />
        </div>

        {/* Conteúdo do Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-sbie-bronze/20 transition-all duration-700 hover:bg-white/10 hover:border-sbie-bronze/40">

            
            {/* Badge superior */}
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 backdrop-blur-sm px-8 py-4 rounded-full mb-8 border-2 border-sbie-bronze/50 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105">
              <Crown className="w-8 h-8 text-sbie-beige" />
              <span className="text-sbie-beige font-black text-2xl md:text-3xl tracking-wide">EMBAIXADORES DO</span>
              <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <span className="text-sbie-beige font-black text-2xl md:text-3xl tracking-wide">BEM</span>
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="text-white">Um Chamado</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sbie-bronze via-sbie-beige to-sbie-bronze animate-pulse">à GRANDEZA</span>
            </h1>
            
            {/* Subtítulo */}
            <div className="bg-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-sbie-bronze/30 transition-all duration-500 hover:bg-sbie-bronze/30">
              <p className="text-xl md:text-3xl font-semibold text-sbie-beige leading-relaxed max-w-5xl mx-auto">
                <span className="text-sbie-bronze font-bold">A Melhor Oportunidade da sua Vida</span>
              </p>
            </div>
            
            {/* CTA Principal */}
            <button
              onClick={handleCTAClick}
              className="group relative bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50"
            >
              <span className="flex items-center space-x-3">
                <Target className="w-6 h-6" />
                <span>QUERO SER UM EMBAIXADOR DO BEM!</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Seção "Você está preparado?" */}
      <section className="py-32 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-black relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-sbie-bronze/10 to-sbie-beige/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-sbie-beige/10 to-sbie-bronze/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Título da seção */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 backdrop-blur-sm px-8 py-4 rounded-full mb-12 border-2 border-sbie-bronze/50 shadow-2xl">
              <div className="w-4 h-4 bg-sbie-bronze rounded-full animate-pulse" />
              <span className="text-sbie-beige font-black text-xl tracking-wider">REFLEXÃO PROFUNDA</span>
              <div className="w-4 h-4 bg-sbie-bronze rounded-full animate-pulse" />
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="text-white">VOCÊ ESTÁ</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sbie-bronze via-sbie-beige to-sbie-bronze animate-pulse">PREPARADO?</span>
            </h2>
          </div>
          
          {/* Card principal moderno */}
          <div className="bg-gradient-to-br from-white/10 to-sbie-bronze/10 backdrop-blur-lg rounded-3xl p-12 md:p-16 border-2 border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/20 transition-all duration-700">
            
            {/* Grid de pergaminhos */}
            <div className="grid gap-8 md:gap-12">
              
              {/* Pergaminho 1 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-sbie-beige/20 to-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-sbie-bronze shadow-xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute -left-2 top-4 w-4 h-4 bg-sbie-bronze rounded-full shadow-lg" />
                  <div className="absolute -left-2 bottom-4 w-4 h-4 bg-sbie-bronze rounded-full shadow-lg" />
                  <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed italic">
                    "Não há dúvidas de que vivemos um dos <span className="text-sbie-bronze font-bold">piores momentos</span> da história da humanidade."
                  </p>
                </div>
              </div>
              
              {/* Pergaminho 2 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-2xl p-8 border-r-4 border-sbie-beige shadow-xl transform hover:scale-105 transition-all duration-500 ml-auto max-w-4xl">
                  <div className="absolute -right-2 top-4 w-4 h-4 bg-sbie-beige rounded-full shadow-lg" />
                  <div className="absolute -right-2 bottom-4 w-4 h-4 bg-sbie-beige rounded-full shadow-lg" />
                  <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed italic text-right">
                    "Um sentimento generalizado de <span className="text-sbie-beige font-bold">falta de propósito</span> parece estar aprisionando a maioria das pessoas em vidas medíocres e tristes."
                  </p>
                </div>
              </div>
              
              {/* Pergaminho 3 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-sbie-beige/20 to-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-sbie-bronze shadow-xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute -left-2 top-4 w-4 h-4 bg-sbie-bronze rounded-full shadow-lg" />
                  <div className="absolute -left-2 bottom-4 w-4 h-4 bg-sbie-bronze rounded-full shadow-lg" />
                  <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed italic">
                    "E o número de pessoas que precisam de nossa <span className="text-sbie-bronze font-bold">ajuda é cada vez maior</span>..."
                  </p>
                </div>
              </div>
              
              {/* Pergaminho 4 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-2xl p-8 border-r-4 border-sbie-beige shadow-xl transform hover:scale-105 transition-all duration-500 ml-auto max-w-4xl">
                  <div className="absolute -right-2 top-4 w-4 h-4 bg-sbie-beige rounded-full shadow-lg" />
                  <div className="absolute -right-2 bottom-4 w-4 h-4 bg-sbie-beige rounded-full shadow-lg" />
                  <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed italic text-right">
                    "Porém, é também nos momentos de grande crise que aparecem as <span className="text-sbie-beige font-bold">grandes oportunidades</span>."
                  </p>
                </div>
              </div>
              
              {/* Pergaminho 5 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-sbie-beige/20 to-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-sbie-bronze shadow-xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute -left-2 top-4 w-4 h-4 bg-sbie-bronze rounded-full shadow-lg" />
                  <div className="absolute -left-2 bottom-4 w-4 h-4 bg-sbie-bronze rounded-full shadow-lg" />
                  <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed italic">
                    "São nos momentos de grande crise que nós somos chamados a nos <span className="text-sbie-bronze font-bold">superar</span>, a viver todo o nosso potencial, a colocar em práticas todos os nossos dons e talentos."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card de destaque final */}
            <div className="mt-16 bg-gradient-to-r from-sbie-bronze/40 to-sbie-beige/40 backdrop-blur-lg rounded-3xl p-12 border-2 border-sbie-bronze/60 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-center">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <Crown className="w-8 h-8 text-sbie-beige" />
                  <span className="text-2xl font-black text-sbie-beige tracking-wider">CHAMADO À GRANDEZA</span>
                  <Crown className="w-8 h-8 text-sbie-beige" />
                </div>
                <p className="text-2xl md:text-4xl font-black text-white leading-tight mb-8">
                  "Nos momentos de grande crise nós recebemos um <span className="text-sbie-bronze">CHAMADO</span>..."
                </p>
                <p className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sbie-bronze via-sbie-beige to-sbie-bronze animate-pulse">
                  Um chamado à GRANDEZA!
                </p>
              </div>
            </div>
            
            {/* CTA da seção */}
            <div className="text-center mt-16">
              <button
                onClick={handleCTAClick}
                className="group relative bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50"
              >
                <span className="flex items-center space-x-3">
                  <Award className="w-6 h-6" />
                  <span>ACEITO O CHAMADO À GRANDEZA!</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* 3. Seção "Embaixadores do Bem na Prática" */}
       <section className="py-24 bg-gradient-to-br from-sbie-dark-green/20 to-sbie-menu-green/20 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
               <span className="text-sbie-bronze">Embaixadores do Bem na Prática</span>
             </h2>
           </div>
           
           {/* Grid de benefícios */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
             {/* Card 1 - Mentoria Exclusiva */}
             <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105 text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <Users className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-sbie-bronze mb-4">MENTORIA EXCLUSIVA</h3>
               <p className="text-sm text-sbie-beige leading-relaxed mb-4">
                 Networking e Sessão Especial na Residência do Rodrigo Fonseca de 3 horas (com uma Reprogramação Emocional Exclusiva).
               </p>
             </div>
             
             {/* Card 2 - Treinamentos */}
             <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105 text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <Award className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-sbie-bronze mb-4">TREINAMENTOS</h3>
               <p className="text-sm text-sbie-beige leading-relaxed mb-4">
                 LOTUS, Legado e Formação para o Embaixador (exceto Hotel).
               </p>
             </div>
             
             {/* Card 3 - Desconto */}
             <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105 text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <Gift className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-sbie-bronze mb-4">DESCONTO</h3>
               <p className="text-sm text-sbie-beige leading-relaxed mb-4">
                 Indicação de Amigos e pessoas próximas terão 50% de desconto no LOTUS e LEGADO (exceto Hotel).
               </p>
             </div>
             
             {/* Card 4 - Solidariedade */}
             <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105 text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <Heart className="w-8 h-8 text-white" fill="currentColor" />
               </div>
               <h3 className="text-xl font-bold text-sbie-bronze mb-4">SOLIDARIEDADE</h3>
               <p className="text-sm text-sbie-beige leading-relaxed mb-4">
                 Uma vaga Social todo LOTUS mediante aprovação de ficha sócio-econômico.
               </p>
             </div>
             
             {/* Card 5 - Mentoria com Empresários */}
             <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105 text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <TrendingUp className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-sbie-bronze mb-4">MENTORIA COM EMPRESÁRIOS</h3>
               <p className="text-sm text-sbie-beige leading-relaxed mb-4">
                 Mentoria Exclusiva com os maiores Empresários do Brasil.
               </p>
             </div>
           </div>
           
           {/* Segunda linha de benefícios */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             {/* Acesso ao Rodrigo Fonseca */}
             <div className="bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105 text-center">
               <div className="w-20 h-20 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <MessageCircle className="w-10 h-10 text-white" />
               </div>
               <h3 className="text-2xl font-bold text-sbie-bronze mb-4">ACESSO AO RODRIGO FONSECA E SUAS CONEXÕES</h3>
               <p className="text-lg text-sbie-beige leading-relaxed">
                 Acesso Exclusivo ao Rodrigo Fonseca.
               </p>
             </div>
             
             {/* Grupo VIP */}
             <div className="bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105 text-center">
               <div className="w-20 h-20 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <Network className="w-10 h-10 text-white" />
               </div>
               <h3 className="text-2xl font-bold text-sbie-bronze mb-4">GRUPO VIP</h3>
               <p className="text-lg text-sbie-beige leading-relaxed">
                 Grupo VIP no WhatsApp (para fazermos networking e negócios).
               </p>
             </div>
             
             {/* Itens Exclusivos */}
             <div className="bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105 text-center">
               <div className="w-20 h-20 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                 <Crown className="w-10 h-10 text-white" />
               </div>
               <h3 className="text-2xl font-bold text-sbie-bronze mb-4">ITENS EXCLUSIVOS</h3>
               <p className="text-lg text-sbie-beige leading-relaxed">
                 Crachá, Cordão e Pin exclusivos dos Embaixadores!
               </p>
             </div>
           </div>
          </div>
        </section>

        {/* 4. Seção de Custos e Benefícios Futurista */}
        <section className="py-32 bg-gradient-to-br from-sbie-dark-green via-black to-sbie-menu-green relative overflow-hidden">
          {/* Elementos decorativos futuristas */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-sbie-bronze/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-sbie-beige/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sbie-bronze/5 to-sbie-beige/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm px-6 py-3 rounded-full border border-sbie-bronze/30 mb-8">
                <Zap className="w-5 h-5 text-sbie-bronze" />
                <span className="text-sbie-bronze font-semibold text-sm uppercase tracking-wider">Investimento Exclusivo</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-sbie-bronze via-sbie-beige to-sbie-bronze bg-clip-text text-transparent animate-pulse">
                  CUSTO DOS BENEFÍCIOS
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-sbie-beige/80 max-w-4xl mx-auto leading-relaxed">
                Um investimento que vai revolucionar não apenas sua carreira, mas todo o seu futuro
              </p>
            </div>
            
            {/* Tabela de Custos e Benefícios */}
            <div className="bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm rounded-3xl border border-sbie-bronze/30 shadow-2xl overflow-hidden mb-20">
              <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige p-6">
                <h3 className="text-3xl font-black text-white text-center uppercase tracking-wider">CUSTO DOS BENEFÍCIOS</h3>
              </div>
              
              <div className="p-8">
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-sbie-dark-green/20 to-sbie-menu-green/20 rounded-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300">
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg">NETWORKING E MENTORIA MENSAL DE 3 HORAS COM RODRIGO FONSECA:</span>
                      <div className="text-sbie-bronze font-bold text-sm mt-1 animate-pulse" style={{textShadow: '0 0 10px #D4AF37, 0 0 20px #D4AF37, 0 0 30px #D4AF37'}}>R$ 20.000,00 X 12</div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-sbie-bronze line-through">R$ 240.000,00</span>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-sbie-dark-green/20 to-sbie-menu-green/20 rounded-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300">
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg">LOTUS PRA VOCÊ:</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-red-400 line-through">R$ 4.700,00</span>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-sbie-dark-green/20 to-sbie-menu-green/20 rounded-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300">
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg">LEGADO PRA VOCÊ:</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-sbie-bronze line-through">R$ 5.997,00</span>
                    </div>
                  </div>
                  
                  {/* Item 4 */}
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-sbie-dark-green/20 to-sbie-menu-green/20 rounded-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300">
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg">FORMAÇÃO PRA VOCÊ:</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-sbie-bronze line-through">R$ 7.997,00</span>
                    </div>
                  </div>
                  
                  {/* Item 5 */}
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30">
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg">ACESSO EXCLUSIVO AO RODRIGO FONSECA:</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-green-400">NÃO TEM PREÇO</span>
                    </div>
                  </div>
                  
                  {/* Item 6 */}
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30">
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg">GRUPO VIP NO WHATSAPP:</span>
                      <div className="text-green-400/70 text-sm mt-1">QUANTOS NEGÓCIOS</div>
                      <div className="text-green-400/70 text-sm">VOCÊ VAI FECHAR?</div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-green-400">NÃO TEM PREÇO</span>
                    </div>
                  </div>
                  
                  {/* Item 7 */}
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30">
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg">CRACHÁ, CORDÃO E PIN EXCLUSIVOS DOS EMBAIXADORES:</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-green-400">NÃO TEM PREÇO</span>
                    </div>
                  </div>
                  
                  {/* Item 8 */}
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-sbie-dark-green/20 to-sbie-menu-green/20 rounded-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300">
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg">AMIGOS E PESSOAS PRÓXIMAS TERÃO 50% DE DESCONTO NO LOTUS E LEGADO:</span>
                      <div className="text-sbie-bronze font-bold text-sm mt-1 animate-pulse" style={{textShadow: '0 0 10px #D4AF37, 0 0 20px #D4AF37, 0 0 30px #D4AF37'}}>R$ 5.348,50 X 6 PESSOAS</div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-sbie-bronze line-through">R$ 32.091,00</span>
                    </div>
                  </div>
                  
                  {/* Item 9 */}
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-sbie-dark-green/20 to-sbie-menu-green/20 rounded-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300">
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg">UMA VAGA SOCIAL TODO LOTUS (MEDIANTE APROVAÇÃO DE FICHA SÓCIO-ECONÔMICO):</span>
                      <div className="text-sbie-bronze font-bold text-sm mt-1 animate-pulse" style={{textShadow: '0 0 10px #D4AF37, 0 0 20px #D4AF37, 0 0 30px #D4AF37'}}>R$ 4.700,00 X 6</div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-sbie-bronze line-through">R$ 28.200,00</span>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-6 rounded-2xl border-2 border-sbie-bronze/50 mt-8">
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-black text-white uppercase tracking-wider">TOTAL</span>
                      <span className="text-5xl font-black text-sbie-bronze line-through">R$ 318.985,00</span>
                    </div>
                  </div>
                  
                  {/* Oferta Final */}
                  <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 p-8 rounded-2xl border-2 border-green-500/50 mt-6 text-center">
                    <div className="mb-4">
                      <span className="text-green-400 font-bold text-lg uppercase tracking-wider">🔥 OFERTA EXCLUSIVA EMBAIXADORES 🔥</span>
                    </div>
                    <div className="text-6xl font-black text-green-400 mb-2">R$ 3.000,00</div>
                    <div className="text-xl text-green-300 mb-6">Em 12 vezes no cartão ou R$36 mil à vista</div>
                    <button 
                      onClick={handleCTAClick}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <span className="flex items-center justify-center gap-3">
                        ACEITO O CHAMADO À GRANDEZA!
                        <Award className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Garantia Incondicional */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-3xl p-12 border border-green-500/30 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://i.imgur.com/KN5lano.png" 
                    alt="Selo de Garantia" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-black text-green-400 mb-4 animate-pulse" style={{textShadow: '0 0 15px #10B981, 0 0 30px #10B981, 0 0 45px #10B981'}}>GARANTIA INCONDICIONAL</h3>
                  <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                    <span className="text-green-400 animate-pulse" style={{textShadow: '0 0 10px #10B981, 0 0 20px #10B981'}}>Compra segura e garantia de 7 dias.</span>
                  </p>
                  <p className="text-sbie-beige/80 mt-4 text-lg">
                    Compra segura e garantia de 7 dias. Sua satisfação é nossa prioridade absoluta.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Benefícios Exclusivos */}
            <div className="bg-gradient-to-r from-sbie-bronze/10 to-sbie-beige/10 backdrop-blur-sm rounded-3xl p-12 border border-sbie-bronze/30">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-sbie-bronze mb-4">Exclusividade!</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                  Conheça algumas histórias de pessoas cuja vida foi transformada pela Inteligência Emocional aqui na SBIE!
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Scheila Carvalho */}
                <div className="group relative bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-sbie-bronze/30 hover:border-sbie-bronze/60 transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-video bg-black">
                    {playingVideo === 'scheila' ? (
                      <iframe 
                        src="https://www.youtube.com/embed/a9o4wfPvndI?autoplay=1" 
                        title="Scheila Carvalho - Transformação SBIE"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img 
                        src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2022/05/scheila-carvalho-620.jpg.webp" 
                        alt="Scheila Carvalho" 
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => handleVideoPlay('scheila', 'a9o4wfPvndI')}
                      />
                    )}
                    {playingVideo !== 'scheila' && (
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div 
                          className="w-16 h-16 bg-sbie-bronze/90 hover:bg-sbie-bronze rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                          onClick={() => handleVideoPlay('scheila', 'a9o4wfPvndI')}
                        >
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-sbie-bronze mb-2">Scheila Carvalho</h4>
                    <p className="text-sbie-beige/80 text-sm">Transformação através da Inteligência Emocional</p>
                  </div>
                </div>

                {/* Juliana Paes */}
                <div className="group relative bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-sbie-bronze/30 hover:border-sbie-bronze/60 transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-video bg-black">
                    {playingVideo === 'juliana' ? (
                      <iframe 
                        src="https://www.youtube.com/embed/ysF7fk1pjeQ?autoplay=1" 
                        title="Juliana Paes - Transformação SBIE"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img 
                        src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2022/05/juliana-paes-620.jpg.webp" 
                        alt="Juliana Paes" 
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => handleVideoPlay('juliana', 'ysF7fk1pjeQ')}
                      />
                    )}
                    {playingVideo !== 'juliana' && (
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                         <div 
                           className="w-16 h-16 bg-sbie-bronze/90 hover:bg-sbie-bronze rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                           onClick={() => handleVideoPlay('juliana', 'ysF7fk1pjeQ')}
                         >
                           <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M8 5v14l11-7z"/>
                           </svg>
                         </div>
                       </div>
                     )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-sbie-bronze mb-2">Juliana Paes</h4>
                    <p className="text-sbie-beige/80 text-sm">Transformação através da Inteligência Emocional</p>
                  </div>
                </div>

                {/* Chris Flores */}
                <div className="group relative bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-sbie-bronze/30 hover:border-sbie-bronze/60 transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-video bg-black">
                    {playingVideo === 'chris' ? (
                      <iframe 
                        src="https://www.youtube.com/embed/dKBKJjxy2J4?autoplay=1" 
                        title="Chris Flores - Transformação SBIE"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img 
                        src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2023/04/chris.jpg.webp" 
                        alt="Chris Flores" 
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => handleVideoPlay('chris', 'dKBKJjxy2J4')}
                      />
                    )}
                    {playingVideo !== 'chris' && (
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                         <div 
                           className="w-16 h-16 bg-sbie-bronze/90 hover:bg-sbie-bronze rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                           onClick={() => handleVideoPlay('chris', 'dKBKJjxy2J4')}
                         >
                           <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M8 5v14l11-7z"/>
                           </svg>
                         </div>
                       </div>
                     )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-sbie-bronze mb-2">Chris Flores</h4>
                    <p className="text-sbie-beige/80 text-sm">Transformação através da Inteligência Emocional</p>
                  </div>
                </div>

                {/* Catia Fonseca */}
                <div className="group relative bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-sbie-bronze/30 hover:border-sbie-bronze/60 transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-video bg-black">
                    {playingVideo === 'catia' ? (
                      <iframe 
                        src="https://www.youtube.com/embed/5gCzTc34VVo?autoplay=1" 
                        title="Catia Fonseca - Transformação SBIE"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img 
                        src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2019/07/catia-fonseca.jpg.webp" 
                        alt="Catia Fonseca" 
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => handleVideoPlay('catia', '5gCzTc34VVo')}
                      />
                    )}
                    {playingVideo !== 'catia' && (
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                         <div 
                           className="w-16 h-16 bg-sbie-bronze/90 hover:bg-sbie-bronze rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                           onClick={() => handleVideoPlay('catia', '5gCzTc34VVo')}
                         >
                           <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M8 5v14l11-7z"/>
                           </svg>
                         </div>
                       </div>
                     )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-sbie-bronze mb-2">Catia Fonseca</h4>
                    <p className="text-sbie-beige/80 text-sm">Transformação através da Inteligência Emocional</p>
                  </div>
                </div>

                {/* Wolf Maya */}
                <div className="group relative bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-sbie-bronze/30 hover:border-sbie-bronze/60 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                  <div className="relative aspect-video bg-black">
                    {playingVideo === 'wolf' ? (
                      <iframe 
                        src="https://www.youtube.com/embed/ENhzSaMsOQI?autoplay=1" 
                        title="Wolf Maya - Transformação SBIE"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img 
                        src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2022/05/wolf-620-ajustada.jpg.webp" 
                        alt="Wolf Maya" 
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => handleVideoPlay('wolf', 'ENhzSaMsOQI')}
                      />
                    )}
                    {playingVideo !== 'wolf' && (
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                         <div 
                           className="w-16 h-16 bg-sbie-bronze/90 hover:bg-sbie-bronze rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                           onClick={() => handleVideoPlay('wolf', 'ENhzSaMsOQI')}
                         >
                           <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M8 5v14l11-7z"/>
                           </svg>
                         </div>
                       </div>
                     )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-sbie-bronze mb-2">Wolf Maya</h4>
                    <p className="text-sbie-beige/80 text-sm">Transformação através da Inteligência Emocional</p>
                  </div>
                </div>
              </div>
            </div>
           </div>
         </section>

         {/* 5. Seção de Garantia */}
         <section className="py-24 bg-gradient-to-br from-sbie-menu-green/30 to-sbie-dark-green/30 backdrop-blur-sm">
           <div className="max-w-4xl mx-auto px-4 text-center">
             <div className="bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-12 rounded-3xl border border-sbie-bronze/30 shadow-2xl">
               <div className="flex justify-center mb-8">
                 <div className="w-24 h-24 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center shadow-lg">
                   <Phone className="w-12 h-12 text-white" />
                 </div>
               </div>
               
               <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-center">
                 Está com alguma dúvida ou precisa falar conosco?
               </h2>
               <h3 className="text-2xl md:text-3xl font-bold text-sbie-bronze mb-8 text-center">
                 Fale com nosso Time imediatamente
               </h3>
               
               {/* Cards de Contato */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                 {/* Card WhatsApp */}
                 <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer">
                   <div className="text-center">
                     <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                       <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                       </svg>
                     </div>
                     <div className="text-sm text-green-300 mb-2 font-medium">Atendimento por</div>
                     <div className="text-2xl font-black text-white mb-4">Whatsapp</div>
                     <div className="text-green-300 mb-6 leading-relaxed">
                       Envie uma mensagem para<br/>
                       <span className="font-bold text-white">+55 (11) 2985-5949</span>
                     </div>
                     <a href="https://wa.me/5511298559490?text=Olá! Gostaria de falar com um especialista sobre o programa Embaixadores do Bem." target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                       Fale com um especialista
                     </a>
                   </div>
                 </div>

                 {/* Card Email */}
                 <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-3xl p-8 border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-300 hover:scale-105 group cursor-pointer">
                   <div className="text-center">
                     <div className="w-20 h-20 bg-sbie-bronze rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                       <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                       </svg>
                     </div>
                     <div className="text-sm text-sbie-bronze mb-2 font-medium">Atendimento por</div>
                     <div className="text-2xl font-black text-white mb-4">Email</div>
                     <div className="text-sbie-beige mb-6 leading-relaxed">
                       Envie uma mensagem para<br/>
                       <span className="font-bold text-white">contato@sbie.com.br</span>
                     </div>
                     <a href="mailto:contato@sbie.com.br?subject=Interesse no programa Embaixadores do Bem&body=Olá! Gostaria de mais informações sobre o programa Embaixadores do Bem." className="inline-block bg-sbie-bronze hover:bg-sbie-beige text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                       Clique para acessar
                     </a>
                   </div>
                 </div>

               </div>
               
               {/* Um Chamado à Grandeza Card - Posicionado abaixo */}
               <div className="max-w-md mx-auto mt-8">
                 <div className="relative bg-gradient-to-br from-sbie-bronze via-yellow-500 to-yellow-600 rounded-2xl p-8 text-center border-2 border-sbie-bronze/50 hover:border-sbie-bronze transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sbie-bronze/30 overflow-hidden">
                   {/* Selo "APROVEITE" */}
                   <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-2 text-sm font-bold transform -rotate-45 -translate-x-3 -translate-y-1 shadow-lg">
                     APROVEITE
                   </div>
                   
                   {/* Conteúdo Principal */}
                   <div className="mt-4">
                     <h3 className="text-3xl font-black text-gray-900 mb-2 leading-tight">
                       Um Chamado<br />à Grandeza
                     </h3>
                     <div className="text-4xl font-black text-white mb-2 drop-shadow-lg">
                       R$3.000,00 mês
                     </div>
                     <p className="text-gray-800 text-sm font-semibold mb-6">
                       Em 12 vezes no cartão ou R$36 mil à vista
                     </p>
                     
                     <button 
                       onClick={handleCTAClick}
                       className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-4"
                     >
                       QUERO SER UM EMBAIXADOR DO BEM
                     </button>
                     
                     <p className="text-gray-800 text-sm font-semibold">
                       Compra segura e garantia de 7 dias.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>

         {/* Faixa LGPD */}
         <section className="py-3 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-t border-slate-700/50">
           <div className="max-w-6xl mx-auto px-4 text-center">
             <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-5xl mx-auto font-light">
               Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM. Os dados coletados são tratados nos termos da Lei Geral de Proteção de Dados.
             </p>
           </div>
         </section>
       </div>
     );
   };