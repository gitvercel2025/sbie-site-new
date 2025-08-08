import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sbie-beige via-sbie-beige/90 to-sbie-sage/20 overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#21302B,transparent)]"></div>
        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(182, 109, 56, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(182, 109, 56, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 25s linear infinite'
          }}
        ></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-sbie-bronze/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-sbie-sage/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-sbie-beige/20 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sbie-bronze/30 to-transparent animate-scan-vertical"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-sbie-sage/30 to-transparent animate-scan-horizontal"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6 relative">
              {/* Futuristic Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-sbie-bronze/20 shadow-2xl">
                {/* Holographic Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sbie-bronze/10 to-transparent transform skew-x-12 translate-x-full animate-shimmer"></div>

                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-sbie-bronze/50"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-sbie-bronze/50"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-sbie-bronze/50"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-sbie-bronze/50"></div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sbie-dark-green leading-tight relative z-10">
                  A resposta que você tanto busca, está no lugar que você{" "}
                  <span className="text-sbie-bronze relative inline-block">
                    nunca procurou
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/50 rounded-full animate-pulse"></div>
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-sbie-forest-green leading-relaxed mt-6 relative z-10">
                  Transforme sua carreira e seus relacionamentos. A SBIE oferece
                  as ferramentas e o conhecimento para você assumir o controle da
                  sua vida e alcançar resultados.
                </p>

                {/* Data Streams */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-1/4 left-6 text-sbie-bronze/30 text-xs font-mono animate-pulse">
                    [TRANSFORMING...]
                  </div>
                  <div className="absolute bottom-1/4 right-6 text-sbie-sage/30 text-xs font-mono animate-pulse delay-500">
                    [EVOLVING...]
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div
              className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-sbie-bronze/20 shadow-xl transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-sbie-dark-green mb-3">
                  Missão:
                </h3>
                <blockquote className="text-sbie-dark-green/90 italic text-lg leading-relaxed">
                  "Multiplicar todo o meu conhecimento, formando novos Mentores
                  que aplicam minha metodologia em todo o mundo, alcançando,
                  transformando e impactando milhares de vidas ao redor do globo
                  com a Inteligência Emocional."
                </blockquote>
                <cite className="block text-sbie-bronze font-semibold text-right mt-4">
                  — Rodrigo Fonseca
                </cite>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button className="group bg-gradient-to-r from-sbie-bronze to-sbie-bronze/90 hover:from-sbie-bronze/90 hover:to-sbie-bronze text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                <span className="relative z-10">Conheça Nossos Treinamentos</span>
                {/* Button Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-full group-hover:animate-shimmer-fast"></div>
              </button>
              <button className="group border-2 border-sbie-dark-green text-sbie-dark-green hover:bg-sbie-dark-green hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <span className="relative z-10">Saiba Mais Sobre a SBIE</span>
                {/* Button Glow */}
                <div className="absolute inset-0 bg-sbie-dark-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sbie-bronze/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sbie-sage/20 rounded-full blur-xl animate-pulse delay-1000"></div>

              {/* Futuristic Photo Container */}
              <div className="relative bg-gradient-to-br from-white/80 to-sbie-beige/30 rounded-3xl p-8 shadow-2xl border-2 border-sbie-bronze/30 backdrop-blur-sm">
                {/* Holographic Frame Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sbie-bronze/10 to-transparent transform skew-x-12 translate-x-full animate-shimmer"></div>

                {/* Tech Corner Elements */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-sbie-bronze"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-sbie-bronze"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-sbie-bronze"></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-sbie-bronze"></div>

                <div className="aspect-[4/5] rounded-2xl relative overflow-hidden">
                  <img
                    src="https://i.imgur.com/tbrCvCe.jpeg"
                    alt="Rodrigo Fonseca - Fundador e Presidente da SBIE"
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Tech Scan Lines */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sbie-bronze/10 to-transparent animate-scan-vertical opacity-50"></div>

                  {/* Decorative border with glow */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-sbie-bronze/50 shadow-inner"></div>
                  <div className="absolute inset-0 rounded-2xl border border-sbie-bronze animate-ping opacity-30"></div>
                </div>

                {/* Enhanced Caption */}
                <div className="mt-6 text-center relative">
                  <h4 className="text-xl font-bold text-sbie-dark-green">
                    Rodrigo Fonseca
                  </h4>
                  <p className="text-sbie-forest-green">
                    Fundador e Presidente da SBIE
                  </p>

                  {/* Data Display */}
                  <div className="flex justify-center space-x-4 mt-2 text-xs text-sbie-bronze/70 font-mono">
                    <span>[ID: FOUNDER_001]</span>
                    <span>[STATUS: ACTIVE]</span>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-sbie-bronze rounded-full animate-float"></div>
                <div className="absolute -top-4 -right-1 w-1 h-1 bg-sbie-sage rounded-full animate-float delay-300"></div>
                <div className="absolute -bottom-1 -left-4 w-3 h-3 bg-sbie-beige/50 rounded-full animate-float delay-700"></div>
                <div className="absolute -bottom-3 -right-3 w-2 h-2 bg-sbie-bronze/50 rounded-full animate-float delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-sbie-bronze/30 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-sbie-sage/40 rounded-full animate-bounce delay-700"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sbie-dark-green/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sbie-dark-green/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
