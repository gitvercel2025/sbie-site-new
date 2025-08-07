import { useState, useEffect } from "react";
import { X, Award } from "lucide-react";

export const MECBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`bg-gradient-to-r from-sbie-bronze to-sbie-bronze/90 text-white py-3 px-4 relative overflow-hidden transition-all duration-500 ${
      isAnimated ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      {/* Background Pattern */}
      <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center space-x-4">
          {/* Icon with animation */}
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Award className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" 
                alt="Selo MEC" 
                className="h-6 w-auto"
              />
              <span className="font-semibold text-sm sm:text-base">
                🎓 Nossos treinamentos são reconhecidos pelo MEC - Ministério da Educação
              </span>
              <img 
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" 
                alt="Selo MEC" 
                className="h-6 w-auto"
              />
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Fechar aviso"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Animated shine effect */}
      <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 translate-x-full animate-[shine_3s_ease-in-out_infinite]"></div>
    </div>
  );
};
