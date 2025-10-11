
import { useState, useEffect, useRef } from "react";
import { X, Terminal } from "lucide-react";

interface CommandTerminalProps {
  onNavigate: (section: string) => void;
}

export const CommandTerminal = ({ onNavigate }: CommandTerminalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    "go to projects": "projects",
    "open resume": "resume",
    "show roadmap": "roadmap",
    "skills": "about",
    "about": "about",
    "contact": "contact",
    "publications": "publications",
    "gamezone": "gamezone",
    "help": "help"
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    setHistory(prev => [...prev, `> ${cmd}`]);
    
    if (command === "help") {
      setHistory(prev => [...prev, "Available commands:", "- go to projects", "- open resume", "- show roadmap", "- skills", "- about", "- contact", "- publications", "- gamezone"]);
    } else if (commands[command as keyof typeof commands]) {
      setHistory(prev => [...prev, `Navigating to ${command}...`]);
      onNavigate(commands[command as keyof typeof commands]);
      setTimeout(() => setIsOpen(false), 500);
    } else {
      setHistory(prev => [...prev, `Command not found: ${cmd}. Type 'help' for available commands.`]);
    }
    
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-110 animate-pulse-glow"
        aria-label="Open command terminal"
      >
        <Terminal className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl mx-4 bg-slate-900 text-green-400 rounded-lg border border-green-400/30 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-green-400/30">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span className="text-sm font-mono">Terminal</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-4 h-64 overflow-y-auto font-mono text-sm">
          <div className="mb-2">Welcome to Ravula Charan's Portfolio Terminal</div>
          <div className="mb-2 text-green-300">Type 'help' for available commands or Ctrl+` to close</div>
          
          {history.map((line, index) => (
            <div key={index} className="mb-1">{line}</div>
          ))}
          
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-green-400 mr-2">➜</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-green-400 terminal-cursor"
              placeholder="Enter command..."
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
