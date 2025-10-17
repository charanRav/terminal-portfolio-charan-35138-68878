import { useEffect, useState } from "react";
import { BarChart3, Database, TrendingUp, Zap, Sparkles, Brain, Code, Target } from "lucide-react";

export const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [dimensionShift, setDimensionShift] = useState(0);

  const phases = [
    { icon: Database, text: "Initializing Analytics Framework...", color: "text-blue-400" },
    { icon: BarChart3, text: "Loading Business Intelligence Engine...", color: "text-purple-400" },
    { icon: Brain, text: "Activating Machine Learning Models...", color: "text-emerald-400" },
    { icon: Target, text: "Optimizing Data Pipelines...", color: "text-cyan-400" },
    { icon: Sparkles, text: "Welcome to the Data Universe!", color: "text-yellow-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const newProgress = prev + 2.8;
        
        // Update phase based on progress
        if (newProgress <= 20) setCurrentPhase(0);
        else if (newProgress <= 40) setCurrentPhase(1);
        else if (newProgress <= 60) setCurrentPhase(2);
        else if (newProgress <= 80) setCurrentPhase(3);
        else setCurrentPhase(4);
        
        // Dimension shift effect
        setDimensionShift(newProgress / 100);
        
        return newProgress;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = phases[currentPhase].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 flex items-center justify-center relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={`neuron-${i}`}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
              animation: `gentle-pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <svg
            key={`connection-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              opacity: 0.3
            }}
          >
            <line
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke={`rgba(59, 130, 246, ${0.2 + Math.random() * 0.3})`}
              strokeWidth="1"
            />
          </svg>
        ))}
      </div>

      {/* Animated Data Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${10 + (i * 4.2)}%`,
              top: `${20 + Math.sin(i * 0.5) * 30}%`,
              background: `linear-gradient(135deg, rgba(59, 130, 246, ${0.6 + Math.sin(i) * 0.3}), rgba(139, 92, 246, ${0.4 + Math.cos(i) * 0.2}))`,
              animation: `professional-float ${8 + (i % 3) * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: `0 0 ${8 + Math.sin(i) * 4}px rgba(59, 130, 246, 0.4)`
            }}
          />
        ))}
      </div>

      {/* Professional Connecting Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`connection-${i}`}
            className="absolute h-px opacity-30"
            style={{
              width: `${150 + Math.random() * 200}px`,
              left: `${Math.random() * 80}%`,
              top: `${20 + i * 12}%`,
              background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), rgba(139, 92, 246, 0.4), transparent)`,
              transform: `rotate(${-20 + Math.random() * 40}deg)`,
              animation: `data-flow ${6 + i}s linear infinite`,
              animationDelay: `${i * 1.2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div 
        className="text-center space-y-12 z-10 transition-all duration-1000 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${dimensionShift * 1}deg) translateZ(${dimensionShift * 8}px)`,
        }}
      >
        {/* Professional Header */}
        <div className="space-y-6">
          <div className="relative">
            <h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight"
              style={{
                filter: `drop-shadow(0 4px ${12 + dimensionShift * 8}px rgba(59, 130, 246, 0.3))`,
                letterSpacing: '0.02em'
              }}
            >
              Ravula Charan
            </h1>
            {/* Subtle accent line */}
            <div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{
                width: `${40 + dimensionShift * 60}%`,
                opacity: 0.6 + dimensionShift * 0.4,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }}
            />
          </div>
          
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-blue-200/90 font-medium tracking-wide">
              Data Analyst
            </p>
            <p className="text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed">
              Power BI Expert • SAP Professional • Business Intelligence Specialist
            </p>
          </div>
        </div>

        {/* Enhanced Central Animation Hub */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Outer Professional Ring */}
            <div 
              className="w-40 h-40 rounded-full border-2 relative"
              style={{
                borderImage: `conic-gradient(from 0deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.6), rgba(16, 185, 129, 0.7), rgba(59, 130, 246, 0.8)) 1`,
                boxShadow: `
                  0 0 ${40 + dimensionShift * 30}px rgba(59, 130, 246, 0.4),
                  inset 0 0 ${20 + dimensionShift * 15}px rgba(139, 92, 246, 0.2)
                `,
                animation: 'professional-rotate 12s linear infinite'
              }}
            >
              {/* Progress Ring */}
              <div 
                className="absolute inset-2 rounded-full border-4 border-transparent"
                style={{
                  background: `conic-gradient(from 0deg, rgba(59, 130, 246, 0.8) ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
                  borderRadius: '50%',
                  mask: 'radial-gradient(circle, transparent 60%, black 65%)',
                  WebkitMask: 'radial-gradient(circle, transparent 60%, black 65%)'
                }}
              />
            </div>
            
            {/* Central Icon Container */}
            <div 
              className="absolute inset-6 rounded-full bg-gradient-to-br from-slate-800/80 via-blue-900/60 to-purple-900/80 flex items-center justify-center backdrop-blur-xl border border-blue-400/20"
              style={{
                boxShadow: `
                  inset 0 0 ${25 + dimensionShift * 15}px rgba(59, 130, 246, 0.15),
                  0 0 ${30 + dimensionShift * 20}px rgba(59, 130, 246, 0.2)
                `,
                animation: 'gentle-pulse 4s ease-in-out infinite'
              }}
            >
              <CurrentIcon 
                className={`w-16 h-16 ${phases[currentPhase].color} transition-all duration-500`}
                style={{
                  filter: `drop-shadow(0 0 ${12 + dimensionShift * 8}px currentColor)`,
                  animation: 'icon-pulse 3s ease-in-out infinite'
                }}
              />
            </div>

            {/* Professional Orbiting Elements */}
            {[Database, BarChart3, TrendingUp, Code].map((Icon, i) => (
              <div 
                key={i}
                className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center backdrop-blur-sm"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateX(90px)`,
                  animation: `professional-orbit ${16 + i * 2}s linear infinite reverse`,
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
                }}
              >
                <Icon className="w-4 h-4 text-blue-300/80" />
              </div>
            ))}
          </div>
        </div>

        {/* Professional Status Display */}
        <div className="space-y-4">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-blue-400/20 p-6 max-w-md mx-auto">
            <p className={`text-lg font-semibold ${phases[currentPhase].color} mb-2 transition-all duration-500`}>
              {phases[currentPhase].text}
            </p>
            
            {/* Enhanced Progress Bar */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-slate-300">
                <span>System Initialization</span>
                <span className="font-mono">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-slate-800/60 rounded-full overflow-hidden border border-blue-400/20">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 transition-all duration-300 ease-out rounded-full relative"
                  style={{ 
                    width: `${progress}%`,
                    boxShadow: `0 0 ${15 + progress * 0.2}px rgba(59, 130, 246, 0.6)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  <div 
                    className="absolute top-1/2 w-2 h-2 bg-white/90 rounded-full transform -translate-y-1/2 shadow-lg"
                    style={{
                      left: `${Math.max(0, progress - 2)}%`,
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Console */}
        <div className="bg-slate-950/60 backdrop-blur-xl rounded-xl border border-blue-400/20 p-6 max-w-lg mx-auto font-mono text-sm">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-700/50">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
            <span className="text-slate-400 ml-2">System Console</span>
          </div>
          <div className="space-y-2 text-left">
            <div className="text-green-400" style={{ animation: 'console-type 4s ease-in-out infinite' }}>
              {'> Loading Power BI Analytics Suite...'}
            </div>
            <div className="text-blue-400" style={{ animation: 'console-type 4s ease-in-out infinite', animationDelay: '1s' }}>
              {'> Initializing SAP Integration Layer...'}
            </div>
            <div className="text-purple-400" style={{ animation: 'console-type 4s ease-in-out infinite', animationDelay: '2s' }}>
              {'> Establishing Data Pipeline Connections...'}
            </div>
            <div className="text-cyan-400" style={{ animation: 'console-type 4s ease-in-out infinite', animationDelay: '3s' }}>
              {'> Welcome to Advanced Analytics Platform...'}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`ambient-${i}`}
            className="absolute opacity-5"
            style={{
              left: `${10 + (i * 11)}%`,
              top: `${20 + Math.sin(i * 0.7) * 40}%`,
              animation: `ambient-float ${25 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`
            }}
          >
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-blue-400/10" />
          </div>
        ))}
      </div>
    </div>
  );
};
