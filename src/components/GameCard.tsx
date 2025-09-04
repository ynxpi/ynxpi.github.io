import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  cheatCount: number;
}

const GameCard = ({ id, title, description, image, cheatCount }: GameCardProps) => {
  return (
    <div className="card-game group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded-md text-sm font-medium">
          {cheatCount} cheats
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <Link to={`/game/${id}`}>
          <Button className="w-full btn-gaming">
            View Cheats
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;