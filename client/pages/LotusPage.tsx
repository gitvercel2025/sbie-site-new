import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, Star, Shield, Clock, Users, Award, ChevronDown, Sparkles, Brain, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LotusPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  });

  const [showVideo, setShowVideo] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Efeito de digitação
  const fullText = "O que algumas das mais de 107 MIL PESSOAS falam sobre o LOTUS";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Array de vídeos
  const videoTestimonials = [
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2022/05/juliana.jpg",
      videoId: "ysF7fk1pjeQ",
      name: "Juliana Paes"
    },
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2022/05/wolf.jpg",
      videoId: "ENhzSaMsOQI",
      name: "Wolf Maya"
    },
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2022/05/cris.jpg",
      videoId: "dKBKJjxy2J4",
      name: "Chris Flores"
    },
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2022/05/catia.jpg",
      videoId: "5gCzTc34VVo",
      name: "Catia Fonseca"
    },
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2022/05/fafa.jpg",
      videoId: "MAnp-y73GSE",
      name: "Fafá de Belém"
    },
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2022/05/scheila.jpg",
      videoId: "a9o4wfPvndI",
      name: "Scheila Carvalho"
    }
  ];

  // Array de vídeos de mídia
  const mediaVideos = [
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2023/04/midia_01.jpg",
      videoId: "CoWH7JApAnw",
      title: "Programa Mais Você - Ana Maria Braga"
    },
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2023/04/midia_02.jpg",
      videoId: "CKOh_a2Toao",
      title: "Como Superar o Vício em Compras"
    },
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2023/04/midia_03.jpg",
      videoId: "ZWaGGMDLhLk",
      title: "Jornal das Dez - Globo News"
    },
    {
      thumbnail: "https://lp.sbie.com.br/wp-content/uploads/2023/04/midia_04.jpg",
      videoId: "mAcQ877ePfA",
      title: "Programa Papo de Segunda - GNT"
    }
  ];

  const handleVideoPlay = (videoId: string) => {
    setSelectedVideo(videoId);
    setShowVideoPlayer(true);
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const nextMediaVideo = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaVideos.length);
  };

  const prevMediaVideo = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaVideos.length) % mediaVideos.length);
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Autoconfiança",
      description: "Desenvolva uma confiança inabalável em suas decisões"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Autocontrole",
      description: "Domine suas emoções em situações desafiadoras"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Liderança",
      description: "Inspire e influencie pessoas com inteligência emocional"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Clareza Emocional",
      description: "Compreenda e gerencie suas emoções com maestria"
    }
  ];

  const modules = [
    {
      title: "Domínio Emocional",
      description: "Aprenda técnicas práticas para gerenciar as emoções e controlar os pensamentos de preocupação e irritabilidade que atrapalham seu dia-a-dia."
    },
    {
      title: "Foco e produtividade",
      description: "Você terá mais foco em suas atividades. Será mais produtivo(a) e potencialmente será melhor remunerado(a)."
    },
    {
      title: "Aumento de Energia",
      description: "Você terá mais energia, força e motivação para executar as atividades necessárias para atingir suas metas, com a velocidade e precisão que tanto sonha."
    },
    {
      title: "Melhor convivência",
      description: "Você descobrirá que por trás de toda atitude ou erro, existe uma história de dor. Esse entendimento na prática te auxiliará a se conectar verdadeiramente com as pessoas ao seu redor, especialmente aqueles que você mais ama!"
    },
    {
      title: "Libere a dor e a tensão",
      description: "Dores e lembranças do seu passado desaparecerão como 'mágica', após compreender o real significado de cada uma delas."
    },
    {
      title: "SEJA FELIZ",
      description: "Talvez pela primeira vez em sua vida, você viverá a felicidade verdadeira e uma sensação de paz que você sempre sonhou!"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Gerente de Vendas",
      text: "O LOTUS transformou completamente minha forma de liderar. Minha equipe nunca esteve tão engajada!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Empresário",
      text: "Aprendi a controlar minha ansiedade e tomar decisões mais assertivas. Meus resultados triplicaram!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Psicóloga",
      text: "Um treinamento que realmente funciona. Uso as técnicas tanto na vida pessoal quanto profissional.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Quanto tempo dura o treinamento?",
      answer: "O LOTUS tem duração de 8 semanas, com aulas semanais de 2 horas cada, totalizando 16 horas de conteúdo intensivo."
    },
    {
      question: "Preciso ter conhecimento prévio?",
      answer: "Não! O treinamento foi desenvolvido para pessoas de todos os níveis, desde iniciantes até profissionais experientes."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos garantia incondicional de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento."
    },
    {
      question: "O certificado é reconhecido?",
      answer: "Sim! Nosso certificado é reconhecido nacionalmente e você pode usar para comprovar suas habilidades profissionalmente."
    }
  ];

  // Função para navegação dos botões CTA
  const handleCTAClick = () => {
    // Scroll para o topo antes de navegar
    // No início do componente LotusPage, adicione:
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    // Pequeno delay para garantir que o scroll aconteça antes da navegação
    setTimeout(() => {
      navigate('/formulario');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#1a2420] to-[#2d3a32] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#DFC6AA]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-[#B66D38]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#4F5948]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#DFC6AA]/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-[#B66D38]/40 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#889073]/20 rounded-full animate-ping delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content & Rodrigo */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-6 py-3 mb-6">
                  <Sparkles className="w-5 h-5 text-[#B66D38] mr-2" />
                  <span className="text-[#DFC6AA] font-semibold text-sm tracking-wide uppercase">Transformação Garantida</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] via-[#B66D38] to-[#DFC6AA] mb-6 leading-tight tracking-tight">
                  LOTUS<br />
                  <span className="text-4xl md:text-6xl bg-gradient-to-r from-[#B66D38] to-[#889073] bg-clip-text text-transparent">
                    Inteligência Emocional
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-[#DFC6AA]/90 mb-8 max-w-2xl leading-relaxed font-light">
                  Transforme sua vida pessoal e profissional dominando suas emoções e desenvolvendo uma 
                  <span className="text-[#B66D38] font-semibold"> liderança extraordinária</span>
                </p>
              </div>
              
              {/* Rodrigo Fonseca Card */}
              <div className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-6 hover:scale-105 transition-all duration-500">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden relative">
                      <img 
                        src="https://i.imgur.com/q3u2Jdm.jpg" 
                        alt="Rodrigo Fonseca" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#B66D38] rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#DFC6AA] mb-1">Rodrigo Fonseca</h3>
                    <p className="text-[#B66D38] text-sm font-semibold mb-2">Maior Mentor em Inteligência Emocional do Brasil</p>
                    <div className="flex items-center space-x-4 text-xs text-[#DFC6AA]/80">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        <span>+107k transformados</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        <span>25+ anos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] text-[#21302B] px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[#B66D38]/50 relative overflow-hidden group"
              >
                <span className="relative z-10">QUERO TRANSFORMAR 10 ANOS EM APENAS UM ANO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            {/* Right Column - Video */}
            <div className="relative">
              {!showVideo ? (
                <div 
                  className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-[#4F5948]/30 to-[#21302B]/50 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl cursor-pointer group overflow-hidden"
                  onClick={() => setShowVideo(true)}
                >
                  {/* Custom Thumbnail Background */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://i.imgur.com/QRH4pQM.jpeg" 
                      alt="LOTUS Thumbnail" 
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl">
                        <Play className="w-10 h-10 text-[#21302B] ml-1" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
                      <p className="text-[#DFC6AA] text-sm font-semibold mb-1">▶ Vídeo de Apresentação</p>
                      <p className="text-[#DFC6AA]/70 text-xs">Descubra como o LOTUS pode transformar sua vida</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#DFC6AA]/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-[#B66D38]/30 rounded-full"></div>
                </div>
              ) : (
                <div className="w-full h-80 lg:h-96 bg-black rounded-3xl overflow-hidden shadow-2xl">
                  <video 
                    className="w-full h-full object-cover" 
                    src="https://lp.sbie.com.br/wp-content/uploads/2023/02/lotus-2025.mp4" 
                    title="LOTUS Apresentação"
                    controls
                    autoPlay
                  ></video>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Próximas Turmas Section */}
      <section className="w-full flex justify-center items-center py-16 bg-gradient-to-br from-[#f7f5ef] via-[#f3e7d6] to-[#e9e2d0]">
        <div className="max-w-xl w-full bg-white/90 rounded-3xl shadow-2xl border border-[#DFC6AA]/40 p-8 flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#B66D38] mb-2 tracking-tight">PRÓXIMA TURMA</h2>
          <div className="text-lg md:text-xl text-[#21302B] font-semibold mb-2">22, 23 e 24 de Agosto de 2025</div>
          <div className="text-base md:text-lg text-[#21302B]/80 mb-4">Hotel Vista Serrana – Mairiporã/SP</div>
          <a
            href="https://wa.me/5511940069695"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] text-[#21302B] px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[#B66D38]/50"
          >
            Mais Informações
          </a>
        </div>
      </section>

      {/* What is LOTUS Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-[#B66D38] mr-2" />
              <span className="text-[#DFC6AA] font-semibold text-sm tracking-wide uppercase">Transformação Garantida</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] mb-12">
              O QUE É O LOTUS?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#B66D38] mb-6">
                LOTUS Inteligência Emocional:
              </h3>
              
              <p className="text-lg md:text-xl text-[#DFC6AA] mb-6 leading-relaxed">
                Uma imersão de <span className="text-[#B66D38] font-bold">3 dias</span> que transformará <span className="text-[#B66D38] font-bold">10 anos de realizações</span> em sua vida pessoal e profissional, em apenas <span className="text-[#B66D38] font-bold">1 ano!</span>
              </p>
              
              <p className="text-base md:text-lg text-[#DFC6AA]/90 mb-6 leading-relaxed">
                Uma experiência intensa e transformadora desenvolvida pela <span className="text-[#B66D38] font-semibold">Sociedade Brasileira de Inteligência Emocional</span> que, em 3 dias de imersão, o conduzirá às verdadeiras raízes dos seus comportamentos e como somente VOCÊ poderá alterá-los.
              </p>
              
              <p className="text-base md:text-lg text-[#DFC6AA]/90 mb-8 leading-relaxed">
                Ele ainda promove a consciência de <span className="text-[#B66D38] font-semibold">"Programas Emocionais"</span> que disparam sentimentos e comportamentos indesejados e, principalmente, o conhecimento de como podemos reprogramá-los para gerar mudanças efetivas e espontâneas em nossas vidas pessoais e profissionais.
              </p>
              
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] text-[#21302B] px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#B66D38]/50 relative overflow-hidden group"
              >
                <span className="relative z-10">QUERO TRANSFORMAR 10 ANOS EM APENAS UM ANO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Primeiro Card - Você Carrega Algum Desses Sentimentos */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-[#21302B] via-[#2a3d36] to-[#21302B]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] mb-12">
              VOCÊ CARREGA ALGUM DESSES SENTIMENTOS?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative group">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] rounded-2xl opacity-50"></div>
                
                {/* Main image container */}
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <img 
                    src="https://i.imgur.com/AIrq70I.png" 
                    alt="Sentimentos negativos" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#DFC6AA] to-[#B66D38] rounded-full shadow-lg animate-bounce"></div>
              </div>
            </div>
            
            {/* Questions Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#4F5948]/30 to-[#21302B]/50 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {[
                    "Você se sente vazio e sem motivação para nada?",
                    "Você não se sente valorizado(a) pelas pessoas que mais ama?",
                    "Seus familiares não te reconhecem e não se importam com você?",
                    "Sua vida perdeu o sentido?"
                  ].map((question, index) => (
                    <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-[#B66D38]/10 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-lg md:text-xl text-[#DFC6AA] font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-6 py-3">
                    <Brain className="w-5 h-5 text-[#B66D38] mr-2" />
                    <span className="text-[#DFC6AA] font-semibold text-sm tracking-wide">Se você respondeu SIM para alguma dessas perguntas...</span>
                  </div>
                  <p className="text-[#B66D38] font-bold text-xl mt-4">
                    O LOTUS é para você!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segundo Card - Você Carrega Algum Desses Sentimentos */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-[#2a3d36] via-[#21302B] to-[#2a3d36]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Questions Section - Lado esquerdo */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#4F5948]/30 to-[#21302B]/50 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {[
                    "Você se sente sobrecarregado(a) e acha que não vai dar conta?",
                    "Os problemas só acumulam e você não consegue resolver mais nada?",
                    "Sente que só trabalha e não consegue aproveitar a vida?"
                  ].map((question, index) => (
                    <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-[#B66D38]/10 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-lg md:text-xl text-[#DFC6AA] font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-6 py-3">
                    <Brain className="w-5 h-5 text-[#B66D38] mr-2" />
                    <span className="text-[#DFC6AA] font-semibold text-sm tracking-wide">Se você respondeu SIM para alguma dessas perguntas...</span>
                  </div>
                  <p className="text-[#B66D38] font-bold text-xl mt-4">
                    O LOTUS é para você!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image Section - Lado direito */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative group">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#DFC6AA] via-[#B66D38] to-[#DFC6AA] rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-2xl opacity-50"></div>
                
                {/* Main image container */}
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <img 
                    src="https://i.imgur.com/A9deES9.png" 
                    alt="Sobrecarga e estresse" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#DFC6AA] to-[#B66D38] rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-full shadow-lg animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-[#B66D38] mr-2" />
              <span className="text-[#DFC6AA] font-semibold text-sm tracking-wide uppercase">Resultados Imediatos</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] mb-6">
              Benefícios Transformadores
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B66D38]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-2xl flex items-center justify-center text-[#21302B] group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#DFC6AA] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[#DFC6AA]/80 text-sm leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-6 py-3 mb-6">
              <Brain className="w-5 h-5 text-[#B66D38] mr-2" />
              <span className="text-[#DFC6AA] font-semibold text-sm tracking-wide uppercase">Conteúdo Exclusivo</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] mb-6">
              Habilidades que você irá desenvolver após o LOTUS!
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B66D38]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-2xl flex items-center justify-center text-[#21302B] font-black text-lg mr-4 shadow-xl">
                      {index + 1}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#DFC6AA]/30 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#DFC6AA] group-hover:text-[#B66D38] transition-colors mb-4">
                    {module.title}
                  </h3>
                  <p className="text-[#DFC6AA]/80 text-sm leading-relaxed font-light">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-12 md:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
              <Play className="w-4 h-4 md:w-5 md:h-5 text-[#B66D38] mr-2" />
              <span className="text-[#DFC6AA] font-semibold text-xs md:text-sm tracking-wide uppercase">Depoimentos</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#DFC6AA] mb-4 md:mb-6 min-h-[80px] md:min-h-[120px] flex items-center justify-center px-2">
              {typedText.split('107 MIL PESSOAS').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] animate-pulse">
                      107 MIL PESSOAS
                    </span>
                  )}
                </span>
              ))}
              <span className="animate-pulse text-[#B66D38]">|</span>
            </h2>
          </div>
          
          {/* Video Player Modal */}
          {showVideoPlayer && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl">
                <button 
                  onClick={() => setShowVideoPlayer(false)}
                  className="absolute -top-12 right-0 text-white hover:text-[#B66D38] transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="bg-black rounded-2xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                    title="Depoimento LOTUS"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
          
          {/* Video Slideshow */}
          <div className="relative">
            {/* Mobile: Stack layout, Desktop: Slideshow */}
            <div className="md:hidden space-y-4">
              {videoTestimonials.map((video, index) => (
                <div key={index} className="w-full">
                  <div className="relative group cursor-pointer" onClick={() => handleVideoPlay(video.videoId)}>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <img 
                        src={video.thumbnail} 
                        alt={video.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                          <Play className="w-6 h-6 text-[#21302B] ml-1" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Name */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-white font-bold text-base leading-tight">
                          {video.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Original slideshow */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between">
                <button 
                  onClick={prevVideo}
                  className="w-12 h-12 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl"
                >
                  <svg className="w-6 h-6 text-[#21302B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex-1 overflow-hidden mx-4">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentVideoIndex * (100 / Math.min(3, videoTestimonials.length))}%)` }}
                  >
                    {videoTestimonials.map((video, index) => (
                      <div key={index} className="w-1/3 flex-shrink-0 px-2">
                        <div className="relative group cursor-pointer" onClick={() => handleVideoPlay(video.videoId)}>
                          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img 
                              src={video.thumbnail} 
                              alt={video.name}
                              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* ... existing code ... */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={nextVideo}
                  className="w-12 h-12 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl"
                >
                  <svg className="w-6 h-6 text-[#21302B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Indicators - only on desktop */}
              <div className="flex justify-center space-x-2 mt-8">
                {Array.from({ length: Math.ceil(videoTestimonials.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index * 3)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentVideoIndex / 3) === index 
                        ? 'bg-gradient-to-r from-[#B66D38] to-[#DFC6AA]' 
                        : 'bg-[#DFC6AA]/30 hover:bg-[#DFC6AA]/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-8 md:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
              <Play className="w-4 h-4 md:w-5 md:h-5 text-[#B66D38] mr-2" />
              <span className="text-[#DFC6AA] font-semibold text-xs md:text-sm tracking-wide uppercase">Mídia</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#DFC6AA] mb-4 md:mb-6">
              RODRIGO FONSECA NA MÍDIA
            </h2>
          </div>
          
          {/* Media Video Slideshow */}
          <div className="relative mb-8 md:mb-12">
            {/* Mobile: Stack layout */}
            <div className="md:hidden space-y-4">
              {mediaVideos.map((video, index) => (
                <div key={index} className="w-full">
                  <div className="relative group cursor-pointer" onClick={() => handleVideoPlay(video.videoId)}>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                          <Play className="w-8 h-8 text-[#21302B] ml-1" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Original slideshow structure */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between">
                <button 
                  onClick={prevMediaVideo}
                  className="w-12 h-12 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl z-10"
                >
                  <svg className="w-6 h-6 text-[#21302B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex-1 overflow-hidden mx-4">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentMediaIndex * (100 / Math.min(3, mediaVideos.length))}%)` }}
                  >
                    {mediaVideos.map((video, index) => (
                      <div key={index} className="w-1/3 flex-shrink-0 px-2">
                        <div className="relative group cursor-pointer" onClick={() => handleVideoPlay(video.videoId)}>
                          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                                <Play className="w-8 h-8 text-[#21302B] ml-1" fill="currentColor" />
                              </div>
                            </div>
                            
                            {/* Title */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white font-bold text-lg leading-tight">
                                {video.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={nextMediaVideo}
                  className="w-12 h-12 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl z-10"
                >
                  <svg className="w-6 h-6 text-[#21302B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {Array.from({ length: Math.ceil(mediaVideos.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index * 3)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentMediaIndex / 3) === index 
                        ? 'bg-gradient-to-r from-[#B66D38] to-[#DFC6AA]' 
                        : 'bg-[#DFC6AA]/30 hover:bg-[#DFC6AA]/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Media Icons */}
          <div className="text-center mt-16">
            <img 
              src="https://lp.sbie.com.br/wp-content/uploads/2022/05/icones-midia.png" 
              alt="Ícones de Mídia" 
              className="mx-auto max-w-full h-auto brightness-125 contrast-110 hover:brightness-150 transition-all duration-300 filter"
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B66D38]/5 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                <img 
                  src="https://i.imgur.com/HwQq64m.png" 
                  alt="Selo de Garantia" 
                  className="w-full h-full object-contain p-2"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10"></div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-[#DFC6AA] mb-6">
                Garantia Incondicional
              </h2>
              
              <p className="text-[#DFC6AA]/90 text-lg leading-relaxed mb-8 font-light">
                Após terminar seus 3 dias de imersão e entender que não obteve os resultados esperados, devolvemos 100% do seu investimento*.
              </p>
              
              <p className="text-[#B66D38] text-sm font-semibold mb-8">
                * A devolução deve ser solicitada no final da Imersão, exceto valor de hospedagem.
              </p>
              
              <div className="inline-flex items-center bg-[#B66D38]/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-[#B66D38]/30">
                <CheckCircle className="w-8 h-8 text-[#B66D38] mr-3" />
                <span className="text-[#DFC6AA] font-bold text-lg">Satisfação 100% Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-6 py-3 mb-6">
            <Clock className="w-5 h-5 text-[#B66D38] mr-2" />
            <span className="text-[#DFC6AA] font-semibold text-sm tracking-wide uppercase">Oferta Limitada</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] mb-12">
            Oferta Especial por Tempo Limitado
          </h2>
          
          <div className="bg-gradient-to-br from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-xl border border-[#DFC6AA]/30 rounded-3xl p-12 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B66D38]/5 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <Clock className="w-8 h-8 text-[#B66D38] mr-3" />
                <span className="text-2xl md:text-3xl font-black text-[#DFC6AA]">
                  Oferta expira em:
                </span>
              </div>
              
              <div className="flex justify-center gap-2 sm:gap-4 mb-12">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-gradient-to-br from-[#21302B] to-[#4F5948] backdrop-blur-xl border border-[#DFC6AA]/20 rounded-2xl sm:rounded-3xl p-3 sm:p-6 min-w-[70px] sm:min-w-[100px]">
                    <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#B66D38] mb-1 sm:mb-2">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-[#DFC6AA] text-xs sm:text-sm font-semibold uppercase tracking-wide">
                      {unit === 'days' ? 'Dias' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Min' : 'Seg'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] text-[#21302B] px-16 py-6 rounded-2xl text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#B66D38]/50 animate-pulse relative overflow-hidden group"
          >
            <span className="relative z-10">GARANTIR MINHA VAGA AGORA</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-6 py-3 mb-6">
              <CheckCircle className="w-5 h-5 text-[#B66D38] mr-2" />
              <span className="text-[#DFC6AA] font-semibold text-sm tracking-wide uppercase">Dúvidas Frequentes</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] mb-6">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl overflow-hidden">
                <button
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-[#DFC6AA]/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-[#DFC6AA] pr-4 group-hover:text-[#B66D38] transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-6 h-6 text-[#B66D38] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {openFaq === index && (
                  <div className="px-8 pb-8">
                    <p className="text-[#DFC6AA]/90 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B66D38]/5 to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-[#DFC6AA] mb-6">
                Transforme Sua Vida Hoje Mesmo
              </h2>
              
              <p className="text-[#DFC6AA]/90 text-lg leading-relaxed mb-12 font-light">
                Não deixe suas emoções controlarem sua vida. Desenvolva a inteligência emocional que você precisa 
                para alcançar seus objetivos e viver com mais propósito, clareza e sucesso.
              </p>
              
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] text-[#21302B] px-16 py-6 rounded-2xl text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#B66D38]/50 mb-8 relative overflow-hidden group"
              >
                <span className="relative z-10">QUERO TRANSFORMAR MINHA VIDA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <div className="text-[#DFC6AA]/70 text-sm space-y-2 font-light">
                <p>✓ Acesso imediato após a compra</p>
                <p>✓ Suporte completo durante todo o treinamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed CTA Button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-auto">
        <button 
          onClick={handleCTAClick}
          className="w-full md:w-auto font-['Poppins'] bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] text-[#21302B] px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          INSCREVER-SE AGORA
        </button>
      </div>
    </div>
  );
};

export default LotusPage;