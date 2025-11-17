import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de' | 'es' | 'fr';

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
      cgpa: 'CGPA',
      item1Title: 'AI Intern (Python Developer)',
      item1Company: 'Codsofts',
      item1Desc: 'Built chatbot using keyword-matching, implemented Minimax AI for Tic Tac Toe, trained CNN-LSTM model for image captioning',
      item2Title: 'AWS Cloud Intern',
      item2Company: 'INTERN-FORTE',
      item2Desc: 'Designed cloud architecture using EC2, S3, IAM. Reduced infrastructure load time by 25% and costs by 18%',
      item3Title: 'Research Publications',
      item3Company: '3 Research Papers Published',
      item3Desc: 'Published in National Conference on Climate Change (MSIT Delhi), IJFMR, and IJCRT journals',
      item4Title: 'Final Year Project',
      item4Company: 'Deep Learning & EMG Domains',
      item4Desc: 'Working on Deep Learning-Based Traffic Management Using Gesture Recognition with 93% accuracy',
      item5Title: 'B.Tech Graduation',
      item5Company: 'SRM Institute of Science and Technology',
      item5Desc: 'Bachelor of Technology in Computer Science & Engineering - CGPA: 8.94/10',
      item6Title: 'Learning SAP SAC',
      item6Company: 'SAP Analytics Cloud Certification',
      item6Desc: 'Pursuing SAP Analytics Cloud expertise to enhance business intelligence and data visualization skills'
    },
    publications: {
      title: 'Publications & Research',
      subtitle: 'Contributing to AI, cybersecurity, and computer vision research through peer-reviewed publications',
      published: 'Published',
      viewCertificate: 'View Certificate',
      publicationsCount: 'Publications',
      researchActive: 'Research Active',
      pub1Title: 'Proactive Malware Detection to Secure Web Data Using Random Forest Algorithm',
      pub1Journal: 'National Conference on Climate Change, MSIT Delhi',
      pub1Desc: 'Presented research on malware detection achieving high accuracy using Random Forest algorithm for enhanced web security',
      pub2Title: 'AI Enhancement Automated Movement Detection',
      pub2Journal: 'IJFMR, Vol 6 Issue 2',
      pub2Desc: 'Research on real-time object tracking using neural networks for automated movement detection in surveillance systems',
      pub3Title: 'Insider Security Risk Using Graph Analysis',
      pub3Journal: 'IJCRT, Vol 12 Issue 7',
      pub3Desc: 'Graph-theory-based approach for detecting internal security threats and analyzing insider risk patterns'
    },
    aiProjects: {
      title: 'AI-Powered Projects',
      subtitle: 'Projects integrated with cutting-edge AI tools and technologies',
      viewLiveProject: 'View Live Project',
      private: 'Private'
    },
    liveWebsites: {
      title: 'Production Websites',
      subtitle: 'Real-world applications built by Ravula Charan, currently live and serving users worldwide',
      liveRunning: 'Live & Running',
      category: 'Category',
      keyFeatures: 'Key Features:',
      viewWebsite: 'View Live Website',
      liveActive: 'Live & Active',
      activeNote: '✨ These applications are actively maintained and continuously improved'
    },
    gamezone: {
      title: 'GameZone',
      subtitle: "I've played {count}+ games across all genres — PC & Mobile",
      gamesCount: '100',
      philosophy: 'Gaming Philosophy',
      philosophyText: 'Gaming is my passion and part of my {mindset}. Every game teaches strategic thinking, quick decision-making, and creative problem-solving — skills that directly enhance my approach to coding and AI development.',
      mindset: 'problem-solving mindset',
      genres: {
        fps: 'FPS',
        strategy: 'Strategy',
        adventure: 'Adventure',
        moba: 'MOBA',
        action: 'Action',
        rpg: 'RPG'
      }
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
    aiProjects: {
      title: 'KI-gestützte Projekte',
      subtitle: 'Projekte, die mit modernsten KI-Tools und -Technologien integriert sind',
      viewLiveProject: 'Live-Projekt ansehen',
      private: 'Privat'
    },
    liveWebsites: {
      title: 'Produktions-Websites',
      subtitle: 'Reale Anwendungen von Ravula Charan, die derzeit live sind und Benutzer weltweit bedienen',
      liveRunning: 'Live & Aktiv',
      category: 'Kategorie',
      keyFeatures: 'Hauptmerkmale:',
      viewWebsite: 'Live-Website ansehen',
      liveActive: 'Live & Aktiv',
      activeNote: '✨ Diese Anwendungen werden aktiv gewartet und kontinuierlich verbessert'
    },
    gamezone: {
      title: 'Spielzone',
      subtitle: 'Ich habe {count}+ Spiele in allen Genres gespielt — PC & Mobil',
      gamesCount: '100',
      philosophy: 'Gaming-Philosophie',
      philosophyText: 'Gaming ist meine Leidenschaft und Teil meiner {mindset}. Jedes Spiel lehrt strategisches Denken, schnelle Entscheidungsfindung und kreatives Problemlösen — Fähigkeiten, die direkt meinen Ansatz beim Programmieren und der KI-Entwicklung verbessern.',
      mindset: 'Problemlösungs-Denkweise',
      genres: {
        fps: 'FPS',
        strategy: 'Strategie',
        adventure: 'Abenteuer',
        moba: 'MOBA',
        action: 'Action',
        rpg: 'RPG'
      }
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
    },
    es: {
      nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        skills: 'Habilidades',
        projects: 'Proyectos',
        certifications: 'Certificaciones',
        roadmap: 'Hoja de ruta',
        publications: 'Publicaciones',
        gamezone: 'Zona de juegos',
        contact: 'Contacto',
        resume: 'Currículum'
      },
      hero: {
        aspiring: 'Aspirante a',
        roles: {
          software: 'Ingeniero de Software',
          ai: 'Desarrollador de IA y Cloud',
          data: 'Analista de Datos',
          tech: 'Entusiasta de Tecnologías Emergentes'
        },
        description: 'Graduado en Ingeniería Informática de',
        university: 'Instituto de Ciencia y Tecnología SRM',
        cgpa: 'CGPA: 8.94 / 10 | Graduado Mayo 2025',
        interests: 'IA • Cloud Computing • Análisis de Datos • Sistemas Inteligentes',
        viewResume: 'Ver currículum',
        viewCoverLetter: 'Ver carta de presentación',
        viewProjects: 'Ver proyectos',
        resumeTitle: 'Currículum - Ravula Charan',
        coverLetterTitle: 'Carta de presentación - Ravula Charan'
      },
      about: {
        title: 'Sobre mí',
        education: 'Educación',
        degree: 'Licenciatura en Tecnología en Ciencias de la Computación e Ingeniería',
        university: 'Instituto de Ciencia y Tecnología SRM, Chennai',
        cgpa: 'CGPA: 8.94 / 10 | Mayo 2025',
        softSkills: 'Habilidades Blandas',
        skills: ['Resolución Analítica de Problemas', 'Comunicación Técnica', 'Interpretación de Datos', 'Colaboración', 'Adaptabilidad a Tecnologías Emergentes'],
        programmingLanguages: 'Lenguajes de Programación',
        toolsTech: 'Herramientas y Tecnologías'
      },
      skills: {
        title: 'Habilidades Técnicas',
        subtitle: 'Competencias en lenguajes de programación, frameworks y plataformas cloud',
        languages: 'Lenguajes',
        frameworks: 'Frameworks y Bibliotecas',
        tools: 'Herramientas y Plataformas',
        concepts: 'Conceptos Básicos',
        languagesCount: 'Lenguajes',
        librariesCount: 'Bibliotecas',
        toolsCount: 'Herramientas',
        conceptsCount: 'Conceptos Básicos'
      },
      projects: {
        title: 'Proyectos Personales',
        subtitle: 'Proyectos de IA/ML y ciberseguridad con resultados probados y alta precisión',
        searchPlaceholder: 'Buscar proyectos...',
        allCategories: 'Todas las categorías',
        status: 'Estado',
        impact: 'Impacto:',
        team: 'Equipo',
        duration: 'Duración',
        noProjects: 'No se encontraron proyectos',
        noProjectsDesc: 'Intente ajustar sus criterios de búsqueda o filtro',
        clearFilters: 'Limpiar filtros',
        completed: 'Completado',
        inProgress: 'En progreso',
        individualProject: 'Proyecto Individual'
      },
      certifications: {
        title: 'Certificaciones',
        subtitle: 'Certificaciones profesionales en Python, AWS, IA, Machine Learning y Análisis de Datos',
        skillsCovered: 'Habilidades cubiertas:',
        viewCertificate: 'Ver certificado',
        status: 'Estado',
        completed: 'Completado',
        inProgress: 'En progreso',
        planned: 'Planificado'
      },
      roadmap: {
        title: 'Hoja de Ruta Profesional',
        subtitle: 'Viaje desde pasantías de IA hasta la graduación con publicaciones de investigación',
        internship: 'pasantía',
        achievement: 'logro',
        project: 'proyecto',
        milestone: 'hito',
        learning: 'aprendizaje',
        internships: 'Pasantías',
        publications: 'Publicaciones',
        certifications: 'Certificaciones',
        cgpa: 'CGPA'
      },
      publications: {
        title: 'Publicaciones e Investigación',
        subtitle: 'Contribuyendo a la investigación en IA, ciberseguridad y visión por computadora a través de publicaciones revisadas por pares',
        published: 'Publicado',
        viewCertificate: 'Ver certificado',
        publicationsCount: 'Publicaciones',
        researchActive: 'Investigación activa'
      },
      aiProjects: {
        title: 'Proyectos con IA',
        subtitle: 'Proyectos integrados con herramientas y tecnologías de IA de vanguardia',
        viewLiveProject: 'Ver proyecto en vivo',
        private: 'Privado'
      },
      liveWebsites: {
        title: 'Sitios Web en Producción',
        subtitle: 'Aplicaciones del mundo real creadas por Ravula Charan, actualmente en vivo y sirviendo a usuarios en todo el mundo',
        liveRunning: 'En vivo y activo',
        category: 'Categoría',
        keyFeatures: 'Características clave:',
        viewWebsite: 'Ver sitio web en vivo',
        liveActive: 'En vivo y activo',
        activeNote: '✨ Estas aplicaciones se mantienen activamente y se mejoran continuamente'
      },
      gamezone: {
        title: 'Zona de Juegos',
        subtitle: 'He jugado {count}+ juegos en todos los géneros — PC y móvil',
        gamesCount: '100',
        philosophy: 'Filosofía de juego',
        philosophyText: 'Los juegos son mi pasión y parte de mi {mindset}. Cada juego enseña pensamiento estratégico, toma rápida de decisiones y resolución creativa de problemas — habilidades que mejoran directamente mi enfoque en programación y desarrollo de IA.',
        mindset: 'mentalidad de resolución de problemas',
        genres: {
          fps: 'FPS',
          strategy: 'Estrategia',
          adventure: 'Aventura',
          moba: 'MOBA',
          action: 'Acción',
          rpg: 'RPG'
        }
      },
      contact: {
        title: 'Ponerse en contacto',
        subtitle: 'Siempre estoy interesado en discutir nuevas oportunidades, proyectos innovadores o simplemente conversar sobre IA, tecnología y resolución de problemas.',
        connect: 'Conectemos',
        email: 'Correo electrónico',
        linkedin: 'LinkedIn',
        linkedinText: 'Conéctate conmigo',
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'tu.correo@ejemplo.com',
        message: 'Mensaje',
        messagePlaceholder: 'Tu mensaje...',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        errorTitle: 'Error',
        errorAllFields: 'Por favor complete todos los campos',
        errorInvalidEmail: 'Por favor ingrese una dirección de correo electrónico válida',
        errorSendFailed: 'No se pudo enviar el mensaje. Por favor intente nuevamente o contácteme directamente.',
        successTitle: '¡Mensaje enviado!',
        successDesc: '¡Gracias por tu mensaje. Me pondré en contacto contigo pronto!',
        emailClientOpening: 'Abriendo cliente de correo',
        emailClientOpeningDesc: 'Tu cliente de correo predeterminado debería abrirse ahora. Si no, envía un correo directamente a ravulacharan7@gmail.com.',
        emailCopied: 'Correo copiado',
        emailCopiedDesc: 'Dirección de correo copiada al portapapeles: ravulacharan7@gmail.com'
      },
      resume: {
        title: 'Currículum',
        subtitle: 'Visión general completa de mi trayectoria académica y profesional',
        header: {
          rollNo: 'Número de matrícula:',
          degree: 'Licenciatura en Tecnología - Universidad SRM, Ramapuram'
        },
        education: {
          title: 'Educación',
          degree: 'Licenciatura en Tecnología en Ciencias de la Computación e Ingeniería',
          university: 'Universidad SRM, Ramapuram',
          duration: 'Sep 2021 - Mayo 2025',
          cgpa: 'CGPA 8.95'
        },
        projects: {
          title: 'Proyectos de equipo',
          team: 'Equipo'
        },
        experience: {
          title: 'Experiencia'
        },
        skills: {
          title: 'Habilidades Técnicas e Intereses',
          languages: 'Lenguajes:',
          webDevTools: 'Herramientas de desarrollo web:',
          database: 'Base de datos:',
          toolsPlatforms: 'Herramientas/Plataformas:',
          relevantCoursework: 'Cursos relevantes:',
          areasOfInterest: 'Áreas de interés:'
        },
        publications: {
          title: 'Publicaciones y conferencias'
        },
        certifications: {
          title: 'Certificaciones'
        }
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        projects: 'Projets',
        certifications: 'Certifications',
        roadmap: 'Feuille de route',
        publications: 'Publications',
        gamezone: 'Zone de jeu',
        contact: 'Contact',
        resume: 'CV'
      },
      hero: {
        aspiring: 'Aspirant',
        roles: {
          software: 'Ingénieur logiciel',
          ai: 'Développeur IA et Cloud',
          data: 'Analyste de données',
          tech: 'Passionné de technologies émergentes'
        },
        description: 'Diplômé en informatique de',
        university: 'Institut des sciences et technologies SRM',
        cgpa: 'CGPA: 8.94 / 10 | Diplômé en mai 2025',
        interests: 'IA • Cloud Computing • Analyse de données • Systèmes intelligents',
        viewResume: 'Voir le CV',
        viewCoverLetter: 'Voir la lettre de motivation',
        viewProjects: 'Voir les projets',
        resumeTitle: 'CV - Ravula Charan',
        coverLetterTitle: 'Lettre de motivation - Ravula Charan'
      },
      about: {
        title: 'À propos de moi',
        education: 'Éducation',
        degree: 'Licence en technologie en informatique et ingénierie',
        university: 'Institut des sciences et technologies SRM, Chennai',
        cgpa: 'CGPA: 8.94 / 10 | Mai 2025',
        softSkills: 'Compétences interpersonnelles',
        skills: ['Résolution analytique de problèmes', 'Communication technique', 'Interprétation des données', 'Collaboration', 'Adaptabilité aux technologies émergentes'],
        programmingLanguages: 'Langages de programmation',
        toolsTech: 'Outils et technologies'
      },
      skills: {
        title: 'Compétences techniques',
        subtitle: 'Compétences en langages de programmation, frameworks et plateformes cloud',
        languages: 'Langages',
        frameworks: 'Frameworks et bibliothèques',
        tools: 'Outils et plateformes',
        concepts: 'Concepts de base',
        languagesCount: 'Langages',
        librariesCount: 'Bibliothèques',
        toolsCount: 'Outils',
        conceptsCount: 'Concepts de base'
      },
      projects: {
        title: 'Projets personnels',
        subtitle: 'Projets IA/ML et cybersécurité avec des résultats prouvés et une grande précision',
        searchPlaceholder: 'Rechercher des projets...',
        allCategories: 'Toutes les catégories',
        status: 'Statut',
        impact: 'Impact:',
        team: 'Équipe',
        duration: 'Durée',
        noProjects: 'Aucun projet trouvé',
        noProjectsDesc: 'Essayez d\'ajuster vos critères de recherche ou de filtre',
        clearFilters: 'Effacer les filtres',
        completed: 'Terminé',
        inProgress: 'En cours',
        individualProject: 'Projet individuel'
      },
      certifications: {
        title: 'Certifications',
        subtitle: 'Certifications professionnelles en Python, AWS, IA, apprentissage automatique et analyse de données',
        skillsCovered: 'Compétences couvertes:',
        viewCertificate: 'Voir le certificat',
        status: 'Statut',
        completed: 'Terminé',
        inProgress: 'En cours',
        planned: 'Planifié'
      },
      roadmap: {
        title: 'Feuille de route de carrière',
        subtitle: 'Parcours des stages en IA à la diplomation avec des publications de recherche',
        internship: 'stage',
        achievement: 'réalisation',
        project: 'projet',
        milestone: 'jalon',
        learning: 'apprentissage',
        internships: 'Stages',
        publications: 'Publications',
        certifications: 'Certifications',
        cgpa: 'CGPA'
      },
      publications: {
        title: 'Publications et recherche',
        subtitle: 'Contribution à la recherche en IA, cybersécurité et vision par ordinateur à travers des publications évaluées par des pairs',
        published: 'Publié',
        viewCertificate: 'Voir le certificat',
        publicationsCount: 'Publications',
        researchActive: 'Recherche active'
      },
      aiProjects: {
        title: 'Projets alimentés par l\'IA',
        subtitle: 'Projets intégrés avec des outils et technologies d\'IA de pointe',
        viewLiveProject: 'Voir le projet en direct',
        private: 'Privé'
      },
      liveWebsites: {
        title: 'Sites Web en production',
        subtitle: 'Applications réelles créées par Ravula Charan, actuellement en ligne et servant des utilisateurs du monde entier',
        liveRunning: 'En ligne et actif',
        category: 'Catégorie',
        keyFeatures: 'Caractéristiques principales:',
        viewWebsite: 'Voir le site en direct',
        liveActive: 'En ligne et actif',
        activeNote: '✨ Ces applications sont activement maintenues et continuellement améliorées'
      },
      gamezone: {
        title: 'Zone de jeu',
        subtitle: 'J\'ai joué à {count}+ jeux dans tous les genres — PC et mobile',
        gamesCount: '100',
        philosophy: 'Philosophie du jeu',
        philosophyText: 'Le jeu est ma passion et fait partie de mon {mindset}. Chaque jeu enseigne la pensée stratégique, la prise de décision rapide et la résolution créative de problèmes — des compétences qui améliorent directement mon approche du codage et du développement de l\'IA.',
        mindset: 'état d\'esprit de résolution de problèmes',
        genres: {
          fps: 'FPS',
          strategy: 'Stratégie',
          adventure: 'Aventure',
          moba: 'MOBA',
          action: 'Action',
          rpg: 'RPG'
        }
      },
      contact: {
        title: 'Entrer en contact',
        subtitle: 'Je suis toujours intéressé par la discussion de nouvelles opportunités, de projets innovants ou simplement de conversations sur l\'IA, la technologie et la résolution de problèmes.',
        connect: 'Connectons-nous',
        email: 'Email',
        linkedin: 'LinkedIn',
        linkedinText: 'Connectez-vous avec moi',
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        emailLabel: 'Email',
        emailPlaceholder: 'votre.email@exemple.fr',
        message: 'Message',
        messagePlaceholder: 'Votre message...',
        send: 'Envoyer le message',
        sending: 'Envoi...',
        errorTitle: 'Erreur',
        errorAllFields: 'Veuillez remplir tous les champs',
        errorInvalidEmail: 'Veuillez entrer une adresse email valide',
        errorSendFailed: 'Échec de l\'envoi du message. Veuillez réessayer ou me contacter directement.',
        successTitle: 'Message envoyé!',
        successDesc: 'Merci pour votre message. Je vous répondrai bientôt!',
        emailClientOpening: 'Ouverture du client email',
        emailClientOpeningDesc: 'Votre client email par défaut devrait s\'ouvrir maintenant. Sinon, envoyez un email directement à ravulacharan7@gmail.com.',
        emailCopied: 'Email copié',
        emailCopiedDesc: 'Adresse email copiée dans le presse-papiers: ravulacharan7@gmail.com'
      },
      resume: {
        title: 'CV',
        subtitle: 'Aperçu complet de mon parcours académique et professionnel',
        header: {
          rollNo: 'Numéro d\'inscription:',
          degree: 'Licence en technologie - Université SRM, Ramapuram'
        },
        education: {
          title: 'Éducation',
          degree: 'Licence en technologie en informatique et ingénierie',
          university: 'Université SRM, Ramapuram',
          duration: 'Sep 2021 - Mai 2025',
          cgpa: 'CGPA 8.95'
        },
        projects: {
          title: 'Projets d\'équipe',
          team: 'Équipe'
        },
        experience: {
          title: 'Expérience'
        },
        skills: {
          title: 'Compétences techniques et intérêts',
          languages: 'Langages:',
          webDevTools: 'Outils de développement web:',
          database: 'Base de données:',
          toolsPlatforms: 'Outils/Plateformes:',
          relevantCoursework: 'Cours pertinents:',
          areasOfInterest: 'Domaines d\'intérêt:'
        },
        publications: {
          title: 'Publications et conférences'
        },
        certifications: {
          title: 'Certifications'
        }
      }
    }
  }
};
