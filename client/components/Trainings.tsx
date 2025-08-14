import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Zap,
  Brain,
  Cpu,
  Users,
  Building,
  Heart,
  Sparkles,
  Target,
  Rocket,
  Atom,
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Link } from 'react-router-dom';

interface TrainingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  category: "individual" | "professional" | "corporate" | "social";
  href: string;
}

const TrainingCard = ({
  title,
  description,
  icon,
  index,
  category,
  href,
}: TrainingCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = () => {
    switch (category) {
      case "individual":
        return "from-sbie-bronze to-sbie-bronze/70";
      case "professional":
        return "from-sbie-sage to-sbie-sage/70";
      case "corporate":
        return "from-sbie-dark-green to-sbie-forest-green";
      case "social":
        return "from-sbie-forest-green to-sbie-sage";
      default:
        return "from-sbie-bronze to-sbie-bronze/70";
    }
  };

  const getCategoryBorder = () => {
    switch (category) {
      case "individual":
        return "border-sbie-bronze/20 hover:border-sbie-bronze/40";
      case "professional":
        return "border-sbie-sage/20 hover:border-sbie-sage/40";
      case "corporate":
        return "border-sbie-dark-green/20 hover:border-sbie-dark-green/40";
      case "social":
        return "border-sbie-forest-green/20 hover:border-sbie-forest-green/40";
      default:
        return "border-sbie-bronze/20 hover:border-sbie-bronze/40";
    }
  };

  const getBorderBeamColors = () => {
    switch (category) {
      case "individual":
        return { colorFrom: "#B66D38", colorTo: "#D4A574" };
      case "professional":
        return { colorFrom: "#889073", colorTo: "#A8B896" };
      case "corporate":
        return { colorFrom: "#2D5016", colorTo: "#4A7C59" };
      case "social":
        return { colorFrom: "#4A7C59", colorTo: "#889073" };
      default:
        return { colorFrom: "#B66D38", colorTo: "#D4A574" };
    }
  };

  const beamColors = getBorderBeamColors();

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 h-full shadow-xl border-2 ${getCategoryBorder()} hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white group relative overflow-hidden`}
      >
        {/* BorderBeam Animation */}
        <BorderBeam
          size={200}
          duration={8}
          delay={index * 2}
          colorFrom={beamColors.colorFrom}
          colorTo={beamColors.colorTo}
          borderWidth={2}
        />

        {/* Background Gradient */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getCategoryColor()} opacity-10 rounded-bl-[100px] group-hover:opacity-20 transition-opacity duration-300`}
        ></div>

        {/* Icon */}
        <div
          className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor()} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 relative z-10`}
        >
          <div className="text-white">{icon}</div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-sbie-dark-green mb-4 group-hover:text-sbie-bronze transition-colors duration-300">
            {title}
          </h3>

          <p className="text-sbie-forest-green leading-relaxed mb-6 text-lg">
            {description}
          </p>

          {/* CTA Button */}
          <Link
            to={href}
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
            className={`inline-flex items-center space-x-2 bg-gradient-to-r ${getCategoryColor()} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:translate-x-2`}
          >
            <span>Saiba Mais</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          {icon}
        </div>
      </div>
    </div>
  );
};

export const Trainings = () => {
  const trainings: TrainingCardProps[] = [
    {
      title: "Lotus Inteligência Emocional",
      description: "Uma imersão de 3 dias para transformar sua vida pessoal e profissional através da inteligência emocional.",
      icon: <Zap className="w-8 h-8" />,
      category: "individual" as const,
      href: "/lotus",
    },
    {
      title: "Formação em Inteligência Emocional",
      description: "Capacitação completa para quem deseja se tornar um profissional em inteligência emocional.",
      icon: <Brain className="w-8 h-8" />,
      category: "professional" as const,
      href: "/formacao",
    },
    {
      title: "Formação Master em Inteligência Emocional",
      description: "Aprofunde seus conhecimentos e se torne um especialista master em inteligência emocional.",
      icon: <Cpu className="w-8 h-8" />,
      category: "professional" as const,
      href: "/formacao-master",
    },
    {
      title: "SBIE Business",
      description:
        "Soluções corporativas em inteligência emocional para empresas que querem resultados excepcionais.",
      icon: <Target className="w-8 h-8" />,
      category: "corporate" as const,
      href: "/business",
    },
    {
      title: "Embaixadores do Bem",
      description:
        "Programa social para multiplicar conhecimento em inteligência emocional em comunidades.",
      icon: <Rocket className="w-8 h-8" />,
      category: "social" as const,
      href: "/embaixadores",
    },
  ];

  return (
    <section id="trainings" className="py-20 bg-gradient-to-br from-white via-sbie-beige/20 to-sbie-sage/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_100%,#889073,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sbie-bronze/10 px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5 text-sbie-bronze" />
            <span className="text-sbie-bronze font-semibold">
              Treinamentos SBIE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-sbie-dark-green mb-6">
            Treinamentos{" "}
            <span className="text-sbie-bronze relative">
              SBIE Inteligência Emocional
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/30 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-sbie-forest-green max-w-4xl mx-auto">
            Transforme sua vida através dos treinamentos da Sociedade Brasileira
            de Inteligência Emocional.
          </p>
        </div>

        {/* Trainings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <TrainingCard
              key={index}
              title={training.title}
              description={training.description}
              icon={training.icon}
              index={index}
              category={training.category}
              href={training.href}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto shadow-xl border border-sbie-bronze/20">
            <h3 className="text-2xl font-bold text-sbie-dark-green mb-4">
              Pronto para Transformar sua Vida?
            </h3>
            <p className="text-sbie-forest-green mb-6">
              Escolha o treinamento ideal para você e comece sua jornada de
              desenvolvimento emocional hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#trainings" 
                className="bg-sbie-bronze hover:bg-sbie-bronze/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#trainings')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Todos os Treinamentos
              </a>
              <a 
                href="https://wa.me/5511940069695" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-sbie-dark-green text-sbie-dark-green hover:bg-sbie-dark-green hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Fale com um Consultor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-16 w-4 h-4 bg-sbie-bronze/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-sbie-sage/30 rounded-full animate-float delay-1000"></div>
    </section>
  );
};
