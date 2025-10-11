
import { Phone, Mail, Linkedin } from "lucide-react";

export const ResumeHeader = () => {
  return (
    <div className="text-center glass p-8 rounded-2xl">
      <h1 className="text-3xl font-bold mb-2">Ravula Charan</h1>
      <p className="text-lg text-muted-foreground mb-2">Roll No.: RA2111003020041</p>
      <p className="text-base text-muted-foreground mb-6">Bachelor of Technology - SRM University, Ramapuram</p>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+91-7416160065</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a href="mailto:ravulacharan7@gmail.com" className="hover:text-blue-500 transition-colors">
            ravulacharan7@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4" />
          <a 
            href="https://linkedin.com/in/ravula-charan-ab2692267" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};
