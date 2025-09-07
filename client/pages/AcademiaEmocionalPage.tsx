import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Users, Brain, Target, Star, BookOpen, Lightbulb, Phone, Mail, MapPin, MessageCircle, Send, User, ChevronLeft, ChevronRight, X, Play, Check } from 'lucide-react';

export const AcademiaEmocionalPage = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0);
  const [currentBonusIndex, setCurrentBonusIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const testimonialImages = [
    'https://lp.sbie.com.br/wp-content/uploads/2023/04/Unknown-32-768x447.jpg',
    'https://lp.sbie.com.br/wp-content/uploads/2023/04/Unknown-31-768x447.jpg',
    'https://lp.sbie.com.br/wp-content/uploads/2023/04/Unknown-38-768x447.jpg',
    'https://lp.sbie.com.br/wp-content/uploads/2023/04/Unknown-37-768x447.jpg',
    'https://lp.sbie.com.br/wp-content/uploads/2023/04/Unknown-36-768x447.jpg',
    'https://lp.sbie.com.br/wp-content/uploads/2023/04/Unknown-34-768x447.jpg',
    'https://lp.sbie.com.br/wp-content/uploads/2023/04/Unknown-33-768x447.jpg'
  ];

  // Auto-advance testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonialImages.length]);

  // Countdown timer - 3 days from first visit
  useEffect(() => {
    const getEndTime = () => {
      const stored = localStorage.getItem('countdown-end-time');
      if (stored) {
        return parseInt(stored);
      } else {
        const endTime = Date.now() + (3 * 24 * 60 * 60 * 1000); // 3 days from now
        localStorage.setItem('countdown-end-time', endTime.toString());
        return endTime;
      }
    };

    const endTime = getEndTime();

    const updateCountdown = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = () => {
    window.open('https://payment.ticto.app/OA7CF4734', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('youtu.be/')[1] || url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://i.imgur.com/hdc6RbO.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-sbie-dark-green/80 via-sbie-menu-green/70 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-sbie-bronze/30 transition-all duration-700 hover:bg-white/15 hover:border-sbie-bronze/50">
              {/* Main Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sbie-bronze via-sbie-beige to-sbie-bronze animate-pulse">
                  ACADEMIA EMOCIONAL
                </span>
              </h1>
              
              {/* Description */}
              <div className="bg-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-sbie-bronze/30">
                <p className="text-base sm:text-lg text-sbie-beige leading-relaxed">
                  Dê um basta na vida frustrada que você vive hoje! Aprenda como desenvolver o seu potencial máximo, para viver tudo aquilo que você já sabe na teoria, mas não consegue viver na Prática.
                </p>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={handleCTAClick}
                className="group relative w-full bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>QUERO VIVER NA PRÁTICA O QUE JÁ SEI NA TEORIA</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </button>
            </div>

            {/* Right Side - Video Player */}
            <div className="space-y-6">
              {/* Academia Image */}
              <div className="text-center">
                <img
                  src="https://lp.sbie.com.br/wp-content/uploads/2023/04/academia.png"
                  alt="Academia Emocional"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Video Player */}
              <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-6 border border-sbie-bronze/30">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src={getYouTubeEmbedUrl('https://youtu.be/jau89aSnzAk')}
                    title="Academia Emocional - Rodrigo Fonseca"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-sbie-dark-green mb-6">
              Entre para a <span className="text-sbie-bronze">Academia Emocional</span> e…
            </h2>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105 hover:shadow-sbie-bronze/20">
              <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-lg font-semibold text-center leading-relaxed">
                Aprenda como se tornar sua melhor versão.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105 hover:shadow-sbie-bronze/20">
              <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-lg font-semibold text-center leading-relaxed">
                Vença as travas emocionais que fazem o dinheiro fugir de você.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105 hover:shadow-sbie-bronze/20">
              <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-lg font-semibold text-center leading-relaxed">
                Passe a ter relacionamentos saudáveis e duradouros.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105 hover:shadow-sbie-bronze/20">
              <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-lg font-semibold text-center leading-relaxed">
                Seja motivo de alegria para as pessoas que você mais ama.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105 hover:shadow-sbie-bronze/20">
              <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-lg font-semibold text-center leading-relaxed">
                Conquiste a carreira que sempre quis ter.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105 hover:shadow-sbie-bronze/20">
              <div className="w-16 h-16 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-lg font-semibold text-center leading-relaxed">
                Domine suas emoções para alcançar objetivos cada vez mais ambiciosos.
              </p>
            </div>
          </div>

          {/* Final Message Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-sbie-bronze via-sbie-beige to-sbie-bronze rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <p className="text-white text-xl sm:text-2xl font-bold leading-relaxed">
                É hora de você usar o recurso mais poderoso que existe dentro de você para ser um imã de realizações em todas as áreas da vida: <span className="text-white font-black">Suas emoções</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section after Benefits */}
      <section className="py-24 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('transformation-areas');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative w-full max-w-2xl mx-auto bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-8 py-6 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50"
          >
            <span className="flex items-center justify-center space-x-3">
              <span>QUERO USAR MINHAS EMOÇÕES PARA REALIZAÇÃO</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </button>
        </div>
      </section>

      {/* Celebrity Testimonials Video Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-sbie-dark-green mb-6">
              Ouça com atenção o que <span className="text-sbie-bronze">eles têm a dizer:</span>
            </h2>
          </div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Juliana Paes */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-black rounded-2xl mb-4 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/ysF7fk1pjeQ"
                  title="Juliana Paes - Experiência LOTUS"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold text-sbie-dark-green text-center">Juliana Paes</h3>
            </div>

            {/* Wolf Maya */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-black rounded-2xl mb-4 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/ENhzSaMsOQI"
                  title="Wolf Maya - Experiência LOTUS"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold text-sbie-dark-green text-center">Wolf Maya</h3>
            </div>

            {/* Chris Flores */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-black rounded-2xl mb-4 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dKBKJjxy2J4"
                  title="Chris Flores - Experiência LOTUS"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold text-sbie-dark-green text-center">Chris Flores</h3>
            </div>

            {/* Scheila Carvalho */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-black rounded-2xl mb-4 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/a9o4wfPvndI"
                  title="Scheila Carvalho - Experiência LOTUS"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold text-sbie-dark-green text-center">Scheila Carvalho</h3>
            </div>

            {/* Fafá de Belém */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-black rounded-2xl mb-4 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/MAnp-y73GSE"
                  title="Fafá de Belém - Experiência LOTUS"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold text-sbie-dark-green text-center">Fafá de Belém</h3>
            </div>

            {/* Catia Fonseca */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-black rounded-2xl mb-4 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/5gCzTc34VVo"
                  title="Catia Fonseca - Experiência LOTUS"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold text-sbie-dark-green text-center">Catia Fonseca</h3>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              className="group relative inline-block bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50 animate-pulse"
              href="https://payment.ticto.app/OA7CF4734"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>QUERO SER MINHA MELHOR VERSÃO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </a>
          </div>
        </div>
      </section>

      {/* Transformation Areas Section - Slideshow */}
      <section id="transformation-areas" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-sbie-dark-green mb-6">
              O método da <span className="text-sbie-bronze">Academia Emocional</span> foi desenvolvido para transformar <span className="text-sbie-bronze">todas as áreas</span> da sua vida:
            </h2>
          </div>
          
          {/* Areas Slideshow */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentAreaIndex * 100}%)` }}
              >
                {/* Familiar */}
                <div className="w-full flex-shrink-0 bg-white">
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                      <img
                        src="https://lp.sbie.com.br/wp-content/uploads/2023/04/familia.jpg"
                        alt="Familiar"
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
                      <h3 className="text-4xl font-black text-sbie-bronze mb-6">Familiar</h3>
                      <p className="text-xl text-sbie-dark-green leading-relaxed">
                        Onde você será o marido, esposa, mamãe, papai, filho, irmão que a sua família merece.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pessoal */}
                <div className="w-full flex-shrink-0 bg-white">
                  <div className="flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2">
                      <img
                        src="https://lp.sbie.com.br/wp-content/uploads/2023/04/pessoa.jpg"
                        alt="Pessoal"
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
                      <h3 className="text-4xl font-black text-sbie-bronze mb-6">Pessoal</h3>
                      <p className="text-xl text-sbie-dark-green leading-relaxed">
                        Onde você se tornará a sua melhor companhia e terá orgulho de quem você é.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profissional */}
                <div className="w-full flex-shrink-0 bg-white">
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                      <img
                        src="https://lp.sbie.com.br/wp-content/uploads/2023/04/shake-hand.jpg"
                        alt="Profissional"
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
                      <h3 className="text-4xl font-black text-sbie-bronze mb-6">Profissional</h3>
                      <p className="text-xl text-sbie-dark-green leading-relaxed">
                        Onde seus maiores objetivos de carreira serão alcançados.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Financeira */}
                <div className="w-full flex-shrink-0 bg-white">
                  <div className="flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2">
                      <img
                        src="https://lp.sbie.com.br/wp-content/uploads/2023/04/travel.jpg"
                        alt="Financeira"
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
                      <h3 className="text-4xl font-black text-sbie-bronze mb-6">Financeira</h3>
                      <p className="text-xl text-sbie-dark-green leading-relaxed">
                        Onde a prosperidade irá fazer parte do seu dia a dia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentAreaIndex(prev => 
                prev === 0 ? 3 : prev - 1
              )}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-sbie-dark-green p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentAreaIndex(prev => 
                prev === 3 ? 0 : prev + 1
              )}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-sbie-dark-green p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAreaIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentAreaIndex 
                      ? 'bg-sbie-bronze scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Cards Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-sbie-dark-green mb-6">
              E por isso, ele:
            </h2>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">É o portal de</h3>
                <h4 className="text-xl font-black text-sbie-bronze mb-4">Inteligência Emocional</h4>
                <h5 className="text-lg font-semibold text-white mb-6">mais completo do Brasil!</h5>
                <p className="text-white leading-relaxed">
                  Você vai ter acesso ao conteúdo teórico e prático para fazer uma viagem dentro de você e passar a controlar a sua própria vida.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-sbie-bronze via-sbie-beige to-sbie-bronze rounded-3xl p-8 shadow-2xl border border-sbie-dark-green/20 hover:border-sbie-dark-green/40 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sbie-dark-green to-sbie-menu-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Gera transformação</h3>
                <h4 className="text-xl font-black text-white mb-4">desde a primeira aula</h4>
                <p className="text-white leading-relaxed">
                  A cada aula sua mente passará por uma expansão. É uma vez que sua mente expandir, ela não voltará atrás. Você definitivamente vai sair com algum tipo de mudança genuína e permanente.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Button */}
          <div className="text-center">
            <button
              onClick={() => {
                const element = document.getElementById('transformation-areas');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>QUERO SER A MINHA MELHOR VERSÃO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-sbie-bronze/30 text-center">
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed">
                A resposta que você busca para os seus maiores problemas, está dentro de você.
              </p>
              <p className="text-lg sm:text-xl text-sbie-beige">
                Mas só há uma forma de fazer esse mergulho para encontrá-la:
              </p>
              <div className="bg-sbie-bronze/20 rounded-2xl p-6 border border-sbie-bronze/30">
                <p className="text-2xl sm:text-3xl font-black text-sbie-bronze mb-4">
                  Repetição e forte impacto emocional
                </p>
                <p className="text-lg sm:text-xl text-white">
                  E na Academia Emocional, você passará por esses dois pilares.
                </p>
              </div>
              
              {/* CTA Button */}
              <a
                href="https://payment.ticto.app/OA7CF4734"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50 mt-8 animate-pulse"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>QUERO DESCOBRIR MINHAS RESPOSTAS</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Academia Emocional Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Com a <span className="text-sbie-bronze">Academia Emocional</span>, você vai:
            </h2>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 shadow-2xl border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    Trabalhar seu autoconhecimento para alcançar o sentimento de realização em todos os âmbitos da sua vida.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
             <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 shadow-2xl border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <Check className="w-5 h-5 text-white" />
                   </div>
                 </div>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    Desenvolver habilidades de comunicação interpessoal, profissional e liderança para uma melhor performance na sua carreira.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
             <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 shadow-2xl border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <Check className="w-5 h-5 text-white" />
                   </div>
                 </div>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    Despertar o seu potencial de fazer dinheiro e atingir a sua liberdade financeira.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
             <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 shadow-2xl border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <Check className="w-5 h-5 text-white" />
                   </div>
                 </div>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    Revelar o potencial que existe dentro de você e como você pode utilizá-lo a seu favor para se tornar sua melhor versão.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 5 */}
             <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 shadow-2xl border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <Check className="w-5 h-5 text-white" />
                   </div>
                 </div>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    Desbloquear sua saúde física e mental para atingir o corpo que você sonha e a mentalidade que levará você a outro nível.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 6 */}
             <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 shadow-2xl border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <Check className="w-5 h-5 text-white" />
                   </div>
                 </div>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    Eliminar padrões comportamentais destrutivos e assumir o protagonismo da sua vida.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 7 */}
             <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 shadow-2xl border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <Check className="w-5 h-5 text-white" />
                   </div>
                 </div>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    Sair da inércia e garantir que você alcance os seus sonhos e atinja todos os seus objetivos de vida.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 8 */}
             <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 shadow-2xl border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <Check className="w-5 h-5 text-white" />
                   </div>
                 </div>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    Melhorar todas as suas relações com técnicas e ferramentas comprovadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodrigo Fonseca Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl sm:text-5xl font-black text-sbie-dark-green mb-6">
                Conheça o criador da <span className="text-sbie-bronze">Academia Emocional:</span>
              </h2>
              <h3 className="text-2xl font-bold text-sbie-bronze mb-6">
                Muito prazer, eu sou o Rodrigo Fonseca!
              </h3>
              <p className="text-lg text-sbie-dark-green leading-relaxed mb-8">
                Como Presidente da Sociedade Brasileira de Inteligência Emocional e o maior Mentor em Inteligência Emocional do Brasil, eu NUNCA parei de buscar crescimento pessoal.
              </p>
              <p className="text-lg text-sbie-dark-green leading-relaxed mb-8">
                São 27 anos de estudos, pesquisas, artigos científicos, aprimoramentos e cursos em busca de dominar cada vez mais a mente e o comportamento humano e mais de 200 mil pessoas transformadas.
              </p>
              <div className="mb-8">
                <img
                  src="https://lp.sbie.com.br/wp-content/uploads/2023/04/icones1-midia-768x47.png"
                  alt="Mídias e Reconhecimentos"
                  className="w-full max-w-md"
                />
              </div>
            </div>
            
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://i.imgur.com/VAXsvZY.jpg"
                  alt="Rodrigo Fonseca"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sbie-bronze/20 to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos-section" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-sbie-dark-green mb-6">
              <span className="text-sbie-bronze">Depoimentos</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Card */}
            <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 sm:p-12 shadow-2xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-white space-y-6">
                <h3 className="text-2xl sm:text-3xl font-black text-sbie-bronze mb-6">
                  Transformações Reais
                </h3>
                <p className="text-lg sm:text-xl leading-relaxed">
                  Olha só o que aconteceu com eles depois de dominar a Inteligência Emocional…
                </p>
                <div className="bg-sbie-bronze/20 rounded-2xl p-6 border border-sbie-bronze/30">
                  <p className="text-sbie-beige font-semibold">
                    Pessoas reais, transformações reais, resultados que você também pode alcançar.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-1000 ease-in-out" 
                  style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
                >
                  {testimonialImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={image}
                        alt={`Depoimento ${index + 1}`}
                        className="w-full h-80 sm:h-96 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonialImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonialIndex ? 'bg-sbie-bronze scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play indicator */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Carrossel automático • {currentTestimonialIndex + 1} de {testimonialImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caixa de texto moderna com CTA */}
      <section className="py-16 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              E agora é a sua vez.
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Com a Academia Emocional, você terá a chave para buscar na sua origem a transformação que você precisa ter hoje.
            </p>
            <p className="text-lg text-white/90 mb-8">
              Se você aceita a minha ajuda para passar a ter controle total da sua vida, clique aqui:
            </p>
            <a 
              href="https://payment.ticto.app/OA7CF4734"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              QUERO
            </a>
          </div>
        </div>
      </section>

      {/* Seção das 6 trilhas da Academia Emocional */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-sbie-dark-green/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            A Academia Emocional é dividida em 6 trilhas:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Autoconhecimento */}
            <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="aspect-video relative">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://i.imgur.com/hhE3m9S.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Autoconhecimento
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Onde você entenderá porque você vive repetindo padrões que atrapalham a realização dos seus maiores sonhos.
                </p>
              </div>
            </div>

            {/* Card 2 - Autodesenvolvimento */}
            <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="aspect-video relative">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://i.imgur.com/XHwlXis.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Autodesenvolvimento
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Aqui você finalmente aprenderá a ter controle da sua própria evolução.
                </p>
              </div>
            </div>

            {/* Card 3 - Equilibrando sua vida */}
             <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
               <div className="aspect-video relative">
                 <video 
                   className="w-full h-full object-cover"
                   autoPlay
                   loop
                   muted
                   playsInline
                 >
                   <source src="https://i.imgur.com/EKp6zNS.mp4" type="video/mp4" />
                 </video>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-bold text-white mb-3">
                   Equilibrando sua vida
                 </h3>
                 <p className="text-gray-300 text-sm leading-relaxed">
                   Nessa trilha você entenderá como dar conta de todas as áreas da sua vida para alcançar a felicidade que tanto deseja.
                 </p>
               </div>
             </div>

             {/* Card 4 - Inteligência Profissional */}
             <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
               <div className="aspect-video relative">
                 <video 
                   className="w-full h-full object-cover"
                   autoPlay
                   loop
                   muted
                   playsInline
                 >
                   <source src="https://i.imgur.com/OYrLQgv.mp4" type="video/mp4" />
                 </video>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-bold text-white mb-3">
                   Inteligência Profissional
                 </h3>
                 <p className="text-gray-300 text-sm leading-relaxed">
                   Aqui você aprenderá a usar as emoções para alcançar seus maiores objetivos profissionais.
                 </p>
               </div>
             </div>

             {/* Card 5 - Inteligência Financeira */}
             <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
               <div className="aspect-video relative">
                 <video 
                   className="w-full h-full object-cover"
                   autoPlay
                   loop
                   muted
                   playsInline
                 >
                   <source src="https://i.imgur.com/dmjpRLc.mp4" type="video/mp4" />
                 </video>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-bold text-white mb-3">
                   Inteligência Financeira
                 </h3>
                 <p className="text-gray-300 text-sm leading-relaxed">
                   Onde você aprenderá a fazer com que o dinheiro seja o seu servo e não mais o seu senhor.
                 </p>
               </div>
             </div>

             {/* Card 6 - Escola de Pais */}
             <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
               <div className="aspect-video relative">
                 <video 
                   className="w-full h-full object-cover"
                   autoPlay
                   loop
                   muted
                   playsInline
                 >
                   <source src="https://i.imgur.com/XFhVz3q.mp4" type="video/mp4" />
                 </video>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-bold text-white mb-3">
                   Escola de Pais
                 </h3>
                 <p className="text-gray-300 text-sm leading-relaxed">
                   Nessa trilha você aprenderá como criar filhos felizes e realizados.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Seção Aulões Práticos */}
        <section className="py-16 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-white mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Aulões Práticos
                </h2>
              </div>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Aqui você terá mais de 100 Aulões exclusivos para desenvolver a sua Inteligência Emocional na prática.
              </p>
              <a 
                href="https://payment.ticto.app/OA7CF4734"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
              >
                QUERO SER A MINHA MELHOR VERSÃO
              </a>
            </div>
          </div>
        </section>

        {/* Seção de Bônus */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-sbie-dark-green/30 to-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Entrando HOJE para a Academia Emocional, você ainda leva de BÔNUS:
            </h2>
            
            <div className="relative">
              {/* Slideshow Container */}
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentBonusIndex * 100}%)`}}>
                  
                  {/* Bônus 1 */}
                  <div className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-r from-sbie-dark-green/80 to-sbie-forest-green/80 rounded-2xl p-8 md:p-12 min-h-[700px] flex items-center">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                           <img 
                              src="https://lp.sbie.com.br/wp-content/uploads/2023/04/woman1.jpg" 
                              alt="Conferência Mães e Mulheres" 
                              className="w-full max-w-sm mx-auto h-96 md:h-[500px] object-cover rounded-lg shadow-lg" 
                              style={{aspectRatio: '9/16'}}
                            />
                         </div>
                        <div className="lg:w-1/2 text-center lg:text-left">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            BÔNUS 1 Conferência Mães e Mulheres
                          </h3>
                          <p className="text-lg text-white/90 mb-6">
                            Sequência de 7 encontros especiais feitos na semana das mães.
                          </p>
                          <div className="flex items-center justify-center lg:justify-start gap-4">
                            <span className="text-lg text-white/70 line-through">
                              DE: R$ 197,00
                            </span>
                            <div className="relative">
                              <span className="text-3xl font-bold text-green-400 bg-green-400/20 px-4 py-2 rounded-full border-2 border-green-400 animate-pulse">
                                POR: R$ 0,00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bônus 2 */}
                   <div className="w-full flex-shrink-0">
                     <div className="bg-gradient-to-r from-sbie-dark-green/80 to-sbie-forest-green/80 rounded-2xl p-8 md:p-12 min-h-[700px] flex items-center">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                           <img 
                              src="https://lp.sbie.com.br/wp-content/uploads/2023/04/assistindo.jpg" 
                              alt="Lives com Convidados Especiais" 
                              className="w-full max-w-sm mx-auto h-96 md:h-[500px] object-cover rounded-lg shadow-lg" 
                              style={{aspectRatio: '9/16'}}
                            />
                         </div>
                        <div className="lg:w-1/2 text-center lg:text-left">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            BÔNUS 2 Lives com Convidados Especiais
                          </h3>
                          <p className="text-lg text-white/90 mb-6">
                            Assista a entrevistas exclusivas com Mayra Cardi, Brisa Dantas, Elainne Ourives, Roberto Navarro, entre outros.
                          </p>
                          <div className="flex items-center justify-center lg:justify-start gap-4">
                            <span className="text-lg text-white/70 line-through">
                              DE: R$ 297,00
                            </span>
                            <div className="relative">
                              <span className="text-3xl font-bold text-green-400 bg-green-400/20 px-4 py-2 rounded-full border-2 border-green-400 animate-pulse">
                                POR: R$ 0,00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bônus 3 */}
                   <div className="w-full flex-shrink-0">
                     <div className="bg-gradient-to-r from-sbie-dark-green/80 to-sbie-forest-green/80 rounded-2xl p-8 md:p-12 min-h-[500px] flex items-center">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                           <img 
                             src="https://lp.sbie.com.br/wp-content/uploads/2023/04/rodrigo.jpg" 
                             alt="Faça Acontecer 2.0" 
                             className="w-full max-w-sm mx-auto h-96 md:h-[500px] object-cover rounded-lg shadow-lg" 
                             style={{aspectRatio: '9/16'}}
                           />
                         </div>
                        <div className="lg:w-1/2 text-center lg:text-left">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            BÔNUS 3 Faça Acontecer 2.0
                          </h3>
                          <p className="text-lg text-white/90 mb-6">
                            Todas as gravações e atualizações do meu Programa semanal "Faça Acontecer 2.0"
                          </p>
                          <div className="flex items-center justify-center lg:justify-start gap-4">
                            <span className="text-lg text-white/70 line-through">
                              DE: R$ 197,00
                            </span>
                            <div className="relative">
                              <span className="text-3xl font-bold text-green-400 bg-green-400/20 px-4 py-2 rounded-full border-2 border-green-400 animate-pulse">
                                POR: R$ 0,00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={() => setCurrentBonusIndex(currentBonusIndex === 0 ? 2 : currentBonusIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setCurrentBonusIndex(currentBonusIndex === 2 ? 0 : currentBonusIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBonusIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentBonusIndex === index 
                        ? 'bg-green-400 scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção Quanto você acha que vale tudo isso */}
        <section id="pricing-section" className="py-16 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-sbie-bronze px-6 py-3 rounded-lg inline-block shadow-2xl">
                Quanto você acha que vale tudo isso?
              </h2>
              <p className="text-lg text-white mb-4">
                A verdade, é que tudo o que eu entreguei aqui, vale pelo menos 
                <span className="text-sbie-beige font-bold text-xl bg-red-600/20 px-2 py-1 rounded"> R$ 2.500,00</span>
              </p>
              <p className="text-lg text-white">
                Só que eu tenho uma missão pessoal de ajudar o maior número de pessoas possível. E por isso, eu consegui fazer com que a Academia Emocional custasse 
                <span className="text-sbie-bronze font-bold text-xl bg-green-600/20 px-2 py-1 rounded"> R$ 598,00.</span>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Mockup da Academia Emocional */}
              <div className="lg:w-1/2 relative">
                <div className="relative group cursor-pointer">
                  <img 
                    src="https://lp.sbie.com.br/wp-content/uploads/2023/04/mockpf-s73-eve-set-14-mockup-768x438.png" 
                    alt="Academia Emocional Mockup" 
                    className="w-full h-auto rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl border-2 border-sbie-bronze/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sbie-bronze/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-white font-medium">
                    Mas apenas HOJE e apenas NESTA PÁGINA, você pode acessar tudo isso com condição especial
                  </p>
                  <p className="text-sbie-beige font-bold mt-2">
                    Isso significa que nesse exato momento você tem a chance de acessar a
                  </p>
                  <p className="text-sbie-bronze font-bold text-lg">
                    Academia Emocional Por APENAS:
                  </p>
                </div>
              </div>

              {/* Card de Preço */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-sbie-bronze via-sbie-beige to-sbie-bronze rounded-3xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="mb-6">
                    <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-sbie-bronze/50 mb-4 shadow-2xl">
                      <div className="text-6xl md:text-7xl font-black mb-2 text-sbie-bronze drop-shadow-2xl">
                        R$ 39,96
                        <span className="text-3xl font-normal text-white"> /mês</span>
                      </div>
                      <div className="text-lg font-bold text-white bg-green-600/20 px-4 py-2 rounded-full inline-block">
                        em 12x sem juros no cartão
                      </div>
                    </div>
                    <div className="text-sm opacity-90 text-center">
                      💳 Ou à vista com desconto especial
                    </div>
                  </div>
                  
                  <a 
                    href="https://payment.ticto.app/OA7CF4734"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block bg-gradient-to-r from-sbie-dark-green to-sbie-forest-green text-white font-bold py-4 px-8 rounded-full text-lg hover:from-sbie-forest-green hover:to-sbie-dark-green transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mb-4 animate-pulse"
                  >
                    QUERO SER MINHA MELHOR VERSÃO
                  </a>
                  
                  <div className="text-sm opacity-90 mb-4">
                    Acesso imediato • Garantia de 7 dias
                  </div>
                  
                  {/* Imagem dos cartões */}
                  <div className="mt-4">
                    <img 
                      src="https://lp.sbie.com.br/wp-content/uploads/2023/04/cartoes2-768x41.png" 
                      alt="Formas de Pagamento" 
                      className="w-full max-w-xs mx-auto opacity-90"
                    />
                  </div>
                </div>

                {/* Benefícios adicionais */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-sbie-bronze rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Acesso vitalício ao conteúdo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-sbie-bronze rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Suporte especializado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-sbie-bronze rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Certificado de conclusão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Urgência com Rodrigo */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Foto do Rodrigo */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                  <img 
                    src="https://i.imgur.com/dBT9Ltf.jpg" 
                    alt="Rodrigo Fonseca" 
                    className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-sbie-bronze/50 transform hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Card de Urgência */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 shadow-2xl border border-sbie-bronze/30">
                  <div className="text-white space-y-6">
                    <p className="text-lg leading-relaxed">
                      Só que essa oportunidade <span className="text-sbie-bronze font-bold">NÃO vai ficar no ar por muito tempo.</span>
                    </p>
                    <p className="text-lg leading-relaxed">
                      Pode ser que ao sair desta página, você nunca mais consiga acessar essa condição especial.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Por isso, se você realmente está comprometido com a sua transformação de vida por meio da Inteligência Emocional, <span className="text-sbie-beige font-bold">não deixe essa chance passar!</span>
                    </p>
                    <p className="text-xl font-bold text-sbie-bronze text-center">
                      Clique aqui para viver o melhor que puder em todas as áreas:
                    </p>
                    
                    <div className="text-center pt-4">
                      <a 
                        href="https://payment.ticto.app/OA7CF4734"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-sbie-bronze/50 animate-pulse"
                      >
                        QUERO SER MINHA MELHOR VERSÃO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Garantia Incondicional */}
        <section className="py-16 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-sbie-bronze/30 text-center">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  É importante que você saiba que o seu risco ao entrar para a Academia Emocional, é <span className="text-sbie-bronze">ZERO!</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-sbie-bronze mb-6">
                  Na verdade, o seu ÚNICO risco é o DE FICAR DE FORA.
                </h3>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
                <div className="lg:w-1/3 flex justify-center lg:justify-start">
                  <img 
                    src="https://i.imgur.com/KN5lano.png" 
                    alt="Selo de Garantia" 
                    className="w-full max-w-xs transform hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="lg:w-2/3 space-y-6 text-white text-lg leading-relaxed text-center lg:text-left">
                  <p className="leading-7">
                    Isso porque você tem 7 dias de garantia para acessar tudo e ver se o que eu tenho para te ensinar, realmente supera as suas expectativas.
                  </p>
                  <p className="leading-7">
                    Se depois de 7 dias, mesmo ao aplicar o passo a passo você não tiver transformação, é só nos contactar e que devolveremos o valor integral para você!
                  </p>
                  <p className="font-bold text-sbie-beige leading-7">
                    Não deixe que nada te impeça de realmente mudar a sua realidade hoje.
                  </p>
                </div>
              </div>
              
              <a 
                href="https://payment.ticto.app/OA7CF4734"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white font-bold py-4 px-8 rounded-full text-xl transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-sbie-bronze/50 animate-pulse"
              >
                QUERO SER MINHA MELHOR VERSÃO
              </a>
            </div>
          </div>
        </section>

        {/* Seção de Vídeos */}
        <section className="py-24 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Mais de 200 mil pessoas já foram transformadas pela Inteligência Emocional…
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Vídeo 1 */}
              <div className="bg-sbie-dark-green/50 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-300">
                <div className="relative aspect-video mb-4 rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/zm84PP07U_o"
                    title="Vídeo 1"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              {/* Vídeo 2 */}
              <div className="bg-sbie-dark-green/50 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-300">
                <div className="relative aspect-video mb-4 rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/n78GEIt6q60"
                    title="Vídeo 2"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              {/* Vídeo 3 */}
              <div className="bg-sbie-dark-green/50 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-300">
                <div className="relative aspect-video mb-4 rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/dAR1PQESUoY"
                    title="Vídeo 3"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Final com Contador */}
        <section className="py-24 bg-gradient-to-br from-sbie-bronze via-sbie-beige to-sbie-bronze relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-sbie-dark-green/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-sbie-bronze/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Agora é a sua vez.
              </h2>
              
              <div className="bg-sbie-dark-green/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-sbie-bronze/40">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Você tem pouco tempo antes que essa oportunidade saia do ar...
                </h3>
                
                <div className="flex justify-center items-center gap-4 mb-6">
                    <div className="bg-sbie-dark-green/80 rounded-xl p-4 min-w-[80px] border border-sbie-bronze/30">
                      <div className="text-2xl md:text-3xl font-bold text-sbie-bronze">{String(timeLeft.days).padStart(2, '0')}</div>
                      <div className="text-sm text-sbie-beige">Dias</div>
                    </div>
                    <div className="bg-sbie-dark-green/80 rounded-xl p-4 min-w-[80px] border border-sbie-bronze/30">
                      <div className="text-2xl md:text-3xl font-bold text-sbie-bronze">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-sm text-sbie-beige">Horas</div>
                    </div>
                    <div className="bg-sbie-dark-green/80 rounded-xl p-4 min-w-[80px] border border-sbie-bronze/30">
                      <div className="text-2xl md:text-3xl font-bold text-sbie-bronze">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-sm text-sbie-beige">Minutos</div>
                    </div>
                    <div className="bg-sbie-dark-green/80 rounded-xl p-4 min-w-[80px] border border-sbie-bronze/30">
                      <div className="text-2xl md:text-3xl font-bold text-sbie-bronze">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-sm text-sbie-beige">Segundos</div>
                    </div>
                  </div>
               </div>
               
               <a
                 href="https://payment.ticto.app/OA7CF4734"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block bg-gradient-to-r from-sbie-dark-green to-sbie-forest-green hover:from-sbie-forest-green hover:to-sbie-dark-green text-white font-bold py-4 px-8 rounded-full text-xl transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-sbie-bronze/50 animate-pulse border-2 border-sbie-bronze/30"
               >
                 QUERO SER MINHA MELHOR VERSÃO
               </a>
            </div>
          </div>
        </section>
    </div>
  );
};