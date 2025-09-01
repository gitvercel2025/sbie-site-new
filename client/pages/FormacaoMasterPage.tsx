import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Star, Award, Users, CheckCircle } from 'lucide-react';

export const FormacaoMasterPage = () => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isTestimonialPlaying, setIsTestimonialPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleTestimonialPlay = () => {
    setIsTestimonialPlaying(true);
  };

  const handleCTAClick = () => {
    // Navegar para o formulário e fazer scroll para o topo
    navigate('/formulario', { state: { training: 'FORMAÇÃO MASTER EM INTELIGÊNCIA EMOCIONAL' } });
    // Garantir que o scroll vá para o topo após a navegação
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Quero%20deixar%20meu%20nome%20na%20lista%20de%20espera%20da%20Formação%20Master', '_blank');
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-800 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 md:w-72 h-48 md:h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
              FORMAÇÃO MASTER
            </span>
            <br />
            <span className="text-white text-2xl md:text-4xl lg:text-6xl">
              EM INTELIGÊNCIA EMOCIONAL
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-amber-100 max-w-3xl mx-auto px-4">
            Transforme sua carreira e multiplique seus resultados
          </p>
        </div>
      </section>

      {/* Video Player Section */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              {!isVideoPlaying ? (
                <div className="relative aspect-video bg-gradient-to-br from-stone-900 to-black flex items-center justify-center cursor-pointer group" onClick={handleVideoPlay}>
                  <div className="absolute inset-0 bg-black/50"></div>
                  <img 
                    src="https://img.youtube.com/vi/WVTATK7yTwE/maxresdefault.jpg" 
                    alt="Formação Master Preview" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-500 transition-colors duration-300 group-hover:scale-110 transform">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" />
                    </div>
                    <p className="text-white text-base md:text-lg font-semibold px-4">Assista ao vídeo de apresentação</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/WVTATK7yTwE?autoplay=1"
                  title="Formação Master"
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-900 to-yellow-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-yellow-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
              <span className="block text-yellow-300 animate-fade-in-up">É REVOLUCIONÁRIO.</span>
              <span className="block text-amber-300 animate-fade-in-up delay-300">É COMPROVADO.</span>
              <span className="block text-yellow-200 animate-fade-in-up delay-500">É ENRIQUECEDOR.</span>
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border border-white/20">
              <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-4 md:mb-6">
                Você pode ser um dos selecionados para fazer parte do grupo de <span className="text-yellow-300 font-bold">Mentores Emocionais MASTER</span> e ser preparado para resolver a raiz dos maiores problemas dos seus clientes em <span className="text-amber-300 font-bold">UMA ÚNICA SESSÃO</span>.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-yellow-200 font-semibold">
                E claro, receber 3, 4, 5 ou 10 vezes mais para isso.
              </p>
            </div>
            <button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
            >
              QUERO SER SELECIONADO
            </button>
          </div>
        </div>
      </section>

      {/* Rodrigo Card Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-20"></div>
                  <img 
                    src="https://i.imgur.com/VTC9Fv2.jpg" 
                    alt="Rodrigo Fonseca" 
                    className="relative w-full rounded-2xl shadow-xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 md:mb-6">
                    DÊ O PRÓXIMO PASSO...
                  </h3>
                  <div className="space-y-4 md:space-y-6 text-base md:text-lg text-stone-700 leading-relaxed">
                    <p>
                      Você já está mudando muitas vidas com as 13 sessões que aprendeu durante a Formação. Agora imagine se pudesse, assim como eu, ser capaz de resolver em <span className="font-bold text-amber-700">UMA ÚNICA SESSÃO</span>?
                    </p>
                    <p>
                      Eu resisti muito para criar essa segunda etapa da Formação por um único motivo: as técnicas que vou revelar são tão magníficas que eu queria ter certeza que as pessoas certas teriam acesso. Por isso, será um grupo muito seleto e farei uma seleção muito criteriosa.
                    </p>
                    <p className="font-semibold text-amber-800">
                      Para se candidatar a uma das vagas, você precisa responder algumas perguntas:
                    </p>
                  </div>
                  <button 
                    onClick={handleCTAClick}
                    className="mt-6 md:mt-8 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl w-full md:w-auto"
                  >
                    QUERO FAZER MINHA APLICAÇÃO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 md:mb-6">
              DEPOIMENTOS DE SUCESSO
            </h3>
            <p className="text-lg md:text-xl text-stone-700 px-4">
              Veja o que nossos alunos têm a dizer sobre a transformação
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              {!isTestimonialPlaying ? (
                <div className="relative aspect-video bg-gradient-to-br from-stone-900 to-black flex items-center justify-center cursor-pointer group" onClick={handleTestimonialPlay}>
                  <div className="absolute inset-0 bg-black/50"></div>
                  <img 
                    src="https://img.youtube.com/vi/RwPBzCe5d8M/maxresdefault.jpg" 
                    alt="Depoimentos Preview" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-500 transition-colors duration-300 group-hover:scale-110 transform">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" />
                    </div>
                    <p className="text-white text-base md:text-lg font-semibold px-4">Assista aos depoimentos</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/RwPBzCe5d8M?autoplay=1"
                  title="Depoimentos Formação Master"
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-20"></div>
                <img 
                  src="https://lp.sbie.com.br/wp-content/uploads/2023/04/certificado.png" 
                  alt="Certificado SBIE" 
                  className="relative w-full rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6 md:mb-8">
                  PARA QUEM É A FORMAÇÃO MASTER?
                </h3>
                <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
                  Mentores Emocionais que foram certificados pela SBIE e que querem multiplicar seus Resultados e Faturamento 10x mais em 2023.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-900 mb-4 md:mb-6 text-center">
                COMO VAI SER?
              </h4>
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed text-center mb-6 md:mb-8 px-4">
                Serão 4 dias de imersão com conteúdo de altíssimo nível transmitido e vivenciado por cada participante.
              </p>
              <div className="text-center">
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-3 w-full md:w-auto justify-center"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="text-sm md:text-base lg:text-xl">Deixe seu nome na lista de espera</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 md:w-72 h-48 md:h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/20">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                Esse é o caminho que vai acelerar a sua jornada como Mentor Emocional!
              </h3>
              <p className="text-lg md:text-2xl text-yellow-200 mb-8 md:mb-10 px-4">
                Dê esse passo decisivo para transformar e acelerar seu negócio em 2023.
              </p>
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 md:px-12 py-8 md:py-5 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 w-full md:w-auto"
              >
                EU MEREÇO SER MASTER
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};