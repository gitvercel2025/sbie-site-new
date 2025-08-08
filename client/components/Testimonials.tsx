import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";

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
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
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
      name: "Chris Flores",
      title: "Apresentadora",
      thumbnail: "https://img.youtube.com/vi/dKBKJjxy2J4/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dKBKJjxy2J4",
      quote:
        "O treinamento LOTUS me deu ferramentas práticas para lidar com as emoções",
    },
    {
      id: "2",
      name: "Wolf Maya",
      title: "Diretor e Ator",
      thumbnail: "https://img.youtube.com/vi/ENhzSaMsOQI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=ENhzSaMsOQI",
      quote:
        "A metodologia SBIE transformou completamente minha visão sobre liderança",
    },
    {
      id: "3",
      name: "Catia Fonseca",
      title: "Apresentadora",
      thumbnail: "https://img.youtube.com/vi/5gCzTc34VVo/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=5gCzTc34VVo",
      quote:
        "A inteligência emocional mudou minha forma de enxergar os relacionamentos",
    },
    {
      id: "4",
      name: "Scheila Carvalho",
      title: "Dançarina e Apresentadora",
      thumbnail: "https://img.youtube.com/vi/a9o4wfPvndI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=a9o4wfPvndI",
      quote: "Descobri o poder de transformar emoções em resultados positivos",
    },
    {
      id: "5",
      name: "Juliana Paes",
      title: "Atriz",
      thumbnail: "https://img.youtube.com/vi/ysF7fk1pjeQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=ysF7fk1pjeQ",
      quote:
        "Eu ganhei um entendimento que talvez nem a terapia tivesse me dado até aqui",
    },
  ];

  const nextSlide = () => {
    const visibleSlides = getVisibleSlides();
    const maxSlide = testimonials.length - visibleSlides;
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const visibleSlides = getVisibleSlides();
    const maxSlide = testimonials.length - visibleSlides;
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
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

        {/* Video Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / getVisibleSlides())}%)`,
                width: `${(testimonials.length * 100) / getVisibleSlides()}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-300 hover:scale-105 group">
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
                          className="w-16 h-16 bg-sbie-bronze hover:bg-sbie-bronze/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                        >
                          <Play className="w-6 h-6 text-white ml-1" />
                        </button>
                      </div>

                      {/* SBIE Logo watermark */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-sbie-dark-green/80 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sbie-beige text-sm font-semibold">
                            #SBIE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-sbie-beige/80">
                          {testimonial.title}
                        </p>
                      </div>

                      <blockquote className="text-sbie-beige/90 italic text-lg leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Rating Stars */}
                      <div className="flex space-x-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-sbie-bronze fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-sbie-bronze hover:bg-sbie-bronze/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-sbie-bronze hover:bg-sbie-bronze/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({
            length: Math.ceil(testimonials.length / getVisibleSlides()),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-sbie-bronze scale-125"
                  : "bg-sbie-beige/30 hover:bg-sbie-beige/50"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto border border-sbie-bronze/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Seja o Próximo a Transformar sua Vida
            </h3>
            <p className="text-sbie-beige/90 mb-6">
              Junte-se a milhares de pessoas que já descobriram o poder da
              inteligência emocional.
            </p>
            <button className="bg-sbie-bronze hover:bg-sbie-bronze/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Comece Sua Transformação Agora
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-16 w-6 h-6 bg-sbie-bronze/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-8 h-8 bg-sbie-beige/20 rounded-full animate-float delay-1000"></div>
    </section>
  );
};
