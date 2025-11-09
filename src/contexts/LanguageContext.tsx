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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setIsTransitioning(true);
    
    // Wait for fade-out animation
    setTimeout(() => {
      setLanguage(lang);
      
      // Wait for language change, then fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

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
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      <div className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
        {children}
      </div>
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
      contact: 'Contact',
      resume: 'Resume'
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
    },
    about: {
      title: 'About Me',
      education: 'Education',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      university: 'SRM Institute of Science and Technology, Chennai',
      cgpa: 'CGPA: 8.94 / 10 | May 2025',
      softSkills: 'Soft Skills',
      skills: ['Analytical Problem-Solving', 'Technical Communication', 'Data Interpretation', 'Collaboration', 'Adaptability to Emerging Tech'],
      programmingLanguages: 'Programming Languages',
      toolsTech: 'Tools & Technologies'
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Proficiencies across programming languages, frameworks, and cloud platforms',
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools & Platforms',
      concepts: 'Core Concepts',
      languagesCount: 'Languages',
      librariesCount: 'Libraries',
      toolsCount: 'Tools',
      conceptsCount: 'Core Concepts'
    },
    projects: {
      title: 'Personal Projects',
      subtitle: 'AI/ML and cybersecurity projects with proven results and high accuracy',
      searchPlaceholder: 'Search projects...',
      allCategories: 'All Categories',
      status: 'Status',
      impact: 'Impact:',
      team: 'Team',
      duration: 'Duration',
      noProjects: 'No projects found',
      noProjectsDesc: 'Try adjusting your search or filter criteria',
      clearFilters: 'Clear filters',
      completed: 'Completed',
      inProgress: 'In Progress',
      individualProject: 'Individual Project'
    },
    certifications: {
      title: 'Certifications',
      subtitle: 'Professional certifications in Python, AWS, AI, Machine Learning, and Data Analysis',
      skillsCovered: 'Skills Covered:',
      viewCertificate: 'View Certificate',
      status: 'Status',
      completed: 'Completed',
      inProgress: 'In Progress',
      planned: 'Planned'
    },
    roadmap: {
      title: 'Career Roadmap',
      subtitle: 'Journey from AI internships to graduation with research publications',
      internship: 'internship',
      achievement: 'achievement',
      project: 'project',
      milestone: 'milestone',
      learning: 'learning',
      internships: 'Internships',
      publications: 'Publications',
      certifications: 'Certifications',
      cgpa: 'CGPA'
    },
    publications: {
      title: 'Publications & Research',
      subtitle: 'Contributing to AI, cybersecurity, and computer vision research through peer-reviewed publications',
      published: 'Published',
      viewCertificate: 'View Certificate',
      publicationsCount: 'Publications',
      researchActive: 'Research Active'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "I'm always interested in discussing new opportunities, innovative projects, or just having a conversation about AI, technology, and problem-solving.",
      connect: "Let's Connect",
      email: 'Email',
      linkedin: 'LinkedIn',
      linkedinText: 'Connect with me',
      name: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your.email@example.com',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      send: 'Send Message',
      sending: 'Sending...',
      errorTitle: 'Error',
      errorAllFields: 'Please fill in all fields',
      errorInvalidEmail: 'Please enter a valid email address',
      errorSendFailed: 'Failed to send message. Please try again or contact me directly.',
      successTitle: 'Message Sent!',
      successDesc: "Thank you for your message. I'll get back to you soon!",
      emailClientOpening: 'Email Client Opening',
      emailClientOpeningDesc: 'Your default email client should open now. If not, please email ravulacharan7@gmail.com directly.',
      emailCopied: 'Email Copied',
      emailCopiedDesc: 'Email address copied to clipboard: ravulacharan7@gmail.com'
    },
    resume: {
      title: 'Resume',
      subtitle: 'Comprehensive overview of my academic and professional journey',
      header: {
        rollNo: 'Roll No.:',
        degree: 'Bachelor of Technology - SRM University, Ramapuram'
      },
      education: {
        title: 'Education',
        degree: 'Bachelor of Technology in Computer Science and Engineering',
        university: 'SRM University, Ramapuram',
        duration: 'Sep 2021 - May 2025',
        cgpa: 'CGPA 8.95'
      },
      projects: {
        title: 'Team Projects',
        team: 'Team'
      },
      experience: {
        title: 'Experience'
      },
      skills: {
        title: 'Technical Skills and Interests',
        languages: 'Languages:',
        webDevTools: 'Web Dev Tools:',
        database: 'Database:',
        toolsPlatforms: 'Tools/Platforms:',
        relevantCoursework: 'Relevant Coursework:',
        areasOfInterest: 'Areas of Interest:'
      },
      publications: {
        title: 'Publications and Conferences'
      },
      certifications: {
        title: 'Certifications'
      }
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
      contact: 'Kontakt',
      resume: 'Lebenslauf'
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
    },
    about: {
      title: 'Über mich',
      education: 'Ausbildung',
      degree: 'Bachelor of Technology in Informatik',
      university: 'SRM Institute of Science and Technology, Chennai',
      cgpa: 'CGPA: 8.94 / 10 | Mai 2025',
      softSkills: 'Soziale Kompetenzen',
      skills: ['Analytisches Problemlösen', 'Technische Kommunikation', 'Dateninterpretation', 'Zusammenarbeit', 'Anpassungsfähigkeit an neue Technologien'],
      programmingLanguages: 'Programmiersprachen',
      toolsTech: 'Tools & Technologien'
    },
    skills: {
      title: 'Technische Fähigkeiten',
      subtitle: 'Kompetenzen in Programmiersprachen, Frameworks und Cloud-Plattformen',
      languages: 'Sprachen',
      frameworks: 'Frameworks & Bibliotheken',
      tools: 'Tools & Plattformen',
      concepts: 'Kernkonzepte',
      languagesCount: 'Sprachen',
      librariesCount: 'Bibliotheken',
      toolsCount: 'Tools',
      conceptsCount: 'Kernkonzepte'
    },
    projects: {
      title: 'Persönliche Projekte',
      subtitle: 'KI/ML und Cybersecurity-Projekte mit nachgewiesenen Ergebnissen und hoher Genauigkeit',
      searchPlaceholder: 'Projekte suchen...',
      allCategories: 'Alle Kategorien',
      status: 'Status',
      impact: 'Auswirkung:',
      team: 'Team',
      duration: 'Dauer',
      noProjects: 'Keine Projekte gefunden',
      noProjectsDesc: 'Versuchen Sie, Ihre Such- oder Filterkriterien anzupassen',
      clearFilters: 'Filter löschen',
      completed: 'Abgeschlossen',
      inProgress: 'In Bearbeitung',
      individualProject: 'Individuelles Projekt'
    },
    certifications: {
      title: 'Zertifizierungen',
      subtitle: 'Professionelle Zertifizierungen in Python, AWS, KI, maschinellem Lernen und Datenanalyse',
      skillsCovered: 'Abgedeckte Fähigkeiten:',
      viewCertificate: 'Zertifikat ansehen',
      status: 'Status',
      completed: 'Abgeschlossen',
      inProgress: 'In Bearbeitung',
      planned: 'Geplant'
    },
    roadmap: {
      title: 'Karriere-Roadmap',
      subtitle: 'Reise von KI-Praktika bis zum Abschluss mit Forschungsveröffentlichungen',
      internship: 'Praktikum',
      achievement: 'Erfolg',
      project: 'Projekt',
      milestone: 'Meilenstein',
      learning: 'Lernen',
      internships: 'Praktika',
      publications: 'Veröffentlichungen',
      certifications: 'Zertifizierungen',
      cgpa: 'CGPA'
    },
    publications: {
      title: 'Veröffentlichungen & Forschung',
      subtitle: 'Beiträge zu KI-, Cybersecurity- und Computer-Vision-Forschung durch begutachtete Veröffentlichungen',
      published: 'Veröffentlicht',
      viewCertificate: 'Zertifikat ansehen',
      publicationsCount: 'Veröffentlichungen',
      researchActive: 'Forschung aktiv'
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Ich bin immer daran interessiert, über neue Möglichkeiten, innovative Projekte oder einfach über KI, Technologie und Problemlösung zu sprechen.',
      connect: 'Lass uns verbinden',
      email: 'E-Mail',
      linkedin: 'LinkedIn',
      linkedinText: 'Vernetzen Sie sich mit mir',
      name: 'Name',
      namePlaceholder: 'Ihr Name',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'ihre.email@beispiel.de',
      message: 'Nachricht',
      messagePlaceholder: 'Ihre Nachricht...',
      send: 'Nachricht senden',
      sending: 'Senden...',
      errorTitle: 'Fehler',
      errorAllFields: 'Bitte füllen Sie alle Felder aus',
      errorInvalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      errorSendFailed: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.',
      successTitle: 'Nachricht gesendet!',
      successDesc: 'Vielen Dank für Ihre Nachricht. Ich werde mich bald bei Ihnen melden!',
      emailClientOpening: 'E-Mail-Client wird geöffnet',
      emailClientOpeningDesc: 'Ihr Standard-E-Mail-Client sollte sich jetzt öffnen. Falls nicht, senden Sie bitte eine E-Mail direkt an ravulacharan7@gmail.com.',
      emailCopied: 'E-Mail kopiert',
      emailCopiedDesc: 'E-Mail-Adresse in die Zwischenablage kopiert: ravulacharan7@gmail.com'
    },
    resume: {
      title: 'Lebenslauf',
      subtitle: 'Umfassender Überblick über meine akademische und berufliche Laufbahn',
      header: {
        rollNo: 'Matrikelnummer:',
        degree: 'Bachelor of Technology - SRM Universität, Ramapuram'
      },
      education: {
        title: 'Ausbildung',
        degree: 'Bachelor of Technology in Informatik',
        university: 'SRM Universität, Ramapuram',
        duration: 'Sep 2021 - Mai 2025',
        cgpa: 'CGPA 8.95'
      },
      projects: {
        title: 'Teamprojekte',
        team: 'Team'
      },
      experience: {
        title: 'Berufserfahrung'
      },
      skills: {
        title: 'Technische Fähigkeiten und Interessen',
        languages: 'Sprachen:',
        webDevTools: 'Web-Entwicklungstools:',
        database: 'Datenbank:',
        toolsPlatforms: 'Tools/Plattformen:',
        relevantCoursework: 'Relevante Kurse:',
        areasOfInterest: 'Interessensgebiete:'
      },
      publications: {
        title: 'Veröffentlichungen und Konferenzen'
      },
      certifications: {
        title: 'Zertifizierungen'
      }
    }
  }
};
