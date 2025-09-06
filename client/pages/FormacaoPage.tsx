import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Play, CheckCircle, Users, Brain, Heart, Target, Award, Clock, BookOpen, Video, Shield } from 'lucide-react';

export const FormacaoPage = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const handleCTAClick = () => {
    navigate('/formulario', { state: { training: 'FORMAÇÃO EM INTELIGÊNCIA EMOCIONAL' } });
  };

  // Contador regressivo para próxima turma (exemplo: 30 dias)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "Quais são os pré-requisitos para participar?",
      answer: "Não há pré-requisitos específicos. A formação é aberta para qualquer pessoa interessada em desenvolver sua inteligência emocional."
    },
    {
      question: "A formação é presencial ou online?",
      answer: "Temos as duas opções, as aulas são gravadas, mas a experiência presencial é única."
    },
    {
      question: "Recebo certificado ao final?",
      answer: "Sim, todos os participantes que concluírem a formação recebem certificado oficial da SBIE. E também o Certificado do MEC pela UNIFAST!"
    },
    {
      question: "Qual é a duração da formação?",
      answer: "Duração de 40 horas, distribuídas em 4 dias!"
    },
    {
      question: "Há suporte durante a formação?",
      answer: "Sim, você terá acesso a uma comunidade exclusiva e suporte direto da equipe SBIE durante todo o processo."
    },
    {
      question: "Posso parcelar o investimento?",
      answer: (
        <div>
          <p className="mb-4">Sim, oferecemos diversas opções de parcelamento para facilitar seu acesso à formação.</p>
          <a 
            href="https://wa.me/551194006695" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
            </svg>
            Fale conosco no WhatsApp
          </a>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen bg-[#21302B] overflow-hidden">
        {/* Background com marca d'água */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://i.imgur.com/q3u2Jdm.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Conteúdo */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight" style={{ fontFamily: 'DM Serif Display, serif' }}>
                A Formação em Inteligência Emocional que transforma vidas há 25 anos.
              </h1>
              
              <p className="text-xl md:text-2xl text-[#DFC6AA] mb-12 font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Mais de 107.000 pessoas impactadas com técnicas práticas de Inteligência Emocional.
              </p>
              
              <button 
                onClick={handleCTAClick}
                className="bg-[#B66D38] hover:bg-[#B66D38]/90 text-white px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Quero garantir minha vaga
              </button>
            </div>
            
            {/* Coluna lateral bege com foto */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-[#DFC6AA] rounded-3xl p-8 shadow-2xl max-w-md">
                <img 
                  src="https://i.imgur.com/T4DB2vj.jpg" 
                  alt="Rodrigo Fonseca" 
                  className="w-full h-auto rounded-2xl grayscale contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seção Conexão com cards melhorados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#21302B] mb-8">
              Você sente que está vivendo no automático?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Muitas pessoas passam pelos dias sem clareza, enfrentando desequilíbrio emocional, estresse constante e dificuldades para liderar suas próprias vidas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-[#B66D38] to-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#21302B] mb-4 group-hover:text-[#B66D38] transition-colors duration-300">Falta de Clareza</h3>
              <p className="text-gray-600 leading-relaxed">Não sabe qual direção tomar na vida</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-[#B66D38] to-[#8B4513] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-[#B66D38] to-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#21302B] mb-4 group-hover:text-[#B66D38] transition-colors duration-300">Desequilíbrio</h3>
              <p className="text-gray-600 leading-relaxed">Emoções descontroladas afetam relacionamentos</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-[#B66D38] to-[#8B4513] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-[#B66D38] to-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#21302B] mb-4 group-hover:text-[#B66D38] transition-colors duration-300">Estresse</h3>
              <p className="text-gray-600 leading-relaxed">Pressão constante no trabalho e vida pessoal</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-[#B66D38] to-[#8B4513] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-[#B66D38] to-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#21302B] mb-4 group-hover:text-[#B66D38] transition-colors duration-300">Liderança</h3>
              <p className="text-gray-600 leading-relaxed">Dificuldade para liderar e inspirar outros</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-[#B66D38] to-[#8B4513] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção Benefícios */}
      <section className="py-20 bg-[#DFC6AA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-[#21302B] mb-12">
                  O que você vai conquistar na Formação em Inteligência Emocional
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#21302B] mt-1 flex-shrink-0" />
                    <p className="text-lg text-[#21302B] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Autoconhecimento profundo</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#21302B] mt-1 flex-shrink-0" />
                    <p className="text-lg text-[#21302B] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Regulação emocional no dia a dia</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#21302B] mt-1 flex-shrink-0" />
                    <p className="text-lg text-[#21302B] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Comunicação empática e assertiva</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#21302B] mt-1 flex-shrink-0" />
                    <p className="text-lg text-[#21302B] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Liderança inspiradora e consciente</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#21302B] mt-1 flex-shrink-0" />
                    <p className="text-lg text-[#21302B] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Clareza de propósito de vida</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#21302B] mt-1 flex-shrink-0" />
                    <p className="text-lg text-[#21302B] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Melhora expressiva dos avanços de pacientes / clientes</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#21302B] mt-1 flex-shrink-0" />
                    <p className="text-lg text-[#21302B] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Baixa concorrência de mercado</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#21302B] mt-1 flex-shrink-0" />
                    <p className="text-lg text-[#21302B] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>E nos primeiros 3 clientes você já pagou a sua Formação!</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#21302B] mb-6">Assista à mensagem do mentor</h3>
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/a8-oENwYOh8"
                      title="Mensagem do Mentor"
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
        </div>
      </section>

      {/* 4. Seção Estrutura da Formação com efeito zoom */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#21302B] text-center mb-16">
              Estrutura da Formação
            </h2>
            
            <div className="relative">
              {/* Linha do tempo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#B66D38] h-full hidden lg:block"></div>
              
              <div className="space-y-12">
                {[
                  { title: "Programas Emocionais", description: "Compreenda como os programas emocionais são formados e como eles influenciam nossas decisões e comportamentos diários" },
                  { title: "Sessões Práticas", description: "Participe de sessões práticas intensivas para aplicar imediatamente os conceitos aprendidos em situações reais" },
                  { title: "Acesso à Metodologia SBIE", description: "Tenha acesso completo à metodologia exclusiva SBIE, desenvolvida através de anos de pesquisa e aplicação prática" },
                  { title: "Modelos de Reprogramação", description: "Aprenda modelos específicos para reprogramar padrões emocionais limitantes e criar novos padrões de sucesso" },
                  { title: "Ferramentas de Desenvolvimento", description: "Receba ferramentas práticas e testadas para o desenvolvimento contínuo da inteligência emocional" },
                  { title: "Interpretação de Emoções", description: "Desenvolva a habilidade de interpretar corretamente as emoções, tanto suas quanto de outras pessoas" },
                  { title: "Decifração de Manifestações Emocionais", description: "Aprenda a decifrar as manifestações emocionais e compreender as mensagens por trás de cada emoção" },
                  { title: "Identificação e Alteração de Programas", description: "Identifique programas emocionais disfuncionais e aprenda técnicas para alterá-los de forma efetiva" },
                  { title: "Interrupção de Gatilhos", description: "Domine técnicas para interromper gatilhos emocionais automáticos e responder de forma consciente" },
                  { title: "Estratégias de Comunicação", description: "Desenvolva estratégias avançadas de comunicação com o cérebro emocional para resultados mais efetivos" },
                  { title: "Uso das Emoções para o Sucesso", description: "Aprenda a usar suas emoções como aliadas para alcançar seus objetivos pessoais e profissionais" }
                ].map((module, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2 lg:px-8">
                      <div className="bg-[#DFC6AA] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-[#21302B] mb-3">{module.title}</h3>
                        <p className="text-[#21302B]">{module.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex w-8 h-8 bg-[#B66D38] rounded-full items-center justify-center relative z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    
                    <div className="lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={handleCTAClick}
                className="bg-[#B66D38] hover:bg-[#B66D38]/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                Quero conhecer os módulos completos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. Nova Seção - Quem Pode Ser um Mentor Emocional */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background com marca d'água */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://i.imgur.com/4cMr158.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#21302B] text-center mb-16">
              QUEM PODE SER UM MENTOR EMOCIONAL?
            </h2>
            
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A Formação em Inteligência Emocional da SBIE é voltada quem quer mudar a própria vida, compreendendo como realmente funcionam as emoções, e para profissionais que queiram trabalhar ou já trabalham com desenvolvimento humano, lidando diariamente com relações humanas, profissionais ou pessoais.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Também se aplica as pessoas que não desejam utilizar os conhecimentos profissionalmente, mas tenham como objetivo desenvolver as Competências Emocionais para elevar sua performance em vários âmbitos da vida.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-[#21302B] text-center mb-12">
              Para os profissionais abaixo, por exemplo, o diferencial será:
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 - Psicólogos, Coaches e Terapeutas */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-transparent group-hover:border-[#B66D38] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#21302B] mb-4 text-center">
                    Psicólogos, Coaches e Terapeutas
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A Metodologia da SBIE trabalha com a Reprogramação Emocional de comportamentos incontroláveis, ou seja, o profissional terá habilidade para orientar e ajudar seus clientes, além do que está acontecendo superficialmente, reestruturando questões emocionais e auxiliando-o na mudança de comportamentos indesejados.
                  </p>
                </div>
              </div>
              
              {/* Card 2 - Médicos, Psiquiatras ou Profissionais da Saúde */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-transparent group-hover:border-[#B66D38] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#21302B] mb-4 text-center">
                    Médicos, Psiquiatras ou Profissionais da Saúde
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    O corpo físico é uma grande extensão do nosso cérebro límbico, que é o responsável por gerar pensamentos, emoções e comportamentos destrutivos. Com a Formação em Inteligência Emocional, o profissional da saúde terá mais recursos para lidar com as doenças, identificando com facilidade a verdadeira raiz emocional de cada enfermidade e, como consequência, contribuindo para o restabelecimento natural da saúde.
                  </p>
                </div>
              </div>
              
              {/* Card 3 - Empresários ou Gestores */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-transparent group-hover:border-[#B66D38] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#21302B] mb-4 text-center">
                    Empresários ou Gestores que ocupam cargos de Liderança
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Liderar definitivamente não é tarefa fácil! São diferentes tipos de personalidades, de comportamentos e anseios. Para os líderes, fica a responsabilidade de administrar diversas situações e colaboradores para a entrega dos resultados esperados. Com a Formação em Inteligência Emocional, você tornará sua liderança ainda mais eficaz, descobrindo novas formas para administrar conflitos, despertar talentos, motivar pessoas e gerar resultados exponenciais, caminhando lado a lado com a sua equipe, clientes e fornecedores.
                  </p>
                </div>
              </div>
              
              {/* Card 4 - Profissionais de RH */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-transparent group-hover:border-[#B66D38] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#21302B] mb-4 text-center">
                    Profissionais de RH
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    O setor de Recursos Humanos é um dos grandes responsáveis por administrar e motivar os colaboradores, garantindo a produtividade e os resultados. A função é justamente selecionar, gerir e nortear, em direção aos objetivos e metas da empresa. Com a Formação em Inteligência Emocional esse profissional saberá lidar com as emoções humanas, conseguindo contratar colaboradores com o perfil emocional adequado para cada função, construindo uma carreira de sucesso para os colaboradores e, consequentemente, para a empresa.
                  </p>
                </div>
              </div>
              
              {/* Card 5 - Professores e Pedagogos */}
              <div className="relative group md:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-transparent group-hover:border-[#B66D38] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#21302B] mb-4 text-center">
                    Professores e Pedagogos
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Educadores têm um papel ativo na formação das crianças e dos jovens. Em alguns países, já se pratica a Educação Emocional na escola como a \"Alfabetização Emocional\", \"a ciência do eu\" etc. Com a Formação em Inteligência Emocional o profissional reconhecerá as emoções dos alunos, criando um canal extremamente fértil e acessível para o aprendizado e o relacionamento interpessoal.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={handleCTAClick}
                className="bg-[#B66D38] hover:bg-[#B66D38]/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                Quero me tornar um Mentor Emocional
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Seção Prova Social */}
      <section className="py-20 bg-[#4F5948]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">
              Histórias de quem já viveu a transformação
            </h2>
            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Depoimentos reais de participantes da Formação em Inteligência Emocional</h3>
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl max-w-4xl mx-auto">
                <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/edaClnuWF4c"
                    title="Depoimentos da Formação"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {/* Card 1 */}
              <div className="group block h-full">
                <div className="h-full rounded-3xl p-[3px] bg-gradient-to-br from-[#DFC6AA]/60 via-white to-[#B66D38]/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="rounded-[22px] overflow-hidden bg-white ring-1 ring-gray-200 h-full flex items-center justify-center">
                    <div className="w-full h-80 sm:h-88 md:h-80 lg:h-80 xl:h-80">
                      <img
                        src="https://i.imgur.com/y8Kktmv.jpeg"
                        alt="Depoimento 1"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group block h-full">
                <div className="h-full rounded-3xl p-[3px] bg-gradient-to-br from-[#DFC6AA]/60 via-white to-[#B66D38]/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="rounded-[22px] overflow-hidden bg-white ring-1 ring-gray-200 h-full flex items-center justify-center">
                    <div className="w-full h-80 sm:h-88 md:h-80 lg:h-80 xl:h-80">
                      <img
                        src="https://i.imgur.com/pkTshKd.jpeg"
                        alt="Depoimento 2"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group block h-full">
                <div className="h-full rounded-3xl p-[3px] bg-gradient-to-br from-[#DFC6AA]/60 via-white to-[#B66D38]/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="rounded-[22px] overflow-hidden bg-white ring-1 ring-gray-200 h-full flex items-center justify-center">
                    <div className="w-full h-80 sm:h-88 md:h-80 lg:h-80 xl:h-80">
                      <img
                        src="https://i.imgur.com/Cb6OeX2.jpeg"
                        alt="Depoimento 3"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Seção Sobre a SBIE */}
      <section className="py-20 bg-[#21302B]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
              Sobre a SBIE
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-black text-[#B66D38] mb-2">1999</div>
                <p className="text-white">Fundação</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black text-[#B66D38] mb-2">+26</div>
                <p className="text-white">Anos de experiência</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black text-[#B66D38] mb-2">+200k</div>
                <p className="text-white">Pessoas transformadas</p>
              </div>
            </div>
            
            <p className="text-lg text-white leading-relaxed">
              A SBIE é pioneira no desenvolvimento da Inteligência Emocional no Brasil. Com mais de duas décadas de experiência, 
              já transformamos a vida de mais de 200.000 pessoas através de metodologias práticas e eficazes.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Seção Como Funciona */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#21302B] text-center mb-16">
              Como funciona a FORMAÇÃO EM INTELIGÊNCIA EMOCIONAL
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[#B66D38] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#21302B] mb-4">Formação Intensiva</h3>
                <p className="text-gray-600">O Programa tem 40 horas-aula que são distribuídas em 4 dias de Formação com sessões práticas, conteúdos e ferramentas exclusivas com base na Inteligência Emocional e na Neurociência.</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[#B66D38] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#21302B] mb-4">Desenvolvimento Profissional</h3>
                <p className="text-gray-600">Desenvolva suas emoções e adquira a habilidade para atuar como Mentor em Inteligência Emocional, ajudando diversas vidas e o mundo como um todo.</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[#B66D38] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#21302B] mb-4">Aplicação Prática</h3>
                <p className="text-gray-600">Aplique as técnicas e metodologias aprendidas para gerar transformações reais na sua vida e na vida de outras pessoas.</p>
              </div>
            </div>
            
            {/* Novo bloco de texto sobre o Mentor */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-[#21302B] mb-6 text-center">O Mentor em Inteligência Emocional</h3>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    O Mentor em Inteligência Emocional aprende ferramentas e técnicas para equilibrar as emoções humanas e superar bloqueios que estão longe da razão, agindo em direção às suas metas e aprendendo a lidar com os comportamentos emocionais limitantes e sabotadores.
                  </p>
                  
                  <p>
                    Tenha contato com a teoria científica da Inteligência Emocional, Neurociência e Reprogramação Emocional de impacto profundo que permitem acesso ao nosso cérebro límbico – região responsável pelas emoções e comportamentos incontroláveis.
                  </p>
                  
                  <p className="font-semibold text-[#21302B]">
                    Nosso objetivo é que você desenvolva competências para aplicar a Metodologia com sucesso em todo ser humano que queira gerar mudanças reais em sua vida, estando apto para:
                  </p>
                </div>
              </div>
            </div>
            
            {/* Lista de 15 aptidões */}
            <div className="bg-[#21302B] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center text-[#DFC6AA]">Aptidões que Você Desenvolverá</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Interpretar a relação entre emoções x comportamento humano</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">A função das Emoções</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Reconhecer Programas Emocionais derivados de cada emoção básica</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Gerenciar suas próprias emoções e de outras pessoas</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Técnicas para construir significados positivos para cada uma das experiências vividas</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Utilizar ferramentas de desenvolvimento da Inteligência Emocional</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Acessar o cérebro emocional e seus conteúdos</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Estratégias específicas de comunicação direta com o cérebro emocional</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Técnicas de Reprogramação de traumas e dores</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Reprogramação Emocional para transformar experiências traumáticas em aprendizados</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Imaginação Ativa: criação de tela mental com emoções</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Uma nova profissão: como desenvolver e praticar as Sessões de Inteligência Emocional com seus clientes já no primeiro dia</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Ferramentas para implementar a Inteligência Emocional em todas as áreas da vida</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Autoconhecimento e consciência dos Programas Emocionais</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#B66D38] mt-1 flex-shrink-0" />
                  <span className="text-sm">Levantamento de Padrões e geração de mudanças comportamentais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Seção O que Você Recebe */}
      <section className="py-20 bg-[#DFC6AA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#21302B] text-center mb-16">
              O que Você Recebe
            </h2>
            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#21302B] mb-6">Veja como funciona a Formação em Inteligência Emocional</h3>
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl max-w-4xl mx-auto">
                <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/Vc2O9blV60c"
                    title="Como funciona a Formação"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="absolute top-2 right-2">
                  <img src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" alt="Selo MEC" className="w-12 h-12" />
                </div>
                <Video className="w-12 h-12 text-[#B66D38] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#21302B] mb-2">Aulas presenciais/online</h3>
                <p className="text-gray-600 text-sm">Escolha a modalidade que melhor se adapta à sua rotina</p>
              </div>
              
              <div className="relative text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="absolute top-2 right-2">
                  <img src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" alt="Selo MEC" className="w-12 h-12" />
                </div>
                <BookOpen className="w-12 h-12 text-[#B66D38] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#21302B] mb-2">Exercícios práticos</h3>
                <p className="text-gray-600 text-sm">Atividades para aplicar o conhecimento no dia a dia</p>
              </div>
              
              <div className="relative text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="absolute top-2 right-2">
                  <img src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" alt="Selo MEC" className="w-12 h-12" />
                </div>
                <Users className="w-12 h-12 text-[#B66D38] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#21302B] mb-2">Comunidade exclusiva</h3>
                <p className="text-gray-600 text-sm">Rede de apoio com outros participantes</p>
              </div>
              
              <div className="relative text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="absolute top-2 right-2">
                  <img src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" alt="Selo MEC" className="w-12 h-12" />
                </div>
                <Award className="w-12 h-12 text-[#B66D38] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#21302B] mb-2">Certificado SBIE</h3>
                <p className="text-gray-600 text-sm">Certificação oficial reconhecida no mercado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 10. FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#21302B] text-center mb-16">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <span className="font-semibold text-[#21302B]">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#B66D38] transition-transform duration-200 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div className={`px-6 bg-white transition-all duration-200 ${
                    activeAccordion === index ? 'py-4 opacity-100' : 'py-0 opacity-0 h-0 overflow-hidden'
                  }`}>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Seção Final */}
      <section className="py-20 bg-gradient-to-br from-[#21302B] to-[#4F5948]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              A sua transformação começa agora
            </h2>
            
            <p className="text-xl text-[#DFC6AA] mb-12">
              Não adie o que pode mudar sua vida em poucos dias de prática.
            </p>
            
            {/* Contador regressivo */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
              <div className="bg-[#B66D38] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-sm text-white opacity-80">Dias</div>
              </div>
              <div className="bg-[#B66D38] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-sm text-white opacity-80">Horas</div>
              </div>
              <div className="bg-[#B66D38] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-sm text-white opacity-80">Min</div>
              </div>
              <div className="bg-[#B66D38] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-sm text-white opacity-80">Seg</div>
              </div>
            </div>
            
            <button 
              onClick={handleCTAClick}
              className="bg-[#B66D38] hover:bg-[#B66D38]/90 text-white px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Quero garantir minha vaga na Formação em Inteligência Emocional
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};