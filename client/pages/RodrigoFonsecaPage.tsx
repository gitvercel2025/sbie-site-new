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
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_globo_principal-laranja.png', 
      title: 'Participação na Globo',
      videoUrl: 'https://youtu.be/ym2AKmrYvLE',
      channel: 'Globo',
      logo: 'https://logodownload.org/wp-content/uploads/2013/12/globo-logo.png'
    },
    { 
      id: 'tv2', 
      thumbnail: 'https://brazil.mom-gmr.org/uploads/tx_lfrogmom/media/7013-1071_import.png', 
      title: 'Entrevista RecordTV',
      videoUrl: 'https://youtu.be/zwpga4QDm_M',
      channel: 'RecordTV',
      logo: 'https://logodownload.org/wp-content/uploads/2013/12/record-tv-logo.png'
    },
    { 
      id: 'tv3', 
      thumbnail: 'https://telaviva.com.br/wp-content/uploads/2018/11/GNT.jpg', 
      title: 'Programa GNT',
      videoUrl: 'https://player.vimeo.com/video/216529866',
      channel: 'GNT',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/GNT_logo-roxo.svg/1200px-GNT_logo-roxo.svg.png'
    },
    { 
      id: 'tv4', 
      thumbnail: 'https://cdn.mitvstatic.com/channels/br_bandeirantes_m.png', 
      title: 'Entrevista BAND',
      videoUrl: 'https://youtu.be/ohe-HaOR8pg',
      channel: 'BAND',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Rede_Bandeirantes_logo_2011.svg'
    },
    { 
      id: 'tv5', 
      thumbnail: 'https://upload.wikimedia.org/wikipedia/pt/8/89/Logotipo_da_RedeTV%21.png', 
      title: 'Programa RedeTV',
      videoUrl: 'https://youtu.be/t7zrHd04VHk',
      channel: 'RedeTV',
      logo: 'https://upload.wikimedia.org/wikipedia/pt/8/89/Logotipo_da_RedeTV%21.png'
    },
    { 
      id: 'tv6', 
      thumbnail: 'https://img.observatoriodatv.com.br/wp-content/uploads/2020/03/globonews.png', 
      title: 'Reportagem GloboNews',
      videoUrl: 'https://g1.globo.com/globonews/jornal-das-dez/video/na-venezuela-brasileiros-retidos-por-causa-do-coronavirus-aguardam-repatriacao-8479783.ghtml',
      channel: 'GloboNews',
      logo: 'https://upload.wikimedia.org/commons/8/89/Logotipo_da_GloboNews.png'
    }
  ];

  const newsArticles = [
    { 
      thumbnail: 'https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2018/04/Thumb_estad%C3%A3o.jpg.webp', 
      url: 'https://www.sbie.com.br/imprensa/rodrigo-fonseca-fala-sobre-importancia-dos-pais-e-da-escola-para-prevencao-do-suicidio/',
      source: 'O Estado de São Paulo',
      title: 'Inteligência Emocional na Prevenção'
    },
    { 
      thumbnail: 'https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2018/02/Thumb.png.webp', 
      url: 'https://www.sbie.com.br/imprensa/trt-rio-inteligencia-emocional-importancia-para-sua-vida/',
      source: 'TRT Rio',
      title: 'Importância da Inteligência Emocional'
    },
    { 
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERR_y8N6CjXsVjN75YAegc8EQ5tPb-50F6w&s', 
      url: 'https://www.sbie.com.br/imprensa/exame-8-habitos-diarios-para-aumentar-sua-inteligencia-emocional/',
      source: 'Exame.com',
      title: '8 Hábitos para Aumentar sua IE'
    },
    { 
      thumbnail: 'https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2017/04/capa-casais-casas-separadas.jpg.webp', 
      url: 'https://www.sbie.com.br/imprensa/casais-que-moram-casas-separadas/',
      source: 'Correio Brasiliense',
      title: 'Relacionamentos Modernos'
    },
    { 
      thumbnail: 'https://f.i.uol.com.br/hunting/folha/1/common/icons/logo-folha-tempo-real-app_144px.png', 
      url: 'https://www.sbie.com.br/imprensa/em-busca-do-emprego-dos-sonhos/',
      source: 'Folha de São Paulo',
      title: 'Em Busca do Emprego dos Sonhos'
    },
    { 
      thumbnail: 'https://vejasp.abril.com.br/wp-content/uploads/2025/02/logo-veja-sp-1.png', 
      url: 'https://www.sbie.com.br/imprensa/veja-grande-mentira/',
      source: 'Veja São Paulo',
      title: 'Artigo Especial Veja'
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
      <section className="relative py-12 md:py-20 px-4 overflow-hidden">
        {/* Background futurista preto do universo */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Estrelas animadas - reduzidas no mobile */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
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
          
          {/* Nebulosas e efeitos espaciais - responsivos */}
          <div className="absolute top-10 md:top-20 left-10 md:left-20 w-20 md:w-40 h-20 md:h-40 bg-purple-500/20 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 md:bottom-32 right-16 md:right-32 w-16 md:w-32 h-16 md:h-32 bg-blue-500/20 rounded-full blur-xl md:blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 md:w-24 h-12 md:h-24 bg-cyan-400/20 rounded-full blur-lg md:blur-xl animate-ping"></div>
          <div className="absolute bottom-10 md:bottom-20 left-1/3 w-18 md:w-36 h-18 md:h-36 bg-indigo-500/20 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
          
          {/* Galáxias espirais - responsivas */}
          <div className="absolute top-1/3 right-1/4 w-14 md:w-28 h-14 md:h-28 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-10 md:w-20 h-10 md:h-20 border border-cyan-400/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-sbie-dark-green/10 to-sbie-bronze/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10 px-2 md:px-4">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Título Principal - responsivo */}
            <div className="mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-sbie-bronze to-white bg-clip-text text-transparent mb-4 md:mb-6 tracking-wide md:tracking-wider px-2">
                ESSA É A MINHA HISTÓRIA
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-sbie-bronze via-white to-sbie-bronze bg-clip-text text-transparent tracking-wide">
                
              </h2>
            </div>

            {/* Vídeo Player Moderno Centralizado - melhor responsividade */}
            <div className="relative group w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <div className="relative bg-black/95 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-sbie-bronze/40 hover:border-sbie-bronze/60 transition-all duration-500">
                {!isVideoPlaying ? (
                  <div 
                    className="relative aspect-video bg-cover bg-center cursor-pointer" 
                    style={{ backgroundImage: 'url(https://i.imgur.com/dBT9Ltf.jpeg)', backgroundPosition: 'center 30%' }}
                    onClick={handleVideoPlay}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60 hover:from-black/40 hover:to-black/40 transition-all duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center h-full p-4">
                      <div className="text-center">
                        <div className="w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto hover:scale-110 transition-all duration-300 shadow-xl md:shadow-2xl border border-white/20">
                          <Play className="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 text-white ml-1" />
                        </div>
                        <div className="bg-black/50 backdrop-blur-sm rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 border border-sbie-bronze/30">
                          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">Assista Minha História</h3>
                          <p className="text-white/80 text-sm md:text-base lg:text-lg">Clique para reproduzir</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/zqNAjk6pRis?autoplay=1"
                    title="Essa é a Minha História - Rodrigo Fonseca"
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
            {/* Foto do Rodrigo ajustada para mostrar o rosto */}
            <div className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-sbie-bronze/20 hover:shadow-sbie-bronze/30 transition-all duration-500">
                <img 
                  src="https://i.imgur.com/dBT9Ltf.jpeg" 
                  alt="Rodrigo Fonseca" 
                  className="w-full h-auto rounded-2xl shadow-lg object-cover object-top"
                  style={{ aspectRatio: '4/5' }}
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

      {/* Imprensa e Televisão Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sbie-bronze/5 via-white to-sbie-dark-green/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sbie-dark-green to-sbie-bronze bg-clip-text text-transparent mb-4">
              IMPRENSA - TELEVISÃO
            </h2>
            <p className="text-sbie-dark-green/70 text-lg max-w-2xl mx-auto">
              Rodrigo Fonseca nos mais diferentes programas de TV do Brasil
            </p>
          </div>

          {/* Seção de Televisão */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-sbie-dark-green mb-8 text-center">
              <Tv className="inline-block w-6 h-6 mr-2" />
              Participações na TV
            </h3>
            <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {tvVideos.map((video, index) => (
                <div 
                  key={index} 
                  className="group relative cursor-pointer"
                  onClick={() => window.open(video.videoUrl, '_blank')}
                >
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-video shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    
                    {/* Caixa de Texto Moderna Simplificada */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 md:p-4 pt-6 md:pt-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 md:space-x-3">
                            <div className="bg-white/20 rounded-md md:rounded-lg p-1.5 md:p-2 backdrop-blur-sm">
                              <img 
                                src={video.logo} 
                                alt={`Logo ${video.channel}`}
                                className="w-4 h-3 md:w-5 lg:w-6 md:h-4 lg:h-5 object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-xs md:text-sm">{video.title}</h4>
                              <p className="text-white/80 text-xs">{video.channel}</p>
                            </div>
                          </div>
                          <div className="bg-white/30 rounded-full p-1.5 md:p-2 backdrop-blur-sm hover:bg-white/40 transition-colors">
                            <Play className="w-3 h-3 md:w-4 md:h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay de Play no Centro */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3 md:p-4 shadow-lg backdrop-blur-sm">
                        <Play className="w-6 h-6 md:w-8 md:h-8 text-sbie-dark-green" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Notícias */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-sbie-dark-green to-sbie-bronze p-3 rounded-full shadow-lg">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sbie-dark-green via-sbie-bronze to-sbie-dark-green bg-clip-text text-transparent mb-4">
                ARTIGOS E NOTÍCIAS
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-sbie-dark-green to-sbie-bronze mx-auto rounded-full"></div>
              <p className="text-sbie-dark-green/70 mt-4 text-lg font-medium">
                Acompanhe as principais publicações e entrevistas
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <div 
                  key={index} 
                  className="group relative cursor-pointer"
                  onClick={() => window.open(article.url, '_blank')}
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-video shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <img 
                      src={article.thumbnail} 
                      alt={article.source}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    
                    {/* Caixa de Texto Moderna para Notícias */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="bg-gradient-to-t from-sbie-dark-green/90 to-sbie-bronze/90 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold text-sm">{article.source}</span>
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="text-white font-bold text-sm leading-tight">{article.title}</h4>
                      </div>
                    </div>
                    
                    {/* Overlay de Link no Centro */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-4 shadow-lg backdrop-blur-sm">
                        <ExternalLink className="w-8 h-8 text-sbie-dark-green" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Caixa de texto moderna para mais informações */}
            <div className="relative mt-12">
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

      {/* Nova Seção: TREINAMENTOS PRESENCIAIS - Design Escuro Moderno */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-sbie-dark-green/20 to-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-sbie-bronze to-white bg-clip-text text-transparent mb-4">
              TREINAMENTOS PRESENCIAIS
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Transforme sua vida através dos nossos treinamentos exclusivos em Inteligência Emocional
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1: Lotus Inteligência Emocional */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <div className="text-center mb-6">
                  <img 
                    src="https://rodrigofonsecaie.com.br/wp-content/uploads/2023/01/logo-lotus.svg" 
                    alt="Lotus Inteligência Emocional" 
                    className="w-32 h-32 mx-auto mb-4 drop-shadow-lg filter brightness-110"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Lotus Inteligência Emocional
                  </h3>
                </div>
                
                <div className="flex-grow space-y-4 text-gray-300 leading-relaxed">
                  <p className="font-semibold text-sbie-bronze">
                    Descubra como mudar tudo aquilo que você já está cansado de saber na teoria, mas que na prática não faz!
                  </p>
                  
                  <p>
                    O Treinamento LOTUS Inteligência Emocional é a primeira etapa de uma experiência intensa e transformadora, desenvolvida pela Sociedade Brasileira de Inteligência Emocional – SBIE, que em 3 dias de imersão, o conduzirá a uma reflexão profunda sobre as suas emoções e o comportamento humano, e como somente você poderá alterá-los.
                  </p>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="/#trainings" 
                    className="block w-full bg-gradient-to-r from-sbie-bronze to-sbie-dark-green text-white font-bold py-4 px-6 rounded-2xl text-center hover:shadow-xl hover:shadow-sbie-bronze/20 transition-all duration-300 hover:scale-105"
                  >
                    CLIQUE AQUI E SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Lotus Legado */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-dark-green to-sbie-bronze rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <div className="text-center mb-6">
                  <img 
                    src="https://rodrigofonsecaie.com.br/wp-content/uploads/2023/01/logo-legado.svg" 
                    alt="Lotus Legado" 
                    className="w-32 h-32 mx-auto mb-4 drop-shadow-lg filter brightness-110"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Lotus Legado
                  </h3>
                </div>
                
                <div className="flex-grow space-y-4 text-gray-300 leading-relaxed">
                  <p className="font-semibold text-sbie-bronze">
                    Com técnicas e ferramentas avançadas de Inteligência Emocional, você terá a grande oportunidade de relembrar o seu Propósito de vida, e usar toda abundância e prosperidade que virá com o cumprimento dela, para construir o seu verdadeiro Legado!
                  </p>
                  
                  <p>
                    Agora que você descobriu que a sua felicidade depende apenas de você, chegou a hora de descobrir como construí-la através do seu Propósito de Vida, nessa última etapa do Treinamento LOTUS Inteligência Emocional.
                  </p>
                  
                  <p>
                    Quantas vezes você já se perguntou: "O que eu vim fazer nesse mundo? Será que tenho um propósito maior, além de comer, beber e dormir?", "O que eu vou deixar neste mundo, ou para as próximas gerações, quando partir?" Se você está no momento de ouvir (relembrar) essas respostas, venha viver uma experiência transformadora, capaz de despertar o seu verdadeiro potencial para realizar sua missão e construir o seu LEGADO!
                  </p>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="/#trainings" 
                    className="block w-full bg-gradient-to-r from-sbie-dark-green to-sbie-bronze text-white font-bold py-4 px-6 rounded-2xl text-center hover:shadow-xl hover:shadow-sbie-bronze/20 transition-all duration-300 hover:scale-105"
                  >
                    CLIQUE AQUI E SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Formação em Inteligência Emocional */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <div className="text-center mb-6">
                  <img 
                    src="https://rodrigofonsecaie.com.br/wp-content/uploads/2023/01/logo-formacao.svg" 
                    alt="Formação em Inteligência Emocional" 
                    className="w-32 h-32 mx-auto mb-4 drop-shadow-lg"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Formação em Inteligência Emocional
                  </h3>
                </div>
                
                <div className="flex-grow space-y-4 text-gray-300 leading-relaxed">
                  <p className="font-semibold text-sbie-bronze">
                    Se torne um Mentor em Inteligência Emocional e esteja preparado para as mudanças do futuro que já chegou!
                  </p>
                  
                  <p>
                    A Inteligência Emocional é a ferramenta mais eficaz para destravar o potencial que existe em cada ser humano, afinal, trabalha diretamente no cérebro límbico e com as emoções que geram pensamentos, sentimentos e comportamentos registrados em nosso mundo invisível.
                  </p>
                  
                  <p>
                    Ao aplicar as técnicas e ferramentas ensinadas na Formação em Inteligência Emocional, seus clientes poderão criar seus próprios Programas Emocionais e sentirão que estão no controle de suas vidas para alcançar seus sonhos e objetivos.
                  </p>
                  
                  <p>
                    Se você quer transformar a sua vida, ou deseja ingressar nessa nova Carreira, encontrará nessa Formação um grande potencial de transformação no âmbito pessoal, profissional, nos relacionamentos, no exercício da liderança, superação de desafios e muito mais!
                  </p>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="/#trainings" 
                    className="block w-full bg-gradient-to-r from-sbie-bronze to-sbie-dark-green text-white font-bold py-4 px-6 rounded-2xl text-center hover:shadow-xl hover:shadow-sbie-bronze/20 transition-all duration-300 hover:scale-105"
                  >
                    CLIQUE AQUI E SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Nova Seção: LIVROS */}
      <section className="py-20 px-4 bg-gradient-to-br from-sbie-dark-green/5 via-white to-sbie-bronze/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-sbie-dark-green to-sbie-bronze bg-clip-text text-transparent mb-4">
              LIVROS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagem dos Livros */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-dark-green rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:shadow-sbie-bronze/30 transition-all duration-500 hover:scale-105">
                <img 
                  src="https://rodrigofonsecaie.com.br/wp-content/uploads/2023/02/livros-min.png" 
                  alt="Os 4 Poderes das Emoções - Livros" 
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>

            {/* Conteúdo dos Livros */}
            <div className="space-y-6">
              <div className="space-y-4 text-sbie-dark-green/80 leading-relaxed text-lg">
                <p>
                  Em Os 4 Poderes das Emoções eu vou te ensinar de forma simples, acessível, fácil e, principalmente, PRÁTICA, com muitos exercícios, o passo a passo que você precisa aprender, dominar e desenvolver na sua vida, nos seus relacionamentos e na condução da sua família.
                </p>
                
                <p>
                  Reconhecer suas próprias emoções e desenvolvê-las além de ser um fator decisório para uma vida mais abundante e feliz, também está presente em outros aspectos como por exemplo, em empresas de grande porte é uma habilidade obrigatória.
                </p>
                
                <p className="font-semibold text-sbie-bronze">
                  A Inteligência Emocional é uma das habilidades mais valorizadas e necessárias nos últimos anos.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://rodrigofonsecaie.com.br/os4poderes/?utm_source=siterf&utm_medium=lp&utm_campaign=livros" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-sbie-dark-green to-sbie-bronze text-white font-bold py-4 px-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  CLIQUE AQUI E SAIBA MAIS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RodrigoFonsecaPage;