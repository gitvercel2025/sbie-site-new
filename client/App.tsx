import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MECBanner } from "./components/MECBanner";
import { PlaceholderPage } from "./components/PlaceholderPage";
import { ContactPage } from "./pages/ContactPage";
import LotusPage from "./pages/LotusPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FormularioPage from './pages/FormularioPage';
import { FormacaoPage } from './pages/FormacaoPage';
import { FormacaoMasterPage } from './pages/FormacaoMasterPage';
import ConhecaSbiePage from './pages/ConhecaSbiePage';
import MetodologiaPage from './pages/MetodologiaPage';
import LegadoPage from "./pages/LegadoPage";
import RodrigoFonsecaPage from './pages/RodrigoFonsecaPage';
import ImprensaPage from './pages/ImprensaPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <MECBanner />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Quem Somos */}
              <Route path="/conheca-sbie" element={<ConhecaSbiePage />} />
              <Route path="/metodologia" element={<MetodologiaPage />} />
              <Route path="/rodrigo-fonseca" element={<RodrigoFonsecaPage />} />

              {/* Treinamentos - Corrigindo as rotas para corresponder ao menu */}
              <Route path="/lotus" element={<LotusPage />} />
              <Route path="/formulario" element={<FormularioPage />} />
              <Route path="/formacao" element={<FormacaoPage />} />
              <Route path="/formacao-master" element={<FormacaoMasterPage />} />
              <Route path="/legado" element={<LegadoPage />} />
              <Route path="/business" element={<PlaceholderPage title="SBIE Business" description="Soluções corporativas em inteligência emocional." />} />
              <Route path="/embaixadores" element={<PlaceholderPage title="SBIE Embaixadores do Bem" description="Programa social para multiplicar conhecimento em comunidades." />} />

              {/* Rotas antigas mantidas para compatibilidade */}
              <Route path="/lotus-ie" element={<LotusPage />} />
              <Route path="/lotus-legado" element={<PlaceholderPage title="LOTUS Legado" description="O programa mais completo para especialistas em inteligência emocional." />} />
              <Route path="/formacao-ie" element={<FormacaoPage />} />
              <Route path="/sbie-business" element={<PlaceholderPage title="SBIE Business" description="Soluções corporativas em inteligência emocional." />} />

              {/* Online */}
              <Route path="/academy" element={<PlaceholderPage title="SBIE Academy" description="Nossa plataforma online de ensino." />} />
              <Route path="/care" element={<PlaceholderPage title="SBIE Care" description="Cuidado e suporte emocional personalizado." />} />
              <Route path="/academia-emocional" element={<PlaceholderPage title="Academia Emocional" description="Desenvolvimento emocional contínuo." />} />
              <Route path="/gerando-amor" element={<PlaceholderPage title="Gerando com Amor" description="Programa especial para gestantes." />} />
              <Route path="/almas-gemeas" element={<PlaceholderPage title="Almas Gêmeas" description="Encontre relacionamentos saudáveis." />} />
              <Route path="/livros" element={<PlaceholderPage title="Livros Digitais" description="Nossa biblioteca digital de inteligência emocional." />} />

              {/* Outros */}
              <Route path="/blog" element={<PlaceholderPage title="Blog SBIE" description="Artigos e insights sobre inteligência emocional." />} />
              <Route path="/imprensa" element={<ImprensaPage />} />
              <Route path="/store" element={<PlaceholderPage title="SBIE Store" description="Produtos e materiais exclusivos da SBIE." />} />
              <Route path="/contato" element={<ContactPage />} />

              {/* Legais */}
              <Route path="/politica-privacidade" element={<PlaceholderPage title="Política de Privacidade" description="Nossa política de privacidade e proteção de dados." />} />
              <Route path="/termos-uso" element={<PlaceholderPage title="Termos de Uso" description="Termos e condições de uso dos nossos serviços." />} />

              {/* 404 */}
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
