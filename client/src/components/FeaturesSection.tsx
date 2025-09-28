import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Brain, Shield, Users, Trophy } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Imagination",
      description: "Open-ended play encourages creativity and storytelling as children build their own construction worlds.",
      badge: "Creative Play"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Development", 
      description: "Sensory-rich experiences develop motor skills, problem-solving abilities, and spatial awareness.",
      badge: "Learning"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safety First",
      description: "Meticulously maintained equipment and premium sand with rigorous cleaning protocols for peace of mind.",
      badge: "Clean & Safe"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Social Skills",
      description: "Collaborative play teaches teamwork, sharing, and communication in a fun construction environment.",
      badge: "Teamwork"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Family Bonding",
      description: "Parents and children work together on construction projects, creating lasting memories and stronger bonds.",
      badge: "Together"
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Achievement",
      description: "Children gain confidence as they master operating real construction equipment and complete building projects.",
      badge: "Confidence"
    }
  ];

  return (
    <section id="features" className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-features-label">
            Why Choose Digging Dreams
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-features-title">
            Building More Than Just Sand Castles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-features-description">
            Every scoop of sand is an opportunity for growth. Our construction-themed play space 
            is designed to nurture creativity, development, and joy in a safe, clean environment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
              <CardHeader className="text-center">
                <div className="flex items-center justify-between mb-4">
                  <div className="mx-auto">
                    {feature.icon}
                  </div>
                  <Badge variant="outline" className="ml-auto">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2" data-testid="text-features-cta-title">
            Ready to Watch Your Child's Dreams Take Shape?
          </h3>
          <p className="text-muted-foreground" data-testid="text-features-cta-description">
            Join hundreds of families who've discovered the magic of construction play at Digging Dreams.
          </p>
        </div>
      </div>
    </section>
  );
}