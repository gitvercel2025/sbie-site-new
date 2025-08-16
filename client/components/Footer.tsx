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

// Adicionar ícone do TikTok
const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

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
    {
      icon: <TikTokIcon />,
      href: "https://www.tiktok.com/@sbie.oficial",
      label: "TikTok",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/sbie.oficial",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { label: "Quem Somos", href: "https://www.sbie.com.br/conheca-a-sbie/" },
    { label: "Nossa Metodologia", href: "https://www.sbie.com.br/nossa-metodologia/" },
    { label: "Rodrigo Fonseca", href: "https://rodrigofonsecaie.com.br/" },
    { label: "Blog", href: "/blog" },
    { label: "Imprensa", href: "/imprensa" },
    { label: "Contato", href: "/contato" },
  ];

  const trainings = [
    { label: "LOTUS Inteligência Emocional", href: "https://lp.sbie.com.br/lotus/?utm_source=sitesbie&utm_medium=menu&utm_campaign=lotus" },
    { label: "LOTUS Legado", href: "https://lp.sbie.com.br/lotus-legado/?utm_source=sitesbie&utm_medium=menu&utm_campaign=lotus-legado" },
    { label: "Formação em Inteligência Emocional", href: "https://lp.sbie.com.br/formacao/?utm_source=sitesbie&utm_medium=menu&utm_campaign=formacao" },
    { label: "Formação Master", href: "https://lp.sbie.com.br/formacao-master-oportunidade-unica/?utm_source=sitesbie&utm_medium=menu&utm_campaign=formacao-master" },
    { label: "Academia Emocional", href: "https://lp.sbie.com.br/academia-emocional/?utm_source=bio-sbie&utm_medium=banner&utm_campaign=academia" },
    { label: "SBIE Business", href: "https://lp.sbie.com.br/business/?utm_source=sitesbie&utm_medium=menu&utm_campaign=business" },
    { label: "Embaixadores do Bem", href: "https://lp.sbie.com.br/embaixadores-do-bem/?utm_source=sitesbie&utm_medium=menu&utm_campaign=embaixadores" },
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
    { icon: <Phone className="w-4 h-4" />, text: "+55 11 2985-5949" },
    { icon: <Instagram className="w-4 h-4" />, text: "@rodrigofonsecaie", href: "https://www.instagram.com/rodrigofonsecaie/" },
    { icon: <Instagram className="w-4 h-4" />, text: "@sbie.oficial", href: "https://www.instagram.com/sbie.oficial/" },
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
              <div className="inline-block transition-transform duration-300 hover:scale-110">
                <img
                  src="https://i.imgur.com/t5ySutR.png"
                  alt="SBIE Logo"
                  className="h-24 w-auto mb-4 transition-all duration-300 brightness-125 contrast-110"
                />
              </div>
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
                  {info.href ? (
                    <a 
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sbie-beige/80 text-sm leading-relaxed whitespace-pre-line hover:text-sbie-bronze transition-colors duration-300"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-sbie-beige/80 text-sm leading-relaxed whitespace-pre-line">
                      {info.text}
                    </span>
                  )}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-sbie-beige/5 rounded-2xl p-6 border border-sbie-beige/10">
              <a 
                href="https://emotionalintelligencesociety.org/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="http://emotionalintelligencesociety.org/wp-content/uploads/2022/11/isei-logo-m1.png"
                  alt="International Society Logo"
                  className="w-16 h-16 mx-auto mb-3 object-contain"
                />
                <p className="text-sbie-beige/90 font-medium">
                  Metodologia Certificada
                </p>
                <p className="text-sbie-beige/70 text-sm">
                  International Society
                </p>
              </a>
            </div>
            <div className="bg-sbie-beige/5 rounded-2xl p-6 border border-sbie-beige/10">
              <a 
                href="https://rodrigofonsecaie.com.br/os4poderes/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="https://rodrigofonsecaie.com.br/wp-content/uploads/2023/02/livros-min.png"
                  alt="Livros Best-Sellers"
                  className="w-16 h-16 mx-auto mb-3 object-contain"
                />
                <p className="text-sbie-beige/90 font-medium">4 Best-Sellers</p>
                <p className="text-sbie-beige/70 text-sm">Publicados</p>
              </a>
            </div>
            <div className="bg-sbie-beige/5 rounded-2xl p-6 border border-sbie-beige/10">
              <img
                src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png"
                alt="Selo MEC"
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />
              <p className="text-sbie-beige/90 font-medium">
                Reconhecido pelo MEC
              </p>
              <p className="text-sbie-beige/70 text-sm">
                Ministério da Educação
              </p>
            </div>
            <div className="bg-sbie-beige/5 rounded-2xl p-6 border border-sbie-beige/10">
              <a 
                href="https://www.google.com/search?authuser=0&gl=br&hl=pt-BR&output=search&q=SBIE+-+Sociedade+Brasileira+de+Intelig%C3%AAncia+Emocional&ludocid=11416569491023735063&gsas=1&lsig=AB86z5UOqn0k3W3xEoh_RxtOFChJ&ved=1i%3A3%2Ct%3A109124%2Ce%3A2%2Cp%3ArNT3Y65K6Lnk5Q_a14P4DA%3A1#lrd="
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2019/05/selo-cinza.png.webp"
                  alt="Selo Google"
                  className="w-16 h-16 mx-auto mb-3 object-contain"
                />
                <p className="text-sbie-beige/90 font-medium">5 Estrelas Google</p>
                <p className="text-sbie-beige/70 text-sm">Avaliações Verificadas</p>
              </a>
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
