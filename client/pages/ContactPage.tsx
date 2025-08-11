import { useState, useRef, useEffect } from "react";
import { Send, Phone, Mail, MapPin, ArrowRight, Briefcase } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  interest: string;
  message: string;
}

export const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formatando mensagem para WhatsApp
    const whatsappMessage = `*Nova mensagem do site SBIE*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Assunto:* ${formData.subject}\n` +
      `*Interesse:* ${formData.interest}\n` +
      `*Mensagem:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/5511940069695?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      interest: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contato@sbie.com.br",
      href: "mailto:contato@sbie.com.br"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+55 11 94006-9695",
      href: "https://wa.me/5511940069695"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: "https://share.google/YElUSQtG0bXOSosu5"
    }
  ];

  const interestOptions = [
    "LOTUS Inteligência Emocional",
    "Formação em IE",
    "SBIE Business",
    "Embaixadores do Bem",
    "Trabalhe Conosco",
    "Outros"
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-sbie-beige/30 via-white to-sbie-sage/10 relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_100%_0%,#B66D38,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-sbie-bronze/10 px-6 py-3 rounded-full mb-6">
            <Send className="w-5 h-5 text-sbie-bronze" />
            <span className="text-sbie-bronze font-semibold">Entre em Contato</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-sbie-dark-green mb-6">
            Transforme sua vida{" "}
            <span className="text-sbie-bronze relative">
              hoje mesmo
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-sbie-bronze/30 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-xl text-sbie-forest-green max-w-3xl mx-auto">
            Estamos aqui para ajudar você a dar o primeiro passo na sua jornada de desenvolvimento emocional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-sbie-dark-green mb-6">
                  Vamos Conversar
                </h2>
                <p className="text-lg text-sbie-forest-green leading-relaxed">
                  Nossa equipe está pronta para esclarecer suas dúvidas e ajudar você a escolher 
                  o melhor caminho para seu desenvolvimento emocional.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sbie-bronze/20 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sbie-bronze to-sbie-bronze/70 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-sbie-forest-green">{info.label}</p>
                        <p className="text-lg font-semibold text-sbie-dark-green group-hover:text-sbie-bronze transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-sbie-bronze ml-auto group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-sbie-dark-green to-sbie-forest-green rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-sbie-beige">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-sbie-bronze/20">
              <h2 className="text-2xl font-bold text-sbie-dark-green mb-6">Envie sua Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sbie-dark-green mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 bg-sbie-beige/30 border border-sbie-bronze/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sbie-bronze focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sbie-dark-green mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 bg-sbie-beige/30 border border-sbie-bronze/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sbie-bronze focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone and Interest */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-sbie-dark-green mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 bg-sbie-beige/30 border border-sbie-bronze/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sbie-bronze focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-sbie-dark-green mb-2">
                      Interesse
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-sbie-beige/30 border border-sbie-bronze/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sbie-bronze focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecione seu interesse</option>
                      {interestOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sbie-dark-green mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Assunto da sua mensagem"
                    className="w-full px-4 py-3 bg-sbie-beige/30 border border-sbie-bronze/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sbie-bronze focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sbie-dark-green mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Conte-nos como podemos ajudá-lo..."
                    className="w-full px-4 py-3 bg-sbie-beige/30 border border-sbie-bronze/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sbie-bronze focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sbie-bronze to-sbie-bronze/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar via WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-16 w-6 h-6 bg-sbie-bronze/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-8 h-8 bg-sbie-sage/20 rounded-full animate-float delay-1000"></div>
    </div>
  );
};