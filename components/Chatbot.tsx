import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { useAppContext } from '../hooks/useAppContext';
import { UserIcon, AiIcon, SendIcon, PaperClipIcon, MicrophoneIcon, SpeakerOnIcon, SpeakerOffIcon, MenuIcon, NewChatIcon, TrashIcon, languages, SettingsIcon } from '../constants';
import type { Message, LanguageCode, ChatSession } from '../types';
import SettingsModal from './SettingsModal';

// Fix: Add type definitions for Web Speech API to resolve TypeScript errors.
interface SpeechRecognitionResult {
    isFinal: boolean;
    [index: number]: SpeechRecognitionAlternative;
    length: number;
}
interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
}
interface SpeechRecognitionResultList {
    [index: number]: SpeechRecognitionResult;
    length: number;
    item(index: number): SpeechRecognitionResult;
}
interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
}
interface SpeechRecognitionErrorEvent extends Event {
    error: string;
}
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
}
declare var SpeechRecognition: {
  prototype: SpeechRecognition;
  new(): SpeechRecognition;
};
declare var webkitSpeechRecognition: {
  prototype: SpeechRecognition;
  new(): SpeechRecognition;
};

// Extend the Window interface for vendor-prefixed SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export const Chatbot: React.FC = () => {
  const { language, setLanguage, t, isSpeechEnabled, setIsSpeechEnabled } = useAppContext();
  const [input, setInput] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isHistoryPanelOpen, setIsHistoryPanelOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  const systemInstruction = `You are a helpful and empathetic AI healthcare assistant named Nourivox.
- **Core Instruction:** All health information, advice, and data you provide MUST be based on guidelines and information from the World Health Organization (WHO), the Ministry of Health and Family Welfare (MoHFW) India, and other verified government health organizations or NGOs. When providing specific data or recommendations, cite the source (e.g., "According to WHO guidelines..."). Do not use unverified or general web sources.
- Provide general health guidance, but explicitly state you are not a substitute for a professional doctor.
- **CRITICAL (PHYSICAL HEALTH):** If a user describes serious symptoms (e.g., chest pain, difficulty breathing, severe bleeding, loss of consciousness), you MUST strongly advise them to see a doctor immediately or visit the nearest emergency room.
- **CRITICAL (MENTAL HEALTH):** If a user expresses feelings of worthlessness, hopelessness, self-harm, or suicidal thoughts, you MUST respond with the following protocol:
    1.  Immediately express empathy and validation. Use phrases like "It sounds like you're going through a lot right now, and it's brave of you to share that," or "I'm so sorry you're feeling this way, and I want you to know that your feelings are valid."
    2.  Gently offer words of hope and encouragement. Remind them that they are valuable and that these feelings can pass. Use phrases like, "Please hold on, these intense feelings are often temporary," and "You are not alone, and there is hope for feeling better."
    3.  **DO NOT** attempt to be a therapist.
    4.  **IMMEDIATELY and CLEARLY** provide a helpline. Say this exactly: "It's really important to talk to someone who can support you right now. Please consider reaching out to the KIRAN Mental Health Helpline at 1800-599-0019. They are available 24/7 and are there to help."
    5.  End with a warm, supportive message, like "Please take care of yourself. You are important."
- Always be supportive and respond in the same language as the user's query.
- **Image Analysis:** When an image is provided, follow this structure:
    1.  Start with a brief, one-sentence summary of the image.
    2.  Provide your observations in a bulleted list (using markdown like '* Point 1'). Your observations must be neutral and avoid diagnosis.
    3.  Conclude with a clear recommendation to consult a specialist (e.g., 'For a proper diagnosis and treatment, it is essential to consult a dermatologist.').
    4.  **DO NOT** provide a medical diagnosis under any circumstances.
- **Prescription Analysis:** When analyzing a prescription image, identify and list the medicine names in a clear, bulleted list. Information about medications should be general and based on publicly available information from official sources.`;

  const langMap: Record<LanguageCode, string> = { en: 'en-US', hi: 'hi-IN', mr: 'mr-IN', bn: 'bn-IN', ta: 'ta-IN', te: 'te-IN', gu: 'gu-IN' };

  // Load history from localStorage on initial render
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('nourivoxChatHistory');
      if (savedHistory) {
        const history = JSON.parse(savedHistory);
        setChatHistory(history);
        setCurrentSessionId(history[0]?.id || null);
      } else {
        startNewChat();
      }
    } catch (error) {
      console.error("Failed to load chat history:", error);
      startNewChat();
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem('nourivoxChatHistory', JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  const startNewChat = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: t('new_chat'),
      messages: [],
      timestamp: new Date().toISOString()
    };
    setChatHistory(prev => [newSession, ...prev.filter(s => s.messages.length > 0)]);
    setCurrentSessionId(newSession.id);
  };
  
  const selectChat = (id: string) => {
    setCurrentSessionId(id);
  };
  
  const deleteChat = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updatedHistory = chatHistory.filter(session => session.id !== id);
    setChatHistory(updatedHistory);
    
    if (currentSessionId === id) {
      if (updatedHistory.length > 0) {
        setCurrentSessionId(updatedHistory[0].id);
      } else {
        startNewChat();
      }
    }
    if (updatedHistory.length === 0) {
        localStorage.removeItem('nourivoxChatHistory');
    }
  };

  const handleClearAllHistory = () => {
    if (window.confirm(`${t('confirm_clear_history_title')}\n\n${t('confirm_clear_history_desc')}`)) {
        localStorage.removeItem('nourivoxChatHistory');
        const newSession: ChatSession = {
            id: Date.now().toString(),
            title: t('new_chat'),
            messages: [],
            timestamp: new Date().toISOString()
        };
        setChatHistory([newSession]);
        setCurrentSessionId(newSession.id);
    }
  };

  const speakText = useCallback((text: string, langCode: LanguageCode) => {
    if (!isSpeechEnabled || typeof speechSynthesis === 'undefined' || voices.length === 0) return;

    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const targetLang = langMap[langCode];
    utterance.lang = targetLang;
    
    const femaleVoiceKeywords = ['female', 'girl', 'woman', 'kanya', 'zira', 'susan', 'samantha', 'femenino', 'femme', 'wanita'];
    const languageVoices = voices.filter(v => v.lang === targetLang || v.lang.startsWith(langCode));
    let selectedVoice = languageVoices.find(v => femaleVoiceKeywords.some(keyword => v.name.toLowerCase().includes(keyword)));
    if (!selectedVoice && languageVoices.length > 0) {
      selectedVoice = languageVoices[0];
    }
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    
    speechSynthesis.speak(utterance);
  }, [isSpeechEnabled, voices, langMap]);
  
  useEffect(() => {
    const populateVoiceList = () => {
        if (typeof speechSynthesis === 'undefined') return;
        setVoices(speechSynthesis.getVoices());
    };
    populateVoiceList();
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    return () => { if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel(); }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, currentSessionId]);

  const fileToGenerativePart = async (file: File) => {
    const base64EncodedDataPromise = new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  };

  const handleSendMessage = useCallback(async (textOverride?: string) => {
    const messageText = textOverride ?? input;
    const fileToSend = imageFile;

    if ((!messageText.trim() && !fileToSend) || isLoading || !currentSessionId) return;

    setIsLoading(true);
    
    const userMessage: Message = { sender: 'user', text: messageText, image: imagePreview || undefined };
    
    // Update state with user message
    const currentSession = chatHistory.find(s => s.id === currentSessionId);
    const isFirstMessage = currentSession ? currentSession.messages.length === 0 : false;
    
    const updatedHistoryWithUserMsg = chatHistory.map(session => {
        if (session.id === currentSessionId) {
            const newTitle = isFirstMessage && messageText.trim()
                ? messageText.substring(0, 40) + (messageText.length > 40 ? '...' : '') 
                : session.title;
            return {
                ...session,
                title: newTitle,
                messages: [...session.messages, userMessage],
            };
        }
        return session;
    });
    setChatHistory(updatedHistoryWithUserMsg);
    
    setInput('');
    setImageFile(null);
    setImagePreview(null);
    
    try {
      const textPart = { text: messageText || 'Please analyze this image.' };
      const requestParts = fileToSend ? [await fileToGenerativePart(fileToSend), textPart] : [textPart];
      
      const responseSchema = { type: Type.OBJECT, properties: { reply: { type: Type.STRING }, lang: { type: Type.STRING } }, required: ['reply', 'lang'] };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash', contents: { parts: requestParts },
        config: { systemInstruction, responseMimeType: "application/json", responseSchema }
      });
      
      let aiResponseText: string;
      let detectedLang: LanguageCode = language;

      try {
        const jsonResponse = JSON.parse(response.text);
        aiResponseText = jsonResponse.reply || "I'm sorry, I couldn't generate a proper response.";
        const receivedLang = jsonResponse.lang;
        if (languages.some(l => l.code === receivedLang) && receivedLang !== language) {
          detectedLang = receivedLang;
          setLanguage(receivedLang);
        }
      } catch (e) {
        aiResponseText = response.text || 'Sorry, I encountered an error. Please try again.';
      }
      
      const aiMessage: Message = { sender: 'ai', text: aiResponseText };
      setChatHistory(prev => prev.map(s => s.id === currentSessionId ? { ...s, messages: [...s.messages, aiMessage] } : s));
      speakText(aiResponseText, detectedLang);

    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessageText = 'Sorry, I encountered an error. Please try again.';
      const errorMessage: Message = { sender: 'ai', text: errorMessageText };
      setChatHistory(prev => prev.map(s => s.id === currentSessionId ? { ...s, messages: [...s.messages, errorMessage] } : s));
      speakText(errorMessageText, language);
    } finally {
      setIsLoading(false);
    }
  }, [input, imageFile, imagePreview, isLoading, language, setLanguage, ai, systemInstruction, speakText, chatHistory, currentSessionId]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = langMap[language];
    recognition.onresult = (event) => handleSendMessage(event.results[0][0].transcript);
    recognition.onerror = (event) => { console.error("Speech recognition error:", event.error); setIsListening(false); };
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
    return () => recognitionRef.current?.stop();
  }, [language, handleSendMessage, langMap]);

  const handleToggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setInput('');
      setIsListening(true);
      recognitionRef.current?.start();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const currentMessages = chatHistory.find(s => s.id === currentSessionId)?.messages || [];

  return (
    <>
      <div className="flex h-[calc(100vh-8rem)] bg-white rounded-lg shadow-xl overflow-hidden">
          {/* History Panel */}
          <div className={`
              absolute md:relative z-20 md:z-auto
              h-full w-72 bg-gray-100 border-r border-gray-200 
              transition-transform duration-300 ease-in-out
              ${isHistoryPanelOpen ? 'translate-x-0' : '-translate-x-full'}
              md:translate-x-0
              flex flex-col
          `}>
              <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">{t('chat_history')}</h2>
                  <button onClick={startNewChat} className="p-2 text-gray-600 hover:text-teal-600">
                      <NewChatIcon />
                  </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                  {chatHistory.map(session => (
                      <div 
                          key={session.id} 
                          onClick={() => selectChat(session.id)}
                          className={`p-3 m-2 rounded-lg cursor-pointer group flex justify-between items-center ${currentSessionId === session.id ? 'bg-teal-100' : 'hover:bg-gray-200'}`}
                      >
                          <p className="text-sm text-gray-700 truncate flex-1 pr-2">{session.title}</p>
                          <button onClick={(e) => deleteChat(e, session.id)} className="p-1 text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                              <TrashIcon />
                          </button>
                      </div>
                  ))}
              </div>
          </div>

          {/* Main Chat Panel */}
          <div className="flex-1 flex flex-col bg-white">
              <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                  <div className="flex items-center">
                      <button onClick={() => setIsHistoryPanelOpen(!isHistoryPanelOpen)} className="p-2 mr-2 text-gray-600 hover:text-teal-600 md:hidden">
                          <MenuIcon />
                      </button>
                      <h2 className="text-lg font-semibold text-gray-800">Nourivox AI Assistant</h2>
                  </div>
                  <button onClick={() => setIsSpeechEnabled(!isSpeechEnabled)} className="p-2 text-gray-500 hover:text-teal-600 rounded-full" aria-label={isSpeechEnabled ? "Disable TTS" : "Enable TTS"}>
                      {isSpeechEnabled ? <SpeakerOnIcon /> : <SpeakerOffIcon />}
                  </button>
              </div>
              <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                  {currentMessages.map((msg, index) => (
                      <div key={index} className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                          {msg.sender === 'ai' && <AiIcon />}
                          <div className={`rounded-lg px-4 py-3 max-w-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                              {msg.image && <img src={msg.image} alt="User upload" className="rounded-lg mb-2 w-full object-cover max-h-80" />}
                              <p className="whitespace-pre-wrap">{msg.text}</p>
                          </div>
                          {msg.sender === 'user' && <UserIcon />}
                      </div>
                  ))}
                  {isLoading && (
                      <div className="flex items-start gap-4"><AiIcon /><div className="rounded-lg px-4 py-3 max-w-lg bg-gray-100 text-gray-800"><div className="flex items-center space-x-2"><div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div><div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse [animation-delay:0.2s]"></div><div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse [animation-delay:0.4s]"></div></div></div></div>
                  )}
                  <div ref={chatEndRef} />
              </div>
              <div className="p-4 bg-gray-50 border-t">
                  {imagePreview && (<div className="relative inline-block mb-2"><img src={imagePreview} alt="Preview" className="h-20 w-20 object-cover rounded-md" /><button onClick={() => { setImageFile(null); setImagePreview(null); }} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">&times;</button></div>)}
                  <div className="flex items-center bg-white rounded-full border shadow-sm pr-2">
                      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage() : null} placeholder={isListening ? 'Listening...' : t('chatbot_placeholder')} className="flex-1 p-4 bg-transparent focus:outline-none text-gray-800" disabled={isLoading} />
                      <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                      <button onClick={() => fileInputRef.current?.click()} className="p-2 text-gray-500 hover:text-teal-600" disabled={isLoading || isListening}><PaperClipIcon /></button>
                      <button onClick={() => setIsSettingsOpen(true)} className="p-2 text-gray-500 hover:text-teal-600" disabled={isLoading}><SettingsIcon /></button>
                      <button onClick={handleToggleListening} className="p-2 text-gray-500 hover:text-teal-600" disabled={isLoading}><MicrophoneIcon isListening={isListening} /></button>
                      <button onClick={() => handleSendMessage()} className="p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 disabled:bg-gray-300" disabled={isLoading || (!input.trim() && !imageFile)}><SendIcon /></button>
                  </div>
              </div>
          </div>
      </div>
      <SettingsModal 
          isOpen={isSettingsOpen} 
          onClose={() => setIsSettingsOpen(false)} 
          toggleHistoryPanel={() => setIsHistoryPanelOpen(!isHistoryPanelOpen)}
          clearAllHistory={handleClearAllHistory}
      />
    </>
  );
};
