import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sbie-beige/30 via-white to-sbie-sage/10 flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-sbie-bronze/20">
          {/* Construction Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-sbie-bronze to-sbie-bronze/70 rounded-3xl mx-auto mb-8 flex items-center justify-center">
            <Construction className="w-12 h-12 text-white" />
          </div>

          {/* Content */}
          <h1 className="text-4xl sm:text-5xl font-bold text-sbie-dark-green mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-sbie-forest-green mb-8 leading-relaxed">
            {description || "Esta página está em desenvolvimento. Em breve teremos conteúdo incrível para você!"}
          </p>

          {/* CTA */}
          <div className="space-y-4">
            <p className="text-sbie-forest-green">
              Enquanto isso, que tal conhecer nossos treinamentos e descobrir como a SBIE pode transformar sua vida?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-sbie-bronze hover:bg-sbie-bronze/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar ao Início</span>
              </Link>
              
              <Link
                to="/#treinamentos"
                className="inline-flex items-center space-x-2 border-2 border-sbie-dark-green text-sbie-dark-green hover:bg-sbie-dark-green hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>Ver Treinamentos</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-sbie-bronze/20">
            <p className="text-sbie-forest-green mb-4">
              Tem alguma dúvida ou sugestão sobre esta página?
            </p>
            <Link
              to="/contato"
              className="text-sbie-bronze hover:text-sbie-bronze/80 font-semibold transition-colors duration-300"
            >
              Entre em contato conosco
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
