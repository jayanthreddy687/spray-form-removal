import React from "react";
import img from "../assets/insulationinfo.jpg"
/**
 * Section with text on the left and image on the right, as requested.
 * The image src is left empty for the user to fill in.
 */
const InsulationInfoSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/30">
      <div className="container mx-auto px-2 md:px-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden">
          {/* Left: Text Content */}
          <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4 text-left">
              The most effective insulation removal on the market.
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed text-left">
              Our specialists will meticulously remove the existing insulation and substitute it with a more traditional type, while skillfully repairing any associated damage. This comprehensive approach is vital for mortgage lenders to even contemplate approving your property. We take pride in offering a prompt and efficient Spray Foam Insulation Removal Service. Our commitment to providing same-day responses to quote inquiries reflects our dedication to addressing your needs quickly.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 min-w-[200px] max-w-[450px] md:max-w-[420px] flex items-stretch">
            <img 
              src={img} 
              alt="Insulation removal process"
              className="w-full h-full object-cover rounded-r-lg md:rounded-lg md:rounded-l-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsulationInfoSection;
