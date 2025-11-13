import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, Check } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
] as const;

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    if (langCode === language) return;
    
    setIsAnimating(true);
    setLanguage(langCode as any);
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 px-3 gap-2 bg-background hover:bg-muted transition-colors"
        >
          <Languages className={`w-4 h-4 ${isAnimating ? 'animate-pulse' : ''}`} />
          <span className="text-sm font-medium">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-background border-border shadow-lg z-50"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center justify-between cursor-pointer hover:bg-muted focus:bg-muted transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </div>
            {language === lang.code && (
              <Check className="w-4 h-4 text-primary animate-scale-in" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
