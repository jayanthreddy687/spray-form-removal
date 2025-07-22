import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InstantOfferChecker = () => {
  const [postcode, setPostcode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/eligibility-check');
  };

  const benefits = [
    "Secure Your 20% Discount Voucher",
    "Increase Property Value by £1,000s",
    "Enable Your Sale, Remortgage & Equity Release",
    "Book Removal with No Deposit Required"
  ];

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Benefits */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="underline decoration-accent decoration-4 underline-offset-4">
                Instant Offer Checker
              </span>
            </h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-accent rounded-full p-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="text-lg font-medium italic">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="text-center">
            <h3 className="text-accent text-lg font-bold mb-2 italic tracking-wide">
              CHECK IF YOU QUALIFY FOR
            </h3>
            <div className="text-accent text-6xl md:text-7xl font-black mb-2 leading-none">
              20% OFF
            </div>
            <p className="text-accent text-xl font-bold mb-8 tracking-wide">
              SPRAY FOAM INSULATION REMOVAL
            </p>

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
        </div>
      </div>
    </section>
  );
};