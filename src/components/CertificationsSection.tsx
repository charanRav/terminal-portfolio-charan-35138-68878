
import { Award, ExternalLink, Calendar } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
      provider: "Oracle",
      date: "2024",
      status: "Completed",
      description: "Cloud infrastructure fundamentals and Oracle Cloud services",
      skills: ["Oracle Cloud", "Cloud Infrastructure", "Cloud Services"],
      credentialId: "OCI-2024-CFA",
      color: "border-red-500"
    },
    {
      title: "SAP Certified Associate – Data Analyst & Cloud Analytics",
      provider: "SAP",
      date: "2024",
      status: "Completed",
      description: "SAP Analytics Cloud expertise for data analysis and visualization",
      skills: ["SAP Analytics Cloud", "Data Analysis", "Cloud Analytics", "Business Intelligence"],
      credentialId: "SAP-CA-DAA",
      color: "border-blue-500"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      provider: "Udemy",
      date: "2024",
      status: "Completed",
      description: "AWS Cloud fundamentals and best practices for cloud infrastructure",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
      credentialId: "AWS-CCP-Udemy",
      color: "border-orange-500"
    },
    {
      title: "Python Bootcamp",
      provider: "Udemy",
      date: "2024",
      status: "Completed",
      description: "Comprehensive Python programming bootcamp covering fundamentals to advanced concepts",
      skills: ["Python", "Programming", "Data Structures", "Problem Solving"],
      credentialId: "Udemy Certificate",
      color: "border-green-500"
    },
    {
      title: "Career Essentials in Data Analysis",
      provider: "Microsoft + LinkedIn",
      date: "2024",
      status: "Completed",
      description: "Essential skills for data analysis and business intelligence careers",
      skills: ["Data Analysis", "Business Intelligence", "Career Development", "Analytics"],
      credentialId: "Microsoft-LinkedIn",
      color: "border-purple-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-700 border-green-500/30";
      case "In Progress": return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30";
      case "Planned": return "bg-blue-500/20 text-blue-700 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-700 border-gray-500/30";
    }
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold section-heading mb-4 flex items-center justify-center gap-3">
            <Award className="w-12 h-12 text-orange-500 animate-float" />
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications in Python, AWS, and Data Analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-slide-up border-l-4 ${cert.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-orange-500" />
                  <div>
                    <h3 className="text-xl font-semibold line-clamp-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm">{cert.description}</p>

              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium mb-2 block">Skills Covered:</span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/20">
                  <span className="text-xs text-muted-foreground">
                    {cert.credentialId}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
