import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/project-residential.jpg";
import cleaningImg from "@/assets/project-home-pool.jpg";
import filtrationImg from "@/assets/project-commercial.jpg";
import renovationImg from "@/assets/project-luxury-pool.jpg";
import constructionImg from "@/assets/project-farmhouse.jpg";
import lightingImg from "@/assets/project-modern-pool.jpg";
import chemicalImg from "@/assets/project-spa.jpg";
import equipmentImg from "@/assets/pool-equipment.jpg";
import leakImg from "@/assets/pool-leak.jpg";

const blogPosts = [
  {
    slug: "benefits-swimming-pool-at-home",
    title: "Benefits of Having a Swimming Pool at Home",
    excerpt: "Discover the numerous advantages of installing a swimming pool at your home, from health benefits to property value.",
    img: heroImg,
    date: "February 20, 2026",
    content: `Having a swimming pool at home is more than just a luxury — it's an investment in your family's health, happiness, and property value. In cities like Lahore, where summer temperatures regularly exceed 40°C, a home pool offers an invaluable escape from the heat.

## Health & Fitness Benefits

Swimming is one of the most complete forms of exercise available. It works every major muscle group while being gentle on joints, making it ideal for all ages. Regular swimming improves cardiovascular health, builds muscle strength, and enhances flexibility. For families in DHA Lahore, having a pool means convenient access to daily exercise without gym memberships or travel time.

## Property Value Enhancement

A well-maintained swimming pool can increase your property's value by 10-15%. In premium neighborhoods like DHA Phase 5, 6, 7, and 8, a pool is often an expected amenity that sets your property apart from comparable homes on the market.

## Family Bonding & Entertainment

A home pool becomes the center of family gatherings, birthday parties, and weekend relaxation. Children develop water confidence and swimming skills in a safe, supervised environment. The pool area naturally becomes the heart of your outdoor living space.

## Stress Relief & Mental Wellness

Water has a natural calming effect on the mind. After a long workday, a swim in your private pool provides immediate stress relief. The combination of physical exercise and the soothing properties of water promotes better sleep and overall mental wellbeing.

## Year-Round Enjoyment

With pool heating systems available from AA Pool Service, your investment works year-round. Even during Lahore's mild winters, a heated pool provides comfortable swimming temperatures. This extends the usability of your pool from a seasonal amenity to a year-round facility.

## Low-Maintenance Modern Pools

Today's swimming pools are designed for minimal maintenance. Automated filtration systems, robotic cleaners, and smart chemical management mean you spend less time maintaining and more time enjoying. AA Pool Service offers comprehensive maintenance packages that handle everything for you.

## Investment That Pays Back

While the initial investment may seem significant, the long-term benefits far outweigh the costs. Reduced gym memberships, entertainment expenses, and the added property value make a home pool one of the smartest investments for homeowners in Lahore's premium neighborhoods.

Contact AA Pool Service at 0328-9471436 to discuss your dream pool project today.`,
  },
  {
    slug: "importance-regular-pool-maintenance",
    title: "Importance of Regular Pool Maintenance",
    excerpt: "Learn why consistent pool maintenance is crucial for water quality, equipment longevity, and swimmer safety.",
    img: cleaningImg,
    date: "February 15, 2026",
    content: `Regular pool maintenance is not optional — it's essential for protecting your investment, ensuring water safety, and extending the life of your pool equipment. Many pool owners in Lahore underestimate the importance of consistent care, leading to costly repairs and health hazards.

## Water Quality & Safety

The most critical reason for regular maintenance is water safety. Without proper chemical balancing, pools become breeding grounds for bacteria, algae, and other harmful microorganisms. In Lahore's hot climate, algae growth can occur rapidly, turning crystal-clear water green within days of neglect.

## Chemical Balance Explained

Maintaining proper pH levels (7.2-7.6), chlorine concentration (1-3 ppm), and alkalinity (80-120 ppm) is essential. These parameters work together to keep water safe and comfortable for swimmers while protecting pool surfaces and equipment from corrosion or scaling.

## Equipment Longevity

Pool pumps, filters, heaters, and chlorinators represent a significant investment. Regular maintenance — including cleaning filter cartridges, checking pump seals, lubricating O-rings, and inspecting electrical connections — extends equipment life by years and prevents expensive emergency replacements.

## Surface Protection

Pool surfaces are constantly exposed to chemicals and water pressure. Without proper maintenance, tile grout deteriorates, plaster surfaces develop stains, and vinyl liners become brittle. Regular brushing, appropriate chemical levels, and timely repairs prevent surface degradation.

## Cost Prevention

Preventive maintenance costs a fraction of emergency repairs. A small algae problem caught early requires simple chemical treatment. Left unchecked, it can require draining, acid washing, and extensive chemical treatment — costing ten times more.

## Health Protection

Poorly maintained pools can cause ear infections, skin irritation, eye problems, and gastrointestinal illness. Regular testing and treatment protect your family and guests from these preventable health issues.

## Professional Maintenance Programs

AA Pool Service offers weekly and monthly maintenance programs tailored to your pool's size and usage patterns. Our trained technicians handle all aspects of pool care, from chemical testing to equipment inspection, giving you peace of mind and a consistently beautiful pool.

## Seasonal Maintenance in Lahore

Lahore's climate demands season-specific pool care. Summer requires more frequent chemical adjustments and cleaning due to increased usage and temperatures. Winter preparation includes equipment winterization and reduced chemical treatment. Our team adjusts your maintenance schedule throughout the year.

Schedule your pool maintenance with AA Pool Service by calling 0328-9471436.`,
  },
  {
    slug: "how-pool-filtration-systems-work",
    title: "How Pool Filtration Systems Work",
    excerpt: "A comprehensive guide to understanding pool filtration technology and choosing the right system for your pool.",
    img: filtrationImg,
    date: "February 10, 2026",
    content: `Understanding how pool filtration systems work helps you make informed decisions about your pool's water treatment. A quality filtration system is the backbone of clean, safe pool water, and choosing the right one depends on your pool size, usage, and budget.

## The Basics of Pool Filtration

Pool filtration works on a simple principle: water is drawn from the pool through a skimmer and main drain, passed through a filter medium that traps contaminants, and returned clean to the pool. This circulation cycle runs continuously, typically filtering the entire pool volume every 6-8 hours.

## Types of Pool Filters

### Sand Filters
Sand filters use specially graded silica sand as the filtering medium. Water passes through the sand bed, which traps particles as small as 20-40 microns. Sand filters are popular in Lahore due to their durability, low maintenance, and effectiveness in our local water conditions.

### Cartridge Filters
Cartridge filters use pleated polyester fabric to capture particles as small as 10-15 microns. They require no backwashing, saving water — an important consideration in Lahore. Cartridges need periodic cleaning and replacement every 1-2 years.

### DE (Diatomaceous Earth) Filters
DE filters provide the finest filtration, capturing particles as small as 2-5 microns. They use fossilized diatom shells as the filtering medium, providing near-perfect water clarity. These are ideal for pools where water clarity is the top priority.

## The Pump: Heart of the System

The pool pump creates the suction that drives the entire filtration system. Modern variable-speed pumps adjust their speed based on demand, significantly reducing energy consumption. AA Pool Service installs energy-efficient pumps that can reduce electricity costs by up to 70% compared to traditional single-speed models.

## Multi-Stage Filtration

For the best water quality, we recommend multi-stage filtration systems that combine mechanical filtration with UV sterilization or ozone treatment. These systems dramatically reduce chemical requirements while providing superior water quality.

## Choosing the Right System

The right filtration system depends on pool volume, usage intensity, local water quality, and budget. For residential pools in DHA Lahore, we typically recommend sand or cartridge filters paired with a variable-speed pump. Commercial pools benefit from DE filters with UV secondary treatment.

## Installation Expertise

Proper installation is as important as the equipment itself. Incorrect pipe sizing, poor equipment placement, and inadequate electrical connections can undermine even the best filtration system. AA Pool Service's certified technicians ensure every installation meets international standards.

Contact AA Pool Service at 0328-9471436 for expert filtration system consultation and installation.`,
  },
  {
    slug: "best-pool-cleaning-techniques",
    title: "Best Pool Cleaning Techniques",
    excerpt: "Master professional pool cleaning methods to maintain crystal-clear water in your swimming pool.",
    img: cleaningImg,
    date: "February 5, 2026",
    content: `Maintaining a clean swimming pool requires the right techniques, tools, and schedule. Whether you're handling routine upkeep or tackling a neglected pool, these professional cleaning methods will help you achieve and maintain crystal-clear water.

## Daily Maintenance Tasks

### Surface Skimming
Remove floating debris daily using a leaf skimmer. In Lahore, where trees and dust are common, daily skimming prevents organic matter from sinking to the bottom and decomposing. This simple task takes only 5-10 minutes and significantly reduces filter load.

### Pump Basket Cleaning
Check and empty the pump strainer basket daily during heavy use periods. A clogged basket restricts water flow, reducing filtration efficiency and potentially damaging the pump.

## Weekly Cleaning Routine

### Brushing
Brush pool walls and floor weekly to prevent algae attachment and calcium buildup. Use a nylon brush for vinyl and fiberglass pools, and a stainless steel brush for concrete and plaster surfaces. Pay special attention to corners, steps, and the waterline.

### Vacuuming
Vacuum the pool floor weekly to remove settled debris. Manual vacuuming provides the most thorough cleaning, while automatic cleaners offer convenience for regular maintenance. Robotic cleaners are the most efficient option, handling both floor and wall cleaning independently.

### Water Testing
Test chemical levels at least twice weekly. Use a reliable test kit to measure pH, chlorine, alkalinity, and calcium hardness. Adjust chemicals based on test results to maintain optimal water balance.

## Monthly Deep Cleaning

### Filter Cleaning
Clean or backwash your filter monthly, or when pressure rises 8-10 PSI above normal. For sand filters, run the backwash cycle for 2-3 minutes. Cartridge filters should be removed and hosed clean.

### Tile Line Cleaning
Scrub the tile line monthly to remove calcium deposits and body oil buildup. Use a calcium-specific cleaner and a soft brush to avoid damaging grout.

## Seasonal Deep Clean

### Spring Opening
After winter, pools need thorough cleaning including shock treatment, filter replacement, and equipment inspection. This is the ideal time for professional service.

### Pre-Monsoon Preparation
Before Lahore's monsoon season, balance chemicals at higher levels and ensure drainage systems are functioning properly to handle rainwater dilution.

## Professional vs. DIY Cleaning

While basic maintenance can be done by homeowners, professional cleaning services offer deep cleaning, equipment inspection, and chemical optimization that maintain long-term water quality. AA Pool Service's technicians use commercial-grade equipment and professional techniques for superior results.

Book your professional pool cleaning with AA Pool Service: 0328-9471436.`,
  },
  {
    slug: "health-benefits-of-swimming",
    title: "Health Benefits of Swimming",
    excerpt: "Explore the remarkable physical and mental health benefits that regular swimming provides for all ages.",
    img: heroImg,
    date: "January 30, 2026",
    content: `Swimming is widely regarded as one of the most beneficial forms of exercise, offering a unique combination of cardiovascular fitness, strength training, and mental wellness. For pool owners in Lahore, understanding these benefits reinforces the value of their investment.

## Cardiovascular Fitness

Swimming is an exceptional cardiovascular workout. Regular swimming strengthens the heart, improves blood circulation, and reduces blood pressure. Studies show that swimmers have roughly half the mortality risk compared to inactive individuals. Just 30 minutes of swimming three times a week significantly improves heart health.

## Full-Body Muscle Training

Unlike many exercises that target specific muscle groups, swimming engages virtually every muscle in the body simultaneously. Different strokes emphasize different muscles — freestyle builds shoulder and arm strength, breaststroke works the chest and inner thighs, and backstroke strengthens the back and core.

## Joint-Friendly Exercise

Water provides natural buoyancy that supports 90% of body weight, dramatically reducing stress on joints, bones, and connective tissues. This makes swimming ideal for people with arthritis, back pain, or those recovering from injuries. In Lahore's aging population, this benefit is particularly valuable.

## Weight Management

Swimming burns significant calories — approximately 400-700 calories per hour depending on intensity and stroke. The resistance provided by water makes every movement more challenging than the same movement on land, increasing calorie expenditure without impact stress.

## Mental Health Benefits

The rhythmic nature of swimming, combined with the sensory experience of water, provides powerful stress relief. Regular swimmers report lower levels of anxiety and depression. The meditative quality of lap swimming promotes mindfulness and mental clarity.

## Respiratory Improvement

Swimming improves lung capacity and breathing efficiency. The controlled breathing patterns required during swimming strengthen respiratory muscles and increase oxygen efficiency. This is particularly beneficial in Lahore, where air quality concerns make outdoor exercise challenging during certain seasons.

## Benefits for Children

Children who swim regularly develop better coordination, balance, and motor skills. Swimming also builds water safety skills that can be life-saving. The social aspect of pool activities supports emotional development and confidence building.

## Swimming for Seniors

For older adults, swimming maintains mobility, reduces fall risk, and provides social interaction. Water exercise classes are gentle enough for those with limited mobility while still providing meaningful fitness benefits.

## Getting Started

Having a pool at home removes all barriers to regular swimming. No commute, no membership fees, and the ability to swim on your schedule make home pools the most convenient option. AA Pool Service designs pools with fitness swimming in mind, including proper lane dimensions and depths.

Ready for your fitness pool? Call AA Pool Service at 0328-9471436.`,
  },
  {
    slug: "signs-pool-needs-renovation",
    title: "Signs Your Pool Needs Renovation",
    excerpt: "Recognize the warning signs that indicate your swimming pool needs professional renovation and upgrading.",
    img: renovationImg,
    date: "January 25, 2026",
    content: `Every swimming pool has a lifespan for its various components. Recognizing the signs that your pool needs renovation can save you from costly emergency repairs and ensure your pool remains safe, functional, and beautiful. Here are the key indicators that it's time to renovate.

## Cracking and Structural Issues

Visible cracks in the pool shell are the most urgent sign of needed renovation. Small surface cracks may be cosmetic, but structural cracks that allow water to seep through require immediate professional attention. In Lahore's climate, temperature fluctuations can accelerate crack formation in concrete pools.

## Fading and Stained Surfaces

Over time, pool surfaces lose their original color and develop stubborn stains from minerals, chemicals, and organic matter. If your pool's interior looks dull, discolored, or stained despite regular cleaning, it's time for resurfacing. Modern pool finishes offer superior durability and aesthetics compared to materials from even a decade ago.

## Outdated Equipment

Pool technology has advanced significantly in recent years. If your pool still uses a single-speed pump, manual chemical testing, or basic filtration, upgrading to variable-speed pumps, automated chemical management, and multi-stage filtration can reduce operating costs by 50-70%.

## Increasing Chemical Costs

If you find yourself using more chemicals to maintain water clarity, or if the water remains cloudy despite proper treatment, your pool surfaces or filtration system may need renovation. Rough, deteriorated surfaces harbor algae and bacteria, requiring excessive chemical treatment.

## Tile and Grout Damage

Cracked, loose, or missing tiles are both an aesthetic and safety concern. Deteriorated grout allows water to penetrate behind tiles, potentially causing structural damage. If more than 10-15% of tiles show damage, full replacement is usually more cost-effective than spot repairs.

## Deck Deterioration

The pool deck is subject to constant wet-dry cycling, UV exposure, and foot traffic. Cracking, settling, or surface degradation of the deck area indicates renovation needs. Modern deck materials offer better slip resistance, durability, and aesthetic options.

## Plumbing Problems

Recurring leaks, reduced water flow, or frequent plumbing repairs indicate aging infrastructure that may need complete replacement. Modern PVC plumbing is more durable and efficient than older galvanized or copper systems.

## Safety Upgrades

If your pool lacks modern safety features like compliant drain covers, safety rails, proper depth markings, or adequate lighting, renovation provides an opportunity to bring your pool up to current safety standards.

## The Renovation Process

AA Pool Service handles complete pool renovations, from design consultation through construction and commissioning. Our team assesses your pool's condition, recommends appropriate upgrades, and executes the renovation with minimal disruption to your property.

Schedule your pool renovation consultation: 0328-9471436.`,
  },
  {
    slug: "choosing-right-pool-design",
    title: "Choosing the Right Pool Design",
    excerpt: "A guide to selecting the perfect pool design that matches your lifestyle, property, and budget.",
    img: constructionImg,
    date: "January 20, 2026",
    content: `Choosing the right pool design is one of the most important decisions you'll make as a homeowner. The perfect pool complements your property's architecture, suits your lifestyle, and fits your budget. Here's a comprehensive guide to help you make the right choice.

## Assessing Your Space

Before selecting a design, carefully evaluate your available outdoor space. Consider lot dimensions, existing landscaping, utility locations, and local building codes. In DHA Lahore, plots typically range from 10 to 20 marla, each offering different possibilities for pool placement and size.

## Pool Shapes

### Rectangular Pools
The classic rectangular pool is ideal for swimming laps, playing water sports, and creating a clean, modern aesthetic. This design maximizes swimming area and works well with contemporary architecture common in DHA Lahore.

### L-Shaped Pools
L-shaped pools create distinct zones for swimming and lounging. The shorter arm often serves as a shallow play area or entry zone, while the longer section provides swimming depth. This design suits properties where you want multiple pool functions.

### Freeform Pools
Freeform designs mimic natural shapes, creating a resort-like atmosphere. These pools blend beautifully with landscaping and work particularly well in gardens with organic design elements.

### Geometric Custom Shapes
For unique properties, custom geometric shapes can maximize space utilization while creating a distinctive architectural statement. AA Pool Service designs custom shapes using 3D modeling software to visualize the final result.

## Pool Depths

Pool depth should match intended use. Residential pools typically range from 3.5 to 6 feet. Diving requires minimum 8-foot depth. Consider a gradual depth change for family-friendly designs that accommodate both children and adults.

## Materials and Finishes

### Concrete/Gunite
The most versatile option, allowing any shape or size. Concrete pools accept a variety of finishes including plaster, pebble aggregate, and glass tile. This is the most popular choice in Lahore's premium neighborhoods.

### Fiberglass
Pre-formed fiberglass shells offer faster installation and smooth, non-porous surfaces. Limited to predetermined shapes and sizes but require less maintenance than concrete.

## Pool Features

### Water Features
Waterfalls, fountains, and spillover spas add visual and auditory appeal. These features can be integrated into the pool's circulation system for efficient operation.

### Lighting
LED underwater lights transform the pool experience, especially for evening use. Modern systems offer color-changing capabilities and smartphone control.

### Heating
Pool heaters extend the swimming season significantly. Options include gas heaters, heat pumps, and solar heating systems.

## Budget Considerations

Pool costs in Lahore vary based on size, materials, and features. AA Pool Service provides detailed quotations that break down all costs, helping you make informed decisions. We also offer phased construction options that allow you to add features over time.

Start designing your perfect pool today. Call AA Pool Service at 0328-9471436.`,
  },
  {
    slug: "importance-water-chemical-balance",
    title: "Importance of Water Chemical Balance",
    excerpt: "Understanding why maintaining proper chemical balance in your pool water is essential for safety and longevity.",
    img: chemicalImg,
    date: "January 15, 2026",
    content: `Water chemical balance is the foundation of a safe, comfortable, and durable swimming pool. Understanding the key chemical parameters and their interactions helps pool owners maintain optimal water conditions and protect their investment.

## pH Level: The Master Parameter

pH measures the acidity or alkalinity of pool water on a scale of 0-14. The ideal range for swimming pools is 7.2-7.6. At this level, chlorine works most effectively, swimmer comfort is optimal, and pool surfaces are protected from corrosion or scaling.

### Low pH (Below 7.2)
Acidic water causes eye and skin irritation, corrodes metal equipment and fixtures, etches plaster surfaces, and reduces chlorine longevity. In Lahore's water, low pH can rapidly damage pump seals and heat exchangers.

### High pH (Above 7.6)
Alkaline water reduces chlorine effectiveness by up to 75%, causes cloudy water, promotes calcium scaling on surfaces and equipment, and creates uncomfortable swimming conditions.

## Chlorine: The Primary Sanitizer

Free chlorine should be maintained at 1-3 ppm (parts per million) for residential pools. Chlorine kills bacteria, viruses, and algae, making water safe for swimming. In Lahore's high temperatures, chlorine dissipates faster, requiring more frequent adjustment.

### Chlorine Stabilizer (Cyanuric Acid)
Outdoor pools in Lahore need cyanuric acid (30-50 ppm) to protect chlorine from UV degradation. Without stabilizer, sunlight can destroy up to 90% of free chlorine within two hours.

## Total Alkalinity

Alkalinity acts as a pH buffer, preventing rapid pH fluctuations. The ideal range is 80-120 ppm. Proper alkalinity makes pH adjustment more predictable and prevents the "pH bounce" that frustrates many pool owners.

## Calcium Hardness

Calcium hardness should be maintained at 200-400 ppm. Low calcium causes water to become aggressive, dissolving calcium from plaster surfaces and grout. High calcium leads to scaling on surfaces, equipment, and waterline tiles. Lahore's water tends to be moderately hard, requiring monitoring.

## Total Dissolved Solids (TDS)

TDS measures the total concentration of dissolved substances in water. When TDS exceeds 1,500 ppm above source water levels, water quality deteriorates and chemical effectiveness decreases. High TDS requires partial water replacement.

## Testing Schedule

Test pH and chlorine at least twice weekly, and all parameters weekly. During heavy use periods or extreme temperatures (common in Lahore summers), increase testing frequency. Professional testing monthly provides the most accurate results.

## The Chemical Balance Relationship

All chemical parameters interact with each other. Adjusting one affects others. Understanding these relationships is essential:
- pH affects chlorine effectiveness
- Alkalinity buffers pH changes
- Calcium hardness interacts with pH and alkalinity
- Temperature affects chemical demand

## Professional Water Management

AA Pool Service offers professional water management services, including regular testing, chemical adjustment, and treatment programs tailored to Lahore's unique water conditions. Our technicians understand local water chemistry and adjust treatment accordingly.

Ensure your pool's water chemistry is perfect. Contact AA Pool Service at 0328-9471436.`,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  if (selectedPost) {
    return (
      <>
        <SEOHead
          title={`${selectedPost.title} | AA Pool Service Blog`}
          description={selectedPost.excerpt}
          path={`/blog/${selectedPost.slug}`}
        />
        <section className="pt-28 pb-8 bg-background">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <button onClick={() => setSelectedPost(null)} className="flex items-center gap-2 text-secondary font-heading font-medium text-sm mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </button>
            <img src={selectedPost.img} alt={selectedPost.title} className="w-full h-64 sm:h-96 object-cover card-slight-radius mb-8" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              {selectedPost.date}
            </div>
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">{selectedPost.title}</h1>
            <div className="prose prose-lg max-w-none">
              {selectedPost.content.split("\n\n").map((para, i) => {
                if (para.startsWith("## ")) {
                  return <h2 key={i} className="text-xl font-heading font-bold text-foreground mt-8 mb-4">{para.replace("## ", "")}</h2>;
                }
                if (para.startsWith("### ")) {
                  return <h3 key={i} className="text-lg font-heading font-semibold text-foreground mt-6 mb-3">{para.replace("### ", "")}</h3>;
                }
                return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>;
              })}
            </div>
            <div className="mt-12 p-6 bg-accent card-slight-radius">
              <p className="text-accent-foreground font-heading font-semibold">Need pool services? <a href="tel:03289471436" className="text-secondary hover:underline">Call AA Pool Service at 0328-9471436</a></p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Pool Care Blog | Tips & Guides - AA Pool Service Lahore"
        description="Expert swimming pool tips, maintenance guides, and industry insights from AA Pool Service. Learn how to keep your pool perfect."
        path="/blog"
      />

      <section className="gradient-primary pt-32 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Pool Care Blog</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Expert tips, guides, and insights on swimming pool construction, maintenance, and care.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollAnimation key={post.slug} delay={i * 0.05}>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full text-left bg-card card-slight-radius overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <h2 className="font-heading font-semibold text-foreground mb-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <span className="text-secondary text-sm font-heading font-medium mt-3 inline-block">Read More →</span>
                  </div>
                </button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
