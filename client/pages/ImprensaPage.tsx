import React, { useState, useEffect, useRef } from 'react';
import { Search, Mail, Tv, Radio, Globe, Users, Calendar, FileText, ChevronRight, Play, ExternalLink, ArrowRight } from 'lucide-react';

const ImprensaPage = () => {
  const [activeSection, setActiveSection] = useState('eventos');
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [currentTrainingIndex, setCurrentTrainingIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Alternância automática dos banners de treinamento
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrainingIndex((prev) => (prev + 1) % trainingBanners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const sidebarSections = [
    { id: 'eventos', label: 'Eventos', icon: Calendar },
    { id: 'internet', label: 'Internet', icon: Globe },
    { id: 'midias-impressas', label: 'Mídias Impressas', icon: FileText },
    { id: 'personalidades', label: 'Personalidades', icon: Users },
    { id: 'radios', label: 'Rádios', icon: Radio },
    { id: 'televisao', label: 'Televisão', icon: Tv }
  ];

  const trainingBanners = [
    {
      id: 1,
      title: 'LOTUS Inteligência Emocional',
      description: 'Transforme sua vida em 3 dias intensivos',
      image: 'https://lp.sbie.com.br/wp-content/uploads/2022/05/lotus-banner.jpg',
      link: '/lotus'
    },
    {
      id: 2,
      title: 'Formação em IE',
      description: 'Torne-se um especialista certificado',
      image: 'https://lp.sbie.com.br/wp-content/uploads/2022/05/formacao-banner.jpg',
      link: '/formacao'
    }
  ];

  const articlesData = {
    eventos: [
      {
        id: 1,
        title: 'SBIE participa do maior congresso de psicologia do Brasil',
        excerpt: 'Rodrigo Fonseca apresenta metodologia inovadora em evento nacional...',
        image: 'https://www.sbie.com.br/wp-content/uploads/2023/01/congresso-psicologia.jpg',
        date: '15 de Janeiro, 2024',
        source: 'Congresso Nacional de Psicologia',
        link: '#'
      },
      {
        id: 2,
        title: 'Workshop de IE para empresas em São Paulo',
        excerpt: 'Mais de 500 executivos participaram do evento sobre inteligência emocional...',
        image: 'https://www.sbie.com.br/wp-content/uploads/2023/02/workshop-sp.jpg',
        date: '22 de Fevereiro, 2024',
        source: 'SBIE Eventos',
        link: '#'
      }
    ],
    internet: [
      {
        id: 1,
        title: 'Viral: Vídeo sobre ansiedade atinge 2 milhões de visualizações',
        excerpt: 'Conteúdo da SBIE sobre como lidar com ansiedade se torna viral nas redes...',
        image: 'https://www.sbie.com.br/wp-content/uploads/2023/03/viral-ansiedade.jpg',
        date: '10 de Março, 2024',
        source: 'YouTube SBIE',
        link: '#'
      },
      {
        id: 2,
        title: 'Podcast sobre relacionamentos supera 1 milhão de downloads',
        excerpt: 'Série especial sobre inteligência emocional nos relacionamentos...',
        image: 'https://www.sbie.com.br/wp-content/uploads/2023/04/podcast-relacionamentos.jpg',
        date: '18 de Abril, 2024',
        source: 'Spotify',
        link: '#'
      }
    ],
    'midias-impressas': [
      {
        id: 1,
        title: 'Folha de São Paulo destaca metodologia SBIE',
        excerpt: 'Jornal nacional publica matéria especial sobre inteligência emocional...',
        image: 'https://f.i.uol.com.br/hunting/folha/1/common/icons/logo-folha-tempo-real-app_144px.png',
        date: '05 de Maio, 2024',
        source: 'Folha de São Paulo',
        link: '#'
      },
      {
        id: 2,
        title: 'Revista Veja entrevista Rodrigo Fonseca',
        excerpt: 'Entrevista exclusiva sobre o futuro da inteligência emocional no Brasil...',
        image: 'https://vejasp.abril.com.br/wp-content/uploads/2025/02/logo-veja-sp-1.png',
        date: '12 de Junho, 2024',
        source: 'Revista Veja',
        link: '#'
      }
    ],
    personalidades: [
      {
        id: 1,
        title: 'Fafá de Belém elogia metodologia SBIE',
        excerpt: 'Cantora compartilha experiência transformadora com inteligência emocional...',
        image: 'https://lp.sbie.com.br/wp-content/uploads/2022/05/fafa.jpg',
        date: '20 de Julho, 2024',
        source: 'Instagram',
        link: '#'
      },
      {
        id: 2,
        title: 'Chris Flores recomenda LOTUS para seus seguidores',
        excerpt: 'Apresentadora de TV fala sobre transformação pessoal...',
        image: 'https://lp.sbie.com.br/wp-content/uploads/2022/05/cris.jpg',
        date: '28 de Agosto, 2024',
        source: 'Redes Sociais',
        link: '#'
      }
    ],
    radios: [
      {
        id: 1,
        title: 'Entrevista na Rádio Jovem Pan sobre depressão',
        excerpt: 'Rodrigo Fonseca fala sobre prevenção e tratamento da depressão...',
        image: 'https://www.sbie.com.br/wp-content/uploads/2023/05/jovem-pan.jpg',
        date: '15 de Setembro, 2024',
        source: 'Jovem Pan',
        link: '#'
      },
      {
        id: 2,
        title: 'Participação no programa Manhã Bandeirantes',
        excerpt: 'Discussão sobre inteligência emocional no ambiente de trabalho...',
        image: 'https://www.sbie.com.br/wp-content/uploads/2023/06/band-radio.jpg',
        date: '22 de Outubro, 2024',
        source: 'Rádio Bandeirantes',
        link: '#'
      }
    ],
    televisao: [
      {
        id: 1,
        title: 'Participação no Programa Mais Você com Ana Maria Braga',
        excerpt: 'Rodrigo Fonseca ensina técnicas de inteligência emocional no programa matinal...',
        image: 'https://lp.sbie.com.br/wp-content/uploads/2023/04/midia_01.jpg',
        date: '10 de Novembro, 2024',
        source: 'TV Globo',
        link: '#'
      },
      {
        id: 2,
        title: 'Entrevista no Jornal das Dez - GloboNews',
        excerpt: 'Análise sobre saúde mental durante a pandemia...',
        image: 'https://lp.sbie.com.br/wp-content/uploads/2023/04/midia_03.jpg',
        date: '18 de Dezembro, 2024',
        source: 'GloboNews',
        link: '#'
      }
    ]
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de newsletter
    console.log('Email cadastrado:', email);
    setEmail('');
    alert('Email cadastrado com sucesso!');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredArticles = articlesData[activeSection as keyof typeof articlesData]?.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-sbie-dark-green to-sbie-bronze py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            SBIE NA MÍDIA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Somos referência nacional nas mais diversas mídias e veículos jornalísticos! Acompanhe a gente!
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-sbie-bronze/10 to-sbie-dark-green/10 rounded-2xl p-8 border border-sbie-bronze/20">
            <div className="text-center mb-6">
              <Mail className="w-12 h-12 text-sbie-bronze mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-sbie-dark-green mb-2">
                Receba as Últimas Notícias
              </h2>
              <p className="text-sbie-dark-green/70">
                Cadastre-se e seja o primeiro a saber sobre nossas aparições na mídia
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sbie-bronze focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-sbie-bronze hover:bg-sbie-bronze/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Cadastrar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              {/* Navigation Sidebar */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-sbie-dark-green to-sbie-bronze p-4">
                  <h3 className="text-xl font-bold text-white text-center">MÍDIAS</h3>
                </div>
                <div className="p-2">
                  {sidebarSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          activeSection === section.id
                            ? 'bg-sbie-bronze text-white shadow-md'
                            : 'text-sbie-dark-green hover:bg-sbie-bronze/10 hover:text-sbie-bronze'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{section.label}</span>
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Advertisement Banner - EBOOK GRATUITO */}
              <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-bronze to-sbie-dark-green rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <a 
                  href="https://www.sbie.com.br/wp-content/uploads/2022/05/Ebook-Entenda-Profundamento-as-Emoc%CC%A7o%CC%83es-Humanas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group cursor-pointer"
                >
                  {/* Background Image */}
                  <div className="relative h-[600px] w-full">
                    <img
                      src="https://i.imgur.com/9jABeRk.jpeg"
                      alt="Ebook Inteligência Emocional"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      {/* Animated Title */}
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight animate-pulse">
                          <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-bounce">
                            EBOOK GRATUITO
                          </span>
                          <span className="block text-white mt-2 animate-fade-in-up">
                            INTELIGÊNCIA EMOCIONAL
                          </span>
                        </h3>
                        
                        <div className="relative">
                          <p className="text-lg md:text-xl font-semibold text-yellow-200 animate-slide-in-right">
                            ENTENDA PROFUNDAMENTE
                          </p>
                          <p className="text-lg md:text-xl font-semibold text-yellow-200 animate-slide-in-left">
                            AS RELAÇÕES HUMANAS
                          </p>
                        </div>
                        
                        {/* Call to Action */}
                        <div className="mt-6 animate-bounce-slow">
                          <div className="bg-gradient-to-r from-sbie-bronze to-yellow-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                            📚 BAIXAR AGORA GRÁTIS
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 animate-float">
                      <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        GRÁTIS
                      </div>
                    </div>
                    
                    {/* Sparkle Effects */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle"></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle-delay"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-twinkle-slow"></div>
                  </div>
                </a>
              </div>

              {/* Advertisement Banner */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center text-white">
                <h4 className="text-lg font-bold mb-2">Publicidade</h4>
                <div className="bg-gray-700 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-400">Banner 300x250</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-6">
            <div className="space-y-8">
              {sidebarSections.map((section) => (
                <div key={section.id} id={`section-${section.id}`} className="scroll-mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <section.icon className="w-8 h-8 text-sbie-bronze" />
                    <h2 className="text-3xl font-bold text-sbie-dark-green capitalize">
                      {section.label}
                    </h2>
                  </div>
                  
                  <div className="grid gap-6">
                    {articlesData[section.id as keyof typeof articlesData]?.map((article) => (
                      <article
                        key={article.id}
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="bg-sbie-bronze/10 text-sbie-bronze px-3 py-1 rounded-full text-sm font-medium">
                                {article.source}
                              </span>
                              <span className="text-gray-500 text-sm">{article.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-sbie-dark-green mb-3 line-clamp-2">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>
                            <a
                              href={article.link}
                              className="inline-flex items-center space-x-2 text-sbie-bronze hover:text-sbie-bronze/80 font-semibold transition-colors"
                            >
                              <span>Leia mais</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-sbie-dark-green mb-4">Pesquisar</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar notícias..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sbie-bronze focus:border-transparent"
                  />
                </div>
              </div>

              {/* Treinamentos SBIE */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-sbie-dark-green to-sbie-bronze p-4">
                  <h3 className="text-xl font-bold text-white text-center">Treinamentos SBIE</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-center">
                    Transforme sua vida com nossos cursos de Inteligência Emocional
                  </p>
                  
                  {/* Alternating Training Banners */}
                  <div className="space-y-4">
                    {trainingBanners.map((banner, index) => (
                      <div
                        key={banner.id}
                        className={`transition-all duration-500 ${
                          index === currentTrainingIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
                        }`}
                      >
                        <div className="bg-gradient-to-br from-sbie-bronze/10 to-sbie-dark-green/10 rounded-xl p-4 border border-sbie-bronze/20 hover:shadow-lg transition-all duration-300">
                          <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <h4 className="font-bold text-sbie-dark-green mb-2">{banner.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{banner.description}</p>
                          <a
                            href={banner.link}
                            className="inline-flex items-center space-x-2 bg-sbie-bronze text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sbie-bronze/80 transition-colors"
                          >
                            <span>Saiba mais</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {trainingBanners.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTrainingIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTrainingIndex ? 'bg-sbie-bronze' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprensaPage;