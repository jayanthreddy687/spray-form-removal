import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is spray foam insulation?",
    answer: "Spray foam insulation is a form of insulating material that is initially applied in a liquid state and then expands to occupy the space where it's used. This type of insulation is frequently utilised in walls, attics, and various other locations that require insulation."
  },
  {
    question: "How does Spray Foam Removal Scheme provide me with quotes for spray foam insulation removal?",
    answer: "On our website, there is a form available for you to enter your contact details. Once submitted, this information is forwarded to our reliable and certified local spray foam insulation installers in your vicinity. These installers will then reach out to you to schedule a visit to your property for a survey, take measurements, and offer you an estimate for the installation of spray foam insulation."
  },
  {
    question: "How can I trust the removers and installers used by Spray Foam Removal Scheme?",
    answer: "Every one of our removal and installation experts is a credible and certified professional, experienced in the removal of spray foam insulation. We meticulously evaluate all our removers and installers to guarantee they deliver top-notch services and maintain a history of fulfilling customer expectations. Our commitment extends beyond just installing your new insulation. Following the installation, a representative from our customer aftercare team will get in touch with you to confirm that the work meets your satisfaction."
  },
  {
    question: "Can Spray Foam Removal Scheme beat an existing quote?",
    answer: "Yes. We guarantee to beat any like-for-like quote, simply email us or fill in our contact form and a member of our team will be happy to assist you."
  },
  {
    question: "How much does spray foam insulation removal cost?",
    answer: "The expense of removing spray foam insulation is influenced by various elements, such as the extent of the area needing removal and the necessary thickness of the insulation. Typically, this process is costlier than the installation of spray foam insulation because of the detailed work required. However, the potential for long-term energy savings and additional financial advantages often render it a valuable investment."
  },
  {
    question: "Can I remove spray foam insulation myself?",
    answer: "Attempting to remove spray foam insulation on your own is not advisable. This task demands specific equipment and expertise, as the insulation includes hazardous chemicals. Therefore, it’s safer and more effective to entrust this job to trained professionals."
  },
  {
    question: "Does spray foam insulation contain any harmful chemicals?",
    answer: "Yes. Spray foam insulation contains isocyanates, which can pose health risks to humans. Exposure to isocyanates may result in various health issues such as asthma, sensitisation, lung damage, respiratory difficulties, breathing issues, as well as irritation of the skin and eyes."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};