import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CommandTerminal } from "@/components/CommandTerminal";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsVisualization } from "@/components/SkillsVisualization";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { GameZoneSection } from "@/components/GameZoneSection";
import { ContactSection } from "@/components/ContactSection";
import { LandingPage } from "@/components/LandingPage";
import { RichardChatbot } from "@/components/RichardChatbot";
import { TechnicalSkillsSection } from "@/components/TechnicalSkillsSection";
import { AIProjectsUpdated } from "@/components/AIProjectsUpdated";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Notification popup every 10 seconds when on main portfolio
  useEffect(() => {
    if (!showLanding && !isChatOpen) {
      const notificationTimer = setInterval(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
      }, 10000);

      return () => clearInterval(notificationTimer);
    }
  }, [showLanding, isChatOpen]);

  const handleExplorePortfolio = () => {
    setShowLanding(false);
  };

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (showLanding) {
    return (
      <>
        <LandingPage onExplore={handleExplorePortfolio} onChatOpen={handleChatOpen} />
        <RichardChatbot isOpen={isChatOpen} onClose={handleChatClose} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Data Flow Animation Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"
            style={{
              width: `${200 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navigation />
        <ThemeToggle />
        
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <TechnicalSkillsSection />
          <SkillsVisualization />
          <ProjectsSection />
          <AIProjectsUpdated />
          <CertificationsSection />
          <RoadmapSection />
          <PublicationsSection />
          <GameZoneSection />
          <ContactSection />
        </main>
        
        {/* Floating Chat Button with Notification */}
        <div className="fixed bottom-8 right-8 z-40">
          {/* Notification bubble */}
          {showNotification && (
            <div className="absolute bottom-20 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-2xl shadow-2xl animate-slide-in-right mb-2 max-w-xs">
              <p className="text-sm font-medium">👋 Hey! Need help exploring? I'm Richard, your AI guide!</p>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-purple-600 transform rotate-45" />
            </div>
          )}
          
          <button
            onClick={handleChatOpen}
            className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-all duration-300 border-2 border-blue-400/50"
            aria-label="Open Richard AI Assistant"
          >
            {/* Robot face design */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
              <div className="absolute -bottom-1 w-4 h-1 bg-white/90 rounded-full" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg shadow-green-500/50" />
          </button>
        </div>
        
        <RichardChatbot isOpen={isChatOpen} onClose={handleChatClose} />

        <footer className="py-8 text-center text-muted-foreground border-t border-border/20 backdrop-blur-sm bg-background/80">
          <div className="container mx-auto px-6">
            <p className="text-sm">&copy; 2024 Ravula Charan. Built with passion and lots of coffee ☕</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
