import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEOHead from "@/components/SEOHead";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <SEOHead
        title="Contact AA Pool Service | Get a Free Pool Quote in Lahore"
        description="Contact AA Pool Service for swimming pool construction, maintenance & filtration in DHA Lahore. Call 0328-9471436 or fill our form for a free quote."
        path="/contact"
      />

      <section className="gradient-primary pt-32 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to start your pool project? Get in touch for a free consultation and quote.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation direction="left">
              <div className="bg-card p-6 sm:p-8 card-slight-radius shadow-sm">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="Your full name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="03XX-XXXXXXX"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                      placeholder="Tell us about your pool project..."
                      maxLength={1000}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full gradient-primary text-primary-foreground py-3.5 font-heading font-semibold text-sm flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.01] disabled:opacity-70"
                  >
                    <Send className="h-4 w-4" />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Info & Map */}
            <ScrollAnimation direction="right">
              <div className="space-y-6">
                <div className="bg-card p-6 card-slight-radius shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 gradient-primary flex items-center justify-center shrink-0">
                        <MapPin className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-heading font-medium text-sm text-foreground block">Address</span>
                        <span className="text-sm text-muted-foreground">Broadway Road Near Seijhpal, DHA Phase 8, Lahore</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 gradient-primary flex items-center justify-center shrink-0">
                        <Phone className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-heading font-medium text-sm text-foreground block">Phone</span>
                        <a href="tel:03289471436" className="text-sm text-secondary hover:underline">0328-9471436</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 gradient-primary flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-heading font-medium text-sm text-foreground block">Email</span>
                        <a href="mailto:aapoolservice282@gmail.com" className="text-sm text-secondary hover:underline">aapoolservice282@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 gradient-primary flex items-center justify-center shrink-0">
                        <Clock className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-heading font-medium text-sm text-foreground block">Business Hours</span>
                        <span className="text-sm text-muted-foreground">Monday – Saturday: 10:00 AM – 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="card-slight-radius overflow-hidden shadow-sm">
                  <iframe
                    title="AA Pool Service Location - DHA Phase 8 Lahore"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13614.0!2d74.3700!3d31.4700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919047a7a7a7a7a%3A0x0!2sDHA%20Phase%208%2C%20Lahore!5e0!3m2!1sen!2spk!4v1600000000000"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
