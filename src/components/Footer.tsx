import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-strong border-t border-border/50 mt-auto">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-heading text-gradient">ClearMed</h3>
            <p className="text-muted-foreground text-sm mt-2">Smarter Choices. Better Care.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-foreground mb-1">Quick Links</h4>
            <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">About Us</Link>
          </div>

          {/* Credits */}
          <div className="text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-end gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by Team ClearMed
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} ClearMed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
