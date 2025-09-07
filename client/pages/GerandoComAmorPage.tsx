import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const GerandoComAmorPage: React.FC = () => {
  const nextSectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sbie-dark-green via-sbie-menu-green to-sbie-forest-green overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://i.imgur.com/xnPrz6P.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-sbie-dark-green/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-pink-300/30 shadow-2xl">
                {/* Logo */}
                <div className="mb-6 flex justify-center lg:justify-start">
                  <img 
                    src="https://rodrigofonsecaie.com.br/wp-content/uploads/2022/05/logo-gerando-com-amor.svg" 
                    alt="Gerando com Amor Logo" 
                    className="h-16 sm:h-20 lg:h-24 w-auto filter drop-shadow-lg"
                  />
                </div>

                {/* Title with Neon Effect */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
                    GERANDO COM
                  </span>
                  <br />
                  <span className="text-pink-300 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-pulse">
                    AMOR
                  </span>
                </h1>

                {/* Description */}
                <div className="space-y-4 mb-8 text-white">
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    Descubra como a <span className="text-pink-300 font-semibold">Inteligência Emocional</span> pode te ajudar a 
                    <span className="text-purple-300 font-semibold"> GERENCIAR SUAS EMOÇÕES ANTES, DURANTE E DEPOIS DA GRAVIDEZ</span>, 
                    e principalmente, a Formação Emocional do seu Bebê desde a concepção.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    Saiba como suas emoções podem afetar o desenvolvimento emocional e cognitivo do bebê ainda dentro do útero 
                    e aprenda como <span className="text-pink-300 font-semibold">criar memórias positivas</span> nele.
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => document.getElementById('cta-final')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
                >
                  <span className="relative z-10">Conhecer o Curso</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img 
                  src="https://rodrigofonsecaie.com.br/wp-content/uploads/2022/05/img01-min.png" 
                  alt="Mãe Gestante" 
                  className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-3xl shadow-2xl border-4 border-pink-300/30 transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-pink-300" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section ref={nextSectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sbie-dark-green/50 to-sbie-forest-green/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border border-pink-300/20 shadow-2xl">
            <div className="mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="text-pink-300">GERANDO COM AMOR</span> é o primeiro curso de 
              <span className="text-purple-300">INTELIGÊNCIA EMOCIONAL</span> voltado para o desenvolvimento do bebê 
              ainda na fase intrauterina.
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed">
              Conteúdo obrigatório para <span className="text-pink-300 font-semibold">Mamães</span> que desejam viver a maternidade 
              de forma <span className="text-purple-300 font-semibold">leve e segura</span>.
            </p>
            
            <div className="mt-8">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text">
                O primeiro passo para começar a construir uma família mais unida e feliz.
              </p>
            </div>
            
            <div className="mt-8">
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Ciência Comprova */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sbie-dark-green/50 to-sbie-forest-green/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://rodrigofonsecaie.com.br/wp-content/uploads/2022/05/revista-min.png" 
                    alt="Revista Time" 
                    className="w-full max-w-md mx-auto shadow-2xl rounded-lg"
                    style={{
                      filter: 'drop-shadow(20px 20px 40px rgba(0,0,0,0.3))'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-amber-50/20 to-yellow-100/20 backdrop-blur-md p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl border-4 border-amber-300/30 relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-amber-400 rounded-full shadow-lg"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-amber-400 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-amber-400 rounded-full shadow-lg"></div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-amber-300 mb-8">
                  A CIÊNCIA COMPROVA!
                </h2>
                
                <div className="space-y-6 text-white leading-relaxed">
                  <p className="text-sm sm:text-base lg:text-lg">
                    O artigo científico: <strong>"Como os primeiros nove meses moldam o resto da sua vida"</strong> escrito pela cientista americana Annie Murphy Paul, na revista Time, comprova que além dos genes e o DNA que herdamos na concepção definirem o jeito que somos, existem outros fatores comprovados cientificamente que, durante a gravidez, a quantidade de nutrientes enviados ao feto, toxinas, medicamentos, nível de estresse e estado de espírito da mãe também moldam diretamente a suscetibilidade a doenças, nosso apetite, metabolismo, nossa inteligência e também o temperamento. <em className="text-amber-300">Revista Time 2010.</em>
                  </p>
                  
                  <p className="text-sm sm:text-base lg:text-lg">
                    A gestação é um período de intensa conexão entre mãe e filho, de maneira que as emoções sentidas pela mãe são também passadas para o bebê que está em fase de formação. As células do corpo humano registram as memórias do que aconteceu na fase uterina. Essas impressões ficam armazenadas no corpo e são guardadas no inconsciente. Elas ajudam a moldar a personalidade e o comportamento na vida adulta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Problemas e Soluções */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-sbie-forest-green via-sbie-dark-green to-purple-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl shadow-2xl border-4 border-purple-300/30">
                  <img 
                    src="https://rodrigofonsecaie.com.br/wp-content/uploads/2022/05/img3.jpg" 
                    alt="Mãe e bebê" 
                    className="w-full rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border border-pink-300/20 shadow-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-400 mb-8">
                  Alguns problemas que podem afetar a formação emocional do seu Bebê:
                </h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Brigas constantes do casal</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Gravidez indesejada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Problemas financeiros</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Perda de um ente querido</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Medo do parto</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Tentativas de aborto</span>
                  </li>
                </ul>
                
                <p className="text-white/90 mb-6 font-medium text-lg">
                  Tudo isso reflete no emocional do seu Bebê, gerando marcas profundas que irão sinalizar futuramente:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Problemas de relacionamento</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Sentimento de rejeição</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Sensação de incapacidade</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Desejo de não ter nascido</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Culpa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Fracasso</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Falta de Merecimento</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Problemas de aceitação</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm p-6 rounded-xl border-l-4 border-green-400">
                   <p className="text-white font-medium">
                     Tudo isso pode ser transformado se você Mamãe tiver acesso ao conhecimento proporcionado pela nossa Metodologia testada em mais de <strong className="text-green-300">200 mil Adultos</strong> e <strong className="text-blue-300">+ de 11.000 Mamães</strong>.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Seção Nossos Objetivos */}
       <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-sbie-dark-green relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40"></div>
         <div className="relative z-10 max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <div className="relative inline-block">
               <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 px-8 py-4">
                 NOSSOS OBJETIVOS SÃO:
               </h2>
             </div>
           </div>

           {/* Timeline */}
           <div className="relative">
             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)]"></div>
             
             <div className="space-y-12">
               {[
                 {
                   number: "1",
                   text: "Prepará-la emocionalmente para a gestação do seu Bebê, da pré-concepção até o seu nascimento;"
                 },
                 {
                   number: "2",
                   text: "Ensinar ferramentas práticas e técnicas de Reprogramação Emocional aplicadas ao longo da sua gestação;"
                 },
                 {
                   number: "3",
                   text: "Construir junto à você Mamãe, uma base emocional forte e com o amor necessário para seu Bebê sentir-se amado, acolhido e seguro;"
                 },
                 {
                   number: "4",
                   text: "Trazer o conhecimento necessário para que você Mamãe consiga construir uma vida mais saudável e feliz para o seu Bebê desde o seu planejamento de vida;"
                 },
                 {
                   number: "5",
                   text: "Resgatar emocionalmente tudo aquilo que te feriu no seu passado e que feriu a sua criança, corrigindo tais comportamentos e emoções negativas através de técnicas específicas de Reprogramação Emocional;"
                 },
                 {
                   number: "6",
                   text: "Conscientizar todas as Mamães sobre a importância do equilíbrio e da manutenção da sua saúde física e emocional durante toda a sua gestação."
                 }
               ].map((item, index) => (
                 <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                   <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-pink-300/20 shadow-2xl hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500">
                       <div className="flex items-start space-x-4">
                         <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(236,72,153,0.5)] flex-shrink-0">
                           {item.number}
                         </div>
                         <p className="text-white leading-relaxed text-sm sm:text-base">
                           {item.text}
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   {/* Timeline dot */}
                   <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.7)] border-4 border-white/20"></div>
                 </div>
               ))}
             </div>
           </div>

           {/* Caixa de texto com efeito neon flutuante */}
           <div className="mt-20 text-center">
             <div className="relative inline-block">
               <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
               <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-pink-400/30 shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500">
                 <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed font-medium">
                   A vida do bebê começa bem antes do nascimento e você, mãe, é a guia responsável por orientar e mudar o ciclo de crenças e traumas que vêm sendo passados de geração em geração.
                 </p>
               </div>
             </div>
           </div>

           {/* Segunda caixa de texto moderna */}
           <div className="mt-12 text-center">
             <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-purple-300/20 shadow-xl max-w-4xl mx-auto">
               <p className="text-lg sm:text-xl text-white leading-relaxed font-medium">
                 É possível dar um novo rumo e um futuro mais harmonioso, saudável e próspero para seu filho, basta que você tenha acesso a este conhecimento transformador.
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* Transição Suave */}
       <div className="h-16 bg-gradient-to-b from-purple-900/40 to-sbie-dark-green"></div>

       {/* Seção Módulos do Curso */}
       <section className="py-16 lg:py-24 bg-gradient-to-br from-sbie-dark-green via-purple-900/40 to-pink-900/30">
         <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
               <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                 Módulos do Curso
               </span>
             </h2>
             
             {/* Card moderno após o título */}
             <div className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl max-w-4xl mx-auto mb-12">
               <div className="text-center">
                 <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                   5 Módulos + 2 aulas extras <span className="text-sm font-normal">(boas vindas e encerramento)</span>
                 </h3>
                 <div className="bg-white/90 rounded-xl p-4 mb-4 inline-block">
                   <p className="text-purple-800 font-bold text-lg">
                     + 1 BÔNUS = Total de 4 horas e 40 min.
                   </p>
                 </div>
                 <div className="bg-purple-700/50 rounded-xl p-4">
                   <h4 className="text-white font-bold mb-2">INTRODUÇÃO</h4>
                   <p className="text-white/90 text-sm">
                     Nesta primeira módulo você terá uma apresentação sobre o Curso Gerando com Amor. Além disso, conhecerá os mentores que fazem parte do treinamento: Rodrigo Fonseca
                   </p>
                 </div>
               </div>
             </div>
           </div>

           <div className="grid gap-8 md:gap-12">
             {[
               {
                  title: "INTRODUÇÃO",
                  content: "Neste primeiro módulo você terá uma apresentação sobre o Curso Gerando com Amor. Além disso, conhecerá os mentores que fazem parte do treinamento: Rodrigo Fonseca (Presidente da Sociedade Brasileira de Inteligência Emocional e idealizador do Curso Gerando com Amor) e também os médicos Dr. Alberto Guimarães e a Dra. Patrícia Brum."
                },
               {
                 title: "PRÉ-CONCEPÇÃO",
                 content: "Nesta fase você compreenderá sobre a importância do período de pré-concepção para a formação do seu bebê, tanto fisicamente quanto emocionalmente. A relevância de cuidar da sua saúde como mãe e do seu parceiro para que o bebê seja gerado em um ambiente saudável e harmônico."
               },
               {
                 title: "GRAVIDEZ",
                 content: "Neste módulo do curso você aprenderá sobre Epigenética e como esta ciência influencia no período da gravidez, tanto para a formação emocional, quanto para a formação física do seu bebê. Neste período, você terá uma visão aprofundada da programação emocional e como usá-la a favor de uma base de vida mais feliz, próspera e equilibrada para o seu bebê."
               },
               {
                 title: "PRIMEIRO TRIMESTRE",
                 content: "Esse período da gestação é considerado um dos mais importantes, pois é o início da formação do cérebro e órgãos do bebê. Neste módulo você compreenderá como funciona esse processo de formação, como seu bebê interpreta e reage às emoções. Tudo que é vivenciado pela mãe é registrado pelo bebê, por isso, é importante os pais terem cuidado com as emoções, aprenderem lidar com as situações. Neste sentido, é relevante conversar com o bebê e explicar tudo o que está acontecendo para criar memórias positivas para o bebê."
               },
               {
                 title: "SEGUNDO TRIMESTRE",
                 content: "Neste trimestre da gravidez, a comunicação com o bebê se torna mais forte, pois é nesta fase que o bebê começa a ter reflexos e dar respostas. Dessa forma, você aprenderá como externalizar tudo aquilo que você deseja para o seu bebê e também o que você gostaria que ele se torne na vida adulta, através da Matriz da Vida® fundamentada pelo mentor emocional Rodrigo Fonseca."
               },
               {
                 title: "TERCEIRO TRIMESTRE",
                 content: "Nesta última etapa da gravidez, você aprenderá como trabalhar e lidar com as emoções, planejando assim o momento tão esperado do parto. O intuito é dar suporte emocional para a mãe e deixá-la bem calma e serena para receber o bebê."
               },
               {
                 title: "CONCLUSÃO",
                 content: "Considerações finais sobre o curso para você começar a vivenciar com o seu bebê Essa Jornada de Amor, Prosperidade e Felicidade!"
               }
             ].map((module, index) => (
               <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-pink-300/20 shadow-2xl hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500">
                 <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
                   {module.title}
                 </h3>
                 <p className="text-white leading-relaxed text-sm sm:text-base">
                   {module.content}
                 </p>
               </div>
             ))}
           </div>

           {/* Card moderno após conclusão */}
           <div className="mt-12">
             <div className="bg-gradient-to-r from-purple-700/60 to-pink-700/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl max-w-4xl mx-auto">
               <div className="text-center">
                 <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                   CONCLUSÃO
                 </h3>
                 <p className="text-white/90 mb-6">
                   Considerações finais sobre o curso para você começar a vivenciar com o seu bebê Essa Jornada de Amor, Prosperidade e Felicidade!
                 </p>
                 <div className="bg-white/90 rounded-xl p-6">
                   <h4 className="text-purple-800 font-bold text-lg mb-4">+ BÔNUS</h4>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                     <div className="flex flex-col items-center">
                       <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                         <span className="text-white text-xl">📖</span>
                       </div>
                       <p className="text-purple-800 text-sm font-medium">
                         Livro Digital escrito pelo médico, ginecologista e obstetra Dr. Alberto Guimarães: Parto Transformar Medo em Amor.
                       </p>
                     </div>
                     <div className="flex flex-col items-center">
                       <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                         <span className="text-white text-xl">🧠</span>
                       </div>
                       <p className="text-purple-800 text-sm font-medium">
                         Reprogramação Emocional: Programa Emocional Para Filhos por Rodrigo Fonseca.
                       </p>
                     </div>
                     <div className="flex flex-col items-center">
                       <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                         <span className="text-white text-xl">🎥</span>
                       </div>
                       <p className="text-purple-800 text-sm font-medium">
                         Entrevista com a Dra. Patrícia Brum: Mudança da posição fetal através das emoções maternas.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Transição Suave */}
       <div className="h-16 bg-gradient-to-b from-pink-900/30 to-sbie-dark-green"></div>

       {/* Seção Mentores */}
       <section className="py-16 lg:py-24 bg-gradient-to-br from-sbie-dark-green via-purple-900/30 to-pink-900/20">
         <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
               <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                 Único Curso do Brasil com foco no desenvolvimento emocional e cognitivo do Bebê durante a Gestação.
               </span>
             </h2>
             <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mt-8">
               Conheça quem serão seus <span className="text-pink-300">Mentores:</span>
             </h3>
           </div>

           <div className="grid gap-12 lg:gap-16">
             {/* Rodrigo Fonseca */}
             <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-pink-300/20 shadow-2xl hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-500">
               <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                 <div className="w-64 h-80 lg:w-72 lg:h-96 flex-shrink-0">
                   <img 
                     src="https://i.imgur.com/9a9VMCS.jpg" 
                     alt="Rodrigo Fonseca" 
                     className="w-full h-full object-cover rounded-2xl shadow-lg"
                   />
                 </div>
                 <div className="flex-1 text-center lg:text-left">
                   <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-6">
                     Rodrigo Fonseca
                   </h4>
                   <div className="space-y-4 text-white leading-relaxed">
                     <p>Rodrigo Fonseca é presidente da Sociedade Brasileira de Inteligência Emocional (SBIE). Possui mais de 26 anos de carreira como mentor emocional e já transformou a vida de mais de 200 mil pessoas com a Inteligência Emocional.</p>
                     <p>Idealizador do Treinamento LOTUS Inteligência Emocional e da primeira Formação em Inteligência Emocional do Brasil. Também está a frente do maior evento de Inteligência Emocional da América Latina: Conexão.</p>
                     <p>Possui canal do Youtube com maior conteúdo sobre Inteligência Emocional.</p>
                     <p>É autor dos Best Sellers "Emoções, A Inteligência Emocional na Prática!", "Missão – Como viver uma Vida de Propósito", "Inteligência Emocional para Pais" e "Riqueza Emocional".</p>
                     <blockquote className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-6 rounded-xl border-l-4 border-pink-400 mt-6">
                       <p className="text-pink-200 font-medium italic text-lg">
                         "Quanto mais for nutrida pelo AMOR dos pais, mais feliz e saudável será a criança que vai nascer dessa união."
                       </p>
                     </blockquote>
                   </div>
                 </div>
               </div>
             </div>

             {/* Patrícia Costa Brum */}
             <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-pink-300/20 shadow-2xl hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-500">
               <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8">
                 <div className="w-64 h-80 lg:w-72 lg:h-96 flex-shrink-0">
                   <img 
                     src="https://rodrigofonsecaie.com.br/wp-content/uploads/2022/05/foto-patricia.jpg" 
                     alt="Patrícia Costa Brum" 
                     className="w-full h-full object-cover rounded-2xl shadow-lg"
                   />
                 </div>
                 <div className="flex-1 text-center lg:text-left">
                   <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-6">
                     Patrícia Costa Brum
                   </h4>
                   <div className="space-y-4 text-white leading-relaxed">
                     <p>Patrícia Costa Brum é médica, ginecologista e obstetra pela Faculdade de Medicina Gama Filho no Rio de Janeiro, ultrassonografista, pela EURP Escola de Ultrassonografia de Ribeirão Preto. Mentora Emocional pela Sbie (Sociedade Brasileira de Inteligência Emocional).</p>
                     <p>Sua formação deu à Dra Patrícia habilidades na área de psicologia que privilegiam seus estudos sobre as emoções fetais, pois é capaz de registrar as emoções fetais através de expressões faciais e comportamentos de um bebê ainda dentro do útero.</p>
                     <p>Em sua prática clínica, vem chamando atenção para a importância dos cuidados psicológicos para a gestante, não só por sua implicação na saúde materna, como redução de Diabetes, Hipertensão, Infecções, Depressão pós parto, como também na saúde emocional do bebê em formação.</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Alberto Jorge de Sousa Guimarães */}
             <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-pink-300/20 shadow-2xl hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-500">
               <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                 <div className="w-64 h-80 lg:w-72 lg:h-96 flex-shrink-0">
                   <img 
                     src="https://rodrigofonsecaie.com.br/wp-content/uploads/2022/05/foto-alberto.jpg" 
                     alt="Alberto Jorge de Sousa Guimarães" 
                     className="w-full h-full object-cover rounded-2xl shadow-lg"
                   />
                 </div>
                 <div className="flex-1 text-center lg:text-left">
                   <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-6">
                     Alberto Jorge de Sousa Guimarães
                   </h4>
                   <div className="space-y-4 text-white leading-relaxed">
                     <p>Alberto Jorge de Sousa Guimarães é médico, ginecologista e obstetra pela Faculdade de Medicina em Teresópolis, mestre e doutorando, pela Escola Paulista de Medicina, UNIFESP.</p>
                     <p>Defensor dos conceitos de Parto Humanizado, Guimarães encabeçou a criação do programa Parto sem Medo, um modelo de assistência à parturiente, enfatizando o parto como um evento de máxima feminilidade, quando a mulher e bebê são os protagonistas.</p>
                     <p>Um conceito de ambiente calmo, tranquilo e com privacidade, onde mãe e bebê vivenciam o parto de forma livre, espontânea e ativa.</p>
                     <p>Atualmente vem difundindo uma proposta de reformulação dos protocolos de assistência à mulher, propondo um atendimento com menos intervenções farmacológicas e uma assistência mais humana no parto.</p>
                     <p>Autor do livro "Parto Sem Medo" publicado pela editora Mulheres.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* CTA Button */}
           <div className="text-center mt-16">
             <button 
               onClick={() => document.getElementById('cta-final')?.scrollIntoView({ behavior: 'smooth' })}
               className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] transition-all duration-300 transform hover:scale-105"
             >
               QUERO GARANTIR A MINHA VAGA
             </button>
           </div>
         </div>
       </section>

       {/* Transição Suave */}
       <div className="h-16 bg-gradient-to-b from-pink-900/20 to-purple-900/30"></div>

       {/* Seção Garantia */}
       <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-sbie-dark-green">
         <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
               <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                 Mais de 200 mil pessoas transformaram sua história de vida por meio dessa Metodologia.
               </span>
             </h2>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Lado Esquerdo - Garantia */}
             <div className="text-center lg:text-left">
               <div className="flex flex-col items-center lg:items-start">
                 <div className="mb-8">
                   <img 
                     src="https://i.imgur.com/KN5lano.png" 
                     alt="Garantia Incondicional" 
                     className="w-32 h-32 sm:w-40 sm:h-40 mx-auto lg:mx-0"
                   />
                 </div>
                 
                 {/* Card moderno com o texto */}
                 <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-pink-300/20 shadow-2xl hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-500 w-full">
                   <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                     <span className="text-pink-300">Garantia Incondicional de 7 dias</span> – Risco Zero
                   </h3>
                   <div className="space-y-4 text-white leading-relaxed">
                     <p>Após a confirmação do pagamento, você terá até 7 dias corridos para pedir reembolso caso perceba que o Treinamento não é para você.</p>
                     <p>Você pode experimentar com calma o Treinamento e testar por 7 dias grátis!</p>
                     <p className="font-bold text-pink-300">É isso mesmo!</p>
                     <p>Se você achar que o curso não é para você, devolveremos de forma integral 100% do seu investimento, não é necessário apresentar justificativa para solicitar o reembolso.</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Lado Direito - Imagem Família */}
             <div className="flex justify-center">
               <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-pink-300/20 shadow-2xl hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-500">
                 <img 
                   src="https://rodrigofonsecaie.com.br/wp-content/uploads/2022/05/img04-min.png" 
                   alt="Família Feliz" 
                   className="w-full max-w-sm h-auto rounded-2xl shadow-lg"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Transição Suave */}
       <div className="h-16 bg-gradient-to-b from-sbie-dark-green to-purple-900/40"></div>

       {/* Seção Reflexão */}
       <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-sbie-dark-green">
         <div className="max-w-6xl mx-auto px-4">
           <div className="relative">
             <div className="absolute -inset-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
             <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-pink-400/30 shadow-[0_0_60px_rgba(236,72,153,0.4)]">
               <div className="text-center space-y-8">
                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                   Eu espero de verdade que você faça uma escolha consciente e pense no futuro do seu bebê, da sua família e no bem-estar das próximas gerações.
                 </h2>
                 <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                   Afinal, quanto vale a transformação de vida da sua família?
                 </h3>
               </div>
             </div>
           </div>
         </div>
       </section>










      {/* Card Pulsante Final */}
      <section id="cta-final" className="py-16 lg:py-24 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-sbie-dark-green min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center">
            <div className="relative inline-block w-full">
              <div className="absolute -inset-8 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-pink-400/30 shadow-[0_0_60px_rgba(236,72,153,0.6)] hover:shadow-[0_0_80px_rgba(236,72,153,0.8)] transition-all duration-500 hover:scale-105">
                <img 
                  src="https://i.imgur.com/QpbeYoP.png" 
                  alt="Transformação" 
                  className="w-full max-w-5xl h-auto rounded-2xl shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth Transition */}
      <div className="h-32 bg-gradient-to-b from-purple-900/30 to-sbie-dark-green"></div>
    </div>
  );
};

export default GerandoComAmorPage;