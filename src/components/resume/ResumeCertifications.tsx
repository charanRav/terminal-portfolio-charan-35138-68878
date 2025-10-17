
import { Award } from "lucide-react";

export const ResumeCertifications = () => {
  const certifications = [
    "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    "AWS Certified Cloud Practitioner - Udemy",
    "Python Bootcamp - Udemy",
    "Career Essentials in Data Analysis - Microsoft + LinkedIn",
    "Artificial Intelligence Foundations: Machine Learning - LinkedIn",
    "Prompt Engineering with ChatGPT - LinkedIn",
    "Building a Personalized Chatbot with OpenAI and LangChain - LinkedIn"
  ];

  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-orange-500" />
        <h3 className="text-2xl font-bold">Certifications</h3>
      </div>
      <div className="space-y-3">
        {certifications.map((certification, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm">{certification}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
