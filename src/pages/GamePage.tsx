import { useParams } from "react-router-dom";
import { ArrowLeft, Download, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CheatCard from "@/components/CheatCard";
import Navigation from "@/components/Navigation";

const GamePage = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const gameData = {
    "valorant": {
      title: "Valorant",
      description: "Tactical FPS game by Riot Games",
      image: "/api/placeholder/800/400",
      cheats: [
        {
          title: "Valorant Aimbot Pro",
          description: "Advanced aimbot with smooth aim, target prediction, and customizable FOV settings. Includes wallhack and ESP features.",
          version: "v8.07 - v8.10",
          verified: true,
          rating: 4.8,
          downloadUrl: "#"
        },
        {
          title: "Radar Hack",
          description: "Shows enemy positions on minimap. Lightweight and undetectable with anti-cheat bypass.",
          version: "v8.07+",
          verified: true,
          rating: 4.5,
          downloadUrl: "#"
        },
        {
          title: "No Recoil Script",
          description: "Eliminates weapon recoil for all weapons. Works with all game modes including ranked.",
          version: "v8.05 - v8.10",
          verified: false,
          rating: 4.2,
          downloadUrl: "#"
        },
        {
          title: "Speedhack Utility",
          description: "Increase movement speed and jump height. Customizable speed multiplier from 1.1x to 3x.",
          version: "v8.07+",
          verified: true,
          rating: 4.6,
          downloadUrl: "#"
        }
      ]
    },
    // Add more games as needed
  };

  const game = gameData[id as keyof typeof gameData];

  if (!game) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Game Not Found</h1>
            <Link to="/">
              <Button className="btn-gaming">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gaming-bg to-accent py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" className="btn-gaming-outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
                {game.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {game.description}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-md">
                  {game.cheats.length} Cheats Available
                </span>
                <span className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-md">
                  Updated Weekly
                </span>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={game.image}
                alt={game.title}
                className="w-full rounded-xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cheats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold glow-text">Available Cheats</h2>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search cheats..."
              className="bg-input border border-border rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Safety Warning */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <h3 className="text-destructive font-semibold mb-2">⚠️ Safety Warning</h3>
          <p className="text-sm text-muted-foreground">
            Use cheats at your own risk. We are not responsible for account bans or other consequences. 
            Always use a secondary account when testing new cheats.
          </p>
        </div>

        {/* Cheats Grid */}
        <div className="space-y-6">
          {game.cheats.map((cheat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CheatCard
                title={cheat.title}
                description={cheat.description}
                version={cheat.version}
                verified={cheat.verified}
                rating={cheat.rating}
                downloadUrl={cheat.downloadUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;