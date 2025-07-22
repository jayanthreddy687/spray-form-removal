import { Header } from "@/components/Header";
import { TrustIndicators } from "@/components/TrustIndicators";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { AsSeenOnTVSection } from "@/components/AsSeenOnTVSection";
import { InstantOfferChecker } from "@/components/InstantOfferChecker";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import InsulationInfoSection from "@/components/InsulationInfoSection";
import SprayFoamPromoSection from "@/components/SprayFoamPromoSection";
import SEO from "@/components/SEO";

const Index = () => {

  const meta = {
    title: "Spray Foam Removal | UK Specialists",
    description: "Need spray foam insulation removal? Solve mortgage issues fast across the UK. Get your free quote today."
  };

  return (
    <>
      <SEO title={meta.title} description={meta.description} />
      <h1 className="sr-only">Spray Foam Insulation Removal Services</h1>
      <div className="min-h-screen bg-background">
      <Header />
      <section id="hero">
        <TrustIndicators />
        <HeroSection />
      </section>
      <section id="process">
        <ProcessSteps />
      </section>
      <section id="InsulationInfo">
        <InsulationInfoSection />
      </section>
      <AsSeenOnTVSection />

      <SprayFoamPromoSection />
      <section id="offer">
        <InstantOfferChecker />
      </section>
      <section id="reviews">
        <ReviewsSection />
      </section>
      <TrustIndicators />
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </div>
  </>);
};

export default Index;
