import React from 'react';
import { Globe, Heart, Target, Users, Award, BookOpen, Brain, Zap, ArrowRight, Star } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

const MetodologiaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sbie-dark-green via-sbie-forest-green to-sbie-menu-green relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200%,#889073,transparent)]"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-sbie-bronze/10 rounded-full animate-cyber-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-sbie-sage/10 rounded-full animate-energy-wave"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-sbie-beige/10 rounded-full animate-neon-glow"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-sbie-bronze/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-sbie-bronze/30">
            <Star className="w-5 h-5 text-sbie-beige" />
            <span className="text-sbie-beige font-semibold text-lg">Nossa Metodologia</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            NOSSA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sbie-bronze to-sbie-beige animate-neon-glow">
              METODOLOGIA
            </span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-sbie-bronze via-sbie-beige to-sbie-bronze mx-auto mb-8 animate-cyber-pulse"></div>
        </div>
      </section>

      {/* Main Statement */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-300 group">
            <BorderBeam
              size={100}
              duration={12}
              delay={0}
              colorFrom="#B66D38"
              colorTo="#DFC6AA"
              borderWidth={2}
            />
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                A SBIE aplica na prática a Inteligência Emocional,
                <span className="block text-sbie-bronze">sendo o link entre o conhecimento e AÇÃO!</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6 relative z-10">
          {/* Section 1 */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-sbie-beige/90 leading-relaxed">
                  A vida é cheia de desafios diários: metas, prazos, reuniões, família, filhos, relacionamentos, saúde e inúmeras decisões a serem tomadas. Em qualquer âmbito da vida, as pessoas estão sendo observadas, avaliadas e cobradas o tempo todo, o que faz com que todos vivam em uma pressão constante. Além de tudo isso, precisamos nos adaptar ao "novo normal", com as mudanças cada mais frequentes e rápidas em todas as áreas da nossa vida.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-sbie-sage/20 hover:border-sbie-sage/40 transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-r from-sbie-sage to-sbie-bronze rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-sbie-beige/90 leading-relaxed">
                  O equilíbrio emocional é fundamental para conseguir se flexibilizar para viver uma vida bem-sucedida, saudável e feliz. Por meio do desenvolvimento da Inteligência Emocional na prática, as pessoas podem tirar melhor proveito do que o mundo oferece, conquistando um sentimento de plenitude em relação à vida e o seu papel nela.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-sbie-beige/20 hover:border-sbie-beige/40 transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-r from-sbie-beige to-sbie-sage rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 text-sbie-dark-green" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-sbie-beige/90 leading-relaxed">
                  A Inteligência Emocional é uma somatória de habilidades que tornam as pessoas capazes de administrar as pequenas e grandes adversidades que a vida impõe, de modo a perceber e aceitar as emoções, direcionando-as para obter melhores resultados e relacionamentos para si e para todos ao redor.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-r from-sbie-bronze to-sbie-menu-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-sbie-beige/90 leading-relaxed">
                  Quando as pessoas têm a oportunidade de conhecer suas emoções, se tornam mais compreensivas consigo mesmas e com os outros. Como consequência, se tornam pessoas mais felizes e capazes de contribuir com a felicidade das pessoas, já que a competência emocional ajuda a enxergar e compreender a forma como as emoções potencializam ou limitam a construção de uma vida realizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Por que não temos controle?</h3>
              </div>
            </div>
            
            <div className="space-y-4 text-sbie-beige/90 text-lg leading-relaxed">
              <p>
                Racionalmente, ninguém escolheria ser ansioso, falido, depressivo, explosivo ou machucar alguém que ama — mas muitas pessoas fazem isso constantemente em suas vidas. Se essas reações não são escolhidas racionalmente, por que não temos controle sobre elas? E continuamos repetindo dia após dia?
              </p>
              <p>
                De modo geral, isso acontece porque o cérebro límbico (emocional) é muito mais rápido que o cérebro racional – <span className="text-sbie-bronze font-bold">1 milhão de vezes mais rápido!</span> Enquanto as emoções levam o ser humano à ação, a razão continua apenas pensando e analisando, enquanto tudo está mudando freneticamente. Quantas coisas em sua vida pessoal ou profissional você quer mudar, sabe o que fazer na teoria, mas na prática, continua repetindo as mesmas experiências?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative bg-gradient-to-br from-sbie-bronze/20 to-sbie-beige/20 backdrop-blur-sm rounded-2xl p-8 border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">A Solução da SBIE</h3>
              </div>
            </div>
            
            <div className="space-y-4 text-sbie-beige/90 text-lg leading-relaxed mb-6">
              <p>
                Foi pensando nisso que, durante seus 24 anos de experiência na área, o fundador e presidente da SBIE, <span className="text-sbie-bronze font-bold">Rodrigo Fonseca</span>, desenvolveu seus Treinamentos, Palestras e Cursos Presenciais e Online: são experiências transformadoras, onde você tem acesso à ferramentas práticas de Inteligência Emocional, reprogramando gatilhos emocionais e padrões limitantes, registrados em nosso cérebro emocional em um momento de nossas vidas que tínhamos pouca, ou nenhuma consciência, que chamamos de <span className="text-sbie-bronze font-bold">Período Original</span> – da concepção aos nossos 7 anos.
              </p>
              <p>
                Neste período somos verdadeiras "esponjas", interpretando tudo o que estamos vivendo, ou seja, nos programando para uma vida adulta difícil e doente, ou saudável, próspera e feliz!
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-sbie-bronze/30">
              <p className="text-xl md:text-2xl font-bold text-white text-center">
                E aí, que tipo de vida VOCÊ quer viver? Quanto tempo você tem?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-300 group">
            <BorderBeam
              size={80}
              duration={15}
              delay={2}
              colorFrom="#B66D38"
              colorTo="#DFC6AA"
              borderWidth={1}
            />
            
            <div className="flex flex-col items-center">
              <img 
                src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2019/05/globo_ie_internacional.png.webp" 
                alt="Selo Sociedade Internacional de Inteligência Emocional" 
                className="w-32 h-32 object-contain mb-6 group-hover:scale-110 transition-transform duration-300"
              />
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-sbie-bronze/30 group-hover:bg-white group-hover:shadow-2xl transition-all duration-300">
                <p className="text-xl md:text-2xl font-bold text-sbie-dark-green group-hover:text-sbie-menu-green transition-colors duration-300">
                  Somos parceiros da
                  <span className="block text-sbie-bronze group-hover:text-sbie-bronze/90 transition-colors duration-300">Sociedade Internacional de Inteligência Emocional!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative bg-gradient-to-br from-sbie-dark-green to-sbie-menu-green rounded-3xl p-8 text-center border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-300 group overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-sbie-bronze animate-cyber-pulse"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-sbie-bronze animate-cyber-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-sbie-bronze animate-cyber-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-sbie-bronze animate-cyber-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="absolute -top-6 -left-6 text-6xl text-sbie-bronze/50 font-bold">"</div>
              <div className="absolute -bottom-6 -right-6 text-6xl text-sbie-bronze/50 font-bold">"</div>
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 relative z-10 leading-tight">
                A única diferença entre o
                <span className="block text-sbie-bronze">medo e a coragem</span>
                é a ação!
              </blockquote>
              
              <cite className="text-lg text-sbie-beige font-medium">
                — Rodrigo Fonseca
              </cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetodologiaPage;