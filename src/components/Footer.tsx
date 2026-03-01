import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="container-max section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="AA Pool Service" className="h-12 w-auto rounded-sm bg-background p-1" />
            <span className="font-heading font-bold text-lg text-footer-foreground">
              AA Pool Service
            </span>
          </Link>
          <p className="text-sm opacity-80 leading-relaxed mb-4">
            Lahore's premier swimming pool construction, maintenance, and filtration experts. Serving DHA and surrounding areas with excellence.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=61586311246809" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-footer-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/aapools?igsh=MTF5dXp2YWl0Mjh5aw==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-footer-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com/@aapoolservices?si=4Hc7oyyZW313P9yY" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-footer-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-base mb-4 text-footer-foreground">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "Products" },
              { to: "/projects", label: "Projects" },
              { to: "/blog", label: "Blog" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-semibold text-base mb-4 text-footer-foreground">Our Services</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Pool Construction</li>
            <li>Pool Renovation</li>
            <li>Pool Maintenance</li>
            <li>Filtration Systems</li>
            <li>Equipment Installation</li>
            <li>Water Treatment</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-base mb-4 text-footer-foreground">Contact Info</h3>
          <div className="space-y-3 text-sm opacity-80">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Broadway Road Near Seijhpal, DHA Phase 8, Lahore</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:03289471436" className="hover:opacity-100 transition-opacity">0328-9471436</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:aapoolservice282@gmail.com" className="hover:opacity-100 transition-opacity">
                aapoolservice282@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              <span>10:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-footer-foreground/10">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
        <span>© 2026 AA Pool Service. All rights reserved.</span>
        <span>Professional Pool Solutions in Lahore, Pakistan</span>
      </div>
    </div>
  </footer>
);

export default Footer;
