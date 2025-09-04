import { Button } from "@/components/ui/button";
import { Search, Zap, Shield, Download } from "lucide-react";
import GameCard from "@/components/GameCard";
import Navigation from "@/components/Navigation";

const Index = () => {
  const featuredGames = [
    {
      id: "valorant",
      title: "Valorant",
      description: "Advanced aimbot, wallhacks, and ESP features for the tactical FPS. Updated for latest patch with anti-cheat bypass.",
      image: "/api/placeholder/400/300",
      cheatCount: 15
    },
    {
      id: "csgo",
      title: "CS2",
      description: "Professional-grade cheats including triggerbot, bhop scripts, and radar hack. Undetected for 6+ months.",
      image: "/api/placeholder/400/300", 
      cheatCount: 23
    },
    {
      id: "apex",
      title: "Apex Legends",
      description: "No recoil macros, aimbot with smooth aim, and advanced movement scripts. Works in ranked matches.",
      image: "/api/placeholder/400/300",
      cheatCount: 18
    },
    {
      id: "fortnite",
      title: "Fortnite",
      description: "Building macros, aimbot assistance, and ESP overlays. Regular updates to avoid detection systems.",
      image: "/api/placeholder/400/300",
      cheatCount: 12
    },
    {
      id: "warzone",
      title: "Call of Duty: Warzone",
      description: "Premium aimbot, wallhacks, and UAV hack. Includes customizable FOV and smooth aim settings.",
      image: "/api/placeholder/400/300",
      cheatCount: 20
    },
    {
      id: "minecraft",
      title: "Minecraft",
      description: "X-ray mods, speed hacks, and automated farming scripts. Perfect for both survival and creative modes.",
      image: "/api/placeholder/400/300",
      cheatCount: 31
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Downloads",
      description: "Get your cheats immediately with our high-speed download servers"
    },
    {
      icon: Shield,
      title: "Verified Safe",
      description: "All cheats are scanned for malware and tested by our security team"
    },
    {
      icon: Download,
      title: "Regular Updates",
      description: "Weekly updates ensure compatibility with latest game patches"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-bg via-background to-accent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text animate-fade-in">
              Unlock Cheats for Your
              <span className="block text-primary animate-pulse-glow">Favorite Games</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Premium game cheats, mods, and hacks for competitive advantage. 
              Trusted by 100,000+ gamers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="btn-gaming text-lg px-8 py-4 animate-float">
                <Search className="w-5 h-5 mr-2" />
                Browse Games
              </Button>
              <Button className="btn-gaming-outline text-lg px-8 py-4">
                View Latest Cheats
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Supported Games</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">Why Choose GameCheats?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card-gaming text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold glow-text">Featured Games</h2>
            <Button className="btn-gaming-outline">
              View All Games
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <div 
                key={game.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GameCard
                  id={game.id}
                  title={game.title}
                  description={game.description}
                  image={game.image}
                  cheatCount={game.cheatCount}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gaming-bg border-t border-border/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">G</span>
                </div>
                <span className="font-bold text-xl text-primary">GameCheats</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Premium game cheats and mods for competitive gaming.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-primary hover:text-primary-glow transition-colors">Browse Games</a>
                <a href="#" className="block text-primary hover:text-primary-glow transition-colors">Latest Cheats</a>
                <a href="#" className="block text-primary hover:text-primary-glow transition-colors">Support</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Popular Games</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-primary hover:text-primary-glow transition-colors">Valorant</a>
                <a href="#" className="block text-primary hover:text-primary-glow transition-colors">CS2</a>
                <a href="#" className="block text-primary hover:text-primary-glow transition-colors">Apex Legends</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-primary hover:text-primary-glow transition-colors">Terms of Service</a>
                <a href="#" className="block text-primary hover:text-primary-glow transition-colors">Privacy Policy</a>
                <a href="#" className="block text-primary hover:text-primary-glow transition-colors">DMCA</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 GameCheats. All rights reserved. 
              <span className="block mt-2">
                ⚠️ Use cheats responsibly and at your own risk. We are not responsible for account bans or game violations.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
