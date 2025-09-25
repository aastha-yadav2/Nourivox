import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { languages, Logo } from '../constants';
import type { LanguageCode } from '../types';

const Header: React.FC = () => {
  const { language, setLanguage, isAuthenticated, openLoginModal, openSignupModal, logout, t } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const activeLinkStyle = {
    color: '#22d3ee', // cyan-400
    fontWeight: '600'
  };

  const handleLanguageChange = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setIsLangOpen(false);
  }

  return (
    <header className="bg-black bg-opacity-30 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <div className="hidden md:block flex-grow ml-12">
            <nav className="flex items-center justify-center space-x-10 text-lg">
              <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-300 hover:text-cyan-400 transition duration-150 ease-in-out">{t('home')}</NavLink>
              <NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-300 hover:text-cyan-400 transition duration-150 ease-in-out">{t('about')}</NavLink>
              <NavLink to="/doctors" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-300 hover:text-cyan-400 transition duration-150 ease-in-out">{t('doctors')}</NavLink>
              <NavLink to="/vaccines" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-300 hover:text-cyan-400 transition duration-150 ease-in-out">{t('vaccines')}</NavLink>
              <NavLink to="/pharmacy" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-300 hover:text-cyan-400 transition duration-150 ease-in-out">{t('pharmacy')}</NavLink>
              <NavLink to="/schemes" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-300 hover:text-cyan-400 transition duration-150 ease-in-out">{t('schemes')}</NavLink>
              <NavLink to="/outbreaks" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-300 hover:text-cyan-400 transition duration-150 ease-in-out">{t('outbreaks')}</NavLink>
              <NavLink to="/helplines" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-300 hover:text-cyan-400 transition duration-150 ease-in-out">{t('helplines')}</NavLink>
              <NavLink to="/dashboard" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-300 hover:text-cyan-400 transition duration-150 ease-in-out">{t('dashboard')}</NavLink>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center text-gray-300 hover:text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 7.643a6.5 6.5 0 118.336 8.714 8.025 8.025 0 00-3.332-1.305 5.523 5.523 0 01-1.672-.83A6.47 6.47 0 014.332 7.643zM14.5 10a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" clipRule="evenodd" /></svg>
                {languages.find(l => l.code === language)?.name.split(' ')[0]}
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 py-2 w-40 bg-gray-800 rounded-md shadow-xl z-20 border border-gray-700">
                  {languages.map(lang => (
                    <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {isAuthenticated ? (
              <button onClick={logout} className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">{t('logout')}</button>
            ) : (
              <div className="flex items-center space-x-2">
                 <button onClick={openLoginModal} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white">{t('login')}</button>
                 <button onClick={openSignupModal} className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">{t('signup')}</button>
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('home')}</NavLink>
            <NavLink to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('about')}</NavLink>
            <NavLink to="/doctors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('doctors')}</NavLink>
            <NavLink to="/vaccines" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('vaccines')}</NavLink>
            <NavLink to="/pharmacy" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('pharmacy')}</NavLink>
            <NavLink to="/schemes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('schemes')}</NavLink>
             <NavLink to="/outbreaks" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('outbreaks')}</NavLink>
             <NavLink to="/helplines" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('helplines')}</NavLink>
            <NavLink to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('dashboard')}</NavLink>
            <div className="border-t border-gray-700 mt-2 pt-2">
                 {isAuthenticated ? (
                  <button onClick={() => { logout(); setIsMenuOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('logout')}</button>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <button onClick={() => { openLoginModal(); setIsMenuOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{t('login')}</button>
                    <button onClick={() => { openSignupModal(); setIsMenuOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700">{t('signup')}</button>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;