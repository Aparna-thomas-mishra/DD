import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Construction, Calendar, Users, Star, Clock, Shield } from "lucide-react";
import birthdayImage from "@assets/generated_images/Construction_themed_birthday_party_f11ef901.png";
import eventImage from "@assets/generated_images/Private_construction_play_event_89e284b5.png";

export default function ServicesSection() {
  const handleLearnMore = (service: string) => {
    console.log(`Learn more about ${service} clicked`);
  };

  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-services-label">
            Our Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-services-title">
            Everything Your Little Builder Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            From open play to special celebrations, we create magical construction experiences 
            that combine fun, learning, and safety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Open Play */}
          <Card className="hover-elevate" data-testid="card-service-play">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Construction className="w-8 h-8 text-primary" />
                <Badge variant="outline">Walk-in Welcome</Badge>
              </div>
              <CardTitle>Open Play Sessions</CardTitle>
              <CardDescription>
                Unlimited sandbox adventures with professional-grade construction equipment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>Safe, clean environment</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>All-day play sessions</span>
                </div>
                <div className="flex items-center text-sm">
                  <Construction className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>50+ excavators & trucks</span>
                </div>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleLearnMore('open play')}
                data-testid="button-play-learn-more"
              >
                View Pricing
              </Button>
            </CardContent>
          </Card>

          {/* Birthday Parties */}
          <Card className="hover-elevate relative overflow-hidden" data-testid="card-service-parties">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${birthdayImage})` }}
            />
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between">
                <Calendar className="w-8 h-8 text-primary" />
                <Badge>Most Popular</Badge>
              </div>
              <CardTitle>Birthday Parties</CardTitle>
              <CardDescription>
                Construction-themed celebrations your child will never forget
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Star className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>Dedicated party host</span>
                </div>
                <div className="flex items-center text-sm">
                  <Construction className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>Hard hat for birthday child</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>Private party area</span>
                </div>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleLearnMore('birthday parties')}
                data-testid="button-parties-learn-more"
              >
                Party Packages
              </Button>
            </CardContent>
          </Card>

          {/* Private Events */}
          <Card className="hover-elevate relative overflow-hidden" data-testid="card-service-events">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${eventImage})` }}
            />
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between">
                <Users className="w-8 h-8 text-primary" />
                <Badge variant="outline">Custom</Badge>
              </div>
              <CardTitle>Private Events</CardTitle>
              <CardDescription>
                Exclusive venue rental for schools, camps, and special groups
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>Entire facility rental</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>Educational programs</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>Group activities</span>
                </div>
              </div>
              <Button 
                variant="secondary" 
                className="w-full" 
                onClick={() => handleLearnMore('private events')}
                data-testid="button-events-learn-more"
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to start building memories?
          </p>
          <Button 
            size="lg" 
            onClick={() => handleLearnMore('general inquiry')}
            data-testid="button-services-cta"
          >
            Plan Your Visit
          </Button>
        </div>
      </div>
    </section>
  );
}