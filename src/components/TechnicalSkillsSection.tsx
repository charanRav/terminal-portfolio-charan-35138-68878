import { Code, Database, Cloud, Brain } from "lucide-react";

export const TechnicalSkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["Python", "Java", "SQL", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      skills: ["Pandas", "NumPy", "Matplotlib", "scikit-learn"]
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      skills: ["AWS (EC2, S3, Lambda)", "SAP Analytics Cloud", "Power BI", "Git", "VS Code", "Jupyter Notebook"]
    },
    {
      title: "Core Concepts",
      icon: Cloud,
      gradient: "from-orange-500 to-yellow-500",
      skills: ["Data Structures & Algorithms", "Machine Learning", "Cloud Architecture", "AI Automation", "Data Analytics", "Web Development"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            Proficiencies across programming languages, frameworks, and cloud platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-background/80 border-2 backdrop-blur-sm hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
                      style={{ 
                        animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`,
                        borderColor: category.gradient.includes('blue') ? 'rgb(59, 130, 246)' :
                                    category.gradient.includes('purple') ? 'rgb(168, 85, 247)' :
                                    category.gradient.includes('green') ? 'rgb(34, 197, 94)' :
                                    'rgb(249, 115, 22)'
                      }}
                    >
                      <span className="text-sm font-semibold text-foreground">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Key strengths summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">7+</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Libraries</div>
          </div>
          <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Tools</div>
          </div>
          <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Core Concepts</div>
          </div>
        </div>
      </div>
    </section>
  );
};