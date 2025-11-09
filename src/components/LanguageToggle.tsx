import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";
import { useState } from "react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLanguageChange = (lang: 'en' | 'de') => {
    if (lang === language) return;
    
    setIsAnimating(true);
    setLanguage(lang);
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className="flex items-center gap-2 bg-muted rounded-lg p-1 relative overflow-hidden">
      {/* Animated background indicator */}
      <div 
        className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] bg-primary rounded-md transition-all duration-300 ease-in-out ${
          language === 'en' ? 'left-1' : 'left-[calc(50%+0.125rem)]'
        }`}
      />
      
      {/* Language icon with pulse animation */}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
        isAnimating ? 'animate-pulse' : ''
      }`}>
        <Languages className={`w-4 h-4 text-primary/20 transition-opacity duration-200 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleLanguageChange('en')}
        className={`h-8 px-3 text-xs font-medium relative z-10 transition-all duration-300 ${
          language === 'en' 
            ? 'text-primary-foreground hover:text-primary-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        } ${isAnimating && language === 'de' ? 'scale-95' : 'scale-100'}`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleLanguageChange('de')}
        className={`h-8 px-3 text-xs font-medium relative z-10 transition-all duration-300 ${
          language === 'de' 
            ? 'text-primary-foreground hover:text-primary-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        } ${isAnimating && language === 'en' ? 'scale-95' : 'scale-100'}`}
      >
        DE
      </Button>
    </div>
  );
};
