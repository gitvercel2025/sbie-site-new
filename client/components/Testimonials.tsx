import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface TestimonialVideo {
  id: string;
  name: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
}

export const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const testimonials: TestimonialVideo[] = [
    {
      id: "1",
      name: "Juliana Paes",
      title: "Atriz",
      thumbnail: "https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2022/05/juliana-paes-620.jpg.webp",
      videoUrl: "https://www.youtube.com/watch?v=ysF7fk1pjeQ",
      quote:
        "Eu ganhei um entendimento que talvez nem a terapia tivesse me dado até aqui",
    },
    {
      id: "2",
      name: "Wolf Maya",
      title: "Diretor e Ator",
      thumbnail: "https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2022/05/wolf-620-ajustada.jpg.webp",
      videoUrl: "https://www.youtube.com/watch?v=ENhzSaMsOQI",
      quote:
        "A metodologia SBIE transformou completamente minha visão sobre liderança",
    },
    {
      id: "3",
      name: "Catia Fonseca",
      title: "Apresentadora",
      thumbnail: "https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2019/07/catia-fonseca.jpg.webp",
      videoUrl: "https://www.youtube.com/watch?v=5gCzTc34VVo",
      quote:
        "A inteligência emocional mudou minha forma de enxergar os relacionamentos",
    },
    {
      id: "4",
      name: "Chris Flores",
      title: "Apresentadora",
      thumbnail: "https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2023/04/chris.jpg.webp",
      videoUrl: "https://www.youtube.com/watch?v=dKBKJjxy2J4",
      quote:
        "O treinamento LOTUS me deu ferramentas práticas para lidar com as emoções",
    },
    {
      id: "5",
      name: "Scheila Carvalho",
      title: "Dançarina e Apresentadora",
      thumbnail: "https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2022/05/scheila-carvalho-620.jpg.webp",
      videoUrl: "https://www.youtube.com/watch?v=a9o4wfPvndI",
      quote: "Descobri o poder de transformar emoções em resultados positivos",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleVideoPlay = (testimonial: TestimonialVideo) => {
    // Abre o vídeo do YouTube em uma nova aba
    window.open(testimonial.videoUrl, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-sbie-dark-green via-sbie-forest-green to-sbie-dark-green relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_100%,#889073,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-sbie-bronze/20 px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-sbie-beige" />
            <span className="text-sbie-beige font-semibold">Depoimentos</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Depoimento de{" "}
            <span className="text-sbie-bronze relative">
              grandes influenciadores
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/30 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-sbie-beige/90 max-w-4xl mx-auto">
            Veja o que eles dizem sobre como nossos treinamentos transformaram
            suas vidas.
          </p>
        </div>

        {/* Video Slide */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Current Video Slide */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300 hover:scale-105 group relative">
              {/* BorderBeam Animation */}
              <BorderBeam
                size={100}
                duration={10}
                delay={0}
                colorFrom="#B66D38"
                colorTo="#D4A574"
                borderWidth={2}
              />
              
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    currentSlide === index ? "block" : "hidden"
                  }`}
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video">
                    <img
                      src={testimonial.thumbnail}
                      alt={`Depoimento de ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                      <button
                        onClick={() => handleVideoPlay(testimonial)}
                        className="w-20 h-20 bg-sbie-bronze hover:bg-sbie-bronze/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>

                    {/* SBIE Logo watermark */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-sbie-dark-green/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sbie-beige text-sm font-semibold">
                          #SBIE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-6 text-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-sbie-beige/80 text-lg">
                        {testimonial.title}
                      </p>
                    </div>

                    <blockquote className="text-sbie-beige/90 italic text-xl leading-relaxed text-center mb-6">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Rating Stars */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-sbie-bronze fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-sbie-bronze hover:bg-sbie-bronze/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
              aria-label="Vídeo anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-sbie-bronze hover:bg-sbie-bronze/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
              aria-label="Próximo vídeo"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-sbie-bronze scale-125"
                    : "bg-sbie-beige/30 hover:bg-sbie-beige/50"
                }`}
                aria-label={`Ir para vídeo ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sbie-beige/90 font-medium">
              {currentSlide + 1} de {testimonials.length}
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto border border-sbie-bronze/20 relative">
            {/* BorderBeam Animation for CTA */}
            <BorderBeam
              size={80}
              duration={12}
              delay={2}
              colorFrom="#B66D38"
              colorTo="#D4A574"
              borderWidth={1}
            />
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Seja o Próximo a Transformar sua Vida
            </h3>
            <p className="text-sbie-beige/90 mb-6">
              Junte-se a milhares de pessoas que já descobriram o poder da
              inteligência emocional.
            </p>
            <a 
              href="https://wa.me/5511940069695" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-sbie-bronze hover:bg-sbie-bronze/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Comece Sua Transformação Agora
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-16 w-6 h-6 bg-sbie-bronze/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-8 h-8 bg-sbie-beige/20 rounded-full animate-float delay-1000"></div>
    </section>
  );
};
