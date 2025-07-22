import { MapPin, FileText, Wrench, PoundSterling } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    icon: MapPin,
    title: "Enter Your Postcode",
    description: "Provide a few basic details to get started",
  },
  {
    number: "2", 
    icon: FileText,
    title: "Talk To An Adviser",
    description: "We visit your property for a home consultation",
  },
  {
    number: "3",
    icon: Wrench,
    title: "Insulation Removed",
    description: "If you are happy with your quote, your spray foam insulation will be removed",
  },
  {
    number: "4",
    icon: PoundSterling,
    title: "Restore Your Home's Value",
    description: "Experience Improved Airflow & Increase Your Property's Value",
  },
];

export const ProcessSteps = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
  <Card
    key={step.number}
    className="animate-fade-in border shadow-card text-center"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    <CardContent className="p-6 flex flex-col items-center">
      <div className="relative mb-6 flex items-center justify-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 shadow-card relative">
          <step.icon className="h-14 w-14 text-primary" />
          <span className="absolute -top-2 -left-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-base shadow-card border-2 border-white">{step.number}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
    </CardContent>
  </Card>
))}
        </div>
      </div>
    </section>
  );
};