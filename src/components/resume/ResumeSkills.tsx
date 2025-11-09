
import { Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ResumeSkills = () => {
  const { t } = useLanguage();
  
  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-6 h-6 text-cyan-500" />
        <h3 className="text-2xl font-bold">{t('resume.skills.title')}</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3">{t('resume.skills.languages')}</h4>
          <p className="text-sm text-muted-foreground mb-4">Java, Python, HTML, CSS, JavaScript</p>
          
          <h4 className="font-semibold mb-3">{t('resume.skills.webDevTools')}</h4>
          <p className="text-sm text-muted-foreground mb-4">VS Code, Git, GitHub</p>
          
          <h4 className="font-semibold mb-3">{t('resume.skills.database')}</h4>
          <p className="text-sm text-muted-foreground">MySQL, SQLite, MongoDB</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{t('resume.skills.toolsPlatforms')}</h4>
          <p className="text-sm text-muted-foreground mb-4">AWS, Word, Excel, PowerPoint, Power BI</p>
          
          <h4 className="font-semibold mb-3">{t('resume.skills.relevantCoursework')}</h4>
          <p className="text-sm text-muted-foreground mb-4">Data Structures & Algorithms, Object Oriented Programming, Database Management System, Network Security</p>
          
          <h4 className="font-semibold mb-3">{t('resume.skills.areasOfInterest')}</h4>
          <p className="text-sm text-muted-foreground">Data Analytics, Backend Developer, Web Development, Deep Learning & Machine Learning, Communication Skill Development</p>
        </div>
      </div>
    </div>
  );
};
