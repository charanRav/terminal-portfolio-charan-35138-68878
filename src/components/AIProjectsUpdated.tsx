import { ExternalLink, Lock, Video, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const AIProjectsUpdated = () => {
  const aiProjects = [
    {
      title: "MediFinder – AI-Assisted Medicine Locator",
      description: "Flask-based web tool integrating geolocation APIs to locate nearby pharmacies and visualize optimal medicine routes.",
      status: "video",
      videoUrl: "/videos/medifinder-demo.mp4",
      tech: ["Flask", "Geolocation API", "Python", "AI"],
      icon: Video
    },
    {
      title: "Posture Spine Recognition",
      description: "Camera-based AI system using computer vision to monitor and analyze user posture in real time.",
      link: "https://spine-guard-git-main-charanravs-projects.vercel.app/",
      tech: ["Computer Vision", "AI", "Real-time Processing"],
      icon: Brain
    },
    {
      title: "Mood Magic Cam",
      description: "Emotion recognition app leveraging OpenCV and ML models to detect facial expressions and map moods to responsive interface behaviors.",
      link: "https://mood-magic-cam.vercel.app/",
      tech: ["OpenCV", "Machine Learning", "Emotion Recognition"],
      icon: Brain
    }
  ];

  return (
    <section id="ai-projects" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            AI-Powered Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Projects integrated with cutting-edge AI tools and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group glass hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-primary/10 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.status === "video" && project.videoUrl ? (
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="none"
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative h-40 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-primary/40 group-hover:scale-110 group-hover:text-primary/60 transition-all duration-300" />
                  
                  {project.status === "private" && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
                      <Lock className="w-3 h-3 text-yellow-600" />
                      <span className="text-xs font-medium text-yellow-600">Private</span>
                    </div>
                  )}
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};