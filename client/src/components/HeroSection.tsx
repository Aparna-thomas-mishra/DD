import { Button } from "@/components/ui/button";
import { Construction, Calendar, Users } from "lucide-react";
import heroImage from "@assets/generated_images/Children_playing_construction_sandbox_8715954a.png";

export default function HeroSection() {
  const handleBookNow = () => {
    console.log('Book now clicked');
  };

  const handleViewPricing = () => {
    console.log('View pricing clicked');
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg" data-testid="text-hero-title">
          Where Little Hands Become{' '}
          <span className="text-accent">Expert Excavators</span>
        </h1>
        
        <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md" data-testid="text-hero-subtitle">
          Your neighborhood's premier construction-themed indoor play space with massive sandbox, 
          real construction equipment, and unforgettable birthday parties!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 border border-primary-border backdrop-blur-sm"
            onClick={handleBookNow}
            data-testid="button-hero-book-now"
          >
            <Construction className="w-5 h-5 mr-2" />
            Start Digging Today
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            onClick={handleViewPricing}
            data-testid="button-hero-pricing"
          >
            View Pricing
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="card-hero-stat-sandbox">
            <div className="flex items-center justify-center mb-2">
              <Construction className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold">1,000 sq ft Sandbox</h3>
            <p className="text-sm text-white/80">50+ tons of premium sand</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="card-hero-stat-parties">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold">Birthday Parties</h3>
            <p className="text-sm text-white/80">Memorable celebrations</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="card-hero-stat-events">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold">Private Events</h3>
            <p className="text-sm text-white/80">Custom experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
}