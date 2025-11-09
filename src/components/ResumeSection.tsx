
import { ResumeHeader } from "./resume/ResumeHeader";
import { ResumeEducation } from "./resume/ResumeEducation";
import { ResumeProjects } from "./resume/ResumeProjects";
import { ResumeInternship } from "./resume/ResumeInternship";
import { ResumeSkills } from "./resume/ResumeSkills";
import { ResumePublications } from "./resume/ResumePublications";
import { ResumeCertifications } from "./resume/ResumeCertifications";
import { useLanguage } from "@/contexts/LanguageContext";

export const ResumeSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="resume" className="py-20 px-6 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            {t('resume.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('resume.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          <ResumeHeader />
          <ResumeEducation />
          <ResumeProjects />
          <ResumeInternship />
          <ResumeSkills />
          <ResumePublications />
          <ResumeCertifications />
        </div>
      </div>
    </section>
  );
};
