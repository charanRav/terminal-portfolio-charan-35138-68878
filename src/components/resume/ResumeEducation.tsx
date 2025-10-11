
import { GraduationCap } from "lucide-react";

export const ResumeEducation = () => {
  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-6 h-6 text-blue-500" />
        <h3 className="text-2xl font-bold">Education</h3>
      </div>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-6">
          <h4 className="text-xl font-semibold">Bachelor of Technology in Computer Science and Engineering</h4>
          <p className="text-muted-foreground">SRM University, Ramapuram</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-muted-foreground">Sep 2021 - May 2025</span>
            <span className="font-semibold text-green-500">CGPA 8.95</span>
          </div>
        </div>
      </div>
    </div>
  );
};
