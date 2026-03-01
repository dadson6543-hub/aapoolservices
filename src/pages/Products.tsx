import { useState } from "react";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEOHead from "@/components/SEOHead";
import astralPump from "@/assets/product-astralpool-pump.jpg";
import emauxFilter from "@/assets/product-emaux-filter.jpg";
import emauxLight from "@/assets/product-emaux-light.jpg";
import minderHeatpump from "@/assets/product-minder-heatpump.jpg";
import astralCleaner from "@/assets/product-astralpool-cleaner.jpg";
import emauxChlorinator from "@/assets/product-emaux-chlorinator.jpg";
import astralWaterfall from "@/assets/product-astralpool-waterfall.jpg";
import minderController from "@/assets/product-minder-controller.jpg";
import productPump1 from "@/assets/product-pool-pump-1.jpg";
import productPump2 from "@/assets/product-pool-pump-2.jpg";
import productWaterfall from "@/assets/product-waterfall.jpg";
import productWaterfallBlade from "@/assets/product-waterfall-blade.jpg";
import productLight from "@/assets/product-pool-light.jpg";

const brandProducts = [
  {
    id: 1,
    name: "AstralPool Circulation Pump",
    brand: "AstralPool",
    image: astralPump,
    shortDesc: "High-performance pool circulation pump with energy-efficient motor and self-priming design.",
    description: "The AstralPool Circulation Pump is engineered for maximum water flow and energy efficiency. Its corrosion-resistant body and powerful motor ensure crystal-clear water circulation for residential and commercial pools. Trusted worldwide for reliability and durability.",
    features: ["Self-priming design", "Corrosion-resistant body", "Energy-efficient motor", "Built-in strainer basket", "Low noise operation", "Suitable for pools up to 100,000 liters"],
    benefits: "Reduces energy costs by up to 30% while delivering superior water circulation compared to conventional pumps.",
    usage: "Ideal for residential pools in DHA, Bahria Town, and commercial installations across Pakistan.",
    category: "Pool Pumps",
  },
  {
    id: 2,
    name: "Emaux Sand Filter System",
    brand: "Emaux",
    image: emauxFilter,
    shortDesc: "Commercial-grade sand filtration system with multi-port valve for crystal-clear water.",
    description: "The Emaux Sand Filter System delivers exceptional water clarity through multi-stage sand filtration. Featuring a durable fiberglass-reinforced tank and precision multi-port valve, this filter handles high flow rates while maintaining superior filtration quality. Perfect for residential and commercial pools.",
    features: ["Fiberglass-reinforced tank", "6-position multi-port valve", "High flow rate capacity", "Corrosion-proof construction", "Easy backwash operation", "Low maintenance design"],
    benefits: "Achieves filtration down to 20 microns, removing even the finest particles for sparkling clean pool water.",
    usage: "Used in our luxury pool projects in Gulberg, Model Town, and commercial installations in Lahore.",
    category: "Filtration",
  },
  {
    id: 3,
    name: "Emaux Underwater LED Light",
    brand: "Emaux",
    image: emauxLight,
    shortDesc: "RGB color-changing underwater LED light with stainless steel housing and IP68 rating.",
    description: "Transform your pool into a stunning nighttime oasis with Emaux Underwater LED Lights. Featuring high-brightness RGB LEDs in a marine-grade stainless steel housing, these lights provide brilliant illumination with minimal energy consumption. The IP68 rating ensures complete waterproof protection for years of trouble-free operation.",
    features: ["RGB color-changing LEDs", "Marine-grade stainless steel", "IP68 waterproof rating", "Remote control compatible", "50,000+ hour lifespan", "12V safe operation"],
    benefits: "Creates stunning visual effects for night swimming while consuming 80% less energy than traditional pool lights.",
    usage: "Featured in our premium residential projects in Cantt Area and Johar Town, Lahore.",
    category: "Pool Lighting",
  },
  {
    id: 4,
    name: "Minder Pool Heat Pump",
    brand: "Minder",
    image: minderHeatpump,
    shortDesc: "Energy-efficient inverter heat pump for year-round pool temperature control.",
    description: "The Minder Pool Heat Pump uses advanced inverter technology to maintain your ideal pool temperature throughout the year. With a high COP (Coefficient of Performance) rating, it heats your pool efficiently even in cooler weather. The whisper-quiet operation and compact design make it perfect for residential installations.",
    features: ["Inverter technology", "COP rating up to 6.0", "Titanium heat exchanger", "Smart temperature control", "Whisper-quiet operation", "All-weather capability"],
    benefits: "Heats your pool at 1/5th the cost of gas heaters, providing year-round swimming comfort with minimal energy bills.",
    usage: "Installed in heated pool projects in Bahria Town, Lake City, and DHA Phase 6, Lahore.",
    category: "Pool Heating",
  },
  {
    id: 5,
    name: "AstralPool Robotic Cleaner",
    brand: "AstralPool",
    image: astralCleaner,
    shortDesc: "Intelligent robotic pool cleaner with smart navigation and powerful suction.",
    description: "The AstralPool Robotic Cleaner takes the hassle out of pool maintenance. Equipped with smart navigation technology, it maps your pool and cleans floors, walls, and waterline with precision. The powerful suction motor captures debris of all sizes while the built-in filtration system ensures thorough cleaning.",
    features: ["Smart navigation system", "Floor, wall & waterline cleaning", "Built-in filtration", "Energy-efficient motor", "Easy-clean filter basket", "Programmable cleaning cycles"],
    benefits: "Saves hours of manual cleaning time while delivering a spotless pool every time — fully automated and hands-free.",
    usage: "Popular with our maintenance clients in DHA, Gulberg, and Bahria Town residential communities.",
    category: "Pool Cleaners",
  },
  {
    id: 6,
    name: "Emaux Salt Chlorinator",
    brand: "Emaux",
    image: emauxChlorinator,
    shortDesc: "Digital salt chlorination system for automatic, chemical-free pool sanitization.",
    description: "The Emaux Salt Chlorinator converts ordinary salt into pure chlorine, providing continuous, automatic pool sanitization without harsh chemical handling. The digital control panel allows precise chlorine output adjustment, while self-cleaning electrodes minimize maintenance.",
    features: ["Self-cleaning electrodes", "Digital LCD control", "Automatic chlorine output", "Salt level indicator", "Reverse polarity technology", "Compatible with all pool sizes"],
    benefits: "Eliminates the need for manual chlorine dosing, providing softer, gentler water that's kinder to skin and eyes.",
    usage: "Installed in family pools across Model Town, Johar Town, and Cantt area for hassle-free water treatment.",
    category: "Water Treatment",
  },
  {
    id: 7,
    name: "AstralPool Waterfall Blade",
    brand: "AstralPool",
    image: astralWaterfall,
    shortDesc: "Premium stainless steel waterfall blade for elegant water features and cascading effects.",
    description: "Add a touch of luxury to your pool with the AstralPool Waterfall Blade. Crafted from marine-grade stainless steel, this waterfall creates a beautiful, uniform sheet of water that adds both visual appeal and soothing sounds. Available in multiple widths to suit any pool design.",
    features: ["Marine-grade 316 stainless steel", "Uniform water curtain", "Multiple width options", "LED-compatible design", "Rust-proof finish", "Easy wall/edge mounting"],
    benefits: "Creates a resort-like atmosphere while the sound of flowing water provides natural relaxation and masks ambient noise.",
    usage: "Featured in luxury pool designs in DHA Phase 8, Bedian Road, and farmhouse projects.",
    category: "Water Features",
  },
  {
    id: 8,
    name: "Minder Pool Controller",
    brand: "Minder",
    image: minderController,
    shortDesc: "Smart digital pool automation controller for pumps, lights, and heating systems.",
    description: "The Minder Pool Controller puts complete pool management at your fingertips. This smart automation system controls pumps, lighting, heating, and filtration with programmable schedules and real-time monitoring. The intuitive LCD display makes setup and operation effortless.",
    features: ["Multi-device control", "Programmable schedules", "LCD display interface", "Real-time monitoring", "Timer functions", "Compatible with all pool equipment"],
    benefits: "Automates your entire pool system, saving time and energy while ensuring optimal water quality 24/7.",
    usage: "Installed as the central control hub in our premium pool projects across Lahore and Islamabad.",
    category: "Automation",
  },
];

const allProducts: Product[] = [
  ...brandProducts,
  {
    id: 101,
    name: "AA Pool Pump – Turbo Series",
    brand: "AA Pool Service",
    image: productPump1,
    shortDesc: "High-performance swimming pool circulation pump with energy-efficient motor.",
    description: "The AA Pool Pump Turbo Series is designed for maximum water flow and energy efficiency. Built with a corrosion-resistant body and a powerful motor, this pump ensures crystal-clear water circulation for residential and commercial pools.",
    features: ["Self-priming design", "Corrosion-resistant body", "Energy-efficient motor", "Built-in strainer basket", "Low noise operation", "Suitable for pools up to 80,000 liters"],
    benefits: "Reliable and affordable pool circulation trusted by hundreds of clients across Pakistan.",
    usage: "Widely used in our residential pool projects in DHA, Bahria Town, and Cantt Area.",
    category: "Pool Pumps",
  },
  {
    id: 102,
    name: "AA Pool Pump – LASWIM Pro",
    brand: "AA Pool Service",
    image: productPump2,
    shortDesc: "Professional-grade LASWIM pool pump for heavy-duty filtration and circulation.",
    description: "The AA Pool LASWIM Pro pump delivers industry-leading performance for large residential and commercial swimming pools. With a high-capacity strainer and robust motor, it handles demanding filtration requirements.",
    features: ["Heavy-duty construction", "High-capacity strainer", "2HP powerful motor", "Commercial-grade performance", "Easy maintenance access", "Compatible with all filtration systems"],
    benefits: "Built for demanding commercial applications where reliability is non-negotiable.",
    usage: "Installed in commercial pools in Gulberg, Model Town, and hotel projects across Lahore.",
    category: "Pool Pumps",
  },
  {
    id: 103,
    name: "AA Pool Waterfall – Cascade Edition",
    brand: "AA Pool Service",
    image: productWaterfall,
    shortDesc: "Elegant pool waterfall feature with adjustable flow for stunning visual effects.",
    description: "Transform your swimming pool into a luxury oasis with the AA Pool Waterfall Cascade Edition. Made from durable stainless steel with PVC connectors for easy installation.",
    features: ["Stainless steel construction", "Adjustable water flow", "Easy PVC installation", "LED-compatible design", "Rust-proof materials", "Multiple width options available"],
    benefits: "Adds resort-style luxury to any pool with minimal installation effort.",
    usage: "Featured in farmhouse and luxury residential pools across Lahore and Islamabad.",
    category: "Water Features",
  },
  {
    id: 104,
    name: "AA Pool Waterfall Blade – LED Series",
    brand: "AA Pool Service",
    image: productWaterfallBlade,
    shortDesc: "Multi-color LED waterfall blade with remote control for dramatic pool lighting.",
    description: "The AA Pool Waterfall Blade LED Series combines water flow with stunning LED illumination. Featuring RGB color-changing lights controlled via remote for dramatic visual effects.",
    features: ["RGB LED illumination", "Remote control included", "Waterproof IP68 rating", "Multiple color modes", "Complete installation kit", "Low voltage safe operation"],
    benefits: "The ultimate combination of water features and lighting for unforgettable pool aesthetics.",
    usage: "A top seller for our premium pool projects in DHA Phase 8 and Bedian Road.",
    category: "Water Features",
  },
  {
    id: 105,
    name: "AA Pool Underwater Light – Premium",
    brand: "AA Pool Service",
    image: productLight,
    shortDesc: "High-brightness underwater LED pool light with warm and cool color options.",
    description: "Illuminate your pool with the AA Pool Underwater Light Premium. Featuring high-brightness LED technology with IP68-rated housing for complete waterproof protection.",
    features: ["High-brightness LED chips", "IP68 waterproof rating", "Warm & cool color modes", "Stainless steel housing", "Long lifespan (50,000+ hours)", "Easy retrofit installation"],
    benefits: "Brilliant illumination at a fraction of the energy cost of traditional pool lights.",
    usage: "Our most popular lighting product, installed in pools across Johar Town, Lake City, and DHA.",
    category: "Pool Lighting",
  },
];

type Product = (typeof brandProducts)[0] & { benefits?: string; usage?: string };

const Products = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  const handleWhatsAppOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Hi AA Pool Service! I'm interested in your product: *${productName}*. How much is the price? Please share details.`
    );
    window.open(`https://wa.me/923289471436?text=${message}`, "_blank");
  };

  const ProductCard = ({ product, delay }: { product: Product; delay: number }) => (
    <ScrollAnimation delay={delay}>
      <div
        onClick={() => setSelected(product)}
        className="bg-card border border-border card-slight-radius overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
      >
        <div className="overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-heading font-semibold px-3 py-1">
            {product.category}
          </div>
          <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-heading font-semibold px-3 py-1">
            {product.brand}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading font-semibold text-base text-foreground mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.shortDesc}</p>
          <span className="text-secondary text-sm font-heading font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </ScrollAnimation>
  );

  return (
    <>
      <SEOHead
        title="Pool Products | AstralPool, Emaux & Minder Equipment – AA Pool Service"
        description="Premium pool equipment from AstralPool, Emaux & Minder. Pool pumps, filters, lights, heat pumps, robotic cleaners & automation. Order via WhatsApp."
        path="/products"
      />

      <section className="gradient-primary pt-32 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Products</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Premium pool equipment from world-leading brands — AstralPool, Emaux & Minder. Supplied and installed by AA Pool Service across Pakistan.
          </p>
        </div>
      </section>

      {/* Brand Logos Banner */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {["AstralPool", "Emaux", "Minder"].map((brand) => (
              <div key={brand} className="text-center">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary tracking-wide">{brand}</span>
                <span className="block text-xs text-muted-foreground mt-1">Authorized Dealer</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="section-title">Our Complete Product Range</h2>
              <p className="section-subtitle">Premium equipment from AstralPool, Emaux, Minder & AA Pool Service</p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4" onClick={() => setSelected(null)}>
          <div
            className="bg-card max-w-2xl w-full max-h-[90vh] overflow-y-auto card-slight-radius shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selected.image} alt={selected.name} className="w-full h-64 sm:h-80 object-cover" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-foreground/70 text-primary-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-primary text-primary-foreground text-xs font-heading font-semibold px-3 py-1">{selected.category}</span>
                <span className="bg-secondary text-secondary-foreground text-xs font-heading font-semibold px-3 py-1">{selected.brand}</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">{selected.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{selected.description}</p>

              <h4 className="font-heading font-semibold text-sm text-foreground mb-3">Features & Benefits</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {selected.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {selected.benefits && (
                <div className="bg-accent p-4 card-slight-radius mb-5">
                  <p className="text-sm text-accent-foreground"><strong>Why Choose This:</strong> {selected.benefits}</p>
                </div>
              )}

              {selected.usage && (
                <div className="bg-muted p-4 card-slight-radius mb-5">
                  <p className="text-sm text-muted-foreground"><strong>Project Usage:</strong> {selected.usage}</p>
                </div>
              )}

              <button
                onClick={() => handleWhatsAppOrder(selected.name)}
                className="w-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] py-3.5 font-heading font-semibold text-sm flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.01]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
