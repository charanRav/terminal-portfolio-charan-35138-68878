
import { Code } from "lucide-react";

export const ResumeProjects = () => {
  const projects = [
    {
      title: "Deep Learning-Based Traffic Management Using Gesture Recognition",
      duration: "Jan 2025 - May 2025",
      description: "Deployed CNN model using EMG signals to classify 8 traffic gestures with 93% accuracy",
      team: "Team: Dheeraj Subhash V.P, Speranza Deejoe",
      technology: "Python, Deep Learning, EMG Sensors, CNN"
    },
    {
      title: "Intelligent Malware Detection Using Random Forest Algorithm",
      duration: "Jan 2024 - Jul 2024",
      description: "Built malware detection pipeline with 96% accuracy using ensemble learning and feature engineering",
      team: "Team: Dheeraj Subhash V.P, Speranza Deejoe",
      technology: "Python, Random Forest, Machine Learning"
    },
    {
      title: "AI-Enhanced Automated Movement Detection",
      duration: "Jan 2023 - Apr 2023",
      description: "Integrated SSD + MobileNetV2 for real-time motion tracking achieving 90%+ frame accuracy",
      team: "Team: Dheeraj Subhash V.P, Speranza Deejoe",
      technology: "SSD, MobileNetV2, Computer Vision"
    },
    {
      title: "AI-Driven File Organizer",
      duration: "2023",
      description: "Automated file sorting and classification using metadata and file types with performance logging",
      team: "Team: Dheeraj Subhash V.P, Speranza Deejoe",
      technology: "Python, File Systems, Automation"
    }
  ];

  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold">Team Projects</h3>
      </div>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-4 border-purple-500 pl-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{project.duration}</span>
            </div>
            <p className="text-sm text-purple-400 mb-2">{project.team}</p>
            <p className="text-sm mb-2">{project.description}</p>
            <p className="text-xs text-muted-foreground mt-1">Technology: {project.technology}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
