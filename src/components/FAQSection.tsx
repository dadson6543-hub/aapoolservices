import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does it cost to build a swimming pool in Lahore?",
    a: "Swimming pool construction costs in Lahore vary based on size, design, and features. A standard residential pool (20x40 ft) typically ranges from PKR 1.5M to 5M. Luxury pools with infinity edges, lighting, and automation can go higher. Contact AA Pool Service at 0328-9471436 for a free detailed quote.",
  },
  {
    q: "How long does pool construction take?",
    a: "A typical residential pool takes 6-12 weeks from excavation to completion, depending on size, complexity, and weather conditions. Commercial pools may take 3-6 months. AA Pool Service provides a detailed timeline during the consultation phase.",
  },
  {
    q: "How often should I clean my swimming pool?",
    a: "We recommend skimming and checking chemical levels 2-3 times per week, with a thorough professional cleaning every 1-2 weeks. In Lahore's hot summers, more frequent maintenance may be needed to keep water crystal clear and safe.",
  },
  {
    q: "What type of filtration system is best for pools in Lahore?",
    a: "For Lahore's water conditions, we recommend sand filters for most residential pools due to their durability and low maintenance. For premium installations, multi-stage systems with UV sterilization provide the best water quality. Our team assesses your specific needs during consultation.",
  },
  {
    q: "Do you provide pool maintenance contracts?",
    a: "Yes! AA Pool Service offers weekly and monthly maintenance packages that include chemical balancing, equipment inspection, cleaning, and water testing. Our contracts are tailored to your pool size and usage patterns for hassle-free pool ownership.",
  },
  {
    q: "Can you renovate an old or damaged pool?",
    a: "Absolutely. We specialize in pool renovation including re-tiling, resurfacing, plumbing upgrades, modern lighting installation, and equipment replacement. We've restored many pools across DHA Lahore to better-than-new condition.",
  },
  {
    q: "Is pool water safe for children?",
    a: "When properly maintained with balanced chemicals and clean filtration, pool water is completely safe for children. We ensure proper pH (7.2-7.6), chlorine levels (1-3 ppm), and can install additional safety features like shallow zones, non-slip surfaces, and pool fencing.",
  },
  {
    q: "Do you serve areas outside DHA Lahore?",
    a: "While our primary service area is DHA Phase 5, 6, 7, and 8, we also serve Bahria Town, Gulberg, Model Town, and other areas across Lahore. Contact us to discuss your location and project requirements.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <ScrollAnimation>
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about our pool services</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card card-slight-radius border border-border px-5">
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left text-sm sm:text-base py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollAnimation>
    </div>
  </section>
);

export default FAQSection;
