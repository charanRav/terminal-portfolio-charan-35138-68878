import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3 text-xs font-medium"
      >
        EN
      </Button>
      <Button
        variant={language === 'de' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('de')}
        className="h-8 px-3 text-xs font-medium"
      >
        DE
      </Button>
    </div>
  );
};
