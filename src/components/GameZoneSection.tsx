
import { Gamepad2, Target, Zap, Sword, Trophy, Brain, Joystick } from "lucide-react";

export const GameZoneSection = () => {
  const gameGenres = [
    { name: "FPS", icon: Target, color: "text-red-500" },
    { name: "Strategy", icon: Brain, color: "text-blue-500" },
    { name: "Adventure", icon: Sword, color: "text-green-500" },
    { name: "MOBA", icon: Trophy, color: "text-purple-500" },
    { name: "Action", icon: Zap, color: "text-yellow-500" },
    { name: "RPG", icon: Gamepad2, color: "text-pink-500" }
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
            GameZone
            <Joystick className="w-10 h-10 text-purple-500 animate-joystick-wiggle" />
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I've played <span className="text-green-500 font-bold">100+ games</span> across all genres — PC & Mobile
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
            Gaming Philosophy
          </h3>
          <p className="text-lg text-muted-foreground">
            Gaming is my passion and part of my <span className="text-cyan-500 font-semibold">problem-solving mindset</span>.
            <br />
            Every game teaches strategic thinking, quick decision-making, and creative problem-solving —
            <br />
            skills that directly enhance my approach to coding and AI development.
          </p>
        </div>
      </div>
    </section>
  );
};
