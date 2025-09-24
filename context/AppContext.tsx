import React, { createContext, useState, ReactNode } from 'react';
import type { LanguageCode } from '../types';

interface AuthModalState {
  isOpen: boolean;
  mode: 'login' | 'signup';
}

interface AppContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  authModal: AuthModalState;
  setAuthModal: React.Dispatch<React.SetStateAction<AuthModalState>>;
  openLoginModal: () => void;
  openSignupModal: () => void;
  closeAuthModal: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authModal, setAuthModal] = useState<AuthModalState>({ isOpen: false, mode: 'login' });

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const openLoginModal = () => setAuthModal({ isOpen: true, mode: 'login' });
  const openSignupModal = () => setAuthModal({ isOpen: true, mode: 'signup' });
  const closeAuthModal = () => setAuthModal({ isOpen: false, mode: 'login' });

  return (
    <AppContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        isAuthenticated, 
        login, 
        logout,
        authModal,
        setAuthModal,
        openLoginModal,
        openSignupModal,
        closeAuthModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};