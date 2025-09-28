import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import logoUrl from "@assets/logo_1759014712935.png";

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    console.log(`${platform} social link clicked`);
  };

  const handleQuickLink = (link: string) => {
    console.log(`${link} footer link clicked`);
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoUrl} alt="Digging Dreams" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Where little hands become expert excavators. Creating magical construction 
              experiences for children through safe, educational play.
            </p>
            <div className="flex space-x-2">
              <Button 
                size="icon" 
                variant="ghost"
                onClick={() => handleSocialClick('Facebook')}
                data-testid="button-social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                onClick={() => handleSocialClick('Instagram')}
                data-testid="button-social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                onClick={() => handleSocialClick('Twitter')}
                data-testid="button-social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-services-title">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleQuickLink('open play')}
                  data-testid="link-footer-open-play"
                >
                  Open Play Sessions
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleQuickLink('birthday parties')}
                  data-testid="link-footer-parties"
                >
                  Birthday Parties
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleQuickLink('private events')}
                  data-testid="link-footer-events"
                >
                  Private Events
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleQuickLink('pricing')}
                  data-testid="link-footer-pricing"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-info-title">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleQuickLink('safety guidelines')}
                  data-testid="link-footer-safety"
                >
                  Safety Guidelines
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleQuickLink('faqs')}
                  data-testid="link-footer-faqs"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleQuickLink('waiver')}
                  data-testid="link-footer-waiver"
                >
                  Sign Waiver
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleQuickLink('group rates')}
                  data-testid="link-footer-groups"
                >
                  Group Rates
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-contact-title">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Construction Way<br />
                  Builder's District, CD 12345
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">(555) 123-DIRT</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@diggingdreams.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Mon-Thu: 10AM-6PM</p>
                  <p>Fri-Sat: 9AM-8PM</p>
                  <p>Sun: 10AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-card-border">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="font-semibold mb-2" data-testid="text-footer-newsletter-title">
              Stay Updated on Construction Fun!
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest news about new equipment, special events, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-border rounded-md text-sm"
                data-testid="input-footer-email"
              />
              <Button 
                onClick={() => handleQuickLink('newsletter signup')}
                data-testid="button-footer-subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Digging Dreams. All rights reserved.
              </p>
              <Badge variant="outline" className="text-xs">
                Family Owned & Operated
              </Badge>
            </div>
            <div className="flex space-x-4 text-sm">
              <button 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => handleQuickLink('privacy policy')}
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </button>
              <button 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => handleQuickLink('terms of service')}
                data-testid="link-footer-terms"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}