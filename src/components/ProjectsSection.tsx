
import { Calendar, Users, Target, TrendingUp, Brain, Shield } from "lucide-react";
import { useState } from "react";
import { ProjectFilterSection } from "./ProjectFilterSection";

export const ProjectsSection = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      title: "Deep Learning-Based Traffic Management Using Gesture Recognition",
      description: "Deployed CNN model using EMG signals to classify 8 traffic hand gestures with 93% accuracy for embedded systems.",
      longDescription: "Advanced gesture recognition system using EMG signals with CNN architecture. Reduced training complexity by using only 4 EMG channels, enhancing portability for embedded systems deployment in traffic management scenarios.",
      category: "AI/ML",
      tech: ["Python", "CNN", "EMG Sensors", "Deep Learning"],
      metrics: {
        accuracy: "93%",
        channels: "4 EMG",
        gestures: "8 types",
        duration: "Jan-May 2025"
      },
      impact: "Enhanced portability for embedded systems with reduced training complexity",
      status: "Completed",
      team: "Individual Project",
      duration: "Jan 2025 - May 2025",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Intelligent Malware Detection Using Random Forest Algorithm",
      description: "Developed malware detection tool achieving 96% accuracy using ensemble classification and file integrity monitoring.",
      longDescription: "Advanced cybersecurity solution implementing Random Forest algorithm for proactive malware detection. Trained on 1K+ feature-engineered samples with comprehensive file integrity monitoring system for enhanced static protection.",
      category: "Cybersecurity",
      tech: ["Python", "Random Forest", "Ensemble Classification", "File Monitoring"],
      metrics: {
        accuracy: "96%",
        samples: "1K+",
        detection: "Real-time",
        duration: "July-Sep 2024"
      },
      impact: "Enhanced static protection using intelligent classification techniques",
      status: "Completed",
      team: "Individual Project",
      duration: "July 2024 - Sep 2024",
      icon: Shield,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "AI-Enhanced Automated Movement Detection",
      description: "Built real-time object tracking system using SSD and MobileNetV2 with 90%+ frame-level accuracy for surveillance.",
      longDescription: "Advanced computer vision system for real-time object tracking in dynamic video environments. Integrated motion alerts and mask detection features for public surveillance applications using neural networks.",
      category: "Computer Vision",
      tech: ["Neural Networks", "SSD", "MobileNetV2", "Object Tracking"],
      metrics: {
        accuracy: "90%+",
        processing: "Real-time",
        features: "Motion alerts",
        duration: "Jan-Apr 2023"
      },
      impact: "Enhanced surveillance capabilities with motion alerts and mask detection",
      status: "Completed",
      team: "Individual Project",
      duration: "Jan 2023 - Apr 2023",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const categories = [...new Set(projects.map(p => p.category))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(project.category);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Personal Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI/ML and cybersecurity projects with proven results and high accuracy
          </p>
        </div>

        <ProjectFilterSection
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={setSelectedCategories}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center overflow-hidden">
                <project.icon className="w-16 h-16 text-muted-foreground/40 group-hover:scale-110 transition-transform duration-300" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-700' :
                    project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-700' :
                    'bg-yellow-500/20 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/5 rounded-lg">
                  {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">Impact:</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.team}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSelectedCategories([]);
                setSearchTerm("");
              }}
              className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
