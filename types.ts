
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
