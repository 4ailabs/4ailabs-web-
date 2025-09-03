import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import MedicalAiPage from './pages/MedicalAiPage';
import AiAgentsPage from './pages/AiAgentsPage';
import EducationPage from './pages/EducationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Chat from './components/Chat';
import ResearchPage from './pages/ResearchPage';
import NewsPage from './pages/NewsPage';
import NewsArticlePage from './pages/NewsArticlePage';
import ContextEngineeringPage from './pages/ContextEngineeringPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ROICalculatorPage from './pages/ROICalculatorPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-slate-300 transition-colors duration-300">
        <Header />
        <main style={{ paddingTop: '4rem' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/ia-medica" element={<MedicalAiPage />} />
            <Route path="/agentes-ia" element={<AiAgentsPage />} />
            <Route path="/context-engineering" element={<ContextEngineeringPage />} />
            <Route path="/tecnologias" element={<TechnologiesPage />} />
            <Route path="/calculadora-roi" element={<ROICalculatorPage />} />
            <Route path="/educacion" element={<EducationPage />} />
            <Route path="/chatbots" element={<ServicesPage />} />
            <Route path="/automatizacion" element={<ServicesPage />} />
            <Route path="/investigacion" element={<ResearchPage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/noticias/:id" element={<NewsArticlePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Chat />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;