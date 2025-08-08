import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sbie-beige via-sbie-beige/90 to-sbie-sage/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#21302B,transparent)]"></div>
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
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sbie-dark-green leading-tight">
                A resposta que você tanto busca, está no lugar que você{" "}
                <span className="text-sbie-bronze relative">
                  nunca procurou
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/30 rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-sbie-forest-green leading-relaxed">
                Transforme sua carreira e seus relacionamentos. A SBIE oferece
                as ferramentas e o conhecimento para você assumir o controle da
                sua vida e alcançar resultados.
              </p>
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
              <button className="bg-sbie-bronze hover:bg-sbie-bronze/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Conheça Nossos Treinamentos
              </button>
              <button className="border-2 border-sbie-dark-green text-sbie-dark-green hover:bg-sbie-dark-green hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
                Saiba Mais Sobre a SBIE
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
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sbie-bronze/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sbie-sage/20 rounded-full blur-xl animate-pulse delay-1000"></div>

              {/* Photo Placeholder */}
              <div className="relative bg-gradient-to-br from-white to-sbie-beige/50 rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20">
                <div className="aspect-[4/5] rounded-2xl relative overflow-hidden">
                  <img
                    src="https://i.imgur.com/tbrCvCe.jpeg"
                    alt="Rodrigo Fonseca - Fundador e Presidente da SBIE"
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-sbie-bronze/20"></div>
                </div>

                {/* Caption */}
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-sbie-dark-green">
                    Rodrigo Fonseca
                  </h4>
                  <p className="text-sbie-forest-green">
                    Fundador e Presidente da SBIE
                  </p>
                </div>
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
