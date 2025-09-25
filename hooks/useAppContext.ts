
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants';
import type { LanguageCode } from '../types';

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  
  const t = (key: string, replacements?: { [key: string]: string }): string => {
    let translation = translations[key]?.[context.language] || key;
    if (replacements) {
        Object.keys(replacements).forEach(rKey => {
            translation = translation.replace(`{${rKey}}`, replacements[rKey]);
        });
    }
    return translation;
  };

  return { ...context, t };
};
