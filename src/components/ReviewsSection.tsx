import { TrustpilotBadge } from "./TrustpilotBadge";

const reviews = [
  {
    name: "Mrs L Bowie",
    title: "Would highly recommend",
    content: "From quotation to removal everything was fantastic. All staff were polite and extremely pleasant. The staff doing the removal were great and couldn't be happier as they left no mess afterwards. The house already feels better. Would highly recommend."
  },
  {
    name: "Amanda North", 
    title: "An absolutely amazing product",
    content: "An absolutely amazing product, was very well explained, no hard sales pitch all questions answered fully and in layments terms, sales staff on the phone were very customer friendly and easy to talk too. The lads that removed the insulation were considerate to my property very polite clean and tidy."
  },
  {
    name: "Hazel Robbins",
    title: "Recommend this firm",
    content: "We used this firm to remove spray foam insulation in our loft. The lads arrived promptly and were friendly, polite and very efficient. We were not disturbed except for a certain amount of noise. We are now very pleased with the service and it has fulfilled our expectations."
  }
];

export const ReviewsSection = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
          Our reviews...
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-primary text-primary-foreground p-4 sm:p-6 rounded-lg shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <p className="text-sm opacity-80 mb-2">{review.name}</p>
                <h3 className="text-xl font-bold mb-4">{review.title}</h3>
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};