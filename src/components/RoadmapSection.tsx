
import { Calendar, Award, Briefcase, GraduationCap, BookOpen } from "lucide-react";

export const RoadmapSection = () => {
  const roadmapItems = [
    {
      year: "Aug 2023 - Sep 2023",
      title: "AI Intern (Python Developer)",
      company: "Codsofts",
      type: "internship",
      description: "Built chatbot using keyword-matching, implemented Minimax AI for Tic Tac Toe, trained CNN-LSTM model for image captioning",
      icon: Briefcase,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20"
    },
    {
      year: "Feb 2024 - Apr 2024",
      title: "AWS Cloud Intern",
      company: "INTERN-FORTE",
      type: "internship",
      description: "Designed cloud architecture using EC2, S3, IAM. Reduced infrastructure load time by 25% and costs by 18%",
      icon: Briefcase,
      color: "text-green-500",
      bgColor: "bg-green-500/20"
    },
    {
      year: "2024",
      title: "Research Publications",
      company: "3 Research Papers Published",
      type: "achievement",
      description: "Published in National Conference on Climate Change (MSIT Delhi), IJFMR, and IJCRT journals",
      icon: Award,
      color: "text-purple-500",
      bgColor: "bg-purple-500/20"
    },
    {
      year: "Jan 2025 - May 2025",
      title: "Final Year Project",
      company: "Deep Learning & EMG Domains",
      type: "project",
      description: "Working on Deep Learning-Based Traffic Management Using Gesture Recognition with 93% accuracy",
      icon: Calendar,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/20"
    },
    {
      year: "May 2025",
      title: "B.Tech Graduation",
      company: "SRM Institute of Science and Technology",
      type: "milestone",
      description: "Bachelor of Technology in Computer Science & Engineering - CGPA: 8.94/10",
      icon: GraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-600/20"
    },
    {
      year: "Jun 2025 - Ongoing",
      title: "Learning SAP SAC",
      company: "SAP Analytics Cloud Certification",
      type: "learning",
      description: "Pursuing SAP Analytics Cloud expertise to enhance business intelligence and data visualization skills",
      icon: BookOpen,
      color: "text-orange-500",
      bgColor: "bg-orange-500/20"
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3 font-bold text-foreground">
            <Calendar className="w-12 h-12 text-blue-500 animate-float" />
            Career Roadmap
          </h2>
          <p className="text-lg text-muted-foreground">
            Journey from AI internships to graduation with research publications
          </p>
        </div>

        {/* Roadmap Line with Animation */}
        <div className="absolute left-6 sm:left-8 top-0 h-full w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-20"></div>
        <div 
          className="absolute left-6 sm:left-8 top-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 animate-roadmap-line"
          style={{ animationDelay: '0.5s' }}
        ></div>

        <div className="space-y-6 sm:space-y-8 relative">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in relative ml-12 sm:ml-16"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Checkpoint Circle */}
              <div className="absolute -left-[3.25rem] sm:-left-[4.25rem] top-1/2 -translate-y-1/2">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${item.bgColor} border-4 border-background flex items-center justify-center`}>
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br ${item.color.replace('text-', 'from-')} ${item.color.replace('text-', 'to-').replace('500', '600')} shadow-lg w-fit`}>
                  <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col gap-2 mb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-base sm:text-lg md:text-xl font-bold text-primary">
                        {item.year}
                      </span>
                      <span className={`px-2 sm:px-3 py-1 ${item.bgColor} ${item.color} rounded-full text-xs font-medium w-fit`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-foreground break-words">
                    {item.title}
                  </h3>
                  
                  <p className="text-green-500 font-medium mb-2 sm:mb-3 text-sm md:text-base">
                    {item.company}
                  </p>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-optimized summary cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="glass rounded-lg p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold text-blue-500">2</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Internships</div>
          </div>
          <div className="glass rounded-lg p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold text-purple-500">3</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Publications</div>
          </div>
          <div className="glass rounded-lg p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold text-green-500">4</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="glass rounded-lg p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold text-cyan-500">8.94</div>
            <div className="text-xs sm:text-sm text-muted-foreground">CGPA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
