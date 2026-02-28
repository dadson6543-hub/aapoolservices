import { useState } from "react";
import { X } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEOHead from "@/components/SEOHead";
import constructionImg from "@/assets/pool-construction.jpg";
import renovationImg from "@/assets/pool-renovation.jpg";
import cleaningImg from "@/assets/pool-cleaning.jpg";
import filtrationImg from "@/assets/filtration-plant.jpg";
import equipmentImg from "@/assets/pool-equipment.jpg";
import lightingImg from "@/assets/pool-lighting.jpg";
import heroImg from "@/assets/hero-pool.jpg";
import chemicalImg from "@/assets/pool-chemical.jpg";
import leakImg from "@/assets/pool-leak.jpg";

const projects = [
  { id: 1, title: "Luxury Residential Pool – DHA Phase 6", img: heroImg, category: "Construction", location: "DHA Phase 6, Lahore", desc: "A stunning 40x20 ft residential pool with infinity edge, mosaic tile work, and integrated LED lighting system.", details: "Complete construction from excavation to finishing. Includes automated filtration, heating system, and landscape integration.", tech: ["Reinforced Concrete", "Mosaic Tiles", "LED Lighting", "Auto Filtration"] },
  { id: 2, title: "Commercial Pool Construction – DHA Phase 8", img: constructionImg, category: "Construction", location: "DHA Phase 8, Lahore", desc: "Olympic-standard commercial pool with professional lane markings, diving boards, and competition-grade filtration.", details: "Built to international standards with 6-lane configuration, anti-wave lane ropes, and touchpad timing system integration.", tech: ["Olympic Standards", "Anti-Wave System", "Commercial Filtration", "Timing Integration"] },
  { id: 3, title: "Pool Renovation – Modern Redesign", img: renovationImg, category: "Renovation", location: "DHA Phase 5, Lahore", desc: "Complete transformation of a 15-year-old pool with modern Italian tiles, underwater lighting, and resurfaced deck.", details: "Stripped old tiles, repaired structural cracks, applied waterproof membrane, installed premium Italian porcelain tiles and color-changing LEDs.", tech: ["Italian Porcelain", "Waterproof Membrane", "RGB LEDs", "Deck Resurfacing"] },
  { id: 4, title: "Filtration Plant Installation", img: filtrationImg, category: "Filtration", location: "DHA Phase 7, Lahore", desc: "Industrial-grade multi-stage filtration system for a large community pool serving 200+ households.", details: "Three-stage filtration with sand filters, UV sterilization, and automated chemical dosing for consistent water quality.", tech: ["Sand Filters", "UV Sterilization", "Auto Dosing", "Remote Monitoring"] },
  { id: 5, title: "Pool Cleaning & Restoration", img: cleaningImg, category: "Maintenance", location: "DHA Phase 8, Lahore", desc: "Deep cleaning and restoration of a neglected pool, bringing it back to pristine condition in 48 hours.", details: "Acid wash, tile scrubbing, filter replacement, chemical rebalancing, and equipment servicing for a complete restoration.", tech: ["Acid Wash", "Filter Replacement", "Chemical Balance", "Equipment Service"] },
  { id: 6, title: "Underwater Lighting System", img: lightingImg, category: "Lighting", location: "DHA Phase 6, Lahore", desc: "Custom RGB underwater LED system with remote control and programmable light shows for a luxury villa pool.", details: "12 submersible LED fixtures installed with waterproof wiring, smart controller, and integration with home automation.", tech: ["Smart LEDs", "Home Automation", "Waterproof Wiring", "App Control"] },
  { id: 7, title: "Pool Equipment Overhaul", img: equipmentImg, category: "Equipment", location: "DHA Phase 5, Lahore", desc: "Complete equipment room renovation with new energy-efficient pump, heater, and automation control panel.", details: "Replaced aging equipment with variable-speed pump, gas heater, salt chlorinator, and touchscreen control panel.", tech: ["Variable Speed Pump", "Gas Heater", "Salt Chlorinator", "Touch Control"] },
  { id: 8, title: "Water Treatment System", img: chemicalImg, category: "Treatment", location: "DHA Phase 8, Lahore", desc: "Advanced water treatment system with automated pH and chlorine monitoring for a resort-style pool.", details: "Installed real-time water quality sensors, automated chemical dispensers, and cloud-based monitoring dashboard.", tech: ["Real-Time Sensors", "Auto Dispensers", "Cloud Dashboard", "pH Monitoring"] },
  { id: 9, title: "Leak Detection & Repair", img: leakImg, category: "Maintenance", location: "DHA Phase 7, Lahore", desc: "Successfully identified and repaired multiple underground leaks using electronic detection equipment.", details: "Used pressure testing and electronic listening devices to pinpoint leaks. Performed targeted excavation and pipe replacement.", tech: ["Electronic Detection", "Pressure Testing", "Pipe Replacement", "Waterproofing"] },
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
                  className="w-full text-left bg-card card-slight-radius overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-heading font-semibold text-secondary uppercase tracking-wide">{p.category}</span>
                    <h3 className="font-heading font-semibold text-foreground mt-1 mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
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
