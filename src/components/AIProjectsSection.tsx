import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Lock } from "lucide-react";

export const AIProjectsSection = () => {
  const projects = [
    {
      title: "MediFinder - AI Medicine Locator",
      description: "Flask-based web tool integrating geolocation APIs to locate nearby pharmacies and visualize optimal medicine routes.",
      status: "private",
      note: "🔒 Prototype in development - Coming soon with demo video!",
      tech: ["Flask", "Geolocation API", "AI", "Route Optimization"],
    },
    {
      title: "Posture Spine Recognition",
      description: "Camera-based AI system using computer vision to monitor and analyze user posture in real-time.",
      link: "https://spine-guard-lime.vercel.app/",
      tech: ["Computer Vision", "OpenCV", "ML", "Real-time Analysis"],
    },
    {
      title: "Mood Magic Cam",
      description: "Emotion recognition app leveraging OpenCV and ML models to detect facial expressions and map moods to responsive interface behaviors.",
      link: "https://mood-magic-cam.vercel.app/",
      tech: ["OpenCV", "Machine Learning", "Emotion AI", "Facial Recognition"],
    },
  ];

  return (
    <section id="ai-projects" className="py-20 px-6 bg-gradient-to-br from-background via-purple-950/5 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <iframe
              src="https://my.spline.design/aibrain-LYL9snsXLPmxWqdN5qCZAD0q/"
              frameBorder="0"
              width="200"
              height="200"
              style={{ pointerEvents: 'none' }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
            AI-Powered Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Projects integrated and enhanced by AI tools
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass p-6 hover:scale-105 transition-all duration-300 border-2 border-purple-500/20 hover:border-purple-500/40 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.status === "private" ? (
                    <Lock className="w-5 h-5 text-purple-400" />
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {project.note && (
                  <div className="mb-4 p-3 bg-purple-950/30 rounded-lg border border-purple-500/20">
                    <p className="text-xs text-purple-300">{project.note}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
