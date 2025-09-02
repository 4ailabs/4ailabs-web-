import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-zinc-950 text-slate-300">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/ia-medica" element={<MedicalAiPage />} />
            <Route path="/agentes-ia" element={<AiAgentsPage />} />
            <Route path="/educacion" element={<EducationPage />} />
            <Route path="/investigacion" element={<ResearchPage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Chat />
      </div>
    </HashRouter>
  );
};

export default App;