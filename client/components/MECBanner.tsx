import { useState, useEffect } from "react";
import { Award } from "lucide-react";

export const MECBanner = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
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
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-bounce border border-white/30">
                <Award className="w-4 h-4 text-white" />
              </div>
              <img
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
                alt="Selo MEC"
                className="h-8 w-auto animate-pulse drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <span className="font-semibold text-sm animate-pulse bg-white/15 px-4 py-2 rounded-full block border border-white/20 backdrop-blur-sm">
                🎓 Nossa Formação é reconhecida pelo MEC
              </span>
              <div className="text-xs mt-2 text-white/95 font-medium">
                Ministério da Educação
              </div>
              {/* Glow effect futurista */}
              <div className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center space-x-6">
          {/* Icon with enhanced animation */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce border-2 border-white/30 backdrop-blur-sm">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Text content with enhanced animation */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center space-x-6 flex-wrap">
              <img
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
                alt="Selo MEC"
                className="h-12 w-auto animate-pulse drop-shadow-xl hover:scale-110 transition-transform duration-300"
              />
              <div className="relative">
                <span className="font-bold text-lg lg:text-xl animate-pulse bg-white/15 px-6 py-3 rounded-full border border-white/25 backdrop-blur-sm">
                  🎓 Nossa Formação é reconhecida pelo MEC - Ministério da Educação
                </span>
                {/* Glow effect futurista */}
                <div className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-40"></div>
              </div>
              <img
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
                alt="Selo MEC"
                className="h-12 w-auto animate-pulse drop-shadow-xl hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
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
