import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PlaceholderPage } from "./components/PlaceholderPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Quem Somos */}
              <Route path="/conheca-sbie" element={<PlaceholderPage title="Conheça a SBIE" description="Descubra a história e missão da Sociedade Brasileira de Inteligência Emocional." />} />
              <Route path="/metodologia" element={<PlaceholderPage title="Nossa Metodologia" description="Conheça a metodologia exclusiva da SBIE para desenvolvimento emocional." />} />
              <Route path="/rodrigo-fonseca" element={<PlaceholderPage title="Rodrigo Fonseca" description="Saiba mais sobre o fundador e presidente da SBIE." />} />

              {/* Treinamentos */}
              <Route path="/lotus-ie" element={<PlaceholderPage title="LOTUS Inteligência Emocional" description="Desenvolva sua inteligência emocional com nossa metodologia comprovada." />} />
              <Route path="/lotus-legado" element={<PlaceholderPage title="LOTUS Legado" description="O programa mais completo para especialistas em inteligência emocional." />} />
              <Route path="/formacao-ie" element={<PlaceholderPage title="Formação em Inteligência Emocional" description="Certificação completa para profissionais da área." />} />
              <Route path="/sbie-business" element={<PlaceholderPage title="SBIE Business" description="Soluções corporativas em inteligência emocional." />} />
              <Route path="/embaixadores" element={<PlaceholderPage title="Embaixadores do Bem" description="Programa social para multiplicar conhecimento em comunidades." />} />

              {/* Online */}
              <Route path="/academy" element={<PlaceholderPage title="SBIE Academy" description="Nossa plataforma online de ensino." />} />
              <Route path="/care" element={<PlaceholderPage title="SBIE Care" description="Cuidado e suporte emocional personalizado." />} />
              <Route path="/academia-emocional" element={<PlaceholderPage title="Academia Emocional" description="Desenvolvimento emocional contínuo." />} />
              <Route path="/gerando-amor" element={<PlaceholderPage title="Gerando com Amor" description="Programa especial para gestantes." />} />
              <Route path="/almas-gemeas" element={<PlaceholderPage title="Almas Gêmeas" description="Encontre relacionamentos saudáveis." />} />
              <Route path="/livros" element={<PlaceholderPage title="Livros Digitais" description="Nossa biblioteca digital de inteligência emocional." />} />

              {/* Other Pages */}
              <Route path="/blog" element={<PlaceholderPage title="Blog SBIE" description="Artigos e insights sobre inteligência emocional." />} />
              <Route path="/imprensa" element={<PlaceholderPage title="Imprensa" description="Materiais para imprensa e mídia." />} />
              <Route path="/store" element={<PlaceholderPage title="SBIE Store" description="Produtos e materiais exclusivos da SBIE." />} />
              <Route path="/contato" element={<PlaceholderPage title="Contato" description="Entre em contato conosco para mais informações." />} />

              {/* Legal Pages */}
              <Route path="/politica-privacidade" element={<PlaceholderPage title="Política de Privacidade" description="Nossa política de privacidade e proteção de dados." />} />
              <Route path="/termos-uso" element={<PlaceholderPage title="Termos de Uso" description="Termos e condições de uso dos nossos serviços." />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
