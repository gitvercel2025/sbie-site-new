import { useEffect, useState, useRef } from "react";
import { Zap, ArrowRight } from "lucide-react";

export const QuoteSection = () => {
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

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sbie-dark-green via-gray-900 to-black">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(223, 198, 170, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(223, 198, 170, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}
          ></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-sbie-bronze/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-sbie-sage/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-sbie-beige/10 rounded-full blur-2xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sbie-bronze to-transparent animate-scan-vertical"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-sbie-sage to-transparent animate-scan-horizontal"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Futuristic Card */}
          <div className="relative">
            {/* Card Background with Holographic Effect */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-sbie-bronze/30 p-12 lg:p-16 text-center relative overflow-hidden">
              {/* Holographic Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sbie-bronze/10 to-transparent transform skew-x-12 translate-x-full animate-shimmer"></div>
              
              {/* Corner Decorations */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-sbie-bronze/50"></div>
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-sbie-bronze/50"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-sbie-bronze/50"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-sbie-bronze/50"></div>

              {/* Energy Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-sbie-bronze to-sbie-bronze/70 rounded-2xl mx-auto flex items-center justify-center relative">
                  <Zap className="w-10 h-10 text-white" />
                  
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-sbie-bronze animate-ping opacity-75"></div>
                  <div className="absolute inset-0 rounded-2xl border border-sbie-bronze/50 animate-pulse"></div>
                </div>
              </div>

              {/* Quote */}
              <div className="space-y-8 relative z-10">
                <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  "A única diferença entre o medo e a coragem é a{" "}
                  <span className="text-sbie-bronze relative inline-block">
                    ação!
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/50 rounded-full animate-pulse"></div>
                  </span>
                  "
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-px bg-sbie-bronze/50 flex-1 max-w-24"></div>
                  <cite className="text-sbie-beige text-xl font-semibold tracking-wider">
                    RODRIGO FONSECA
                  </cite>
                  <div className="h-px bg-sbie-bronze/50 flex-1 max-w-24"></div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <button className="group bg-gradient-to-r from-sbie-bronze to-sbie-bronze/90 hover:from-sbie-bronze/90 hover:to-sbie-bronze text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Transforme Seu Medo em Ação</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  
                  {/* Button Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-full group-hover:animate-shimmer-fast"></div>
                </button>
              </div>

              {/* Data Streams */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-8 text-sbie-bronze/30 text-xs font-mono animate-pulse">
                  [ANALISANDO...]
                </div>
                <div className="absolute top-3/4 right-8 text-sbie-sage/30 text-xs font-mono animate-pulse delay-1000">
                  [TRANSFORMANDO...]
                </div>
                <div className="absolute bottom-1/4 left-1/2 text-sbie-beige/30 text-xs font-mono animate-pulse delay-500 transform -translate-x-1/2">
                  [EVOLUINDO...]
                </div>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-sbie-bronze rounded-full animate-float"></div>
            <div className="absolute -top-6 -right-2 w-1 h-1 bg-sbie-sage rounded-full animate-float delay-300"></div>
            <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-sbie-beige/50 rounded-full animate-float delay-700"></div>
            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-sbie-bronze/50 rounded-full animate-float delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
