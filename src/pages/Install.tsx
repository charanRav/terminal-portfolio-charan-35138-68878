import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Check, Smartphone, Chrome, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function Install() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Detect iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(ios);

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Button>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Smartphone className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Install Portfolio App
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Get quick access to my portfolio directly from your home screen. Works offline and loads instantly!
          </p>
        </div>

        {/* Installation Status */}
        {isInstalled ? (
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Already Installed!</h2>
            <p className="text-muted-foreground">
              The app is installed on your device. You can access it from your home screen.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Install Button for Android/Desktop */}
            {deferredPrompt && !isIOS && (
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
                <Button
                  onClick={handleInstall}
                  size="lg"
                  className="w-full gap-3 text-lg h-14"
                >
                  <Download className="w-5 h-5" />
                  Install App
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Click to install the app on your device
                </p>
              </div>
            )}

            {/* iOS Instructions */}
            {isIOS && (
              <div className="bg-gradient-to-r from-slate-500/10 to-zinc-500/10 border border-slate-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Chrome className="w-5 h-5" />
                  iOS Installation
                </h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">1</span>
                    <span>Tap the <strong>Share</strong> button in Safari</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">2</span>
                    <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">3</span>
                    <span>Tap <strong>"Add"</strong> in the top right corner</span>
                  </li>
                </ol>
              </div>
            )}

            {/* Android Manual Instructions */}
            {!deferredPrompt && !isIOS && (
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Chrome className="w-5 h-5" />
                  Android Installation
                </h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">1</span>
                    <span>Tap the <strong>menu (⋮)</strong> in Chrome</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">2</span>
                    <span>Select <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">3</span>
                    <span>Tap <strong>"Install"</strong> or <strong>"Add"</strong></span>
                  </li>
                </ol>
              </div>
            )}
          </div>
        )}

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 pt-4">
          <div className="bg-muted/50 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Instant load times</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-semibold mb-1">Works Offline</h3>
            <p className="text-sm text-muted-foreground">Access anytime</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold mb-1">Native Feel</h3>
            <p className="text-sm text-muted-foreground">Like a real app</p>
          </div>
        </div>
      </div>
    </div>
  );
}
