import React from "react";
import promoImg from "../assets/spray-foam-1024x683-1-1.png";

const SprayFoamPromoSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/30">
      <div className="container mx-auto px-2 md:px-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden">
          {/* Left: Image */}
          <div className="flex-1 min-w-[200px] max-w-[450px] md:max-w-[420px] flex items-stretch">
            <img 
              src={promoImg} 
              alt="Spray foam removal loft"
              className="w-full h-full object-cover rounded-l-lg md:rounded-lg md:rounded-r-none"
            />
          </div>
          {/* Right: Text Content */}
          <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4 text-left">
              Book Your Spray Foam Removal & Get 20% OFF
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed text-left">
              Spray Foam Insulation Removal has become an essential service in the UK, addressing the growing need to replace outdated or problematic insulation methods. With over 400,000 spray foam installations in the past decades, more property owners are now choosing removal to restore breathability and prevent issues such as trapped moisture. Spray Foam Insulation Removal is widely available and trusted as a reliable solution to improve home safety and efficiency. We are one of the <span className="font-semibold text-foreground">UK’s leading specialists in Spray Foam Insulation Removal.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SprayFoamPromoSection;
