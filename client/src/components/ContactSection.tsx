import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Mail, Calendar, Users } from "lucide-react";

export default function ContactSection() {
  const handleContact = (type: string) => {
    console.log(`${type} contact clicked`);
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-contact-label">
            Visit Us
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Ready to Start Digging?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            Come experience the magic of construction play. We're here to help plan your perfect visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover-elevate" data-testid="card-contact-location">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <CardTitle>Our Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium mb-2">123 Construction Way</p>
                <p className="text-muted-foreground mb-4">Builder's District, CD 12345</p>
                <Button 
                  variant="outline" 
                  onClick={() => handleContact('directions')}
                  data-testid="button-contact-directions"
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-contact-hours">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <CardTitle>Operating Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Last admission 1 hour before closing
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-contact-info">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch for questions or bookings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(555) 123-DIRT</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@diggingdreams.com</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleContact('phone')}
                    data-testid="button-contact-phone"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleContact('email')}
                    data-testid="button-contact-email"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="hover-elevate bg-primary/5 border-primary/20" data-testid="card-contact-book-party">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <CardTitle>Book a Birthday Party</CardTitle>
                </div>
                <CardDescription>
                  Create an unforgettable construction-themed celebration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>Up to 15 children included</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>2-hour private party experience</span>
                  </div>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => handleContact('party booking')}
                  data-testid="button-contact-book-party"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Birthday Party
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate bg-secondary/5 border-secondary/20" data-testid="card-contact-private-event">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <CardTitle>Private Group Events</CardTitle>
                </div>
                <CardDescription>
                  Perfect for schools, camps, and organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>Entire facility rental available</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>Educational programs included</span>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => handleContact('private event')}
                  data-testid="button-contact-private-event"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Plan Group Event
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-contact-general">
              <CardHeader>
                <CardTitle>General Questions</CardTitle>
                <CardDescription>
                  Need help planning your visit or have other questions?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleContact('general inquiry')}
                  data-testid="button-contact-general"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <Card className="overflow-hidden" data-testid="card-contact-map">
            <div className="h-64 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Find us at 123 Construction Way</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}