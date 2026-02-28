import { useState } from "react";
import { X, MapPin } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEOHead from "@/components/SEOHead";
import luxuryPoolImg from "@/assets/project-luxury-pool.jpg";
import homePoolImg from "@/assets/project-home-pool.jpg";
import spaImg from "@/assets/project-spa.jpg";
import farmhouseImg from "@/assets/project-farmhouse.jpg";
import modernPoolImg from "@/assets/project-modern-pool.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import residentialImg from "@/assets/project-residential.jpg";

const projects = [
  { id: 1, title: "A-Frame Luxury Pool Villa", img: luxuryPoolImg, category: "Construction", location: "DHA Phase 6, Lahore", desc: "Stunning A-frame villa pool with turquoise mosaic tiles, infinity edge, and integrated landscape design.", details: "Complete custom pool construction featuring premium mosaic tilework, glass panel fencing, integrated deck lighting, and automated filtration system. Built with reinforced concrete shell and waterproof membrane.", tech: ["Mosaic Tiles", "Infinity Edge", "LED Lighting", "Auto Filtration"] },
  { id: 2, title: "Estate Mansion Pool & Deck", img: homePoolImg, category: "Construction", location: "DHA Phase 8, Lahore", desc: "Grand residential pool with diving board, fire pit lounge area, and full outdoor entertainment deck.", details: "Olympic-inspired rectangular pool with professional diving board, surrounding stone deck, integrated fire pit, and smart pool automation. Premium finishes throughout.", tech: ["Stone Deck", "Diving Board", "Fire Pit", "Smart Automation"] },
  { id: 3, title: "Hydropool Spa & Swim Spa", img: spaImg, category: "Spa Installation", location: "DHA Phase 5, Lahore", desc: "Premium hydropool swim spa installation with custom wooden deck surround and jet massage system.", details: "Installed a top-of-the-line swim spa with adjustable current for exercise swimming, hydrotherapy jets, built-in LED mood lighting, and custom cedar deck with integrated steps.", tech: ["Hydrotherapy Jets", "Swim Current", "Cedar Deck", "LED Mood Lights"] },
  { id: 4, title: "Farmhouse Classic Pool", img: farmhouseImg, category: "Construction", location: "DHA Phase 7, Lahore", desc: "Elegant farmhouse-style pool with clean lines, covered patio integration, and lush landscape setting.", details: "Designed and built a classic rectangular pool perfectly integrated with the farmhouse architecture. Features include automated water leveling, energy-efficient pump, and professional landscape integration.", tech: ["Auto Water Level", "Energy-Efficient Pump", "Landscape Design", "Patio Integration"] },
  { id: 5, title: "Modern A-Frame Resort Pool", img: modernPoolImg, category: "Construction", location: "DHA Phase 6, Lahore", desc: "Contemporary resort-style pool with geometric tile pattern, glass architecture integration, and zen garden.", details: "A bold modern design featuring custom blue-green geometric tiles, seamless indoor-outdoor connection through glass walls, decorative planters, and multi-zone lighting system.", tech: ["Geometric Tiles", "Glass Integration", "Zen Garden", "Multi-Zone Lighting"] },
  { id: 6, title: "Competition Swimming Pool", img: commercialImg, category: "Commercial", location: "DHA Phase 8, Lahore", desc: "Professional-grade competition pool with lane markings, underwater visibility, and Olympic-standard filtration.", details: "Built to international competition standards with 6-lane configuration, anti-wave lane ropes, underwater cameras, touchpad timing integration, and commercial-grade multi-stage filtration.", tech: ["Olympic Standards", "Anti-Wave System", "Underwater Cameras", "Commercial Filtration"] },
  { id: 7, title: "Night-Lit Resort Pool", img: residentialImg, category: "Lighting & Renovation", location: "DHA Phase 5, Lahore", desc: "Breathtaking resort-style pool with ambient night lighting, poolside lanterns, and tropical landscaping.", details: "Complete pool renovation with premium underwater LED system, pathway lanterns, mature tropical planting, infinity edge upgrade, and automated chemical management for crystal-clear water.", tech: ["Ambient LEDs", "Tropical Landscaping", "Infinity Edge", "Auto Chemical Management"] },
];

const Projects = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <SEOHead
        title="Our Projects | Pool Construction & Renovation Portfolio - AA Pool Service Lahore"
        description="Explore our portfolio of swimming pool construction, renovation, and filtration projects across DHA Lahore. See our quality craftsmanship."
        path="/projects"
      />

      <section className="gradient-primary pt-32 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Projects</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Browse our completed projects showcasing premium pool construction, renovation, and maintenance work across Lahore.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollAnimation key={p.id} delay={i * 0.05}>
                <button
                  onClick={() => setSelected(p)}
                  className="w-full text-left bg-card card-slight-radius overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group relative"
                >
                  <div className="overflow-hidden relative">
                    <img src={p.img} alt={p.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                    {/* Hover overlay with details */}
                    <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-5 text-center">
                      <span className="text-xs font-heading font-semibold text-secondary uppercase tracking-wide mb-2">{p.category}</span>
                      <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2">{p.title}</h3>
                      <p className="text-sm text-primary-foreground/80 line-clamp-3 mb-3">{p.desc}</p>
                      <div className="flex items-center gap-1 text-xs text-primary-foreground/70">
                        <MapPin className="h-3 w-3" />
                        {p.location}
                      </div>
                      <span className="mt-3 text-secondary text-sm font-heading font-semibold">Click for Details →</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-heading font-semibold text-secondary uppercase tracking-wide">{p.category}</span>
                    <h3 className="font-heading font-semibold text-foreground mt-1 mb-1">{p.title}</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{p.location}</p>
                  </div>
                </button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60" onClick={() => setSelected(null)}>
          <div
            className="bg-card max-w-3xl w-full max-h-[90vh] overflow-y-auto card-slight-radius shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selected.img} alt={selected.title} className="w-full h-64 sm:h-80 object-cover" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-foreground/50 text-primary-foreground p-1.5 hover:bg-foreground/70 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <span className="text-xs font-heading font-semibold text-secondary uppercase tracking-wide">{selected.category}</span>
              <h2 className="text-2xl font-heading font-bold text-foreground mt-1 mb-2">{selected.title}</h2>
              <p className="text-sm text-muted-foreground mb-1">📍 {selected.location}</p>
              <p className="text-muted-foreground mt-4 leading-relaxed">{selected.desc}</p>
              <h3 className="font-heading font-semibold text-foreground mt-6 mb-2">Work Details</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{selected.details}</p>
              <h3 className="font-heading font-semibold text-foreground mt-6 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span key={t} className="bg-accent text-accent-foreground text-xs px-3 py-1.5 font-heading font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
