import React, { useState } from 'react';
import { Phone, Mail, User, Users, Send, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const FormularioPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    comoConheceu: '',
    outroMeio: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lê o nome do treinamento vindo da página anterior (state) ou pela query (?treinamento=...)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const trainingFromQuery = searchParams.get('treinamento');
  const trainingFromState = (location.state as any)?.training;
  const trainingName = trainingFromState || trainingFromQuery || 'Treinamento SBIE';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatWhatsAppMessage = () => {
    const conheceuTexto = formData.comoConheceu === 'Outro' ? formData.outroMeio : formData.comoConheceu;
    const message = `Olá! Gostaria de me inscrever no ${trainingName}.

*Dados do interessado:*

📝 *Nome:* ${formData.nome}
📱 *WhatsApp:* ${formData.whatsapp}
📧 *Email:* ${formData.email}
👥 *Como nos conheceu:* ${conheceuTexto}

Aguardo contato para mais informações sobre o curso.`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.whatsapp || !formData.email || !formData.comoConheceu) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (formData.comoConheceu === 'Outro' && !formData.outroMeio) {
      alert('Por favor, especifique como nos conheceu.');
      return;
    }

    setIsSubmitting(true);
    
    // Simular delay de envio
    setTimeout(() => {
      const whatsappNumber = '5511940069695';
      const message = formatWhatsAppMessage();
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      window.open(whatsappUrl, '_blank');
      
      setShowSuccess(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          nome: '',
          whatsapp: '',
          email: '',
          comoConheceu: '',
          outroMeio: ''
        });
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#21302B] via-[#4F5948] to-[#21302B] flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-[#21302B]" />
            </div>
            
            <h2 className="text-3xl font-bold text-[#DFC6AA] mb-4">
              Muito Obrigado!
            </h2>
            
            <p className="text-[#DFC6AA]/80 text-lg leading-relaxed">
              Suas informações foram recebidas com sucesso, entraremos em contato em breve.
            </p>
            
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-[#B66D38] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#DFC6AA] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-[#B66D38] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#21302B] via-[#4F5948] to-[#21302B] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 backdrop-blur-sm border border-[#DFC6AA]/30 rounded-full px-6 py-3 mb-6">
            <Send className="w-5 h-5 text-[#B66D38] mr-2" />
            <span className="text-[#DFC6AA] font-semibold text-sm tracking-wide uppercase">Faça sua inscrição</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] mb-4">
            Transforme sua Vida
          </h1>
          
          <p className="text-xl text-[#DFC6AA]/80 leading-relaxed">
            Preencha o formulário abaixo e garante sua vaga!
          </p>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-[#4F5948]/20 to-[#21302B]/30 backdrop-blur-xl border border-[#DFC6AA]/20 rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <label className="block text-[#DFC6AA] text-sm font-semibold mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                className="w-full bg-[#21302B]/50 border border-[#DFC6AA]/20 rounded-xl px-4 py-3 text-[#DFC6AA] placeholder-[#DFC6AA]/50 focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/20 transition-all duration-300"
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-[#DFC6AA] text-sm font-semibold mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                WhatsApp
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="w-full bg-[#21302B]/50 border border-[#DFC6AA]/20 rounded-xl px-4 py-3 text-[#DFC6AA] placeholder-[#DFC6AA]/50 focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/20 transition-all duration-300"
                placeholder="(11) 99999-9999"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#DFC6AA] text-sm font-semibold mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#21302B]/50 border border-[#DFC6AA]/20 rounded-xl px-4 py-3 text-[#DFC6AA] placeholder-[#DFC6AA]/50 focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/20 transition-all duration-300"
                placeholder="seu@email.com"
                required
              />
            </div>

            {/* Como nos conheceu */}
            <div>
              <label className="block text-[#DFC6AA] text-sm font-semibold mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Como nos conheceu?
              </label>
              <select
                name="comoConheceu"
                value={formData.comoConheceu}
                onChange={handleInputChange}
                className="w-full bg-[#21302B]/50 border border-[#DFC6AA]/20 rounded-xl px-4 py-3 text-[#DFC6AA] focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/20 transition-all duration-300"
                required
              >
                <option value="">Selecione como nos conheceu</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="YouTube">YouTube</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="TikTok">TikTok</option>
                <option value="Google">Google</option>
                <option value="Indicação de amigo">Indicação de amigo</option>
                <option value="Evento/Palestra">Evento/Palestra</option>
                <option value="Mídia (TV, Rádio, Jornal)">Mídia (TV, Rádio, Jornal)</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Campo condicional para "Outro" */}
            {formData.comoConheceu === 'Outro' && (
              <div>
                <label className="block text-[#DFC6AA] text-sm font-semibold mb-2">
                  Especifique:
                </label>
                <input
                  type="text"
                  name="outroMeio"
                  value={formData.outroMeio}
                  onChange={handleInputChange}
                  className="w-full bg-[#21302B]/50 border border-[#DFC6AA]/20 rounded-xl px-4 py-3 text-[#DFC6AA] placeholder-[#DFC6AA]/50 focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/20 transition-all duration-300"
                  placeholder="Digite como nos conheceu"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] text-[#21302B] px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#B66D38]/50 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#21302B]/30 border-t-[#21302B] rounded-full animate-spin mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8">
          <p className="text-[#DFC6AA]/60 text-sm">
            Ao enviar este formulário, você será redirecionado para o WhatsApp da SBIE
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormularioPage;