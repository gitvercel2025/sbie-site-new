import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LegadoPage = () => {
  const navigate = useNavigate();
  
  // Estado para animação dos números
  const [counts, setCounts] = useState({
    people: 0,
    years: 0,
    rating: 0
  });

  // Estado para contador regressivo do evento Legado
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Função para navegar para formulário
  const handleCTAClick = () => {
    // Scroll para o topo antes de navegar
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Pequeno delay para garantir que o scroll aconteça antes da navegação
    setTimeout(() => {
      navigate('/formulario');
    }, 300);
  };

  // Efeito para animação dos números
  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000; // 2 segundos
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          people: Math.floor(200 * progress),
          years: Math.floor(25 * progress),
          rating: Math.floor(5.0 * progress * 10) / 10
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts({ people: 200, years: 25, rating: 5.0 });
        }
      }, stepDuration);
    };

    // Iniciar animação após um pequeno delay
    const timeout = setTimeout(animateNumbers, 500);
    
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Contador regressivo para o evento do Legado (12, 13 e 14 de setembro de 2025)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-09-12T09:00:00-03:00'); // 12 de setembro de 2025, 9h (horário de Brasília)
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#21302B] to-[#4F5948] text-white overflow-hidden">
        {/* Background com marca d'água */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://i.imgur.com/wNP4so6.jpg" 
            alt="Rodrigo Fonseca Background" 
            className="w-full h-full object-cover object-center"
            style={{
              objectPosition: '50% 20%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#21302B]/60 to-[#4F5948]/60"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Título da Página */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] via-[#B66D38] to-[#DFC6AA] mb-4 leading-tight tracking-tight">
              LOTUS LEGADO
            </h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] via-[#B66D38] to-[#DFC6AA] mb-6 leading-tight tracking-tight">
            Construa o seu legado e viva o seu verdadeiro propósito.
          </h2>
          <p className="text-xl md:text-2xl text-[#DFC6AA]/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Uma jornada de transformação guiada pela Inteligência Emocional.
          </p>
          
          {/* Botão moderno com link para formulário */}
          <button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] text-[#21302B] px-12 py-6 rounded-2xl text-xl font-black hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#B66D38]/50 relative overflow-hidden group tracking-tight"
          >
            <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#21302B] to-[#4F5948]">QUERO VIVER ESSA TRANSFORMAÇÃO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Seção Problema / Dor */}
      <section className="py-20 bg-[#DFC6AA]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#21302B] to-[#4F5948] mb-12">
            Você está apenas sobrevivendo?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4F5948] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#4F5948] mb-2">Vida sem sentido</h3>
              <p className="text-[#4F5948]">Sentindo que está apenas cumprindo obrigações</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4F5948] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#4F5948] mb-2">Falta de clareza</h3>
              <p className="text-[#4F5948]">Não sabe qual direção tomar na vida</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4F5948] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#4F5948] mb-2">Estagnação</h3>
              <p className="text-[#4F5948]">Sente que não está evoluindo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Propósito / Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#21302B] to-[#4F5948] mb-12">
            Descubra a vida com propósito.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#B66D38] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#4F5948] mb-2">Clareza de propósito</h3>
              <p className="text-[#4F5948]">Descubra sua missão de vida e viva com direcionamento</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#B66D38] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#4F5948] mb-2">Prosperidade e abundância</h3>
              <p className="text-[#4F5948]">Atraia oportunidades e construa riqueza verdadeira</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#B66D38] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#4F5948] mb-2">Despertar talentos e potenciais</h3>
              <p className="text-[#4F5948]">Liberte suas habilidades únicas e brilhe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Autoridade */}
      <section className="py-20 bg-[#21302B]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] text-center mb-12">
            Quem guia essa transformação
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Card do Rodrigo Fonseca com moldura moderna */}
            <div className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B66D38]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                {/* Foto do Rodrigo com moldura moderna - CENTRALIZADA */}
                <div className="relative mx-auto mb-6 w-48 h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-3xl p-1">
                    <div className="w-full h-full bg-[#21302B] rounded-3xl overflow-hidden">
                      <img 
                        src="https://i.imgur.com/XTz6HN7.jpg" 
                        alt="Rodrigo Fonseca" 
                        className="w-full h-full object-cover object-center"
                        style={{
                          objectPosition: '50% 15%' // Ajustado para mostrar melhor o rosto
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B66D38] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#DFC6AA] mb-4">Rodrigo Fonseca</h3>
                <p className="text-[#DFC6AA]/80 mb-6 leading-relaxed">
                  Especialista em Inteligência Emocional com mais de 25 anos de experiência. 
                  Transformou a vida de mais de 200 mil pessoas através de seus treinamentos.
                </p>
                
                {/* Cards de números com animação */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-xl p-3 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-black text-[#21302B]">+{counts.people}k</div>
                    <div className="text-xs text-[#21302B]/80 font-medium">Pessoas transformadas</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#DFC6AA] to-[#B66D38] rounded-xl p-3 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-black text-[#21302B]">+{counts.years}</div>
                    <div className="text-xs text-[#21302B]/80 font-medium">Anos de experiência</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-xl p-3 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-black text-[#21302B]">{counts.rating.toFixed(1)}</div>
                    <div className="text-xs text-[#21302B]/80 font-medium">Nota no Google</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vídeo 1 - Mensagem do Rodrigo - RESTAURADO */}
            <div className="text-center">
              <h3 className="text-xl font-medium text-[#DFC6AA] mb-6">Mensagem de Rodrigo Fonseca para você</h3>
              <div className="relative bg-[#DFC6AA] rounded-lg p-4 shadow-lg">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                  <iframe 
                    src="https://www.youtube.com/embed/AWnd2JlU3y8" 
                    title="LOTUS LEGADO | RODRIGO FONSECA"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Estrutura do Treinamento */}
      <section className="py-20 bg-[#DFC6AA]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#21302B] to-[#4F5948] text-center mb-12">
            O que você vai viver no Lotus Legado
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#21302B] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-medium text-[#21302B] mb-4">Autoconhecimento Profundo</h3>
              <p className="text-[#4F5948]">Descubra quem você realmente é, seus valores, crenças e padrões que limitam seu crescimento.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#21302B] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-medium text-[#21302B] mb-4">Definição de Propósito</h3>
              <p className="text-[#4F5948]">Encontre sua missão de vida e construa um plano claro para viver com significado e direção.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#21302B] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-medium text-[#21302B] mb-4">Construção do Legado</h3>
              <p className="text-[#4F5948]">Desenvolva estratégias práticas para deixar sua marca no mundo e impactar positivamente outras vidas.</p>
            </div>
          </div>
          <div className="text-center">
            <button 
              onClick={handleCTAClick}
              className="bg-[#B66D38] hover:bg-[#21302B] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Quero participar da próxima turma
            </button>
          </div>
        </div>
      </section>

      {/* Nova Seção - Descubra seus talentos */}
      <section className="py-20 bg-gradient-to-br from-[#21302B] via-[#4F5948] to-[#21302B]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-black text-[#DFC6AA] mb-8 leading-tight">
                  DESCUBRA QUAIS SÃO SEUS MAIORES TALENTOS E COMO VIVER UMA VIDA DE PROPÓSITO!
                </h2>
              </div>
              
              {/* Foto do Rodrigo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-80 h-96 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-3xl p-1 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-[#21302B] to-[#4F5948] rounded-3xl overflow-hidden">
                      <img 
                        src="https://i.imgur.com/9a9VMCS.jpg" 
                        alt="Rodrigo Fonseca" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#B66D38] rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#DFC6AA] rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Prova Social */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#21302B] to-[#4F5948] text-center mb-12">
            Mais de 200 mil pessoas já viveram essa transformação
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Depoimentos */}
            <div className="space-y-6">
              <div className="bg-[#DFC6AA] p-6 rounded-lg">
                <p className="text-[#21302B] mb-4 italic">"O Lotus Legado mudou completamente minha perspectiva de vida. Hoje vivo com propósito e clareza."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#4F5948] rounded-full mr-4"></div>
                  <div>
                    <div className="font-medium text-[#21302B]">Maria Silva</div>
                    <div className="text-sm text-[#4F5948]">Empresária</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#DFC6AA] p-6 rounded-lg">
                <p className="text-[#21302B] mb-4 italic">"Descobri meus talentos e hoje construo o legado que sempre sonhei."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#4F5948] rounded-full mr-4"></div>
                  <div>
                    <div className="font-medium text-[#21302B]">João Santos</div>
                    <div className="text-sm text-[#4F5948]">Coach</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vídeo 2 - Depoimentos */}
            <div className="text-center">
              <h3 className="text-xl font-medium text-[#21302B] mb-6">Assista a quem já viveu essa transformação</h3>
              <div className="bg-[#4F5948] rounded-lg p-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.youtube.com/embed/e2DwS2VfC84" 
                    title="ELES REDESCOBRIRAM O SEU PROPÓSITO NO LOTUS LEGADO"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Datas e Informações Práticas */}
      <section className="py-20 bg-[#4F5948]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] mb-8">
            Próxima turma: 12, 13 e 14 de setembro de 2025
          </h2>
          
          {/* Contador Regressivo */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#DFC6AA] mb-6">Faltam apenas:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black text-[#21302B] mb-2">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-sm font-medium text-[#21302B]/80">Dias</div>
              </div>
              <div className="bg-gradient-to-br from-[#DFC6AA] to-[#B66D38] rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black text-[#21302B] mb-2">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm font-medium text-[#21302B]/80">Horas</div>
              </div>
              <div className="bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black text-[#21302B] mb-2">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm font-medium text-[#21302B]/80">Minutos</div>
              </div>
              <div className="bg-gradient-to-br from-[#DFC6AA] to-[#B66D38] rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black text-[#21302B] mb-2">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm font-medium text-[#21302B]/80">Segundos</div>
              </div>
            </div>
          </div>
          
          <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
            Três dias intensivos de transformação que vão mudar sua vida para sempre. 
            Formato presencial com acompanhamento personalizado.
          </p>
          <button 
            onClick={handleCTAClick}
            className="bg-[#21302B] hover:bg-[#B66D38] text-white px-10 py-5 rounded-lg text-xl font-medium transition-all duration-300 transform hover:scale-105"
          >
            Quero garantir meu lugar
          </button>
        </div>
      </section>

      {/* Seção Garantia - Background igual à página Lotus */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-[#21302B] via-[#4F5948] to-[#21302B]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B66D38]/5 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center">
                <img 
                  src="https://i.imgur.com/KN5lano.png" 
                  alt="Selo de Garantia" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-[#DFC6AA] mb-6">
                Garantia Incondicional
              </h2>
              
              <div className="inline-flex items-center bg-[#B66D38]/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-[#B66D38]/30">
                <svg className="w-8 h-8 text-[#B66D38] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#DFC6AA] font-bold text-lg">Satisfação 100% Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Final (Urgência + CTA) */}
      <section className="py-20 bg-gradient-to-r from-[#21302B] to-[#4F5948]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] mb-6">
            Últimas vagas disponíveis
          </h2>
          <p className="text-[#DFC6AA] text-xl mb-8 max-w-3xl mx-auto">
            Não deixe para depois. Essa é a sua oportunidade de construir seu legado 
            e viver a vida com propósito que você sempre sonhou.
          </p>
          <button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] text-[#21302B] px-12 py-6 rounded-2xl text-2xl font-black hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#B66D38]/50 relative overflow-hidden group"
          >
            <span className="relative z-10">Inscreva-se agora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LegadoPage;