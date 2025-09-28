import { Button } from "@/components/ui/button";
import { HardHat, Menu } from "lucide-react";
import { useState } from "react";
import logoUrl from "@assets/logo_1759014712935.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoUrl} alt="Digging Dreams" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#play" className="text-foreground hover:text-primary transition-colors" data-testid="link-play">
              Play
            </a>
            <a href="#parties" className="text-foreground hover:text-primary transition-colors" data-testid="link-parties">
              Birthday Parties
            </a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors" data-testid="link-events">
              Private Events
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors" data-testid="link-pricing">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors" data-testid="link-contact">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:flex" data-testid="button-book-now">
              <HardHat className="w-4 h-4 mr-2" />
              Book Now
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <a href="#play" className="text-foreground hover:text-primary transition-colors py-2" data-testid="link-mobile-play">
                Play
              </a>
              <a href="#parties" className="text-foreground hover:text-primary transition-colors py-2" data-testid="link-mobile-parties">
                Birthday Parties
              </a>
              <a href="#events" className="text-foreground hover:text-primary transition-colors py-2" data-testid="link-mobile-events">
                Private Events
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors py-2" data-testid="link-mobile-pricing">
                Pricing
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2" data-testid="link-mobile-contact">
                Contact
              </a>
              <Button className="mt-4" data-testid="button-mobile-book-now">
                <HardHat className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}