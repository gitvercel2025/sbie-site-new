import { useState, useEffect } from "react";

export const MECBanner = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "🎓 Nossa Formação é reconhecida pelo MEC - Ministério da Educação",
    "🎯 Nossas Imersões possuem Garantia Incondicional"
  ];

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Alternância de textos a cada 4 segundos
    const textTimer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(textTimer);
  }, []);

  return (
    <div
      className={`bg-gradient-to-r from-sbie-menu-green via-sbie-menu-green/95 to-sbie-forest-green text-white py-4 md:py-5 px-3 md:px-4 relative overflow-hidden transition-all duration-500 ${
        isAnimated ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Background Pattern Futurista */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.08"%3E%3Ccircle cx="5" cy="5" r="2"/%3E%3Ccircle cx="15" cy="15" r="3"/%3E%3Ccircle cx="25" cy="25" r="2"/%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
        }
      ></div>

      {/* Efeitos de Luz Futuristas */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-sbie-menu-green/20 via-transparent to-sbie-forest-green/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="relative">
              <span className="font-semibold text-sm bg-white/15 px-4 py-2 rounded-full block border border-white/20 backdrop-blur-sm transition-all duration-1000">
                {texts[currentTextIndex]}
              </span>
              {currentTextIndex === 0 && (
                <div className="text-xs mt-2 text-white/95 font-medium">
                  Ministério da Educação
                </div>
              )}
            </div>
            <img
              key={currentTextIndex}
              src={currentTextIndex === 0 
                ? "https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
                : "https://i.imgur.com/KN5lano.png"
              }
              alt={currentTextIndex === 0 ? "Selo MEC" : "Selo Garantia"}
              className="h-16 w-auto drop-shadow-xl hover:scale-110 transition-all duration-500 bg-transparent"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>

        {/* Desktop Layout - Centralizado */}
        <div className="hidden md:flex items-center justify-center space-x-6">
          <div className="relative">
            <span className="font-bold text-lg lg:text-xl bg-white/15 px-6 py-3 rounded-full border border-white/25 backdrop-blur-sm transition-all duration-1000">
              {texts[currentTextIndex]}
            </span>
          </div>
          
          <img
            key={currentTextIndex}
            src={currentTextIndex === 0 
              ? "https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
              : "https://i.imgur.com/KN5lano.png"
            }
            alt={currentTextIndex === 0 ? "Selo MEC" : "Selo Garantia"}
            className="h-20 w-auto drop-shadow-xl hover:scale-110 transition-all duration-500 bg-transparent"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      {/* Efeitos animados futuristas */}
      <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/15 to-transparent transform skew-x-12 translate-x-full animate-[shine_5s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-transparent to-white/8 animate-[slide_8s_ease-in-out_infinite]"></div>
      
      {/* Linhas de scan futuristas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" style={{animationDelay: "1s"}}></div>
    </div>
  );
};
