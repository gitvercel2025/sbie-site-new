import { useEffect, useState, useRef } from "react";

interface StatCardProps {
  number: string;
  label: string;
  delay: number;
  index: number;
}

const StatCard = ({ number, label, delay, index }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("0");
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumber();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumber = () => {
    const numericPart = number.replace(/[^0-9]/g, '');
    const prefix = number.replace(/[0-9]/g, '');
    const targetNumber = parseInt(numericPart);

    // If there's no numeric part (like "FGV"), just show the original text
    if (isNaN(targetNumber) || numericPart === '') {
      setCurrentNumber(number);
      return;
    }

    let current = 0;
    const increment = targetNumber / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCurrentNumber(number);
        clearInterval(timer);
      } else {
        setCurrentNumber(prefix + Math.floor(current).toString());
      }
    }, 50);
  };

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-sbie-bronze/10 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white/90 group-hover:border-sbie-bronze/30">
        {/* Icon Background */}
        <div className="w-20 h-20 bg-gradient-to-br from-sbie-bronze to-sbie-bronze/70 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
          {index === 0 && (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {index === 1 && (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )}
          {index === 2 && (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )}
          {index === 3 && (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )}
        </div>

        {/* Number */}
        <div className="mb-4">
          <span className="text-5xl sm:text-6xl font-bold text-sbie-dark-green block leading-none">
            {currentNumber}
          </span>
        </div>

        {/* Label */}
        <p className="text-lg sm:text-xl font-semibold text-sbie-forest-green">
          {label}
        </p>

        {/* Decorative line */}
        <div className="w-16 h-1 bg-gradient-to-r from-sbie-bronze to-sbie-sage mx-auto mt-4 rounded-full transform group-hover:scale-x-125 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

export const Statistics = () => {
  const stats = [
    { number: "26+", label: "Anos de Experiência" },
    { number: "200k+", label: "Vidas Transformadas" },
    { number: "4", label: "Best-Sellers Publicados" },
    { number: "FGV", label: "Professor MBA C-Levels" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sbie-beige/30 via-white to-sbie-sage/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#B66D38,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sbie-dark-green mb-6">
            Resultados que{" "}
            <span className="text-sbie-bronze relative">
              falam por si
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/30 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-sbie-forest-green max-w-3xl mx-auto">
            Números que comprovam o impacto transformador da metodologia SBIE
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              delay={index * 200}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-16 space-x-4">
          <div className="w-3 h-3 bg-sbie-bronze rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-sbie-sage rounded-full animate-pulse delay-300"></div>
          <div className="w-3 h-3 bg-sbie-bronze rounded-full animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 left-10 w-6 h-6 bg-sbie-bronze/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-16 w-8 h-8 bg-sbie-sage/20 rounded-full animate-float delay-1000"></div>
    </section>
  );
};
