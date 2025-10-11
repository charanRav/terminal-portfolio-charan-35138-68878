import { Award, ExternalLink, Calendar } from "lucide-react";
import oracleOci from "@/assets/certificates/oracle-oci-2024.png";
import awsCcp from "@/assets/certificates/aws-cloud-practitioner.png";
import pythonBootcamp from "@/assets/certificates/python-bootcamp.png";
import sapErp from "@/assets/certificates/sap-erp-essential.png";
import sapBiBw from "@/assets/certificates/sap-bi-bw.png";
import javascriptEssential from "@/assets/certificates/javascript-essential.png";
import cssEssential from "@/assets/certificates/css-essential.png";
import oracleDbSql from "@/assets/certificates/oracle-database-sql.png";
import htmlEssential from "@/assets/certificates/html-essential.png";
import careerEssentials from "@/assets/certificates/career-essentials-data-analysis.png";

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
      provider: "Oracle",
      date: "October 2024",
      status: "Completed",
      description: "Cloud infrastructure fundamentals and Oracle Cloud services",
      skills: ["Oracle Cloud", "Cloud Infrastructure", "Cloud Services"],
      credentialId: "Valid until Oct 05, 2026",
      color: "border-red-500",
      certificateImage: oracleOci
    },
    {
      title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02",
      provider: "Udemy",
      date: "May 2024",
      status: "Completed",
      description: "AWS Cloud fundamentals and best practices for cloud infrastructure",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
      credentialId: "UC-874a8f90-3c2f-40e6-ab89-608f8e286dff0",
      color: "border-orange-500",
      certificateImage: awsCcp
    },
    {
      title: "The Complete Python Bootcamp From Zero to Hero in Python",
      provider: "Udemy",
      date: "March 2023",
      status: "Completed",
      description: "Comprehensive Python programming bootcamp covering fundamentals to advanced concepts",
      skills: ["Python", "Programming", "Data Structures", "Problem Solving"],
      credentialId: "UC-c7aef7c78-2a23-40a6-abb-5466a70525ed",
      color: "border-green-500",
      certificateImage: pythonBootcamp
    },
    {
      title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
      provider: "Microsoft + LinkedIn",
      date: "August 2024",
      status: "Completed",
      description: "Essential skills for data analysis and business intelligence careers",
      skills: ["Data Analysis", "Business Intelligence", "Career Development", "Analytics"],
      credentialId: "99f8eabe4 93b58278bf0d590f229d5db 7994b2abd90f9434e5f42efb58b1499c",
      color: "border-purple-500",
      certificateImage: careerEssentials
    },
    {
      title: "SAP ERP Essential Training",
      provider: "LinkedIn Learning",
      date: "June 2025",
      status: "Completed",
      description: "SAP ERP fundamentals and enterprise resource planning",
      skills: ["SAP ERP", "Enterprise Resource Planning (ERP)"],
      credentialId: "92fb99e7950bf77dc55c563f3ca8870f05cc70dcfd210fc550f98d6dc9772",
      color: "border-blue-500",
      certificateImage: sapErp
    },
    {
      title: "Introduction to SAP BI/BW",
      provider: "LinkedIn Learning",
      date: "June 2025",
      status: "Completed",
      description: "SAP Business Intelligence and Business Warehouse fundamentals",
      skills: ["SAP BI", "SAP Business Warehouse (SAP BW)"],
      credentialId: "b3f0e70e7320338f9a1e1e782d3ec8e953302a354ac08ec4917fa35feb49780bc2",
      color: "border-cyan-500",
      certificateImage: sapBiBw
    },
    {
      title: "JavaScript Essential Training (2017)",
      provider: "LinkedIn Learning",
      date: "June 2025",
      status: "Completed",
      description: "JavaScript fundamentals and essential programming concepts",
      skills: ["JavaScript"],
      credentialId: "faa3fk8f:aa7ae92ef24646cb4b42052b7adb78ed19d46efdbdae4c9769540475b",
      color: "border-yellow-500",
      certificateImage: javascriptEssential
    },
    {
      title: "CSS Essential Training (2019)",
      provider: "LinkedIn Learning",
      date: "June 2025",
      status: "Completed",
      description: "Cascading Style Sheets fundamentals and web styling",
      skills: ["Cascading Style Sheets (CSS)"],
      credentialId: "bc4a3f9f7bb1575f831bc24c90f7abfe8677dc9e2ce4e23ccfb30fba033c925",
      color: "border-pink-500",
      certificateImage: cssEssential
    },
    {
      title: "Oracle Database 19c: Basic SQL",
      provider: "LinkedIn Learning",
      date: "February 2025",
      status: "Completed",
      description: "Oracle Database SQL fundamentals and query optimization",
      skills: ["SQL", "Oracle Database"],
      credentialId: "0ab022d0e9442ce053cfdc65b5000110352fc6edc2d36c1c78e6cca4af5c895c3e",
      color: "border-red-500",
      certificateImage: oracleDbSql
    },
    {
      title: "HTML Essential Training (2020)",
      provider: "LinkedIn Learning",
      date: "June 2025",
      status: "Completed",
      description: "HTML fundamentals and web structure essentials",
      skills: ["HTML"],
      credentialId: "ea129cb8bd51fe6c5c8c3e9ff8a796d351320d382efe1c3f3fd097af653fe107",
      color: "border-indigo-500",
      certificateImage: htmlEssential
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
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-semibold line-clamp-2">{cert.title}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm">{cert.description}</p>

              <div className="space-y-3">
                <div>
                  <span className="text-xs font-medium mb-2 block text-muted-foreground">Skills Covered:</span>
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

                <div className="pt-3 border-t border-border/20 space-y-2">
                  <p className="text-xs text-muted-foreground">
                    {cert.credentialId}
                  </p>
                  <a
                    href={cert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
