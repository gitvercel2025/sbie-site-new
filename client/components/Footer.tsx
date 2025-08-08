import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Star,
  Shield,
  Award,
} from "lucide-react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/sbie.oficial",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/sbie.oficial/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/school/sbie/",
      label: "LinkedIn",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://www.youtube.com/sbiemocional",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Nossa Metodologia", href: "/metodologia" },
    { label: "Rodrigo Fonseca", href: "/rodrigo-fonseca" },
    { label: "Blog", href: "/blog" },
    { label: "Imprensa", href: "/imprensa" },
    { label: "Contato", href: "/contato" },
  ];

  const trainings = [
    { label: "LOTUS Inteligência Emocional", href: "/lotus-ie" },
    { label: "LOTUS Legado", href: "/lotus-legado" },
    { label: "Formação em Inteligência Emocional", href: "/formacao-ie" },
    { label: "Formação Master", href: "/formacao-master" },
    { label: "SBIE Business", href: "/sbie-business" },
    { label: "Embaixadores do Bem", href: "/embaixadores" },
  ];

  const onlineServices = [
    { label: "SBIE Academy", href: "/academy" },
    { label: "SBIE Care", href: "/care" },
    { label: "Academia Emocional", href: "/academia-emocional" },
    { label: "Gerando com Amor", href: "/gerando-amor" },
    { label: "Almas Gêmeas", href: "/almas-gemeas" },
    { label: "Livros Digitais", href: "/livros" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "contato@sbie.com.br" },
    { icon: <Phone className="w-4 h-4" />, text: "+55 11 94006-9695" },
    { icon: <MapPin className="w-4 h-4" />, text: "São Paulo, SP\nBrasil" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-sbie-dark-green to-sbie-forest-green text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200%,#889073,transparent)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <img
                src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2019/08/auto_site_logo_w.png.webp"
                alt="SBIE Logo"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-lg font-bold text-sbie-beige mb-2">
                Sociedade Brasileira de Inteligência Emocional
              </h3>
              <p className="text-sbie-beige/80 leading-relaxed">
                Transformando vidas através do desenvolvimento da inteligência
                emocional.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-sbie-beige mb-3">Siga-nos</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-sbie-beige/10 hover:bg-sbie-bronze rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-sbie-beige text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sbie-beige/80 hover:text-sbie-bronze transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trainings */}
          <div className="space-y-6">
            <h4 className="font-bold text-sbie-beige text-lg">Treinamentos</h4>
            <ul className="space-y-3">
              {trainings.map((training, index) => (
                <li key={index}>
                  <Link
                    to={training.href}
                    className="text-sbie-beige/80 hover:text-sbie-bronze transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {training.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-sbie-beige text-lg">Contato</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-sbie-bronze/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    {info.icon}
                  </div>
                  <span className="text-sbie-beige/80 text-sm leading-relaxed whitespace-pre-line">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications/Awards Section */}
        <div
          className={`border-t border-sbie-beige/20 pt-8 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            <div className="bg-sbie-beige/5 rounded-2xl p-6 border border-sbie-beige/10">
              <Star className="w-8 h-8 text-sbie-bronze mx-auto mb-3" />
              <p className="text-sbie-beige/90 font-medium">
                Avaliação 5 estrelas
              </p>
              <p className="text-sbie-beige/70 text-sm">Google Reviews</p>
            </div>
            <div className="bg-sbie-beige/5 rounded-2xl p-6 border border-sbie-beige/10">
              <Shield className="w-8 h-8 text-sbie-bronze mx-auto mb-3" />
              <p className="text-sbie-beige/90 font-medium">
                Metodologia Certificada
              </p>
              <p className="text-sbie-beige/70 text-sm">
                International Society
              </p>
            </div>
            <div className="bg-sbie-beige/5 rounded-2xl p-6 border border-sbie-beige/10">
              <Award className="w-8 h-8 text-sbie-bronze mx-auto mb-3" />
              <p className="text-sbie-beige/90 font-medium">4 Best-Sellers</p>
              <p className="text-sbie-beige/70 text-sm">Publicados</p>
            </div>
            <div className="bg-sbie-beige/5 rounded-2xl p-6 border border-sbie-beige/10">
              <img
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
                alt="Selo MEC"
                className="w-12 h-12 mx-auto mb-3 object-contain"
              />
              <p className="text-sbie-beige/90 font-medium">
                Reconhecido pelo MEC
              </p>
              <p className="text-sbie-beige/70 text-sm">
                Ministério da Educação
              </p>
            </div>
            <div className="bg-sbie-beige/5 rounded-2xl p-6 border border-sbie-beige/10">
              <img
                src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2019/05/selo-cinza.png.webp"
                alt="Selo Google"
                className="w-12 h-12 mx-auto mb-3 object-contain"
              />
              <p className="text-sbie-beige/90 font-medium">Parceiro Google</p>
              <p className="text-sbie-beige/70 text-sm">Certificação Digital</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-sbie-beige/20 pt-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sbie-beige/80 text-sm mb-2">
                Copyright © 2025 Sbie - Todos os direitos reservados
              </p>
              <p className="text-sbie-beige/70 text-xs">
                Rua Curupá, 595 - Anália Franco - São Paulo - SP - 03355-010
              </p>
            </div>

            <div className="flex space-x-6 text-sm">
              <Link
                to="/politica-privacidade"
                className="text-sbie-beige/80 hover:text-sbie-bronze transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-uso"
                className="text-sbie-beige/80 hover:text-sbie-bronze transition-colors duration-300"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-sbie-bronze hover:bg-sbie-bronze/90 text-white rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } hover:scale-110`}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>

      {/* Floating Elements */}
      <div className="absolute top-16 left-16 w-6 h-6 bg-sbie-bronze/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-32 w-8 h-8 bg-sbie-sage/20 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-32 right-16 w-4 h-4 bg-sbie-beige/20 rounded-full animate-float delay-500"></div>
    </footer>
  );
};
