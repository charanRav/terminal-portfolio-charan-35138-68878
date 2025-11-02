import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      certifications: 'Certifications',
      roadmap: 'Roadmap',
      publications: 'Publications',
      gamezone: 'GameZone',
      contact: 'Contact'
    },
    hero: {
      aspiring: 'Aspiring',
      roles: {
        software: 'Software Engineer',
        ai: 'AI & Cloud Developer',
        data: 'Data Analyst',
        tech: 'Emerging Tech Enthusiast'
      },
      description: 'B.Tech Computer Science & Engineering Graduate from',
      university: 'SRM Institute of Science and Technology',
      cgpa: 'CGPA: 8.94 / 10 | Graduated May 2025',
      interests: 'AI • Cloud Computing • Data Analytics • Intelligent Systems',
      viewResume: 'View Resume',
      viewCoverLetter: 'View Cover Letter',
      viewProjects: 'View Projects',
      resumeTitle: 'Resume - Ravula Charan',
      coverLetterTitle: 'Cover Letter - Ravula Charan'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      certifications: 'Zertifizierungen',
      roadmap: 'Roadmap',
      publications: 'Veröffentlichungen',
      gamezone: 'Spielzone',
      contact: 'Kontakt'
    },
    hero: {
      aspiring: 'Angehender',
      roles: {
        software: 'Software-Ingenieur',
        ai: 'KI & Cloud-Entwickler',
        data: 'Datenanalyst',
        tech: 'Enthusiast für neue Technologien'
      },
      description: 'B.Tech Informatik-Absolvent der',
      university: 'SRM Institute of Science and Technology',
      cgpa: 'CGPA: 8.94 / 10 | Abschluss Mai 2025',
      interests: 'KI • Cloud Computing • Datenanalyse • Intelligente Systeme',
      viewResume: 'Lebenslauf ansehen',
      viewCoverLetter: 'Anschreiben ansehen',
      viewProjects: 'Projekte ansehen',
      resumeTitle: 'Lebenslauf - Ravula Charan',
      coverLetterTitle: 'Anschreiben - Ravula Charan'
    }
  }
};
