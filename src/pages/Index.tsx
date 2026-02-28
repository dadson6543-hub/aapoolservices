import { Link } from "react-router-dom";
import { CheckCircle, Shield, Star, ArrowRight, Phone } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-pool.jpg";
import constructionImg from "@/assets/pool-construction.jpg";
import cleaningImg from "@/assets/pool-cleaning.jpg";
import filtrationImg from "@/assets/filtration-plant.jpg";
import renovationImg from "@/assets/pool-renovation.jpg";

const featuredServices = [
  { title: "Pool Construction", desc: "Custom-built swimming pools designed to your specifications with premium materials.", img: constructionImg, slug: "pool-construction" },
  { title: "Pool Maintenance", desc: "Regular cleaning and maintenance to keep your pool crystal clear year-round.", img: cleaningImg, slug: "pool-cleaning" },
  { title: "Filtration Systems", desc: "Advanced water filtration plant installation for pure, safe swimming water.", img: filtrationImg, slug: "filtration-plant" },
  { title: "Pool Renovation", desc: "Transform your existing pool with modern tiles, lighting, and premium finishes.", img: renovationImg, slug: "pool-renovation" },
];

const whyChooseUs = [
  { icon: Shield, title: "Licensed & Insured", desc: "Fully certified team with comprehensive insurance coverage." },
  { icon: Star, title: "Premium Quality", desc: "We use only the finest materials and latest construction techniques." },
  { icon: CheckCircle, title: "10+ Years Experience", desc: "Decade of expertise serving DHA Lahore and surrounding areas." },
  { icon: Phone, title: "24/7 Support", desc: "Emergency pool services available whenever you need us." },
];

const testimonials = [
  { name: "Ahmed Khan", location: "DHA Phase 6", text: "AA Pool Service built an incredible pool for our family. Professional from start to finish." },
  { name: "Fatima Ali", location: "DHA Phase 8", text: "Their maintenance service keeps our pool pristine. Highly recommended for any pool owner in Lahore." },
  { name: "Usman Malik", location: "DHA Phase 5", text: "The filtration system they installed works flawlessly. Excellent craftsmanship and fair pricing." },
];

const Index = () => (
  <>
    <SEOHead
      title="AA Pool Service | Professional Pool Construction & Maintenance in Lahore"
      description="Premium swimming pool construction, maintenance, filtration systems & renovation services in DHA Lahore. Call 0328-9471436 for a free consultation."
      path="/"
    />

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional swimming pool by AA Pool Service Lahore" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.75)]" />
      </div>
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4">
            Professional Swimming Pool<br />Construction & Maintenance in Lahore
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={0.15}>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Premium Pool Design, Filtration Systems & Maintenance Services
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="gradient-primary text-primary-foreground px-8 py-3.5 font-heading font-semibold text-sm tracking-wide transition-transform duration-200 hover:scale-[1.02] inline-flex items-center gap-2"
            >
              View Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 font-heading font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-primary-foreground/10"
            >
              Contact Us
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>

    {/* About Summary */}
    <section className="section-padding bg-background">
      <div className="container-max text-center">
        <ScrollAnimation>
          <h2 className="section-title">Lahore's Trusted Pool Experts</h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <p className="section-subtitle mx-auto">
            With over a decade of experience, AA Pool Service delivers world-class swimming pool solutions across DHA Lahore.
            From design and construction to maintenance and filtration, we are your one-stop pool partner.
          </p>
        </ScrollAnimation>
      </div>
    </section>

    {/* Featured Services */}
    <section className="section-padding bg-muted">
      <div className="container-max">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">End-to-end pool solutions tailored to your needs</p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((s, i) => (
            <ScrollAnimation key={s.slug} delay={i * 0.1}>
              <Link to="/services" className="block bg-card card-slight-radius overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-base text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="gradient-primary text-primary-foreground px-8 py-3 font-heading font-semibold text-sm inline-flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02]">
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-background">
      <div className="container-max">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose AA Pool Service</h2>
            <p className="section-subtitle">Trusted by hundreds of homeowners across DHA Lahore</p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <ScrollAnimation key={item.title} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-14 h-14 gradient-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-muted">
      <div className="container-max">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollAnimation key={t.name} delay={i * 0.1}>
              <div className="bg-card p-6 card-slight-radius shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                <div>
                  <span className="font-heading font-semibold text-sm text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground block">{t.location}</span>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="gradient-primary section-padding">
      <div className="container-max text-center">
        <ScrollAnimation>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Build Your Dream Pool?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-background text-foreground px-8 py-3.5 font-heading font-semibold text-sm transition-transform duration-200 hover:scale-[1.02]"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:03289471436"
              className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 font-heading font-semibold text-sm inline-flex items-center gap-2 transition-all duration-200 hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> Call 0328-9471436
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </>
);

export default Index;
