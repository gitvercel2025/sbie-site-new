import { useEffect, useState, useRef } from "react";
import { Award, BookOpen, Users, Trophy, Star, GraduationCap } from "lucide-react";

interface AchievementItemProps {
  icon: React.ReactNode;
  text: string;
  index: number;
}

const AchievementItem = ({ icon, text, index }: AchievementItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`flex items-start space-x-4 transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-sbie-bronze to-sbie-bronze/70 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <p className="text-sbie-forest-green text-lg leading-relaxed pt-2">
        {text}
      </p>
    </div>
  );
};

export const AboutRodrigo = () => {
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

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      text: "Idealizador do Treinamento LOTUS Inteligência Emocional"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      text: "Criador da primeira Formação em Inteligência Emocional do Brasil"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Fundador da primeira Academia Emocional Online"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Criador do maior evento de IE da América Latina: Conexão!"
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "Maior influenciador digital em Inteligência Emocional"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-sbie-beige/20 via-white to-sbie-sage/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-200px,#21302B,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Photo */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-sbie-bronze/20 to-sbie-sage/20 rounded-3xl transform rotate-3"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-sbie-sage/20 to-sbie-bronze/20 rounded-3xl transform -rotate-3"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20">
                <div className="aspect-[4/5] bg-gradient-to-br from-sbie-beige to-sbie-sage/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for Rodrigo's photo */}
                  <div className="text-center text-sbie-dark-green/60">
                    <div className="w-40 h-40 bg-sbie-bronze/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-20 h-20 text-sbie-bronze" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-2xl font-bold">Rodrigo Fonseca</p>
                    <p className="text-lg opacity-75">Fundador e Presidente</p>
                  </div>
                  
                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-sbie-bronze/20"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-16 -right-6 w-12 h-12 bg-sbie-bronze/20 rounded-full animate-float blur-sm"></div>
              <div className="absolute -bottom-4 -left-6 w-8 h-8 bg-sbie-sage/30 rounded-full animate-float delay-1000 blur-sm"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-sbie-bronze/10 px-6 py-3 rounded-full">
                <Award className="w-5 h-5 text-sbie-bronze" />
                <span className="text-sbie-bronze font-semibold">Sobre o Fundador</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-sbie-dark-green">
                Rodrigo{" "}
                <span className="text-sbie-bronze relative">
                  Fonseca
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/30 rounded-full"></div>
                </span>
              </h2>

              <p className="text-xl text-sbie-forest-green font-semibold">
                Presidente da Sociedade Brasileira de Inteligência Emocional
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg text-sbie-forest-green leading-relaxed">
              <p>
                Rodrigo Fonseca possui mais de <strong className="text-sbie-bronze">26 anos de carreira</strong> como Mentor emocional 
                e já transformou a vida de mais de <strong className="text-sbie-bronze">200 mil pessoas</strong> com a Inteligência Emocional, 
                dentre elas Juliana Paes, Wolf Maya, Júlio Cocielo e muitas outras personalidades.
              </p>

              <p>
                <strong className="text-sbie-dark-green">Mestrando pela Florida Christian University (FCU)</strong> em Neuromarketing, 
                <strong className="text-sbie-dark-green"> Comunicólogo formado pela Universidade de São Paulo (USP)</strong> e membro da 
                International Society for Emotional Intelligence.
              </p>

              <p>
                Palestrante para milhares de pessoas nas principais empresas do Brasil e exterior. 
                <strong className="text-sbie-dark-green"> Professor Convidado da FGV no MBA de C-Levels</strong> e 
                Conselheiro no Instituto Êxito de Empreendedorismo.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-sbie-dark-green">Principais Realizações</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <AchievementItem
                    key={index}
                    icon={achievement.icon}
                    text={achievement.text}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="bg-sbie-bronze hover:bg-sbie-bronze/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Conheça Mais Sobre Rodrigo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-32 left-16 w-6 h-6 bg-sbie-bronze/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-8 h-8 bg-sbie-sage/20 rounded-full animate-float delay-700"></div>
    </section>
  );
};
