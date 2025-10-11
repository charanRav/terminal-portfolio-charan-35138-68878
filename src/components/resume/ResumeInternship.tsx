
import { Briefcase } from "lucide-react";

export const ResumeInternship = () => {
  const internships = [
    {
      title: "AWS Cloud Intern",
      company: "INTERN-FORTE",
      duration: "Feb 2024 - Apr 2024",
      location: "Remote",
      achievements: [
        "Designed and deployed scalable AWS architecture using EC2, S3, IAM, Lambda reducing load time by 25%",
        "Automated IAM provisioning and backup processes minimizing manual work by 40%",
        "Optimized instance configurations reducing costs by 18%"
      ]
    },
    {
      title: "AI Intern (Python Developer)",
      company: "Codsofts",
      duration: "Aug 2023 - Sep 2023",
      location: "Remote",
      achievements: [
        "Developed chatbot using NLP mapping to improve query accuracy",
        "Implemented Minimax-based AI logic for Tic Tac Toe with optimal decision-making",
        "Built CNN-LSTM image captioning model for automatic image-to-text generation"
      ]
    }
  ];

  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-green-500" />
        <h3 className="text-2xl font-bold">Experience</h3>
      </div>
      <div className="space-y-6">
        {internships.map((internship, index) => (
          <div key={index} className="border-l-4 border-green-500 pl-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
              <h4 className="text-lg font-semibold">{internship.title}</h4>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{internship.duration}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-1">{internship.company}</p>
            <p className="text-xs text-muted-foreground mb-3">{internship.location}</p>
            <ul className="space-y-2">
              {internship.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm flex gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
