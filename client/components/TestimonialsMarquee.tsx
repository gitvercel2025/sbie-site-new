import { useState, useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export const TestimonialsMarquee = () => {
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

  const testimonials: TestimonialItem[] = [
    {
      id: "1",
      name: "Maria Silva",
      role: "Empresária",
      content: "O treinamento LOTUS transformou completamente minha forma de lidar com as emoções no ambiente de trabalho. Recomendo para todos os líderes!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "2",
      name: "João Santos",
      role: "Gerente de Vendas",
      content: "Incrível como a inteligência emocional pode impactar nos resultados. Minha equipe está mais motivada e produtiva após o curso da SBIE.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "3",
      name: "Ana Costa",
      role: "Psicóloga",
      content: "A metodologia da SBIE é excepcional. Como profissional da área, posso afirmar que o conteúdo é de altíssima qualidade e muito prático.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "4",
      name: "Carlos Oliveira",
      role: "Diretor de RH",
      content: "Implementamos os treinamentos da SBIE em nossa empresa e os resultados foram surpreendentes. Clima organizacional muito melhor!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "5",
      name: "Fernanda Lima",
      role: "Coach Executiva",
      content: "O Rodrigo Fonseca é um verdadeiro mestre em inteligência emocional. Seus ensinamentos mudaram minha vida pessoal e profissional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "6",
      name: "Roberto Mendes",
      role: "Empreendedor",
      content: "A formação em Inteligência Emocional da SBIE me deu as ferramentas necessárias para ser um líder mais empático e eficaz.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: TestimonialItem }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sbie-bronze/20 hover:shadow-xl transition-all duration-300 hover:scale-105 mx-4 min-w-[350px] max-w-[400px]">
      <div className="flex items-center mb-4">
        <div className="flex text-sbie-bronze">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
      
      <div className="relative mb-6">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-sbie-bronze/30" />
        <p className="text-sbie-forest-green leading-relaxed pl-6">
          "{testimonial.content}"
        </p>
      </div>
      
      <div className="flex items-center">
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-sbie-bronze/20"
          />
        )}
        <div>
          <h4 className="font-semibold text-sbie-dark-green">{testimonial.name}</h4>
          <p className="text-sm text-sbie-forest-green">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-sbie-sage/10 via-white to-sbie-beige/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_50%,#889073,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-sbie-bronze/10 px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-sbie-bronze" />
            <span className="text-sbie-bronze font-semibold">Depoimentos</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-sbie-dark-green mb-6">
            O que nossos{" "}
            <span className="text-sbie-bronze relative">
              alunos dizem
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/30 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl text-sbie-forest-green max-w-3xl mx-auto">
            Histórias reais de transformação através da inteligência emocional
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <Marquee pauseOnHover className="[--duration:60s]">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-sbie-forest-green mb-6">
            Faça parte dessa transformação você também!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-sbie-bronze to-sbie-bronze/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Comece sua jornada</span>
          </a>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-16 w-6 h-6 bg-sbie-bronze/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-8 h-8 bg-sbie-sage/20 rounded-full animate-float delay-1000"></div>
    </section>
  );
};