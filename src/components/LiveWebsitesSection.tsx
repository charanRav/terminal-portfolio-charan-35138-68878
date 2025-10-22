import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

const LiveWebsitesSection = () => {
  const websites = [
    {
      id: 1,
      title: "Name Finder",
      description: "AI-powered name generation tool for YouTube channels, startups, gaming IDs, podcasts, and fashion brands. Generate creative, brandable names instantly and for free.",
      url: "https://namefinder-nu.vercel.app/",
      category: "AI Tools",
      features: ["AI-Powered Generation", "Multiple Categories", "Instant Results", "Free to Use"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "AllFinCal",
      description: "One-stop financial calculator platform designed to simplify your finance management. Comprehensive suite of financial calculation tools for various needs.",
      url: "https://allfincal.vercel.app/",
      category: "Finance Tools",
      features: ["Financial Calculators", "User-Friendly Interface", "Comprehensive Tools", "Real-Time Calculations"],
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="live-websites" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Live & Running
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Production Websites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built by Ravula Charan, currently live and serving users worldwide
          </p>
        </div>

        {/* Websites Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {websites.map((website, index) => (
            <Card 
              key={website.id}
              className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${website.gradient}`} />
              
              <CardContent className="p-8">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {website.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {website.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {website.description}
                </p>

                {/* Features */}
                <div className="mb-6 space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-3">Key Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {website.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Website Button */}
                <Button
                  variant="default"
                  className="w-full group/btn bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300"
                  onClick={() => window.open(website.url, '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  View Live Website
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>

                {/* Status Indicator */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Live & Active</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ✨ These applications are actively maintained and continuously improved
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveWebsitesSection;