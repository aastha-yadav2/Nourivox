
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants';
import type { LanguageCode } from '../types';

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  
  const t = (key: string): string => {
    return translations[key]?.[context.language] || key;
  };

  return { ...context, t };
};
