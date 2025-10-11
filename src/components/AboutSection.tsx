
import { Brain, Code, Database, Cloud, Award, User } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    { name: "Java", level: 75, color: "bg-orange-500" },
    { name: "Python", level: 95, color: "bg-blue-500" },
    { name: "HTML/CSS", level: 82, color: "bg-orange-400" },
    { name: "JavaScript", level: 80, color: "bg-yellow-500" }
  ];

  const tools = [
    { name: "AWS", icon: Cloud, color: "text-orange-500" },
    { name: "MySQL", icon: Database, color: "text-blue-600" },
    { name: "Power BI", icon: Brain, color: "text-yellow-600" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 section-heading">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-tech-blue" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-muted-foreground">
                Bachelor of Technology in Computer Science and Engineering
                <br />
                <span className="text-tech-green font-semibold">SRM Institute of Science and Technology, Chennai</span>
                <br />
                CGPA: 8.94 / 10 | May 2025
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-tech-purple" />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Analytical Problem-Solving", "Technical Communication", "Data Interpretation", "Collaboration", "Adaptability to Emerging Tech"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-tech-blue/20 text-tech-blue rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-tech-cyan" />
                Programming Languages
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-semibold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="glass rounded-lg p-4 text-center hover:scale-110 transition-all duration-300 group"
                  >
                    <tool.icon className={`w-8 h-8 mx-auto mb-2 ${tool.color} group-hover:animate-float`} />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
