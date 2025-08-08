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
      className={`bg-gradient-to-r from-sbie-bronze to-sbie-bronze/90 text-white py-3 md:py-4 px-3 md:px-4 relative overflow-hidden transition-all duration-500 ${
        isAnimated ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Background Pattern */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/svg%3E\')] opacity-20'
        }
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                <Award className="w-3 h-3 text-white" />
              </div>
              <img
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
                alt="Selo MEC"
                className="h-5 w-auto animate-pulse"
              />
            </div>
            <div className="relative">
              <span className="font-semibold text-sm animate-pulse bg-white/10 px-3 py-1 rounded-full block">
                🎓 Reconhecido pelo MEC
              </span>
              <div className="text-xs mt-1 text-white/90">
                Ministério da Educação
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center space-x-4">
          {/* Icon with animation */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
              <Award className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Text content with enhanced animation */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center space-x-4 flex-wrap">
              <img
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
                alt="Selo MEC"
                className="h-8 w-auto animate-pulse"
              />
              <div className="relative">
                <span className="font-bold text-base lg:text-lg animate-pulse bg-white/10 px-4 py-2 rounded-full">
                  🎓 Nossos treinamentos são reconhecidos pelo MEC - Ministério
                  da Educação
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-30"></div>
              </div>
              <img
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
                alt="Selo MEC"
                className="h-8 w-auto animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Multiple animated effects */}
      <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 translate-x-full animate-[shine_4s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 animate-[slide_6s_ease-in-out_infinite]"></div>
    </div>
  );
};
