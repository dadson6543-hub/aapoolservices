import { CheckCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEOHead from "@/components/SEOHead";
import constructionImg from "@/assets/pool-construction.jpg";
import renovationImg from "@/assets/pool-renovation.jpg";
import cleaningImg from "@/assets/pool-cleaning.jpg";
import equipmentImg from "@/assets/pool-equipment.jpg";
import leakImg from "@/assets/pool-leak.jpg";
import lightingImg from "@/assets/pool-lighting.jpg";
import chemicalImg from "@/assets/pool-chemical.jpg";

const services = [
  {
    title: "Swimming Pool Construction",
    desc: "We design and build custom swimming pools that transform your outdoor space into a luxurious retreat. Our construction process uses reinforced concrete, premium tiles, and state-of-the-art techniques to ensure durability and aesthetics.",
    img: constructionImg,
    features: ["Custom design & engineering", "Reinforced concrete structure", "Premium tile finishing", "Integrated plumbing systems"],
    benefits: "A professionally constructed pool adds significant value to your property while providing years of enjoyment for your family.",
  },
  {
    title: "Pool Renovation & Remodeling",
    desc: "Breathe new life into your aging pool with our comprehensive renovation services. We upgrade tiles, coping, decking, and equipment to give your pool a modern, stunning appearance.",
    img: renovationImg,
    features: ["Complete tile replacement", "Modern coping & decking", "LED lighting upgrades", "Structural repairs"],
    benefits: "Renovation is a cost-effective way to modernize your pool without the expense of new construction.",
  },
  {
    title: "Pool Cleaning & Maintenance",
    desc: "Our scheduled maintenance programs keep your pool sparkling clean, chemically balanced, and safe for swimming. We handle vacuuming, skimming, filter cleaning, and chemical treatment.",
    img: cleaningImg,
    features: ["Weekly/monthly cleaning plans", "Chemical balancing", "Filter maintenance", "Equipment inspection"],
    benefits: "Regular maintenance extends the life of your pool and equipment while ensuring a healthy swimming environment.",
  },
  {
    title: "Pool Equipment Installation",
    desc: "From pumps and heaters to automated chlorinators and control systems, we supply and install all pool equipment from trusted international brands.",
    img: equipmentImg,
    features: ["Pump installation", "Heater systems", "Automated chlorinators", "Control panels"],
    benefits: "Professional installation ensures optimal equipment performance and longevity.",
  },
  {
    title: "Pool Leak Detection",
    desc: "Using advanced electronic leak detection technology, we locate and repair leaks with minimal disruption to your pool and surrounding landscape.",
    img: leakImg,
    features: ["Electronic detection", "Non-invasive methods", "Structural repair", "Pressure testing"],
    benefits: "Early leak detection prevents costly water loss and structural damage to your pool.",
  },
  {
    title: "Underwater Lighting Installation",
    desc: "Transform your pool's ambiance with professionally installed LED underwater lighting. Choose from a spectrum of colors to create the perfect atmosphere.",
    img: lightingImg,
    features: ["LED color systems", "Fiber optic options", "Energy-efficient", "Remote-controlled"],
    benefits: "Underwater lighting enhances safety for night swimming and adds dramatic visual appeal.",
  },
  {
    title: "Pool Chemical Balancing & Water Treatment",
    desc: "Our water treatment experts maintain the perfect chemical balance in your pool, ensuring safe pH levels, proper sanitization, and crystal-clear water quality.",
    img: chemicalImg,
    features: ["pH balancing", "Chlorine management", "Algae prevention", "Water testing"],
    benefits: "Proper chemical balance protects swimmers' health and preserves your pool's surfaces and equipment.",
  },
];

const Services = () => (
  <>
    <SEOHead
      title="Pool Services in Lahore | Construction, Maintenance & Filtration - AA Pool Service"
      description="Premium swimming pool services including construction, renovation, cleaning, filtration plant installation, leak detection, and more in DHA Lahore."
      path="/services"
    />

    {/* Header */}
    <section className="gradient-primary pt-32 pb-16">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">
          Comprehensive swimming pool solutions from construction to maintenance. Every service delivered with precision and professionalism.
        </p>
      </div>
    </section>

    {/* Services List */}
    <section className="section-padding bg-background">
      <div className="container-max space-y-20">
        {services.map((service, i) => (
          <ScrollAnimation key={service.title}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-72 lg:h-96 object-cover card-slight-radius shadow-sm"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-accent p-4 card-slight-radius">
                  <p className="text-sm text-accent-foreground"><strong>Benefits:</strong> {service.benefits}</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  </>
);

export default Services;
