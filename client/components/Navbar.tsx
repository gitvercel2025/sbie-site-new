import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const DropdownMenu = ({
  title,
  items,
  isOpen,
  onToggle,
}: DropdownMenuProps) => (
  <div className="relative group">
    <button
      onClick={onToggle}
      className="flex items-center space-x-1 px-4 py-2 bg-sbie-menu-green text-white hover:bg-sbie-menu-green/80 transition-all duration-300 hover:scale-105 rounded-lg font-medium shadow-md"
    >
      <span className="font-medium">{title}</span>
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>

    <div
      className={`absolute top-full left-0 mt-2 w-80 bg-white border-2 border-sbie-menu-green/20 rounded-xl shadow-2xl transition-all duration-300 transform ${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-2 invisible"
      } z-50`}
    >
      <div className="py-2">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="block px-6 py-3 text-sbie-menu-green font-semibold hover:bg-sbie-menu-green hover:text-white transition-all duration-200 hover:translate-x-2 border-b border-sbie-beige/30 last:border-b-0"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  };

  const quemSomosItems: DropdownItem[] = [
    { label: "Conheça a SBIE", href: "https://www.sbie.com.br/conheca-a-sbie/" },
    { label: "Nossa Metodologia", href: "https://www.sbie.com.br/nossa-metodologia/" },
    { label: "Rodrigo Fonseca", href: "https://rodrigofonsecaie.com.br/" },
  ];

  const treinamentosItems: DropdownItem[] = [
    { label: "Lotus Inteligência Emocional", href: "/lotus" },
    { label: "Formação em Inteligência Emocional", href: "/formacao" },
    { label: "Formação Master em Inteligência Emocional", href: "/formacao-master" },
    { label: "SBIE Business", href: "/business" },
    { label: "SBIE Embaixadores do Bem", href: "/embaixadores" },
  ];

  const onlineItems: DropdownItem[] = [
    { label: "SBIE Academy", href: "https://www.sbie.com.br/solucao/sbie-academy/?utm_source=sitesbie&utm_medium=menu&utm_campaign=academy" },
    { label: "SBIE Care", href: "https://www.sbie.com.br/solucao/sbie-care/?utm_source=sitesbie&utm_medium=menu&utm_campaign=care" },
    { label: "Academia Emocional", href: "https://lp.sbie.com.br/academia-emocional/?utm_source=sitesbie&utm_medium=menu&utm_campaign=academia" },
    { label: "Gerando com Amor", href: "https://rodrigofonsecaie.com.br/gerando-com-amor/?utm_source=sitesbie&utm_medium=menu&utm_campaign=gerando-com-amor" },
    { label: "Alma Gêmeas", href: "https://hotmart.com/pt-br/marketplace?utm_source=sitesbie&utm_medium=menu&utm_campaign=almagemeas" },
    { label: "Livros Digitais", href: "https://rodrigofonsecaie.com.br/os4poderes/?utm_source=sitesbie&utm_medium=menu&utm_campaign=livros" },
  ];

  return (
    <nav className="bg-sbie-beige shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center transition-transform duration-500 hover:scale-110 cursor-pointer"
            >
              <img
                src="https://i.imgur.com/jMtFhFI.png"
                alt="SBIE Logo"
                className="h-20 w-auto transition-all duration-500 hover:brightness-110 hover:contrast-110"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              <DropdownMenu
                title="Quem Somos"
                items={quemSomosItems}
                isOpen={openDropdown === "quem-somos"}
                onToggle={() => toggleDropdown("quem-somos")}
              />

              <DropdownMenu
                title="Treinamentos"
                items={treinamentosItems}
                isOpen={openDropdown === "treinamentos"}
                onToggle={() => toggleDropdown("treinamentos")}
              />

              <DropdownMenu
                title="Online"
                items={onlineItems}
                isOpen={openDropdown === "online"}
                onToggle={() => toggleDropdown("online")}
              />

              <a
                href="https://www.sbie.com.br/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white/90 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/5 rounded-lg font-medium"
              >
                Blog
              </a>

              <a
                href="https://www.sbie.com.br/imprensa/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white/90 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/5 rounded-lg font-medium"
              >
                Imprensa
              </a>

              <a
                href="https://www.sbie.com.br/store/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white/90 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/5 rounded-lg font-medium"
              >
                Store
              </a>

              <Link
                to="/contato"
                className="px-6 py-3 bg-gradient-to-r from-sbie-bronze to-sbie-bronze/80 text-white rounded-full hover:from-sbie-bronze/90 hover:to-sbie-bronze/70 transition-all duration-300 hover:scale-105 font-medium shadow-lg hover:shadow-xl ml-4 border border-sbie-bronze/20"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 hover:text-white transition-colors duration-200 p-2 hover:bg-white/5 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen pb-6" : "max-h-0"
          }`}
        >
          <div className="space-y-2 bg-sbie-menu-green/95 backdrop-blur-sm rounded-lg mt-4 border border-sbie-menu-green/30">
            <div className="border-t border-white/10 pt-4">
              {/* Quem Somos Dropdown */}
              <div className="mb-2">
                <button
                  onClick={() => toggleMobileDropdown("quem-somos")}
                  className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold hover:bg-white/10 transition-all duration-200 rounded-lg"
                >
                  <span className="font-semibold text-white">Quem Somos</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 text-white ${
                      openMobileDropdown === "quem-somos" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openMobileDropdown === "quem-somos" ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {quemSomosItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-8 py-2 text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200 text-sm font-medium border-l-2 border-white/20 ml-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Treinamentos Dropdown */}
              <div className="mb-2">
                <button
                  onClick={() => toggleMobileDropdown("treinamentos")}
                  className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold hover:bg-white/10 transition-all duration-200 rounded-lg"
                >
                  <span className="font-semibold text-white">Treinamentos</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 text-white ${
                      openMobileDropdown === "treinamentos" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openMobileDropdown === "treinamentos" ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {treinamentosItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-8 py-2 text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200 text-sm font-medium border-l-2 border-white/20 ml-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Online Dropdown */}
              <div className="mb-2">
                <button
                  onClick={() => toggleMobileDropdown("online")}
                  className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold hover:bg-white/10 transition-all duration-200 rounded-lg"
                >
                  <span className="font-semibold text-white">Online</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 text-white ${
                      openMobileDropdown === "online" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openMobileDropdown === "online" ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {onlineItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-8 py-2 text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200 text-sm font-medium border-l-2 border-white/20 ml-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              <div className="border-t border-white/20 pt-4 mt-4">
                <Link
                  to="/blog"
                  className="block px-4 py-3 text-white font-semibold hover:bg-white/10 hover:text-white transition-all duration-200 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/imprensa"
                  className="block px-4 py-3 text-white font-semibold hover:bg-white/10 hover:text-white transition-all duration-200 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Imprensa
                </Link>
                <Link
                  to="/store"
                  className="block px-4 py-3 text-white font-semibold hover:bg-white/10 hover:text-white transition-all duration-200 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Store
                </Link>
                <a
                  href="#contact"
                  className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-sbie-bronze to-sbie-bronze/80 text-white rounded-full hover:from-sbie-bronze/90 hover:to-sbie-bronze/70 transition-all duration-300 text-center font-semibold shadow-lg border border-sbie-bronze/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for closing dropdowns */}
      {openDropdown && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={closeAllDropdowns}
        />
      )}
    </nav>
  );
};
