import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  const { language, setLanguage, t } = useAppContext();
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
  
  const speakText = useCallback((text: string, langCode: LanguageCode) => {
    if (!isSpeechEnabled || typeof speechSynthesis === 'undefined' || voices.length === 0) return;

    speechSynthesis.cancel(); // Stop any previous speech
    const utterance = new SpeechSynthesisUtterance(text);
    const targetLang = langMap[langCode];
    utterance.lang = targetLang;

    // --- Voice Selection Logic ---
    const femaleVoiceKeywords = ['female', 'girl', 'woman', 'kanya', 'zira', 'susan', 'samantha', 'femenino', 'femme', 'wanita'];
    const languageVoices = voices.filter(v => v.lang === targetLang || v.lang.startsWith(langCode));
    let selectedVoice = languageVoices.find(v => femaleVoiceKeywords.some(keyword => v.name.toLowerCase().includes(keyword)));
    if (!selectedVoice && languageVoices.length > 0) {
      selectedVoice = languageVoices[0];
    }
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    // --- End of Voice Selection Logic ---
    
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
    return () => {
        if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

    if ((!messageText.trim() && !fileToSend) || isLoading) {
      return;
    }

    setIsLoading(true);
    const userMessage: Message = { sender: 'user', text: messageText, image: imagePreview || undefined };
    setMessages(prev => [...prev, userMessage]);
    
    setInput('');
    setImageFile(null);
    setImagePreview(null);
    
    try {
      const model = ai.models;
      const textPart = { text: messageText || 'Please analyze this image.' };
      let requestParts;

      if (fileToSend) {
        const imagePart = await fileToGenerativePart(fileToSend);
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
      let detectedLang: LanguageCode = language;

      try {
        const jsonResponse = JSON.parse(response.text);
        aiResponseText = jsonResponse.reply || "I'm sorry, I couldn't generate a proper response.";
        
        const receivedLang = jsonResponse.lang;
        if (languages.some(l => l.code === receivedLang)) {
          detectedLang = receivedLang;
          // If the detected language is different, update the app's language.
          if (receivedLang !== language) {
            setLanguage(receivedLang);
          }
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
  }, [input, imageFile, imagePreview, isLoading, language, setLanguage, ai, systemInstruction, speakText]);


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
      handleSendMessage(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language, handleSendMessage, langMap]);

  const handleToggleListening = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
    } else {
      setInput('');
      setIsListening(true);
      recognition.start();
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
              {msg.image && <img src={msg.image} alt="User upload" className="rounded-lg mb-2 w-full object-cover max-h-80" />}
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
            onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage() : null}
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
          <button onClick={() => handleSendMessage()} className="p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 disabled:bg-gray-300" disabled={isLoading || (!input.trim() && !imageFile)}>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;