
import { useState, useEffect } from "react";
import { FileText, Github, Linkedin, Mail, Download, FileCheck } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import resumePreview from "@/assets/resume-preview.jpg";
import coverLetterPreview from "@/assets/cover-letter-preview.png";

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const interests = ["Software Engineer", "AI & Cloud Developer", "Data Analyst", "Emerging Tech Enthusiast"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = interests[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % interests.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, interests]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional floating geometric background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-green-500/3 via-transparent to-cyan-500/3" />
        
        {/* Large geometric shapes for depth */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="floating-cube floating-cube-large"
            style={{
              left: `${20 + (i * 25)}%`,
              top: `${15 + (i * 20)}%`,
              animationDelay: `${i * 4}s`,
            }}
          />
        ))}
        
        {/* Medium cubes for main visual layer */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="floating-cube"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${25 + (i * 12)}%`,
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
        
        {/* Small cubes for detail layer */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="floating-cube floating-cube-small"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${10 + (i * 10)}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
        
        {/* Subtle accent particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="floating-particle"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${20 + (i * 6)}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center z-10 relative">
        <div className="animate-slide-up space-y-6 sm:space-y-8">
          {/* Main heading with enhanced gradient */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 hero-title">
              Ravula Charan
            </h1>
            
            <div className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 min-h-[60px] sm:min-h-[80px] flex flex-col sm:flex-row items-center justify-center px-2">
              <span className="hero-text mb-2 sm:mb-0 sm:mr-2">Aspiring </span>
              <span className="hero-accent font-bold min-w-[280px] sm:min-w-[350px] text-center sm:text-left">
                {currentText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
          </div>

          {/* Enhanced description */}
          <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2">
            <p className="text-base sm:text-lg md:text-xl hero-description">
              B.Tech Computer Science & Engineering Graduate from{" "}
              <span className="font-semibold text-blue-500">SRM Institute of Science and Technology</span>
            </p>
            <p className="text-xl sm:text-2xl font-bold text-green-500 animate-pulse">
              CGPA: 8.94 / 10 | Graduated May 2025
            </p>
            <p className="text-sm sm:text-base md:text-lg hero-subtitle">
              AI • Cloud Computing • Data Analytics • Intelligent Systems
            </p>
          </div>

          {/* Action buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-4">
            {/* Resume Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25 overflow-hidden w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FileText className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10 font-semibold">View Resume</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[95vh] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-4 border-b border-border/20">
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Resume - Ravula Charan
                  </DialogTitle>
                </DialogHeader>
                <div className="relative overflow-auto max-h-[75vh] bg-muted/20">
                  <img 
                    src={resumePreview} 
                    alt="Ravula Charan Resume" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-4 border-t border-border/20 flex justify-center">
                  <a
                    href="/Charan_Resume.pdf"
                    download="Ravula_Charan_Resume.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume PDF
                  </a>
                </div>
              </DialogContent>
            </Dialog>

            {/* Cover Letter Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-green-500/25 overflow-hidden w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FileCheck className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10 font-semibold">View Cover Letter</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[95vh] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-4 border-b border-border/20">
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                    Cover Letter - Ravula Charan
                  </DialogTitle>
                </DialogHeader>
                <div className="relative overflow-auto max-h-[75vh] bg-muted/20">
                  <img 
                    src={coverLetterPreview} 
                    alt="Ravula Charan Cover Letter" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-4 border-t border-border/20 flex justify-center">
                  <a
                    href="/Charan_Cover_Letter.pdf"
                    download="Ravula_Charan_Cover_Letter.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                  >
                    <Download className="w-5 h-5" />
                    Download Cover Letter PDF
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            
            <a
              href="#projects"
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 font-semibold w-full sm:w-auto text-center"
            >
              View Projects
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
            <a 
              href="https://linkedin.com/in/ravula-charan-ab2692267" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600/10 hover:bg-blue-600/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:animate-bounce" />
            </a>
            <a 
              href="https://github.com/ravulacharan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-600/10 hover:bg-gray-600/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:animate-bounce" />
            </a>
            <a 
              href="mailto:ravulacharan7@gmail.com?subject=Portfolio%20Contact&body=Hi%20Ravula%20Charan,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,"
              className="p-3 rounded-full bg-red-600/10 hover:bg-red-600/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 group-hover:animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
