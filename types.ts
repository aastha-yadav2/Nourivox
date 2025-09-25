
export interface Message {
  sender: 'user' | 'ai';
  text: string;
  image?: string;
}

export interface Appointment {
  id: number;
  doctor: string;
  date: string;
  time: string;
}

export interface Reminder {
  id: number;
  text: string;
  datetime: string;
}

export type LanguageCode = 'en' | 'hi' | 'mr' | 'bn' | 'ta' | 'te' | 'gu';

export interface Translations {
  [key: string]: { [key in LanguageCode]: string };
}

export interface PrescriptionAnalysisResult {
  medicines: {
    name: string;
    dosage: string;
    frequency: string;
  }[];
  authenticity_checks: {
    item: string;
    status: 'Present' | 'Not Clear' | 'Missing';
  }[];
  recommendations: string[];
  disclaimer: string;
}

export interface AnalysisHistoryItem {
  id: string;
  timestamp: string;
  imagePreview: string; // base64 data URL
  result: PrescriptionAnalysisResult;
}
