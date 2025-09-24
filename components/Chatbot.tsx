import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { useAppContext } from '../hooks/useAppContext';
import { languages, UserIcon, AiIcon, SendIcon, PaperClipIcon, MicrophoneIcon, SpeakerOnIcon, SpeakerOffIcon } from '../constants';
import type { Message, LanguageCode } from '../types';

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

const Chatbot: React.FC = () => {
  const { language, t } = useAppContext();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  const systemInstruction = `You are a helpful and empathetic AI healthcare assistant. Your name is Nourivox. You provide general health guidance but are not a substitute for a professional doctor. If a user describes serious symptoms (e.g., chest pain, difficulty breathing, severe bleeding, loss of consciousness), you must strongly advise them to see a doctor immediately or visit the nearest emergency room. Always be supportive. Respond in the same language as the user's query. For image analysis, provide general observations and advise consulting a specialist (e.g., 'This appears to be a skin rash, it is best to consult a dermatologist for a proper diagnosis.'). Do not provide a medical diagnosis. For prescriptions, list the medicine names you can identify.`;

  // Map app language codes to BCP 47 tags for Speech API
  const langMap: Record<LanguageCode, string> = {
    en: 'en-US',
    hi: 'hi-IN',
    mr: 'mr-IN',
    bn: 'bn-IN',
    ta: 'ta-IN',
    te: 'te-IN',
    gu: 'gu-IN',
  };
  
  useEffect(() => {
    // Function to populate voices
    const populateVoiceList = () => {
        if (typeof speechSynthesis === 'undefined') {
            return;
        }
        const availableVoices = speechSynthesis.getVoices();
        setVoices(availableVoices);
    };

    // Initial population
    populateVoiceList();

    // Repopulate when voices change (required for some browsers)
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    
    // Cleanup speech on unmount
    return () => {
        if (typeof speechSynthesis !== 'undefined') {
            speechSynthesis.cancel();
        }
    }
  }, []);

  const speakText = (text: string, langCode: LanguageCode) => {
    if (!isSpeechEnabled || typeof speechSynthesis === 'undefined' || voices.length === 0) return;

    speechSynthesis.cancel(); // Stop any previous speech
    const utterance = new SpeechSynthesisUtterance(text);
    const targetLang = langMap[langCode];
    utterance.lang = targetLang;

    // --- Voice Selection Logic ---
    // Keywords to identify a "sweet girl voice"
    const femaleVoiceKeywords = ['female', 'girl', 'woman', 'kanya', 'zira', 'susan', 'samantha', 'femenino', 'femme', 'wanita'];

    // Filter available voices for the target language
    const languageVoices = voices.filter(v => v.lang === targetLang || v.lang.startsWith(langCode));

    let selectedVoice = null;

    // 1. Prioritize a voice with a "female" keyword in its name
    selectedVoice = languageVoices.find(v =>
      femaleVoiceKeywords.some(keyword => v.name.toLowerCase().includes(keyword))
    );

    // 2. If no specific female voice is found, fall back to the first available voice for that language
    if (!selectedVoice && languageVoices.length > 0) {
      selectedVoice = languageVoices[0];
    }
    
    // 3. If a suitable voice was found, assign it.
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    // If no voice is found for the language, the browser will use its default for the utterance's lang property.
    // --- End of Voice Selection Logic ---
    
    speechSynthesis.speak(utterance);
  };


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = langMap[language];

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    // Cleanup: stop recognition if component unmounts while listening
    return () => {
      recognition.stop();
    };
}, [language]);

  const handleToggleListening = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
    } else {
      setInput('');
      recognition.start();
    }
    setIsListening(!isListening);
  };

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

  const handleSendMessage = async () => {
    if ((!input.trim() && !imageFile) || isLoading) return;

    setIsLoading(true);
    const userMessage: Message = { sender: 'user', text: input, image: imagePreview || undefined };
    setMessages(prev => [...prev, userMessage]);
    
    setInput('');
    setImageFile(null);
    setImagePreview(null);
    
    try {
      const model = ai.models;
      const textPart = { text: input || 'Please analyze this image.' };
      let requestParts;

      if (imageFile) {
        const imagePart = await fileToGenerativePart(imageFile);
        requestParts = [imagePart, textPart];
      } else {
        requestParts = [textPart];
      }
      
      const responseSchema = {
        type: Type.OBJECT,
        properties: {
          reply: {
            type: Type.STRING,
            description: "The AI's response to the user in their language.",
          },
          lang: {
            type: Type.STRING,
            description: `The language code of the reply. Must be one of: ${languages.map(l => l.code).join(', ')}.`,
          },
        },
        required: ['reply', 'lang'],
      };

      const response = await model.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: requestParts },
        config: {
          systemInstruction: systemInstruction,
          responseMimeType: "application/json",
          responseSchema: responseSchema,
        },
      });
      
      let aiResponseText: string;
      let detectedLang: LanguageCode = language; // Default to UI language

      try {
        const jsonResponse = JSON.parse(response.text);
        aiResponseText = jsonResponse.reply || "I'm sorry, I couldn't generate a proper response.";
        
        const receivedLang = jsonResponse.lang;
        if (languages.some(l => l.code === receivedLang)) {
          detectedLang = receivedLang;
        }

      } catch (e) {
        console.error("Failed to parse JSON response:", e, "Raw response:", response.text);
        aiResponseText = response.text || 'Sorry, I encountered an error. Please try again.';
      }
      
      const aiMessage: Message = { sender: 'ai', text: aiResponseText };
      setMessages(prev => [...prev, aiMessage]);
      speakText(aiResponseText, detectedLang);

    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessageText = 'Sorry, I encountered an error. Please try again.';
      const errorMessage: Message = { sender: 'ai', text: errorMessageText };
      setMessages(prev => [...prev, errorMessage]);
      speakText(errorMessageText, language);

    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Nourivox AI Assistant</h2>
            <button 
                onClick={() => setIsSpeechEnabled(!isSpeechEnabled)} 
                className="p-2 text-gray-500 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full"
                aria-label={isSpeechEnabled ? "Disable text-to-speech" : "Enable text-to-speech"}
            >
            {isSpeechEnabled ? <SpeakerOnIcon /> : <SpeakerOffIcon />}
            </button>
        </div>
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            {msg.sender === 'ai' && <AiIcon />}
            <div className={`rounded-lg px-4 py-3 max-w-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
              {msg.image && <img src={msg.image} alt="User upload" className="rounded-md mb-2 max-h-60" />}
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
            {msg.sender === 'user' && <UserIcon />}
          </div>
        ))}
        {isLoading && (
            <div className="flex items-start gap-4">
                <AiIcon />
                <div className="rounded-lg px-4 py-3 max-w-lg bg-gray-100 text-gray-800">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                    </div>
                </div>
            </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 bg-gray-50 border-t">
        {imagePreview && (
          <div className="relative inline-block mb-2">
            <img src={imagePreview} alt="Preview" className="h-20 w-20 object-cover rounded-md" />
            <button
              onClick={() => { setImageFile(null); setImagePreview(null); }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs"
            >
              &times;
            </button>
          </div>
        )}
        <div className="flex items-center bg-white rounded-full border shadow-sm pr-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={isListening ? 'Listening...' : t('chatbot_placeholder')}
            className="flex-1 p-4 bg-transparent focus:outline-none text-gray-800"
            disabled={isLoading}
          />
          <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
          <button onClick={() => fileInputRef.current?.click()} className="p-2 text-gray-500 hover:text-teal-600" disabled={isLoading || isListening}>
            <PaperClipIcon />
          </button>
           <button onClick={handleToggleListening} className="p-2 text-gray-500 hover:text-teal-600" disabled={isLoading}>
            <MicrophoneIcon isListening={isListening} />
          </button>
          <button onClick={handleSendMessage} className="p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 disabled:bg-gray-300" disabled={isLoading || isListening}>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;