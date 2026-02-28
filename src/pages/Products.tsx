import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEOHead from "@/components/SEOHead";
import productPump1 from "@/assets/product-pool-pump-1.jpg";
import productPump2 from "@/assets/product-pool-pump-2.jpg";
import productWaterfall from "@/assets/product-waterfall.jpg";
import productWaterfallBlade from "@/assets/product-waterfall-blade.jpg";
import productLight from "@/assets/product-pool-light.jpg";

const products = [
  {
    id: 1,
    name: "AA Pool Pump – Turbo Series",
    image: productPump1,
    shortDesc: "High-performance swimming pool circulation pump with energy-efficient motor.",
    description: "The AA Pool Pump Turbo Series is designed for maximum water flow and energy efficiency. Built with a corrosion-resistant body and a powerful motor, this pump ensures crystal-clear water circulation for residential and commercial pools. Features include a built-in strainer basket, self-priming capability, and whisper-quiet operation.",
    features: ["Self-priming design", "Corrosion-resistant body", "Energy-efficient motor", "Built-in strainer basket", "Low noise operation", "Suitable for pools up to 80,000 liters"],
    category: "Pool Pumps",
  },
  {
    id: 2,
    name: "AA Pool Pump – LASWIM Pro",
    image: productPump2,
    shortDesc: "Professional-grade LASWIM pool pump for heavy-duty filtration and circulation.",
    description: "The AA Pool LASWIM Pro pump delivers industry-leading performance for large residential and commercial swimming pools. With a high-capacity strainer and robust motor, it handles demanding filtration requirements while maintaining low energy consumption. Ideal for pools with advanced filtration systems.",
    features: ["Heavy-duty construction", "High-capacity strainer", "2HP powerful motor", "Commercial-grade performance", "Easy maintenance access", "Compatible with all filtration systems"],
    category: "Pool Pumps",
  },
  {
    id: 3,
    name: "AA Pool Waterfall – Cascade Edition",
    image: productWaterfall,
    shortDesc: "Elegant pool waterfall feature with adjustable flow for stunning visual effects.",
    description: "Transform your swimming pool into a luxury oasis with the AA Pool Waterfall Cascade Edition. This premium waterfall attachment creates a beautiful sheet of water that adds both visual appeal and soothing sounds to your pool area. Made from durable stainless steel with PVC connectors for easy installation.",
    features: ["Stainless steel construction", "Adjustable water flow", "Easy PVC installation", "LED-compatible design", "Rust-proof materials", "Multiple width options available"],
    category: "Water Features",
  },
  {
    id: 4,
    name: "AA Pool Waterfall Blade – LED Series",
    image: productWaterfallBlade,
    shortDesc: "Multi-color LED waterfall blade with remote control for dramatic pool lighting.",
    description: "The AA Pool Waterfall Blade LED Series combines water flow with stunning LED illumination. Featuring RGB color-changing lights controlled via remote, this waterfall blade creates dramatic visual effects perfect for evening pool parties and relaxation. Comes with complete wiring and installation kit.",
    features: ["RGB LED illumination", "Remote control included", "Waterproof IP68 rating", "Multiple color modes", "Complete installation kit", "Low voltage safe operation"],
    category: "Water Features",
  },
  {
    id: 5,
    name: "AA Pool Underwater Light – Premium",
    image: productLight,
    shortDesc: "High-brightness underwater LED pool light with warm and cool color options.",
    description: "Illuminate your pool with the AA Pool Underwater Light Premium. Featuring high-brightness LED technology, this underwater light provides brilliant illumination with minimal energy consumption. The IP68-rated housing ensures complete waterproof protection, while the warm-cool dual-tone creates the perfect ambiance for night swimming.",
    features: ["High-brightness LED chips", "IP68 waterproof rating", "Warm & cool color modes", "Stainless steel housing", "Long lifespan (50,000+ hours)", "Easy retrofit installation"],
    category: "Pool Lighting",
  },
];

const Products = () => {
  const [selected, setSelected] = useState<typeof products[0] | null>(null);

  const handleWhatsAppOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Hi AA Pool Service! I'm interested in your product: *${productName}*. How much is the price? Please share details.`
    );
    window.open(`https://wa.me/923289471436?text=${message}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Pool Products | AA Pool Service – Pumps, Lights & Water Features"
        description="Shop premium pool pumps, underwater lights, and waterfall features from AA Pool Service. Quality pool equipment with delivery across Pakistan."
        path="/products"
      />

      <section className="gradient-primary pt-32 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Products</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Premium pool equipment by AA Pool Service – pumps, water features, and lighting solutions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <ScrollAnimation key={product.id} delay={i * 0.1}>
                <div
                  onClick={() => setSelected(product)}
                  className="bg-card card-slight-radius overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
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
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-heading font-semibold px-3 py-1">
                {selected.category}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">{selected.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{selected.description}</p>

              <h4 className="font-heading font-semibold text-sm text-foreground mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {selected.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

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
