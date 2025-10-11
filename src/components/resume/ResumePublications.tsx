
import { Award } from "lucide-react";

export const ResumePublications = () => {
  const publications = [
    {
      title: "AI Enhanced Automated Movement Detection",
      year: "2024",
      journal: "International Journal for Multidisciplinary Research",
      description: "Real-time object tracking using neural networks and Kalman filtering"
    },
    {
      title: "Insider Security Risk Using Graph Analysis",
      year: "2024",
      journal: "International Journal of Creative Research Thoughts",
      description: "Graph-theory-based approach for internal threat detection"
    },
    {
      title: "Proactive Malware Detection",
      year: "2024",
      journal: "National Cybersecurity and AI Conference",
      description: "Malware classification with 99 Percent accuracy using Random Forest"
    }
  ];

  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-yellow-500" />
        <h3 className="text-2xl font-bold">Publications and Conferences</h3>
      </div>
      <div className="space-y-4">
        {publications.map((publication, index) => (
          <div key={index} className="border-l-4 border-yellow-500 pl-6">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-semibold">{publication.title}</h4>
              <span className="text-sm text-muted-foreground">{publication.year}</span>
            </div>
            <p className="text-sm text-muted-foreground">{publication.journal}</p>
            <p className="text-xs text-blue-600">{publication.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
