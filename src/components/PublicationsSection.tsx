
import { BookOpen, Calendar, Award, Eye } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const PublicationsSection = () => {
  const publications = [
    {
      title: "Proactive Malware Detection to Secure Web Data Using Random Forest Algorithm",
      journal: "National Conference on Climate Change, MSIT Delhi",
      year: "Nov 2024",
      description: "Presented research on malware detection achieving high accuracy using Random Forest algorithm for enhanced web security",
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-500",
      certificate: "/lovable-uploads/43f6f0f9-ece0-4ea4-b7ab-562d32221c5b.png"
    },
    {
      title: "AI Enhancement Automated Movement Detection",
      journal: "IJFMR, Vol 6 Issue 2",
      year: "March-April 2024",
      description: "Research on real-time object tracking using neural networks for automated movement detection in surveillance systems",
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-500",
      certificate: "/lovable-uploads/9caa6109-f6f9-419b-a78a-c713f0712a1d.png"
    },
    {
      title: "Insider Security Risk Using Graph Analysis",
      journal: "IJCRT, Vol 12 Issue 7",
      year: "July 2024",
      description: "Graph-theory-based approach for detecting internal security threats and analyzing insider risk patterns",
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-500",
      certificate: "/lovable-uploads/edfcb901-8717-4d20-9c1e-0cb7ae820b09.png"
    }
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Publications & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to AI, cybersecurity, and computer vision research through peer-reviewed publications
          </p>
          <div className="flex justify-center">
            <Award className="w-8 h-8 text-yellow-500 animate-bounce" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <div
              key={pub.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-500 border border-border/20 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pub.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${pub.gradient} bg-opacity-20`}>
                      <BookOpen className={`w-6 h-6 ${pub.color} group-hover:animate-pulse`} />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {pub.year}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {pub.title}
                </h3>

                <p className="text-green-600 dark:text-green-400 font-medium mb-3 text-sm">
                  {pub.journal}
                </p>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {pub.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    Published
                  </span>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-2 px-3 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full border border-primary/20 transition-all duration-300">
                        <Eye className="w-3 h-3" />
                        View Certificate
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                          src={pub.certificate} 
                          alt={`Certificate for ${pub.title}`}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                          style={{ maxHeight: '80vh' }}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-primary/20">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">3 Publications</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">Research Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
