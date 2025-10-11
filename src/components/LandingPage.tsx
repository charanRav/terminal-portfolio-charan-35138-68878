import { useState } from "react";
import { ChevronRight, MessageCircle, ArrowRight } from "lucide-react";

interface LandingPageProps {
  onExplore: () => void;
  onChatOpen: () => void;
}

export const LandingPage = ({ onExplore, onChatOpen }: LandingPageProps) => {
  const [isHoveringExplore, setIsHoveringExplore] = useState(false);
  const [isHoveringChat, setIsHoveringChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      {/* Updated Spline Robot - New Greeting Bot */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-6gjqpt88Yu2jF3R84agABSrr/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ pointerEvents: 'auto' }}
          allow="pointer-lock"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl">
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                Ravula Charan
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light">
              AI & Cloud Developer | Data Analyst
            </p>
            
            <div className="pt-2">
              <p className="text-base md:text-lg text-slate-300 leading-relaxed italic border-l-4 border-blue-500/60 pl-5 py-3 bg-gradient-to-r from-slate-800/50 to-transparent rounded-r-lg backdrop-blur-sm">
                "I don't just analyze data — I make data think."
              </p>
            </div>
          </div>

          {/* Action buttons */}
            <div className="space-y-4 pt-6">
              <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">
                Choose your path:
              </p>
              
              <div className="grid gap-4">
                {/* Explore Yourself button */}
                <button
                  onClick={onExplore}
                  onMouseEnter={() => setIsHoveringExplore(true)}
                  onMouseLeave={() => setIsHoveringExplore(false)}
                  className="group relative overflow-hidden rounded-2xl p-1 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  
                  <div className="relative bg-slate-900 rounded-xl px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <ChevronRight className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-white">Explore Portfolio</h3>
                        <p className="text-sm text-slate-400">Discover my projects, skills & experience</p>
                      </div>
                    </div>
                    <ArrowRight 
                      className={`w-6 h-6 text-white transition-transform duration-300 ${
                        isHoveringExplore ? 'translate-x-2' : ''
                      }`} 
                    />
                  </div>
                </button>

                {/* Ask Richard button */}
                <button
                  onClick={onChatOpen}
                  onMouseEnter={() => setIsHoveringChat(true)}
                  onMouseLeave={() => setIsHoveringChat(false)}
                  className="group relative overflow-hidden rounded-2xl p-1 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  
                  <div className="relative bg-slate-900 rounded-xl px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-white">Ask Richard</h3>
                        <p className="text-sm text-slate-400">Chat with AI assistant about my background</p>
                      </div>
                    </div>
                    <ArrowRight 
                      className={`w-6 h-6 text-white transition-transform duration-300 ${
                        isHoveringChat ? 'translate-x-2' : ''
                      }`} 
                    />
                  </div>
                </button>
              </div>
            </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="glass rounded-xl p-5 text-center backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">8.94</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mt-2">CGPA</div>
            </div>
            <div className="glass rounded-xl p-5 text-center backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">7+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mt-2">Projects</div>
            </div>
            <div className="glass rounded-xl p-5 text-center backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">3</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mt-2">Publications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none" />
    </div>
  );
};