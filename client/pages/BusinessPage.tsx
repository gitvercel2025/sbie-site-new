import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Users, TrendingUp, ArrowRight, Target, Briefcase, Brain, Lightbulb, Users2, Shield, Eye, Cog, Puzzle, MessageCircle, Award, Search, Handshake, BarChart3, Megaphone } from 'lucide-react';

export const BusinessPage = () => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleCTAClick = () => {
    navigate('/formulario', { 
      state: { 
        trainingName: 'SBIE Business',
        source: 'business-page'
      } 
    });
    // Garantir que o scroll vá para o topo após a navegação
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  // 15 Competências do Fórum Econômico Mundial
  const competencias = [
    { id: 1, nome: "Pensamento analítico e inovação", icon: Brain, relacionada: true },
    { id: 2, nome: "Aprendizado ativo e estratégias de aprendizado", icon: Lightbulb, relacionada: true },
    { id: 3, nome: "Resolução de problemas complexos", icon: Puzzle, relacionada: true },
    { id: 4, nome: "Pensamento crítico e análise", icon: Search, relacionada: true },
    { id: 5, nome: "Criatividade, originalidade e iniciativa", icon: Brain, relacionada: true },
    { id: 6, nome: "Liderança e influência", icon: Users2, relacionada: true },
    { id: 7, nome: "Uso, monitoramento e controle de tecnologia", icon: Cog, relacionada: false },
    { id: 8, nome: "Programação e design de tecnologia", icon: Cog, relacionada: false },
    { id: 9, nome: "Resiliência, tolerância a estresse e flexibilidade", icon: Shield, relacionada: true },
    { id: 10, nome: "Raciocínio, resolução de problemas e ideação", icon: Brain, relacionada: true },
    { id: 11, nome: "Inteligência emocional", icon: Brain, relacionada: true },
    { id: 12, nome: "Teste e experiência de usuário", icon: Eye, relacionada: false },
    { id: 13, nome: "Orientação a serviços", icon: Handshake, relacionada: false },
    { id: 14, nome: "Avaliação e análise de sistemas", icon: BarChart3, relacionada: false },
    { id: 15, nome: "Persuasão e negociação", icon: Megaphone, relacionada: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green scroll-smooth">
      {/* 1. Hero Section com vídeo de background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out">
        {/* Vídeo de Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/hNVCPoOMtvk?autoplay=1&mute=1&loop=1&playlist=hNVCPoOMtvk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            className="w-full h-full object-cover scale-150"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sbie-dark-green/80 via-sbie-menu-green/70 to-black/60" />
        </div>

        {/* Conteúdo do Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-sbie-bronze/20 transition-all duration-700 hover:bg-white/10 hover:border-sbie-bronze/40">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-sbie-bronze-30 to-sbie-beige-30 backdrop-blur-sm p-12 py-6 rounded-full mb-8 border-2 border-sbie-bronze/50 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105">
              <Briefcase className="w-8 h-8 text-sbie-beige" />
              <span className="text-sbie-beige font-black text-3xl md:text-4xl tracking-wide bg-gradient-to-r from-sbie-beige to-white text-transparent bg-clip-text">SBIE BUSINESS</span>
              <div className="w-2 h-2 bg-sbie-bronze rounded-full animate-pulse" />
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="text-white">Transforme sua</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sbie-bronze to-sbie-beige">Equipe Corporativa</span>
            </h2>
            
            <h3 className="text-xl md:text-3xl font-semibold mb-8 text-sbie-beige leading-relaxed max-w-5xl mx-auto">
              Prepare sua Equipe para a NR-1 e Multiplique os Resultados com 
              <span className="text-sbie-bronze font-bold"> Inteligência Emocional Estratégica</span>
            </h3>
            
            <div className="bg-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-sbie-bronze/30 transition-all duration-500 hover:bg-sbie-bronze/30">
              <p className="text-lg md:text-xl text-sbie-beige font-medium mb-4">
                ✨ Para empresas com no mínimo 50 funcionários
              </p>
              
              <p className="text-lg md:text-2xl text-white mb-4 leading-relaxed">
                Sob o ponto de vista do trabalho, a <span className="text-sbie-bronze font-bold">Inteligência Emocional é a habilidade do século XXI</span>. 
                Descubra por que sua empresa precisa investir nisso agora!
              </p>
              
              <p className="text-sm text-sbie-beige/80 italic">
                *Fonte: American Society of Association Executives
              </p>
            </div>
            
            <button
              onClick={handleCTAClick}
              className="group relative bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50"
            >
              <span className="flex items-center space-x-3">
                <Target className="w-6 h-6" />
                <span>Quero Transformar Minha Equipe</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Seção de Texto com Player de Vídeo */}
      <section className="py-24 bg-gradient-to-br from-sbie-beige/10 to-white/5 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              O Sucesso da sua Empresa 
              <span className="text-sbie-bronze"> Depende das Pessoas</span>
            </h2>
            
            <div className="max-w-5xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-sbie-beige leading-relaxed">
                Porque as empresas são feitas de pessoas e o <span className="text-sbie-bronze font-semibold">sucesso ou fracasso</span> estão diretamente relacionados ao quanto cada colaborador está <span className="text-white font-semibold">comprometido com o seu trabalho</span>.
              </p>
              
              <p className="text-xl md:text-2xl text-sbie-beige leading-relaxed">
                Cabe à liderança <span className="text-sbie-bronze font-semibold">conhecer e saber motivar</span> sua equipe para conseguir <span className="text-white font-semibold">prosperar em qualquer cenário</span> do mercado.
              </p>
            </div>
          </div>

          {/* Player de Vídeo Moderno */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-3xl p-6 border border-sbie-bronze/30 shadow-2xl transition-all duration-500 hover:shadow-sbie-bronze/30">
              {!isVideoPlaying ? (
                <div className="relative aspect-video bg-gradient-to-br from-sbie-dark-green to-sbie-menu-green rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500" onClick={playVideo}>
                  <img 
                    src="https://img.youtube.com/vi/WAFwTWCc7pE/maxresdefault.jpg" 
                    alt="SBIE Business - Transformação Corporativa" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-sbie-dark-green/60 to-black/40 flex items-center justify-center group-hover:from-sbie-dark-green/40 group-hover:to-black/20 transition-all duration-500">
                    <div className="bg-sbie-bronze/90 backdrop-blur-sm rounded-full p-8 group-hover:bg-sbie-bronze group-hover:scale-110 transition-all duration-300 shadow-2xl border-4 border-white/20">
                      <Play className="w-12 h-12 text-white ml-2" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-white font-semibold text-lg">🎯 Veja como transformamos equipes corporativas</p>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/WAFwTWCc7pE?autoplay=1"
                  className="w-full aspect-video rounded-2xl"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção Dividida em Dois Blocos */}
      <section className="py-24 bg-white/5 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              A Realidade do 
              <span className="text-sbie-bronze"> Mercado de Trabalho</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Card Esquerda - Estatística */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm p-10 rounded-3xl border border-red-400/30 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    📊 Estudos Revelam
                  </h3>
                  
                  <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-red-400/30">
                    <p className="text-6xl md:text-7xl font-black text-red-400 mb-4">
                      72%
                    </p>
                    <p className="text-xl md:text-2xl text-white font-semibold leading-tight">
                      dos trabalhadores estão <span className="text-red-400">insatisfeitos</span> com seu trabalho
                    </p>
                  </div>
                  
                  <p className="text-sm text-red-300 font-medium italic">
                    Fonte: Sociedade Brasileira de Inteligência Emocional
                  </p>
                </div>
              </div>
            </div>

            {/* Caixa de Texto Direita */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-10 rounded-3xl border border-sbie-bronze/30 shadow-2xl transition-all duration-500 hover:shadow-sbie-bronze/30">
                <div className="space-y-8">
                  <div className="bg-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/30">
                    <h3 className="text-2xl font-bold text-sbie-bronze mb-4 flex items-center">
                      <Users className="w-8 h-8 mr-3" />
                      O Impacto Real
                    </h3>
                    <p className="text-lg text-sbie-beige leading-relaxed">
                      Isso significa que quase <span className="text-white font-bold">3/4 da população economicamente ativa</span> acorda todos os dias para trabalhar <span className="text-sbie-bronze font-semibold">sem motivação ou propósito</span>.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-lg text-sbie-beige leading-relaxed">
                      Como consequência: pessoas cada vez mais <span className="text-red-400 font-semibold">doentes</span> – sendo a depressão a causa com maior percentual de afastamento – e <span className="text-red-400 font-semibold">pouco produtivas</span>.
                    </p>
                  </div>
                  
                  <div className="bg-sbie-bronze/30 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/50">
                    <p className="text-xl text-white font-semibold leading-relaxed">
                      Como líder, você tem um <span className="text-sbie-beige">papel fundamental</span> para reverter este quadro!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seção com Destaque para Estatística - TEXTO CORRIGIDO */}
      <section className="py-24 bg-gradient-to-br from-sbie-beige/10 to-sbie-bronze/10 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              O Futuro do 
              <span className="text-sbie-bronze"> Trabalho</span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-10 md:p-16 rounded-3xl border border-sbie-bronze/30 shadow-2xl transition-all duration-500 hover:shadow-sbie-bronze/30">
            <div className="text-center space-y-8">
              <p className="text-lg md:text-xl text-sbie-beige leading-relaxed">
                Segundo o <span className="text-white font-semibold">Fórum Econômico Mundial</span>, realizado em 2020, 
                <span className="inline-block bg-gradient-to-r from-sbie-bronze to-sbie-beige text-transparent bg-clip-text font-black text-2xl md:text-4xl mx-2 px-4 py-2 rounded-lg border-2 border-sbie-bronze/50 bg-sbie-bronze/20">50% da força de trabalho do mundo vai precisar de algum tipo de requalificação até 2025</span>. 
                Em seu relatório final, apontou as 15 competências para se desenvolver e/ou fortalecer para o futuro do trabalho, das quais 
                <span className="text-sbie-bronze font-bold text-xl">9 delas estão diretamente relacionadas à inteligência emocional</span>.
              </p>
              
              <div className="bg-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-8 border border-sbie-bronze/40">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  🚀 Sua empresa está preparada para essa transformação?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOVA SEÇÃO - 15 Competências do Fórum Econômico Mundial */}
      <section className="py-24 bg-gradient-to-br from-sbie-dark-green/20 to-sbie-menu-green/20 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              As <span className="text-sbie-bronze"> 15 Competências</span> do 
              <span className="block text-sbie-beige"> Fórum Econômico Mundial</span>
            </h2>
            <p className="text-xl text-sbie-beige/80 max-w-4xl mx-auto leading-relaxed">
              Competências essenciais para o futuro do trabalho até 2025
            </p>
          </div>

          {/* Grid das 15 Competências */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {competencias.map((competencia, index) => {
              const IconComponent = competencia.icon;
              return (
                <div 
                  key={competencia.id}
                  className={`group relative p-6 rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    competencia.relacionada 
                      ? 'bg-gradient-to-br from-sbie-bronze/30 to-sbie-beige/20 border-sbie-bronze/50 hover:border-sbie-bronze hover:shadow-sbie-bronze/30' 
                      : 'bg-gradient-to-br from-white/10 to-gray-500/10 border-gray-400/30 hover:border-gray-300'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      competencia.relacionada 
                        ? 'bg-sbie-bronze/40 text-sbie-beige' 
                        : 'bg-gray-500/40 text-gray-300'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                          competencia.relacionada 
                            ? 'bg-sbie-bronze/50 text-sbie-beige' 
                            : 'bg-gray-500/50 text-gray-300'
                        }`}>
                          {competencia.id}
                        </span>
                      </div>
                      <h3 className={`text-sm font-semibold leading-tight ${
                        competencia.relacionada ? 'text-white' : 'text-gray-300'
                      }`}>
                        {competencia.nome}
                      </h3>
                    </div>
                  </div>
                  
                  {competencia.relacionada && (
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-sbie-bronze rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Destaque das 9 Competências de IE */}
          <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-sbie-bronze/40 shadow-2xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Brain className="w-12 h-12 text-sbie-bronze" />
                <h3 className="text-3xl md:text-4xl font-black text-sbie-bronze">
                  9 de 15 Competências
                </h3>
                <MessageCircle className="w-12 h-12 text-sbie-beige" />
              </div>
              
              <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
                Estão <span className="text-sbie-bronze font-black">diretamente relacionadas</span> à{' '}
                <span className="text-sbie-beige font-black">Inteligência Emocional</span>
              </p>
              
              <div className="bg-sbie-bronze/30 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/50">
                <p className="text-lg text-amber-200 leading-relaxed">
                  <span className="text-white font-bold">60% das competências</span> necessárias para o futuro do trabalho 
                  dependem da sua capacidade de <span className="text-amber-100 font-semibold">compreender e gerenciar emoções</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NOVA CAIXA DE TEXTO MODERNA - TEXTO CORRIGIDO */}
      <section className="py-24 bg-gradient-to-br from-sbie-beige/10 to-sbie-bronze/10 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-white/15 to-sbie-beige/15 backdrop-blur-sm p-12 md:p-16 rounded-3xl border-2 border-sbie-bronze/40 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500">
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <Brain className="w-16 h-16 text-sbie-bronze" />
                <div className="w-2 h-2 bg-sbie-bronze rounded-full animate-pulse" />
                <Target className="w-16 h-16 text-sbie-beige" />
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black text-white mb-8 leading-tight">
                Uma Reflexão <span className="text-sbie-bronze">Importante</span>
              </h3>
              
              <div className="bg-gradient-to-r from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-2xl p-8 border border-sbie-bronze/50">
                <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                  Percebe que no futuro próximo a maioria das pessoas precisarão desenvolver a 
                  <span className="text-sbie-beige font-bold"> inteligência emocional </span>
                  para manterem seus empregos e que a 
                  <span className="text-sbie-beige font-bold">liderança</span>, por sua vez, será 
                  <span className="text-sbie-beige font-bold">mais exigida</span> neste novo cenário?
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-6 pt-6">
                <div className="w-4 h-4 bg-sbie-bronze rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-4 h-4 bg-sbie-beige rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
              </div>
              
              <button
                onClick={handleCTAClick}
                className="group bg-gradient-to-r from-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-sbie-bronze/50 border border-sbie-bronze/30"
              >
                <span className="flex items-center space-x-3">
                  <Target className="w-5 h-5" />
                  <span>Quero Preparar Minha Empresa</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 7. NOVA SEÇÃO - Rodrigo Fonseca e Gestão */}
      <section className="py-24 bg-gradient-to-br from-sbie-menu-green/20 to-sbie-dark-green/20 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Card Esquerda - Foto do Rodrigo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="https://i.imgur.com/dBT9Ltf.jpg" 
                      alt="Rodrigo Fonseca - Fundador da SBIE" 
                      className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl border-4 border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-500"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-sbie-bronze to-sbie-beige p-4 rounded-full shadow-xl">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="bg-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/30">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Rodrigo Fonseca
                    </h3>
                    <p className="text-sbie-beige font-semibold text-lg">
                      Fundador e Presidente da SBIE - Sociedade Brasileira de Inteligência Emocional
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Caixa de Texto Direita */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/15 to-sbie-beige/15 backdrop-blur-sm p-10 rounded-3xl border border-sbie-bronze/30 shadow-2xl transition-all duration-500 hover:shadow-sbie-bronze/30">
                <div className="space-y-8">
                  <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                      A VERDADE É QUE O MAIOR PROBLEMA ENFRENTADO PELAS EMPRESAS É DE 
                      <span className="text-red-400"> GESTÃO!</span>
                    </h3>
                  </div>
                  
                  <div className="bg-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/30">
                    <p className="text-lg text-white leading-relaxed mb-4">
                      O ser humano é complexo por natureza. É preciso considerar as 
                      <span className="text-sbie-beige font-semibold"> emoções, os sentimentos, as ambições, os valores e crenças </span>
                      de cada um para fazer uma empresa prosperar.
                    </p>
                    
                    <p className="text-lg text-white leading-relaxed">
                      Sendo assim, a principal missão de uma liderança é 
                      <span className="text-sbie-beige font-semibold"> construir uma equipe e engajá-la </span>
                      em prol dos resultados de todos.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-lg text-white leading-relaxed mb-4">
                      Ao contrário do que se imagina, a 
                      <span className="text-sbie-beige font-bold"> Inteligência Emocional é uma habilidade que pode ser aprendida e desenvolvida </span>
                      nas empresas.
                    </p>
                    
                    <p className="text-lg text-white leading-relaxed">
                      Ampliar a Inteligência Emocional dos seus colaboradores não só 
                      <span className="text-sbie-beige font-semibold"> facilita o relacionamento interpessoal</span>, como também 
                      <span className="text-sbie-beige font-semibold"> acelera os resultados </span>
                      de todos os envolvidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 8. NOVA SEÇÃO - Desenvolver Inteligência Emocional é para quem */}
      <section className="py-24 bg-gradient-to-br from-white/5 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              Desenvolver <span className="text-sbie-bronze">Inteligência Emocional</span>
              <span className="block text-sbie-beige">é para quem:</span>
            </h2>
          </div>

          {/* Grid de Cards com os tópicos */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-sbie-bronze/40 p-3 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Quer gerar resultados exponenciais.</h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-sbie-bronze/40 p-3 rounded-xl">
                  <Users className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">É líder e deseja sair das atividades operacionais,</h3>
                  <p className="text-sbie-beige leading-relaxed">aprendendo a confiar mais no seu time e, assim, delegar mais.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-sbie-bronze/40 p-3 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Deseja uma comunicação mais eficaz,</h3>
                  <p className="text-sbie-beige leading-relaxed">principalmente, na hora de dar feedbacks positivos ou negativos.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-sbie-bronze/40 p-3 rounded-xl">
                  <Cog className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Precisa organizar seus processos e</h3>
                  <p className="text-sbie-beige leading-relaxed">descentralizar o conhecimento.</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-sbie-bronze/40 p-3 rounded-xl">
                  <Brain className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Tem um pensamento estratégico e de longo prazo,</h3>
                  <p className="text-sbie-beige leading-relaxed">ou seja, quer aprender a dar foco no que é importante hoje, para colher frutos no futuro.</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-sbie-bronze/40 p-3 rounded-xl">
                  <Shield className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Quer acabar com as justificativas e resoluções</h3>
                  <p className="text-sbie-beige leading-relaxed">adiadas devido a desorganização, acomodação e/ou desmotivação da equipe.</p>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="group bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-sbie-bronze/40 p-3 rounded-xl">
                  <Handshake className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Quer desvendar os segredos do</h3>
                  <p className="text-sbie-beige leading-relaxed">comportamento humano e, assim, melhorar suas relações.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. NOVA CAIXA DE TEXTO MODERNA - Investimento em IE */}
      <section className="py-24 bg-gradient-to-br from-sbie-menu-green/20 to-sbie-dark-green/20 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Decoração de fundo */}
            <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze/10 to-sbie-beige/10 rounded-3xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-sbie-bronze/5 to-sbie-beige/5 rounded-3xl transform -rotate-1"></div>
            
            {/* Conteúdo principal */}
            <div className="relative bg-gradient-to-br from-sbie-dark-green/70 to-sbie-menu-green/60 backdrop-blur-sm p-12 md:p-16 rounded-3xl border-2 border-sbie-menu-green/50 shadow-2xl hover:shadow-sbie-menu-green/50 transition-all duration-500">
              <div className="text-center space-y-8">
                {/* Ícones decorativos */}
                <div className="flex items-center justify-center space-x-6 mb-8">
                  <div className="bg-sbie-beige/40 p-4 rounded-full">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <div className="w-4 h-4 bg-sbie-beige rounded-full animate-pulse"></div>
                  <div className="bg-white/40 p-4 rounded-full">
                    <Target className="w-12 h-12 text-sbie-beige" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black text-white mb-8 leading-tight">
                  <span className="text-sbie-beige">Investir</span> no desenvolvimento da{' '}
                  <span className="text-sbie-beige">Inteligência Emocional</span>
                </h3>
                
                <div className="bg-gradient-to-r from-sbie-dark-green/40 to-sbie-menu-green/40 backdrop-blur-sm rounded-2xl p-8 border border-sbie-beige/30">
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                    é construir uma <span className="text-sbie-beige font-bold">conexão real</span> com o seu time, 
                    para gerar os <span className="text-sbie-beige font-bold">resultados tão esperados</span> por todos, 
                    e ainda estar em <span className="text-sbie-beige font-bold">conformidade com a Nova NR-1</span>.
                  </p>
                </div>
                
                {/* Elementos decorativos animados */}
                <div className="flex items-center justify-center space-x-8 pt-6">
                  <div className="w-6 h-6 bg-sbie-bronze rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                  <div className="w-4 h-4 bg-sbie-beige rounded-full animate-bounce" style={{animationDelay: '200ms'}}></div>
                  <div className="w-6 h-6 bg-white rounded-full animate-bounce" style={{animationDelay: '400ms'}}></div>
                </div>
                
                {/* Botão CTA */}
                <button
                  onClick={handleCTAClick}
                  className="group bg-gradient-to-r from-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 mt-8"
                >
                  <span className="flex items-center space-x-3">
                    <Briefcase className="w-6 h-6" />
                    <span>Quero Transformar Minha Empresa</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NOVA SEÇÃO - Como funciona o processo */}
      <section className="py-24 bg-gradient-to-br from-sbie-dark-green/30 to-sbie-menu-green/20 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              Então, <span className="text-sbie-bronze">como funciona</span>
              <span className="block text-sbie-beige">o processo?</span>
            </h2>
          </div>

          {/* Grid de 4 Stacks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Stack 1 */}
            <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105 group">
              <div className="text-center space-y-6">
                <div className="bg-sbie-bronze/40 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black text-white">01</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Entrevista inicial com a empresa, para identificar os problemas e as dificuldades enfrentadas no seu dia a dia.</h3>
              </div>
            </div>

            {/* Stack 2 */}
            <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105 group">
              <div className="text-center space-y-6">
                <div className="bg-sbie-bronze/40 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black text-white">02</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Elaboração de um PLANO DE AÇÃO PERSONALIZADO para a sua empresa.</h3>
              </div>
            </div>

            {/* Stack 3 */}
            <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105 group">
              <div className="text-center space-y-6">
                <div className="bg-sbie-bronze/40 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black text-white">03</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Início das atividades de autoconhecimento e autodesenvolvimento com os gestores e colaboradores.</h3>
              </div>
            </div>

            {/* Stack 4 */}
            <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/40 transition-all duration-500 hover:scale-105 group">
              <div className="text-center space-y-6">
                <div className="bg-sbie-bronze/40 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black text-white">04</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Avaliação para medir os resultados do Treinamento.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NOVA SEÇÃO - Caixa de Texto Moderna */}
      <section className="py-24 bg-gradient-to-br from-white/5 to-sbie-bronze/10 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Decoração de fundo */}
            <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze/10 to-sbie-beige/10 rounded-3xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-sbie-bronze/5 to-sbie-beige/5 rounded-3xl transform -rotate-1"></div>
            
            {/* Conteúdo principal */}
            <div className="relative bg-gradient-to-br from-sbie-dark-green/80 to-sbie-menu-green/70 backdrop-blur-sm p-12 md:p-16 rounded-3xl border-2 border-sbie-menu-green/50 shadow-2xl hover:shadow-sbie-menu-green/50 transition-all duration-500">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    <span className="text-sbie-beige font-bold">Referência nacional</span> no desenvolvimento da Inteligência Emocional, 
                    a <span className="text-sbie-beige font-bold">Sociedade Brasileira de Inteligência Emocional (SBIE)</span>, 
                    através dos seus Treinamentos, Palestras e Cursos Presenciais ou Online já multiplicou os resultados 
                    das maiores empresas brasileiras como <span className="text-sbie-beige font-bold">AMBEV, Itaú, Bradesco, B3, Corinthians, Adidas, Iberostar, ExxonMobil</span>, entre outras.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                    E a <span className="text-sbie-beige font-bold">SUA EMPRESA</span> será a próxima, onde o 
                    <span className="text-sbie-beige font-bold">SBIE BUSINESS</span> criará uma experiência impactante 
                    e exclusiva para a sua atual necessidade.
                  </p>
                  
                  <p className="text-xl md:text-2xl text-sbie-beige font-bold">
                    É desta forma que a sua organização vai alcançar resultados exponenciais!
                  </p>
                </div>
                
                {/* Botão CTA */}
                <button
                  onClick={handleCTAClick}
                  className="group bg-gradient-to-r from-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 mt-8"
                >
                  <span className="flex items-center space-x-3">
                    <Briefcase className="w-6 h-6" />
                    <span>Quero Transformar Minha Empresa</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-black relative overflow-hidden">
        {/* Elementos decorativos de fundo futurista */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-sbie-bronze/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-sbie-beige/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sbie-bronze/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          {/* Padrão de grid futurista */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{backgroundImage: 'linear-gradient(rgba(182, 109, 56, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(182, 109, 56, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sbie-beige to-sbie-bronze mb-6 leading-tight">
              Confira os depoimentos de quem já passou pelo{' '}
              <span className="text-sbie-bronze">processo</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sbie-bronze to-sbie-beige mx-auto rounded-full"></div>
          </div>

          {/* Grid de depoimentos */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Depoimento 1 - Patricia Capel */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-sbie-bronze/10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
              {/* Player de vídeo moderno com thumbnail */}
              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="relative aspect-video">
                  {/* Thumbnail personalizada */}
                  <img 
                    src="https://lp.sbie.com.br/wp-content/uploads/2022/06/capa-video01-300x203.jpg"
                    alt="Patricia Capel - Depoimento"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                  
                  {/* Botão de play central */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => {
                        const video = document.getElementById('video-patricia') as HTMLVideoElement;
                        const thumbnail = video.previousElementSibling as HTMLElement;
                        thumbnail.style.display = 'none';
                        video.style.display = 'block';
                        video.play();
                      }}
                      className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group-hover:scale-105"
                    >
                      <Play className="w-10 h-10 text-sbie-bronze ml-1" />
                    </button>
                  </div>
                  
                  {/* Duração do vídeo */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    2:15
                  </div>
                </div>
                
                {/* Player de vídeo oculto */}
                <video 
                  id="video-patricia"
                  controls 
                  className="w-full aspect-video object-cover rounded-2xl hidden"
                  poster="https://lp.sbie.com.br/wp-content/uploads/2022/06/capa-video01-300x203.jpg"
                >
                  <source src="https://lp.sbie.com.br/wp-content/uploads/2022/06/Depoimento-01.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>

              {/* Informações do depoente */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Patricia Capel</h3>
                <p className="text-sbie-bronze font-semibold mb-3 text-sm">BU Andina President na Ambev</p>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 text-xs">Liderança Executiva</span>
                </div>
              </div>
            </div>

            {/* Depoimento 2 - Bianca Fagundes */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-sbie-bronze/10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
              {/* Player de vídeo moderno com thumbnail */}
              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="relative aspect-video">
                  {/* Thumbnail personalizada */}
                  <img 
                    src="https://lp.sbie.com.br/wp-content/uploads/2022/06/capa-video02-300x203.jpg"
                    alt="Bianca Fagundes - Depoimento"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                  
                  {/* Botão de play central */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => {
                        const video = document.getElementById('video-bianca') as HTMLVideoElement;
                        const thumbnail = video.previousElementSibling as HTMLElement;
                        thumbnail.style.display = 'none';
                        video.style.display = 'block';
                        video.play();
                      }}
                      className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group-hover:scale-105"
                    >
                      <Play className="w-10 h-10 text-sbie-bronze ml-1" />
                    </button>
                  </div>
                  
                  {/* Duração do vídeo */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    1:45
                  </div>
                </div>
                
                {/* Player de vídeo oculto */}
                <video 
                  id="video-bianca"
                  controls 
                  className="w-full aspect-video object-cover rounded-2xl hidden"
                  poster="https://lp.sbie.com.br/wp-content/uploads/2022/06/capa-video02-300x203.jpg"
                >
                  <source src="https://lp.sbie.com.br/wp-content/uploads/2022/06/Depoimento-02.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>

              {/* Informações do depoente */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Bianca Fagundes</h3>
                <p className="text-sbie-bronze font-semibold mb-3 text-sm">Gestora de Eventos da Iberostar</p>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center">
                    <Target className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 text-xs">Gestão de Eventos</span>
                </div>
              </div>
            </div>

            {/* Depoimento 3 - Lhana Ynaiá */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-sbie-bronze/10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group lg:col-span-1 md:col-span-2 md:max-w-md md:mx-auto">
              {/* Player de vídeo moderno com thumbnail */}
              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="relative aspect-video">
                  {/* Thumbnail personalizada */}
                  <img 
                    src="https://lp.sbie.com.br/wp-content/uploads/2022/06/capa-video03-300x203.jpg"
                    alt="Lhana Ynaiá da Silva Borges - Depoimento"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                  
                  {/* Botão de play central */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => {
                        const video = document.getElementById('video-lhana') as HTMLVideoElement;
                        const thumbnail = video.previousElementSibling as HTMLElement;
                        thumbnail.style.display = 'none';
                        video.style.display = 'block';
                        video.play();
                      }}
                      className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group-hover:scale-105"
                    >
                      <Play className="w-10 h-10 text-sbie-bronze ml-1" />
                    </button>
                  </div>
                  
                  {/* Duração do vídeo */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    2:30
                  </div>
                </div>
                
                {/* Player de vídeo oculto */}
                <video 
                  id="video-lhana"
                  controls 
                  className="w-full aspect-video object-cover rounded-2xl hidden"
                  poster="https://lp.sbie.com.br/wp-content/uploads/2022/06/capa-video03-300x203.jpg"
                >
                  <source src="https://lp.sbie.com.br/wp-content/uploads/2022/06/Depoimento-03.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>

              {/* Informações do depoente */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Lhana Ynaiá da Silva Borges</h3>
                <p className="text-sbie-bronze font-semibold mb-3 text-sm">Coordenadora da Logística da Pif Paf Alimentos</p>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center">
                    <Cog className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 text-xs">Coordenação Logística</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA adicional */}
          <div className="text-center mt-16">
            <p className="text-lg text-sbie-beige/80 mb-8">
              Quer ser o próximo a transformar sua carreira e empresa?
            </p>
            <button
              onClick={handleCTAClick}
              className="group bg-gradient-to-r from-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-sbie-dark-green px-10 py-4 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-sbie-bronze/50"
            >
              <span className="flex items-center space-x-3">
                <Play className="w-5 h-5" />
                <span>Quero Meu Depoimento Aqui</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Seção de Logos com Scroll Horizontal */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-sbie-beige mb-4">
                Empresas que já confiam na <span className="text-sbie-bronze">SBIE</span>
              </h3>
              <p className="text-sbie-beige/80 text-lg">
                Junte-se às principais organizações do mercado
              </p>
            </div>
            
            {/* Container do scroll horizontal */}
            <div className="relative overflow-hidden">
              {/* Gradientes nas bordas */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sbie-dark-green to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sbie-dark-green to-transparent z-10"></div>
              
              {/* Scroll infinito */}
              <div className="flex animate-scroll-infinite">
                {/* Primeira passagem dos logos */}
                <div className="flex items-center space-x-12 px-6">
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://s3.sa-east-1.amazonaws.com/public.senseinvest/logos/ambev.png" 
                      alt="AMBEV"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://olhardebia.org.br/wp-content/uploads/2021/10/logos-parceiros_Prancheta-1-copia-5-e1643649261639.png" 
                      alt="Retitui"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/3/34/Logo_PMESP.png" 
                      alt="Polícia Militar"
                      className="w-full h-full object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 filter grayscale"
                    />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                     <img 
                       src="https://cdn.guiademarcas.globo/v2_capa_globo_corporativa_azNBQNV.png" 
                       alt="Globo"
                       className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                     />
                   </div>
                   <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                     <img 
                       src="https://mercoagro2025.quemvai.com.br/extranet/thumbnail/crop/1200x628/Noticia/imagem_587_1586864906.png" 
                       alt="Pif Paf"
                       className="w-full h-full object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 filter grayscale"
                     />
                   </div>
                   <div className="flex-shrink-0 w-48 h-24 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                     <img 
                       src="https://jovemaprendiz.pro.br/wp-content/uploads/2019/11/Grupo-Ser-Educacional.png" 
                       alt="Ser Educacional"
                       className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                     />
                   </div>
                   <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                     <img 
                       src="https://anhanguera.s3.amazonaws.com/wp-content/uploads/2019/10/logo-anhanguera.png" 
                       alt="Anhanguera"
                       className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                     />
                   </div>
                   <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/B3_logo.png/250px-B3_logo.png" 
                      alt="B3"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Caixa_Econ%C3%B4mica_Federal_logo.svg/1280px-Caixa_Econ%C3%B4mica_Federal_logo.svg.png" 
                      alt="Caixa Econômica Federal"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" 
                      alt="Adidas"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/pt/archive/b/b4/20250902021618%21Corinthians_simbolo.png" 
                      alt="Corinthians"
                      className="w-full h-full object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 filter grayscale"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ita%C3%BA_Unibanco_logo_2023.svg/500px-Ita%C3%BA_Unibanco_logo_2023.svg.png" 
                      alt="Itaú"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://revolucionlimo.com/wp-content/uploads/2024/09/LANDING-Logos-6-iberostar.png" 
                      alt="Iberostar"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Banco_Bradesco_logo_%28horizontal%29.png" 
                      alt="Bradesco"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                </div>
                
                {/* Segunda passagem dos logos (duplicada para efeito infinito) */}
                <div className="flex items-center space-x-12 px-6">
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://s3.sa-east-1.amazonaws.com/public.senseinvest/logos/ambev.png" 
                      alt="AMBEV"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://olhardebia.org.br/wp-content/uploads/2021/10/logos-parceiros_Prancheta-1-copia-5-e1643649261639.png" 
                      alt="Retitui"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/3/34/Logo_PMESP.png" 
                      alt="Polícia Militar"
                      className="w-full h-full object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 filter grayscale"
                    />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://cdn.guiademarcas.globo/v2_capa_globo_corporativa_azNBQNV.png" 
                      alt="Globo"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://mercoagro2025.quemvai.com.br/extranet/thumbnail/crop/1200x628/Noticia/imagem_587_1586864906.png" 
                      alt="Pif Paf"
                      className="w-full h-full object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 filter grayscale"
                    />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://jovemaprendiz.pro.br/wp-content/uploads/2019/11/Grupo-Ser-Educacional.png" 
                      alt="Ser Educacional"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://anhanguera.s3.amazonaws.com/wp-content/uploads/2019/10/logo-anhanguera.png" 
                      alt="Anhanguera"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/B3_logo.png/250px-B3_logo.png" 
                      alt="B3"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Caixa_Econ%C3%B4mica_Federal_logo.svg/1280px-Caixa_Econ%C3%B4mica_Federal_logo.svg.png" 
                      alt="Caixa Econômica Federal"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" 
                      alt="Adidas"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/pt/archive/b/b4/20250902021618%21Corinthians_simbolo.png" 
                      alt="Corinthians"
                      className="w-full h-full object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 filter grayscale"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ita%C3%BA_Unibanco_logo_2023.svg/500px-Ita%C3%BA_Unibanco_logo_2023.svg.png" 
                      alt="Itaú"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://revolucionlimo.com/wp-content/uploads/2024/09/LANDING-Logos-6-iberostar.png" 
                      alt="Iberostar"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 bg-sbie-menu-green/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center hover:bg-sbie-menu-green/30 transition-all duration-300 shadow-lg border border-sbie-menu-green/30">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Banco_Bradesco_logo_%28horizontal%29.png" 
                      alt="Bradesco"
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. NOVA SEÇÃO - Resultados do Treinamento */}
      <section className="py-24 bg-gradient-to-br from-sbie-beige/10 to-sbie-bronze/10 backdrop-blur-sm transition-all duration-1000 ease-in-out">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              Após o <span className="text-sbie-bronze">Treinamento exclusivo</span> aplicado,
              <span className="block text-sbie-beige">estes foram os principais resultados</span>
              <span className="block text-white">citados por essas empresas:</span>
            </h2>
          </div>

          {/* Grid de Cards de Resultados */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Aumento da produtividade através do gerenciamento dos conflitos internos;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Desenvolvimento da comunicação interpessoal;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Lealdade e comprometimento dos colaboradores com a empresa;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Pessoas com mais coragem para agir;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Líderes com maior poder de decisão;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Disposição dos colaboradores para contribuir com novas ideias;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Melhoria nos relacionamentos internos e externos (clientes e fornecedores);
                  </p>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Diminuição do turnover;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 9 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Diminuição expressiva do absenteísmo;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 10 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users2 className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Entusiasmo, disposição e companheirismo no ambiente de trabalho;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 11 */}
            <div className="group bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500 hover:scale-105 hover:border-sbie-bronze/50">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sbie-bronze/30 to-sbie-beige/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-sbie-beige" />
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sbie-bronze/20 p-2 rounded-full mt-1">
                    <div className="w-3 h-3 bg-sbie-bronze rounded-full"></div>
                  </div>
                  <p className="text-lg text-white leading-relaxed font-medium">
                    Vivência prática e efetiva do espírito de equipe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-3xl p-12 border border-sbie-bronze/40 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Quer que sua empresa também alcance esses <span className="text-sbie-bronze">resultados extraordinários</span>?
              </h3>
              <button
                onClick={handleCTAClick}
                className="group bg-gradient-to-r from-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30"
              >
                <span className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6" />
                  <span>Transformar Minha Empresa Agora</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. NOVA SEÇÃO - Até agora nenhum treinamento */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/Y5VVZXV.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Título Principal */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              Até agora, <span className="text-sbie-bronze">nenhum Treinamento corporativo</span>
              <span className="block text-sbie-beige">foi capaz de lhe ensinar a:</span>
            </h2>
          </div>

          {/* Layout Principal */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Lado Esquerdo - Card do Rodrigo */}
            <div className="space-y-8">
              {/* Card com foto do Rodrigo */}
              <div className="bg-gradient-to-br from-white/10 to-sbie-beige/10 backdrop-blur-sm p-8 rounded-3xl border border-sbie-bronze/30 shadow-2xl hover:shadow-sbie-bronze/50 transition-all duration-500">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="https://i.imgur.com/q3u2Jdm.jpg" 
                      alt="Rodrigo Fonseca" 
                      className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-sbie-bronze/50 shadow-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-sbie-bronze to-sbie-beige p-3 rounded-full">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Rodrigo Fonseca</h3>
                   <p className="text-sbie-beige font-medium">Fundador e Presidente da SBIE</p>
                </div>
              </div>

              {/* Texto abaixo do card */}
              <div className="bg-gradient-to-r from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-3xl p-8 border border-sbie-bronze/40 shadow-2xl">
                <p className="text-xl text-white leading-relaxed font-medium text-center">
                  Com o <span className="text-sbie-bronze font-bold">SBIE Business</span> você e seus colaboradores viverão uma 
                  <span className="text-sbie-beige font-bold"> experiência transformadora</span> tanto pessoal, quanto profissional
                </p>
              </div>
            </div>

            {/* Lado Direito - Lista de Checks */}
            <div className="space-y-6">
              {/* Check 1 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige p-2 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-white leading-relaxed font-medium">
                  Gerenciar suas emoções;
                </p>
              </div>

              {/* Check 2 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige p-2 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-white leading-relaxed font-medium">
                  Comunicar de forma assertiva;
                </p>
              </div>

              {/* Check 3 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige p-2 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-white leading-relaxed font-medium">
                  Ter foco naquilo que é realmente importante;
                </p>
              </div>

              {/* Check 4 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige p-2 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-white leading-relaxed font-medium">
                  Ter mais resiliência;
                </p>
              </div>

              {/* Check 5 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige p-2 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-white leading-relaxed font-medium">
                  Ter uma mentalidade vencedora;
                </p>
              </div>

              {/* Check 6 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige p-2 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-white leading-relaxed font-medium">
                  Desenvolver a maturidade emocional;
                </p>
              </div>

              {/* Check 7 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige p-2 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-white leading-relaxed font-medium">
                  Senso de autorresponsabilidade;
                </p>
              </div>

              {/* Check 8 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige p-2 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-white leading-relaxed font-medium">
                  Fazer tudo com excelência.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <button
                  onClick={handleCTAClick}
                  className="group w-full bg-gradient-to-r from-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-8 py-6 rounded-full text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <Target className="w-6 h-6" />
                    <span>Quero Desenvolver Essas Habilidades</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Mentores */}
      <section className="py-20 bg-gradient-to-br from-sbie-beige/10 to-sbie-bronze/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quem são os mentores do
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sbie-bronze to-sbie-beige ml-3">
                SBIE BUSINESS
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Card Rodrigo Fonseca */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:shadow-sbie-bronze/30 transition-all duration-500 group hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-72 h-80 rounded-2xl overflow-hidden border-4 border-sbie-bronze/30 shadow-2xl group-hover:border-sbie-bronze/50 transition-all duration-500">
                    <img
                      src="https://i.imgur.com/omP96V6.jpg"
                      alt="Rodrigo Fonseca"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sbie-bronze to-sbie-beige text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-xl">
                    Rodrigo Fonseca
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Rodrigo Fonseca é o maior Mentor de Inteligência Emocional do Brasil. Ao longo dos últimos 27 anos, já conduziu a transformação de mais de 200 mil pessoas. Rodrigo também é Presidente da Sociedade Brasileira de Inteligência Emocional e autor do livro "Emoções – A Inteligência Emocional na Prática", "Missão, como viver uma Vida de Propósito", "Inteligência Emocional para Pais" e "Riqueza Emocional".
                  </p>
                </div>
              </div>
            </div>

            {/* Card Francisco Fontes */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:shadow-sbie-bronze/30 transition-all duration-500 group hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-72 h-80 rounded-2xl overflow-hidden border-4 border-sbie-bronze/30 shadow-2xl group-hover:border-sbie-bronze/50 transition-all duration-500">
                    <img
                      src="https://lp.sbie.com.br/wp-content/uploads/2023/07/Design-sem-nome-6.png"
                      alt="Francisco Fontes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sbie-bronze to-sbie-beige text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-xl">
                    Francisco Fontes
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Fontes é administrador de empresa, Especialista em Finanças Corporativas e Master in Business Administration – Gestão de Pessoas e Finanças. Além de Mentor Master em Inteligência Emocional pela SBIE, Professor de MBA FAGEN-UFU (Eixo de Estratégia Empresarial).
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Francisco Fontes é Diretor Executivo da FWA Consulting, CEO – UMC Tecnologia – CICLYS, Embaixador da SBie e Autor das Metodologias:
                  </p>
                  <ul className="text-left text-gray-700 space-y-3">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full mr-4"></div>
                      <span className="text-lg">RAEM (A arte de relacionar com as pessoas)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full mr-4"></div>
                      <span className="text-lg">Gincana do conhecimento (Jogos de T&D Vendas)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full mr-4"></div>
                      <span className="text-lg">GESTHUS (Gestão Estratégica de Talentos Humanos)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full mr-4"></div>
                      <span className="text-lg">SEVENCORE (Harmonia conjugal)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Caixa de Texto Destacada */}
          <div className="bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              A sua Empresa nunca mais será a mesma!
            </h3>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Afinal, emoções movem pessoas, e pessoas geram resultados.
            </p>
            <button className="bg-white text-sbie-bronze px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              QUERO FALAR COM UM CONSULTOR
            </button>
          </div>
        </div>
      </section>

      {/* Seção Garantia */}
      <section className="py-20 bg-gradient-to-br from-sbie-dark-green to-sbie-menu-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
            {/* Selo de Garantia */}
            <div className="mb-8">
              <img
                src="https://i.imgur.com/KN5lano.png"
                alt="Selo de Garantia SBIE"
                className="w-48 h-48 mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Título Principal */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Garantia Incondicional
            </h2>
            
            {/* Badge de Satisfação */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">
                  Satisfação 100% Garantida
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};