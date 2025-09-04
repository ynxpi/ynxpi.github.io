import { Button } from "@/components/ui/button";
import { Download, Shield, Star } from "lucide-react";

interface CheatCardProps {
  title: string;
  description: string;
  version: string;
  verified?: boolean;
  rating?: number;
  downloadUrl: string;
}

const CheatCard = ({ title, description, version, verified = false, rating = 0, downloadUrl }: CheatCardProps) => {
  const handleDownload = () => {
    // In a real app, this would handle the download
    console.log(`Downloading from: ${downloadUrl}`);
  };

  return (
    <div className="card-gaming group">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            {verified && (
              <div className="flex items-center gap-1 bg-primary/20 text-primary px-2 py-1 rounded-md text-xs">
                <Shield className="w-3 h-3" />
                Verified
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">
              Compatible: <span className="text-foreground">{version}</span>
            </span>
            {rating > 0 && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-foreground">{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>
        
        <Button 
          onClick={handleDownload}
          className="btn-gaming whitespace-nowrap"
        >
          <Download className="w-4 h-4 mr-2" />
          Download .exe
        </Button>
      </div>
    </div>
  );
};

export default CheatCard;