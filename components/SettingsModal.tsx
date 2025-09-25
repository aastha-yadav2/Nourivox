import React, { useState, useEffect } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { CloseIcon, languages } from '../constants';
import type { LanguageCode } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  toggleHistoryPanel: () => void;
  clearAllHistory: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, toggleHistoryPanel, clearAllHistory }) => {
    const { language, setLanguage, isSpeechEnabled, setIsSpeechEnabled, t } = useAppContext();
    const [wakeWord, setWakeWord] = useState('Hey Nourivox');

    useEffect(() => {
        const savedWakeWord = localStorage.getItem('nourivoxWakeWord');
        if (savedWakeWord) {
            setWakeWord(savedWakeWord);
        }
    }, []);

    if (!isOpen) return null;

    const handleSaveWakeWord = () => {
        localStorage.setItem('nourivoxWakeWord', wakeWord);
        onClose(); // Close modal on save for better UX
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-lg relative border border-gray-700 animate-fade-in text-gray-300" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">{t('settings')}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close">
                        <CloseIcon />
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Voice & Language Section */}
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                        <h3 className="text-lg font-semibold text-teal-400 mb-4">{t('voice_language')}</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="speech-lang" className="block text-sm font-medium mb-1">{t('speech_language')}</label>
                                <select 
                                    id="speech-lang" 
                                    value={language} 
                                    onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                                    className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                                >
                                    {languages.map(lang => (
                                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="spoken-responses-toggle" className="text-sm font-medium">{t('spoken_responses')}</label>
                                <label htmlFor="spoken-responses-toggle" className="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" id="spoken-responses-toggle" className="sr-only peer" checked={isSpeechEnabled} onChange={() => setIsSpeechEnabled(!isSpeechEnabled)} />
                                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Wake Word Section */}
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                        <h3 className="text-lg font-semibold text-teal-400 mb-4">{t('wake_word')}</h3>
                        <div>
                            <label htmlFor="wake-word-input" className="block text-sm font-medium mb-1">{t('custom_wake_word')}</label>
                            <div className="flex items-center gap-2">
                                <input 
                                    type="text"
                                    id="wake-word-input" 
                                    value={wakeWord}
                                    onChange={(e) => setWakeWord(e.target.value)}
                                    className="flex-grow p-2 border border-gray-600 bg-gray-700 text-white rounded"
                                />
                                <button onClick={handleSaveWakeWord} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">{t('save')}</button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">{t('wake_word_desc')}</p>
                        </div>
                    </div>
                    
                    {/* Data Management Section */}
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                        <h3 className="text-lg font-semibold text-teal-400 mb-4">{t('manage_data')}</h3>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => { toggleHistoryPanel(); onClose(); }} className="flex-1 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-500 transition-colors">{t('view_manage_history')}</button>
                            <button onClick={clearAllHistory} className="flex-1 px-4 py-2 bg-red-800 text-white font-semibold rounded-md hover:bg-red-700 transition-colors">{t('clear_all_history')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
