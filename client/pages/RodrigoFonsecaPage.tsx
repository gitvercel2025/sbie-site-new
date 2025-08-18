import React, { useState, useEffect, useRef } from 'react';
import { Play, Instagram, Linkedin, Youtube, Facebook, Globe, Award, BookOpen, Users, Target, Heart, ExternalLink, Tv, Newspaper } from 'lucide-react';

const RodrigoFonsecaPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [counts, setCounts] = useState({ instagram: 0, facebook: 0, linkedin: 0, youtube: 0, tiktok: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Efeito de contagem dos números das redes sociais
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const targets = { instagram: 122, facebook: 159, linkedin: 87, youtube: 95, tiktok: 79 };
          
          Object.keys(targets).forEach((key) => {
            const target = targets[key as keyof typeof targets];
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleMediaVideoPlay = (videoId: string) => {
    setActiveVideo(videoId);
  };

  // Componente do ícone TikTok original
  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 0 1-3.14 3.78 3.87 3.87 0 0 1-4.08-2.87 3.87 3.87 0 0 1 2.87-4.08A3.87 3.87 0 0 1 12.5 6.69a4.83 4.83 0 0 1 3.77-4.25V2h2.08v5.73a3.87 3.87 0 0 1 3.14 3.78 3.87 3.87 0 0 1-4.08 2.87 3.87 3.87 0 0 1-2.87-4.08 3.87 3.87 0 0 1 4.08-2.87z"/>
    </svg>
  );

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500', bgColor: 'from-pink-500 to-purple-600', count: counts.instagram },
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-700', bgColor: 'from-blue-600 to-blue-800', count: counts.facebook },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600', bgColor: 'from-blue-500 to-cyan-600', count: counts.linkedin },
    { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:text-red-500', bgColor: 'from-red-500 to-red-700', count: counts.youtube },
    { icon: TikTokIcon, label: 'TikTok', href: '#', color: 'hover:text-white', bgColor: 'from-gray-800 to-black', count: counts.tiktok }
  ];

  const tvVideos = [
    { 
      id: 'tv1', 
      thumbnail: 'https://images.seeklogo.com/logo-png/39/2/globo-logo-png_seeklogo-398350.png', 
      videoUrl: 'https://youtu.be/ym2AKmrYvLE',
      channel: 'Globo'
    },
    { 
      id: 'tv2', 
      thumbnail: 'https://logodownload.org/wp-content/uploads/2013/12/record-tv-logo.png', 
      videoUrl: 'https://youtu.be/zwpga4QDm_M',
      channel: 'RecordTV'
    },
    { 
      id: 'tv3', 
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/GNT_logo-roxo.svg/1200px-GNT_logo-roxo.svg.png', 
      videoUrl: 'https://youtu.be/mAcQ877ePfA',
      channel: 'GNT'
    },
    { 
      id: 'tv4', 
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Rede_Bandeirantes_logo_2011.svg', 
      videoUrl: 'https://youtu.be/ohe-HaOR8pg',
      channel: 'BAND'
    },
    { 
      id: 'tv5', 
      thumbnail: 'https://upload.wikimedia.org/wikipedia/pt/8/89/Logotipo_da_RedeTV%21.png', 
      videoUrl: 'https://youtu.be/t7zrHd04VHk',
      channel: 'RedeTV'
    },
    { 
      id: 'tv6', 
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Logotipo_da_GloboNews.png', 
      videoUrl: 'https://g1.globo.com/globonews/jornal-das-dez/video/na-venezuela-brasileiros-retidos-por-causa-do-coronavirus-aguardam-repatriacao-8479783.ghtml',
      channel: 'GloboNews'
    }
  ];

  const newsArticles = [
    { 
      thumbnail: 'https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2018/04/Thumb_estad%C3%A3o.jpg.webp', 
      url: 'https://www.sbie.com.br/imprensa/rodrigo-fonseca-fala-sobre-importancia-dos-pais-e-da-escola-para-prevencao-do-suicidio/',
      source: 'O Estado de São Paulo'
    },
    { 
      thumbnail: 'https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2018/02/Thumb.png.webp', 
      url: 'https://www.sbie.com.br/imprensa/trt-rio-inteligencia-emocional-importancia-para-sua-vida/',
      source: 'TRT Rio'
    },
    { 
      thumbnail: 'https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2018/01/exame-thumb.jpg.webp', 
      url: 'https://www.sbie.com.br/imprensa/exame-8-habitos-diarios-para-aumentar-sua-inteligencia-emocional/',
      source: 'Exame.com'
    },
    { 
      thumbnail: 'https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2017/04/capa-casais-casas-separadas.jpg.webp', 
      url: 'https://www.sbie.com.br/imprensa/casais-que-moram-casas-separadas/',
      source: 'Correio Brasiliense'
    },
    { 
      thumbnail: 'https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2016/03/jornal-folha-de-sao-paulo.jpg.webp', 
      url: 'https://www.sbie.com.br/imprensa/em-busca-do-emprego-dos-sonhos/',
      source: 'Folha de São Paulo'
    },
    { 
      thumbnail: 'https://storage.builderall.com//franquias/2/7263021/editor-html/11769343.webp', 
      url: 'https://www.sbie.com.br/imprensa/veja-grande-mentira/',
      source: 'Veja São Paulo'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sbie-beige via-white to-sbie-sage/20">
      {/* Título da Página */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-sbie-dark-green via-sbie-bronze to-sbie-dark-green bg-clip-text text-transparent mb-4">
            RODRIGO FONSECA
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-sbie-bronze">
            Presidente e Fundador da SBIE
          </h2>
        </div>
      </section>

      {/* Hero Section com background futurista preto do universo */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background futurista preto do universo */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Estrelas animadas */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          {/* Nebulosas e efeitos espaciais */}
          <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-ping"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Galáxias espirais */}
          <div className="absolute top-1/3 right-1/4 w-28 h-28 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-20 h-20 border border-cyan-400/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-sbie-dark-green/10 to-sbie-bronze/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Logo com moldura moderna e imagem de fundo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-sbie-bronze/20 shadow-2xl hover:shadow-sbie-bronze/20 transition-all duration-500 hover:scale-105 overflow-hidden">
                {/* Imagem de fundo ESCURA */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-all duration-500"
                  style={{ backgroundImage: 'url(https://i.imgur.com/dBT9Ltf.jpeg)' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-sbie-bronze/20 to-sbie-dark-green/20 rounded-3xl"></div>
                <img 
                  src="https://rodrigofonsecaie.com.br/wp-content/uploads/2024/09/logo-rodrigo-sem-fundo.png" 
                  alt="Rodrigo Fonseca Logo" 
                  className="w-full h-auto relative z-10 drop-shadow-lg"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-sbie-bronze via-sbie-dark-green to-sbie-bronze rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Vídeo Player com thumbnail personalizada */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-dark-green to-sbie-bronze rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-black/90 rounded-2xl overflow-hidden shadow-2xl border border-sbie-bronze/30">
                {!isVideoPlaying ? (
                  <div 
                    className="relative aspect-video bg-cover bg-center cursor-pointer" 
                    style={{ backgroundImage: 'url(https://i.imgur.com/9a9VMCS.jpg)' }}
                    onClick={handleVideoPlay}
                  >
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg">
                          <Play className="w-8 h-8 text-sbie-dark-green ml-1" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Minha História!!!</h3>
                        <p className="text-white/80">Clique para assistir</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/zqNAjk6pRis?autoplay=1"
                    title="Minha História - Rodrigo Fonseca"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biografia Section */}
      <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-r from-white to-sbie-beige/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Foto do Rodrigo */}
            <div className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-sbie-bronze/20 hover:shadow-sbie-bronze/30 transition-all duration-500">
                <img 
                  src="https://i.imgur.com/omP96V6.jpg" 
                  alt="Rodrigo Fonseca" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sbie-dark-green/10 to-transparent rounded-3xl"></div>
              </div>
            </div>

            {/* Texto da Biografia */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-sbie-bronze/20 hover:shadow-2xl transition-all duration-500">
                <div className="space-y-4 text-sbie-dark-green/90 leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-sbie-bronze mt-1 flex-shrink-0" />
                    <p><strong>Comunicação Social</strong> pela Universidade de São Paulo - USP.</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-sbie-bronze mt-1 flex-shrink-0" />
                    <p><strong>Mestrado em Neuromarketing</strong> pela Florida Christian University.</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-sbie-bronze mt-1 flex-shrink-0" />
                    <p><strong>Membro</strong> da International Society for Emotional Intelligence.</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-sbie-bronze mt-1 flex-shrink-0" />
                    <p><strong>Idealizador</strong> da Metodologia LOTUS Inteligência Emocional.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sbie-dark-green/5 to-sbie-bronze/5 rounded-2xl p-8 border border-sbie-bronze/20">
                <div className="space-y-4 text-sbie-dark-green/90 leading-relaxed">
                  <p><strong>Criador da primeira Formação e Master em Inteligência Emocional do Brasil.</strong> Mais de 25 anos de experiência em Inteligência Emocional, com Treinamentos presenciais para mais de 100 mil pessoas.</p>
                  
                  <p>Eventos para mais de 200.000 pessoas nas principais Empresas do Brasil e fora também. <strong>Mentor Emocional dos maiores Líderes e Influencers do País.</strong></p>
                  
                  <p><strong>Professor Convidado da FGV</strong> no MBA de C-Levels.</p>
                  
                  <p><strong>Conselheiro no Instituto Êxito de Empreendedorismo</strong>, onde mentora os maiores Empresários do Brasil.</p>
                  
                  <p>Já participou dos principais Programas de Entrevistas da mídia brasileira. <strong>Criador do Projeto SBIE Academy</strong> - Inteligência Emocional nas Escolas Criador do maior Evento de Inteligência Emocional da América Latina: Conexão.</p>
                  
                  <p><strong>Fundador da primeira Academia Emocional Online.</strong></p>
                  
                  <p><strong>Autor de 4 Best Sellers</strong> sobre Inteligência Emocional: "Emoções, A Inteligência Emocional na Prática!", "Missão, Como viver uma Vida de Propósito", "Inteligência Emocional para Pais" e "Riqueza Emocional".</p>
                  
                  <p><strong>Responsável pelo Canal do Youtube</strong> com maior conteúdo sobre Inteligência Emocional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociais e Mídia Section - APENAS CONTADORES */}
      <section className="py-20 px-4 bg-gradient-to-br from-sbie-dark-green/5 via-white to-sbie-bronze/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sbie-dark-green to-sbie-bronze bg-clip-text text-transparent mb-4">
              Rodrigo - Redes Sociais e Mídia
            </h2>
            <p className="text-sbie-dark-green/70 text-lg max-w-2xl mx-auto">
              Conecte-se com Rodrigo Fonseca nas principais plataformas digitais
            </p>
          </div>

          {/* Imagens com efeitos de transição */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green opacity-0 group-hover:opacity-20 transition-all duration-500 z-10"></div>
              <img 
                src="https://rodrigofonsecaie.com.br/wp-content/uploads/2023/01/mockup-min.png" 
                alt="Rodrigo Fonseca Mídia 1" 
                className="w-full h-auto transform group-hover:scale-105 transition-all duration-700 shadow-xl rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-l from-sbie-dark-green to-sbie-bronze opacity-0 group-hover:opacity-20 transition-all duration-500 z-10"></div>
              <img 
                src="https://rodrigofonsecaie.com.br/wp-content/uploads/2023/01/mockup-min.png" 
                alt="Rodrigo Fonseca Mídia 2" 
                className="w-full h-auto transform group-hover:scale-105 transition-all duration-700 shadow-xl rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>

          {/* Contadores das Redes Sociais */}
          <div ref={countersRef} className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.bgColor} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500`}></div>
                  <div className={`relative bg-gradient-to-r ${social.bgColor} rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-white`}>
                    <div className="text-center">
                      <IconComponent className="w-8 h-8 mx-auto mb-3 transition-all duration-300" />
                      <div className="text-3xl font-bold mb-1">
                        +{social.count}k
                      </div>
                      <p className="text-sm font-semibold opacity-90">
                        Seguidores no {social.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nova Seção: Imprensa e Televisão */}
      <section className="py-20 px-4 bg-gradient-to-r from-sbie-beige/30 to-white">
        <div className="container mx-auto max-w-7xl">
          {/* IMPRENSA - TELEVISÃO */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Tv className="w-8 h-8 text-sbie-bronze mr-3" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-sbie-dark-green to-sbie-bronze bg-clip-text text-transparent">
                  IMPRENSA - TELEVISÃO
                </h2>
              </div>
              <p className="text-sbie-dark-green/70 text-lg max-w-2xl mx-auto">
                Rodrigo Fonseca nos mais diferentes programas de TV do Brasil
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tvVideos.map((video, index) => {
                const videoId = video.videoUrl.includes('youtu') ? video.videoUrl.split('/').pop()?.split('?')[0] : null;
                return (
                  <div key={video.id} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-sbie-bronze/30">
                      {activeVideo !== video.id ? (
                        <div className="relative aspect-video cursor-pointer bg-white flex items-center justify-center p-8">
                          <img 
                            src={video.thumbnail} 
                            alt={`${video.channel} Logo`}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://via.placeholder.com/640x360/1a5f3f/ffffff?text=Video+Thumbnail';
                            }}
                            onClick={() => handleMediaVideoPlay(video.id)}
                          />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-sbie-dark-green/90 rounded-full flex items-center justify-center hover:bg-sbie-dark-green transition-all duration-300 hover:scale-110 shadow-lg">
                              <Play className="w-6 h-6 text-white ml-1" />
                            </div>
                          </div>
                          {/* Caixa de texto moderna */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-sbie-dark-green to-sbie-bronze p-3">
                            <p className="text-white font-semibold text-center text-sm">
                              {video.channel}
                            </p>
                          </div>
                        </div>
                      ) : (
                        videoId ? (
                          <iframe
                            className="w-full aspect-video"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title={`${video.channel} Interview`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <div className="aspect-video bg-sbie-dark-green/10 flex items-center justify-center">
                            <a 
                              href={video.videoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-sbie-dark-green hover:text-sbie-bronze transition-colors"
                            >
                              <ExternalLink className="w-6 h-6" />
                              <span>Assistir no site</span>
                            </a>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMPRENSA - NOTÍCIAS */}
          <div>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Newspaper className="w-8 h-8 text-sbie-bronze mr-3" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-sbie-dark-green to-sbie-bronze bg-clip-text text-transparent">
                  IMPRENSA - NOTÍCIAS
                </h2>
              </div>
              <p className="text-sbie-dark-green/70 text-lg max-w-2xl mx-auto">
                Rodrigo Fonseca nos mais diferentes veículos de comunicação espalhados pelo Brasil
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {newsArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-xl border border-sbie-bronze/20 hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                  <div className="relative aspect-video bg-white flex items-center justify-center p-4">
                    <img 
                      src={article.thumbnail} 
                      alt={article.source} 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/400x200/1a5f3f/ffffff?text=News+Article';
                      }}
                    />
                  </div>
                  {/* Caixa de texto moderna */}
                  <div className="bg-gradient-to-r from-sbie-dark-green to-sbie-bronze p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold text-sm">{article.source}</span>
                      <ExternalLink className="w-4 h-4 text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Caixa de texto moderna para mais informações */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-r from-sbie-dark-green to-sbie-bronze rounded-2xl p-8 text-center">
                <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                <p className="relative z-10 text-white text-lg font-semibold">
                  Saiba mais em <span className="underline hover:no-underline transition-all duration-300">www.sbie.com.br/imprensa</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RodrigoFonsecaPage;