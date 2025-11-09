
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ResumeEducation = () => {
  const { t } = useLanguage();
  
  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-6 h-6 text-blue-500" />
        <h3 className="text-2xl font-bold">{t('resume.education.title')}</h3>
      </div>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-6">
          <h4 className="text-xl font-semibold">{t('resume.education.degree')}</h4>
          <p className="text-muted-foreground">{t('resume.education.university')}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-muted-foreground">{t('resume.education.duration')}</span>
            <span className="font-semibold text-green-500">{t('resume.education.cgpa')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
