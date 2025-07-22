import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/spray-foam-1024x683-1-1.png";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const [postcode, setPostcode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/eligibility-check');
  };

  return (
    <section className="relative min-h-[600px] bg-gradient-hero text-primary-foreground overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            DO YOU HAVE SPRAY FOAM
            <br />
            <span className="block">INSULATION IN YOUR LOFT?</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="text-accent block mt-2">GOVERNMENT BACKED | UPTO 60% OFF</span>
            </h2>          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Spray foam insulation in your loft could be stopping you from selling, remortgaging, 
            or accessing equity, as many UK lenders now refuse mortgages on affected homes. 
            Check below to see if your property is affected and secure your next move.
          </p>

          <div className="mb-8">
            <p className="text-lg mb-4 font-medium">Check your eligibility - it only takes 60 seconds</p>
            
            <form onSubmit={handleSubmit} className="flex rounded-full overflow-hidden bg-background shadow-lg max-w-md mx-auto">
              <Input
                type="text"
                placeholder="ENTER POSTCODE"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="flex-1 border-0 bg-transparent h-14 px-6 text-center font-medium text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0"
                required
              />
              <Button 
                type="submit" 
                variant="cta"
                className="h-14 px-6 rounded-none rounded-r-full font-bold"
              >
                CHECK MY ELIGIBILITY
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="animate-slide-up">
            <Badge variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/20 px-4 py-2">
              <span className="font-bold mr-2">BBC NEWS</span>
              "Lenders reject homes with spray foam insulation"
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};