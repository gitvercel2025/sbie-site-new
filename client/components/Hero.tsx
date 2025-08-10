import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "nunca procurou";

  useEffect(() => {
    setIsVisible(true);

    // Typing effect para a segunda parte do título
    let index = 0;
    const timer = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
    }, 1500); // Delay para começar depois que a animação inicial terminar

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Futurista Multi-Layer */}
      
      {/* Layer 1: Base Gradient Cyberpunk */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sbie-menu-green to-slate-800"></div>
      
      {/* Layer 2: Animated Mesh Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-energy-wave"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #0C3D35 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #4F5948 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, #B66D38 0%, transparent 50%)
            `,
            backgroundSize: "400px 400px, 300px 300px, 500px 500px",
            animation: "energy-wave 8s ease-in-out infinite"
          }}
        ></div>
      </div>
      
      {/* Layer 3: Matrix Rain Effect - Otimizado para Mobile */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-sbie-menu-green to-transparent animate-matrix-rain"
            style={{
              left: `${(i * (window.innerWidth < 768 ? 10 : 5)) % 100}%`,
              height: window.innerWidth < 768 ? "150px" : "200px",
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Layer 4: Geometric Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(12, 61, 53, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(12, 61, 53, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(182, 109, 56, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(182, 109, 56, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 100px 100px, 50px 50px, 50px 50px",
          animation: "data-stream 6s linear infinite"
        }}
      ></div>
      
      {/* Layer 5: Floating Cyber Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-sbie-menu-green/20 rounded-full blur-xl animate-cyber-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-sbie-bronze/30 rounded-full blur-lg animate-cyber-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-sbie-forest-green/15 rounded-full blur-2xl animate-cyber-pulse" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-sbie-sage/25 rounded-full blur-xl animate-cyber-pulse" style={{animationDelay: "0.5s"}}></div>
      </div>
      
      {/* Layer 6: Data Streams */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-sbie-bronze to-transparent animate-data-stream"
            style={{
              top: `${20 + (i * 15)}%`,
              width: "100%",
              animationDelay: `${i * 0.8}s`,
              animationDuration: "4s"
            }}
          ></div>
        ))}
      </div>
      
      {/* Layer 7: Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sbie-menu-green/10 via-transparent to-sbie-bronze/10 animate-hologram-flicker"></div>
      
      {/* Layer 8: Background Image with Futuristic Treatment */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay animate-neon-glow"
        style={{
          backgroundImage: `url('https://i.imgur.com/wNP4so6.jpg')`,
          backgroundPosition: 'center 20%',
          backgroundSize: 'cover',
          filter: 'grayscale(70%) contrast(1.5) brightness(0.8) hue-rotate(180deg)'
        }}
      ></div>
      
      {/* Layer 9: Cyber Scan Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-sbie-bronze/60 to-transparent animate-data-stream"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-sbie-menu-green/60 to-transparent animate-data-stream" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-sbie-sage/40 to-transparent animate-data-stream" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-sbie-bronze/40 to-transparent animate-data-stream" style={{animationDelay: "3s"}}></div>
      </div>
      
      {/* Layer 10: Corner Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-sbie-bronze/60 animate-cyber-pulse"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-sbie-menu-green/60 animate-cyber-pulse" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-sbie-sage/60 animate-cyber-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-sbie-bronze/60 animate-cyber-pulse" style={{animationDelay: "1.5s"}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4 md:space-y-6 relative">
              {/* Container Futurístico Responsivo */}
              <div className="relative bg-gradient-to-br from-black/40 via-sbie-menu-green/20 to-black/30 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-sbie-bronze/40 shadow-2xl">
                {/* Efeitos Holográficos Responsivos */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sbie-bronze/15 to-transparent transform skew-x-12 translate-x-full animate-data-stream opacity-60"></div>

                {/* Cantos Decorativos Responsivos */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-sbie-bronze/70 animate-cyber-pulse"></div>
                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-sbie-menu-green/70 animate-cyber-pulse" style={{animationDelay: "0.5s"}}></div>
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-sbie-sage/70 animate-cyber-pulse" style={{animationDelay: "1s"}}></div>
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-sbie-bronze/70 animate-cyber-pulse" style={{animationDelay: "1.5s"}}></div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight relative z-10 drop-shadow-lg">
                  A resposta que você tanto busca, está no lugar que você{" "}
                  <span className="text-sbie-bronze relative inline-block">
                    {typedText}
                    <span className="animate-pulse text-sbie-menu-green">|</span>
                    <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-sbie-bronze via-sbie-menu-green to-sbie-bronze rounded-full animate-cyber-pulse"></div>
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-sbie-beige leading-relaxed mt-4 md:mt-6 relative z-10 drop-shadow-md">
                  Transforme sua carreira e seus relacionamentos. A SBIE oferece
                  as ferramentas e o conhecimento para você assumir o controle
                  da sua vida e alcançar resultados.
                </p>
              </div>
            </div>

            {/* Mission Statement Enhanced */}
            <div
              className={`bg-gradient-to-br from-black/50 via-sbie-menu-green/30 to-black/40 backdrop-blur-lg rounded-3xl p-8 border border-sbie-bronze/30 shadow-2xl transition-all duration-1000 delay-300 animate-hologram-flicker ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-sbie-bronze mb-3 animate-neon-glow">
                  Missão:
                </h3>
                <blockquote className="text-sbie-beige italic text-lg leading-relaxed drop-shadow-lg">
                  "Multiplicar todo o meu conhecimento, formando novos Mentores
                  que aplicam minha metodologia em todo o mundo, alcançando,
                  transformando e impactando milhares de vidas ao redor do globo
                  com a Inteligência Emocional."
                </blockquote>
                <cite className="block text-sbie-bronze font-semibold text-right mt-4 animate-neon-glow">
                  — Rodrigo Fonseca
                </cite>
              </div>
            </div>

            {/* CTA Buttons Enhanced */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button className="group relative bg-gradient-to-r from-sbie-bronze to-sbie-bronze/90 hover:from-sbie-bronze/95 hover:to-sbie-bronze text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
                <span className="relative z-10 drop-shadow-sm">
                  Conheça Nossos Treinamentos
                </span>
                {/* Efeito Suave de Brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                {/* Sombra Interna Suave */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 rounded-full"></div>
              </button>
              <button className="group border-2 border-sbie-bronze text-sbie-beige hover:bg-gradient-to-r hover:from-sbie-bronze/20 hover:to-sbie-menu-green/20 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm">
                <span className="relative z-10 drop-shadow-lg">Saiba Mais Sobre a SBIE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze/20 via-sbie-menu-green/20 to-sbie-bronze/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-hologram-flicker"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Image Enhanced */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Ultra Futuristic Photo Container - Versão Suave */}
              <div className="relative bg-gradient-to-br from-black/30 via-sbie-menu-green/20 to-black/25 rounded-3xl p-6 md:p-8 shadow-xl border border-sbie-bronze/30 backdrop-blur-md group">
                {/* Efeitos Holográficos Suaves */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sbie-bronze/10 to-transparent transform skew-x-12 translate-x-full animate-data-stream opacity-50"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sbie-bronze/5 via-transparent to-sbie-menu-green/5 animate-hologram-flicker"></div>

                {/* Aura de Energia Suave */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-sbie-bronze/15 via-sbie-menu-green/10 to-sbie-sage/15 animate-energy-wave blur-md opacity-60"></div>

                {/* Cantos Tech Suaves */}
                <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 border-t border-l border-sbie-bronze/60 animate-cyber-pulse"></div>
                <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 border-t border-r border-sbie-menu-green/60 animate-cyber-pulse" style={{animationDelay: "0.5s"}}></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 border-b border-l border-sbie-sage/60 animate-cyber-pulse" style={{animationDelay: "1s"}}></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 md:w-8 md:h-8 border-b border-r border-sbie-bronze/60 animate-cyber-pulse" style={{animationDelay: "1.5s"}}></div>

                <div className="aspect-[4/5] rounded-2xl relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F001294cde81c4a5aa1868dd0c3aedb02%2F581de98a9d064ea5b854738a91d6c43f?format=webp&width=800"
                    alt="Rodrigo Fonseca - Fundador e Presidente da SBIE"
                    className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105 cursor-pointer group-hover:brightness-110 group-hover:contrast-105"
                  />

                  {/* Efeitos de Foto Suaves */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sbie-bronze/10 via-transparent to-sbie-menu-green/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Scan Lines Suaves */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sbie-bronze/8 to-transparent animate-data-stream opacity-30"></div>

                  {/* Bordas Decorativas Suaves */}
                  <div className="absolute inset-0 rounded-2xl border border-sbie-bronze/40 shadow-inner"></div>
                  <div className="absolute inset-0 rounded-2xl border border-sbie-menu-green/20 animate-hologram-flicker opacity-50"></div>
                </div>

                {/* Caption Melhorada */}
                <div className="mt-4 md:mt-6 text-center relative">
                  <h4 className="text-lg md:text-xl font-bold text-sbie-bronze drop-shadow-md">
                    Rodrigo Fonseca
                  </h4>
                  <p className="text-sm md:text-base text-sbie-beige/90 drop-shadow-sm">
                    Fundador e Presidente da SBIE
                  </p>
                </div>

                {/* Partículas Flutuantes Suaves */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-sbie-bronze/60 rounded-full animate-cyber-pulse opacity-70"></div>
                <div className="absolute -top-3 -right-1 w-1 h-1 bg-sbie-menu-green/60 rounded-full animate-cyber-pulse opacity-60" style={{animationDelay: "0.3s"}}></div>
                <div className="absolute -bottom-1 -left-3 w-2 h-2 bg-sbie-sage/50 rounded-full animate-cyber-pulse opacity-50" style={{animationDelay: "0.7s"}}></div>
                <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-sbie-bronze/50 rounded-full animate-cyber-pulse opacity-60" style={{animationDelay: "1s"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-20 w-8 h-8 bg-sbie-bronze/50 rounded-full animate-cyber-pulse"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-sbie-menu-green/60 rounded-full animate-cyber-pulse" style={{animationDelay: "0.7s"}}></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-sbie-sage/40 rounded-full animate-energy-wave"></div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-cyber-pulse">
        <div className="w-8 h-12 border-2 border-sbie-bronze/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-gradient-to-b from-sbie-bronze to-sbie-menu-green rounded-full mt-2 animate-data-stream"></div>
        </div>
      </div>
    </section>
  );
};
