import React, { useState, useEffect, useRef } from 'react';
import { Play, Users, Target, Heart, Globe, Award, BookOpen, Lightbulb, ArrowRight, Star } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

const ConhecaSbiePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [counts, setCounts] = useState({ lives: 0, years: 0, countries: 0, companies: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
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

  // Efeito de contagem dos números
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const targets = { lives: 200, years: 26, countries: 50, companies: 1000 };
          
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
      { threshold: 0.5 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoPlay = (videoId: string) => {
    setActiveVideo(videoId);
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const missionCards = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "MISSÃO",
      description: "Auxiliar empresas, empreendedores e seres humanos para esta nova realidade, gerando resultados exponenciais na vida de cada um de nós."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "VISÃO",
      description: "Se tornar uma comunidade global de educação e inovação humana, que valoriza as emoções para preparar o ser humano do futuro."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "VALORES",
      description: "Amor incondicional, Verdade. Aperfeiçoamento constante. Excelência sempre, amor e energia. Simplicidade. Compaixão. Trabalhar com Amor!"
    }
  ];

  const achievements = [
    { number: counts.lives, label: "Vidas Transformadas", suffix: "k+" },
    { number: counts.years, label: "Anos de Experiência", suffix: "+" },
    { number: counts.countries, label: "Países Alcançados", suffix: "+" },
    { number: counts.companies, label: "Empresas Atendidas", suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sbie-dark-green via-sbie-forest-green to-sbie-dark-green">
      {/* Hero Section - ATENÇÃO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_100%,#889073,transparent)] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-sbie-bronze/20 px-6 py-3 rounded-full mb-6">
              <Star className="w-5 h-5 text-sbie-beige" />
              <span className="text-sbie-beige font-semibold text-lg">Conheça a SBIE</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Referência Nacional em
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sbie-bronze to-sbie-beige">
                Inteligência Emocional
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-sbie-beige/90 max-w-4xl mx-auto leading-relaxed">
              Através de suas Imersões, Formações, Treinamentos, Palestras e Cursos Presenciais e Online, 
              a SBIE já transformou mais de 200 mil vidas nos últimos 26 anos – e continuará ainda mais neste Novo Mundo com IA!
            </p>
          </div>

          {/* Video Principal */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group cursor-pointer bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300 hover:scale-105">
              <BorderBeam
                size={100}
                duration={12}
                delay={0}
                colorFrom="#B66D38"
                colorTo="#D4A574"
                borderWidth={2}
              />
              
              <div className="relative aspect-video">
                <img
                  src="https://img.youtube.com/vi/egDzINWDt_Q/maxresdefault.jpg"
                  alt="Conheça a SBIE"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                  <button
                    onClick={() => handleVideoPlay('egDzINWDt_Q')}
                    className="w-24 h-24 bg-sbie-bronze hover:bg-sbie-bronze/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números de Impacto com Efeito de Contagem - INTERESSE */}
      <section ref={countersRef} className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-black text-sbie-bronze mb-2">
                    {achievement.number.toLocaleString()}{achievement.suffix}
                  </div>
                  <div className="text-sbie-beige font-medium text-sm md:text-base">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História - INTERESSE */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                SBIE, o link para seu
                <span className="block text-sbie-bronze">Futuro!</span>
              </h2>
              
              <div className="space-y-6 text-sbie-beige/90 text-lg leading-relaxed">
                <p>
                  Vivemos tempos de transições e grandes mudanças em todo o mundo. As habilidades que se criaram pelo Departamento 
                  de Recursos Humanos das empresas, hoje não são mais suficientes para o novo mundo que se apresenta.
                </p>
                
                <p>
                  Habilidades necessárias para a era experimental da comunicação digital e Inteligência que estamos hoje. 
                  Capacidades que vão além da técnica, do racional, mas que se conectam com nossa essência humana emocional.
                </p>
                
                <p>
                  É aí que entra a SBIE - Sociedade Brasileira de Inteligência Emocional, uma organização que há mais de 26 anos 
                  desenvolve e promove as mais diversas áreas que são os requisitos, um grau de Habilidades Humanas 
                  necessárias para o novo mundo.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/formulario"
                  className="inline-flex items-center space-x-2 bg-sbie-bronze hover:bg-sbie-bronze/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/formulario';
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-sbie-bronze/20">
                <img
                  src="https://i.imgur.com/6IsfE9I.jpeg"
                  alt="SBIE - Seu futuro"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - DESEJO */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Nossos
              <span className="text-sbie-bronze"> Pilares</span>
            </h2>
            <p className="text-xl text-sbie-beige/90 max-w-3xl mx-auto">
              Os valores que nos guiam na transformação de vidas através da Inteligência Emocional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {missionCards.map((card, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300 hover:scale-105 h-full relative">
                  <BorderBeam
                    size={60}
                    duration={15}
                    delay={index * 2}
                    colorFrom="#B66D38"
                    colorTo="#D4A574"
                    borderWidth={1}
                  />
                  
                  <div className="text-sbie-bronze mb-6">
                    {card.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {card.title}
                  </h3>
                  
                  <p className="text-sbie-beige/90 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia - DESEJO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Nossa
              <span className="text-sbie-bronze"> Metodologia</span>
            </h2>
            <p className="text-xl text-sbie-beige/90 max-w-3xl mx-auto">
              Desenvolvemos uma abordagem única que combina ciência, prática e transformação real
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sbie-bronze rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fundamentação Científica</h3>
                  <p className="text-sbie-beige/90">Baseada em neurociência e psicologia positiva para resultados comprovados.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sbie-bronze rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Aplicação Prática</h3>
                  <p className="text-sbie-beige/90">Ferramentas e técnicas que podem ser aplicadas imediatamente no dia a dia.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sbie-bronze rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Resultados Mensuráveis</h3>
                  <p className="text-sbie-beige/90">Acompanhamento e métricas para garantir a evolução contínua.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-3xl p-8 border border-sbie-bronze/30">
                <img
                  src="https://grupoalliance.com.br/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-16.22.35-2.jpeg"
                  alt="Nossa Metodologia"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Transformação Coletiva</h3>
                  <p className="text-sbie-beige/90">
                    Somos parceiros da Sociedade Internacional de Inteligência Emocional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - AÇÃO */}
      <section className="py-20 bg-gradient-to-r from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pronto para
            <span className="text-sbie-bronze"> Transformar</span>
            <br />sua Vida?
          </h2>
          
          <p className="text-xl text-sbie-beige/90 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 200 mil pessoas que já descobriram o poder da Inteligência Emocional na prática!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511940069695" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-sbie-bronze hover:bg-sbie-bronze/80 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-sbie-bronze hover:border-sbie-bronze/80"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="/#treinamentos"
              className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm border-2 border-sbie-bronze text-white hover:bg-sbie-bronze hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>Nossos Cursos</span>
            </a>
          </div>
        </div>
      </section>

      {/* Efeito Globo */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Impacto
            <span className="text-sbie-bronze"> Global</span>
          </h2>
          
          <p className="text-xl text-sbie-beige/90 mb-12 max-w-3xl mx-auto">
            Nossa missão transcende fronteiras, levando a Inteligência Emocional para todo o mundo
          </p>
        </div>
        
        {/* Imagem do Globo com Efeito de Zoom */}
        <div ref={globeRef} className="relative flex items-center justify-center">
          <div className="relative w-90 h-90 mx-auto group">
            <img 
              src="http://emotionalintelligencesociety.org/wp-content/uploads/2022/11/isei-logo-m1.png" 
              alt="Impacto Global SBIE" 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConhecaSbiePage;