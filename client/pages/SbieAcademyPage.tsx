import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Users, Brain, Target, Star, BookOpen, Lightbulb, Phone, Mail, MapPin, MessageCircle, Send, User } from 'lucide-react';

export const SbieAcademyPage = () => {
  const navigate = useNavigate();
  const [showFloatingCTA, setShowFloatingCTA] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCTAClick = () => {
    const message = "Olá! Gostaria de mais informações sobre a SBIE Academy.";
    const whatsappUrl = `https://wa.me/5511298559490?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = `Olá! Gostaria de mais informações sobre a SBIE Academy.\n\nMeus dados:\nNome: ${formData.nome}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}`;
    const whatsappUrl = `https://wa.me/5511298559490?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ nome: '', email: '', whatsapp: '' });
    }, 1000);
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
            <source src="https://i.imgur.com/n5soSXr.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-sbie-dark-green/80 via-sbie-menu-green/70 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-sbie-bronze/30 transition-all duration-700 hover:bg-white/15 hover:border-sbie-bronze/50">

            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sbie-bronze via-sbie-beige to-sbie-bronze animate-pulse">
                SBIE ACADEMY
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="bg-sbie-bronze/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-sbie-bronze/30">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-sbie-beige leading-relaxed">
                Desenvolvendo as <span className="text-sbie-bronze font-bold">Emoções</span> dos seus <span className="text-sbie-bronze font-bold">Alunos</span>
              </p>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={handleCTAClick}
              className="group relative bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50"
            >
              <span className="flex items-center justify-center space-x-3">
                <MessageCircle className="w-6 h-6" />
                <span>QUERO MAIS INFORMAÇÕES</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </section>





      {/* Desenvolva as Emoções Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-sbie-dark-green mb-6">
              Desenvolva as <span className="text-sbie-bronze">Emoções</span> dos seus <span className="text-sbie-bronze">Alunos!</span>
            </h2>
          </div>
          
          {/* Content Card */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green rounded-3xl p-8 sm:p-12 shadow-2xl border border-sbie-bronze/20 hover:border-sbie-bronze/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-sbie-bronze/20">
              <div className="text-white space-y-6 leading-relaxed">
                <p className="text-lg sm:text-xl">
                  A Sbie Academy é uma vertente da Sociedade Brasileira de Inteligência Emocional, que tem como propósito levar a prática e o desenvolvimento das habilidades socioemocionais para as escolas de educação básica que contemplam os segmentos de Educação Infantil, Ensino Fundamental ou Ensino Médio.
                </p>
                
                <p className="text-lg sm:text-xl">
                  Pensando nas competências comportamentais que serão cada vez mais exigidas no âmbito profissional e essenciais para uma boa qualidade de vida neste novo mundo e na era digital, buscamos preparar nossas crianças e jovens de dois a dezessete anos para um futuro jamais imaginado por todos nós.
                </p>
                
                <p className="text-lg sm:text-xl">
                  Olhar para dentro, ou para as nossas emoções, nunca foi tão importante! Afinal, em toda a história da Humanidade isso não foi ensinado, o que explica o aumento gradativo de diversos transtornos emocionais ao redor do mundo, como a depressão e ansiedade.
                </p>
                
                <p className="text-lg sm:text-xl">
                  Nossas ideias, decisões e ações começam primeiramente na mente, no cérebro límbico. Então, precisamos saber lidar com as nossas emoções para nos relacionarmos melhor com os outros e nós mesmos, construindo de fato um mundo melhor para todos.
                </p>
                
                <p className="text-lg sm:text-xl">
                  No ambiente Escolar isso tem grande impacto positivo na aprendizagem, já que o cérebro límbico (emocional) equilibrado, contribui para o aprendizado do cérebro racional, e também o desequilíbrio dessas mesmas emoções impedem o aprendizado e a convivência com todos.
                </p>
                
                <p className="text-lg sm:text-xl">
                  A Inteligência Emocional é primordial para termos Alunos mais felizes e preparados para os desafios deste novo normal. É sobre isso que embasamos a nossa prática.
                </p>
                
                <p className="text-lg sm:text-xl font-semibold text-sbie-bronze">
                  Potencializaremos a capacidade dos seus Alunos, através do bem-estar e evolução emocional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Exclusiva Section */}
      <section className="py-24 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sbie-bronze rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-sbie-beige rounded-full blur-lg animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-md animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16 transform transition-all duration-700 hover:scale-105">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in">
              <span className="text-sbie-bronze drop-shadow-lg">Metodologia</span> Exclusiva
            </h2>
          </div>
          
          {/* Methodology Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-sbie-bronze/30 hover:border-sbie-bronze/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sbie-bronze/20 group">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <Lightbulb className="w-10 h-10 text-white group-hover:animate-pulse" />
                </div>
              </div>
              
              <div className="text-white space-y-6">
                <p className="text-lg leading-relaxed text-center group-hover:text-sbie-beige transition-colors duration-300">
                  A Sbie Academy trabalha e contempla as habilidades socioemocionais em cinco pilares fundamentais:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <span className="flex-shrink-0 w-8 h-8 bg-sbie-bronze rounded-full flex items-center justify-center text-white font-bold text-sm group-hover/item:scale-110 group-hover/item:bg-sbie-beige transition-all duration-300 shadow-md">1</span>
                      <p className="text-sbie-beige group-hover/item:text-white transition-colors duration-300">Abertura a novas experiências culturais, emocionais e intelectuais;</p>
                    </div>
                    
                    <div className="flex items-start space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <span className="flex-shrink-0 w-8 h-8 bg-sbie-bronze rounded-full flex items-center justify-center text-white font-bold text-sm group-hover/item:scale-110 group-hover/item:bg-sbie-beige transition-all duration-300 shadow-md">2</span>
                      <p className="text-sbie-beige group-hover/item:text-white transition-colors duration-300">Ampliação da consciência para ser ainda mais organizado, responsável e focado;</p>
                    </div>
                    
                    <div className="flex items-start space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <span className="flex-shrink-0 w-8 h-8 bg-sbie-bronze rounded-full flex items-center justify-center text-white font-bold text-sm group-hover/item:scale-110 group-hover/item:bg-sbie-beige transition-all duration-300 shadow-md">3</span>
                      <p className="text-sbie-beige group-hover/item:text-white transition-colors duration-300">Extroversão, orientada aos relacionamentos interpessoais;</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <span className="flex-shrink-0 w-8 h-8 bg-sbie-bronze rounded-full flex items-center justify-center text-white font-bold text-sm group-hover/item:scale-110 group-hover/item:bg-sbie-beige transition-all duration-300 shadow-md">4</span>
                      <p className="text-sbie-beige group-hover/item:text-white transition-colors duration-300">Compaixão, que é a capacidade de se colocar no lugar do outro e ajuda-lo de fato em suas necessidades;</p>
                    </div>
                    
                    <div className="flex items-start space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <span className="flex-shrink-0 w-8 h-8 bg-sbie-bronze rounded-full flex items-center justify-center text-white font-bold text-sm group-hover/item:scale-110 group-hover/item:bg-sbie-beige transition-all duration-300 shadow-md">5</span>
                      <p className="text-sbie-beige group-hover/item:text-white transition-colors duration-300">Equilíbrio emocional, visando o controle de reações emocionais para uma melhora no aprendizado e nos relacionamentos.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <p className="text-lg font-semibold text-sbie-bronze">
                    Nossos embasamentos científicos são: Neurociência, Educação Socioemocional, Psicologia Positiva e Psicopedagogia.
                  </p>
                  
                  <p className="text-sbie-beige leading-relaxed">
                    A partir deste entendimento, desenvolvemos Aulas exclusivas que abordam uma especificidade emocional, comportamental e de conduta. Elas são divididas em contextualização teórica, parte prática, conclusão e tarefa de casa com os Pais, pois acreditamos em uma efetividade muito maior quando incluímos os pais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green relative">
        <div className="max-w-4xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
             <p className="text-xl text-sbie-beige leading-relaxed max-w-3xl mx-auto">
               Entre em contato conosco agora mesmo ou solicite um atendimento através do formulário abaixo
             </p>
           </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-sbie-bronze/30">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sbie-beige font-semibold mb-3 text-lg">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sbie-bronze" />
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-sbie-bronze/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-sbie-bronze focus:ring-2 focus:ring-sbie-bronze/20 transition-all duration-300"
                    placeholder="Digite seu nome completo"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sbie-beige font-semibold mb-3 text-lg">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sbie-bronze" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-sbie-bronze/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-sbie-bronze focus:ring-2 focus:ring-sbie-bronze/20 transition-all duration-300"
                    placeholder="Digite seu melhor e-mail"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-sbie-beige font-semibold mb-3 text-lg">
                  WhatsApp *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sbie-bronze" />
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-sbie-bronze/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-sbie-bronze focus:ring-2 focus:ring-sbie-bronze/20 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-sbie-bronze via-sbie-bronze to-sbie-beige hover:from-sbie-beige hover:to-sbie-bronze text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-sbie-bronze/50 border-2 border-sbie-bronze/30 hover:border-sbie-beige/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>ENVIAR MENSAGEM VIA WHATSAPP</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </button>
              </div>
            </form>
          </div>
        </div>
       </section>



       {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-sbie-dark-green mb-4">
              Nossos <span className="text-sbie-bronze">Canais de Comunicação</span>
            </h2>
          </div>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Nossa Sede */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-sbie-dark-green mb-4">NOSSA SEDE</h3>
              <p className="text-gray-600 mb-4">Venha nos fazer uma visita!</p>
              <div className="space-y-2 text-sbie-dark-green font-semibold">
                <p>Rua Curupá, 595</p>
                <p>Anália Franco</p>
                <p>São Paulo - SP</p>
                <p>03355-010</p>
              </div>
            </div>
            
            {/* Telefones */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-sbie-dark-green mb-4">TELEFONES</h3>
              <p className="text-gray-600 mb-4">Fale com a nossa equipe</p>
              <div className="space-y-2">
                <a href="tel:+551129855949" className="block text-sbie-bronze font-bold text-lg hover:text-sbie-beige transition-colors">
                  (11) 2985-5949
                </a>
                <a href="tel:+5511940069695" className="block text-sbie-bronze font-bold text-lg hover:text-sbie-beige transition-colors">
                  (11) 94006-9695
                </a>
              </div>
            </div>
            
            {/* Contate-nos */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-sbie-bronze to-sbie-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-sbie-dark-green mb-4">CONTATE-NOS</h3>
              <p className="text-gray-600 mb-4">Ou pelos e-mails:</p>
              <div className="space-y-2">
                <a href="mailto:contato@sbie.com.br" className="block text-sbie-bronze font-bold hover:text-sbie-beige transition-colors">
                  contato@sbie.com.br
                </a>
                <a href="mailto:ouvidoria@sbie.com.br" className="block text-sbie-bronze font-bold hover:text-sbie-beige transition-colors">
                  ouvidoria@sbie.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      {showFloatingCTA && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleCTAClick}
            className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 border-2 border-green-400/50 hover:border-green-300"
          >
            <span className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6" />
              <span className="font-bold">Quero mais informações</span>
            </span>
          </button>
          
          {/* Close button */}
          <button
            onClick={() => setShowFloatingCTA(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold transition-colors"
          >
            ×
          </button>
        </div>
      )}
      
      {/* Quote Section - Final da Página */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-sbie-bronze/30">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed">
              "A ÚNICA DIFERENÇA ENTRE O MEDO E A CORAGEM É A AÇÃO!"
            </blockquote>
            <cite className="block mt-6 text-xl sm:text-2xl font-semibold text-sbie-bronze">
              RODRIGO FONSECA
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};