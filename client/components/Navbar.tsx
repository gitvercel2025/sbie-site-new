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
      className="flex items-center space-x-1 px-4 py-2 text-white hover:text-sbie-beige transition-all duration-300 hover:scale-105"
    >
      <span className="font-medium">{title}</span>
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>

    <div
      className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl transition-all duration-300 transform ${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-2 invisible"
      } z-50 border border-sbie-beige/20`}
    >
      <div className="py-3">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="block px-6 py-3 text-sbie-dark-green hover:bg-sbie-beige/10 hover:text-sbie-bronze transition-all duration-200 hover:translate-x-2"
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

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  const quemSomosItems: DropdownItem[] = [
    { label: "Conheça a SBIE", href: "/conheca-sbie" },
    { label: "Nossa Metodologia", href: "/metodologia" },
    { label: "Rodrigo Fonseca", href: "/rodrigo-fonseca" },
  ];

  const treinamentosItems: DropdownItem[] = [
    { label: "Lotus Inteligência Emocional", href: "/lotus-ie" },
    { label: "Lotus Legado", href: "/lotus-legado" },
    { label: "Formação em Inteligência Emocional", href: "/formacao-ie" },
    { label: "SBIE Business", href: "/sbie-business" },
    { label: "Embaixadores do Bem", href: "/embaixadores" },
  ];

  const onlineItems: DropdownItem[] = [
    { label: "SBIE Academy", href: "/academy" },
    { label: "SBIE Care", href: "/care" },
    { label: "Academia Emocional", href: "/academia-emocional" },
    { label: "Gerando com Amor", href: "/gerando-amor" },
    { label: "Almas Gêmeas", href: "/almas-gemeas" },
    { label: "Livros Digitais", href: "/livros" },
  ];

  return (
    <nav className="bg-sbie-dark-green shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2019/08/auto_site_logo_w.png.webp"
                alt="SBIE Logo"
                className="h-12 w-auto"
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

              <Link
                to="/blog"
                className="px-4 py-2 text-white hover:text-sbie-beige transition-all duration-300 hover:scale-105 font-medium"
              >
                Blog
              </Link>

              <Link
                to="/imprensa"
                className="px-4 py-2 text-white hover:text-sbie-beige transition-all duration-300 hover:scale-105 font-medium"
              >
                Imprensa
              </Link>

              <Link
                to="/store"
                className="px-4 py-2 text-white hover:text-sbie-beige transition-all duration-300 hover:scale-105 font-medium"
              >
                Store
              </Link>

              <Link
                to="/contato"
                className="px-6 py-3 bg-sbie-bronze text-white rounded-full hover:bg-sbie-bronze/90 transition-all duration-300 hover:scale-105 font-medium shadow-lg hover:shadow-xl ml-4"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-sbie-beige transition-colors duration-200 p-2"
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
          <div className="space-y-2">
            <div className="border-t border-sbie-beige/20 pt-4">
              <Link
                to="/blog"
                className="block px-4 py-3 text-white hover:bg-sbie-beige/10 hover:text-sbie-beige transition-all duration-200 rounded-lg"
              >
                Blog
              </Link>
              <Link
                to="/imprensa"
                className="block px-4 py-3 text-white hover:bg-sbie-beige/10 hover:text-sbie-beige transition-all duration-200 rounded-lg"
              >
                Imprensa
              </Link>
              <Link
                to="/store"
                className="block px-4 py-3 text-white hover:bg-sbie-beige/10 hover:text-sbie-beige transition-all duration-200 rounded-lg"
              >
                Store
              </Link>
              <Link
                to="/contato"
                className="block mx-4 mt-4 px-6 py-3 bg-sbie-bronze text-white rounded-full hover:bg-sbie-bronze/90 transition-all duration-300 text-center font-medium"
              >
                Contato
              </Link>
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
