import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import { AboutPage, DoctorsPage, VaccinesPage, PharmacyPage, SchemesPage } from './pages/StaticPages';

function App() {
  return (
    <AppContextProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-gray-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/vaccines" element={<VaccinesPage />} />
              <Route path="/pharmacy" element={<PharmacyPage />} />
              <Route path="/schemes" element={<SchemesPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </main>
          <Footer />
          <AuthModal />
        </div>
      </HashRouter>
    </AppContextProvider>
  );
}

export default App;