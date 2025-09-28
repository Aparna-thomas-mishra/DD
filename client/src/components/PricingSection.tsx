import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, Star, CheckCircle } from "lucide-react";

export default function PricingSection() {
  const handlePurchase = (plan: string) => {
    console.log(`Purchase ${plan} clicked`);
  };

  const pricingPlans = [
    {
      name: "Day Pass",
      price: "$18",
      period: "per child",
      description: "Perfect for your first visit or occasional play",
      icon: <Clock className="w-6 h-6 text-primary" />,
      features: [
        "All-day sandbox access",
        "All construction equipment included",
        "Parent admission free",
        "Clean, safe environment",
        "No time limits"
      ],
      cta: "Buy Day Pass",
      popular: false
    },
    {
      name: "Family Pack",
      price: "$45",
      period: "up to 4 children",
      description: "Great value for families and groups",
      icon: <Users className="w-6 h-6 text-primary" />,
      features: [
        "Up to 4 children included",
        "All day unlimited play",
        "Free parent supervision",
        "Construction hard hats included",
        "Group activity options",
        "Same-day re-entry"
      ],
      cta: "Buy Family Pack",
      popular: true
    },
    {
      name: "Birthday Party",
      price: "$299",
      period: "up to 15 children",
      description: "Unforgettable construction-themed celebration",
      icon: <Calendar className="w-6 h-6 text-primary" />,
      features: [
        "2-hour private party area",
        "Dedicated party host",
        "Construction birthday decorations",
        "Special hard hat for birthday child",
        "Party table setup included",
        "Additional children +$12 each"
      ],
      cta: "Book Party",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-pricing-label">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-pricing-title">
            Start Building Memories Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-description">
            Choose the perfect option for your family. All plans include access to our premium 
            construction equipment and sandbox facilities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`hover-elevate relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
              data-testid={`card-pricing-${index}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  {plan.icon}
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-6" 
                  variant={plan.popular ? "default" : "secondary"}
                  onClick={() => handlePurchase(plan.name)}
                  data-testid={`button-pricing-${index}`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            <strong>No reservations required</strong> for day passes and family packs. 
            Walk-ins welcome during operating hours.
          </p>
          <p className="text-sm text-muted-foreground">
            All children must be supervised by a parent or guardian. 
            Safety waivers required for all participants.
          </p>
        </div>
      </div>
    </section>
  );
}