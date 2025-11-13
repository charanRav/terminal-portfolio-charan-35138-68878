
import { Gamepad2, Target, Zap, Sword, Trophy, Brain, Joystick } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const GameZoneSection = () => {
  const { t } = useLanguage();
  const gameGenres = [
    { name: t('gamezone.genres.fps'), icon: Target, color: "text-red-500" },
    { name: t('gamezone.genres.strategy'), icon: Brain, color: "text-blue-500" },
    { name: t('gamezone.genres.adventure'), icon: Sword, color: "text-green-500" },
    { name: t('gamezone.genres.moba'), icon: Trophy, color: "text-purple-500" },
    { name: t('gamezone.genres.action'), icon: Zap, color: "text-yellow-500" },
    { name: t('gamezone.genres.rpg'), icon: Gamepad2, color: "text-pink-500" }
  ];

  return (
    <section id="gamezone" className="py-20 px-6 relative">
      {/* Enhanced Vintage Gaming Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 opacity-30">
          <Joystick className="w-16 h-16 text-cyan-500 animate-noodle" />
        </div>
        <div className="absolute top-20 right-16 opacity-25">
          <Gamepad2 className="w-20 h-20 text-purple-500 animate-float" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-35">
          <Target className="w-12 h-12 text-red-500 animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-20">
          <Joystick className="w-14 h-14 text-green-500 animate-joystick-wiggle" />
        </div>
        <div className="absolute bottom-1/3 right-10 opacity-25">
          <Sword className="w-10 h-10 text-blue-500 animate-float" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-30">
          <Trophy className="w-8 h-8 text-yellow-500 animate-bounce" />
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 animate-slide-up">
          <h2 className="text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3 font-bold text-foreground">
            <Gamepad2 className="w-12 h-12 text-cyan-500 animate-noodle" />
            {t('gamezone.title')}
            <Joystick className="w-10 h-10 text-purple-500 animate-joystick-wiggle" />
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('gamezone.subtitle').replace('{count}', t('gamezone.gamesCount'))}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {gameGenres.map((genre, index) => (
            <div
              key={genre.name}
              className="glass rounded-xl p-6 hover:scale-110 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <genre.icon className={`w-8 h-8 mx-auto mb-3 ${genre.color} group-hover:animate-float`} />
              <span className="text-sm font-semibold text-muted-foreground">{genre.name}</span>
            </div>
          ))}
        </div>

        <div className="glass rounded-xl p-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-foreground">
            <Brain className="w-6 h-6 text-purple-500" />
            {t('gamezone.philosophy')}
          </h3>
          <p className="text-lg text-muted-foreground">
            {t('gamezone.philosophyText')
              .split('{mindset}')
              .map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-cyan-500 font-semibold">{t('gamezone.mindset')}</span>}
                </span>
              ))}
          </p>
        </div>
      </div>
    </section>
  );
};
