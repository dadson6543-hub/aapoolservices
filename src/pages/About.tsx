import { CheckCircle, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEOHead from "@/components/SEOHead";
import teamImg from "@/assets/team.jpg";
import heroImg from "@/assets/hero-pool.jpg";

const About = () => (
  <>
    <SEOHead
      title="About AA Pool Service | Lahore's Trusted Pool Experts"
      description="Learn about AA Pool Service — over 10 years of professional swimming pool construction, maintenance, and filtration services in DHA Lahore."
      path="/about"
    />

    <section className="gradient-primary pt-32 pb-16">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">About Us</h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">
          Dedicated to excellence in every pool we build, maintain, and service.
        </p>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left">
            <img src={heroImg} alt="AA Pool Service professional work" className="w-full h-80 lg:h-[28rem] object-cover card-slight-radius shadow-sm" />
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <h2 className="section-title">Your Premier Pool Partner in Lahore</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AA Pool Service has been at the forefront of swimming pool construction and maintenance in Lahore for over a decade. Founded with a commitment to quality and customer satisfaction, we have grown to become the most trusted name in pool services across DHA and surrounding areas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team of certified technicians brings international expertise to every project, whether it's constructing a luxury residential pool, installing a commercial filtration system, or providing routine maintenance services.
            </p>
            <div className="space-y-3">
              {["500+ pools constructed & maintained", "Certified & trained technicians", "Premium materials & latest technology", "Comprehensive warranty on all work"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-muted">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollAnimation>
            <div className="bg-card p-8 card-slight-radius shadow-sm h-full">
              <div className="w-12 h-12 gradient-primary flex items-center justify-center mb-4">
                <Target className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class swimming pool solutions that exceed client expectations through superior craftsmanship, innovative technology, and unwavering commitment to quality. We aim to make premium pool ownership accessible and hassle-free for every homeowner in Lahore.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <div className="bg-card p-8 card-slight-radius shadow-sm h-full">
              <div className="w-12 h-12 gradient-primary flex items-center justify-center mb-4">
                <Eye className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as Pakistan's leading pool service company, setting industry standards for quality, innovation, and customer care. We envision a future where every home in Lahore's premium neighborhoods enjoys a professionally maintained swimming pool.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-background">
      <div className="container-max">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="section-title">Our Professional Team</h2>
            <p className="section-subtitle">Experienced, certified, and passionate about pool excellence</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <img src={teamImg} alt="AA Pool Service professional team" className="w-full max-w-4xl mx-auto h-72 lg:h-96 object-cover card-slight-radius shadow-sm" />
        </ScrollAnimation>
        <ScrollAnimation delay={0.15}>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
            Our team consists of experienced pool engineers, certified technicians, and dedicated customer service professionals. Every team member undergoes rigorous training to ensure the highest standards of workmanship and safety.
          </p>
        </ScrollAnimation>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-primary section-padding">
      <div className="container-max text-center">
        <ScrollAnimation>
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Whether you need a new pool, renovation, or maintenance — we're here to help.
          </p>
          <Link
            to="/contact"
            className="bg-background text-foreground px-8 py-3.5 font-heading font-semibold text-sm transition-transform duration-200 hover:scale-[1.02] inline-block"
          >
            Get In Touch
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  </>
);

export default About;
