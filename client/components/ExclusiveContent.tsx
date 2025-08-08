import { useState, useEffect, useRef } from "react";
import { ArrowRight, BookOpen, Video, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "article" | "video" | "insight";
  readTime?: string;
}

export const ExclusiveContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibleSlides = () => {
      const slides = getVisibleSlides();
      setVisibleSlides(slides);
      // Reset currentSlide if it's beyond the new max
      const maxSlide = Math.ceil(contentItems.length / slides) - 1;
      if (currentSlide > maxSlide) {
        setCurrentSlide(0);
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, [currentSlide]);

  const contentItems: ContentItem[] = [
    {
      id: "1",
      title:
        "Inteligência emocional e saúde mental: estratégias para um ambiente de trabalho saudável",
      description:
        "Descubra como implementar estratégias de inteligência emocional para criar um ambiente de trabalho mais saudável e produtivo.",
      image: "https://i.imgur.com/PutfwSD.png",
      category: "article",
      readTime: "10 min",
    },
    {
      id: "2",
      title:
        "Dormir mal afeta suas emoções (e pode prejudicar sua saúde mental a longo prazo)",
      description:
        "Entenda a conexão entre qualidade do sono e regulação emocional, e como melhorar ambos para uma vida mais equilibrada.",
      image: "https://i.imgur.com/AIrq70I.png",
      category: "insight",
      readTime: "6 min",
    },
    {
      id: "3",
      title:
        "Liderança emocionalmente inteligente: o futuro da gestão em ambientes híbridos",
      description:
        "Explore as competências essenciais para liderar equipes com inteligência emocional no novo mundo do trabalho híbrido.",
      image: "https://i.imgur.com/OTiOK5A.png",
      category: "article",
      readTime: "12 min",
    },
    {
      id: "4",
      title:
        "Como desenvolver a autoconsciência emocional para melhorar a tomada de decisão",
      description:
        "Descubra técnicas comprovadas para aumentar sua autoconsciência e tomar decisões mais assertivas em sua vida pessoal e profissional.",
      image: "https://i.imgur.com/yuhrcYq.png",
      category: "article",
      readTime: "8 min",
    },
    {
      id: "5",
      title:
        "Inteligência emocional e Geração Z: como eles estão buscando essa soft skill",
      description:
        "Compreenda como a Geração Z está priorizando o desenvolvimento da inteligência emocional no ambiente profissional.",
      image: "https://i.imgur.com/Nun0Ujc.png",
      category: "insight",
      readTime: "7 min",
    },
  ];

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const nextSlide = () => {
    const currentVisibleSlides = getVisibleSlides();
    const maxSlide = contentItems.length - currentVisibleSlides;
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const currentVisibleSlides = getVisibleSlides();
    const maxSlide = contentItems.length - currentVisibleSlides;
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "article":
        return <BookOpen className="w-4 h-4" />;
      case "video":
        return <Video className="w-4 h-4" />;
      case "insight":
        return <Lightbulb className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "article":
        return "bg-sbie-bronze";
      case "video":
        return "bg-sbie-sage";
      case "insight":
        return "bg-sbie-forest-green";
      default:
        return "bg-sbie-bronze";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-sbie-beige/20 via-white to-sbie-sage/10 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_50%,#21302B,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-sbie-bronze/10 px-6 py-3 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-sbie-bronze" />
            <span className="text-sbie-bronze font-semibold">
              Conteúdo Exclusivo
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-sbie-dark-green mb-6">
            Acompanhe conteúdos{" "}
            <span className="text-sbie-bronze relative">
              exclusivos da SBIE
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/30 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-sbie-forest-green max-w-4xl mx-auto">
            Artigos, vídeos e insights para acelerar sua jornada de
            desenvolvimento pessoal e profissional.
          </p>
        </div>

        {/* Content Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
                  width: `${(contentItems.length * 100) / visibleSlides}%`,
                }}
              >
                {contentItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="px-3 md:px-4"
                    style={{ width: `${100 / contentItems.length}%` }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-sbie-bronze/10 hover:shadow-2xl hover:scale-105 transition-all duration-500 group h-full">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />

                        {/* Category Badge */}
                        <div
                          className={`absolute top-4 left-4 ${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-medium`}
                        >
                          {getCategoryIcon(item.category)}
                          <span className="capitalize">{item.category}</span>
                        </div>

                        {/* Read Time */}
                        {item.readTime && (
                          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                            {item.readTime}
                          </div>
                        )}

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg md:text-xl font-bold text-sbie-dark-green mb-3 group-hover:text-sbie-bronze transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-sm md:text-base text-sbie-forest-green leading-relaxed mb-4 line-clamp-3">
                          {item.description}
                        </p>

                        {/* Read More Button */}
                        <button className="inline-flex items-center space-x-2 text-sbie-bronze hover:text-sbie-bronze/80 font-semibold transition-all duration-300 group-hover:translate-x-2 text-sm md:text-base">
                          <span>Ler mais</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-sbie-bronze hover:bg-sbie-bronze/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl z-10"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-sbie-bronze hover:bg-sbie-bronze/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl z-10"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: contentItems.length - visibleSlides + 1,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 hover:scale-110 ${
                  currentSlide === index
                    ? "w-8 bg-sbie-bronze"
                    : "w-4 bg-sbie-bronze/30 hover:bg-sbie-bronze/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto shadow-xl border border-sbie-bronze/20">
            <h3 className="text-2xl font-bold text-sbie-dark-green mb-4">
              Quer Mais Conteúdo Exclusivo?
            </h3>
            <p className="text-sbie-forest-green mb-6">
              Inscreva-se em nossa newsletter e receba semanalmente artigos,
              vídeos e insights direto em seu e-mail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 bg-sbie-beige/30 border border-sbie-bronze/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sbie-bronze focus:border-transparent"
              />
              <button className="bg-sbie-bronze hover:bg-sbie-bronze/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 right-16 w-6 h-6 bg-sbie-bronze/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-sbie-sage/20 rounded-full animate-float delay-1000"></div>
    </section>
  );
};
